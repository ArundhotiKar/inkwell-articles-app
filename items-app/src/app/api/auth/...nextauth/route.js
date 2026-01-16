import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    // ✅ Google login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // ✅ Credentials login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Hardcoded login example
        if (
          credentials.email === "pallobi@gmail.com" &&
          credentials.password === "123456"
        ) {
          return { id: 1, name: "Admin", email: "pallobi@gmail.com" };
        }
        return null; // Login fail
      },
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for session
  },
  pages: {
    signIn: "/login", // Redirect to our custom login page
    error: "/login",   // Redirect on error
  },
};

const handler = NextAuth(authOptions);

// App Router requires GET and POST exports
export { handler as GET, handler as POST };
