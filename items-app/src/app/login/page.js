"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      Cookies.set("auth", "true", { expires: 1, path: "/" });
      router.push("/items");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-black text-white p-2">Login</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>

      <hr className="my-4" />

      {/* ✅ Google Login Button */}
      <button
        className="w-full bg-blue-600 text-white p-2"
        onClick={() => signIn("google")}
      >
        Login with Google
      </button>
    </div>
  );
}
