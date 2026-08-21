export const PLAN_LIMITS = {
  guest: { weeklyAnalyses: 1 },
  free: { weeklyAnalyses: 3 },
} as const;

export const PRODUCTS = {
  QUICK_FIX: { kind: "QUICK_FIX", name: "Quick Fix", priceCents: 399, credits: 10, blurb: "Full analysis + full recommendations for up to 10 photos. One-time, no subscription.", stripePriceEnv: "STRIPE_PRICE_QUICKFIX" },
  MAKEOVER: { kind: "MAKEOVER", name: "Profile Makeover", priceCents: 999, credits: 50, blurb: "Rank up to 50 photos, ideal profile order, weak-photo detection, and your full Photo Playbook.", stripePriceEnv: "STRIPE_PRICE_MAKEOVER" },
  PRO_MONTHLY: { kind: "PRO_MONTHLY", name: "Pro (Monthly)", priceCents: 1299, credits: 0, blurb: "Unlimited analyses with full recommendations, full Camera Coach, history.", stripePriceEnv: "STRIPE_PRICE_PRO_MONTHLY" },
  PRO_YEARLY: { kind: "PRO_YEARLY", name: "Pro (Yearly)", priceCents: 7999, credits: 0, blurb: "Everything in Pro, billed yearly.", stripePriceEnv: "STRIPE_PRICE_PRO_YEARLY" },
  CREATOR_MONTHLY: { kind: "CREATOR_MONTHLY", name: "Creator", priceCents: 2499, credits: 0, blurb: "Everything in Pro, plus video analysis, thumbnail finder, frame extraction, and creator reports.", stripePriceEnv: "STRIPE_PRICE_CREATOR_MONTHLY" }
} as const;

export type ProductKind = keyof typeof PRODUCTS;
export function isSubscriptionKind(kind: ProductKind): boolean { return kind.startsWith("PRO_") || kind === "CREATOR_MONTHLY"; }
