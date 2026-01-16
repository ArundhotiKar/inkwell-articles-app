import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  // clear server-side HttpOnly auth cookie
  res.cookies.set("auth", "", { httpOnly: true, path: "/", maxAge: 0 });
  // also clear client-visible fallback cookie used in dev
  res.cookies.set("auth_client", "", { path: "/", maxAge: 0 });
  return res;
}
