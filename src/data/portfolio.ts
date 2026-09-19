// src/data/portfolio.ts
// ─────────────────────────────────────────────────────────
// Sumber Data Utama untuk Seluruh Konten Portofolio
// Asisyah Sarah Azzahra — "The Woman Behind the Code"
// Junior Web Developer | Software Developer
// ─────────────────────────────────────────────────────────

export interface StatItem {
  number: string;
  label: string;
  icon: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export const PERSONAL_INFO = {
  name: "Asisyah Sarah Azzahra",
  shortName: "Asisyah Sarah",
  monogram: "A.",
  tagline: "Junior Web Developer | Software Developer",
  role: "Mahasiswa Manajemen Informatika & Software Developer",
  email: "asisyahsarahazz@gmail.com",
  phone: "081953663986",
  phoneFormatted: "+62 819-5366-3986",
  github: "https://github.com/AsisyahSarahA",
  portfolioUrl: "https://asisyahsarahazzahra.vercel.app",
  location: "Kabupaten Ciamis, Jawa Barat, Indonesia",
  photo: "/cv/asisyah.png",
  gpa: "3.93",
  semester: "4 Semester Selesai",
  institution: "Politeknik LP3I Tasikmalaya",
  studyProgram: "D3 Manajemen Informatika",
  certification: "Sertifikasi BNSP Junior Programmer (2024)",
  certificationAuthority: "Badan Nasional Sertifikasi Profesi (BNSP)",
  hakiStatus: "Terdaftar Resmi Hak Kekayaan Intelektual (HAKI)",
  headlineBio:
    "Membangun aplikasi web yang menghubungkan logika terstruktur dengan kebutuhan nyata masyarakat dan institusi. Pengembang utama N-PRESENCE terdaftar HAKI.",
  bio: "Mahasiswa aktif Program Studi Manajemen Informatika Politeknik LP3I Tasikmalaya yang memiliki minat mendalam dan keahlian teruji dalam pengembangan website, aplikasi, serta pemanfaatan teknologi informasi. Berpengalaman sebagai pengembang utama aplikasi N-PRESENCE yang telah resmi didaftarkan sebagai Kekayaan Intelektual (HAKI), memegang Sertifikasi BNSP Junior Programmer, pernah menjadi IT Support Intern, mengelola kesekretariatan organisasi kampus, dan berkontribusi dalam administrasi pelayanan publik. Terbiasa menggunakan Laravel, PHP, Next.js, React.js, TypeScript, Tailwind CSS, serta arsitektur basis data relasional. Memiliki dedikasi belajar berkelanjutan untuk tumbuh sebagai profesional teknologi yang berdaya guna.",
  stats: [
    { number: "3.93", label: "Indeks Prestasi Kumulatif (IPK)", icon: "🌟" },
    { number: "BNSP", label: "Junior Programmer 2024", icon: "📜" },
    { number: "HAKI", label: "Hak Kekayaan Intelektual", icon: "⚖️" },
    { number: "6",    label: "Proyek Nyata Terverifikasi", icon: "💻" },
  ] as StatItem[],
  languages: [
    { name: "Bahasa Indonesia", level: "Penutur Asli (Native)" },
    { name: "Bahasa Inggris", level: "Tingkat Menengah (Intermediate)" },
  ] as LanguageItem[],
  interests: [
    "Pengembangan Perangkat Lunak (Web & Mobile)",
    "Desain Antarmuka Pengguna (UI/UX)",
    "Infrastruktur Teknologi Informasi & IT Support",
    "Eksplorasi Framework & Bahasa Pemrograman Terkini",
    "Literasi Digital & Komunitas Pembelajar",
  ],
};

// ─── 6 Proyek Nyata Terverifikasi Sesuai Master Prompt ───
export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  client: string;
  role?: string;
  category: "web" | "school" | "gov" | "community";
  categoryLabel: string;
  isFeatured?: boolean;
  hakiCertified?: boolean;
  year: string;
  description: string;
  fullDescription: string;
  features: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  context?: string;
  image?: string;
  gallery?: string[];
}

