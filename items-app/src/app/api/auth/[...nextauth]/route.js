import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Allow a temporary dev override without committing secrets.
// Set NEXTAUTH_DEV_CLIENT_ID and NEXTAUTH_DEV_CLIENT_SECRET in .env.local for quick testing.
const clientId = process.env.NEXTAUTH_DEV_CLIENT_ID || process.env.GOOGLE_CLIENT_ID || "";
const clientSecret = process.env.NEXTAUTH_DEV_CLIENT_SECRET || process.env.GOOGLE_CLIENT_SECRET || "";

if (!clientId || !clientSecret) {
  console.error(
    "NEXTAUTH: Missing Google OAuth credentials.\n" +
      "Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env.local, or use NEXTAUTH_DEV_CLIENT_ID / NEXTAUTH_DEV_CLIENT_SECRET for temporary testing."
  );
} else if (process.env.NEXTAUTH_DEV_CLIENT_ID || process.env.NEXTAUTH_DEV_CLIENT_SECRET) {
  console.warn("NEXTAUTH: Using NEXTAUTH_DEV_CLIENT_* overrides for Google OAuth (development only)");
} else {
  console.info("NEXTAUTH: Using GOOGLE_CLIENT_ID/SECRET from environment");
}

const authOptions = {
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
