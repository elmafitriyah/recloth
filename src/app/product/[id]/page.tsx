'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';;

async function getProductById(productId: string) {
    const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
        method: 'GET',
    });

    const data = await response.json();
    return data;
}

type Product = {
    id_products: string;
    Nama_Product: string;
    Deskripsi_Products: string;
    produk_img: string;
    harga: string;
    warna_tersedia: string[];
};

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);

    const router = useRouter();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const unwrappedParams = await params; 
                const data = await getProductById(unwrappedParams.id);

                if (data.error) {
                    setError(data.error);
                } else {
                    setProduct(data);
                }
            } catch (err) {
                setError('Error fetching product');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [params]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!product) return <h1>Product not found</h1>;

    return (
        <div className="flex flex-col md:flex-row p-5 gap-5" style={{ marginTop: '2%' }}>
            <div className="flex-1">
            <button onClick={() => router.back()} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex',flexDirection: 'row',gap: '8px', alignItems: 'center' }}>
                <Image src="/image/backLeft.svg" alt="back" width={22} height={22} style={{ marginLeft: '3%', gap: '11px' }} />
                <h1 style={{fontSize:'20px',fontWeight:'bold', width:'100%'}}>{product.Nama_Product}</h1>
            </button>

                {product.produk_img && (
                    <img
                        src={`https://tech-class.datacore.machinevision.global/assets/${product.produk_img}`}
                        alt={product.Nama_Product}
                        className="rounded-lg shadow-lg"
                        width="350"
                        height="350"
                        style={{ marginLeft: '15%',  }}
                    />
                )}
            </div>

            <div className="flex-1 space-y-4">
                <p className="text-gray-600"> {product.Deskripsi_Products}</p>
                <p className="text-2xl text-red-500 font-semibold">Rp {product.harga}.000</p>

                <div className="flex items-center space-x-4">
                    <div>
                        <label htmlFor="quantity" className="block font-medium">
                            Quantity:
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            value={quantity}
                            min="1"
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="w-16 p-1 border border-gray-300 rounded"
                        />
                    </div>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                        Add to Cart
                    </button>
                </div>

                <div className="mt-5">
                    <h3 className="font-semibold mb-3">Ulasan</h3>
                    <div className="space-y-2">
                        <div className="border p-3 rounded shadow">
                            <p className="text-sm">Produk ini sangat bagus dan kualitasnya baik!</p>
                            <span className="text-yellow-400">★★★★☆</span>
                        </div>
                        <div className="border p-3 rounded shadow">
                            <p className="text-sm">Cocok untuk sehari-hari, harganya juga terjangkau.</p>
                            <span className="text-yellow-400">★★★★★</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
