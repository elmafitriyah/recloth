'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../globals.css';

const Content: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className='content' style={{ display: 'flex', width: '100%'}}>
                <div className='Left' style={{ width: '50%' }}>
                    <Image
                        src="/image/vector1.svg"
                        alt="vector"
                        width={145}
                        height={145}
                        style={{ marginTop: '-5%' }}
                    />
                    <div className='text' style={{ marginTop: '-40%', marginLeft: '30%' }}>
                        <h1 style={{ fontSize: '85px', fontFamily: 'Jaldi', fontWeight: 700 }}>MANAGE</h1>
                        <h1 style={{ fontSize: '85px', fontFamily: 'Jaldi', fontWeight: 700, marginTop: '-8%' }}>USED</h1>
                        <h1 style={{ fontSize: '85px', fontFamily: 'Jaldi', fontWeight: 700, marginTop: '-8%' }}>CLOTHES</h1>
                        <h6 style={{ fontSize: '19px', fontFamily: 'Jaldi', fontWeight: 400 }}>Recycle your clothes to reduce clothing waste</h6>
                        <div className='button' style={{ marginTop: '5%' }}>
                            <Link href="/signup">
                                <button style={{ backgroundColor: '#F5AE06', padding: '8px 31px', borderRadius: '8px', border: '1px solid black', marginRight: '3%' }}>
                                    Sign Up
                                </button>
                            </Link>
                            <Link href="./login">
                                <button style={{ backgroundColor: 'white', padding: '8px 37px', borderRadius: '8px', border: '1px solid black' }}>
                                    Log In
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='Right' style={{width:'50%', marginLeft: '15%'}}>
                <Image src="./image/vector2.svg" width={600} height={600} alt='vector'/>
                </div>
            </div>
        </div>
    );
};

export default Content;
