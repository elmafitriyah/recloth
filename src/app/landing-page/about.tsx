import Image from "next/image";

const About: React.FC = () => {
    return (
        <div id="about" className="container" style={{ margin: '3% 0% 3% 0%' }}>
            <div className="text-center">
                <h1 style={{ fontFamily: 'Jaldi', fontWeight: 700, fontSize: '28px' }}>Mengenal Recloth</h1>
            </div>
            <div className="flex gap-4 items-center" style={{ marginTop: '-2%' }}>
                <div className="flex gap-6 items-center" >
                    <div className="flex-none w-[280px] h-[280px]" style={{marginTop:'-6%'}}>
                        <Image src="/image/vectorLeft.svg" width={280} height={280} alt="vector" />
                    </div>
                    <div className="flex-grow text-center sm:text-justify" style={{ fontSize: '23px', padding: '2%', marginTop: '35px' }}>
                        <p>
                            Recloth akan menghidupkan kembali baju-baju bekas yang mungkin sudah tak terpakai lagi dan memberinya sentuhan baru. Misi kami sederhana tapi penting, yaitu menciptakan perubahan kecil untuk bumi dengan memulai dari lemari pakaian kita. Bagi Recloth, setiap jahitan dan desain ulang adalah cara terbaik untuk menghadirkan fashion yang unik namun tetap ramah lingkungan. Setiap kali memilih Recloth, tidak hanya mendapatkan sesuatu yang unik, tapi juga ikut mengurangi limbah tekstil dan mendukung pergerakan menuju masa depan yang lebih ramah lingkungan.
                        </p>
                    </div>
                    <div className="flex-none w-[280px] h-[280px]" style={{marginTop:'-6%'}}>
                        <Image src="/image/vectorRight.svg" width={280} height={280} alt="vector" />
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h1 style={{ fontSize: '28px', fontWeight: 700, marginTop: '4%' }}>Kenapa sih harus Recloth?</h1>
            </div>
            <div className="flex justify-center items-center gap-4" style={{ marginTop: '3%' }}>
                <div className="flex flex-col items-center bg-[#233600] text-white rounded-md px-4 py-2 min-w-[150px]">
                    <h5>Berbuat baik untuk bumi</h5>
                </div>
                <div className="flex flex-col items-center bg-[#233600] text-white rounded-md px-4 py-2 min-w-[150px]">
                    <h5>Produk dengan cerita</h5>
                </div>
                <div className="flex flex-col items-center bg-[#233600] text-white rounded-md px-4 py-2 min-w-[150px]">
                    <h5>Komunitas yang tulus</h5>
                </div>
            </div>
        </div>
    );
}

export default About;
