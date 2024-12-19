'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 

interface User {
    username: string;
}

export default function Header() {
    const router = useRouter(); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    
    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('authToken');
            console.log('Token:', token);  
    
            if (!token) {
                setIsLoggedIn(false);
                return;
            }
    
            try {
                const response = await fetch('https://tech-class.datacore.machinevision.global/items/User_Recloth', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer vh073_EDr_XuWQ0PO1nm-ulUt6kUJmOh',
                        "Content-Type": "application/json"
                    },
                });
    
                if (response.ok) {
                    const data = await response.json();
                    setUsername(data.username);
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                setIsLoggedIn(false);
            }
        };
    
        fetchUserData();
    }, []);
    

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', borderRadius: '5px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%' }}>
                <button onClick={() => router.back()} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <Image src="/image/backLeft.svg" alt="back" width={22} height={22} style={{ marginLeft: '3%', gap: '11px' }} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                    <Image src="/image/profile.svg" alt="user" width={40} height={40} style={{ marginLeft: '20px' }} />
                    <span style={{ fontSize: '29px', fontWeight: 'bold', color: '#333' }}>
                        {isLoggedIn ? `Welcome, ${username}` : 'Guest'}
                    </span>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '22px', marginRight: '3%' }}>
                <Image
                    src="/image/cart.svg"
                    alt="cart"
                    width={30}
                    height={30}
                    style={{ cursor: 'pointer' }}
                    onClick={() => router.push('/cart')}
                />

                {/* Tombol Settings */}
                <Image
                    src="/image/setting.svg"
                    alt="settings"
                    width={30}
                    height={30}
                    style={{ cursor: 'pointer', marginRight: '5%' }}
                />
            </div>
        </div>
    );
}
