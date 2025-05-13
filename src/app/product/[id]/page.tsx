'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LikeButton from '../../components/LikeButton/LikeButton';

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
    const [liked, setLiked] = useState(false);

    const [review, setReview] = useState('');

    const handleSubmit = () => {
        alert('Ulasan Anda terkirim');
        setReview('');
    };

    const handleLike = () => {
        setLiked(!liked); 
    };

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
        <div className="flex flex-col" style={{margin: '4% 3% 0% 3%'}}>
            <div className="relative flex-1 flex items-center justify-center">
                <button onClick={() => router.back()} style={{ position: 'absolute', top: '16px', left: '16px', background: 'none', border: 'none', cursor: 'pointer', display: 'inline-flex', flexDirection: 'row', gap: '8px', alignItems: 'center', marginTop:"-1.2%"}}>
                <Image src="/image/backLeft.svg" alt="back" width={22} height={22} style={{ marginLeft: '3%', gap: '11px' }}/>
                </button>
                {product.produk_img && (
                    <img
                    src={`https://tech-class.datacore.machinevision.global/assets/${product.produk_img}`}
                    alt={product.Nama_Product}
                    className="shadow-lg"
                    width="300"
                    height="300"/>
                )}
            </div>

            <div className="flex-1 space-y-4" style={{margin: "4% 5% 0% 5%"}}>
            <h1 style={{fontSize:'30px',fontWeight:'400', width:'100%'}}>{product.Nama_Product}</h1>
            <h2 style={{fontSize:'40px',fontWeight:'400', width:'100%', marginTop: "-0.5%"}}>{product.harga}.000</h2>
            <hr style={{border: "1px solid #000"}}/>
            <div className="flex flex-col md:flex-row items-start justify-between space-x-0 md:space-x-4 mt-4">
                {/* Kolom Kiri: Deskripsi */}
                <div className="deskripsi w-full md:w-[65%]">
                    <h1 className="text-xl font-bold mt-2" style={{fontSize: '28px', marginBottom: '2%'}}>Deskripsi</h1>
                    <ul className="list-disc pl-6 mb-4" style={{ textAlign: "justify" }}>
                        {product.Deskripsi_Products?.split("\n").map((item: string, index: number) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                </div>

                {/* Kolom Kanan: Quantity dan Tombol */}
                <div className="flex flex-col items-start space-y-4 w-full md:w-[35%] shadow-inner p-4" style={{ borderRadius: '5%' }}>
                    <div className="flex flex-col items-center justify-center w-full">
                        <label htmlFor="quantity" className="block font-medium">
                            <h1 className="text-xl font-normal mt-5">{product.Nama_Product}</h1>
                        </label>
                        <label htmlFor="quantity" className="block font-medium">
                            <h1 className="text-lg font-normal mt-5">Stok : 50</h1>
                        </label>

                        <div className="flex items-center justify-between border border-black rounded-full p-1 w-fit mt-5">
                            {/* Tombol "-" */}
                            <button
                                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                className="px-4 py-2 text-black font-bold"
                            >
                                -
                            </button>

                            {/* Input Quantity */}
                            <input
                                type="number"
                                value={quantity}
                                min="1"
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="w-12 text-center border-none focus:ring-0"
                            />

                            {/* Tombol "+" */}
                            <button
                                onClick={() => setQuantity((prev) => prev + 1)}
                                className="px-4 py-2 text-black font-bold"
                            >
                                +
                            </button>
                        </div>

                        <div className="flex items-center justify-center mt-8 space-x-4">
                            <LikeButton />
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="my-2">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16.5 21a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"/>
                            </svg>
                            <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600">
                                Beli Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ padding: '20px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Ulasan</h2>

                <div style={{ border: '1px solid black', borderRadius: '8px', padding: '10px', marginBottom: '10px', display: 'flex', flexDirection: 'column', height: '150px',  width: '80%', marginTop: '3%'  }}>
                    <div style={{ flex: '1'}}>
                        <h3 style={{ fontWeight: 'bold' }}>Tarisa</h3>
                        <p>Paket sampai dengan cepat dan aman! Tote bag jeansnya sesuai dengan gambar, bahananya tebal dan kokoh. Aku suka banget desainnya yang simpel tapi tetap stylish. Terima kasih banyak!</p>
                    </div>
                    <div className="star" style={{ display: 'inline-flex', marginTop: 'auto', alignSelf: 'flex-end' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F5AE06" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F5AE06" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F5AE06" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F5AE06" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F5AE06" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                    </div>
                </div>

                <div style={{ border: '1px solid black', borderRadius: '8px', padding: '10px', marginBottom: '10px', display: 'flex', flexDirection: 'column', height: '150px',  width: '80%', marginTop: '3%'  }}>
                    <div style={{ flex: '1'}}>
                        <h3 style={{ fontWeight: 'bold' }}>Elma</h3>
                        <p>Aku baru pertama kali belanja di sini dan sangat puas dengan pelayanannya. Tote bag jeansnya berkualitas bagus, jahitannya rapi, dan warnanya bagus banget!</p>
                    </div>
                    <div className="star" style={{ display: 'inline-flex', marginTop: 'auto', alignSelf: 'flex-end' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F5AE06" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F5AE06" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F5AE06" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F5AE06" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#F5AE06" d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"/></svg>
                    </div>
                </div>

                <div style={{ border: '1px solid black', borderRadius: '8px', padding: '10px', marginBottom: '10px', marginTop: '3%', width: '80%' }}>
                    <h3 style={{ fontWeight: 'bold' }}>Ketik Ulasanmu Disini</h3>
                    <textarea placeholder="Tulis ulasan Anda di sini..." style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
                    <button style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#F5AE06', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={handleSubmit}>
                        Kirim
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}
