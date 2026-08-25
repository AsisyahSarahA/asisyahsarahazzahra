# 📋 PRD — Neo-Glass Personal Portfolio
> **Project:** Futuristic Personal Portfolio ("The Neo-Glass Interface")
> **Owner:** Asisyah Sarah Azzahra
> **Stack:** Next.js 14 · Tailwind CSS · Framer Motion
> **Status:** 🚧 In Progress

---

## ✅ DEVELOPMENT CHECKLIST

### Phase 0 — Project Setup
- [x] Create PRD.md (this file)
- [x] Scaffold Next.js 14 App Router project
- [x] Install dependencies: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`
- [x] Configure `tailwind.config.ts` with custom design tokens
- [x] Configure `globals.css` with CSS variables & noise texture
- [x] Set up Google Fonts (Space Grotesk, Inter, JetBrains Mono)

### Phase 1 — Theme & Design System
- [x] Create `ThemeContext.tsx` (Dark/Light ThemeProvider)
- [x] Implement `ThemeToggle.tsx` component with morph animation
- [x] Validate color tokens against PRD hex codes
- [x] Test dark ↔ light toggle transition

### Phase 2 — Core UI Components
- [x] `GlassCard.tsx` — backdrop-blur, gradient border, inner shadow, 3D tilt hover
- [x] `SkeuoButton.tsx` — bevel gradient, press-down active state, two variants
- [x] `CustomCursor.tsx` — dot + trailing ring, expand on hover, disabled on touch
- [x] `Navigation.tsx` — floating pill, glassmorphism, magnetic hover

### Phase 3 — Page Sections
- [x] `Hero.tsx` — mouse-follow spotlight, glass sphere, mesh gradient BG, CTAs
- [x] `About.tsx` — bio narrative, education badges, certification badge
- [x] `Skills.tsx` — bento grid, plastic token chips, 3 categories
- [x] `Experience.tsx` — neon timeline, scroll-triggered slide-in cards
- [x] `Projects.tsx` — masonry GlassCard grid, 5 projects, detail modal
- [x] `Contact.tsx` — glass bar, social links, copy-email toggle

### Phase 4 — Data & Integration
- [x] `portfolio.ts` — hardcode all content (projects, skills, timeline)
- [x] Wire all sections into `page.tsx`
- [x] Page-load assembly animation (glass shards fly in)
- [x] Scroll parallax effects

### Phase 5 — Polish & QA
- [x] Mobile responsiveness (375px+) — reduced blur for performance
- [x] Dark mode visual QA
- [x] Light mode visual QA
- [x] Custom cursor QA (desktop only)
- [x] Build & runtime verification

---

## 1. DESIGN SYSTEM & VISUAL IDENTITY

### 1.1 Core Aesthetic: "Tactile Futurism"
- **Concept:** UI elements feel like physical, high-tech glass objects floating in space.
- **Skeuomorphism:** Buttons & cards → realistic inner shadows, bevels, 3D feel
- **Glassmorphism:** `backdrop-filter: blur`, semi-transparent borders, noise texture
- **Vibe:** "Apple Vision Pro" meets "Cyberpunk UI"

### 1.2 Color Palette (60-30-10 Rule)

#### 🌑 Dark Mode — "Cyber-Night"
| Role | Value |
|------|-------|
| 60% Background | `#0B0C15` → `#1A1A2E` |
| 30% Glass Surfaces | `rgba(45, 0, 80, 0.4)` + heavy blur |
| 10% Accent Primary | Neon Violet `#B200FF` |
| 10% Accent Secondary | Electric Cyan `#00F0FF` |

#### ☀️ Light Mode — "Soft Lilac"
| Role | Value |
|------|-------|
| 60% Background | `#F8F9FA` → `#FFF0F5` |
| 30% Glass Surfaces | `rgba(200, 162, 200, 0.3)` + soft blur |
| 10% Accent Primary | Deep Violet `#4B0082` |
| 10% Accent Secondary | Soft Lavender `#E6E6FA` |

### 1.3 Typography
| Role | Font |
|------|------|
| Headings | Space Grotesk / Orbitron |
| Body | Inter / Plus Jakarta Sans |
| Code/Mono | JetBrains Mono |

---

## 2. TECH STACK

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS + custom glassmorphism utilities |
| Animation | Framer Motion |
| Icons | Lucide React (stroke-width: 1.5) |
| 3D/Visuals | CSS 3D transforms (optional R3F upgrade later) |

---

## 3. CONTENT & DATA

### 3.1 Personal Info
- **Name:** Asisyah Sarah Azzahra
- **Tagline:** IT Specialist | Junior Programmer | Digital Organizer
- **Role:** Management Informatics Student & IT Support

### 3.2 About Me
> "Seorang profesional IT yang berdedikasi dengan latar belakang kuat dalam pengembangan perangkat lunak dan dukungan teknis. Lulusan SMK 1 Ciamis (Rekayasa Perangkat Lunak & Gim) dan saat ini menempuh pendidikan D3 Manajemen Informatika di Politeknik LP3I Tasikmalaya. Tersertifikasi BNSP Junior Programmer, saya menggabungkan keahlian teknis dengan kemampuan organisasi yang terasah melalui pengalaman kepemimpinan di UKM."

