import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import crypto from "node:crypto";

const secret = () =>
  new TextEncoder().encode(
    process.env.SESSION_SECRET ?? "dev-secret-change-me-min-32-chars-long!!"
  );
export const SESSION_COOKIE = "presence_session";
export const GUEST_COOKIE = "presence_guest";

export async function createSession(userId: string) {
  const token = await new SignJWT({ sub: userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret());
  cookies().set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 30 * 86400,
    path: "/",
  });
}
export async function destroySession() {
  cookies().delete(SESSION_COOKIE);
}

export async function currentUserId(): Promise<string | null> {
  const t = cookies().get(SESSION_COOKIE)?.value;
  if (!t) return null;
  try {
    return (await jwtVerify(t, secret())).payload.sub ?? null;
  } catch {
    return null;
  }
}

export function ensureGuestToken(): string {
  const c = cookies();
  const existing = c.get(GUEST_COOKIE)?.value;
  if (existing) return existing;
  const token = crypto.randomUUID();
  c.set(GUEST_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 365 * 86400,
    path: "/",
  });
  return token;
}
