'use client';

import Image from "next/image";
import React, { useState } from 'react';
import Link from 'next/link';

export default function LogIn() {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className="signUp" style={{ backgroundImage: `url('/image/bgLogin.jpg')`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
                className="form-logIn"
                style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    width: '40%',
                    height: '60%',
                    borderRadius: '20px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <form
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <h1 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold' }}>Log In</h1>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        style={{
                            width: '169%',
                            padding: '10px',
                            marginTop: '6%',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                        }}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                        style={{
                            width: '169%',
                            padding: '10px',
                            marginTop: '5%',
                            marginLeft: '3%',
                            marginRight: '3%',
                            borderRadius: '4px',
                            border: '1px solid #ccc',
                        }}
                    />
                    <Link href="/home">
                        <button
                            type="button"
                            style={{
                                width: '680%',
                                padding: '10px',
                                marginTop: '15%',
                                marginLeft: '-290%',
                                marginRight: '3%',
                                borderRadius: '10px',
                                border: 'none',
                                backgroundColor: '#F5AE06',
                                color: 'black',
                                fontSize: '16px',
                            }}
                        >
                            Log In
                        </button>
                    </Link>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
                        <h6 style={{ margin: '0' }}>Don't have an account yet?</h6>
                        <Link href="/signup">
                            <p
                                style={{
                                    margin: '0',
                                    marginLeft: '5px',
                                    color: isHovered ? '#F5AE06' : 'black',
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                Sign Up
                            </p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
