'use client';

import React, { useState, useEffect } from "react";
import ProductCard from "../components/cardKatalog";
import { useRouter } from 'next/navigation';
import '../globals.css';

interface Product {
  id_products: string;
  Nama_Product: string;
  harga: number;
  produk_img: string;
}

export default function Katalog() {
  const [products, setProducts] = useState<Product[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>(""); 
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const router = useRouter();

  const handleSelect = (product: Product) => {
    if (product && product.id_products) {
      setSearchTerm(product.Nama_Product); 
      setSearchResults([]);
      router.push(`/product/${product.id_products}`);
    } else {
      console.error("Product id is undefined", product);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tech-class.datacore.machinevision.global/items/Products_Recloth", {
          method: "GET",
          headers: {
            "Authorization": "Bearer vh073_EDr_XuWQ0PO1nm-ulUt6kUJmOh",
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result.data);

        const baseUrl = "https://tech-class.datacore.machinevision.global/assets/";
        const productsWithValidImages = result.data.map((product: any) => {
          const imageUrl = product.produk_img 
            ? `${baseUrl}${product.produk_img}` 
            : "https://via.placeholder.com/150";
          return {
            ...product,
            produk_img: imageUrl,
          };
        });

        const shuffledProducts = productsWithValidImages.sort(() => Math.random() - 0.5);
        setProducts(shuffledProducts);
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

  const getCategoryProducts = (categoryIndex: number): Product[] => {
    const categoryProducts = products.slice(categoryIndex * 4, (categoryIndex + 1) * 4);
    return categoryProducts;
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          <span className="inline-block align-middle">Discount</span>
          <svg className="inline-block align-middle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="9 6 15 12 9 18" stroke="#F5AE06"></polyline>
          </svg>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {getCategoryProducts(0).map((product) => (
            <div key={product.id_products} onClick={() => handleSelect(product)} style={{ cursor: 'pointer' }}>
              <ProductCard
                nama_product={product.Nama_Product}
                harga={product.harga}
                produk_img={product.produk_img}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          <span className="inline-block align-middle">Pakaian</span>
          <svg className="inline-block align-middle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="9 6 15 12 9 18" stroke="#F5AE06"></polyline>
          </svg>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {getCategoryProducts(1).map((product) => (
            <div key={product.id_products} onClick={() => handleSelect(product)} style={{ cursor: 'pointer' }}>
              <ProductCard
                nama_product={product.Nama_Product}
                harga={product.harga}
                produk_img={product.produk_img}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          <span className="inline-block align-middle">Aksesoris</span>
          <svg className="inline-block align-middle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="9 6 15 12 9 18" stroke="#F5AE06"></polyline>
          </svg>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {getCategoryProducts(0).map((product) => (
            <div key={product.id_products} onClick={() => handleSelect(product)} style={{ cursor: 'pointer' }}>
              <ProductCard
                nama_product={product.Nama_Product}
                harga={product.harga}
                produk_img={product.produk_img}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          <span className="inline-block align-middle">Tas</span>
          <svg className="inline-block align-middle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="9 6 15 12 9 18" stroke="#F5AE06"></polyline>
          </svg>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {getCategoryProducts(1).map((product) => (
            <div key={product.id_products} onClick={() => handleSelect(product)} style={{ cursor: 'pointer' }}>
              <ProductCard
                nama_product={product.Nama_Product}
                harga={product.harga}
                produk_img={product.produk_img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
