import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === "admin@example.com" && password === "123456") {
    const res = NextResponse.json({ success: true });
    res.cookies.set("auth", "true", { httpOnly: true });
    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
