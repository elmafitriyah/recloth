'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import '../globals.css'

interface Product {
    id_products: string;
    Nama_Product: string;
}

const Navbar = () => {
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
        setSearchTerm(value);

        if (value) {
            const results = products.filter((product) =>
                product.Nama_Product &&
                typeof product.Nama_Product === 'string' &&
                product.Nama_Product.toLowerCase().includes(value.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const handleSelect = (product: Product) => {
        setSearchTerm(product.Nama_Product);
        setSearchResults([]);
        router.push(`/products/${product.id_products}`);
    };

    return (
        <nav style={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F5AE06', padding: '20px 50px', borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px', 
        margin: '0% 2.8% 0% 2.8%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="./image/logo.svg" alt='logo' width={90} height={90} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="./home" className="mr-5 " style={{marginRight: '20px', textDecoration: 'none', color: 'black' }}>Home</Link>
                <Link href="/educate" style={{ marginRight: '20px', textDecoration: 'none', color: 'black' }}>Educate</Link>
                <Link href="/shop" style={{ marginRight: '20px', textDecoration: 'none', color: 'black' }}>Shop</Link>
                <Link href="#about" style={{ marginRight: '20px', textDecoration: 'none', color: 'black' }}>About</Link>
                <Link href="#contribution" style={{ textDecoration: 'none', color: 'black' }}>Contribution</Link>

                {/* Input Pencarian */}
                <div style={{ position: 'relative' }}>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchTerm} 
                        onChange={handleSearch} 
                        style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', marginLeft: '10px' }} 
                    />
                    {searchResults.length > 0 && (
                        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: 'white', border: '1px solid #ccc', zIndex: 1000, maxHeight: '200px', overflowY: 'auto' }}>
                            {searchResults.map((product) => (
                                <div key={product.id_products} onClick={() => handleSelect(product)} style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid #ccc' }}>
                                    {product.Nama_Product}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <Link href="/cart">
                    <Image src="/image/cart.svg" alt="cart" width={30} height={30} />
                </Link>
                <Link href="/user">
                    <Image src="/image/profile.svg" alt="user" width={25} height={25} style={{ marginLeft: '50%' }} />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
