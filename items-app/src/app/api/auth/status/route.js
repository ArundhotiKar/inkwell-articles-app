import { NextResponse } from "next/server";

export async function GET(request) {
  const auth = request.cookies.get("auth");
  return NextResponse.json({ auth: auth === "true" });
}
