// src/data/certificates.ts
// ─────────────────────────────────────────────────────────
// Data Lengkap Sertifikat, Lisensi & Dokumen Prestasi
// Asisyah Sarah Azzahra
// ─────────────────────────────────────────────────────────

export interface CertificateFile {
  name: string;
  url: string;
  type: "image" | "pdf";
  label?: string; // e.g. "Tampak Depan", "Tampak Belakang", "Dokumen Lengkap"
}

export interface CertificateItem {
  id: string;
  title: string;
  subtitle: string;
  issuer: string;
  year: string;
  category: "kompetensi" | "softskill" | "magang" | "organisasi" | "akademik";
  categoryLabelId: string;
  categoryLabelEn: string;
  descriptionId: string;
  descriptionEn: string;
  thumbnail?: string; // Image URL for preview card
  files: CertificateFile[];
  badge?: string;
}

export const CERTIFICATES: CertificateItem[] = [
  // 01 — UJIKOM RPL (Kompetensi Kejuruan)
  {
    id: "ujikom-rpl",
    title: "Sertifikat Uji Kompetensi Keahlian — Rekayasa Perangkat Lunak",
    subtitle: "Uji Kompetensi Keahlian (UKK) Rekayasa Perangkat Lunak dan Gim",
    issuer: "SMK Negeri 1 Ciamis & Badan Standar Nasional Pendidikan",
    year: "2023",
    category: "kompetensi",
    categoryLabelId: "Kompetensi Kejuruan",
    categoryLabelEn: "Technical Competency",
    descriptionId:
      "Sertifikat uji kompetensi kejuruan bidang Rekayasa Perangkat Lunak (RPL), memvalidasi kecakapan dalam perancangan basis data, logika pemrograman web, dan rekayasa perangkat lunak terstruktur.",
    descriptionEn:
      "Vocational competency certificate in Software Engineering, validating proficiencies in database design, web programming logic, and structured application development.",
    badge: "Kompetensi Utama",
    files: [
      {
        name: "Sertifikat Ujikom RPL.pdf",
        url: "/sertifikat/SERTIFIKAT UJIKOM RPL.pdf",
        type: "pdf",
        label: "Dokumen Resmi PDF",
      },
    ],
  },

  // 02 — Leadership and Creative Thinking (Soft Skills)
  {
    id: "leadership-creative-thinking",
    title: "Sertifikat Pelatihan — Leadership and Creative Thinking",
    subtitle: "Training Soft Skill (TSS) Pengembangan Karakter & Kepemimpinan",
    issuer: "Politeknik LP3I Kampus Tasikmalaya",
    year: "2024",
    category: "softskill",
    categoryLabelId: "Soft Skills & Kepemimpinan",
    categoryLabelEn: "Soft Skills & Leadership",
    descriptionId:
      "Sertifikat resmi pelatihan kepemimpinan dan berpikir kreatif, membekali pemecahan masalah inovatif, dinamika kepemimpinan tim, dan komunikasi strategis.",
    descriptionEn:
      "Official certificate in leadership and creative thinking training, covering innovative problem solving, team leadership dynamics, and strategic communication.",
    thumbnail: "/sertifikat/Leadership and Creative Thinking/tss3depan.jpg",
    badge: "Training Soft Skill",
    files: [
      {
        name: "Halaman Depan",
        url: "/sertifikat/Leadership and Creative Thinking/tss3depan.jpg",
        type: "image",
        label: "Halaman Depan (Sertifikat)",
      },
      {
        name: "Halaman Belakang",
        url: "/sertifikat/Leadership and Creative Thinking/tss3belakang.jpg",
        type: "image",
        label: "Halaman Belakang (Materi)",
      },
    ],
  },

  // 03 — Public Speaking & Presentasi Skill (Soft Skills)
  {
    id: "public-speaking-presentation",
    title: "Sertifikat Pelatihan — Public Speaking & Presentation Skills",
    subtitle: "Training Soft Skill (TSS 4) Komunikasi & Penyampaian Presentasi",
    issuer: "Politeknik LP3I Kampus Tasikmalaya",
    year: "2024",
    category: "softskill",
    categoryLabelId: "Soft Skills & Komunikasi",
    categoryLabelEn: "Soft Skills & Communication",
    descriptionId:
      "Pelatihan komprehensif seni berbicara di depan publik, teknik presentasi persuasif, penyusunan narasi gagasan terstruktur, dan komunikasi efektif.",
    descriptionEn:
      "Comprehensive training in the art of public speaking, persuasive presentation delivery, structured narrative formulation, and effective communication.",
    thumbnail: "/sertifikat/Public Speaking & Presentasi Skill/SERTIFIKAT TSS 4 - 77.png",
    badge: "Training Soft Skill",
    files: [
      {
        name: "Halaman Depan",
        url: "/sertifikat/Public Speaking & Presentasi Skill/SERTIFIKAT TSS 4 - 77.png",
        type: "image",
        label: "Halaman Depan (Sertifikat)",
      },
      {
        name: "Halaman Belakang",
        url: "/sertifikat/Public Speaking & Presentasi Skill/SERTIFIKAT TSS ( 4 ) . BELAKANG - 77.png",
        type: "image",
        label: "Halaman Belakang (Daftar Nilai & Materi)",
      },
    ],
  },

  // 04 — Team Work Building (Soft Skills)
  {
    id: "team-work-building",
    title: "Sertifikat Pelatihan — Team Work Building",
    subtitle: "Training Soft Skill (TSS) Kolaborasi & Manajemen Konflik Tim",
    issuer: "Politeknik LP3I Kampus Tasikmalaya",
    year: "2024",
    category: "softskill",
    categoryLabelId: "Soft Skills & Kolaborasi",
    categoryLabelEn: "Soft Skills & Teamwork",
    descriptionId:
      "Pelatihan intensif pembentukan kerja sama tim yang solid, penyelarasan peran, pemecahan masalah bersama, dan sinergi antardivisi kerja.",
    descriptionEn:
      "Intensive training in collaborative teamwork, role alignment, joint problem solving, and cross-functional synergy.",
    badge: "Training Soft Skill",
    files: [
      {
        name: "Halaman Depan (Sertifikat)",
        url: "/sertifikat/Team Work Building/tss1depan.pdf",
        type: "pdf",
        label: "Halaman Depan (PDF)",
      },
      {
        name: "Halaman Belakang (Kurikulum)",
        url: "/sertifikat/Team Work Building/tss2belakang.pdf",
        type: "pdf",
        label: "Halaman Belakang (PDF)",
      },
    ],
  },

  // 05 — Gen Z, Let’s Talk (Karakter & Mental Health)
  {
    id: "gen-z-lets-talk",
    title: "Sertifikat Seminar — Gen Z, Let’s Talk: Karena Diam Bukan Solusi",
    subtitle: "Seminar Edukasi Komunikasi Efektif & Kesadaran Kesehatan Mental Generasi Muda",
    issuer: "Politeknik LP3I Tasikmalaya",
    year: "2024",
    category: "softskill",
    categoryLabelId: "Edukasi & Karakter",
    categoryLabelEn: "Character & Education",
    descriptionId:
      "Partisipasi aktif dalam seminar pengembangan kesadaran diri, pemecahan kebuntuan komunikasi, serta ketahanan mental di era transformasi digital.",
    descriptionEn:
      "Active participation in the seminar on self-awareness development, overcoming communication barriers, and fostering mental resilience in the digital era.",
    files: [
      {
        name: "Sertifikat Seminar Gen Z",
        url: "/sertifikat/Gen Z, Let’s Talk  Karena Diam Bukan Solusi/tss2.pdf",
        type: "pdf",
        label: "Dokumen Resmi PDF",
      },
    ],
  },

  // 06 — UJIKOM Office (Administrasi Perkantoran)
  {
    id: "ujikom-office",
    title: "Sertifikat Uji Kompetensi — Microsoft Office & Aplikasi Perkantoran",
    subtitle: "Standar Uji Kompetensi Pengolahan Data & Dokumen Perkantoran",
    issuer: "Lembaga Sertifikasi Kompetensi",
    year: "2023",
    category: "kompetensi",
    categoryLabelId: "Kompetensi Perkantoran",
    categoryLabelEn: "Office Administration",
    descriptionId:
      "Pengujian kompetensi operasional aplikasi pengolah kata, lembar sebar (spreadsheet), presentasi digital, dan tata kelola persuratan administratif.",
    descriptionEn:
      "Operational competency assessment in word processing, spreadsheets, digital presentations, and administrative document management.",
    badge: "Kompetensi",
    files: [
      {
        name: "Sertifikat Ujikom Office.pdf",
        url: "/sertifikat/SERTIFIKAT UJIKOM OFFICEpdf.pdf",
        type: "pdf",
        label: "Dokumen Resmi PDF",
      },
    ],
  },

  // 07 — Sertifikat PKL Disdukcapil Ciamis
  {
    id: "pkl-disdukcapil",
    title: "Sertifikat Praktik Kerja Lapangan (PKL) — Disdukcapil Ciamis",
    subtitle: "Pelaksanaan Praktik Kerja Lapangan Bidang Pemanfaatan Data & Inovasi Pelayanan",
    issuer: "Dinas Kependudukan dan Pencatatan Sipil Kabupaten Ciamis",
    year: "2024",
    category: "magang",
    categoryLabelId: "Pengalaman Kerja & PKL",
    categoryLabelEn: "Internship & Service",
    descriptionId:
      "Sertifikat kelulusan praktik kerja lapangan dengan predikat sangat baik dalam mendukung administrasi kependudukan (KIA & KTP-el), pembuatan media edukasi publik, dan tata kelola persuratan dinas.",
    descriptionEn:
      "Certificate of internship completion with distinction in supporting civic population registries (KIA & e-KTP), public educational media creation, and official correspondence.",
    badge: "Pelayanan Publik",
    files: [
      {
        name: "Sertifikat PKL Disdukcapil",
        url: "/sertifikat/SERTIFIKAT PKL ASISYAH.pdf",
        type: "pdf",
        label: "Dokumen Resmi PDF",
      },
    ],
  },

  // 08 — Sertifikat Kepengurusan Sekretaris LCC
  {
    id: "sekre-lcc",
    title: "Sertifikat Kepengurusan — Sekretaris LP3I Computer Club (LCC)",
    subtitle: "Apresiasi Dedikasi Kepengurusan UKM Teknologi Kampus",
    issuer: "LP3I Computer Club & Politeknik LP3I Kampus Tasikmalaya",
    year: "2025",
    category: "organisasi",
    categoryLabelId: "Kepengurusan Organisasi",
    categoryLabelEn: "Student Leadership",
    descriptionId:
      "Sertifikat penghargaan atas dedikasi dan kepemimpinan dalam memimpin divisi kesekretariatan, penatausahaan arsip formal, penyusunan LPJ, dan koordinasi program kerja teknologi.",
    descriptionEn:
      "Certificate of recognition for organizational leadership directing secretarial governance, archival preservation, formal reporting, and IT competency events.",
    badge: "Pengurus Inti",
    files: [
      {
        name: "Sertifikat Sekretaris LCC",
        url: "/sertifikat/SERTIFIKAT SEKRE ASISYAH.pdf",
        type: "pdf",
        label: "Dokumen Resmi PDF",
      },
    ],
  },

  // 09 — Sertifikat PKKMB LP3I Tasikmalaya
  {
    id: "pkkmb-lp3i",
    title: "Sertifikat PKKMB — Politeknik LP3I Tasikmalaya",
    subtitle: "Pengenalan Kehidupan Kampus bagi Mahasiswa Baru",
    issuer: "Politeknik LP3I Kampus Tasikmalaya",
    year: "2024",
    category: "akademik",
    categoryLabelId: "Akademik Kampus",
    categoryLabelEn: "Academic Induction",
    descriptionId:
      "Sertifikat penyelesaian masa orientasi akademik kampus dan pembentukan karakter kepemimpinan berwawasan profesional di Politeknik LP3I Tasikmalaya.",
    descriptionEn:
      "Certificate of completion for academic campus induction and professional leadership development at Politeknik LP3I Tasikmalaya.",
    files: [
      {
        name: "Sertifikat PKKMB",
        url: "/sertifikat/SERTIFIKAT PKKMB ASISYAH.pdf",
        type: "pdf",
        label: "Dokumen Resmi PDF",
      },
    ],
  },

  // 10 — Sertifikat Paduan Suara / Seni Musik
  {
    id: "paduan-suara",
    title: "Sertifikat Kepesertaan & Prestasi — Seni Musik & Paduan Suara",
    subtitle: "Apresiasi Dedikasi dan Harmonisasi Musikalitas",
    issuer: "Kompetisi & Ekstrakurikuler Seni Musik",
    year: "2023",
    category: "akademik",
    categoryLabelId: "Seni & Prestasi",
    categoryLabelEn: "Arts & Culture",
    descriptionId:
      "Apresiasi atas kontribusi dan prestasi dalam pengembangan bakat seni musik dan paduan suara, membuktikan kepekaan estetika dan disiplin kerja sama tim.",
    descriptionEn:
      "Recognition of musical dedication and choir performance excellence, demonstrating aesthetic sensitivity and disciplined collaborative performance.",
    files: [
      {
        name: "Sertifikat Paduan Suara",
        url: "/sertifikat/SERTIFIKAT PADUAN SUARA ASISYAH.pdf",
        type: "pdf",
        label: "Dokumen Resmi PDF",
      },
    ],
  },

  // 11 — KHS Semester 1-4 (Transkrip IPK 3.93)
  {
    id: "khs-lp3i",
    title: "Kartu Hasil Studi (KHS) Resmi — Semester 1 s.d. 4 (IPK 3.93)",
    subtitle: "Transkrip Hasil Pembelajaran D3 Manajemen Informatika",
    issuer: "Bagian Administrasi Akademik Politeknik LP3I Tasikmalaya",
    year: "2024–2026",
    category: "akademik",
    categoryLabelId: "Transkrip Akademik",
    categoryLabelEn: "Academic Transcript",
    descriptionId:
      "Dokumen resmi Kartu Hasil Studi (KHS) yang membuktikan pencapaian akademik konsisten dengan Indeks Prestasi Kumulatif (IPK) 3.93 pada program D3 Manajemen Informatika.",
    descriptionEn:
      "Official academic grade record confirming consistent academic excellence with a 3.93 Cumulative GPA in the Informatics Management program.",
    badge: "IPK 3.93 Resmi",
    files: [
      {
        name: "KHS 1-4 Asisyah.pdf",
        url: "/sertifikat/KHS 1-4 ASISYAH.pdf",
        type: "pdf",
        label: "Dokumen Resmi PDF",
      },
    ],
  },
];
