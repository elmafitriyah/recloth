'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface User {
    Username: string;
}

const Navbar = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('https://tech-class.datacore.machinevision.global/items/User_Recloth', {
                    method: 'GET',
                    headers: {
                        "Authorization": "Bearer vh073_EDr_XuWQ0PO1nm-ulUt6kUJmOh",
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const result = await response.json();
                console.log(result); 
                                
                const userData = result.data ? result.data[0] : null;
                setUser(userData as User); 
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message); 
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false); 
            }
        };

        fetchUserData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#F5AE06',
                padding: '20px 50px',
                borderBottomLeftRadius: '40px',
                borderBottomRightRadius: '40px',
                paddingBottom: '2%',
                margin: '0% 2.8% 0% 2.8%',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', paddingTop: '0.4%' }}>
                <Link href="/">
                    <Image src="/image/logo.svg" alt="logo" width={90} height={90} />
                </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <Link href="/cart">
                    <Image src="/image/cart.svg" alt="cart" width={30} height={30} />
                </Link>
                <h1>|</h1>
                <Link href="/user" style={{ display: 'flex', alignItems: 'center' }}>
                    <Image src="/image/profile.svg" alt="profile" width={25} height={25} />
                    <h1 style={{ fontFamily: 'Jaldi', marginLeft: '10px', fontWeight: 400 }}>
                        {user ? user.Username : 'Guest'}
                    </h1>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
