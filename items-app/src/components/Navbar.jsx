"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Pencil, X } from "lucide-react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const auth = Cookies.get("auth");
    setLoggedIn(auth === "true");
  }, [pathname]);

  const handleLogout = () => {
    Cookies.remove("auth", { path: "/" });
    setLoggedIn(false);
    router.push("/login");
  };

  const navLink = (href, label) => (
    <Link
      href={href}
      onClick={() => setMenuOpen(false)}
      className={`relative text-sm font-medium transition
        ${
          pathname === href
            ? "text-orange-600 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-orange-600"
            : "text-gray-700 hover:text-orange-600"
        }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-serif font-bold text-orange-600">
          Inkwell
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLink("/", "Home")}
          {navLink("/items", "Articles")}
          
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {!loggedIn && (
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition"
            >
              Sign in
            </Link>
          )}

          {loggedIn && (
            <>
              <Link
                href="/add-item"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition"
              >
                <Pencil/>Write
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 hover:text-orange-600 transition"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          {navLink("/", "Home")}
          {navLink("/items", "Articles")}
          

          {!loggedIn && (
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-orange-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </Link>
          )}

          {loggedIn && (
            <>
              <Link
                href="/add-item"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition"
              >
                Write
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
