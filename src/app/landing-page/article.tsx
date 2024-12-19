'use client';

import React, { useState, useEffect } from "react";
import Card from "../components/cardKonten"; 
import '../globals.css';
import Link from "next/link";

interface Article {
  id: string;
  judul_konten: string;
  image: string | null;
}

export default function Article() {
  const [articles, setArticles] = useState<Article[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tech-class.datacore.machinevision.global/items/Edukasi_Recloth", {
          method: "GET",
          headers: {
            "Authorization": "Bearer vh073_EDr_XuWQ0PO1nm-ulUt6kUJmOh",
            "Content-Type": "application/json"
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result.data);

        const baseUrl = "https://tech-class.datacore.machinevision.global/assets/";

        const articlesWithValidImages = result.data.slice(0, 6).map((article: any) => {
          const imageUrl = article.image 
            ? `${baseUrl}${article.image}` : "https://via.placeholder.com/150";
          return {
            ...article,
            image: imageUrl,
          };
        });

        setArticles(articlesWithValidImages);
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
    <div id="konten" className="konten" style={{ backgroundColor: '#F5AE06', width: '100%', height: '820px' }}>
      <div className="text-center" style={{ fontFamily: 'Jaldi', fontSize: '28px', fontWeight: 700, paddingTop: '3%', paddingBottom: '2%' }}>
        <h1>Jelajahi konten limbah <br /> pakaian paling populer</h1>             
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ margin: '0% 5% 5% 5%' }}>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <Link key={index} href={`/article/${article.id}`} passHref>
              <Card
                judul_konten={article.judul_konten}
                image={article.image}
              />
            </Link>
          ))
        ) : (
          <p>Tidak ada artikel terbaru</p>
        )}
      </div>
    </div>
  );
}
