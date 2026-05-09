import Stripe from "stripe";
import { updateOrderStatus, createOrder } from "./db";
import { PRODUCTS } from "./products";
import type { Request, Response } from "express";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function handleStripeWebhook(req: Request, res: Response) {
  const sig = req.headers["stripe-signature"] as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err: any) {
    console.error(`[Webhook] Signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle test events
  if (event.id.startsWith("evt_test_")) {
    console.log("[Webhook] Test event detected, returning verification response");
    return res.json({ verified: true });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log(`[Webhook] Checkout session completed: ${session.id}`);

        if (session.payment_intent && typeof session.payment_intent === "string") {
          const paymentIntentId = session.payment_intent;
          const userId = session.client_reference_id ? parseInt(session.client_reference_id) : null;
          const productKey = (session.metadata?.productKey as keyof typeof PRODUCTS) || "IDENTITY_SPRINT";

          if (userId) {
            const product = PRODUCTS[productKey];
            if (product) {
              // Create order record
              await createOrder({
                userId,
                stripePaymentIntentId: paymentIntentId,
                amount: product.price,
                currency: product.currency,
                status: "succeeded",
                productName: product.name,
                description: product.description,
              });
              console.log(`[Webhook] Order created for user ${userId}`);
            }
          }
        }
        break;
      }

      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log(`[Webhook] Payment intent succeeded: ${paymentIntent.id}`);
        await updateOrderStatus(paymentIntent.id, "succeeded");
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log(`[Webhook] Payment intent failed: ${paymentIntent.id}`);
        await updateOrderStatus(paymentIntent.id, "failed");
        break;
      }

      case "charge.refunded": {
        const charge = event.data.object as Stripe.Charge;
        console.log(`[Webhook] Charge refunded: ${charge.id}`);
        if (charge.payment_intent && typeof charge.payment_intent === "string") {
          await updateOrderStatus(charge.payment_intent, "canceled");
        }
        break;
      }

      default:
        console.log(`[Webhook] Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error: any) {
    console.error(`[Webhook] Error processing event: ${error.message}`);
    res.status(500).json({ error: "Webhook processing failed" });
  }
}