export const PROJECTS: Project[] = [
  // 01 — N-PRESENCE (Primary Featured Project)
  {
    id: "n-presence",
    title: "N-PRESENCE",
    subtitle: "Sistem Informasi Presensi Digital Berbasis QR Code Scanner Terintegrasi",
    client: "SMPN Satu Atap 1 Cigalontang",
    role: "Core Programmer & Core System Architect",
    category: "school",
    categoryLabel: "School Systems",
    isFeatured: true,
    hakiCertified: true,
    year: "2026",
    context: "Sistem presensi operasional sekolah SMPN Satu Atap 1 Cigalontang",
    description:
      "Sistem informasi presensi digital berbasis QR Code Scanner terintegrasi untuk pencatatan kehadiran siswa secara otomatis, presisi, dan telah resmi terdaftar sebagai Hak Kekayaan Intelektual (HAKI).",
    fullDescription:
      "N-PRESENCE dirancang dan dibangun dari perancangan arsitektur fundamental hingga implementasi logika penuh untuk memodernisasi pencatatan presensi di SMPN Satu Atap 1 Cigalontang. Menggunakan pemindaian QR Code cepat dan basis data terstruktur, sistem ini memastikan rekapitulasi kehadiran berjalan akurat serta memangkas beban pencatatan manual. Aplikasi ini telah resmi didaftarkan sebagai Hak Kekayaan Intelektual (HAKI).",
    features: [
      "Merancang fondasi arsitektur sistem dan menyusun alur kerja aplikasi secara menyeluruh",
      "Mengembangkan serta mengimplementasikan fitur presensi berbasis QR Code Scanner",
      "Membangun struktur dan logika aplikasi terstandarisasi berdasarkan kebutuhan operasional sekolah",
      "Melakukan integrasi modul sistem, pengujian fungsionalitas, serta debugging berkelanjutan",
      "Berkolaborasi bersama tim dalam pengujian langsung di lingkungan sekolah",
      "Resmi terdaftar dan memiliki sertifikat Hak Kekayaan Intelektual (HAKI)",
    ],
    tech: ["Laravel", "PHP", "MySQL", "QR Code Engine", "Tailwind CSS"],
    githubUrl: "https://github.com/AsisyahSarahA/n-presence",
    image: "/project/n-presence/1.png",
    gallery: [
      "/project/n-presence/1.png",
      "/project/n-presence/2.png",
      "/project/n-presence/3.png",
      "/project/n-presence/6.png",
      "/project/n-presence/19.png",
    ],
  },

  // 02 — SIE-Surat (Desa Nangtang)
  {
    id: "sie-letter",
    title: "SIE-Surat",
    subtitle: "Sistem Informasi Elektronik Manajemen Surat Terpadu",
    client: "Kantor Pemerintah Desa Nangtang",
    role: "Web Developer",
    category: "gov",
    categoryLabel: "Public Service",
    isFeatured: false,
    year: "2026",
    context: "Program KKN 02 LP3I 2026 Desa Nangtang",
    description:
      "Aplikasi berbasis web untuk tata kelola administrasi surat-menyurat pemerintah desa, mendigitalisasi alur disposisi, penomoran terstruktur, dan pengarsipan naskah dinas.",
    fullDescription:
      "SIE-Surat (Sistem Informasi Elektronik Manajemen Surat Terpadu) dikembangkan sebagai bagian dari KKN 02 LP3I 2026 di Desa Nangtang guna menghadirkan tata kelola persuratan yang tertib, cepat, dan transparan. Menggantikan pembukuan manual dengan sistem disposisi digital otomatis dan pencarian arsip dinamis.",
    features: [
      "Digitalisasi alur registrasi surat masuk dan surat keluar berjenjang",
      "Sistem penomoran naskah dinas terstruktur dan pencarian arsip cepat",
      "Tata kelola disposisi tugas antarperangkat desa secara terintegrasi",
      "Rekapitulasi berkala untuk akuntabilitas administrasi desa",
    ],
    tech: ["Web Application", "PHP", "MySQL", "Database Architecture", "Tailwind CSS"],
    liveUrl: "https://sie-surat.vercel.app/",
    image: "/project/sie-surat/beranda.png",
    gallery: [
      "/project/sie-surat/beranda.png",
      "/project/sie-surat/workspace.png",
      "/project/sie-surat/daftar format surat dinas desa.png",
    ],
  },

  // 03 — Pustaka Manis (SMPN Satu Atap 1 Cigalontang)
  {
    id: "pustaka-manis",
    title: "Pustaka Manis",
    subtitle: "Aplikasi Manajemen Perpustakaan Sekolah Digital",
    client: "SMPN Satu Atap 1 Cigalontang",
    role: "Developer",
    category: "school",
    categoryLabel: "School Systems",
    isFeatured: false,
    year: "2025",
    context: "Sistem pengelolaan koleksi buku sekolah",
    description:
      "Aplikasi perpustakaan sekolah untuk katalogisasi koleksi buku, pencatatan transaksi sirkulasi peminjaman dan pengembalian, serta pendataan anggota perpustakaan.",
    fullDescription:
      "Pustaka Manis dirancang untuk menjawab tantangan pengelolaan buku fisik di lingkungan sekolah. Menyediakan sistem katalog digital yang rapi, pencatatan transaksi peminjaman siswa yang cepat, serta monitoring ketersediaan buku secara transparan.",
    features: [
      "Katalogisasi koleksi buku dengan klasifikasi kategori terstruktur",
      "Pencatatan sirkulasi peminjaman dan pengembalian buku siswa",
      "Manajemen data keanggotaan siswa dan tenaga pendidik",
      "Monitoring status ketersediaan eksemplar buku di perpustakaan",
    ],
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/AsisyahSarahA/pustaka-manis",
    image: "/project/sie-library/1.png",
    gallery: [
      "/project/sie-library/1.png",
      "/project/sie-library/2.png",
      "/project/sie-library/4.png",
      "/project/sie-library/11.png",
    ],
  },

  // 04 — Do-Rules (School Application)
  {
    id: "do-rules",
    title: "Do-Rules",
    subtitle: "Aplikasi Pencatatan & Evaluasi Pelanggaran Tata Tertib Siswa",
    client: "Lingkungan Sekolah",
    role: "Developer",
    category: "school",
    categoryLabel: "School Systems",
    isFeatured: false,
    year: "2025",
    context: "Sistem pemantauan kedisiplinan dan tata tertib siswa",
    description:
      "Aplikasi berbasis logika aturan sekolah untuk mencatat, mengklasifikasikan, dan memantau poin pelanggaran tata tertib siswa secara objektif dan terdokumentasi.",
    fullDescription:
      "Do-Rules adalah aplikasi yang mengimplementasikan aturan dan tata tertib sekolah ke dalam sistem pencatatan digital. Guru dan staf kesiswaan dapat mendokumentasikan pelanggaran kedisiplinan, menghitung akumulasi bobot poin aturan, dan menyimpan rekam jejak pembinaan siswa secara terorganisir.",
    features: [
      "Pencatatan poin pelanggaran berdasarkan buku tata tertib sekolah",
      "Kategori pelanggaran berbobot poin objektif (ringan, sedang, berat)",
      "Pencarian riwayat kedisiplinan per siswa secara transparan",
      "Dokumentasi laporan kesiswaan untuk koordinasi wali kelas dan guru BK",
    ],
    tech: ["Logic Implementation", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/AsisyahSarahA/Do-Rules-App",
  },

  // 05 — E-Katalog Desa Nangtang (UMKM)
  {
    id: "e-katalog-nangtang",
    title: "E-Katalog Desa Nangtang",
    subtitle: "Pusat Informasi Digital & Promosi UMKM Desa Nangtang",
    client: "Pelaku Usaha & Masyarakat Desa Nangtang",
    role: "Frontend Developer & Content Architect",
    category: "community",
    categoryLabel: "Community & UMKM",
    isFeatured: false,
    year: "2026",
    context: "Program KKN 02 LP3I 2026 Desa Nangtang",
    description:
      "Pusat informasi digital untuk mempromosikan produk-produk unggulan Usaha Mikro, Kecil, dan Menengah (UMKM) lokal Desa Nangtang kepada masyarakat luas.",
    fullDescription:
      "Dikembangkan dalam rangkaian program pengabdian KKN 02 LP3I 2026 di Desa Nangtang. Platform ini menjadi etalase digital yang menginventarisasi dan menampilkan profil usaha lokal, ragam produk olahan warga, kontak produsen, serta narasi potensi ekonomi desa secara menarik dan mudah diakses.",
    features: [
      "Etalase digital kurasi produk UMKM dan kerajinan lokal warga",
      "Informasi profil pengrajin, produsen, dan kontak pemesanan langsung",
      "Kategorisasi produk untuk memudahkan penjelajahan pembeli",
      "Desain responsif yang ringan diakses melalui perangkat seluler warga",
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "Vercel Deployment"],
    liveUrl: "https://e-katalog-nangtang.vercel.app/",
    image: "/project/e-katalog/beranda.png",
    gallery: [
      "/project/e-katalog/beranda.png",
      "/project/e-katalog/katalog umkm.png",
    ],
  },

  // 06 — Profil Desa Nangtang (Village Portal)
  {
    id: "profile-desa",
    title: "Profil Desa Nangtang",
    subtitle: "Portal Informasi Publik, Potensi Wilayah & Transparansi Desa",
    client: "Pemerintah Desa Nangtang",
    role: "Web Developer",
    category: "gov",
    categoryLabel: "Public Service",
    isFeatured: false,
    year: "2026",
    context: "Program KKN 02 LP3I 2026 Desa Nangtang",
    description:
      "Website profil desa informatif untuk publikasi potensi wilayah, demografi penduduk, agenda kemasyarakatan, dan transparansi kelembagaan desa.",
    fullDescription:
      "Website profil desa resmi yang dirancang untuk memperkuat keterbukaan informasi publik dan identitas digital Desa Nangtang. Menyajikan sejarah desa, struktur kelembagaan, statistik kependudukan, potensi pertanian dan wisata, serta saluran komunikasi warga secara terstruktur.",
    features: [
      "Struktur profil desa, visi misi, dan bagan kelembagaan perangkat desa",
      "Penyajian data potensi wilayah dan fasilitas umum masyarakat",
      "Kanal publikasi warta dan kegiatan kemasyarakatan terkini",
      "Aksesibilitas informasi publik ramah peramban seluler",
    ],
    tech: ["Next.js", "React.js", "Tailwind CSS", "Vercel Deployment"],
    liveUrl: "https://desa-nangtang.vercel.app/",
    image: "/project/profile-desa/2.png",
    gallery: [
      "/project/profile-desa/2.png",
      "/project/profile-desa/film dokumenter desa.png",
      "/project/profile-desa/georafis dan tanah.png",
      "/project/profile-desa/hasil umkm warga.png",
    ],
  },
];

// ─── Keahlian Teknis & Kerajinan (Tanpa Rating Bar) ───────
export interface SkillCategory {
  label: string;
  key: string;
  description: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    key: "dev",
    label: "Programming & Web Development",
    description: "Bahasa pemrograman dan kerangka kerja modern untuk membangun aplikasi web yang modular dan responsif.",
    skills: ["PHP", "Laravel", "Next.js", "React.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    key: "database",
    label: "Database Architecture",
    description: "Perancangan skema data relasional, pengorganisasian query, dan integritas penyimpanan informasi.",
    skills: ["MySQL", "SQL Server", "Firebase", "SQLite"],
  },
  {
    key: "tools",
    label: "Tools & Creative Design",
    description: "Perangkat lunak kolaborasi rekayasa, version control, desain antarmuka, dan multimedia kreatif.",
    skills: ["GitHub", "Visual Studio Code", "Figma", "Canva", "Adobe Illustrator", "Adobe Photoshop", "CapCut"],
  },
  {
    key: "soft",
    label: "Soft Skills & Professionalism",
    description: "Kapasitas interpersonal, penalaran analitis, kerja sama tim, dan kepemimpinan organisasi.",
    skills: ["Problem Solving", "Teamwork", "Communication", "Public Speaking", "Creativity", "Adaptability", "Time Management"],
  },
];

// ─── Riwayat Pengalaman, Pendidikan & Prestasi ───────────
export interface TimelineEntry {
  id: string;
  type: "certification" | "work" | "organization" | "education" | "award";
  categoryLabel: string;
  title: string;
  organization: string;
  period: string;
  location?: string;
  gpa?: string;
  description: string;
  bullets?: string[];
  badge?: string;
}

export const TIMELINE: TimelineEntry[] = [
  // ── Sertifikasi & Kekayaan Intelektual ──
  {
    id: "cert-bnsp",
    type: "certification",
    categoryLabel: "Sertifikasi Resmi",
    title: "Sertifikasi BNSP Junior Programmer",
    organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
    period: "2024",
    location: "Indonesia",
    badge: "BNSP Resmi",
    description:
      "Sertifikasi kompetensi kerja nasional standar BNSP pada skema Junior Programmer, membuktikan penguasaan algoritma pemrograman terstruktur, implementasi logika perangkat lunak, serta praktik penulisan kode terstandarisasi.",
    bullets: [
      "Standar Kompetensi Kerja Nasional Indonesia (SKKNI) bidang Pemrograman Komputer",
      "Validasi kompetensi pemahaman alur algoritma, struktur data, dan debugging aplikasi",
    ],
  },
  {
    id: "cert-haki",
    type: "certification",
    categoryLabel: "Kekayaan Intelektual",
    title: "Hak Kekayaan Intelektual (HAKI) — N-PRESENCE",
    organization: "Kementerian Hukum dan HAM Republik Indonesia",
    period: "2026",
    location: "Indonesia",
    badge: "Terdaftar HAKI",
    description:
      "Karya cipta perangkat lunak sistem informasi presensi berbasis QR Code Scanner terintegrasi untuk SMPN Satu Atap 1 Cigalontang secara resmi terdaftar dan dilindungi sebagai Kekayaan Intelektual.",
    bullets: [
      "Peran: Core Programmer & Core System Architect",
      "Karya inovasi digital institusional yang diterapkan secara nyata",
    ],
  },

  // ── Pengalaman Kerja & Magang ──
  {
    id: "work-lp3i-it",
    type: "work",
    categoryLabel: "Pengalaman Kerja / Magang",
    title: "IT Support Intern",
    organization: "Divisi IT Politeknik LP3I Kampus Tasikmalaya",
    period: "2025",
    location: "Tasikmalaya, Jawa Barat",
    description:
      "Pemeliharaan infrastruktur komputer kampus, penanganan troubleshooting perangkat keras, kesiapan laboratorium komputer, dan penyuntingan video institusional.",
    bullets: [
      "Membantu proses servis dan instalasi ulang komputer di laboratorium komputer untuk kelancaran pembelajaran",
      "Melakukan pemeriksaan teliti dan penanganan kendala perangkat keras (hardware) komputer",
      "Mendukung operasional harian Divisi IT kampus Politeknik LP3I Tasikmalaya",
      "Mengerjakan penyuntingan video dokumentasi dan publikasi sesuai kebutuhan institusi",
    ],
  },
  {
    id: "work-disdukcapil",
    type: "work",
    categoryLabel: "Pengalaman Kerja / Magang",
    title: "Staf Pemanfaatan Data dan Informasi Inovasi Pelayanan",
    organization: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Ciamis",
    period: "Oktober 2023 — Maret 2024",
    location: "Ciamis, Jawa Barat",
    description:
      "Pelayanan publik administrasi kependudukan, pembuatan konten media edukasi, dukungan pemutakhiran data, serta pengelolaan tata kelola persuratan dinas.",
    bullets: [
      "Membuat dan mengedit konten kreatif terkait edukasi serta sosialisasi pelayanan publik masyarakat",
      "Mendukung pemutakhiran data kependudukan bersama bidang PIAK dan Pemanfaatan Data",
      "Berkolaborasi langsung dalam proses penerbitan Kartu Identitas Anak (KIA) dan KTP-el",
      "Mendukung tata kelola persuratan kedinasan pada bidang Inovasi Pelayanan",
    ],
  },

  // ── Organisasi & Pengabdian Masyarakat ──
  {
    id: "org-lcc",
    type: "organization",
    categoryLabel: "Pengalaman Organisasi",
    title: "Sekretaris",
    organization: "LP3I Computer Club (LCC)",
    period: "2025",
    location: "Tasikmalaya, Jawa Barat",
    description:
      "Mengelola administrasi organisasi, pengarsipan dokumen resmi, penyusunan proposal dan laporan pertanggungjawaban (LPJ), serta koordinasi kegiatan kompetensi teknologi.",
    bullets: [
      "Mengelola administrasi dan dokumentasi kegiatan organisasi UKM teknologi kampus",
      "Menyusun serta mengarsipkan dokumen resmi, persuratan, dan laporan pertanggungjawaban",
      "Mendukung koordinasi antardivisi dalam menyukseskan program kerja kepengurusan",
      "Berkontribusi dalam kegiatan pembinaan kompetensi teknologi informasi anggota",
    ],
  },
  {
    id: "org-kkn",
    type: "organization",
    categoryLabel: "Pengabdian Masyarakat (KKN)",
    title: "Divisi Pendidikan — KKN 02 LP3I 2026",
    organization: "Desa Nangtang, Kabupaten Tasikmalaya",
    period: "2026",
    location: "Desa Nangtang, Tasikmalaya",
    description:
      "Pelaksanaan program pengabdian masyarakat di sektor pendidikan, literasi digital, administrasi kegiatan, serta kolaborasi pengembangan website desa dan katalog UMKM.",
    bullets: [
      "Mendukung realisasi program kerja bidang pendidikan di Desa Nangtang",
      "Berkolaborasi solid bersama anggota tim dari persiapan hingga eksekusi lapangan",
      "Membantu administrasi kegiatan dan menyusun dokumentasi program kemasyarakatan",
    ],
  },

  // ── Pendidikan Formal ──
  {
    id: "edu-lp3i",
    type: "education",
    categoryLabel: "Pendidikan Formal",
    title: "D3 Manajemen Informatika",
    organization: "Politeknik LP3I Tasikmalaya",
    period: "2024 — 2027",
    location: "Tasikmalaya, Jawa Barat",
    gpa: "3.93",
    description:
      "Menyelesaikan 4 semester dengan fokus pembelajaran intensif pada rekayasa perangkat lunak, pemrograman web, analisis sistem, dan basis data dengan IPK 3.93.",
    bullets: [
      "Fokus kurikulum: Web Programming, Framework Programming, Database Client Server, OOP, Desain Grafis, Analisis & Desain Sistem",
      "Mempertahankan Indeks Prestasi Kumulatif (IPK) 3.93",
      "Aktif sebagai pengurus organisasi kampus LP3I Computer Club",
    ],
  },
  {
    id: "edu-smkn1",
    type: "education",
    categoryLabel: "Pendidikan Formal",
    title: "SMK Negeri 1 Ciamis",
    organization: "Rekayasa Perangkat Lunak dan Gim (RPLG)",
    period: "2020 — 2023",
    location: "Ciamis, Jawa Barat",
    description:
      "Mempelajari fondasi perangkat lunak, algoritma pemrograman, pengembangan web terstruktur, arsitektur basis data relasional, dan perancangan sistem informasi.",
    bullets: [
      "Fondasi pemrograman web, algoritma logika terstruktur, dan basis data",
      "Praktik rekayasa perangkat lunak dan analisis alur sistem",
    ],
  },

  // ── Prestasi & Penghargaan Kompetisi (Sesuai CV) ──
  {
    id: "award-wjlrc",
    type: "award",
    categoryLabel: "Prestasi & Penghargaan",
    title: "Juara 2 Lomba Reportase WJLRC Tingkat Provinsi",
    organization: "West Java Leader’s Reading Challenge (Pemerintah Provinsi Jawa Barat)",
    period: "2016",
    description:
      "Meraih Juara 2 tingkat Provinsi Jawa Barat dalam kompetisi reportase literasi, mengasah kemampuan analisis, public speaking, dan narasi terstruktur.",
  },
  {
    id: "award-payung-geulis",
    type: "award",
    categoryLabel: "Prestasi & Penghargaan",
    title: "Juara 1 Lomba Melukis Payung Geulis",
    organization: "Wilayah Priangan Timur",
    period: "2020",
    description:
      "Meraih Juara 1 dalam kompetisi pelestarian budaya seni rupa Payung Geulis se-Priangan Timur, membuktikan kepekaan estetika visual dan ketelitian detail.",
  },
  {
    id: "award-marching-band",
    type: "award",
    categoryLabel: "Prestasi & Penghargaan",
    title: "Juara 1 Solo Pianika Ciamis Open Marching Band",
    organization: "Kejuaraan Tingkat Provinsi Jawa Barat",
    period: "2018",
    description:
      "Meraih Juara 1 kategori Solo Pianika tingkat Provinsi Jawa Barat, membentuk kedisiplinan latihan, konsentrasi performa, dan presisi ritmis.",
  },
  {
    id: "award-fls2n-kec",
    type: "award",
    categoryLabel: "Prestasi & Penghargaan",
    title: "Juara 1 Seni Musik Pianika FLS2N Tingkat Kecamatan",
    organization: "Festival dan Lomba Seni Siswa Nasional (FLS2N)",
    period: "2016",
    description:
      "Meraih Juara 1 cabang seni musik instrumen pianika pada ajang FLS2N tingkat kecamatan.",
  },
  {
    id: "award-fls2n-kab",
    type: "award",
    categoryLabel: "Prestasi & Penghargaan",
    title: "Juara 2 Seni Musik Pianika FLS2N Tingkat Kabupaten",
    organization: "Festival dan Lomba Seni Siswa Nasional (FLS2N)",
    period: "2016",
    description:
      "Meraih Juara 2 cabang seni musik instrumen pianika pada ajang FLS2N di tingkat Kabupaten Ciamis.",
  },
];
