"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading articles...
      </div>
    );
  }

  return (
    <section className="bg-[#fbf7f2] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-serif font-bold mb-4">
            All Articles
          </h1>
          <p className="text-gray-600">
            Explore our collection of thoughtfully crafted articles
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/items/${article.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {/* Image with overlay on hover */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>✍ {article.author}</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
