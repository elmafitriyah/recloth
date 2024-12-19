export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    const articles = [
        {
            "id": "0fe1810d-1d9b-4917-ab29-d1529b093707",
            "status": "draft",
            "sort": null,
            "user_created": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_created": "2024-12-16T03:54:48.532Z",
            "user_updated": null,
            "date_updated": null,
            "user_deleted": null,
            "date_deleted": null,
            "judul_konten": "Ngeri, Gunung Sampah Jutaan Pakaian Bekas Cemarkan Kenya",
            "isi_artikel": "Fenomena gunung sampah jutaan pakaian bekas yang mencemari lingkungan, terutama di Kenya, menjadi masalah serius yang semakin memperburuk keadaan ekologi di negara tersebut. Setiap tahun, Kenya menerima ribuan ton pakaian bekas dari negara-negara maju, yang sebagian besar merupakan sumbangan atau pakaian bekas yang tidak terjual. Namun, alih-alih dimanfaatkan, banyak dari pakaian tersebut yang akhirnya menumpuk dan mencemari lingkungan, khususnya di kawasan ibu kota Nairobi dan daerah sekitar. Sampah pakaian ini tidak hanya mengganggu estetika kota, tetapi juga mengancam keberlanjutan ekosistem lokal, karena pakaian tersebut sering kali terbuat dari bahan sintetis yang sulit terurai dan dapat mencemari tanah serta air.\n\nSelain dampak lingkungan, gunung sampah pakaian bekas ini juga menciptakan masalah sosial dan ekonomi. Banyaknya pakaian bekas yang dibuang tanpa pengolahan yang tepat menyebabkan penurunan kualitas pasar tekstil lokal, yang seharusnya dapat dimanfaatkan untuk meningkatkan produksi dan ekonomi masyarakat setempat. Pakaian-pakaian tersebut, yang sering kali berakhir sebagai sampah, tidak hanya merugikan sektor lingkungan, tetapi juga merusak potensi pemberdayaan ekonomi dan kesejahteraan masyarakat Kenya. Oleh karena itu, penting untuk menemukan solusi yang lebih berkelanjutan, seperti mendaur ulang atau mengubah pakaian bekas menjadi produk baru yang bernilai guna, untuk mengurangi dampak negatif ini dan mendorong keberlanjutan di tingkat lokal maupun global.",
            "kategori": "Artikel Luar Negeri",
            "tanggal_diperbarui": "2024-12-06T12:00:00",
            "image": "adaa5b2c-5e85-48b3-8bcc-04010fb94129",
            "author": "Salwa Imtiyaz"
        },
        {
            "id": "0fe1810d-1d9b-4917-ab29-d1529b093707",
            "status": "draft",
            "sort": null,
            "user_created": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_created": "2024-12-16T03:54:48.532Z",
            "user_updated": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_updated": "2024-12-18T15:42:58.634Z",
            "user_deleted": null,
            "date_deleted": null,
            "judul_konten": "Ngeri, Gunung Sampah Jutaan Pakaian Bekas Cemarkan Kenya",
            "isi_artikel": "Fenomena gunung sampah jutaan pakaian bekas yang mencemari lingkungan, terutama di Kenya, menjadi masalah serius yang semakin memperburuk keadaan ekologi di negara tersebut. Setiap tahun, Kenya menerima ribuan ton pakaian bekas dari negara-negara maju, yang sebagian besar merupakan sumbangan atau pakaian bekas yang tidak terjual. Namun, alih-alih dimanfaatkan, banyak dari pakaian tersebut yang akhirnya menumpuk dan mencemari lingkungan, khususnya di kawasan ibu kota Nairobi dan daerah sekitar. Sampah pakaian ini tidak hanya mengganggu estetika kota, tetapi juga mengancam keberlanjutan ekosistem lokal, karena pakaian tersebut sering kali terbuat dari bahan sintetis yang sulit terurai dan dapat mencemari tanah serta air.\n\nSelain dampak lingkungan, gunung sampah pakaian bekas ini juga menciptakan masalah sosial dan ekonomi. Banyaknya pakaian bekas yang dibuang tanpa pengolahan yang tepat menyebabkan penurunan kualitas pasar tekstil lokal, yang seharusnya dapat dimanfaatkan untuk meningkatkan produksi dan ekonomi masyarakat setempat. Pakaian-pakaian tersebut, yang sering kali berakhir sebagai sampah, tidak hanya merugikan sektor lingkungan, tetapi juga merusak potensi pemberdayaan ekonomi dan kesejahteraan masyarakat Kenya. Oleh karena itu, penting untuk menemukan solusi yang lebih berkelanjutan, seperti mendaur ulang atau mengubah pakaian bekas menjadi produk baru yang bernilai guna, untuk mengurangi dampak negatif ini dan mendorong keberlanjutan di tingkat lokal maupun global.",
            "kategori": "Artikel Luar Negeri",
            "tanggal_diperbarui": "2024-12-06T12:00:00",
            "image": "adaa5b2c-5e85-48b3-8bcc-04010fb94129",
            "author": "Salwa Imtiyaz"
        },
        {
            "id": "18910181-ead2-4c5c-a46a-84887e29315e",
            "status": "draft",
            "sort": null,
            "user_created": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_created": "2024-12-16T00:26:18.798Z",
            "user_updated": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_updated": "2024-12-16T14:09:07.920Z",
            "user_deleted": null,
            "date_deleted": null,
            "judul_konten": "Cara Bijak Kurangi Limbah Tekstil : Upcycle dan Donasi Pakaian",
            "isi_artikel": "Mengurangi limbah tekstil adalah langkah penting dalam menjaga kelestarian lingkungan, dan salah satu cara bijak untuk melakukannya adalah dengan melakukan upcycle dan mendonasikan pakaian yang sudah tidak terpakai. Upcycle atau daur ulang pakaian memungkinkan kita untuk mengubah pakaian lama menjadi barang baru yang berguna, seperti tas, aksesori, atau bahkan bahan untuk proyek seni. Dengan demikian, kita tidak hanya mengurangi jumlah limbah yang dibuang ke tempat pembuangan sampah, tetapi juga memberikan nilai tambah pada barang-barang yang seharusnya sudah tidak berguna. Kreativitas dalam mengolah kembali pakaian lama ini tidak hanya mengurangi dampak lingkungan, tetapi juga memberi kesempatan bagi kita untuk belajar keterampilan baru dalam kerajinan tangan.\n\nSelain upcycle, mendonasikan pakaian yang masih layak pakai adalah cara lain yang efektif untuk mengurangi limbah tekstil. Pakaian yang tidak lagi kita butuhkan bisa memberikan manfaat besar bagi orang lain yang membutuhkan. Banyak organisasi atau lembaga sosial yang menerima pakaian bekas untuk disalurkan kepada masyarakat kurang mampu. Dengan mendonasikan pakaian, kita turut berkontribusi dalam mengurangi konsumsi barang-barang baru yang dapat berisiko menambah beban lingkungan. Hal ini juga mendorong budaya berbagi, sekaligus mengurangi ketergantungan kita pada industri tekstil yang dapat menghasilkan dampak negatif bagi alam.",
            "kategori": "Artikel Terbaru",
            "tanggal_diperbarui": "2024-12-16T07:27:00",
            "image": "3b8695ad-925c-423d-bb82-2810d531b95f",
            "author": "Azizah Amaliah Putri"
        },
        {
            "id": "214a4d91-ade8-40c5-a0d4-709a60ede078",
            "status": "draft",
            "sort": null,
            "user_created": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_created": "2024-11-20T12:11:08.757Z",
            "user_updated": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_updated": "2024-12-16T03:47:55.984Z",
            "user_deleted": null,
            "date_deleted": null,
            "judul_konten": "Tips Mengurangi Limbah Fashion",
            "isi_artikel": "Industri fashion menjadi salah satu penyumbang limbah terbesar di dunia. Untuk mengurangi dampak ini, langkah pertama yang bisa dilakukan adalah menerapkan prinsip \"buy less, choose well, make it last.\" Pilihlah pakaian yang berkualitas dan tahan lama, sehingga tidak cepat rusak atau ketinggalan tren. Selain itu, belilah pakaian dengan desain timeless yang mudah dipadukan untuk berbagai kesempatan. Sebisa mungkin, hindari membeli pakaian secara impulsif hanya karena diskon atau tren sementara. Pertimbangkan juga untuk membeli produk second-hand atau preloved yang masih layak pakai, sehingga Anda membantu mengurangi jumlah limbah pakaian baru yang diproduksi.\n\nLangkah berikutnya adalah dengan memperpanjang umur pakaian yang sudah dimiliki. Perawatan yang baik, seperti mencuci dengan teknik yang sesuai dan memperbaiki pakaian yang rusak, dapat mengurangi kebutuhan untuk membeli pakaian baru. Selain itu, kreativitas Anda juga bisa membantu: ubahlah pakaian lama menjadi sesuatu yang baru, seperti tote bag atau aksesoris, menggunakan kain perca dari pakaian yang tak terpakai. Anda juga bisa menyumbangkan atau menjual pakaian yang tidak lagi digunakan, sehingga pakaian tersebut bisa mendapatkan \"kehidupan kedua.\" Dengan langkah-langkah sederhana ini, kita semua dapat berkontribusi dalam menciptakan industri fashion yang lebih berkelanjutan.",
            "kategori": "Artikel Kami",
            "tanggal_diperbarui": "2024-11-01T09:00:00",
            "image": "0527f0b4-0d0e-4f58-a51e-f5d64b86fd70",
            "author": "Sagetha Bayu Elma Fitriyah"
        },
        {
            "id": "32e75080-fb27-41ee-8598-de32cb8b3457",
            "status": "draft",
            "sort": null,
            "user_created": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_created": "2024-12-16T03:53:35.355Z",
            "user_updated": null,
            "date_updated": null,
            "user_deleted": null,
            "date_deleted": null,
            "judul_konten": "Uniknya Tas Rajut Dari Limbah Pakaian",
            "isi_artikel": "Tas rajut dari limbah pakaian adalah contoh unik dan kreatif dalam dunia fesyen yang memanfaatkan bahan bekas menjadi produk baru yang berguna. Limbah pakaian, yang sering kali terbuang begitu saja, dapat diubah menjadi serat-serat kecil yang kemudian dijadikan bahan untuk merajut tas. Proses ini tidak hanya mengurangi limbah tekstil, tetapi juga memberikan kehidupan baru pada pakaian yang sudah tidak terpakai. Setiap tas rajut yang dihasilkan memiliki karakter dan tekstur yang berbeda, bergantung pada jenis bahan pakaian yang digunakan, seperti kaos, denim, atau kain lainnya. Hal ini menjadikan setiap tas rajut tersebut sebagai karya yang unik, dengan tampilan yang penuh warna dan penuh cerita, karena berasal dari pakaian-pakaian yang pernah digunakan.\n\nSelain itu, tas rajut dari limbah pakaian menawarkan keunggulan dari segi keberlanjutan dan desain yang ramah lingkungan. Dengan semakin banyaknya konsumen yang sadar akan pentingnya menjaga bumi, tas rajut ini menjadi pilihan fesyen yang tidak hanya menarik, tetapi juga beretika. Bahan yang digunakan dalam pembuatan tas rajut ini tidak hanya memberikan dampak positif terhadap pengurangan limbah tekstil, tetapi juga mendukung perekonomian lokal, karena banyak pengrajin dan desainer independen yang membuat produk ini secara manual. Tas rajut dari limbah pakaian ini juga dapat menjadi alternatif fesyen yang tahan lama dan dapat digunakan dalam berbagai kesempatan, menawarkan perpaduan antara fungsi, estetika, dan tanggung jawab sosial yang tinggi.",
            "kategori": "Artikel Kami",
            "tanggal_diperbarui": "2024-12-11T12:00:00",
            "image": "1790ca45-2177-4260-a096-7cc94da865c9",
            "author": "Tarisa Azzahra Widandy"
        },
        {
            "id": "53170ac3-2f67-44fd-b797-638063a152a2",
            "status": "draft",
            "sort": null,
            "user_created": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_created": "2024-12-16T14:24:08.210Z",
            "user_updated": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_updated": "2024-12-16T14:28:35.410Z",
            "user_deleted": null,
            "date_deleted": null,
            "judul_konten": "Limbah Pakaian: Krisis Lingkungan yang Semakin Membesar dan Cara Menghadapinya",
            "isi_artikel": "Limbah pakaian telah menjadi salah satu masalah lingkungan yang semakin mendesak dalam beberapa tahun terakhir. Masalah ini dipicu oleh pesatnya industri fast fashion, di mana produksi dan konsumsi pakaian murah yang bergaya terus-menerus menyebabkan jumlah limbah tekstil yang sangat besar. Setiap tahun, jutaan ton pakaian dibuang di seluruh dunia, berkontribusi pada polusi dan pengurasan sumber daya alam yang berharga. Penyebab utama masalah ini terletak pada cepatnya siklus mode yang mengutamakan kecepatan dan biaya produksi rendah, bukannya keberlanjutan dan kualitas.\n\nDampak lingkungan dari limbah pakaian sangat besar. Banyak pakaian terbuat dari serat sintetis seperti polyester, yang membutuhkan ratusan tahun untuk terurai di tempat pembuangan sampah. Seiring pakaian ini membusuk, mikroplastik berbahaya dilepaskan ke lingkungan, mencemari lautan dan merusak kehidupan laut. Selain itu, industri fashion bertanggung jawab atas sebagian besar emisi karbon global, dengan setiap tahap produksi—mulai dari pengambilan bahan baku hingga manufaktur dan transportasi—memberikan dampak buruk pada lingkungan. Namun, ada solusi yang dapat diterapkan oleh individu dan industri untuk mengurangi dampak negatif limbah pakaian. Dengan mendukung mode berkelanjutan, memilih pakaian bekas, serta mendaur ulang atau memanfaatkan kembali pakaian lama, kita semua bisa berperan dalam mengurangi limbah tekstil dan melindungi bumi untuk generasi mendatang.",
            "kategori": "Artikel Luar Negeri",
            "tanggal_diperbarui": "2024-12-12T12:00:00",
            "image": "ca27d399-aa52-42c2-a998-d5bef048c9d3",
            "author": "Sagetha Bayu Elma Fitriyah"
        },
        {
            "id": "6cd5380b-bd31-4a7d-aee6-1b4fbd66e91b",
            "status": "draft",
            "sort": null,
            "user_created": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_created": "2024-11-20T12:11:45.438Z",
            "user_updated": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_updated": "2024-12-16T14:08:50.399Z",
            "user_deleted": null,
            "date_deleted": null,
            "judul_konten": "Daur Ulang Atau Berikan Kepada Yang Membutuhkan Pakaian Anda",
            "isi_artikel": "Daur ulang pakaian atau memberikan pakaian Anda kepada yang membutuhkan adalah langkah penting untuk mengurangi dampak lingkungan yang disebabkan oleh limbah tekstil. Industri tekstil merupakan salah satu penyumbang utama polusi global, dan sebagian besar pakaian yang kita buang berakhir di tempat pembuangan akhir, yang dapat memakan waktu bertahun-tahun untuk terurai. Salah satu solusi yang dapat kita lakukan adalah dengan mendaur ulang pakaian lama. Pakaian yang sudah tidak digunakan lagi bisa diubah menjadi produk baru yang berguna, seperti tas, lap, atau bahan isolasi. Selain mengurangi limbah, proses daur ulang ini juga memberikan kesempatan untuk memanfaatkan kembali sumber daya yang sudah ada, sehingga tidak perlu memproduksi barang baru yang berpotensi merusak lingkungan lebih lanjut.\n\nAlternatif lain yang tak kalah penting adalah memberikan pakaian yang masih layak pakai kepada orang-orang yang membutuhkan. Di banyak daerah, terutama di tempat-tempat dengan tingkat kemiskinan tinggi, pakaian bekas yang dalam kondisi baik bisa menjadi bantuan yang sangat berarti bagi mereka yang kesulitan membeli pakaian baru. Mendonasikan pakaian adalah cara yang efektif untuk membantu sesama sekaligus mengurangi jumlah sampah tekstil. Banyak organisasi dan lembaga sosial yang menerima donasi pakaian untuk disalurkan ke masyarakat yang membutuhkan, sehingga memberikan dampak positif ganda: mengurangi limbah dan memberikan manfaat sosial. Dengan cara ini, kita tidak hanya menjaga keberlanjutan lingkungan tetapi juga memperkuat solidaritas sosial di komunitas kita.",
            "kategori": "Artikel Terbaru",
            "tanggal_diperbarui": "2024-11-01T09:00:00",
            "image": "4bbcb969-ee55-4362-8b35-52d06a8ab581",
            "author": "Salwa Imtiyaz"
        },
        {
            "id": "8a250428-5bab-4315-b6b5-23605db88584",
            "status": "draft",
            "sort": null,
            "user_created": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_created": "2024-12-16T14:13:27.029Z",
            "user_updated": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_updated": "2024-12-16T14:14:04.071Z",
            "user_deleted": null,
            "date_deleted": null,
            "judul_konten": "Limbah Pakaian: Mengungkap Masalah Tersembunyi di Balik Gaya Hidup Fast Fashion",
            "isi_artikel": "Limbah pakaian menjadi masalah lingkungan yang semakin besar, sebagian besar disebabkan oleh industri fast fashion yang mendorong konsumsi berlebihan. Pakaian murah dan bergaya yang cepat rusak sering kali hanya digunakan beberapa kali sebelum dibuang, sementara bahan sintetis yang digunakan dalam produksinya, seperti polyester dan akrilik, membutuhkan waktu ratusan tahun untuk terurai. Proses pembuatan pakaian ini juga menghasilkan polusi yang tinggi, baik dari penggunaan sumber daya alam yang besar maupun emisi karbon yang tinggi. Hal ini berkontribusi pada pencemaran lingkungan dan perubahan iklim yang semakin memburuk.\n\nUntuk mengurangi dampak limbah pakaian, kita bisa mulai dengan beralih ke mode berkelanjutan, memilih pakaian yang lebih tahan lama dan dibuat dengan bahan ramah lingkungan. Membeli pakaian secondhand atau bekas juga dapat mengurangi permintaan terhadap produksi baru, sementara mendaur ulang pakaian yang tidak terpakai menjadi barang berguna lain dapat mengurangi jumlah sampah tekstil. Dengan langkah-langkah sederhana ini, kita dapat mengurangi limbah pakaian dan memberikan kontribusi nyata untuk menjaga kelestarian lingkungan.",
            "kategori": "Artikel Terbaru",
            "tanggal_diperbarui": "2024-12-04T12:00:00",
            "image": "38ed7a6d-2549-48e9-9678-932f8fb3f189",
            "author": "Naomisya Shafizhilal Suryoni"
        },
        {
            "id": "d0e818bd-b962-49ef-ad6a-924517330c0f",
            "status": "draft",
            "sort": null,
            "user_created": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_created": "2024-12-16T03:52:34.515Z",
            "user_updated": null,
            "date_updated": null,
            "user_deleted": null,
            "date_deleted": null,
            "judul_konten": "Limbah Tekstil Dapat Diubah Menjadi Fesyen Kekinian",
            "isi_artikel": "Limbah tekstil yang selama ini dianggap sebagai sampah yang tidak berguna, sebenarnya memiliki potensi besar untuk diubah menjadi fesyen kekinian yang menarik dan bernilai. Konsep daur ulang dalam dunia mode semakin populer, dan banyak desainer serta pengrajin kreatif yang mulai memanfaatkan sisa-sisa bahan tekstil untuk menciptakan pakaian, aksesoris, dan barang fesyen lainnya yang up-to-date. Dengan menggabungkan kreativitas dan teknik daur ulang, pakaian lama atau bahan tekstil bekas dapat diberi sentuhan baru, baik dengan teknik pemotongan, pewarnaan, atau penambahan elemen lain. Hasilnya, produk fesyen yang dihasilkan bukan hanya ramah lingkungan, tetapi juga memiliki nilai estetika yang unik dan berbeda dari yang lain.\n\nMengubah limbah tekstil menjadi fesyen kekinian juga sejalan dengan tren keberlanjutan dalam industri mode yang semakin diminati oleh konsumen yang sadar akan dampak lingkungan. Banyak merek dan label fesyen sekarang ini yang mengedepankan konsep slow fashion dan upcycling, di mana produk mereka terbuat dari bahan-bahan yang didaur ulang atau diproduksi dengan cara yang lebih bertanggung jawab terhadap lingkungan. Hal ini membuka peluang bagi desainer lokal dan pelaku usaha kecil untuk berinovasi dengan menggunakan limbah tekstil sebagai bahan utama. Selain itu, dengan meningkatnya kesadaran konsumen terhadap isu-isu lingkungan, pakaian hasil daur ulang dapat menjadi pilihan fesyen yang tidak hanya stylish, tetapi juga mencerminkan kepedulian terhadap keberlanjutan planet ini.",
            "kategori": "Artikel Kami",
            "tanggal_diperbarui": "2024-12-12T12:00:00",
            "image": "d711aaee-54ef-424c-84b4-35505c1fd611",
            "author": "Naomisya Shafizhilal Suryono"
        },
        {
            "id": "d95b94c8-53cc-4854-b8db-d5e57f9cc437",
            "status": "draft",
            "sort": null,
            "user_created": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_created": "2024-12-16T14:26:46.567Z",
            "user_updated": "09701f94-d762-4310-b8ac-b87ad262a980",
            "date_updated": "2024-12-16T14:28:13.537Z",
            "user_deleted": null,
            "date_deleted": null,
            "judul_konten": "imbah Pakaian di Amerika Serikat: Tantangan Lingkungan yang Mengkhawatirkan",
            "isi_artikel": "Di Amerika Serikat, limbah pakaian telah menjadi salah satu isu lingkungan yang paling memprihatinkan. Setiap tahun, jutaan ton pakaian dibuang, dengan sebagian besar berasal dari industri fast fashion yang terus berkembang pesat. Masyarakat Amerika cenderung membeli pakaian baru dalam jumlah yang besar dan dengan harga murah, namun banyak dari pakaian tersebut hanya digunakan untuk waktu yang sangat singkat sebelum dibuang atau disumbangkan. Sementara itu, industri pakaian menggunakan bahan-bahan sintetis yang membutuhkan waktu sangat lama untuk terurai, serta proses produksinya yang menghabiskan banyak sumber daya alam dan energi. Akibatnya, limbah pakaian di AS berkontribusi pada polusi tanah dan air serta emisi karbon yang semakin meningkat.\n\nNamun, dalam beberapa tahun terakhir, kesadaran masyarakat Amerika mengenai dampak limbah pakaian terhadap lingkungan mulai meningkat. Banyak gerakan dan inisiatif yang muncul untuk mengatasi masalah ini. Misalnya, semakin banyak konsumen yang beralih ke pembelian pakaian bekas melalui toko thrifting atau pasar online, serta mendukung merek yang berkomitmen pada keberlanjutan. Selain itu, beberapa negara bagian seperti California telah mulai menerapkan kebijakan untuk meningkatkan daur ulang tekstil dan mengurangi sampah pakaian yang berakhir di tempat pembuangan akhir. Pemerintah juga mendorong industri mode untuk mengadopsi praktik yang lebih ramah lingkungan, seperti penggunaan bahan daur ulang dan mengurangi emisi dalam proses produksinya. Dengan langkah-langkah tersebut, Amerika Serikat berupaya untuk mengurangi limbah pakaian dan menghadapinya sebagai masalah lingkungan yang serius.",
            "kategori": "Artikel Luar Negeri",
            "tanggal_diperbarui": "2024-12-21T12:00:00",
            "image": "2a306441-cc65-43b7-a000-4f62b17adab6",
            "author": "Tarisa Azzahra Widandy"
        }
    ]

    const article = articles.find((p) => p.id === id);

    if (article) {
        const imageUrl = `http://localhost:3000/images/${article.image}.png`; 

        return new Response(JSON.stringify({ ...article, imageUrl }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ error: "article not found" }), { status: 404 });
    }
}