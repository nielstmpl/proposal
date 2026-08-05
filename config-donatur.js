/**
 * Config default — Proposal DONATUR (permohonan bantuan donasi, bukan sponsorship)
 */
window.PROPOSAL_CONFIG = {
  variant: "donatur",

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

  penerima: {
    label: "Diajukan Kepada",
    nama: "Donatur & Mitra Kebaikan",
    namaLengkap: "Donatur & Mitra Kebaikan",
    jabatan: "Bapak/Ibu Donatur",
    brand: ""
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
    perihal: "Permohonan Bantuan Donasi PHBN HUT RI Ke-81",
    tempat: "Cikalong Wetan",
    tanggal: "13 Juli 2026",
    penerimaJabatan: "Bapak/Ibu Donatur"
  },

  anggaran: {
    catatan: "Anggaran di atas merupakan estimasi kebutuhan biaya berdasarkan harga pasar setempat dan dapat berubah sesuai kondisi lapangan. Sumber pendanaian berasal dari iuran warga RW 16, bantuan donatur/mitra kebaikan, dan swadaya masyarakat. Laporan pertanggungjawaban keuangan akan disampaikan secara transparan kepada donatur dan warga setelah kegiatan selesai dilaksanakan.",
    items: [
      { type: "section", label: "A. Kesekretariatan & Publikasi" },
      { no: 1, uraian: "Cetak proposal, buku tamu & dokumentasi kegiatan", vol: 1, sat: "Paket", harga: 250000, jumlah: 250000 },
      { no: 2, uraian: "Spanduk, banner & promosi kegiatan", vol: 1, sat: "Paket", harga: 400000, jumlah: 400000 },
      { no: 3, uraian: "Bendera merah putih & atribut 17-an", vol: 1, sat: "Paket", harga: 300000, jumlah: 300000 },
      { no: 4, uraian: "Backdrop panggung & photobooth", vol: 1, sat: "Unit", harga: 200000, jumlah: 200000 },
      { type: "section", label: "B. Perlombaan Pra-Agustus" },
      { no: 5, uraian: "Hadiah & piala turnamen bola voli antar RT", vol: 1, sat: "Paket", harga: 300000, jumlah: 300000 },
      { no: 6, uraian: "Hadiah & piala turnamen badminton", vol: 1, sat: "Paket", harga: 250000, jumlah: 250000 },
      { no: 7, uraian: "Hadiah & piala turnamen futsal anak", vol: 1, sat: "Paket", harga: 300000, jumlah: 300000 },
      { no: 8, uraian: "Karnaval 17-an (atribut, kostum & banner RT)", vol: 1, sat: "Paket", harga: 400000, jumlah: 400000 },
      { no: 9, uraian: "Perlengkapan olahraga & kebutuhan lapangan", vol: 1, sat: "Paket", harga: 350000, jumlah: 350000 },
      { no: 10, uraian: "Snack & minuman peserta/pemain", vol: 1, sat: "Paket", harga: 100000, jumlah: 100000 },
      { type: "section", label: "C. Lomba Anak 17-an" },
      { no: 11, uraian: "Peralatan & perlengkapan lomba", vol: 1, sat: "Paket", harga: 700000, jumlah: 700000 },
      { no: 12, uraian: "Hadiah, piala & sertifikat pemenang", vol: 1, sat: "Paket", harga: 1150000, jumlah: 1150000 },
      { no: 13, uraian: "Snack & minuman peserta lomba", vol: 150, sat: "Porsi", harga: 3333, jumlah: 500000 },
      { type: "section", label: "D. Malam Apresiasi Seni (Puncak)" },
      { no: 14, uraian: "Sewa panggung, sound system & lighting", vol: 1, sat: "Paket", harga: 2000000, jumlah: 2000000 },
      { no: 15, uraian: "Snack, makan & minuman tamu undangan", vol: 180, sat: "Porsi", harga: 5000, jumlah: 900000 },
      { no: 16, uraian: "Dekorasi panggung & lighting malam puncak", vol: 1, sat: "Paket", harga: 580000, jumlah: 580000 },
      { type: "section", label: "E. Lain-lain" },
      { no: 17, uraian: "Transport & operasional panitia", vol: 1, sat: "Paket", harga: 350000, jumlah: 350000 },
      { no: 18, uraian: "Dana cadangan darurat", vol: 1, sat: "Paket", harga: 300000, jumlah: 300000 }
    ]
  },

  hal9: {
    barTitle: "Halaman 09 • Permohonan Bantuan Donatur",
    title: "Permohonan Bantuan Donasi",
    subtitle: "Dukungan donatur untuk PHBN HUT RI ke-81 RW 16",
    intro: "Panitia PHBN HUT RI ke-{{meta.hut}} {{meta.rw}} {{meta.desa}} dengan hormat mengajukan permohonan <strong>bantuan donasi</strong> kepada Bapak/Ibu <strong>{{penerima.namaLengkap}}</strong> untuk mendukung terselenggaranya peringatan HUT RI ke-{{meta.hut}}. Seluruh bantuan akan digunakan untuk kebutuhan kegiatan warga dan dilaporkan secara transparan.",
    partisipasiTitle: "Bentuk Bantuan Yang Dibutuhkan",
    items: [
      { letter: "A", title: "Donasi Uang Tunai", desc: "Bantuan dana tunai untuk kebutuhan operasional kegiatan: perlombaan pra-Agustus, lomba 17-an, konsumsi, perlengkapan, dan malam puncak." },
      { letter: "B", title: "Donasi Barang", desc: "Bantuan berupa hadiah lomba, konsumsi, perlengkapan acara, atau kebutuhan lain yang disepakati bersama panitia." },
      { letter: "C", title: "Dukungan Jasa", desc: "Bantuan sewa peralatan, sound system, dokumentasi, atau tenaga ahli sesuai kebutuhan kegiatan." },
      { letter: "D", title: "Donasi Sukarela", desc: "Besaran donasi ditentukan sesuai kemampuan dan keikhlasan Bapak/Ibu — tidak ada paksaan nominal tertentu." }
    ],
    benefitsTitle: "Apresiasi & Transparansi",
    benefits: [
      "<strong>Penghargaan</strong> — Piagam apresiasi resmi dari Panitia PHBN dan Ketua RW 16 kepada donatur.",
      "<strong>Pencatatan</strong> — Setiap bantuan dicatat oleh bendahara panitia dan diakui secara resmi.",
      "<strong>Laporan Keuangan</strong> — Laporan pertanggungjawaban disampaikan kepada donatur setelah kegiatan selesai.",
      "<strong>Dokumentasi</strong> — Foto/video kegiatan dapat disampaikan sebagai bukti pelaksanaan.",
      "<strong>Publikasi Apresiasi</strong> — Ucapan terima kasih melalui media panitia dan forum warga RW 16 (tanpa kewajiban branding komersial)."
    ]
  },

  templates: {
    suratP1: "Puji syukur kehadirat Tuhan Yang Maha Esa, penghargaan dan rasa syukur kami sampaikan ke hadapan Bapak/Ibu <strong>{{penerima.namaLengkap}}</strong>, semoga senantiasa diberi kesehatan dan kelancaran dalam setiap amal kebaikan.",
    suratP2: "Bersama ini kami sampaikan bahwa Panitia Peringatan Hari Besar Nasional HUT RI Ke-{{meta.hut}} {{meta.rw}} {{meta.desa}}, {{meta.kecamatan}}, {{meta.kabupaten}}, akan menyelenggarakan <strong>Peringatan Hari Ulang Tahun Republik Indonesia yang ke-{{meta.hut}}</strong> dengan tema <strong>&ldquo;{{meta.tema}}&rdquo;</strong> yang rencananya dilaksanakan pada tanggal {{meta.malamPuncak}} di {{meta.lokasi}}.",
    suratP3: "Sehubungan dengan pelaksanaan kegiatan tersebut, kami bermaksud mengajukan permohonan <strong>bantuan donasi</strong> kepada Bapak/Ibu guna memenuhi kebutuhan biaya kegiatan peringatan HUT RI ke-{{meta.hut}} {{meta.rw}} sebagaimana rincian anggaran terlampir.",
    suratP4: "Sebagai bahan pertimbangan, bersama surat ini kami lampirkan proposal kegiatan lengkap. Besar harapan kami agar Bapak/Ibu berkenan memberikan respon positif atas permohonan bantuan donasi ini.",
    penutupP1: "Demikian proposal Peringatan Hari Ulang Tahun Republik Indonesia yang ke-{{meta.hut}} tingkat {{meta.rw}} {{meta.desa}} ini kami susun sebagai gambaran umum kegiatan dan sebagai dasar pengajuan permohonan bantuan kepada <strong>{{penerima.namaLengkap}}</strong> serta seluruh pihak yang berkenan mendukung terselenggaranya kegiatan ini.",
    penutupP2: "Kami menyadari bahwa keberhasilan kegiatan ini tidak akan tercapai tanpa dukungan dari berbagai pihak. Oleh karena itu, kami sangat mengharapkan respon positif dan kerja sama yang baik.",
    penutupDisclaimer: "<strong>Catatan:</strong> Seluruh rangkaian kegiatan dalam proposal ini masih bersifat rencana. Pelaksanaan setiap kegiatan akan diimplementasikan apabila anggaran dan kondisi lapangan memungkinkan, serta dapat disesuaikan berdasarkan musyawarah panitia dan warga.",
    timelineSosialisasi: "Sosialisasi ke seluruh warga {{meta.rw}} dan penyebaran proposal kepada calon donatur dan mitra kebaikan."
  },

  kegiatan1: {
    tags: "Sport &bull; Karnaval &bull; Pra-Agustus",
    title: "Perlombaan Pra-Agustus",
    date: "21 Juli &ndash; 2 Agustus 2026",
    desc: "Rangkaian turnamen pra-HUT RI meliputi <strong>bola voli</strong> dan <strong>badminton</strong> antar tim/RT warga, <strong>futsal anak</strong>, serta <strong>karnaval 17-an</strong> keliling lingkungan RW. Kegiatan ini menjadi momentum pembuka semangat kemerdekaan sekaligus arena silaturahmi antarwarga.",
    meta: "<strong>Cabang:</strong> Voli, Badminton, Futsal Anak, Karnaval 17-an &nbsp;&nbsp; <strong>Lokasi:</strong> Lapangan RW 16 &amp; jalur lingkungan RT"
  },

  rangkaianSub: "Pra-Agustus, lomba 17-an, hingga malam puncak — PHBN RW 16 tahun 2026",

  timelinePraAgustus: {
    date: "21 Juli &ndash; 2 Agustus 2026",
    title: "Perlombaan Pra-Agustus",
    desc: "Turnamen voli &amp; badminton antar RT, futsal anak, dan karnaval 17-an melintasi lingkungan RW — pembuka rangkaian PHBN."
  }
};
