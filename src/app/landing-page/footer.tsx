'use client';

import React from 'react';

const Footer: React.FC = () => {
    return (
        <>
            <div id="contribution" className="footer font-jaldi mx-4 md:mx-16 my-8">
                <div className="text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-bold">Kontribusi</h1>
                    <p className="mt-4 text-lg">
                        Hai, punya baju yang sudah lama nggak dipakai? Yuk, jadikan baju-baju itu bermanfaat lagi dengan mendonasikannya ke Recloth! Bersama-sama, kita bisa kurangi limbah tekstil dan bantu lingkungan.
                    </p>
                    <button className="mt-4 border border-black px-4 py-2 rounded-md hover:bg-gray-200">
                        Info Selanjutnya
                    </button>
                </div>
            </div>
            <div className="w-full h-16 bg-[#F5AE06]"></div>
        </>
    );
};

export default Footer;