/**
 * Product definitions for Stripe checkout
 * These map to Stripe products and prices in your Stripe dashboard
 */

export const PRODUCTS = {
  IDENTITY_SPRINT: {
    id: "identity-sprint-7day",
    name: "7-Day Identity Engineering Sprint",
    description: "Premium brand transformation service - architect your revenue-generating identity system",
    price: 125000, // $1,250 in cents
    currency: "usd",
  },
};

export type ProductKey = keyof typeof PRODUCTS;

export function getProduct(key: ProductKey) {
  return PRODUCTS[key];
}
