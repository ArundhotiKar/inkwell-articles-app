"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function ArticleDetails() {
  const params = useParams();
  const { id } = params;
  const router = useRouter();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await fetch(`http://localhost:5000/articles/${id}`);
        if (!res.ok) throw new Error("Article not found");
        const data = await res.json();
        setArticle(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading)
    return <div className="py-20 text-center text-gray-500">Loading...</div>;

  if (error)
    return <div className="py-20 text-center text-red-500">{error}</div>;

  return (
    <article className="max-w-3xl mx-auto py-20 px-6">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 mb-6 text-orange-600 hover:text-orange-800 font-medium"
      >
        <ArrowLeft className="w-5 h-5" /> <span>Back to Articles</span>
      </button>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2 text-gray-900">
        {article.title}
      </h1>

      {/* Excerpt */}
      <p className="text-gray-500 italic mb-6">{article.excerpt}</p>

      {/* Author & Date */}
      <div className="text-sm text-gray-500 mb-6 flex flex-wrap gap-4">
        <span>✍ {article.author}</span>
        <span>📅 {article.date}</span>
      </div>

      {/* Image */}
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-80 md:h-96 object-cover rounded-2xl mb-8 shadow-md"
      />

      {/* Full Content */}
      <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg">
        {article.content}
      </p>
    </article>
  );
}
