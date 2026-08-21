import Stripe from "stripe";

let _stripe: Stripe | null = null;
export function stripe(): Stripe | null {
  if (_stripe) return _stripe;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  _stripe = new Stripe(key, { apiVersion: "2024-06-20" });
  return _stripe;
}
export const devBillingEnabled = () =>
  !process.env.STRIPE_SECRET_KEY &&
  (process.env.ALLOW_DEV_GRANT ?? "true") !== "false" &&
  process.env.NODE_ENV !== "production";
