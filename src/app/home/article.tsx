'use client';

import React, { useState, useEffect } from "react";
import Card from "../components/cardKonten";
import Link from 'next/link';
import '../globals.css';

interface Article {
    id: string;
    judul_konten: string;
    image: string | null;
    kategori: string | null;
}

export default function Artikel() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>('terbaru'); 

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

                const articlesWithValidImages: Article[] = result.data.slice(0, 6).map((article: any) => {
                    const imageUrl = article.image 
                        ? `${baseUrl}${article.image}` 
                        : "https://via.placeholder.com/150";
                    return {
                        ...article,
                        image: imageUrl,
                    };
                });

                setArticles(articlesWithValidImages);
                setFilteredArticles(articlesWithValidImages);

            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filterArticles = (category: string) => {
        setActiveCategory(category);

        const filtered = articles.filter(
            (article) =>
                article.kategori &&
                article.kategori.toLowerCase().includes(category.toLowerCase())
        );

        setFilteredArticles(filtered);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div id="konten" className="konten" style={{ width: '100%', height: '820px' }}>
            <div className="filter" style={{ margin: '3% 0% 3% 5%', gap: '5%' }}>
                <button
                    style={{
                        backgroundColor: activeCategory === 'terbaru' ? '#F5AE06' : 'white',
                        color: activeCategory === 'terbaru' ? 'black' : 'gray',
                        padding: '0.7%',
                        borderRadius: '10px',
                        border: '1px solid black',
                        width: '13%',
                        marginRight: '10px'
                    }}
                    onClick={() => filterArticles('terbaru')}
                >
                    Artikel Terbaru
                </button>
                <button
                    style={{
                        backgroundColor: activeCategory === 'luar negeri' ? '#F5AE06' : 'white',
                        color: activeCategory === 'luar negeri' ? 'black' : 'gray',
                        padding: '0.7%',
                        borderRadius: '10px',
                        border: '1px solid black',
                        width: '13%',
                        marginRight: '10px'
                    }}
                    onClick={() => filterArticles('luar negeri')}
                >
                    Artikel Luar Negeri
                </button>
                <button
                    style={{
                        backgroundColor: activeCategory === 'kami' ? '#F5AE06' : 'white',
                        color: activeCategory === 'kami' ? 'black' : 'gray',
                        padding: '0.7%',
                        borderRadius: '10px',
                        border: '1px solid black',
                        width: '13%',
                        marginRight: '10px'
                    }}
                    onClick={() => filterArticles('kami')}
                >
                    Artikel Kami
                </button>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                style={{ margin: '0% 5% 5% 5%' }}
            >
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article) => (
                        <Link key={article.id} href={`/article/${article.id}`} passHref>
                            <Card
                                judul_konten={article.judul_konten}
                                image={article.image || "https://via.placeholder.com/150"}
                            />
                        </Link>
                    ))
                ) : (
                    <p>Tidak ada artikel dengan kategori ini</p>
                )}
            </div>
        </div>
    );
}
