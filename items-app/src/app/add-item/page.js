"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import { ArrowLeft } from "lucide-react";

export default function AddArticlePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    image: "",
    date: new Date().toISOString().split("T")[0],
  });

  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetch("/api/status")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        if (!data.auth) {
          router.push("/login");
        } else {
          setCheckingAuth(false);
        }
      })
      .catch(() => router.push("/login"));
    return () => (mounted = false);
  }, [router]);

  if (checkingAuth) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://article-blog-server-eight.vercel.app/articles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const newArticle = await res.json();
        toast.success("Article added successfully!"); // ✅ toast

        // wait a moment before redirect
        setTimeout(() => {
          router.push("/items");
        }, 1500);
      } else {
        toast.error("Failed to add article");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error adding article");
    }
  };

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 mb-6 text-orange-600 hover:text-orange-800 font-medium"
      >
        <ArrowLeft className="w-5 h-5" /> <span>Back</span>
      </button>

      <h1 className="text-3xl font-bold mb-6">Add New Article</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="text"
          name="excerpt"
          placeholder="Excerpt"
          value={form.excerpt}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          rows={6}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
        >
          Add Article
        </button>
      </form>
    </section>
  );
}
