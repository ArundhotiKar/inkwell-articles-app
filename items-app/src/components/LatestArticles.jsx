"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function LatestArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("https://article-blog-server-eight.vercel.app/articles");
        const data = await res.json();

        // Sort by date descending (latest first) and take max 6
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setArticles(sorted.slice(0, 6));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading)
    return <div className="py-20 text-center text-gray-500">Loading...</div>;

  if (!articles.length)
    return <div className="py-20 text-center text-gray-500">No articles found</div>;

  return (
    <section className="bg-[#fbf7f2] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-gray-900 text-center">
          Latest Articles
        </h2>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/items/${article.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={article.image}
                alt={article.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex justify-between text-xs text-gray-500">
                  <span>✍ {article.author}</span>
                  <span>📅 {article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
