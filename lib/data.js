// ============================================================
//  KONFIGURASI UNDANGAN — Aqiqah (Storybook bayi)
//  Ubah seluruh isi undangan dari satu tempat ini saja.
//
//  Ini undangan CONTOH: nama dan tempat fiktif. Gambar di
//  /public/images adalah ilustrasi buku cerita buatan sendiri
//  (tokoh fiktif) — ganti dengan foto asli (potret 3:4) dan
//  perbarui `alt`-nya.
// ============================================================

const config = {
  // -- Meta / SEO --
  meta: {
    title: 'Aqiqah — Aisyah Khairunnisa',
    description: 'Sebuah kabar bahagia telah lahir. Dengan suka cita kami mengundang Anda di acara aqiqah putri kami.',
  },

  // -- Teks pembuka buku --
  opening: {
    cover: 'Sebuah Kabar Bahagia',
    chapter: 'Bab Pertama',
    announce: 'Alhamdulillah, telah lahir buah hati kami',
  },

  // -- Sang Bayi (tokoh utama) --
  baby: {
    name: 'Aisyah',
    fullName: 'Aisyah Khairunnisa',
    gender: 'Putri', // Putra / Putri
    birthDate: 'Senin, 3 Mei 2027',
    birthTime: '05.30 WIB',
    weight: '3,2 kg',
    length: '49 cm',
    parents: 'Bpk. Arif & Ibu Salma',
    photo: '/images/foto-bayi.webp',
    photoAlt: 'Ilustrasi Aisyah tertidur berbedong di atas bantal bulan sabit',
  },

  // -- Arti nama (doa di balik nama) --
  nameMeaning: [
    { part: 'Aisyah', meaning: 'Yang hidup — semoga hidupnya penuh berkah' },
    { part: 'Khairunnisa', meaning: 'Sebaik-baik perempuan' },
  ],

  // -- Acara: aqiqah pada hari ketujuh kelahiran --
  event: {
    name: 'Tasyakuran Aqiqah',
    date: 'Minggu, 9 Mei 2027',
    time: '09.00 - 12.00 WIB',
    venue: 'Kediaman Keluarga',
    address: 'Rungkut, Surabaya',
    start: '2027-05-09T09:00:00+07:00',
    end: '2027-05-09T12:00:00+07:00',
  },

  // Contoh ini menunjuk area Rungkut. Ganti `q=` dengan nama/koordinat tempat acara.
  location: {
    label: 'Kediaman Keluarga Arif, Rungkut, Surabaya',
    note: 'Peta contoh menunjukkan area Rungkut.',
    mapEmbed: 'https://www.google.com/maps?q=Rungkut,+Surabaya&output=embed',
    mapLink: 'https://maps.google.com/?q=Rungkut,+Surabaya',
  },

  // -- Album (potret 3:4) --
  gallery: [
    { src: '/images/foto-1.webp', alt: 'Jemari mungil Aisyah menggenggam telunjuk Ayah' },
    { src: '/images/foto-2.webp', alt: 'Ibu Salma mendekap Aisyah di dekat jendela pagi' },
    { src: '/images/foto-3.webp', alt: 'Ayah Arif melantunkan adzan pelan di telinga Aisyah' },
    { src: '/images/foto-4.webp', alt: 'Kaki mungil Aisyah dengan gelang manik bertuliskan namanya' },
    { src: '/images/foto-5.webp', alt: 'Aisyah tertidur di ayunan rotan di bawah mainan gantung bulan dan bintang' },
    { src: '/images/foto-6.webp', alt: 'Ayah Arif, Ibu Salma, dan Aisyah berkumpul di rumah' },
  ],

  // -- Musik latar (file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/latar.mp3',
    title: 'Wiegenlied (Guten Abend, gut’ Nacht) — Johannes Brahms',
    credit: 'kotak musik oleh stephan, domain publik',
  },

  // -- Footer / penutup --
  footer: {
    closing:
      'Merupakan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu untuk ananda.',
    hashtag: '#WelcomeBabyAisyah',
  },

  // -- Halaman /kirim (tautan undangan per tamu) --
  kirim: {
    pesan:
      'Assalamu’alaikum {nama},\n\nAlhamdulillah, putri kami Aisyah Khairunnisa telah lahir pada Senin, 3 Mei 2027. Kami mengundang Anda ke Tasyakuran Aqiqah, Minggu, 9 Mei 2027, pukul 09.00 WIB.\n\nBuka buku ceritanya: {tautan}\n\nDoa Anda adalah hadiah terindah untuk si kecil.',
  },
};

export default config;
