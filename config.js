/**
 * Edit file ini untuk mengubah data proposal.
 * Atau buka edit.html di browser untuk form visual.
 */
window.PROPOSAL_CONFIG = {
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

  // Tujuan proposal & surat (sponsor / penerima)
  sponsor: {
    nama: "PT Panfila Indosari",
    brand: "RON88",
    tagline: "Produsen AMDK RON88"
  },

  panitia: {
    ketua: {
      nama: "Panny Aryanto Wibowo",
      jabatan: "Ketua Panitia HUT RI Ke-81 RW 16",
      wa: "+62 838-2263-9123",
      ttd: "" // diisi otomatis via upload di edit.html (base64)
    },
    ketuaRw: {
      nama: "Agus Kusnadi",
      jabatan: "Ketua RW 16",
      wa: "+62 859-5666-3233",
      ttd: "" // diisi otomatis via upload di edit.html (base64)
    }
  },

  surat: {
    nomor: "01/PHBN-RW16/VII/2026",
    lampiran: "1 (satu) berkas proposal",
    perihal: "Permohonan Partisipasi Sponsorship",
    tempat: "Cikalong Wetan",
    tanggal: "13 Juli 2026",
    penerimaJabatan: "Pimpinan / Manajemen"
  },

  // Paragraf surat (boleh pakai {{sponsor.namaLengkap}}, {{meta.tema}}, dll.)
  templates: {
    suratP1: "Puji syukur kehadirat Tuhan Yang Maha Esa, penghargaan dan rasa syukur kami sampaikan ke hadapan Bapak/Ibu Pimpinan <strong>{{sponsor.namaLengkap}}</strong>, semoga senantiasa diberi kesehatan dan kelancaran dalam menjalankan aktivitas perusahaan.",
    suratP2: "Bersama ini kami sampaikan bahwa Panitia Peringatan Hari Besar Nasional HUT RI Ke-{{meta.hut}} {{meta.rw}} {{meta.desa}}, {{meta.kecamatan}}, {{meta.kabupaten}}, akan menyelenggarakan <strong>Peringatan Hari Ulang Tahun Republik Indonesia yang ke-{{meta.hut}}</strong> dengan tema <strong>&ldquo;{{meta.tema}}&rdquo;</strong> yang rencananya dilaksanakan pada tanggal {{meta.malamPuncak}} di {{meta.lokasi}}.",
    suratP3: "Sehubungan dengan pelaksanaan kegiatan tersebut, kami bermaksud mengajukan permohonan <strong>partisipasi dan dukungan</strong> kepada <strong>{{sponsor.namaLengkap}}</strong> berupa <strong>dukungan media promosi</strong> berupa <strong>umbul-umbul, spanduk, backdrop panggung</strong> serta bentuk dukungan lainnya yang Bapak/Ibu anggap layak untuk kelancaran pelaksanaan kegiatan peringatan HUT RI ke-{{meta.hut}} {{meta.rw}}.",
    penutupP1: "Demikian proposal Peringatan Hari Ulang Tahun Republik Indonesia yang ke-{{meta.hut}} tingkat {{meta.rw}} {{meta.desa}} ini kami susun sebagai gambaran umum kegiatan dan sebagai dasar pengajuan permohonan partisipasi kepada <strong>{{sponsor.namaLengkap}}</strong> beserta seluruh pihak yang berkenan mendukung terselenggaranya kegiatan ini.",
    sponsorIntro: "Panitia PHBN HUT RI ke-{{meta.hut}} {{meta.rw}} {{meta.desa}} dengan hormat menawarkan kesempatan partisipasi dan dukungan kepada <strong>{{sponsor.namaLengkap}}</strong> melalui bentuk <strong>dukungan media promosi</strong>. Logo dan identitas perusahaan akan ditampilkan pada seluruh media publikasi kegiatan, sehingga brand {{sponsor.brand}} terekspos secara luas di lingkungan {{meta.rw}} dan masyarakat sekitarnya.",
    timelineSosialisasi: "Sosialisasi ke seluruh warga {{meta.rw}} dan penyebaran proposal ke mitra sponsor termasuk {{sponsor.nama}}."
  }
};
