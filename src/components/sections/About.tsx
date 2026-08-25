"use client";

/**
 * About.tsx
 * ─────────────────────────────────────────────────────────
 * About Me section: rich bio narrative, stats cards,
 * education badges, and BNSP certification card.
 * ─────────────────────────────────────────────────────────
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, User, MapPin, Sparkles, Building2, CheckCircle2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PERSONAL_INFO } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/utils";

const EDUCATION = [
  {
    icon: <GraduationCap size={20} strokeWidth={1.5} />,
    title: "D3 Manajemen Informatika",
    org: "Politeknik LP3I Tasikmalaya",
    period: "2023 — Sekarang",
    badge: "🎓 Perguruan Tinggi",
    desc: "Studi pengembangan sistem informasi web, administrasi basis data, dan manajemen IT.",
    color: "from-cyber-violet/20 to-cyber-cyan/10",
  },
  {
    icon: <GraduationCap size={20} strokeWidth={1.5} />,
    title: "Rekayasa Perangkat Lunak & Gim",
    org: "SMK Negeri 1 Ciamis",
    period: "2020 — 2023",
    badge: "🏫 Sekolah Menengah",
    desc: "Konsentrasi pemrograman terstruktur, logika algoritma, dan dasar-dasar web dev.",
    color: "from-purple-500/20 to-pink-500/10",
  },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute -left-32 top-0 w-96 h-96 dark:bg-cyber-violet/5 bg-lilac-violet/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm dark:text-cyber-cyan text-lilac-violet tracking-widest uppercase">
            — Profil Singkat —
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold mt-3 dark:text-white text-gray-900">
            About Me
          </h2>
          <p className="font-body dark:text-white/50 text-gray-500 mt-3 max-w-md mx-auto text-sm">
            Kombinasi antara keahlian teknis pemrograman dan keterampilan manajerial organisasi.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-12 gap-8 items-start"
        >
          {/* ── Left Bio Column (7 cols) ── */}
          <motion.div variants={fadeUp} className="lg:col-span-7 space-y-6">
            <GlassCard className="p-6 sm:p-8" hoverable={false}>
              {/* Header profile info */}
              <div className="flex items-start gap-5 mb-6">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-2xl dark:bg-cyber-violet/30 bg-lilac-violet/20 flex items-center justify-center border border-white/20 shadow-skeuo">
                    <User size={30} strokeWidth={1.5} className="dark:text-cyber-cyan text-lilac-violet" />
                  </div>
                  {/* Status indicator dot */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 dark:border-cyber-bg border-lilac-bg animate-pulse" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold dark:text-white text-gray-900">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm dark:text-cyber-cyan text-lilac-violet mt-1">
                    {PERSONAL_INFO.role}
                  </p>
                  <p className="font-mono text-xs dark:text-white/40 text-gray-500 mt-1 flex items-center gap-1">
                    <MapPin size={12} />
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Bio Narrative Text */}
              <div className="space-y-4 font-body dark:text-white/75 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>{PERSONAL_INFO.bio}</p>
                <p className="text-xs sm:text-sm dark:text-white/60 text-gray-600 italic">
                  &ldquo;Mengutamakan penulisan kode yang bersih, antarmuka yang ramah pengguna, serta efisiensi solusi digital pada setiap proyek.&rdquo;
                </p>
              </div>

              {/* Key Highlights checklist */}
              <div className="grid sm:grid-cols-2 gap-3 mt-6 pt-6 border-t dark:border-white/10 border-black/10">
                {[
                  "Junior Programmer Tersertifikasi BNSP",
                  "Pengalaman IT Support Kampus",
                  "Sekretaris UKM Computer Club",
                  "Pengembangan Web PHP & SQL",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-mono text-xs dark:text-cyber-cyan text-lilac-violet">
                    <CheckCircle2 size={14} className="shrink-0 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PERSONAL_INFO.stats.map((stat) => (
                <GlassCard key={stat.label} className="p-4 text-center" intensity="sm">
                  <div className="text-xl mb-1">{stat.icon}</div>
                  <div className="font-heading text-2xl font-bold bg-gradient-to-br dark:from-cyber-violet dark:to-cyber-cyan from-lilac-violet to-purple-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="font-mono text-[10px] dark:text-white/50 text-gray-500 mt-0.5">
                    {stat.label}
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>

          {/* ── Right Badges Column (5 cols) ── */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Section */}
            <motion.div variants={fadeUp}>
              <p className="font-mono text-xs dark:text-white/40 text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Building2 size={14} />
                Pendidikan Formal
              </p>
              <div className="space-y-3">
                {EDUCATION.map((edu) => (
                  <GlassCard key={edu.title} className="p-5" intensity="md">
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center shrink-0 dark:text-cyber-cyan text-lilac-violet border border-white/10 shadow-sm`}>
                        {edu.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                          <h4 className="font-heading font-bold text-sm dark:text-white text-gray-900 leading-tight">
                            {edu.title}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full dark:bg-cyber-cyan/15 bg-lilac-lavender/50 dark:text-cyber-cyan text-lilac-violet">
                            {edu.badge}
                          </span>
                        </div>
                        <p className="font-body text-xs font-medium dark:text-white/60 text-gray-600">
                          {edu.org}
                        </p>
                        <p className="font-mono text-[11px] dark:text-white/35 text-gray-400 mt-0.5">
                          {edu.period}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>

            {/* Certification Section */}
            <motion.div variants={fadeUp}>
              <p className="font-mono text-xs dark:text-white/40 text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Sparkles size={14} />
                Sertifikasi Kompetensi
              </p>
              <GlassCard
                className="p-5 border border-yellow-500/30"
                glowClass="hover:shadow-[0_0_24px_rgba(234,179,8,0.25)]"
                intensity="md"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/30 to-orange-500/20 flex items-center justify-center shrink-0 border border-yellow-500/30 shadow-skeuo">
                    <Award size={24} strokeWidth={1.5} className="text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base dark:text-white text-gray-900">
                      Junior Programmer
                    </h4>
                    <p className="font-body text-xs dark:text-white/60 text-gray-600 mt-0.5">
                      BNSP (Badan Nasional Sertifikasi Profesi)
                    </p>
                    <p className="font-mono text-[11px] dark:text-white/40 text-gray-400 mt-1">
                      Nomor Reg. Sertifikat Resmi Kominfo / BNSP RI
                    </p>
                    <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/30">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="font-mono text-[10px] font-medium text-green-400">Kompeten / Certified</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
