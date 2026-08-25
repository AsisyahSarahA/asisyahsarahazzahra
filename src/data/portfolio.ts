// src/data/portfolio.ts
// ─────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Comprehensive & Modular Data Structure.
// ─────────────────────────────────────────────────────────

export const PERSONAL_INFO = {
  name: "Asisyah Sarah Azzahra",
  tagline: "IT Specialist | Junior Programmer | Digital Organizer",
  role: "Management Informatics Student & IT Support Specialist",
  email: "asisyahsrahazz@gmail.com",
  github: "https://github.com/AsisyahSarahA",
  linkedin: "https://linkedin.com/in/asisyahsarahazzahra",
  location: "Tasikmalaya / Ciamis, Jawa Barat, Indonesia",
  bio: "Seorang profesional IT yang berdedikasi dengan latar belakang kuat dalam pengembangan perangkat lunak, manajemen basis data, dan dukungan teknis sistem. Lulusan SMK Negeri 1 Ciamis (Jurusan Rekayasa Perangkat Lunak & Gim) dan saat ini menempuh pendidikan D3 Manajemen Informatika di Politeknik LP3I Tasikmalaya. Tersertifikasi BNSP Junior Programmer, saya menggabungkan keahlian teknis yang presisi dengan kemampuan organisasi yang terasah melalui pengalaman kepemimpinan sebagai Sekretaris UKM Computer Club.",
  stats: [
    { number: "7+", label: "Projects Completed", icon: "🚀" },
    { number: "1",  label: "BNSP Certification", icon: "🏆" },
    { number: "2+", label: "Years Experience",  icon: "💻" },
    { number: "10+", label: "Events Organized",  icon: "📊" },
  ],
};