### 3.3 Education
1. **D3 Manajemen Informatika** — Politeknik LP3I Tasikmalaya *(Current)*
2. **SMK 1 Ciamis** — Jurusan Rekayasa Perangkat Lunak dan Gim (RPLG)

### 3.4 Work Experience
- **IT Support Intern** — Politeknik LP3I Tasikmalaya
  - Hardware troubleshooting, network maintenance, user support

### 3.5 Organization
- **Secretary** — UKM LP3I Computer Club
  - Administration, event organizing, member management

### 3.6 Certifications
- **BNSP Junior Programmer** — Badan Nasional Sertifikasi Profesi

### 3.7 Projects Portfolio

| # | Project | Client | Description | Tech |
|---|---------|--------|-------------|------|
| 1 | **SIE-Letter** | Kantor Pemerintah Desa Nantang | Sistem Informasi Elektronik untuk manajemen surat-menyurat berbasis web. Digitalisasi alur disposisi dan arsip surat desa. | Web Based, Database Management |
| 2 | **Profile Desa Nantang** | Pemerintah Desa Nantang | Website profil desa informatif untuk publikasi potensi desa, demografi, dan berita kegiatan warga. | Web Based |
| 3 | **Aplikasi Absensi Siswa** | SMP Satu Atap 1 Cigalontang | Sistem pencatatan kehadiran digital untuk memantau kedisiplinan siswa secara real-time. | Web Based |
| 4 | **Manajemen Perpustakaan** | SMP Satu Atap 1 Cigalontang | Aplikasi CRUD untuk pengelolaan inventaris buku, peminjaman, dan pengembalian. | Web Based, CRUD |
| 5 | **DO-Rules Application** | Custom Project | Aplikasi berbasis aturan/logika. | Logic Implementation, Algorithm |

---

## 4. UI/UX SECTION BREAKDOWN

### 4.1 Hero Section
- Mouse-following radial gradient spotlight
- CSS-only glass sphere with parallax
- Animated mesh gradient background (theme-responsive)
- Large heading: *"Building Digital Solutions with Precision."*
- CTAs: `[View Projects]` `[Download CV]` — Skeuomorphic button style

### 4.2 Navigation (HUD)
- Floating pill shape, top center
- Heavy glassmorphism background
- Magnetic hover expansion effect
- Active section highlight via IntersectionObserver

### 4.3 Skills & Expertise
- Bento Grid layout
- Physical plastic token chip styling
- **Programming:** PHP, JavaScript, SQL, Python
- **IT Support:** Hardware, Networking, Troubleshooting
- **Tools:** VS Code, Git, Figma, Office

### 4.4 Experience Timeline
- Neon tube vertical line (Dark) / glowing rod (Light)
- Scroll-triggered slide-in cards from alternating sides
- Entries: Education × 2, Work × 1, Organization × 1

### 4.5 Project Showcase
- Masonry/grid of GlassCards
- Frosted glass background, 1px semi-transparent border
- Deep drop shadow (Skeuomorphism depth)
- Hover: card lifts on Z-axis, blur intensifies, 3D tilt
- Each card: title, client, description, tech tags, `[View Details]` button

### 4.6 Footer & Contact
- Minimalist glass bar
- Social links: LinkedIn, GitHub, Email
- Copy Email button — physical switch toggle interaction

---

## 5. ANIMATION GUIDELINES

| Trigger | Effect |
|---------|--------|
| Page load | Glass shards assemble → form UI |
| Scroll | Parallax (BG slower than FG), cards slide in |
| Card hover | 3D tilt based on cursor position |
| Button press | `translateY(1px)` + shadow reduction |
| Theme toggle | Screen paint animation + icon morph |
| Nav hover | Magnetic expand |
| Cursor | Small dot + trailing ring, expands on clickable |

---

## 6. RESPONSIVE STRATEGY

| Breakpoint | Blur | Layout |
|------------|------|--------|
| Mobile (< 640px) | `blur-sm` (4px) | Single column, cursor hidden |
| Tablet (640–1024px) | `blur-md` (8px) | 2-column grid |
| Desktop (> 1024px) | `blur-xl` (16px) | Full masonry, custom cursor |

---

## 7. FILE STRUCTURE

```
src/
├── app/
│   ├── layout.tsx          # Root layout + fonts + ThemeProvider
│   ├── page.tsx            # Main page assembly
│   └── globals.css         # CSS variables + noise + scrollbar
├── components/
│   ├── ui/
│   │   ├── GlassCard.tsx
│   │   ├── SkeuoButton.tsx
│   │   ├── CustomCursor.tsx
│   │   └── ThemeToggle.tsx
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── context/
│   └── ThemeContext.tsx
└── data/
    └── portfolio.ts
```
