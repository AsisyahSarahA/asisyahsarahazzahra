"use client";

/**
 * Hero.tsx — "The Woman Behind the Code" Editorial Hero
 * Asymmetric composition · Editorial typography · Authentic portrait art direction
 * Bilingual (ID/EN) · Framer Motion graceful reveal
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { PERSONAL_INFO } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].hero;

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      <div className="container-editorial w-full">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-16 items-center">
          {/* ── Left Column: Editorial Content ───────────────── */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow & Brand Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="label-meta tracking-wider">
                {t.eyebrow}
              </span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              <span
                className="font-mono text-[0.6875rem] font-medium px-2 py-0.5 rounded"
                style={{
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                  border: "1px solid rgba(200, 117, 93, 0.2)",
                }}
              >
                {t.badgeWomenInTech}
              </span>
            </motion.div>

            {/* Signature Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="font-serif mb-6"
              style={{
                fontSize: "clamp(2.4rem, 4.8vw, 4.25rem)",
                color: "var(--text)",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
              }}
            >
              {t.headlineLine1} <br />
              {t.headlineLine2} <br />
              <em
                className="italic font-normal underline decoration-1 underline-offset-8"
                style={{
                  color: "var(--accent)",
                  textDecorationColor: "rgba(200, 117, 93, 0.35)",
                }}
              >
                {t.headlineLine3}
              </em>
            </motion.h1>

            {/* Identity & Background Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="font-sans text-[0.9375rem] sm:text-[1rem] leading-relaxed max-w-xl mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              {t.subheadline}
            </motion.p>

            {/* Primary & Secondary Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12"
            >
              <a href="#projects" className="btn-primary group">
                <span>{t.ctaProjects}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="transition-transform group-hover:translate-y-0.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              {/* Download CV (PDF) Button */}
              <a
                href="/cv/CV_Asisyah_Sarah_Azzahra.pdf"
                download="CV_Asisyah_Sarah_Azzahra.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group inline-flex items-center gap-2"
                id="hero-download-cv"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="transition-transform group-hover:-translate-y-0.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>{t.ctaDownloadCv || (locale === "id" ? "Unduh CV (PDF)" : "Download CV (PDF)")}</span>
              </a>

              <a
                href="#contact"
                className="font-sans text-[0.875rem] font-medium link-reveal transition-colors ml-1"
                style={{ color: "var(--text)" }}
              >
                {t.ctaContact} →
              </a>
            </motion.div>

            {/* Verified Credentials Metadata Ribbon */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45, ease }}
              className="pt-6 border-t flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[0.75rem]"
              style={{ borderColor: "var(--border)" }}
            >
              {t.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span
                    className="font-semibold px-2.5 py-1 rounded-md text-[0.75rem]"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                      border: "1px solid rgba(200, 117, 93, 0.2)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span style={{ color: "var(--text-secondary)" }}>{stat.label}</span>
                  {i < t.stats.length - 1 && (
                    <span className="hidden sm:inline-block ml-2 opacity-40">·</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column: Art-Directed Portrait ────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="order-1 lg:order-2 flex flex-col items-center lg:items-end justify-center"
          >
            <div className="relative w-full max-w-70 sm:max-w-xs lg:max-w-85">
              {/* Paper-like frame background accent */}
              <div
                className="absolute -inset-2 rounded-xl pointer-events-none -rotate-1 hidden sm:block opacity-60"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface-alt)",
                }}
              />

              {/* Main Portrait Frame */}
              <div
                className="relative overflow-hidden rounded-xl shadow-md transition-transform duration-500 hover:scale-[1.01]"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <Image
                  src={PERSONAL_INFO.photo}
                  alt="Asisyah Sarah Azzahra — Junior Web Developer"
                  width={380}
                  height={500}
                  className="w-full h-auto object-cover grayscale-15 hover:grayscale-0 transition-all duration-500"
                  style={{ aspectRatio: "3/4" }}
                  priority
                />

                {/* Subtle bottom gradient overlay for editorial depth */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(23, 21, 19, 0.45), transparent)",
                  }}
                />

                {/* Floating badge over photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white drop-shadow">
                  <span className="font-mono text-[0.75rem] font-medium tracking-wide">
                    {PERSONAL_INFO.name}
                  </span>
                  <span
                    className="font-mono text-[0.6875rem] px-3 py-1 rounded-md backdrop-blur-md font-medium"
                    style={{ background: "rgba(200, 117, 93, 0.9)" }}
                  >
                    Junior Dev
                  </span>
                </div>
              </div>

              {/* Editorial Caption Metadata */}
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="font-mono text-[0.6875rem]" style={{ color: "var(--text-tertiary)" }}>
                  {t.photoSub}
                </span>
                <span
                  className="font-mono text-[0.6875rem] font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  {t.photoBadge}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden xl:flex flex-col items-center gap-1.5"
      >
        <span className="font-mono text-[0.625rem] uppercase tracking-widest text-tertiary">
          {t.scroll}
        </span>
        <div className="w-px h-6" style={{ background: "var(--border)" }} />
      </motion.div>
    </section>
  );
}
