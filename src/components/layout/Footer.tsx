"use client";

/**
 * Footer.tsx — Minimal Editorial Portfolio Footer
 * Asisyah Sarah Azzahra · Monogram signature · Quick verified links
 * Bilingual (ID/EN)
 */

import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export function Footer() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].footer;

  return (
    <footer
      className="py-12 border-t"
      style={{
        background: "var(--bg)",
        borderColor: "var(--border)",
      }}
    >
      <div className="container-editorial flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Monogram and Signature */}
        <div className="flex items-center gap-3">
          <span
            className="font-serif text-2xl tracking-tight"
            style={{ color: "var(--accent)" }}
          >
            A.
          </span>
          <div>
            <p className="font-sans text-[0.875rem] font-semibold" style={{ color: "var(--text)" }}>
              {PERSONAL_INFO.name}
            </p>
            <p className="font-sans text-[0.75rem]" style={{ color: "var(--text-secondary)" }}>
              {t.signature}
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 font-mono text-[0.75rem]">
          <Link
            href="/sertifikat"
            className="link-reveal font-semibold"
            style={{ color: "var(--accent)" }}
          >
            {locale === "id" ? "Sertifikat (11)" : "Certificates (11)"} ↗
          </Link>
          <a
            href="/cv/CV_Asisyah_Sarah_Azzahra.pdf"
            download="CV_Asisyah_Sarah_Azzahra.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-reveal font-semibold"
            style={{ color: "var(--text)" }}
          >
            {locale === "id" ? "Unduh CV" : "Download CV"} ↓
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-reveal"
            style={{ color: "var(--text-secondary)" }}
          >
            GitHub ↗
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="link-reveal"
            style={{ color: "var(--text-secondary)" }}
          >
            Email ↗
          </a>
          <Link
            href="/#hero"
            className="link-reveal"
            style={{ color: "var(--text-secondary)" }}
          >
            Top ↑
          </Link>
        </div>

        {/* Rights Notice */}
        <div className="text-center md:text-right">
          <p className="font-mono text-[0.6875rem]" style={{ color: "var(--text-tertiary)" }}>
            © {new Date().getFullYear()} Asisyah Sarah Azzahra. {t.rights}
          </p>
          <p className="font-mono text-[0.625rem] mt-0.5" style={{ color: "var(--text-tertiary)" }}>
            {t.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
