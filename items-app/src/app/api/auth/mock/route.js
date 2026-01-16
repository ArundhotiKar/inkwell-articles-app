import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  // hardcoded credentials (match README / UI expectations)
  if (email === "pallobi@gmail.com" && password === "123456") {
    const res = NextResponse.json({ success: true });

    // set HttpOnly auth cookie for 7 days
    res.cookies.set("auth", "true", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
