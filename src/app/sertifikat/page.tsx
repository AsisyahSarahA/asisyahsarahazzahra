"use client";

/**
 * app/sertifikat/page.tsx — Halaman Publikasi Resmi Seluruh Sertifikat & Lisensi
 * Asisyah Sarah Azzahra — Junior Web Developer | Software Developer
 * Full bilingual support (ID/EN) · Interactive Modal Viewer (Images & PDFs)
 * Editorial Magazine Aesthetics · Category Filtering
 */

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATES, type CertificateItem } from "@/data/certificates";
import { MediaViewerModal, type MediaItem } from "@/components/ui/MediaViewerModal";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as const;

export default function SertifikatPage() {
  const { locale } = useLanguage();
  const isId = locale === "id";

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);

  const categories = [
    { id: "all", label: isId ? "Semua Dokumen (11)" : "All Credentials (11)" },
    { id: "softskill", label: isId ? "Soft Skills & Kepemimpinan (4)" : "Soft Skills & Leadership (4)" },
    { id: "kompetensi", label: isId ? "Kompetensi Kejuruan (2)" : "Technical Competency (2)" },
    { id: "magang", label: isId ? "Magang & Pelayanan (1)" : "Internship & Civic Service (1)" },
    { id: "organisasi", label: isId ? "Kepengurusan Organisasi (1)" : "Student Leadership (1)" },
    { id: "akademik", label: isId ? "Akademik & KHS (3)" : "Academic & Transcript (3)" },
  ];

  const filteredCertificates = CERTIFICATES.filter((cert) => {
    if (activeCategory === "all") return true;
    return cert.category === activeCategory;
  });

  const modalMediaItems: MediaItem[] = selectedCertificate
    ? selectedCertificate.files.map((f) => ({
        name: f.name,
        url: f.url,
        type: f.type,
        label: f.label || f.name,
      }))
    : [];

  return (
    <main className="min-h-screen pb-24" style={{ background: "var(--bg)" }}>
      {/* ── Top Floating Navigation Bar ──────────────────────── */}
      <header
        className="sticky top-0 z-40 border-b backdrop-blur-md transition-colors"
        style={{
          background: "color-mix(in srgb, var(--bg) 92%, transparent)",
          borderColor: "var(--border)",
        }}
      >
        <div className="container-editorial h-16 flex items-center justify-between">
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 group font-sans text-[0.8125rem] font-medium transition-colors"
            style={{ color: "var(--text)" }}
          >
            <span
              className="p-1.5 rounded-lg border transition-transform group-hover:-translate-x-0.5"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </span>
            <span>{isId ? "Kembali ke Beranda" : "Back to Home"}</span>
          </Link>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Top CV Download Button */}
            <a
              href="/cv/CV_Asisyah_Sarah_Azzahra.pdf"
              download="CV_Asisyah_Sarah_Azzahra.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-mono text-[0.75rem] font-semibold transition-all hover:opacity-90 shadow-sm"
              style={{
                background: "var(--accent)",
                color: "#F6F3EE",
              }}
              title="Unduh CV PDF Asisyah Sarah Azzahra"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{isId ? "Unduh CV" : "Download CV"}</span>
            </a>

            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ── Header Section ───────────────────────────────────── */}
      <section className="pt-12 pb-10 border-b" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
        <div className="container-editorial">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="label-meta">
                {isId ? "Publikasi Resmi & Dokumen Prestasi" : "Official Archive & Verified Credentials"}
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              <span className="font-mono text-[0.6875rem]" style={{ color: "var(--text-tertiary)" }}>
                Asisyah Sarah Azzahra
              </span>
            </div>

            {/* Title */}
            <h1
              className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-5"
              style={{ color: "var(--text)" }}
            >
              {isId ? "Sertifikat, Lisensi &" : "Certificates, Licenses &"}{" "}
              <em className="italic" style={{ color: "var(--accent)" }}>
                {isId ? "Dokumen Terverifikasi" : "Verified Credentials"}
              </em>
            </h1>

            {/* Narrative */}
            <p
              className="font-sans text-[0.9375rem] sm:text-[1rem] leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              {isId
                ? "Koleksi resmi bukti kelulusan uji kompetensi kejuruan rekayasa perangkat lunak, pelatihan pengembangan karakter & kepemimpinan (Training Soft Skill), pengalaman praktik kerja pelayanan publik, dedikasi organisasi kampus, hingga catatan transkrip akademik resmi."
                : "Official archive of vocational software engineering competency, leadership and soft skill development certifications, public service internship completion, campus organizational dedication, and official academic transcript records."}
            </p>

            {/* Highlight Badges */}
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: isId ? "11 Dokumen Terverifikasi" : "11 Verified Documents", color: "var(--accent)" },
                { label: "BNSP Junior Programmer (2024)", color: "var(--sage)" },
                { label: isId ? "Hak Cipta HAKI Kemenkumham" : "HAKI Intellectual Property", color: "var(--sage)" },
                { label: isId ? "Transkrip IPK 3.93" : "Official 3.93 GPA Transcript", color: "var(--accent)" },
              ].map((b, i) => (
                <span
                  key={i}
                  className="font-mono text-[0.75rem] font-semibold px-3 py-1.5 rounded-lg border"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                    color: b.color,
                  }}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filter Bar ────────────────────────────── */}
      <section className="py-8">
        <div className="container-editorial">
          <div className="flex flex-wrap items-center gap-2.5 mb-10">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="px-4 py-2 rounded-full font-mono text-[0.75rem] font-medium transition-all"
                  style={{
                    background: isActive ? "var(--accent)" : "var(--surface)",
                    color: isActive ? "#F6F3EE" : "var(--text-secondary)",
                    border: `1px solid ${isActive ? "var(--accent)" : "var(--border)"}`,
                    boxShadow: isActive ? "0 2px 8px rgba(200, 117, 93, 0.25)" : "none",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* ── Certificate Cards Grid ─────────────────────────── */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredCertificates.map((cert, index) => {
                const isPdfDoc = cert.files.every((f) => f.type === "pdf");
                const hasImages = cert.files.some((f) => f.type === "image");

                return (
                  <motion.article
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05, ease }}
                    className="group rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow-sm)",
                      padding: "1.75rem",
                    }}
                  >
                    {/* Top Content Area */}
                    <div>
                      {/* Badge strip & Year */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span
                          className="font-mono text-[0.6875rem] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase"
                          style={{
                            background: "var(--accent-soft)",
                            color: "var(--accent)",
                            border: "1px solid rgba(200, 117, 93, 0.2)",
                          }}
                        >
                          {isId ? cert.categoryLabelId : cert.categoryLabelEn}
                        </span>
                        <span
                          className="font-mono text-[0.75rem] font-medium"
                          style={{ color: "var(--text-tertiary)" }}
                        >
                          {cert.year}
                        </span>
                      </div>

                      {/* Visual Preview Thumbnail (Image or PDF Badge Card) */}
                      <div
                        onClick={() => setSelectedCertificate(cert)}
                        className="relative w-full h-44 mb-5 rounded-xl overflow-hidden border cursor-pointer group-hover:border-accent transition-all flex items-center justify-center select-none"
                        style={{
                          borderColor: "var(--border)",
                          background: "var(--surface-alt)",
                        }}
                      >
                        {hasImages && cert.thumbnail ? (
                          <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={cert.thumbnail}
                              alt={cert.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                              style={{ background: "rgba(23, 21, 19, 0.55)" }}
                            >
                              <span
                                className="font-mono text-[0.75rem] font-semibold px-3 py-1.5 rounded-lg text-white flex items-center gap-1.5"
                                style={{ background: "var(--accent)" }}
                              >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                  <circle cx="11" cy="11" r="8" />
                                  <path d="M21 21l-4.35-4.35" />
                                </svg>
                                {isId ? "Buka Pratinjau" : "Preview"}
                              </span>
                            </div>
                          </>
                        ) : (
                          /* PDF Document Visual Presentation */
                          <div className="text-center p-5 flex flex-col items-center justify-center">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center mb-2.5 transition-transform group-hover:scale-110"
                              style={{
                                background: "var(--accent-soft)",
                                color: "var(--accent)",
                                border: "1px solid rgba(200, 117, 93, 0.25)",
                              }}
                            >
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <span className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider mb-1" style={{ color: "var(--text)" }}>
                              {cert.badge || "Dokumen PDF Resmi"}
                            </span>
                            <span className="font-mono text-[0.625rem]" style={{ color: "var(--text-tertiary)" }}>
                              {cert.files[0]?.name}
                            </span>
                          </div>
                        )}

                        {/* File count indicator */}
                        {cert.files.length > 1 && (
                          <span
                            className="absolute top-2 right-2 px-2 py-0.5 rounded-md font-mono text-[0.625rem] font-bold text-white shadow"
                            style={{ background: "rgba(23, 21, 19, 0.85)" }}
                          >
                            {cert.files.length} Halaman
                          </span>
                        )}
                      </div>

                      {/* Title & Subtitle */}
                      <h2
                        className="font-serif text-lg sm:text-xl font-bold leading-snug mb-2 group-hover:text-accent transition-colors"
                        style={{ color: "var(--text)" }}
                      >
                        {cert.title}
                      </h2>
                      <p
                        className="font-sans text-[0.8125rem] font-medium mb-3"
                        style={{ color: "var(--accent)" }}
                      >
                        {cert.issuer}
                      </p>

                      {/* Description */}
                      <p
                        className="font-sans text-[0.8125rem] leading-relaxed mb-6"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {isId ? cert.descriptionId : cert.descriptionEn}
                      </p>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div
                      className="pt-4 border-t flex flex-wrap items-center justify-between gap-2.5"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <button
                        onClick={() => setSelectedCertificate(cert)}
                        className="btn-primary text-xs py-2 px-4 flex-1 inline-flex items-center justify-center gap-1.5"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{isId ? "Lihat Sertifikat" : "View Credential"}</span>
                      </button>

                      {isPdfDoc && (
                        <a
                          href={cert.files[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={cert.files[0].name}
                          className="btn-secondary text-xs py-2 px-3 inline-flex items-center justify-center gap-1"
                          title="Unduh langsung file PDF"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          <span>PDF</span>
                        </a>
                      )}
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Interactive Modal Viewer ───────────────────────── */}
      {selectedCertificate && (
        <MediaViewerModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          title={selectedCertificate.title}
          subtitle={`${selectedCertificate.issuer} · ${selectedCertificate.year}`}
          badge={selectedCertificate.badge || selectedCertificate.categoryLabelId}
          items={modalMediaItems}
        />
      )}
    </main>
  );
}
