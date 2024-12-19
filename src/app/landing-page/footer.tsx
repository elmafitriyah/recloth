'use client';

import React from 'react';

const Footer: React.FC = () => {
    return (
        <>
            <div id="contribution" className="footer" style={{ fontFamily: 'Jaldi', margin: '5% 17% 0% 7%' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 700 }}>Kontribusi</h1>
                    <br />
                    <p>
                        Hai, punya baju yang sudah lama nggak dipakai? Yuk, jadikan baju-baju itu bermanfaat lagi dengan mendonasikannya ke Recloth! Bersama-sama, kita bisa kurangi limbah tekstil dan bantu lingkungan.
                    </p>
                    <br />
                    <button style={{border: '1px solid black', padding: '1%', borderRadius: '10px'}}>
                        Info Selanjutnya
                    </button>
                    <br />
                </div>
            </div>
            <br />
            <div style={{ width: 'max', height: '65px', backgroundColor: '#F5AE06' }}></div>
        </>
    );
};

export default Footer;
