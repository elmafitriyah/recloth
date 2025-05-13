import Image from "next/image";

const About: React.FC = () => {
    return (
        <div id="about" className="container my-8 px-4">
            <div className="text-center">
                <h1 className="font-jaldi font-bold text-2xl sm:text-3xl mb-4">Mengenal Recloth</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center mt-4">
                <div className="flex-none w-[280px] h-[280px] mb-4 md:mb-0">
                    <Image src="/image/vectorLeft.svg" width={280} height={280} alt="vector" />
                </div>
                <div className="flex-grow text-center sm:text-justify text-lg p-4">
                    <p>
                        Recloth akan menghidupkan kembali baju-baju bekas yang mungkin sudah tak terpakai lagi dan memberinya sentuhan baru. Misi kami sederhana tapi penting, yaitu menciptakan perubahan kecil untuk bumi dengan memulai dari lemari pakaian kita. Bagi Recloth, setiap jahitan dan desain ulang adalah cara terbaik untuk menghadirkan fashion yang unik namun tetap ramah lingkungan. Setiap kali memilih Recloth, tidak hanya mendapatkan sesuatu yang unik, tapi juga ikut mengurangi limbah tekstil dan mendukung pergerakan menuju masa depan yang lebih ramah lingkungan.
                    </p>
                </div>
                <div className="flex-none w-[280px] h-[280px] mb-4 md:mb-0">
                    <Image src="/image/vectorRight.svg" width={280} height={280} alt="vector" />
                </div>
            </div>

            <div className="text-center mt-8">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">Kenapa sih harus Recloth?</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
                <div className="flex flex-col items-center bg-[#233600] text-white rounded-md px-4 py-2 min-w-[150px]">
                    <h5 className="text-center">Berbuat baik untuk bumi</h5>
                </div>
                <div className="flex flex-col items-center bg-[#233600] text-white rounded-md px-4 py-2 min-w-[150px]">
                    <h5 className="text-center">Produk dengan cerita</h5>
                </div>
                <div className="flex flex-col items-center bg-[#233600] text-white rounded-md px-4 py-2 min-w-[150px]">
                    <h5 className="text-center">Komunitas yang tulus</h5>
                </div>
            </div>
        </div>
    );
}

export default About;