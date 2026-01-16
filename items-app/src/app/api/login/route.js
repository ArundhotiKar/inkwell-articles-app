import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (email === "pallobi@gmail.com" && password === "123456") {
      const res = NextResponse.json({ ok: true });
      // set readable cookie (not HttpOnly) so client can read it easily
      res.cookies.set("auth", "true", {
        httpOnly: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
      return res;
    }

    return NextResponse.json({ ok: false }, { status: 401 });
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
