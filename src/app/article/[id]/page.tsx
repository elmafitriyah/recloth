'use client';

import router from 'next/router';
import { useEffect, useState } from 'react';

async function getArticleById(articleId: string) {
    const response = await fetch(`http://localhost:3000/api/articles/${articleId}`, {
        method: "GET",
    });

    const data = await response.json();
    return data;
}

type ArticleType = {
    id: string;
    status: string;
    sort: string | null;
    user_created: string;
    date_created: string;
    user_updated: string | null;
    date_updated: string | null;
    user_deleted: string | null;
    date_deleted: string | null;
    judul_konten: string;
    isi_artikel: string;
    image: string;
    kategori: string;
    author: string;
};

export default function ArticleId({ params }: any) {
    const [article, setArticle] = useState<ArticleType | null>(null);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const goBack = () => {
        router.back();
      };

    useEffect(() => {
        const fetchArticle = async () => {
            setLoading(true);
            try {
                const unwrappedParams = await params;
                const data = await getArticleById(unwrappedParams.id);
                if (data.error) {
                    setError(data.error);
                } else {
                    setArticle(data);
                }
            } catch (err) {
                setError('An error occurred while fetching the Article');
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [params]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!article) {
        return <h1>Article not found</h1>;
    }

    return (
        <div>
            {article.image && (
                <div style={{ 
                    height: '300px', 
                    overflow: 'hidden'
                }}>
                    <img 
                        src={`https://tech-class.datacore.machinevision.global/assets/${article.image}`} 
                        alt={article.judul_konten} 
                        style={{ 
                            width: '100%', 
                            height: 'auto', 
                            display: 'block', 
                            objectFit: 'cover' 
                        }} 
                    />
                </div>
            )}
            <div 
                className="header" 
                style={{
                    marginTop: '20px',
                    backgroundColor: 'white',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    padding: '20px',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{article.judul_konten}</p>
                <p style={{ fontSize: '16px', color: 'gray' }}>Author: {article.author}</p>
            </div>
            
            <p style={{ margin: '20px 0', lineHeight: '1.5' }}>{article.isi_artikel}</p>
        </div>
    );
}