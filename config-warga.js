/**
 * Config default — Proposal WARGA (iuran & sosialisasi ke warga)
 */
window.PROPOSAL_CONFIG = {
  variant: "warga",

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
    nama: "Seluruh Warga RW 16",
    namaLengkap: "Seluruh Warga RW 16 Desa Mandalasari",
    jabatan: "Warga RW 16"
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
    nomor: "02/PHBN-RW16/VII/2026",
    lampiran: "1 (satu) berkas proposal",
    perihal: "Pemberitahuan Kegiatan & Iuran PHBN HUT RI Ke-81",
    tempat: "Cikalong Wetan",
    tanggal: "13 Juli 2026",
    penerimaJabatan: "Seluruh Warga"
  },

  anggaran: {
    catatan: "Anggaran di atas merupakan estimasi kebutuhan biaya berdasarkan harga pasar setempat dan dapat berubah sesuai kondisi lapangan. Sumber pendanaian utama berasal dari iuran warga RW 16 dan swadaya masyarakat. Laporan pertanggungjawaban keuangan akan disampaikan secara transparan kepada seluruh warga setelah kegiatan selesai dilaksanakan.",
    items: [
      { type: "section", label: "A. Kesekretariatan & Publikasi" },
      { no: 1, uraian: "Cetak proposal, buku tamu & dokumentasi kegiatan", vol: 1, sat: "Paket", harga: 250000, jumlah: 250000 },
      { no: 2, uraian: "Spanduk, banner & promosi kegiatan", vol: 1, sat: "Paket", harga: 400000, jumlah: 400000 },
      { no: 3, uraian: "Bendera merah putih & atribut 17-an", vol: 1, sat: "Paket", harga: 300000, jumlah: 300000 },
      { no: 4, uraian: "Backdrop panggung & photobooth", vol: 1, sat: "Unit", harga: 200000, jumlah: 200000 },
      { type: "section", label: "B. Jalan Santai Sehat Bersama" },
      { no: 5, uraian: "Doorprize jalan santai", vol: 16, sat: "Bh", harga: 50000, jumlah: 800000 },
      { no: 6, uraian: "Snack & minuman peserta jalan santai", vol: 160, sat: "Porsi", harga: 5000, jumlah: 800000 },
      { no: 7, uraian: "Nomor dada, banner start/finish", vol: 1, sat: "Paket", harga: 200000, jumlah: 200000 },
      { no: 8, uraian: "Operasional (petugas, P3K, keamanan)", vol: 1, sat: "Paket", harga: 350000, jumlah: 350000 },
      { type: "section", label: "C. Lomba Anak 17-an" },
      { no: 9, uraian: "Peralatan & perlengkapan lomba", vol: 1, sat: "Paket", harga: 700000, jumlah: 700000 },
      { no: 10, uraian: "Hadiah, piala & sertifikat pemenang", vol: 1, sat: "Paket", harga: 1150000, jumlah: 1150000 },
      { no: 11, uraian: "Snack & minuman peserta lomba", vol: 150, sat: "Porsi", harga: 3333, jumlah: 500000 },
      { type: "section", label: "D. Malam Apresiasi Seni (Puncak)" },
      { no: 12, uraian: "Sewa panggung, sound system & lighting", vol: 1, sat: "Paket", harga: 2000000, jumlah: 2000000 },
      { no: 13, uraian: "Snack, makan & minuman tamu undangan", vol: 180, sat: "Porsi", harga: 5000, jumlah: 900000 },
      { no: 14, uraian: "Dekorasi panggung & lighting malam puncak", vol: 1, sat: "Paket", harga: 580000, jumlah: 580000 },
      { type: "section", label: "E. Lain-lain" },
      { no: 16, uraian: "Transport & operasional panitia", vol: 1, sat: "Paket", harga: 350000, jumlah: 350000 },
      { no: 17, uraian: "Dana cadangan darurat", vol: 1, sat: "Paket", harga: 300000, jumlah: 300000 }
    ]
  },

  hal9: {
    barTitle: "Halaman 09 • Rencana Iuran Warga",
    title: "Rencana Iuran Warga",
    subtitle: "Kontribusi warga RW 16 untuk PHBN HUT RI ke-81",
    intro: "Panitia PHBN HUT RI ke-{{meta.hut}} {{meta.rw}} {{meta.desa}} mengajak seluruh warga untuk berpartisipasi mewujudkan perayaan HUT RI ke-{{meta.hut}} yang meriah, inklusif, dan bermakna. Iuran warga digunakan sepenuhnya untuk biaya operasional kegiatan sebagaimana rincian anggaran pada halaman sebelumnya.",
    partisipasiTitle: "Besaran Iuran",
    items: [
      { letter: "A", title: "Iuran per KK", desc: "Besaran iuran ditetapkan berdasarkan musyawarah warga. Nominal final akan diinformasikan melalui Ketua RT masing-masing dan grup WhatsApp warga." },
      { letter: "B", title: "Skema Pembayaran", desc: "Pembayaran dapat dilakukan secara bertahap (paling lambat H-7 malam puncak) melalui bendahara panitia atau perwakilan RT." },
      { letter: "C", title: "Swadaya & Donor Sukarela", desc: "Warga yang ingin memberikan kontribusi di atas iuran wajib dipersilakan. Seluruh penerimaan dicatat dan dilaporkan secara transparan." },
      { letter: "D", title: "Penggunaan Dana", desc: "Dana iuran warga digunakan untuk kebutuhan kegiatan: lomba, jalan santai, konsumsi, perlengkapan, dan malam puncak — bukan untuk keperluan pribadi panitia." }
    ],
    benefitsTitle: "Informasi & Transparansi",
    benefits: [
      "<strong>Laporan Keuangan</strong> — Rekapitulasi penerimaan dan pengeluaran disampaikan kepada warga setelah kegiatan selesai.",
      "<strong>Forum Warga</strong> — Musyawarah dan update progres kegiatan diinformasikan melalui Ketua RT dan grup WhatsApp RW 16.",
      "<strong>Bendahara Panitia</strong> — Konfirmasi pembayaran dan tanya jawab iuran melalui Bendahara Panitia PHBN.",
      "<strong>Gotong Royong</strong> — Warga juga dapat membantu melalui tenaga, perlengkapan, atau konsumsi sesuai kesepakatan RT."
    ]
  },

  templates: {
    suratP1: "Puji syukur kehadirat Tuhan Yang Maha Esa. Shalawat serta salam semoga senantiasa tercurah kepada Nabi Muhammad SAW, keluarga, sahabat, dan ummatnya hingga akhir zaman.",
    suratP2: "Bersama ini Panitia Peringatan Hari Besar Nasional HUT RI Ke-{{meta.hut}} {{meta.rw}} {{meta.desa}}, {{meta.kecamatan}}, {{meta.kabupaten}}, memberitahukan kepada seluruh warga bahwa kami akan menyelenggarakan <strong>Peringatan Hari Ulang Tahun Republik Indonesia yang ke-{{meta.hut}}</strong> dengan tema <strong>&ldquo;{{meta.tema}}&rdquo;</strong> pada tanggal {{meta.malamPuncak}} di {{meta.lokasi}}.",
    suratP3: "Untuk kelancaran pelaksanaan kegiatan, panitia membutuhkan dukungan berupa <strong>iuran warga</strong> dan partisipasi aktif seluruh lapisan masyarakat RW 16. Rincian kebutuhan biaya, rencana iuran, dan susunan kegiatan terlampir dalam proposal ini.",
    suratP4: "Besar harapan kami agar seluruh warga RW 16 dapat berpartisipasi — baik melalui iuran, tenaga, maupun kehadiran — agar perayaan HUT RI ke-{{meta.hut}} berjalan meriah, khidmat, dan penuh kebersamaan.",
    penutupP1: "Demikian proposal Peringatan Hari Ulang Tahun Republik Indonesia yang ke-{{meta.hut}} tingkat {{meta.rw}} {{meta.desa}} ini kami susun sebagai pedoman pelaksanaan dan informasi kepada <strong>seluruh warga RW 16</strong> agar kegiatan dapat berjalan lancar, transparan, dan bermakna.",
    timelineSosialisasi: "Sosialisasi ke seluruh warga {{meta.rw}}, penyebaran informasi kegiatan, dan koordinasi iuran melalui Ketua RT masing-masing."
  }
};
