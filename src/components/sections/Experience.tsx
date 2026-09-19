"use client";

/**
 * Experience.tsx — "A Journey of Learning, Building, and Contributing"
 * Compact editorial journey · Official BNSP Junior Programmer 2024 Certification
 * HAKI Intellectual Property · Professional Internships · Education · Awards
 * Bilingual (ID/EN) · Framer Motion
 */

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS, TIMELINE_I18N, type TimelineEntryI18n } from "@/data/translations";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease },
  }),
};

function JourneyCard({
  entry,
  showLabel,
  hideLabel,
}: {
  entry: TimelineEntryI18n;
  showLabel: string;
  hideLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="p-7 sm:p-8 rounded-2xl transition-all hover:shadow-sm"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            {entry.badge && (
              <span
                className="font-mono text-[0.6875rem] font-bold px-3 py-1 rounded-md uppercase tracking-wider"
                style={{
                  background: entry.type === "certification" ? "var(--accent)" : "var(--sage-soft)",
                  color: entry.type === "certification" ? "#F6F3EE" : "var(--sage)",
                }}
              >
                {entry.badge}
              </span>
            )}
            <span className="font-mono text-[0.75rem]" style={{ color: "var(--text-tertiary)" }}>
              {entry.period}
            </span>
          </div>

          <h4 className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] leading-tight" style={{ color: "var(--text)" }}>
            {entry.title}
          </h4>
        </div>

        {entry.gpa && (
          <span
            className="font-mono text-[0.8125rem] font-bold px-3 py-1.5 rounded-lg shrink-0"
            style={{
              background: "var(--accent-soft)",
              color: "var(--accent)",
              border: "1px solid rgba(200, 117, 93, 0.2)",
            }}
          >
            IPK {entry.gpa}
          </span>
        )}
      </div>

      <p className="font-sans text-[0.875rem] font-medium mb-3.5" style={{ color: "var(--accent)" }}>
        {entry.organization} {entry.location && `· ${entry.location}`}
      </p>

      <p className="font-sans text-[0.9375rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        {entry.description}
      </p>

      {/* Expandable Bullet Details */}
      <AnimatePresence>
        {expanded && entry.bullets && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease }}
            className="mt-5 pt-5 border-t space-y-2.5 overflow-hidden"
            style={{ borderColor: "var(--border)" }}
          >
            {entry.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                <span className="font-sans text-[0.875rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {bullet}
                </span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {entry.bullets && entry.bullets.length > 0 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 font-sans text-[0.8125rem] font-medium link-reveal transition-colors"
          style={{ color: "var(--accent)" }}
        >
          {expanded ? hideLabel : showLabel}
        </button>
      )}
    </div>
  );
}

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].experience;
  const entries = TIMELINE_I18N[locale];

  const certEntries = entries.filter((e) => e.type === "certification");
  const workEntries = entries.filter((e) => e.type === "work");
  const orgEntries = entries.filter((e) => e.type === "organization");
  const eduEntries = entries.filter((e) => e.type === "education");
  const awardEntries = entries.filter((e) => e.type === "award");

  const groups = [
    { key: "certification", label: t.sections.certification, items: certEntries },
    { key: "work",          label: t.sections.work,          items: workEntries },
    { key: "organization",  label: t.sections.organization,  items: orgEntries },
    { key: "education",     label: t.sections.education,     items: eduEntries },
    { key: "award",         label: t.sections.award,         items: awardEntries },
  ];

  return (
    <section ref={ref} id="experience" className="py-20 lg:py-28">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
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
            className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-tight"
            style={{ color: "var(--text)" }}
          >
            {t.headingLead}{" "}
            <em className="italic" style={{ color: "var(--accent)" }}>
              {t.headingAccent}
            </em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-sans text-[0.9375rem] leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Rekam jejak pembelajaran terstruktur, sertifikasi nasional BNSP, kontribusi dalam pelayanan publik dan organisasi kampus, serta penghargaan prestasi di Jawa Barat.
          </motion.p>
        </div>

        {/* ── Journey Groups ─────────────────────────────────── */}
        <div className="space-y-14">
          {groups.map((group, gIdx) => (
            <motion.div
              key={group.key}
              variants={fadeUp}
              custom={gIdx + 2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6 pb-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent)" }} />
                <h3 className="font-mono text-[0.875rem] font-bold uppercase tracking-wider" style={{ color: "var(--text)" }}>
                  {group.label}
                </h3>
                <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
                <span className="font-mono text-[0.75rem]" style={{ color: "var(--text-tertiary)" }}>
                  0{gIdx + 1}
                </span>
              </div>

              {/* Items Grid */}
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {group.items.map((entry) => (
                  <JourneyCard
                    key={entry.id}
                    entry={entry}
                    showLabel={t.showDetail}
                    hideLabel={t.hideDetail}
                  />
                ))}
              </div>

              {/* Callout to Dedicated Certificates Page */}
              {group.key === "certification" && (
                <div
                  className="mt-6 p-6 sm:p-7 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  style={{
                    background: "var(--surface-alt)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="font-mono text-[0.6875rem] font-bold px-2.5 py-0.5 rounded uppercase"
                        style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                      >
                        {locale === "id" ? "Arsip Lengkap" : "Full Archive"}
                      </span>
                      <span className="font-mono text-xs text-secondary">
                        {locale === "id" ? "11 Dokumen Terverifikasi" : "11 Verified Documents"}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-bold" style={{ color: "var(--text)" }}>
                      {locale === "id" ? "Galeri Sertifikat, Lisensi & KHS Lengkap" : "All Certificates, Licenses & Official Transcripts"}
                    </h4>
                    {/* <p className="font-sans text-xs sm:text-[0.8125rem] leading-relaxed mt-1" style={{ color: "var(--text-secondary)" }}>
                      {locale === "id"
                        ? "Buka seluruh sertifikat pelatihan soft skills, kejuruan, magang di Disdukcapil, organisasi kampus, dan transkrip nilai IPK 3.93 dalam penampil interaktif."
                        : "Browse all soft skills, technical, Disdukcapil internship, student leadership credentials, and 3.93 GPA academic transcripts in the interactive viewer."}
                    </p> */}
                  </div>
                  <Link
                    href="/sertifikat"
                    className="btn-primary text-xs py-2.5 px-5 shrink-0 inline-flex items-center gap-2"
                  >
                    <span>{locale === "id" ? "Buka Halaman Sertifikat" : "Explore Certificates"}</span>
                    <span>→</span>
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
