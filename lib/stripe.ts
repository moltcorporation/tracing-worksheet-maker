import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-03-25.dahlia",
      typescript: true,
    });
  }
  return _stripe;
}

export const PLANS = {
  monthly: {
    priceId: process.env.STRIPE_MONTHLY_PRICE_ID!,
    price: 4.99,
    interval: "month" as const,
    label: "$4.99/month",
  },
  yearly: {
    priceId: process.env.STRIPE_YEARLY_PRICE_ID!,
    price: 39,
    interval: "year" as const,
    label: "$39/year",
    savings: "Save 35%",
  },
};
