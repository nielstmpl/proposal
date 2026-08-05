/**
 * Config default — Proposal SPONSOR (permohonan partisipasi sponsorship)
 */
window.PROPOSAL_CONFIG = {
  variant: "sponsor",

  meta: {
    hut: 81,
    tahun: 2026,
    rw: "RW 16",
    desa: "Desa Mandalasari",
    kecamatan: "Kecamatan Cikalong Wetan",
    kabupaten: "Kabupaten Bandung Barat",
    tema: "Connected by Heart",
    malamPuncak: "05 September 2026",
    lokasi: "Lapangan Serbaguna Mandalasari"
  },

  sponsor: {
    nama: "PT Panfila Indosari",
    brand: "RON88",
    tagline: "Produsen AMDK RON88"
  },

  penerima: {
    label: "Diajukan Kepada",
    nama: "PT Panfila Indosari",
    namaLengkap: "PT Panfila Indosari (RON88)",
    jabatan: "Pimpinan / Manajemen"
  },

  panitia: {
    ketua: {
      nama: "Panny Aryanto Wibowo",
      jabatan: "Ketua Panitia HUT RI Ke-81 RW 16",
      wa: "+62 838-2263-9123",
      ttd: ""
    },
    ketuaRw: {
      nama: "Agus Kusnadi",
      jabatan: "Ketua RW 16",
      wa: "+62 859-5666-3233",
      ttd: ""
    },
    pelindung: "Kepala Desa Mandalasari",
    penasihat: "Tokoh Masyarakat & Tokoh Agama RW 16",
    inti: [
      { label: "Wakil Ketua", nama: "Rizky Irwan Ramdas" },
      { label: "Sekretaris", nama: "Krisna Rama Wijaya" },
      { label: "Bendahara", nama: "Amanta Ivan" }
    ],
    seksi: [
      { title: "Seksi Acara & Lomba", koordinator: "Perwakilan Karang Taruna", anggota: "5–7 orang perwakilan tiap RT" },
      { title: "Seksi Perlengkapan", koordinator: "Perwakilan Warga RW 16", anggota: "4–5 orang" },
      { title: "Seksi Konsumsi", koordinator: "Perwakilan Ibu-Ibu PKK", anggota: "5–6 orang" },
      { title: "Seksi Humas & Publikasi", koordinator: "Perwakilan Warga RW 16", anggota: "3–4 orang" },
      { title: "Seksi Dokumentasi", koordinator: "Perwakilan Karang Taruna", anggota: "2–3 orang" },
      { title: "Seksi Keamanan & Kebersihan", koordinator: "Ketua RT masing-masing", anggota: "Linmas RW 16" }
    ],
    catatan: "Daftar nama anggota seksi secara lengkap akan disampaikan dalam Surat Keputusan Kepanitiaan yang ditetapkan oleh Ketua RW 16. Susunan di atas dapat menyesuaikan hasil rapat panitia berikutnya."
  },

  surat: {
    nomor: "01/PHBN-RW16/VII/2026",
    lampiran: "1 (satu) berkas proposal",
    perihal: "Permohonan Partisipasi Sponsorship",
    tempat: "Cikalong Wetan",
    tanggal: "13 Juli 2026",
    penerimaJabatan: "Pimpinan / Manajemen"
  },

  anggaran: {
    catatan: "Anggaran di atas merupakan estimasi kebutuhan biaya berdasarkan harga pasar setempat dan dapat berubah sesuai kondisi lapangan. Sumber pendanaian berasal dari iuran warga RW 16, swadaya masyarakat, dan partisipasi sponsor/mitra kerja sama. Laporan pertanggungjawaban keuangan akan disampaikan secara transparan kepada seluruh warga dan mitra setelah kegiatan selesai dilaksanakan.",
    items: [
      { type: "section", label: "A. Kesekretariatan & Publikasi" },
      { no: 1, uraian: "Cetak proposal, buku tamu & dokumentasi kegiatan", vol: 1, sat: "Paket", harga: 300000, jumlah: 300000 },
      { no: 2, uraian: "Spanduk, banner & umbul-umbul promosi kegiatan", vol: 1, sat: "Paket", harga: 800000, jumlah: 800000 },
      { no: 3, uraian: "Bendera merah putih & atribut 17-an", vol: 1, sat: "Paket", harga: 400000, jumlah: 400000 },
      { no: 4, uraian: "Backdrop panggung & photobooth", vol: 1, sat: "Unit", harga: 400000, jumlah: 400000 },
      { type: "section", label: "B. Jalan Santai Sehat Bersama" },
      { no: 5, uraian: "Doorprize jalan santai", vol: 20, sat: "Bh", harga: 50000, jumlah: 1000000 },
      { no: 6, uraian: "Snack & minuman peserta jalan santai", vol: 200, sat: "Porsi", harga: 5000, jumlah: 1000000 },
      { no: 7, uraian: "Nomor dada, banner start/finish", vol: 1, sat: "Paket", harga: 250000, jumlah: 250000 },
      { no: 8, uraian: "Operasional (petugas, P3K, keamanan)", vol: 1, sat: "Paket", harga: 250000, jumlah: 250000 },
      { type: "section", label: "C. Lomba Anak 17-an" },
      { no: 9, uraian: "Peralatan & perlengkapan lomba", vol: 1, sat: "Paket", harga: 1500000, jumlah: 1500000 },
      { no: 10, uraian: "Hadiah, piala & sertifikat pemenang", vol: 1, sat: "Paket", harga: 2000000, jumlah: 2000000 },
      { no: 11, uraian: "Snack & minuman peserta lomba", vol: 150, sat: "Porsi", harga: 3333, jumlah: 500000 },
      { type: "section", label: "D. Malam Apresiasi Seni (Puncak)" },
      { no: 12, uraian: "Sewa panggung, sound system & lighting", vol: 1, sat: "Paket", harga: 3500000, jumlah: 3500000 },
      { no: 13, uraian: "Snack, makan & minuman tamu undangan", vol: 300, sat: "Porsi", harga: 5000, jumlah: 1500000 },
      { no: 14, uraian: "Dekorasi panggung & lighting malam puncak", vol: 1, sat: "Paket", harga: 1000000, jumlah: 1000000 },
      { no: 15, uraian: "Souvenir & plakat apresiasi sponsor", vol: 1, sat: "Paket", harga: 450000, jumlah: 450000 },
      { type: "section", label: "E. Lain-lain" },
      { no: 16, uraian: "Transport & operasional panitia", vol: 1, sat: "Paket", harga: 350000, jumlah: 350000 },
      { no: 17, uraian: "Dana cadangan darurat", vol: 1, sat: "Paket", harga: 300000, jumlah: 300000 }
    ]
  },

  hal9: {
    barTitle: "Halaman 09 • Penawaran Sponsorship",
    title: "Penawaran Sponsorship",
    subtitle: "Bentuk kerja sama untuk {{sponsor.namaLengkap}}",
    intro: "Panitia PHBN HUT RI ke-{{meta.hut}} {{meta.rw}} {{meta.desa}} dengan hormat menawarkan kesempatan partisipasi dan dukungan kepada <strong>{{sponsor.namaLengkap}}</strong> melalui bentuk <strong>dukungan media promosi</strong>. Logo dan identitas perusahaan akan ditampilkan pada seluruh media publikasi kegiatan, sehingga brand {{sponsor.brand}} terekspos secara luas di lingkungan {{meta.rw}} dan masyarakat sekitarnya.",
    partisipasiTitle: "Bentuk Partisipasi Yang Diharapkan",
    items: [
      { letter: "A", title: "Umbul-umbul Branding", desc: "Penyediaan umbul-umbul bergambar logo {{sponsor.brand}} yang dipasang di sepanjang jalan utama lingkungan RW 16 selama periode kegiatan." },
      { letter: "B", title: "Spanduk & Backdrop", desc: "Pencetakan spanduk kegiatan dan backdrop panggung malam puncak yang memuat logo {{sponsor.namaLengkap}}." },
      { letter: "C", title: "Media Promosi Lain", desc: "Poster, banner, roll-up, atau media promosi lainnya yang disepakati bersama antara panitia dan pihak sponsor." },
      { letter: "D", title: "Produk Sampling (Opsional)", desc: "Kesempatan distribusi produk sampling atau materi informasi produk kepada warga pada kegiatan jalan santai dan malam apresiasi seni." }
    ],
    benefitsTitle: "Benefit Untuk {{sponsor.namaLengkap}}",
    benefits: [
      "<strong>Logo Placement</strong> — Logo {{sponsor.brand}} ditampilkan pada seluruh media (spanduk, backdrop, poster, dan umbul-umbul) selama rangkaian kegiatan.",
      "<strong>Mention</strong> — Penyebutan sebagai &ldquo;Supporting Sponsor&rdquo; dalam sambutan Ketua Panitia dan Ketua RW di setiap kegiatan utama.",
      "<strong>Booth Space</strong> — Kesediaan ruang booth/stand promosi produk {{sponsor.brand}} pada kegiatan jalan santai dan malam apresiasi seni.",
      "<strong>Testimonial</strong> — Kesempatan sampaian singkat atau testimoni perwakilan perusahaan pada Malam Apresiasi Seni.",
      "<strong>Dokumentasi</strong> — Penerimaan foto dan video dokumentasi kegiatan yang memperlihatkan branding {{sponsor.brand}}.",
      "<strong>Social Media</strong> — Publikasi di media sosial dan grup WhatsApp warga RW 16 yang memuat logo dan apresiasi terhadap {{sponsor.brand}}.",
      "<strong>Sertifikat</strong> — Penyerahan Piagam Penghargaan resmi dari Panitia PHBN HUT RI ke-{{meta.hut}} {{meta.rw}}."
    ]
  },

  templates: {
    suratP1: "Puji syukur kehadirat Tuhan Yang Maha Esa, penghargaan dan rasa syukur kami sampaikan ke hadapan Bapak/Ibu Pimpinan <strong>{{sponsor.namaLengkap}}</strong>, semoga senantiasa diberi kesehatan dan kelancaran dalam menjalankan aktivitas perusahaan.",
    suratP2: "Bersama ini kami sampaikan bahwa Panitia Peringatan Hari Besar Nasional HUT RI Ke-{{meta.hut}} {{meta.rw}} {{meta.desa}}, {{meta.kecamatan}}, {{meta.kabupaten}}, akan menyelenggarakan <strong>Peringatan Hari Ulang Tahun Republik Indonesia yang ke-{{meta.hut}}</strong> dengan tema <strong>&ldquo;{{meta.tema}}&rdquo;</strong> yang rencananya dilaksanakan pada tanggal {{meta.malamPuncak}} di {{meta.lokasi}}.",
    suratP3: "Sehubungan dengan pelaksanaan kegiatan tersebut, kami bermaksud mengajukan permohonan <strong>partisipasi dan dukungan</strong> kepada <strong>{{sponsor.namaLengkap}}</strong> berupa <strong>dukungan media promosi</strong> berupa <strong>umbul-umbul, spanduk, backdrop panggung</strong> serta bentuk dukungan lainnya yang Bapak/Ibu anggap layak untuk kelancaran pelaksanaan kegiatan peringatan HUT RI ke-{{meta.hut}} {{meta.rw}}.",
    suratP4: "Sebagai bahan pertimbangan, bersama surat ini kami lampirkan proposal kegiatan lengkap. Besar harapan kami agar Bapak/Ibu berkenan memberikan respon positif atas permohonan partisipasi sponsorship ini.",
    penutupP1: "Demikian proposal Peringatan Hari Ulang Tahun Republik Indonesia yang ke-{{meta.hut}} tingkat {{meta.rw}} {{meta.desa}} ini kami susun sebagai gambaran umum kegiatan dan sebagai dasar pengajuan permohonan partisipasi kepada <strong>{{sponsor.namaLengkap}}</strong> beserta seluruh pihak yang berkenan mendukung terselenggaranya kegiatan ini.",
    penutupP2: "Kami menyadari bahwa keberhasilan kegiatan ini tidak akan tercapai tanpa dukungan dari berbagai pihak. Oleh karena itu, kami sangat mengharapkan sinergi &amp; kerja sama yang baik agar rangkaian kegiatan dapat berjalan dengan lancar, meriah, dan bermakna bagi seluruh warga RW 16.",
    penutupDisclaimer: "<strong>Catatan:</strong> Seluruh rangkaian kegiatan dalam proposal ini masih bersifat rencana. Pelaksanaan setiap kegiatan akan diimplementasikan apabila anggaran dan kondisi lapangan memungkinkan, serta dapat disesuaikan berdasarkan musyawarah panitia dan warga.",
    timelineSosialisasi: "Sosialisasi ke seluruh warga {{meta.rw}} dan penyebaran proposal ke mitra sponsor termasuk {{sponsor.nama}}."
  }
};