// ─── Projects Data ─────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  client: string;
  category: "all" | "web" | "gov" | "edu" | "logic";
  description: string;
  fullDescription: string;
  features: string[];
  impact?: string;
  tech: string[];
  color: string;
  icon: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "sie-letter",
    title: "SIE-Letter",
    client: "Kantor Pemerintah Desa Nantang",
    category: "gov",
    description:
      "Sistem Informasi Elektronik untuk manajemen surat-menyurat berbasis web. Digitalisasi alur disposisi dan arsip surat desa.",
    fullDescription:
      "Aplikasi SIE-Letter dirancang khusus untuk memodernisasi administrasi pemerintah desa. Menggantikan proses manual dengan sistem disposisi digital otomatis, penomoran surat otomatis, serta pencarian arsip yang aman dan terstruktur.",
    features: [
      "Digitalisasi alur disposisi surat masuk & keluar",
      "Pencarian & pengarsipan dokumen cepat berkategori",
      "Manajemen hak akses bertingkat (Kades, Sekdes, Staf)",
      "Ekspor laporan rekapitulasi surat format PDF/Excel",
    ],
    impact: "Meningkatkan efisiensi pemrosesan surat desa hingga 75%.",
    tech: ["Web Based", "PHP", "MySQL", "Database Management", "Bootstrap"],
    color: "from-cyber-violet/30 to-cyber-cyan/20",
    icon: "📨",
    githubUrl: "https://github.com/AsisyahSarahA/sie-letter",
  },
  {
    id: "profile-desa",
    title: "Profile Desa Nantang",
    client: "Pemerintah Desa Nantang",
    category: "gov",
    description:
      "Website profil desa informatif untuk publikasi potensi desa, demografi, dan berita kegiatan warga.",
    fullDescription:
      "Platform portal publik yang menyajikan informasi komprehensif mengenai profil Desa Nantang, transparansi anggaran, statistik demografi warga, potensi ekonomi lokal, serta galeri berita kegiatan kemasyarakatan.",
    features: [
      "Modul berita & pengumuman resmi desa",
      "Visualisasi data statistik demografi warga",
      "Galeri potensi wisata & UMKM lokal",
      "Formulir kontak & pengaduan masyarakat online",
    ],
    impact: "Memudahkan 2,000+ warga mengakses informasi resmi desa secara real-time.",
    tech: ["Web Based", "PHP", "MySQL", "CMS", "Tailwind CSS"],
    color: "from-purple-500/30 to-pink-500/20",
    icon: "🏘️",
    githubUrl: "https://github.com/AsisyahSarahA/profile-desa-nantang",
  },
  {
    id: "absensi-siswa",
    title: "Aplikasi Absensi Siswa",
    client: "SMP Satu Atap 1 Cigalontang",
    category: "edu",
    description:
      "Sistem pencatatan kehadiran digital untuk memantau kedisiplinan siswa secara real-time.",
    fullDescription:
      "Solusi absensi terintegrasi untuk institusi pendidikan. Memungkinkan guru mencatat kehadiran siswa dengan cepat, mencetak rekap bulanan, dan mendeteksi persentase kehadiran siswa secara akurat.",
    features: [
      "Pencatatan kehadiran harian siswa cepat & efisien",
      "Rekapitulasi otomatis bulanan per kelas",
      "Laporan persentase kedisiplinan & grafik kehadiran",
      "Notifikasi status izin/sakit/alpa",
    ],
    impact: "Mengurangi waktu rekap absensi dari 3 hari menjadi hitungan detik.",
    tech: ["Web Based", "PHP", "MySQL", "Real-time Dashboard"],
    color: "from-blue-500/30 to-cyan-500/20",
    icon: "📋",
    githubUrl: "https://github.com/AsisyahSarahA/absensi-siswa-smp",
  },
  {
    id: "perpustakaan",
    title: "Manajemen Perpustakaan",
    client: "SMP Satu Atap 1 Cigalontang",
    category: "edu",
    description:
      "Aplikasi CRUD untuk pengelolaan inventaris buku, peminjaman, dan pengembalian.",
    fullDescription:
      "Aplikasi inventarisasi perpustakaan sekolah yang mengotomatisasi pencatatan katalog buku, transaksi sirkulasi peminjaman/pengembalian, serta penghitungan denda keterlambatan secara objektif.",
    features: [
      "Katalogisasi buku digital dengan kode Barcode/ISBN",
      "Manajemen data anggota (Siswa & Guru)",
      "Transaksi peminjaman & pengembalian serbaguna",
      "Kalkulasi denda otomatis jika melewati batas waktu",
    ],
    impact: "Mempercepat proses sirkulasi pinjam buku perpustakaan.",
    tech: ["Web Based", "PHP", "MySQL", "CRUD System"],
    color: "from-green-500/30 to-teal-500/20",
    icon: "📚",
    githubUrl: "https://github.com/AsisyahSarahA/perpustakaan-smp",
  },
  {
    id: "do-rules",
    title: "DO-Rules Application",
    client: "Custom Project",
    category: "logic",
    description:
      "Aplikasi berbasis aturan/logika untuk otomasi keputusan dan implementasi algoritma kustom.",
    fullDescription:
      "Aplikasi pemroses logika aturan (rule-based engine) yang mengevaluasi himpunan kondisi parameter input untuk menghasilkan rekomendasi dan otomasi keputusan secara efisien dan konsisten.",
    features: [
      "Engine evaluasi logika berbantu pohon keputusan",
      "Visualisasi alur cabang aturan (Decision Tree)",
      "Input parameter dinamis & validasi tipe data",
      "Ekspor log hasil keputusan sistem",
    ],
    impact: "Memberikan rekomendasi objektif berbasis algoritma terstruktur.",
    tech: ["Logic Implementation", "Algorithm", "JavaScript", "Rule Engine"],
    color: "from-orange-500/30 to-yellow-500/20",
    icon: "⚙️",
    githubUrl: "https://github.com/AsisyahSarahA/do-rules-engine",
  },
  {
    id: "ukm-portal",
    title: "Portal UKM Computer Club",
    client: "Politeknik LP3I Tasikmalaya",
    category: "web",
    description:
      "Portal organisasi mahasiswa untuk manajemen keanggotaan, registrasi event, dan arsip kegiatan UKM.",
    fullDescription:
      "Platform sentralisasi organisasi Computer Club LP3I. Memfasilitasi pendaftaran anggota baru secara online, publikasi pendaftaran seminar/workshop teknis, serta repositori materi pembelajaran internal.",
    features: [
      "Formulir registrasi anggota & ticketing event",
      "Manajemen jadwal kegiatan & materi workshop",
      "Dashboard admin administrasi sekretariat",
      "Galeri karya & portofolio anggota UKM",
    ],
    impact: "Digitalisasi penuh proses administrasi & kepanitiaan UKM.",
    tech: ["Next.js", "Tailwind CSS", "JavaScript", "Database"],
    color: "from-indigo-500/30 to-purple-500/20",
    icon: "🌐",
    githubUrl: "https://github.com/AsisyahSarahA/ukm-computer-club-portal",
  },
  {
    id: "smart-inventory",
    title: "Smart Lab Asset Tracker",
    client: "Internal Campus Project",
    category: "web",
    description:
      "Sistem pemantauan status perangkat lunak & keras laboratorium komputer kampus secara berkala.",
    fullDescription:
      "Aplikasi pencatatan inventarisasi spesifikasi PC lab, kondisi periferal, riwayat pemeliharaan (maintenance log), serta pelaporan kendala perangkat oleh pengguna.",
    features: [
      "Inventarisasi spesifikasi PC Lab & peripheral",
      "Formulir ticketing laporan kerusakan perangkat",
      "Riwayat perawatan & jadwal pemeliharaan rutin",
      "Status ketersediaan lab komputer secara visual",
    ],
    impact: "Mempermudah koordinasi tim IT Support kampus dalam perbaikan alat.",
    tech: ["PHP", "SQL", "JavaScript", "System Admin"],
    color: "from-cyan-500/30 to-blue-500/20",
    icon: "🖥️",
    githubUrl: "https://github.com/AsisyahSarahA/lab-asset-tracker",
  },
];

