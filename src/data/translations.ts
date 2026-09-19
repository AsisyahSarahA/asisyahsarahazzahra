// src/data/translations.ts
// ─────────────────────────────────────────────────────────
// Complete Bilingual Dictionary (Indonesian & English)
// Asisyah Sarah Azzahra — "The Woman Behind the Code"
// ─────────────────────────────────────────────────────────

export interface TimelineEntryI18n {
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

export interface ProjectI18n {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  category: "all" | "web" | "school" | "gov" | "community";
  categoryLabel: string;
  isFeatured?: boolean;
  hakiCertified?: boolean;
  year: string;
  context: string;
  description: string;
  fullDescription: string;
  features: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  gallery?: string[];
}

export const TRANSLATIONS = {
  id: {
    nav: {
      projects: "Karya Terpilih",
      about: "Tentang",
      skills: "Keahlian",
      experience: "Perjalanan",
      certificates: "Sertifikat",
      contact: "Kontak",
      downloadCv: "Unduh CV",
      location: "Ciamis, Jawa Barat",
    },
    hero: {
      eyebrow: "Portofolio / Perangkat Lunak & Pengalaman Digital",
      badgeWomenInTech: "Women in Tech",
      headlineLine1: "Membangun produk digital",
      headlineLine2: "dengan logika, rasa ingin tahu,",
      headlineLine3: "dan ketulusan.",
      subheadline: "Junior Web Developer & Mahasiswa Manajemen Informatika dari Jawa Barat. Saya merancang aplikasi web yang menghubungkan ketelitian logika terstruktur dengan kebutuhan nyata institusi dan masyarakat.",
      ctaProjects: "Jelajahi Karya",
      ctaContact: "Mari Terhubung",
      ctaDownloadCv: "Unduh CV (PDF)",
      scroll: "Gulir",
      photoBadge: "HAKI ✓ · BNSP 2024",
      photoSub: "Asisyah Sarah · Ciamis, Indonesia",
      stats: [
        { value: "3.93", label: "IPK Kumulatif LP3I" },
        { value: "BNSP", label: "Junior Programmer" },
        { value: "HAKI", label: "Kekayaan Intelektual" },
        { value: "6", label: "Proyek Nyata" },
      ],
    },
    projects: {
      label: "01 — Karya Terpilih",
      headingLead: "Aplikasi nyata,",
      headingAccent: "solusi digital.",
      description: "Setiap perangkat lunak dibangun untuk memecahkan persoalan nyata—dari presensi sekolah berbasis QR Code scanner, tata kelola persuratan desa, hingga katalog digital UMKM lokal.",
      filterAll: "Semua Karya",
      filterSchool: "Sistem Sekolah",
      filterGov: "Pelayanan Publik",
      filterCommunity: "Komunitas & UMKM",
      hakiBadge: "Terdaftar Resmi HAKI",
      featuredLabel: "Proyek Unggulan Utama",
      viewDetails: "Buka Studi Kasus",
      viewLive: "Kunjungi Situs",
      viewGithub: "Repositori GitHub",
      viewPhoto: "Lihat Gambar",
      viewGallery: "Galeri Foto",
      modalClient: "Institusi / Klien",
      modalRole: "Peran Utama",
      modalYear: "Tahun",
      modalContext: "Konteks Proyek",
      modalKeyFeatures: "Kontribusi & Fitur Kunci",
      modalTech: "Teknologi Terverifikasi",
      btnGithub: "Buka di GitHub",
      btnLive: "Buka Aplikasi",
    },
    about: {
      label: "02 — Di Balik Antarmuka",
      headingLead: "Pikiran penasaran,",
      headingAccent: "tumbuh dalam teknologi.",
      tagline: "Bukan sekadar menulis baris kode—tetapi merancang perangkat yang benar-benar bermanfaat bagi manusia.",
      storyP1: "Saya Asisyah Sarah Azzahra, mahasiswa tingkat akhir Program Studi D3 Manajemen Informatika di Politeknik LP3I Tasikmalaya dengan Indeks Prestasi Kumulatif 3.93. Perjalanan saya di dunia teknologi berakar dari rasa penasaran yang jujur terhadap bagaimana logika algoritma dapat disederhanakan menjadi antarmuka yang ramah dan manusiawi.",
      storyP2: "Saya telah mengembangkan dan mengarsiteki N-PRESENCE, sistem presensi digital berbasis QR Code Scanner yang telah resmi tercatat sebagai Hak Kekayaan Intelektual (HAKI) di Kemenkumham RI. Di samping itu, saya memegang sertifikasi nasional BNSP Junior Programmer (2024) dan berpengalaman dalam pemeliharaan infrastruktur laboratorium komputer (IT Support) serta pelayanan publik administrasi kependudukan di Disdukcapil Ciamis.",
      storyP3: "Sebagai seorang perempuan yang aktif meniti karier di ranah Informatika (Women in Tech), saya memandang setiap tantangan rekayasa perangkat lunak sebagai ruang untuk memadukan kedisiplinan analitis, ketelitian estetika, dan empati bagi para pengguna.",
      quote: "“Dari Ciamis, membangun dengan ketelitian logika dan ketulusan rasa—belajar secara terbuka, berkarya dengan tujuan.”",
      factsTitle: "Fakta Akademik & Personal",
      stats: [
        { number: "3.93", label: "IPK Kumulatif (4 Semester Selesai)" },
        { number: "LP3I", label: "D3 Manajemen Informatika Tasikmalaya" },
        { number: "BNSP", label: "Tersertifikasi Junior Programmer 2024" },
        { number: "Ciamis", label: "Jawa Barat, Indonesia" },
      ],
    },
    skills: {
      label: "03 — Ranah Keterampilan",
      headingLead: "Peralatan & ketelitian",
      headingAccent: "di balik karya.",
      description: "Tanpa rating persentase abstrak. Berikut adalah kumpulan teknologi, basis data, dan perangkat desain yang secara nyata saya gunakan dalam proses pengembangan perangkat lunak.",
      categories: [
        "Pemrograman & Pengembangan Web",
        "Arsitektur Basis Data",
        "Peralatan Rekayasa & Desain Kreatif",
        "Keterampilan Interpersonal & Soft Skills",
      ],
      note: "Mengutamakan kode yang bersih, struktur data yang terencana, dan kemudahan pemeliharaan jangka panjang.",
    },
    experience: {
      label: "04 — Perjalanan Belajar & Kontribusi",
      headingLead: "Pengalaman, pengabdian,",
      headingAccent: "& apresiasi.",
      showDetail: "+ Lihat kontribusi",
      hideDetail: "− Tutup kontribusi",
      sections: {
        certification: "Sertifikasi & HAKI",
        work: "Pengalaman Kerja & Magang",
        organization: "Organisasi & Pengabdian (KKN)",
        education: "Pendidikan Formal",
        award: "Prestasi & Penghargaan",
      },
    },
    contact: {
      label: "05 — Mari Terhubung",
      headingLead: "Mari membangun sesuatu",
      headingAccent: "yang bermakna.",
      description: "Terbuka untuk kesempatan magang, peran Junior Web Developer / Software Developer, kolaborasi rekayasa web, ataupun diskusi seputar teknologi dan inovasi digital.",
      statusAvailable: "Terbuka untuk peluang Junior Web Developer & Magang",
      directEmailTitle: "Surat Elektronik (Email)",
      phoneTitle: "WhatsApp / Telepon",
      locationTitle: "Domisili & Lokasi",
      formTitle: "Kirimkan Pesan Langsung",
      formName: "Nama Lengkap",
      formNamePlaceholder: "Nama Anda atau Perusahaan",
      formEmail: "Alamat Email",
      formEmailPlaceholder: "nama@contoh.com",
      formSubject: "Subjek Pesan",
      formSubjectPlaceholder: "Peluang Kerja / Kolaborasi / Pertanyaan",
      formMessage: "Pesan Anda",
      formMessagePlaceholder: "Tuliskan rincian pesan, proyek, atau penawaran kerja sama di sini...",
      formBtnSubmit: "Kirim Pesan",
      formBtnSending: "Mengirimkan...",
      formSuccess: "Terima kasih! Pesan Anda telah terkirim. Saya akan membalas segera.",
    },
    footer: {
      signature: "Dirancang & dibangun oleh Asisyah Sarah Azzahra",
      rights: "Hak Cipta Dilindungi.",
      builtWith: "Next.js · Tailwind CSS · Framer Motion · TypeScript",
    },
  },

  en: {
    nav: {
      projects: "Selected Work",
      about: "About",
      skills: "The Craft",
      experience: "Journey",
      certificates: "Certificates",
      contact: "Contact",
      downloadCv: "Download CV",
      location: "Ciamis, West Java",
    },
    hero: {
      eyebrow: "Portfolio / Software & Digital Experiences",
      badgeWomenInTech: "Women in Tech",
      headlineLine1: "I build digital things",
      headlineLine2: "with logic, curiosity,",
      headlineLine3: "and a little soul.",
      subheadline: "Junior Web Developer & Informatics Management student from West Java, Indonesia. I craft web applications connecting structured engineering logic with real human and institutional needs.",
      ctaProjects: "Explore Selected Work",
      ctaContact: "Let's Connect",
      ctaDownloadCv: "Download CV (PDF)",
      scroll: "Scroll",
      photoBadge: "HAKI ✓ · BNSP 2024",
      photoSub: "Asisyah Sarah · Ciamis, Indonesia",
      stats: [
        { value: "3.93", label: "Cumulative GPA LP3I" },
        { value: "BNSP", label: "Junior Programmer" },
        { value: "HAKI", label: "Intellectual Property" },
        { value: "6", label: "Verified Real Projects" },
      ],
    },
    projects: {
      label: "01 — Selected Work",
      headingLead: "Real software,",
      headingAccent: "digital solutions.",
      description: "Each project was built to solve practical institutional problems—from QR code attendance tracking and municipal correspondence to local artisan e-catalogs.",
      filterAll: "All Projects",
      filterSchool: "School Systems",
      filterGov: "Public Service",
      filterCommunity: "Community & UMKM",
      hakiBadge: "Registered HAKI Property",
      featuredLabel: "Primary Featured Case Study",
      viewDetails: "View Case Study",
      viewLive: "Visit Application",
      viewGithub: "GitHub Repository",
      viewPhoto: "View Image",
      viewGallery: "Photo Gallery",
      modalClient: "Client / Organization",
      modalRole: "Primary Role",
      modalYear: "Year",
      modalContext: "Project Context",
      modalKeyFeatures: "Core Contributions & Features",
      modalTech: "Verified Technologies",
      btnGithub: "View on GitHub",
      btnLive: "Open Application",
    },
    about: {
      label: "02 — Behind The Code",
      headingLead: "A curious mind,",
      headingAccent: "growing in technology.",
      tagline: "More than just writing syntax—engineering digital products that genuinely serve everyday people.",
      storyP1: "I am Asisyah Sarah Azzahra, a final-year Informatics Management student at Politeknik LP3I Tasikmalaya with a 3.93 GPA. My journey in technology stems from genuine curiosity about how computational logic can be translated into approachable, resilient human experiences.",
      storyP2: "I designed and developed N-PRESENCE, an integrated QR Code scanner attendance system registered as Intellectual Property (HAKI) with the Ministry of Law and Human Rights. Additionally, I hold the national BNSP Junior Programmer certification (2024), with hands-on experience in IT Support laboratory maintenance and municipal data administration at Disdukcapil Ciamis.",
      storyP3: "As a young woman pursuing software development (Women in Tech), I approach engineering challenges by marrying disciplined architectural logic, aesthetic clarity, and deep empathy for the people relying on technology.",
      quote: "“From Ciamis to software engineering—learning in public, building with purpose and craft.”",
      factsTitle: "Academic & Personal Facts",
      stats: [
        { number: "3.93", label: "GPA (4 Completed Semesters)" },
        { number: "LP3I", label: "Informatics Management Tasikmalaya" },
        { number: "BNSP", label: "Certified Junior Programmer 2024" },
        { number: "Ciamis", label: "West Java, Indonesia" },
      ],
    },
    skills: {
      label: "03 — The Craft",
      headingLead: "The tools & discipline",
      headingAccent: "behind the work.",
      description: "No arbitrary percentage bars or fake scores. These are the programming languages, database architectures, and design tools I actively use in production.",
      categories: [
        "Programming & Web Development",
        "Database Architecture",
        "Engineering Tools & Creative Design",
        "Interpersonal & Soft Skills",
      ],
      note: "Prioritizing clean architecture, structured data schemas, and long-term maintainability.",
    },
    experience: {
      label: "04 — Journey of Learning",
      headingLead: "Experience, service,",
      headingAccent: "& milestones.",
      showDetail: "+ Show details",
      hideDetail: "− Hide details",
      sections: {
        certification: "Certifications & HAKI",
        work: "Professional Experience & Internships",
        organization: "Campus Organizations & Service (KKN)",
        education: "Formal Education",
        award: "Competitions & Awards",
      },
    },
    contact: {
      label: "05 — Let's Connect",
      headingLead: "Let's build something",
      headingAccent: "meaningful together.",
      description: "Open for Junior Web Developer / Software Developer roles, internship opportunities, web engineering collaborations, and meaningful technology conversations.",
      statusAvailable: "Available for Junior Web Developer roles & internships",
      directEmailTitle: "Email Address",
      phoneTitle: "WhatsApp / Direct Phone",
      locationTitle: "Location & Base",
      formTitle: "Send a Direct Message",
      formName: "Full Name",
      formNamePlaceholder: "Your Name or Company",
      formEmail: "Email Address",
      formEmailPlaceholder: "name@example.com",
      formSubject: "Subject",
      formSubjectPlaceholder: "Job Opportunity / Collaboration / Inquiry",
      formMessage: "Message",
      formMessagePlaceholder: "Share details about your project, role, or collaboration inquiry...",
      formBtnSubmit: "Send Message",
      formBtnSending: "Sending...",
      formSuccess: "Thank you! Your message has been sent. I will get back to you shortly.",
    },
    footer: {
      signature: "Designed & engineered by Asisyah Sarah Azzahra",
      rights: "All rights reserved.",
      builtWith: "Next.js · Tailwind CSS · Framer Motion · TypeScript",
    },
  },
};

// ─── Biligual Projects Data ───────────────────────────────
export const PROJECTS_I18N: Record<"id" | "en", ProjectI18n[]> = {
  id: [
    {
      id: "n-presence",
      title: "N-PRESENCE",
      subtitle: "Sistem Informasi Presensi Digital Berbasis QR Code Scanner Terintegrasi",
      client: "SMPN Satu Atap 1 Cigalontang",
      role: "Core Programmer & Core System Architect",
      category: "school",
      categoryLabel: "Sistem Sekolah",
      isFeatured: true,
      hakiCertified: true,
      year: "2026",
      context: "Sistem presensi operasional sekolah SMPN Satu Atap 1 Cigalontang",
      description:
        "Sistem informasi presensi digital berbasis QR Code Scanner terintegrasi dengan validasi instan, pencatatan otomatis, dan telah resmi tercatat sebagai Hak Kekayaan Intelektual (HAKI).",
      fullDescription:
        "N-PRESENCE dirancang dan dibangun dari perancangan arsitektur sistem fundamental hingga implementasi logika penuh untuk menjawab kendala presensi manual di lingkungan sekolah. Menggunakan pemindaian QR Code cepat dan basis data terstruktur, sistem ini memastikan rekapitulasi kehadiran siswa berjalan akurat, cepat, dan transparan.",
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
    {
      id: "sie-letter",
      title: "SIE-Surat",
      subtitle: "Sistem Informasi Elektronik Manajemen Surat Terpadu",
      client: "Kantor Pemerintah Desa Nangtang",
      role: "Web Developer",
      category: "gov",
      categoryLabel: "Pelayanan Publik",
      isFeatured: false,
      year: "2026",
      context: "Program KKN 02 LP3I 2026 Desa Nangtang",
      description:
        "Sistem Informasi Elektronik untuk tata kelola administrasi surat-menyurat pemerintah desa, mendigitalisasi alur disposisi, penomoran terstruktur, dan pengarsipan naskah dinas.",
      fullDescription:
        "SIE-Surat dikembangkan dalam program KKN 02 LP3I 2026 di Desa Nangtang guna memodernisasi tata kelola persuratan desa. Menggantikan proses manual dengan disposisi digital, registrasi penomoran terverifikasi, dan pencarian arsip yang aman.",
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
    {
      id: "pustaka-manis",
      title: "Pustaka Manis",
      subtitle: "Aplikasi Manajemen Perpustakaan Sekolah Digital",
      client: "SMPN Satu Atap 1 Cigalontang",
      role: "Developer",
      category: "school",
      categoryLabel: "Sistem Sekolah",
      isFeatured: false,
      year: "2025",
      context: "Sistem pengelolaan koleksi buku perpustakaan sekolah",
      description:
        "Aplikasi perpustakaan sekolah untuk katalogisasi koleksi buku, pencatatan transaksi sirkulasi peminjaman dan pengembalian, serta pendataan anggota perpustakaan.",
      fullDescription:
        "Pustaka Manis dirancang untuk menjawab tantangan pengelolaan buku fisik di perpustakaan sekolah. Menyediakan sistem katalog digital yang rapi, pencatatan peminjaman siswa yang cepat, serta monitoring ketersediaan buku secara transparan.",
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
    {
      id: "do-rules",
      title: "Do-Rules",
      subtitle: "Aplikasi Pencatatan & Evaluasi Pelanggaran Tata Tertib Siswa",
      client: "Lingkungan Sekolah",
      role: "Developer",
      category: "school",
      categoryLabel: "Sistem Sekolah",
      isFeatured: false,
      year: "2025",
      context: "Sistem pemantauan kedisiplinan dan tata tertib siswa",
      description:
        "Aplikasi berbasis logika aturan sekolah untuk mencatat, mengklasifikasikan, dan memantau poin pelanggaran tata tertib siswa secara objektif dan terdokumentasi.",
      fullDescription:
        "Do-Rules mengimplementasikan tata tertib sekolah ke dalam sistem pencatatan digital. Guru kesiswaan dapat mendokumentasikan pelanggaran kedisiplinan, menghitung akumulasi bobot poin aturan, dan menyimpan rekam jejak pembinaan siswa secara terorganisir.",
      features: [
        "Pencatatan poin pelanggaran berdasarkan buku tata tertib sekolah",
        "Kategori pelanggaran berbobot poin objektif (ringan, sedang, berat)",
        "Pencarian riwayat kedisiplinan per siswa secara transparan",
        "Dokumentasi laporan kesiswaan untuk pembinaan peserta didik",
      ],
      tech: ["Logic Implementation", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/AsisyahSarahA/Do-Rules-App",
    },
    {
      id: "e-katalog-nangtang",
      title: "E-Katalog Desa Nangtang",
      subtitle: "Pusat Informasi Digital & Promosi UMKM Desa Nangtang",
      client: "Pelaku Usaha & Masyarakat Desa Nangtang",
      role: "Frontend Developer & Content Architect",
      category: "community",
      categoryLabel: "Komunitas & UMKM",
      isFeatured: false,
      year: "2026",
      context: "Program KKN 02 LP3I 2026 Desa Nangtang",
      description:
        "Pusat informasi digital untuk mempromosikan produk-produk unggulan Usaha Mikro, Kecil, dan Menengah (UMKM) lokal Desa Nangtang kepada masyarakat luas.",
      fullDescription:
        "Dikembangkan dalam program KKN 02 LP3I 2026 di Desa Nangtang. Platform ini menjadi etalase digital yang menampilkan profil usaha lokal, ragam produk olahan warga, kontak produsen, serta narasi potensi ekonomi desa secara menarik.",
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
    {
      id: "profile-desa",
      title: "Profil Desa Nangtang",
      subtitle: "Portal Informasi Publik, Potensi Wilayah & Transparansi Desa",
      client: "Pemerintah Desa Nangtang",
      role: "Web Developer",
      category: "gov",
      categoryLabel: "Pelayanan Publik",
      isFeatured: false,
      year: "2026",
      context: "Program KKN 02 LP3I 2026 Desa Nangtang",
      description:
        "Website profil desa informatif untuk publikasi potensi wilayah, demografi penduduk, agenda kemasyarakatan, dan transparansi kelembagaan desa.",
      fullDescription:
        "Website profil desa resmi yang dirancang untuk memperkuat keterbukaan informasi publik dan identitas digital Desa Nangtang. Menyajikan struktur kelembagaan, statistik kependudukan, potensi wilayah, dan saluran informasi masyarakat.",
      features: [
        "Struktur profil desa, visi misi, dan bagan kelembagaan perangkat desa",
        "Penyajian data potensi wilayah dan fasilitas umum masyarakat",
        "Kanal publikasi warta dan agenda kemasyarakatan terkini",
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
  ],

  en: [
    {
      id: "n-presence",
      title: "N-PRESENCE",
      subtitle: "Integrated QR Code Scanner Digital Attendance Information System",
      client: "SMPN Satu Atap 1 Cigalontang",
      role: "Core Programmer & Core System Architect",
      category: "school",
      categoryLabel: "School Systems",
      isFeatured: true,
      hakiCertified: true,
      year: "2026",
      context: "Institutional attendance solution for SMPN Satu Atap 1 Cigalontang",
      description:
        "An integrated digital attendance information system powered by a rapid QR Code scanner engine, offering instant verification and officially registered as Intellectual Property (HAKI).",
      fullDescription:
        "N-PRESENCE was architected and built from ground principles to full application logic to solve manual attendance tracking at SMPN Satu Atap 1 Cigalontang. Built using Laravel and relational database design, it eliminates paper-based friction, prevents attendance errors, and automates daily reporting.",
      features: [
        "Architected core system foundation and mapped complete digital workflow",
        "Engineered and deployed rapid QR Code Scanner attendance features",
        "Structured application logic aligned with school operational requirements",
        "Conducted end-to-end module integration, functional testing, and debugging",
        "Collaborated with school stakeholders during field testing and deployment",
        "Officially certified and registered as Intellectual Property (HAKI)",
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
    {
      id: "sie-letter",
      title: "SIE-Surat",
      subtitle: "Integrated Electronic Correspondence Management System",
      client: "Desa Nangtang Village Government Office",
      role: "Web Developer",
      category: "gov",
      categoryLabel: "Public Service",
      isFeatured: false,
      year: "2026",
      context: "KKN 02 LP3I 2026 Desa Nangtang Civic Project",
      description:
        "A web-based correspondence information system for village governance, digitizing incoming/outgoing mail disposition, document registry, and administrative archives.",
      fullDescription:
        "Developed during the KKN 02 LP3I 2026 program in Desa Nangtang to modernize civic administration. Replaces manual logbooks with digital disposition tracking, verified mail numbering, and fast archival searches.",
      features: [
        "Digitized tiered incoming and outgoing mail registration workflows",
        "Structured civic document numbering and quick indexed searches",
        "Integrated internal disposition tracking across village staff",
        "Periodic administrative audit summaries for transparency",
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
    {
      id: "pustaka-manis",
      title: "Pustaka Manis",
      subtitle: "Digital School Library Management Application",
      client: "SMPN Satu Atap 1 Cigalontang",
      role: "Developer",
      category: "school",
      categoryLabel: "School Systems",
      isFeatured: false,
      year: "2025",
      context: "School library inventory & lending system",
      description:
        "A school library application for cataloging book collections, logging student checkout/return circulation, and managing membership records.",
      fullDescription:
        "Pustaka Manis was developed to overcome physical book management hurdles in educational environments. Features structured digital cataloging, swift circulation records, and book availability tracking.",
      features: [
        "Digital book cataloging with clean categorized indexing",
        "Fast student checkout and return transaction tracking",
        "Membership management for students and faculty",
        "Transparent inventory status across book copies",
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
    {
      id: "do-rules",
      title: "Do-Rules",
      subtitle: "Student Discipline & Violation Tracking Application",
      client: "School Administration",
      role: "Developer",
      category: "school",
      categoryLabel: "School Systems",
      isFeatured: false,
      year: "2025",
      context: "Student disciplinary observation system",
      description:
        "A rule-based application designed to document, classify, and track student code-of-conduct violations with objective point weighting.",
      fullDescription:
        "Do-Rules codifies school regulations into a transparent digital logging system. Disciplinary staff can log infractions, calculate cumulative point tallies, and maintain historical counseling records.",
      features: [
        "Rulebook-based violation point logging and categorizing",
        "Objective point tiers (minor, moderate, serious infractions)",
        "Searchable discipline and counseling history per student",
        "Structured reporting for homeroom teachers and counselors",
      ],
      tech: ["Logic Implementation", "PHP", "MySQL", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/AsisyahSarahA/Do-Rules-App",
    },
    {
      id: "e-katalog-nangtang",
      title: "E-Katalog Desa Nangtang",
      subtitle: "Digital Showcase & Local Artisan E-Catalog",
      client: "Local UMKM & Artisans of Desa Nangtang",
      role: "Frontend Developer & Content Architect",
      category: "community",
      categoryLabel: "Community & UMKM",
      isFeatured: false,
      year: "2026",
      context: "KKN 02 LP3I 2026 Desa Nangtang Civic Project",
      description:
        "A digital promotional center showcasing verified products from local micro and small businesses (UMKM) in Desa Nangtang.",
      fullDescription:
        "Engineered as part of the KKN 02 LP3I 2026 community engagement project. The platform provides a digital storefront showcasing village craftsmen, agricultural products, maker profiles, and direct ordering channels.",
      features: [
        "Curated digital showcase for local agricultural and craft goods",
        "Producer contact profiles for direct community purchasing",
        "Intuitive category navigation for buyers",
        "Lightweight mobile-optimized presentation",
      ],
      tech: ["Next.js", "React.js", "Tailwind CSS", "Vercel Deployment"],
      liveUrl: "https://e-katalog-nangtang.vercel.app/",
      image: "/project/e-katalog/beranda.png",
      gallery: [
        "/project/e-katalog/beranda.png",
        "/project/e-katalog/katalog umkm.png",
      ],
    },
    {
      id: "profile-desa",
      title: "Profil Desa Nangtang",
      subtitle: "Official Civic Profile & Community Information Portal",
      client: "Desa Nangtang Village Government",
      role: "Web Developer",
      category: "gov",
      categoryLabel: "Public Service",
      isFeatured: false,
      year: "2026",
      context: "KKN 02 LP3I 2026 Desa Nangtang Civic Project",
      description:
        "An informative civic website publishing regional potential, demographics, community announcements, and institutional transparency.",
      fullDescription:
        "An official village web portal designed to promote public access to information and strengthen the digital identity of Desa Nangtang. Presents administrative structures, citizen demographics, local agriculture, and civic news.",
      features: [
        "Village administrative profile, vision, mission, and leadership charts",
        "Interactive display of regional potential and public infrastructure",
        "Publishing channel for ongoing village events and official bulletins",
        "Accessible, mobile-responsive layout for residents",
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
  ],
};

// ─── Biligual Timeline Data (Including BNSP & HAKI) ───────
export const TIMELINE_I18N: Record<"id" | "en", TimelineEntryI18n[]> = {
  id: [
    {
      id: "cert-bnsp",
      type: "certification",
      categoryLabel: "Sertifikasi Resmi",
      title: "Sertifikasi BNSP Junior Programmer",
      organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
      period: "2024",
      location: "Indonesia",
      badge: "Sertifikasi Nasional",
      description:
        "Sertifikasi kompetensi kerja standar BNSP pada skema Junior Programmer, memvalidasi penguasaan algoritma pemrograman, logika perangkat lunak, dan penulisan kode terstandarisasi.",
      bullets: [
        "Standar Kompetensi Kerja Nasional Indonesia (SKKNI) Pemrograman Komputer",
        "Pengujian pemahaman alur algoritma, struktur data, pengujian, dan debugging perangkat lunak",
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
      badge: "Kekayaan Intelektual",
      description:
        "Karya cipta perangkat lunak sistem informasi presensi berbasis QR Code Scanner terintegrasi resmi tercatat dan dilindungi sebagai Kekayaan Intelektual.",
      bullets: [
        "Peran: Core Programmer & Core System Architect",
        "Karya inovasi perangkat lunak yang diimplementasikan secara nyata di SMPN Satu Atap 1 Cigalontang",
      ],
    },
    {
      id: "work-lp3i-it",
      type: "work",
      categoryLabel: "Pengalaman Kerja / Magang",
      title: "IT Support Intern",
      organization: "Divisi IT Politeknik LP3I Kampus Tasikmalaya",
      period: "2025",
      location: "Tasikmalaya, Jawa Barat",
      description:
        "Pemeliharaan infrastruktur teknologi informasi kampus, penanganan troubleshooting perangkat keras, kesiapan laboratorium komputer, dan penyuntingan video.",
      bullets: [
        "Membantu proses servis dan instalasi ulang komputer di laboratorium komputer kampus",
        "Pemeriksaan teliti dan penanganan kendala perangkat keras (hardware) komputer",
        "Mendukung operasional harian Divisi IT kampus",
        "Penyuntingan video dokumentasi dan publikasi institusional",
      ],
    },
    {
      id: "work-disdukcapil",
      type: "work",
      categoryLabel: "Pengalaman Kerja / Magang",
      title: "Staf Pemanfaatan Data & Informasi Inovasi Pelayanan",
      organization: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Ciamis",
      period: "Oktober 2023 — Maret 2024",
      location: "Ciamis, Jawa Barat",
      description:
        "Pelayanan publik administrasi kependudukan, pembuatan konten media edukasi, dukungan pemutakhiran data, serta pengelolaan tata kelola persuratan dinas.",
      bullets: [
        "Membuat dan mengedit konten kreatif sosialisasi pelayanan publik masyarakat",
        "Mendukung pemutakhiran data kependudukan bersama bidang PIAK dan Pemanfaatan Data",
        "Berkolaborasi langsung dalam proses penerbitan Kartu Identitas Anak (KIA) dan KTP-el",
        "Mendukung tata kelola persuratan kedinasan pada bidang Inovasi Pelayanan",
      ],
    },
    {
      id: "org-lcc",
      type: "organization",
      categoryLabel: "Pengalaman Organisasi",
      title: "Sekretaris",
      organization: "LP3I Computer Club (LCC)",
      period: "2025",
      location: "Tasikmalaya, Jawa Barat",
      description:
        "Mengelola administrasi organisasi, pengarsipan dokumen resmi, penyusunan laporan pertanggungjawaban (LPJ), dan koordinasi kegiatan kompetensi teknologi.",
      bullets: [
        "Mengelola tata kelola administrasi dan pengarsipan UKM teknologi kampus",
        "Menyusun dokumen resmi, proposal kegiatan, dan laporan pertanggungjawaban",
        "Mendukung koordinasi antardivisi kepengurusan dalam program kerja",
        "Berkontribusi dalam pembinaan kompetensi teknologi informasi anggota",
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
        "Program pengabdian masyarakat di sektor pendidikan, literasi digital, administrasi kegiatan, serta kolaborasi website desa dan katalog UMKM.",
      bullets: [
        "Mendukung realisasi program kerja bidang pendidikan di Desa Nangtang",
        "Berkolaborasi bersama tim dalam persiapan hingga pelaksanaan di lapangan",
        "Membantu administrasi kegiatan dan menyusun dokumentasi program kemasyarakatan",
      ],
    },
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
        "Menyelesaikan 4 semester dengan fokus intensif pada rekayasa perangkat lunak, pemrograman web, analisis sistem, dan basis data dengan IPK 3.93.",
      bullets: [
        "Fokus: Web Programming, Framework Programming, Database Client Server, OOP, Desain Grafis, Analisis & Desain Sistem",
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
        "Mempelajari fondasi perangkat lunak, algoritma pemrograman, pengembangan web terstruktur, basis data relasional, dan perancangan sistem informasi.",
      bullets: [
        "Fondasi pemrograman web, algoritma logika terstruktur, dan basis data",
        "Praktik rekayasa perangkat lunak dan analisis alur sistem",
      ],
    },
    {
      id: "award-wjlrc",
      type: "award",
      categoryLabel: "Prestasi & Penghargaan",
      title: "Juara 2 Lomba Reportase WJLRC Tingkat Provinsi",
      organization: "West Java Leader’s Reading Challenge (Pemprov Jawa Barat)",
      period: "2016",
      description:
        "Juara 2 tingkat Provinsi Jawa Barat dalam kompetisi reportase literasi, mengasah kemampuan analisis kritis, public speaking, dan narasi.",
    },
    {
      id: "award-payung-geulis",
      type: "award",
      categoryLabel: "Prestasi & Penghargaan",
      title: "Juara 1 Lomba Melukis Payung Geulis",
      organization: "Wilayah Priangan Timur",
      period: "2020",
      description:
        "Juara 1 kompetisi pelestarian budaya seni rupa Payung Geulis se-Priangan Timur, membuktikan kepekaan estetika visual dan ketelitian detail.",
    },
    {
      id: "award-marching-band",
      type: "award",
      categoryLabel: "Prestasi & Penghargaan",
      title: "Juara 1 Solo Pianika Ciamis Open Marching Band",
      organization: "Kejuaraan Tingkat Provinsi Jawa Barat",
      period: "2018",
      description:
        "Juara 1 kategori Solo Pianika tingkat Provinsi Jawa Barat, membentuk kedisiplinan latihan, konsentrasi performa, dan presisi ritmis.",
    },
    {
      id: "award-fls2n-kec",
      type: "award",
      categoryLabel: "Prestasi & Penghargaan",
      title: "Juara 1 Seni Musik Pianika FLS2N Tingkat Kecamatan",
      organization: "Festival dan Lomba Seni Siswa Nasional (FLS2N)",
      period: "2016",
      description:
        "Juara 1 cabang seni musik instrumen pianika pada ajang FLS2N tingkat kecamatan.",
    },
    {
      id: "award-fls2n-kab",
      type: "award",
      categoryLabel: "Prestasi & Penghargaan",
      title: "Juara 2 Seni Musik Pianika FLS2N Tingkat Kabupaten",
      organization: "Festival dan Lomba Seni Siswa Nasional (FLS2N)",
      period: "2016",
      description:
        "Juara 2 cabang seni musik instrumen pianika pada ajang FLS2N di tingkat Kabupaten Ciamis.",
    },
  ],

  en: [
    {
      id: "cert-bnsp",
      type: "certification",
      categoryLabel: "Official Certification",
      title: "BNSP Junior Programmer Certification",
      organization: "National Professional Certification Agency (BNSP)",
      period: "2024",
      location: "Indonesia",
      badge: "National Certification",
      description:
        "National workplace competency certification under the BNSP Junior Programmer scheme, validating algorithmic logic, software engineering implementation, and standardized code craftsmanship.",
      bullets: [
        "Indonesian National Work Competency Standards (SKKNI) for Computer Programming",
        "Verified mastery in algorithmic flow, data structures, application testing, and debugging",
      ],
    },
    {
      id: "cert-haki",
      type: "certification",
      categoryLabel: "Intellectual Property",
      title: "Intellectual Property (HAKI) — N-PRESENCE",
      organization: "Ministry of Law and Human Rights Republic of Indonesia",
      period: "2026",
      location: "Indonesia",
      badge: "Registered Property",
      description:
        "Software copyright for the integrated QR Code scanner attendance information system officially registered and protected under Indonesian Intellectual Property law.",
      bullets: [
        "Role: Core Programmer & Core System Architect",
        "Applied digital innovation deployed directly in institutional school operations",
      ],
    },
    {
      id: "work-lp3i-it",
      type: "work",
      categoryLabel: "Professional Experience / Internship",
      title: "IT Support Intern",
      organization: "IT Division Politeknik LP3I Kampus Tasikmalaya",
      period: "2025",
      location: "Tasikmalaya, West Java",
      description:
        "Maintained campus IT infrastructure, resolved hardware troubleshooting tickets, prepared computer labs for academic sessions, and edited institutional multimedia.",
      bullets: [
        "Assisted computer maintenance, repair, and OS reinstallation across campus computer labs",
        "Conducted thorough inspections and repairs for hardware troubleshooting issues",
        "Provided daily operational assistance to the university IT Division",
        "Produced and edited video documentation for institutional academic publications",
      ],
    },
    {
      id: "work-disdukcapil",
      type: "work",
      categoryLabel: "Professional Experience / Internship",
      title: "Data Utilization & Public Service Innovation Staff",
      organization: "Civil Registry & Population Office (Disdukcapil) Ciamis",
      period: "Oct 2023 — Mar 2024",
      location: "Ciamis, West Java",
      description:
        "Supported municipal civil registration, designed public educational media content, assisted database updates, and managed departmental correspondence.",
      bullets: [
        "Designed and edited public service informational content for community outreach",
        "Collaborated with population data management (PIAK) on civil record updates",
        "Assisted administrative workflows for Child Identity Cards (KIA) and e-KTP issuance",
        "Managed official departmental correspondence and municipal documentation",
      ],
    },
    {
      id: "org-lcc",
      type: "organization",
      categoryLabel: "Campus Organization",
      title: "Secretary",
      organization: "LP3I Computer Club (LCC)",
      period: "2025",
      location: "Tasikmalaya, West Java",
      description:
        "Directed organizational secretarial workflows, official documentation, activity proposals, accountability reports (LPJ), and IT competency workshops.",
      bullets: [
        "Administered organizational documentation for the university IT student club",
        "Drafted official correspondence, project proposals, and accountability reports",
        "Facilitated inter-divisional coordination across university club events",
        "Contributed to technical skill workshops and IT training sessions for members",
      ],
    },
    {
      id: "org-kkn",
      type: "organization",
      categoryLabel: "Community Service (KKN)",
      title: "Education Division — KKN 02 LP3I 2026",
      organization: "Desa Nangtang, Tasikmalaya Regency",
      period: "2026",
      location: "Desa Nangtang, Tasikmalaya",
      description:
        "Executed community service programs in education, digital literacy, and collaborative development of the official village portal and UMKM catalog.",
      bullets: [
        "Facilitated educational programs and digital literacy workshops for village youth",
        "Collaborated with the team from field research to deployment of digital projects",
        "Organized project administration and created comprehensive field documentation",
      ],
    },
    {
      id: "edu-lp3i",
      type: "education",
      categoryLabel: "Formal Education",
      title: "Associate Degree in Informatics Management",
      organization: "Politeknik LP3I Tasikmalaya",
      period: "2024 — 2027",
      location: "Tasikmalaya, West Java",
      gpa: "3.93",
      description:
        "Completed 4 semesters with an intensive focus on software engineering, web development, system analysis, and databases with a 3.93 GPA.",
      bullets: [
        "Core study: Web Programming, Frameworks, Client-Server Databases, OOP, System Analysis & Design",
        "Maintained a Cumulative GPA of 3.93",
        "Active student leader serving as Secretary of the LP3I Computer Club",
      ],
    },
    {
      id: "edu-smkn1",
      type: "education",
      categoryLabel: "Formal Education",
      title: "SMK Negeri 1 Ciamis",
      organization: "Software Engineering & Game Development (RPLG)",
      period: "2020 — 2023",
      location: "Ciamis, West Java",
      description:
        "Studied software development fundamentals, structured algorithmic problem solving, web programming, and relational database systems.",
      bullets: [
        "Foundational web development, structured algorithmic logic, and relational databases",
        "Practical software engineering and information systems modeling",
      ],
    },
    {
      id: "award-wjlrc",
      type: "award",
      categoryLabel: "Awards & Honors",
      title: "2nd Place — WJLRC Provincial Reportage Competition",
      organization: "West Java Leader’s Reading Challenge (Provincial Government)",
      period: "2016",
      description:
        "Won 2nd Place at the West Java Provincial level in literacy reportage, developing sharp analytical thinking, public speaking, and narrative synthesis.",
    },
    {
      id: "award-payung-geulis",
      type: "award",
      categoryLabel: "Awards & Honors",
      title: "1st Place — Payung Geulis Painting Competition",
      organization: "East Priangan Region",
      period: "2020",
      description:
        "1st Place winner in the cultural arts competition across East Priangan, demonstrating creative aesthetic composition and attention to visual detail.",
    },
    {
      id: "award-marching-band",
      type: "award",
      categoryLabel: "Awards & Honors",
      title: "1st Place — Solo Pianika Ciamis Open Marching Band",
      organization: "West Java Provincial Championship",
      period: "2018",
      description:
        "1st Place in Solo Pianika at the West Java Provincial Marching Band Championship, cultivating disciplined rehearsal habits and rhythmic precision.",
    },
    {
      id: "award-fls2n-kec",
      type: "award",
      categoryLabel: "Awards & Honors",
      title: "1st Place — FLS2N Pianika Music Competition",
      organization: "National Student Art Festival & Competition (District Level)",
      period: "2016",
      description:
        "1st Place in musical instrument performance at the district-level FLS2N competition.",
    },
    {
      id: "award-fls2n-kab",
      type: "award",
      categoryLabel: "Awards & Honors",
      title: "2nd Place — FLS2N Pianika Music Competition",
      organization: "National Student Art Festival & Competition (Regency Level)",
      period: "2016",
      description:
        "2nd Place in musical instrument performance at the Ciamis Regency FLS2N competition.",
    },
  ],
};
