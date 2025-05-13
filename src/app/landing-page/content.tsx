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
                        <h6 className="text-lg md:text-xl font-normal mt-4">
                            Recycle your clothes to reduce clothing waste
                        </h6>
                        <div className="button mt-5 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                            <Link href="/signup">
                                <button className="bg-[#F5AE06] text-black px-6 py-2 rounded border border-black">
                                    Sign Up
                                </button>
                            </Link>
                            <Link href="./login">
                                <button className="bg-white border border-black px-6 py-2 rounded">
                                    Log In
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='className="md:w-1/2 p-4"' style={{ marginLeft: '15%'}}>
                <Image src="./image/vector2.svg" width={600} height={600} alt='vector'/>
                </div>
            </div>
        </div>
    );
};

export default Content;