// ─── Skills Categories ─────────────────────────────────────
export interface SkillCategory {
  label: string;
  emoji: string;
  skills: { name: string; icon: string; level: string }[];
}

export const SKILLS: SkillCategory[] = [
  {
    label: "Programming & Web",
    emoji: "💻",
    skills: [
      { name: "PHP",          icon: "🐘", level: "Advanced" },
      { name: "JavaScript",   icon: "🟨", level: "Intermediate" },
      { name: "SQL / MySQL",  icon: "🗃️", level: "Advanced" },
      { name: "HTML5 & CSS3", icon: "🌐", level: "Advanced" },
      { name: "Tailwind CSS", icon: "🎨", level: "Intermediate" },
      { name: "Python",       icon: "🐍", level: "Basic" },
    ],
  },
  {
    label: "IT Support & Systems",
    emoji: "🔧",
    skills: [
      { name: "Hardware Repair",  icon: "🖥️", level: "Advanced" },
      { name: "Networking (LAN)", icon: "🌐", level: "Intermediate" },
      { name: "Troubleshooting",  icon: "🔍", level: "Advanced" },
      { name: "OS Admin (Win/Linux)", icon: "⚙️", level: "Intermediate" },
      { name: "System Maintenance",   icon: "🛠️", level: "Advanced" },
    ],
  },
  {
    label: "Tools & Productivity",
    emoji: "🛠️",
    skills: [
      { name: "VS Code",     icon: "💙", level: "Advanced" },
      { name: "Git & GitHub",icon: "🔀", level: "Intermediate" },
      { name: "Figma UI/UX", icon: "🎨", level: "Intermediate" },
      { name: "MS Office Suite", icon: "📊", level: "Advanced" },
      { name: "Canva Design", icon: "✨", level: "Intermediate" },
    ],
  },
];

