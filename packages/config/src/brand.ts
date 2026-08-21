export const brand = {
  name: process.env.NEXT_PUBLIC_BRAND_NAME ?? "PRESENCE",
  tagline: "Look better on camera.",
  promise: "Computer vision that translates technical photo analysis into plain, useful advice.",
  scoreName: `${process.env.NEXT_PUBLIC_BRAND_NAME ?? "PRESENCE"} SCORE`,
  supportEmail: "support@presence.app",
  domain: "presence.app",
} as const;
