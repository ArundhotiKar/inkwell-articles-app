import { NextResponse } from "next/server";

export function middleware(req) {
  const auth = req.cookies.get("auth")?.value;
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/add-item");

  if (isProtectedRoute && !auth) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("from", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-item", "/add-item/:path*"],
};
