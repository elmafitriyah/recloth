'use client';

import React, { useState, useEffect } from "react";
import Card from "../components/cardKonten";
import { useRouter } from "next/navigation";
import '../globals.css';

interface Article {
  id: number;
  judul_konten: string;
  image: string;
}

export default function Artikel() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const [articlesByCategory, setArticlesByCategory] = useState<Record<string, Article[]>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const categories: string[] = ["Artikel Terbaru", "Artikel Luar Negeri", "Artikel Kami"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allArticles: Article[] = [];
        const fetchPromises = categories.map((category) =>
          fetch(
            `https://tech-class.datacore.machinevision.global/items/Edukasi_Recloth?kategori=${category}`,
            {
              method: "GET",
              headers: {
                Authorization: "Bearer vh073_EDr_XuWQ0PO1nm-ulUt6kUJmOh",
                "Content-Type": "application/json",
              },
            }
          ).then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
        );

        const results = await Promise.all(fetchPromises);

        const baseUrl = "https://tech-class.datacore.machinevision.global/assets/";

        results.forEach((result) => {
          const articles = result.data.map((article: any) => ({
            id: article.id,
            judul_konten: article.judul_konten,
            image: article.image ? `${baseUrl}${article.image}` : "https://via.placeholder.com/150",
          }));
          allArticles.push(...articles);
        });

        for (let i = allArticles.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allArticles[i], allArticles[j]] = [allArticles[j], allArticles[i]];
        }

        const groupedArticles: Record<string, Article[]> = {};
        const usedArticleIds: Set<number> = new Set();

        categories.forEach((category) => {
          groupedArticles[category] = [];
          for (const article of allArticles) {
            if (!usedArticleIds.has(article.id)) {
              groupedArticles[category].push(article);
              usedArticleIds.add(article.id);
            }
            if (groupedArticles[category].length === 3) break; 
          }
        });

        setArticlesByCategory(groupedArticles);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div id="konten" className="konten" style={{ backgroundColor: '#F5AE06', width: '100%', padding: '20px' }}>
      <button
        onClick={goBack}
        style={{ background: 'transparent', border: 'none', fontSize: '40px', cursor: 'pointer', color: '#000' }}
      >
        ‹
      </button>
      {categories.map((category) => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <h2 className="text-left" style={{ fontSize: '24px', fontWeight: 600 }}>{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {articlesByCategory[category] && articlesByCategory[category].length > 0 ? (
              articlesByCategory[category].map((article) => (
                <Card key={article.id} judul_konten={article.judul_konten} image={article.image} />
              ))
            ) : (
              <p>Tidak ada artikel untuk kategori ini</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}