import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import Stripe from "stripe";
import { getOrCreateStripeCustomer, createOrder, getUserOrders } from "./db";
import { PRODUCTS } from "./products";

const stripeApiKey = process.env.STRIPE_SECRET_KEY;
if (!stripeApiKey) {
  console.warn("[Stripe] STRIPE_SECRET_KEY not configured");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  payment: router({
    createCheckoutSession: protectedProcedure
      .input(z.object({
        productKey: z.enum(["IDENTITY_SPRINT"]),
      }))
      .mutation(async ({ ctx, input }) => {
        const product = PRODUCTS[input.productKey];
        if (!product) {
          throw new Error("Product not found");
        }

        const user = ctx.user;
        if (!user) {
          throw new Error("User not authenticated");
        }

        // Get or create Stripe customer
        let stripeCustomer = await getOrCreateStripeCustomer(user.id, user.email || `user-${user.id}@samarchitect.local`);
        
        if (!stripeCustomer) {
          // Create new Stripe customer if needed
          const newCustomer = await stripe.customers.create({
            email: user.email || undefined,
            name: user.name || undefined,
            metadata: {
              userId: user.id.toString(),
            },
          });
          stripeCustomer = await getOrCreateStripeCustomer(user.id, newCustomer.id);
        }

        // Create checkout session
        const session = await stripe.checkout.sessions.create({
          customer: stripeCustomer.stripeCustomerId,
          payment_method_types: ["card"],
          line_items: [
            {
              price_data: {
                currency: product.currency,
                product_data: {
                  name: product.name,
                  description: product.description,
                },
                unit_amount: product.price,
              },
              quantity: 1,
            },
          ],
          mode: "payment",
          success_url: `${ctx.req.headers.origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${ctx.req.headers.origin}/?canceled=true`,
          client_reference_id: user.id.toString(),
          metadata: {
            userId: user.id.toString(),
            productKey: input.productKey,
          },
        });

        return {
          checkoutUrl: session.url,
        };
      }),

    getOrders: protectedProcedure.query(async ({ ctx }) => {
      const user = ctx.user;
      if (!user) return [];
      return getUserOrders(user.id);
    }),
  }),
});

export type AppRouter = typeof appRouter;
