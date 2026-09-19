"use client";

/**
 * Navigation.tsx — Editorial Portfolio Navigation
 * Monogram signature "A." · Prioritized section order
 * Active section detection · Bilingual (ID/EN) · Theme toggle
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export function Navigation() {
  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].nav;

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Prioritized order: Projects -> About -> Skills -> Experience -> Certificates -> Contact
  const navItems = [
    { label: t.projects,   href: "/#projects", isSection: true },
    { label: t.about,      href: "/#about", isSection: true },
    { label: t.skills,     href: "/#skills", isSection: true },
    { label: t.experience, href: "/#experience", isSection: true },
    { label: t.certificates || (locale === "id" ? "Sertifikat" : "Certificates"), href: "/sertifikat", isSection: false },
    { label: t.contact,    href: "/#contact", isSection: true },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "color-mix(in srgb, var(--bg) 92%, transparent)"
            : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        }}
      >
        <nav className="container-editorial h-14 sm:h-16 flex items-center justify-between">
          {/* Brand monogram & signature */}
          <Link
            href="/#hero"
            id="nav-logo"
            className="flex items-center gap-2.5 group"
          >
            <span
              className="font-serif text-xl sm:text-2xl tracking-tight transition-transform group-hover:scale-105 duration-200"
              style={{ color: "var(--accent)" }}
            >
              A.
            </span>
            <span
              className="font-sans text-[0.8125rem] font-medium tracking-tight text-secondary group-hover:text-ink transition-colors"
              style={{ color: "var(--text)" }}
            >
              Asisyah Sarah
            </span>
            <span
              className="hidden lg:inline-block font-mono text-[0.625rem] px-2 py-0.5 rounded ml-1"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
                border: "1px solid rgba(200, 117, 93, 0.2)",
              }}
            >
              Women in Tech
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-7">
            {navItems.map((item) => {
              const targetId = item.href.includes("#") ? item.href.split("#")[1] : "";
              const isActive = item.isSection && activeSection === targetId;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  id={`nav-${targetId || "cert"}`}
                  className="font-sans text-[0.75rem] font-medium tracking-wider uppercase transition-colors duration-200 py-1 relative"
                  style={{
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px]"
                      style={{ background: "var(--accent)" }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Top Download CV Action Button */}
            <a
              href="/cv/CV_Asisyah_Sarah_Azzahra.pdf"
              download="CV_Asisyah_Sarah_Azzahra.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[0.75rem] font-semibold transition-all hover:opacity-90 shadow-sm"
              style={{
                background: "var(--accent)",
                color: "#F6F3EE",
              }}
              title="Unduh CV PDF Asisyah Sarah Azzahra"
              id="nav-download-cv"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>{t.downloadCv || (locale === "id" ? "Unduh CV" : "Download CV")}</span>
            </a>

            <LanguageToggle />
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              id="nav-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 flex flex-col gap-[5px] justify-center ml-1"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1.5px] transition-all"
                style={{ background: "var(--text)" }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-5 h-[1.5px] transition-all"
                style={{ background: "var(--text)" }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1.5px] transition-all"
                style={{ background: "var(--text)" }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Full-Screen Overlay ────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(23, 21, 19, 0.5)", backdropFilter: "blur(4px)" }}
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-14 left-0 right-0 z-50 md:hidden px-6 pb-8 pt-6"
              style={{
                background: "var(--bg)",
                borderBottom: "1px solid var(--border)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      id={`nav-mobile-${item.href.replace(/[^a-zA-Z0-9]/g, "")}`}
                      onClick={() => setMenuOpen(false)}
                      className="block font-serif text-2xl py-2.5 transition-colors"
                      style={{ color: "var(--text)" }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Download CV Button */}
                <motion.a
                  href="/cv/CV_Asisyah_Sarah_Azzahra.pdf"
                  download="CV_Asisyah_Sarah_Azzahra.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.25 }}
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 btn-primary w-full py-3 inline-flex items-center justify-center gap-2 text-sm font-mono"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>{t.downloadCv || (locale === "id" ? "Unduh CV (PDF)" : "Download CV (PDF)")}</span>
                </motion.a>
              </div>

              <div className="mt-6 pt-5 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)" }}>
                <span className="font-mono text-[0.6875rem] text-secondary">
                  Women in Tech · Indonesia
                </span>
                <LanguageToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
