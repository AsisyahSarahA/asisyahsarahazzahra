"use client";

/**
 * Projects.tsx — "The Woman Behind the Code" Curated Project Showcase
 * Flagship Hero Feature: N-PRESENCE (Laravel · HAKI Certified · Cigalontang)
 * Asymmetrical secondary project presentation · Category filtering
 * Case Study Modal View · Verified CV and project data only
 */

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS, PROJECTS_I18N, type ProjectI18n } from "@/data/translations";
import { MediaViewerModal, type MediaItem } from "@/components/ui/MediaViewerModal";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease },
  }),
};

/* ── Interactive Case Study Modal ───────────────────────── */
function ProjectModal({
  project,
  onClose,
  onOpenViewer,
  t,
}: {
  project: ProjectI18n;
  onClose: () => void;
  onOpenViewer: (items: MediaItem[], initialIndex: number) => void;
  t: (typeof TRANSLATIONS)["id"]["projects"];
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      {/* Dim backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(23, 21, 19, 0.65)", backdropFilter: "blur(6px)" }}
      />

      {/* Modal Dialog Content */}
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3, ease }}
        className="relative w-full sm:max-w-2xl max-h-[88vh] overflow-y-auto rounded-t-xl sm:rounded-xl shadow-2xl"
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div
          className="sticky top-0 flex items-start justify-between p-7 sm:p-9 z-10"
          style={{
            background: "color-mix(in srgb, var(--bg) 95%, transparent)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span
                className="font-mono text-[0.6875rem] font-semibold px-3 py-1 rounded-md tracking-wider uppercase"
                style={{
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                  border: "1px solid rgba(200, 117, 93, 0.2)",
                }}
              >
                {project.categoryLabel}
              </span>
              {project.hakiCertified && (
                <span
                  className="font-mono text-[0.6875rem] font-semibold px-3 py-1 rounded-md"
                  style={{
                    background: "var(--sage-soft)",
                    color: "var(--sage)",
                    border: "1px solid rgba(130, 150, 129, 0.25)",
                  }}
                >
                  {t.hakiBadge}
                </span>
              )}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl" style={{ color: "var(--text)" }}>
              {project.title}
            </h2>
            <p className="font-sans text-[0.875rem] mt-1 font-medium" style={{ color: "var(--accent)" }}>
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2.5 rounded-lg hover:opacity-70 transition-opacity ml-4"
            style={{ color: "var(--text-secondary)", border: "1px solid var(--border)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-7 sm:p-9 space-y-7">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: t.modalClient, value: project.client },
              { label: t.modalRole,   value: project.role },
              { label: t.modalYear,   value: project.year },
              { label: t.modalContext, value: project.categoryLabel },
            ].map((m) => (
              <div key={m.label} className="p-4 sm:p-5 rounded-xl" style={{ border: "1px solid var(--border)", background: "var(--surface-alt)" }}>
                <p className="label-meta text-[0.625rem] mb-1.5">{m.label}</p>
                <p className="font-sans text-[0.875rem] font-semibold leading-snug" style={{ color: "var(--text)" }}>
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          {/* Deep Narrative Description */}
          <div className="p-6 rounded-xl" style={{ background: "var(--surface-alt)", border: "1px solid var(--border)" }}>
            <p className="label-meta mb-2.5">Studi Kasus & Latar Belakang</p>
            <p className="font-sans text-[0.9375rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {project.fullDescription}
            </p>
          </div>

          {/* Key Contributions & Features */}
          <div className="p-6 rounded-xl" style={{ background: "var(--surface-alt)", border: "1px solid var(--border)" }}>
            <p className="label-meta mb-3">{t.modalKeyFeatures}</p>
            <ul className="space-y-2.5">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                  <span className="font-sans text-[0.875rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Technologies */}
          <div>
            <p className="label-meta mb-3">{t.modalTech}</p>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((tc) => (
                <span
                  key={tc}
                  className="px-3.5 py-1.5 rounded-lg font-mono text-[0.8125rem]"
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {tc}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshot Gallery Strip */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="p-6 rounded-xl" style={{ background: "var(--surface-alt)", border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between mb-3">
                <p className="label-meta">{t.viewGallery || "Galeri Foto & Tangkapan Layar"}</p>
                <span className="font-mono text-xs text-secondary">{project.gallery.length} Tangkapan Layar</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.gallery.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      const mediaItems: MediaItem[] = project.gallery!.map((url, i) => ({
                        name: `${project.title} — Dokumentasi ${i + 1}`,
                        url,
                        type: "image",
                        label: `Tangkapan Layar ${i + 1}`,
                      }));
                      onOpenViewer(mediaItems, idx);
                    }}
                    className="relative h-28 rounded-lg overflow-hidden border cursor-pointer group/thumb hover:border-accent transition-all"
                    style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                    title="Klik untuk memperbesar foto dalam layar penuh"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgUrl}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center"
                      style={{ background: "rgba(23, 21, 19, 0.45)" }}
                    >
                      <span className="p-1.5 rounded-full text-white" style={{ background: "var(--accent)" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-5" style={{ borderTop: "1px solid var(--border)" }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-[0.8125rem] py-2 px-5"
              >
                {t.btnLive} ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-[0.8125rem] py-2 px-5"
              >
                {t.btnGithub} ↗
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Projects Section Component ─────────────────────── */
export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectI18n | null>(null);
  const [viewerData, setViewerData] = useState<{
    title: string;
    subtitle?: string;
    badge?: string;
    items: MediaItem[];
    initialIndex?: number;
  } | null>(null);

  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].projects;
  const allProjects = PROJECTS_I18N[locale];

  const featured = allProjects.find((p) => p.id === "n-presence");
  const filteredProjects = allProjects.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  const categories = [
    { id: "all", label: t.filterAll },
    { id: "school", label: t.filterSchool },
    { id: "gov", label: t.filterGov },
    { id: "community", label: t.filterCommunity },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="py-20 lg:py-28"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="container-editorial">
        {/* Section Metadata & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="label-meta mb-3"
            >
              {t.label}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight"
              style={{ color: "var(--text)" }}
            >
              {t.headingLead}{" "}
              <em className="italic" style={{ color: "var(--accent)" }}>
                {t.headingAccent}
              </em>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-sans text-[0.9375rem] max-w-md leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {t.description}
          </motion.p>
        </div>

        {/* ── FLAGSHIP SHOWCASE: N-PRESENCE ──────────────────── */}
        {featured && (
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-16 p-8 sm:p-12 lg:p-14 rounded-2xl relative overflow-hidden"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            {/* Top Badge Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-3">
                <span
                  className="font-mono text-[0.75rem] font-bold px-3.5 py-1.5 rounded-md tracking-wider uppercase"
                  style={{
                    background: "var(--accent)",
                    color: "#F6F3EE",
                  }}
                >
                  {t.featuredLabel}
                </span>
                <span
                  className="font-mono text-[0.75rem] font-semibold px-3.5 py-1.5 rounded-md"
                  style={{
                    background: "var(--sage-soft)",
                    color: "var(--sage)",
                    border: "1px solid rgba(130, 150, 129, 0.25)",
                  }}
                >
                  {t.hakiBadge}
                </span>
              </div>
              <span className="font-mono text-[0.8125rem]" style={{ color: "var(--text-secondary)" }}>
                {featured.year} · {featured.client}
              </span>
            </div>

            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-start">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-3" style={{ color: "var(--text)" }}>
                  {featured.title}
                </h3>
                <p className="font-sans text-[0.9375rem] sm:text-[1rem] font-medium mb-3" style={{ color: "var(--accent)" }}>
                  {featured.subtitle}
                </p>
                <p className="font-mono text-[0.8125rem] mb-6 font-medium" style={{ color: "var(--text-tertiary)" }}>
                  Peran: {featured.role}
                </p>

                <p className="font-sans text-[0.9375rem] sm:text-[1rem] leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                  {featured.description}
                </p>

                {/* Key Architectural Contributions */}
                <div className="space-y-3 mb-8 p-5 rounded-xl" style={{ background: "var(--surface-alt)", border: "1px solid var(--border)" }}>
                  <p className="label-meta text-[0.625rem] mb-1">Kontribusi Kunci & Implementasi</p>
                  {featured.features.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                      <span className="font-sans text-[0.875rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Verified Tech Stack */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {featured.tech.map((tc) => (
                    <span
                      key={tc}
                      className="px-3.5 py-1.5 rounded-lg font-mono text-[0.8125rem]"
                      style={{
                        border: "1px solid var(--border)",
                        background: "var(--surface-alt)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tc}
                    </span>
                  ))}
                </div>

                {/* Primary Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setSelectedProject(featured)}
                    className="btn-primary"
                  >
                    <span>{t.viewDetails}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {featured.githubUrl && (
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <span>{t.viewGithub}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Visual Showcase Panel: Real Screenshot + Interactive Mini-Gallery */}
              <div
                className="p-6 sm:p-8 rounded-2xl space-y-5"
                style={{
                  background: "var(--surface-alt)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Simulated Browser Bar */}
                <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: "var(--border)" }}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 inline-block" />
                  </div>
                  <span className="font-mono text-[0.6875rem] text-secondary">
                    n-presence · dashboard
                  </span>
                  <span className="font-mono text-[0.625rem] px-2 py-0.5 rounded text-accent font-semibold" style={{ background: "var(--accent-soft)" }}>
                    Live Preview
                  </span>
                </div>

                {/* Main Featured Screenshot */}
                <div
                  onClick={() => {
                    if (featured.gallery && featured.gallery.length > 0) {
                      setViewerData({
                        title: featured.title,
                        subtitle: featured.subtitle,
                        badge: "N-PRESENCE · HAKI Certified",
                        items: featured.gallery.map((g, i) => ({
                          name: `N-PRESENCE Dokumentasi ${i + 1}`,
                          url: g,
                          type: "image",
                          label: `Tangkapan Layar ${i + 1}`,
                        })),
                        initialIndex: 0,
                      });
                    }
                  }}
                  className="relative rounded-xl overflow-hidden border cursor-pointer group/screen shadow-md hover:border-accent transition-all"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                  title="Klik untuk melihat dokumentasi dalam layar penuh"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/project/n-presence/1.png"
                    alt="N-PRESENCE Dashboard Screenshot"
                    className="w-full h-auto object-cover group-hover/screen:scale-[1.02] transition-transform duration-300"
                    loading="eager"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover/screen:opacity-100 transition-opacity flex items-center justify-center"
                    style={{ background: "rgba(23, 21, 19, 0.55)" }}
                  >
                    <span className="font-mono text-xs font-semibold px-4 py-2 rounded-lg text-white flex items-center gap-2 shadow-lg" style={{ background: "var(--accent)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                      </svg>
                      {t.viewPhoto || "Perbesar Tangkapan Layar"}
                    </span>
                  </div>
                </div>

                {/* 4-Screenshot Thumbnail Row */}
                {featured.gallery && featured.gallery.length > 1 && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="label-meta text-[0.625rem]">Dokumentasi Sistem</span>
                      <button
                        onClick={() => {
                          setViewerData({
                            title: featured.title,
                            subtitle: featured.subtitle,
                            badge: "N-PRESENCE · HAKI Certified",
                            items: featured.gallery!.map((g, i) => ({
                              name: `N-PRESENCE Dokumentasi ${i + 1}`,
                              url: g,
                              type: "image",
                              label: `Tangkapan Layar ${i + 1}`,
                            })),
                            initialIndex: 0,
                          });
                        }}
                        className="font-mono text-[0.6875rem] text-accent hover:underline font-semibold"
                      >
                        Buka Semua (5 Foto) ↗
                      </button>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {featured.gallery.slice(1, 5).map((imgUrl, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setViewerData({
                              title: featured.title,
                              subtitle: featured.subtitle,
                              badge: "N-PRESENCE · HAKI Certified",
                              items: featured.gallery!.map((g, idx) => ({
                                name: `N-PRESENCE Dokumentasi ${idx + 1}`,
                                url: g,
                                type: "image",
                                label: `Tangkapan Layar ${idx + 1}`,
                              })),
                              initialIndex: i + 1,
                            });
                          }}
                          className="relative h-16 rounded-lg overflow-hidden border cursor-pointer hover:border-accent group/subthumb transition-all"
                          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                          title={`Lihat Tangkapan Layar ${i + 2}`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={imgUrl}
                            alt={`N-PRESENCE Thumbnail ${i + 2}`}
                            className="w-full h-full object-cover group-hover/subthumb:scale-110 transition-transform duration-200"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highlights List */}
                <div className="space-y-2.5 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                  <div className="p-3 rounded-lg flex items-center justify-between" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <span className="font-mono text-[0.6875rem] text-secondary">Integrasi Scanner:</span>
                    <span className="font-mono text-[0.6875rem] font-semibold" style={{ color: "var(--text)" }}>QR Code Real-Time</span>
                  </div>
                  <div className="p-3 rounded-lg flex items-center justify-between" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                    <span className="font-mono text-[0.6875rem] text-secondary">Hak Cipta Terdaftar:</span>
                    <span className="font-mono text-[0.6875rem] font-semibold text-sage" style={{ color: "var(--sage)" }}>HAKI Kemenkumham RI</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Category Filter Bar ────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-5 py-2.5 rounded-full font-mono text-[0.8125rem] transition-all font-medium"
              style={{
                background: activeCategory === cat.id ? "var(--accent)" : "var(--surface)",
                color: activeCategory === cat.id ? "#F6F3EE" : "var(--text-secondary)",
                border: "1px solid",
                borderColor: activeCategory === cat.id ? "var(--accent)" : "var(--border)",
                boxShadow: activeCategory === cat.id ? "var(--shadow-terra)" : "none",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Curated Projects Grid (All remaining projects) ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              custom={idx + 4}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-7 sm:p-9 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:shadow-md"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div>
                {/* Header Tag & Year */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className="font-mono text-[0.6875rem] font-semibold px-3 py-1 rounded-md tracking-wider uppercase"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                      border: "1px solid rgba(200, 117, 93, 0.2)",
                    }}
                  >
                    {project.categoryLabel}
                  </span>
                  <span className="font-mono text-[0.75rem]" style={{ color: "var(--text-tertiary)" }}>
                    {project.year}
                  </span>
                </div>

                {/* Screenshot Preview Card if available */}
                {project.image && (
                  <div
                    onClick={() => {
                      if (project.gallery && project.gallery.length > 0) {
                        setViewerData({
                          title: project.title,
                          subtitle: project.subtitle,
                          badge: project.categoryLabel,
                          items: project.gallery.map((g, i) => ({
                            name: `${project.title} Dokumentasi ${i + 1}`,
                            url: g,
                            type: "image",
                            label: `Tangkapan Layar ${i + 1}`,
                          })),
                          initialIndex: 0,
                        });
                      }
                    }}
                    className="relative w-full h-44 mb-5 rounded-xl overflow-hidden border cursor-pointer group/cardimg shadow-sm hover:border-accent transition-all select-none"
                    style={{ borderColor: "var(--border)", background: "var(--surface-alt)" }}
                    title="Klik untuk melihat foto dalam layar penuh"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover/cardimg:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover/cardimg:opacity-100 transition-opacity flex items-center justify-center"
                      style={{ background: "rgba(23, 21, 19, 0.5)" }}
                    >
                      <span className="font-mono text-xs font-semibold px-3 py-1.5 rounded-lg text-white flex items-center gap-1.5" style={{ background: "var(--accent)" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <circle cx="11" cy="11" r="8" />
                          <path d="M21 21l-4.35-4.35" />
                        </svg>
                        {t.viewPhoto || "Lihat Gambar"}
                      </span>
                    </div>
                    {project.gallery && project.gallery.length > 1 && (
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md font-mono text-[0.625rem] font-bold text-white shadow" style={{ background: "rgba(23, 21, 19, 0.85)" }}>
                        {project.gallery.length} Foto
                      </span>
                    )}
                  </div>
                )}

                {/* Title */}
                <h4
                  className="font-serif text-2xl mb-1.5 group-hover:text-accent transition-colors"
                  style={{ color: "var(--text)" }}
                >
                  {project.title}
                </h4>
                <p className="font-sans text-[0.8125rem] font-medium mb-4" style={{ color: "var(--accent)" }}>
                  {project.subtitle}
                </p>

                {/* Short narrative description */}
                <p className="font-sans text-[0.875rem] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                  {project.tech.map((tc) => (
                    <span
                      key={tc}
                      className="px-3 py-1 rounded-md font-mono text-[0.75rem]"
                      style={{
                        border: "1px solid var(--border)",
                        background: "var(--surface-alt)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tc}
                    </span>
                  ))}
                </div>

                {/* Action Row */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="font-sans text-[0.875rem] font-medium link-reveal"
                    style={{ color: "var(--accent)" }}
                  >
                    {t.viewDetails} →
                  </button>

                  <div className="flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[0.8125rem] link-reveal"
                        style={{ color: "var(--text)" }}
                      >
                        Live ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[0.8125rem] link-reveal"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Reveal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onOpenViewer={(items, initialIndex) =>
              setViewerData({
                title: selectedProject.title,
                subtitle: selectedProject.subtitle,
                badge: selectedProject.categoryLabel,
                items,
                initialIndex,
              })
            }
            t={t}
          />
        )}
      </AnimatePresence>

      {/* Interactive Fullscreen Media Viewer Modal */}
      {viewerData && (
        <MediaViewerModal
          isOpen={!!viewerData}
          onClose={() => setViewerData(null)}
          title={viewerData.title}
          subtitle={viewerData.subtitle}
          badge={viewerData.badge}
          items={viewerData.items}
          initialIndex={viewerData.initialIndex || 0}
        />
      )}
    </section>
  );
}
