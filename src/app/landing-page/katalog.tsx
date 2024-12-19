'use client';

import React, { useState, useEffect } from "react";
import ProductCard from "../components/cardKatalog"; 
import { useRouter } from "next/navigation"; 
import '../globals.css';

interface Product {
    id_products: string;
    Nama_Product: string;
    harga: string | number;
    produk_img: string | null;
}

export default function Katalog() {
    const [products, setProducts] = useState<Product[]>([]); 
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<string | null>(null); 
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://tech-class.datacore.machinevision.global/items/Products_Recloth", {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer vh073_EDr_XuWQ0PO1nm-ulUt6kUJmOh",
                        "Content-Type": "application/json"
                    }
                });
        
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
        
                const textResponse = await response.text(); 
                console.log("Raw Response:", textResponse); 
        
                const result = textResponse ? JSON.parse(textResponse) : {};
                console.log("Parsed Response:", result);
        
                
                const baseUrl = "https://tech-class.datacore.machinevision.global/assets/";
                const productsWithValidImages = result.data.map((product: any) => {
                    const imageUrl = product.produk_img
                        ? `${baseUrl}${product.produk_img}`
                        : "https://via.placeholder.com/150";
                    return { ...product, produk_img: imageUrl };
                });
        
                setProducts(productsWithValidImages);
            } catch (err: any) {
                setError(`Error: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    const handleSelect = (product: Product) => {
        router.push(`/product/${product.id_products}`);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">
                    <span className="inline-block align-middle">Katalog Produk</span>
                    <svg
                        className="inline-block align-middle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"></polyline></svg>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.length > 0 ? (
                        products.slice(0, 8).map((product, index) => (
                            <div key={index} onClick={() => handleSelect(product)} style={{ cursor: 'pointer' }}>
                                <ProductCard
                                    nama_product={product.Nama_Product}
                                    harga={product.harga}
                                    produk_img={product.produk_img}
                                />
                            </div>
                        ))
                    ) : (
                        <p>Tidak ada produk tersedia</p>
                    )}
                </div>
            </div>
        </>
    );
}
