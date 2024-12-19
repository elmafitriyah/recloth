'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Content() {
  return (
    <div className='container' style={{ textAlign: 'center', marginTop: '2%' }}>
      <div className="box" style={{ border: '1px solid black', paddingTop: '2%', paddingBottom:'2%', marginInline: '5%', borderRadius:'10px' }}>
        <h1 style={{ fontSize:30, paddingBottom: '4%' }}>Riwayat Pesanan</h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '300px', paddingRight: '300px' }}>
          <div className="kemas" style={{ textAlign:'center', alignContent: 'center' }}>
            <Image src="/image/kemas.svg" alt='' width={35} height={35} />
            <h2>Dikemas</h2>
          </div>
          <div className="kirim">
            <Image src="/image/kirim.svg" alt='' width={35} height={35} />
            <h2>Pengiriman</h2>
          </div>
          <div className="ulas">
            <Image src="/image/bintang.svg" alt='' width={35} height={35} />
            <h2>Beri Ulasan</h2>
          </div>
        </div>
      </div>

      {/* Tombol lainnya */}
      <div className="under" style={{ marginTop:'2%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginRight: '5%', marginLeft: '5%' }}>
          <button style={{ display: 'flex', alignItems: 'center' , border: '1px solid black', borderRadius:'8px', padding: '2% 9.5% 2% 9.5%' }}>
            <div className="favorit" style={{ display: 'flex', alignItems: 'center' }}>
              <Icon icon="mdi:heart" style={{ fontSize: '22px', color: 'red' }} />
              <h2 style={{ fontSize: '20px', marginLeft: '8px' }}>Favorit Saya</h2>
              <Icon icon="fa-solid:chevron-right" style={{ fontSize: '20px', color: 'black', marginLeft: '8px' }} />
            </div>
          </button>

          <button style={{ display: 'flex', alignItems: 'center' , border: '1px solid black', borderRadius:'8px', padding: '2% 9.5% 2% 9.5%' }}>
            <div className="belilagi" style={{ display: 'flex', alignItems: 'center' }}>
              <Icon icon="fa-solid:shopping-bag" style={{ fontSize: '22px', color: '#FFCD29' }} />
              <h2 style={{ marginLeft: '8px', fontSize: '20px' }}>Beli Lagi</h2>
              <Icon icon="fa-solid:chevron-right" style={{ fontSize: '20px', color: 'black', marginLeft: '8px' }} />
            </div>
          </button>

          <button style={{ display: 'flex', alignItems: 'center', border: '1px solid black', borderRadius:'8px', padding: '2% 9.5% 2% 9.5%' }}>
            <div className="saldo" style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/image/wallet.svg" width={25} height={25} alt="wallet" />
              <h2 style={{ marginLeft: '8px', fontSize:'20px' }}>Saldo</h2>
              <h2 style={{ marginLeft: '8px', fontSize:'20px' }}>90.000</h2>
            </div>
          </button>
        </div>
        <button style={{ backgroundColor:'#F5AE06', width:'494px', height:'60px', marginTop:'3%', borderRadius: '10px' }}>
          <h1>Re-Share</h1>
        </button>
      </div>
    </div>
  );
}