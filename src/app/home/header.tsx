'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';

interface Product {
    id_products: string;
    Nama_Product: string;
}

export default function Header() {
    const [products, setProducts] = useState<Product[]>([]); 
    const [searchTerm, setSearchTerm] = useState<string>(''); 
    const [searchResults, setSearchResults] = useState<Product[]>([]); 
    const router = useRouter();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    'https://tech-class.datacore.machinevision.global/items/Products_Recloth',
                    {
                        method: 'GET',
                        headers: {
                            'Authorization': 'Bearer vh073_EDr_XuWQ0PO1nm-ulUt6kUJmOh',
                            'Content-Type': 'application/json',
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Fetched Data:', data);

                if (data && Array.isArray(data.data)) {
                    setProducts(data.data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log('Search term:', value); 
        setSearchTerm(value);

        if (value) {
            const results = products.filter(
                (product) =>
                    product.Nama_Product &&
                    typeof product.Nama_Product === 'string' &&
                    product.Nama_Product.toLowerCase().includes(value.toLowerCase())
            );
            console.log('Search results:', results);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const handleSelect = (product: Product) => {
        setSearchTerm(product.Nama_Product);
        setSearchResults([]);
        router.push(`/product/${product.id_products}`); 
    };

    return (
        <div
            className="space-between inline-flex gap-96 justify-center"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '96px',
                margin: '3% 5%',
            }}
        >
            <input
                type="text"
                placeholder="Search..."
                style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid black',
                    width: '50%',
                    backgroundColor: '#F5AE06',
                }}
                value={searchTerm}
                onChange={handleSearch}
            />
            {searchResults.length > 0 && (
                <div
                    style={{
                        position: 'absolute',
                        top: '28%',
                        left: 70,
                        right: 630,
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        zIndex: 0,
                        maxHeight: '200px',
                        overflowY: 'auto',
                    }}
                >
                    {searchResults.map((product, index) => (
                        <div
                            key={product.id_products || index}
                            onClick={() => handleSelect(product)}
                            style={{
                                padding: '10px',
                                cursor: 'pointer',
                                borderBottom: '1px solid #ccc',
                            }}
                        >
                            {product.Nama_Product}
                        </div>
                    ))}
                </div>
            )}
            <div
                className="space-between inline-flex gap-80"
                style={{
                    width: '40%',
                    border: '1px solid black',
                    padding: '1.3%',
                    borderRadius: '3px',
                }}
            >
                <h2 style={{ display: 'flex', gap: 15 }}>
                    <Image src="./image/wallet.svg" width={20} height={20} alt="wallet" />
                    Saldo
                </h2>
                <h2>90.000</h2>
            </div>
        </div>
    );
}
