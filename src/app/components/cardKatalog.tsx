import React from 'react';

interface ProductCardProps {
    nama_product: string;
    harga: string | number;
    produk_img: string | null;
}

const ProductCard: React.FC<ProductCardProps> = ({ nama_product, harga, produk_img }) => {
    return (
        <div className="w-[229px] mx-auto">
            <div className="flex items-center justify-center w-[229px] h-[279px] bg-gray-100 overflow-hidden">
                <img
                    src={produk_img || "https://via.placeholder.com/150"}  
                    alt={nama_product}
                    className="object-cover max-w-full max-h-full"
                />
            </div>
            <div className="px-0 py-4">
                <div
                    className="p-3 text-center sm:text-left inline-flex gap-9"
                    style={{ fontFamily: 'Jaldi' }}
                >
                    <h3 className="text-lg font-medium mb-1">{nama_product}</h3>
                    <p className="text-xl font-bold" style={{ fontSize: '37px' }}>
                        {harga}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
