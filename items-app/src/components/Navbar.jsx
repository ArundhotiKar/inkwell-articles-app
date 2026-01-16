"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
// Note: auth cookie is HttpOnly; use server status endpoint instead of js-cookie
import { usePathname, useRouter } from "next/navigation";
import { Menu, Pencil, X } from "lucide-react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let mounted = true;

    const checkAuth = () => {
      // since cookie is readable, check it on the client for immediate UI updates
      try {
        const clientAuth = typeof document !== 'undefined' && document.cookie.includes('auth=true');
        if (clientAuth) {
          setLoggedIn(true);
          return;
        }
      } catch (e) {}

      fetch('/api/status', { cache: 'no-store' })
        .then((r) => r.json())
        .then((data) => {
          if (!mounted) return;
          setLoggedIn(Boolean(data.auth));
        })
        .catch(() => {
          if (!mounted) return;
          setLoggedIn(false);
        });
    };

    checkAuth();
    // re-check when returning to tab (helps after full redirects)
    window.addEventListener('focus', checkAuth);

    return () => {
      mounted = false;
      window.removeEventListener('focus', checkAuth);
    };
  }, [pathname]);

  const handleLogout = () => {
    // Attempt server logout then clear client fallback cookie immediately
    try {
      document.cookie = 'auth=; path=/; max-age=0';
    } catch (e) {}

    fetch('/api/logout', { method: 'POST' })
      .then(() => {
        setLoggedIn(false);
        router.push('/login');
      })
      .catch(() => {
        setLoggedIn(false);
        router.push('/login');
      });
  };

  const navLink = (href, label) => (
  <Link
    href={href}
    onClick={() => setMenuOpen(false)}
    className={`relative transition
      ${pathname === href
        ? "text-orange-600 after:absolute after:-bottom-1 after:left-0  after:w-full after:bg-orange-600"
        : "text-gray-700 hover:text-orange-600"
      }`}
  >
    {label}
  </Link>
);


  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-3xl md:text-4xl font-serif font-bold text-orange-600">
          Inkwell
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-2xl md:text-2xl font-bold">
          {navLink("/", "Home")}
          {navLink("/items", "Articles")}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4 text-lg">
          {!loggedIn && (
            <Link
              href="/login"
              className="text-gray-700 hover:text-orange-600 transition"
            >
              Sign in
            </Link>
          )}

          {loggedIn && (
            <>
              <Link
                href="/add-item"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white text-lg md:text-xl font-medium hover:bg-orange-600 transition"
              >
                <Pencil />Write
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 text-lg md:text-xl transition"
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
        <div className="md:hidden bg-white/90 border-t border-gray-200 px-6 py-4 flex flex-col gap-4 text-lg">
          {navLink("/", "Home")}
          {navLink("/items", "Articles")}

          {!loggedIn && (
            <Link
              href="/login"
              className="text-gray-700 hover:text-orange-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </Link>
          )}

          {loggedIn && (
            <>
              <Link
                href="/add-item"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
              >
                Write
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="px-4 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition"
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
