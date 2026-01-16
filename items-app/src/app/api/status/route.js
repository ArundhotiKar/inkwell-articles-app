import { NextResponse } from "next/server";

export async function GET(req) {
  const val = req.cookies.get("auth")?.value;
  return NextResponse.json({ auth: val === "true" });
}