// ─── Experience Timeline Data ──────────────────────────────
export interface TimelineEntry {
  id: string;
  type: "education" | "work" | "organization" | "certification";
  title: string;
  organization: string;
  period: string;
  description: string;
  bullets?: string[];
  icon: string;
}

export const TIMELINE: TimelineEntry[] = [
  {
    id: "lp3i",
    type: "education",
    title: "D3 Manajemen Informatika",
    organization: "Politeknik LP3I Tasikmalaya",
    period: "2023 — Sekarang",
    description:
      "Menempuh studi Diploma III Manajemen Informatika dengan penekanan pada rekayasa perangkat lunak, perancangan basis data relasional, jaringan komputer, serta manajemen proyek sistem informasi.",
    bullets: [
      "Fokus pada Pemrograman Web, Pemodelan Sistem (UML), & Basis Data Relasional",
      "Aktif sebagai pengurus pimpinan dalam organisasi mahasiswa tingkat kampus",
      "Mempertahankan indeks prestasi akademik (IPK) yang solid",
    ],
    icon: "🎓",
  },
  {
    id: "smk",
    type: "education",
    title: "Rekayasa Perangkat Lunak & Gim (RPLG)",
    organization: "SMK Negeri 1 Ciamis",
    period: "2020 — 2023",
    description:
      "Menyelesaikan pendidikan kejuruan teknologi informasi dengan konsentrasi keahlian pengodean perangkat lunak, logika algoritma, dan pemrograman berbasis objek.",
    bullets: [
      "Lulus dengan predikat memuaskan pada Uji Kompetensi Keahlian (UKK) Pemrograman",
      "Membangun berbagai proyek aplikasi web sederhana berbasis PHP Native & MySQL",
    ],
    icon: "🏫",
  },
  {
    id: "it-support",
    type: "work",
    title: "IT Support Intern",
    organization: "Politeknik LP3I Tasikmalaya",
    period: "2024",
    description:
      "Melaksanakan tugas pemeliharaan infrastruktur teknologi informasi kampus, penanganan insiden kendala teknis (troubleshooting), serta asistensi staf dan dosen.",
    bullets: [
      "Melakukan perbaikan dan pemeliharaan rutin 40+ unit komputer laboratorium kampus",
      "Mengonfigurasi jaringan lokal (LAN), crimping kabel UTP, dan instalasi sistem operasi",
      "Memberikan respon cepat dukungan teknis (helpdesk) bagi sivitas akademika",
    ],
    icon: "💼",
  },
  {
    id: "ukm",
    type: "organization",
    title: "Sekretaris Organisasi",
    organization: "UKM LP3I Computer Club",
    period: "2023 — Sekarang",
    description:
      "Memimpin divisi kesekretariatan dan administrasi UKM. Bertanggung jawab atas pengelolaan dokumen resmi, penyusunan proposal kegiatan, serta koordinasi antar pengurus.",
    bullets: [
      "Menyusun & merapikan 50+ dokumen administrasi, persuratan, dan LPJ kegiatan",
      "Mengkoordinasikan penyelenggaraan workshop pemrograman & seminar teknologi",
      "Mengelola database keanggotaan dan alur komunikasi internal UKM",
    ],
    icon: "🤝",
  },
  {
    id: "bnsp",
    type: "certification",
    title: "Sertifikasi BNSP Junior Programmer",
    organization: "Badan Nasional Sertifikasi Profesi (BNSP)",
    period: "2024",
    description:
      "Terverifikasi kompeten secara nasional dalam skema Junior Programmer oleh Badan Nasional Sertifikasi Profesi Republik Indonesia.",
    bullets: [
      "Memenuhi standar kompetensi nasional (SKKNI) dalam penulisan kode terstruktur",
      "Menguasai pemodelan basis data, algoritma dasar, dan pengujian perangkat lunak",
    ],
    icon: "🏆",
  },
];
