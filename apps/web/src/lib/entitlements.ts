import { PLAN_LIMITS } from "@presence/config";

export type AnalysisMode = "full" | "score_only";

export interface EntitlementInput {
  isPro: boolean;
  credits: number;
  weeklyUsed: number;
  weeklyLimit: number;
}

export function resolveAnalysisMode(
  i: EntitlementInput
):
  | { ok: true; mode: AnalysisMode; consumeCredit: boolean }
  | { ok: false } {
  if (i.isPro) return { ok: true, mode: "full", consumeCredit: false };
  if (i.credits > 0) return { ok: true, mode: "full", consumeCredit: true };
  if (i.weeklyUsed < i.weeklyLimit)
    return { ok: true, mode: "score_only", consumeCredit: false };
  return { ok: false };
}

export function weeklyLimitFor(user: boolean): number {
  return user
    ? PLAN_LIMITS.free.weeklyAnalyses
    : PLAN_LIMITS.guest.weeklyAnalyses;
}
