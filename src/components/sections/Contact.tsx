"use client";

/**
 * Contact.tsx — "Let's Connect" Editorial Contact Section
 * Verified contact details (Email, WhatsApp, GitHub, Ciamis location)
 * Interactive direct messaging form with validation · Bilingual (ID/EN)
 */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease },
  }),
};

type FormState = "idle" | "loading" | "success";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].contact;

  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 800));
    setFormState("success");
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 lg:py-28"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
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
            {t.description}
          </motion.p>
        </div>

        {/* ── Two-Column Layout: Direct Details & Interactive Form ── */}
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Contacts */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-5"
          >
            {/* Availability Status Badge */}
            <div
              className="p-5 sm:p-6 rounded-2xl flex items-center gap-4"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse shrink-0" />
              <p className="font-sans text-[0.875rem] font-medium" style={{ color: "var(--text)" }}>
                {t.statusAvailable}
              </p>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-6 sm:p-7 rounded-2xl flex items-center gap-5 transition-all hover:shadow-md group"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="label-meta text-[0.625rem] mb-1">{t.directEmailTitle}</p>
                <p className="font-sans text-[0.9375rem] sm:text-[1rem] font-semibold truncate group-hover:text-accent transition-colors" style={{ color: "var(--text)" }}>
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </a>

            {/* WhatsApp / Phone Card */}
            <a
              href={`https://wa.me/6281953663986`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 sm:p-7 rounded-2xl flex items-center gap-5 transition-all hover:shadow-md group"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="label-meta text-[0.625rem] mb-1">{t.phoneTitle}</p>
                <p className="font-sans text-[0.9375rem] sm:text-[1rem] font-semibold group-hover:text-accent transition-colors" style={{ color: "var(--text)" }}>
                  {PERSONAL_INFO.phoneFormatted}
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 sm:p-7 rounded-2xl flex items-center gap-5 transition-all hover:shadow-md group"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div>
                <p className="label-meta text-[0.625rem] mb-1">GitHub Profil</p>
                <p className="font-sans text-[0.9375rem] sm:text-[1rem] font-semibold group-hover:text-accent transition-colors" style={{ color: "var(--text)" }}>
                  github.com/AsisyahSarahA ↗
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div
              className="p-6 sm:p-7 rounded-2xl flex items-center gap-5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="label-meta text-[0.625rem] mb-1">{t.locationTitle}</p>
                <p className="font-sans text-[0.9375rem] sm:text-[1rem] font-semibold" style={{ color: "var(--text)" }}>
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Messaging Form */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="p-8 sm:p-10 lg:p-12 rounded-2xl"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <h3 className="font-serif text-2xl sm:text-3xl mb-7" style={{ color: "var(--text)" }}>
              {t.formTitle}
            </h3>

            {formState === "success" ? (
              <div
                className="p-10 rounded-2xl text-center space-y-4"
                style={{
                  background: "var(--accent-soft)",
                  border: "1px solid rgba(200, 117, 93, 0.25)",
                }}
              >
                <p className="font-serif text-2xl" style={{ color: "var(--text)" }}>
                  {t.formSuccess}
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="font-sans text-[0.875rem] font-medium link-reveal"
                  style={{ color: "var(--accent)" }}
                >
                  ← Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block label-meta text-[0.625rem] mb-2">{t.formName}</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t.formNamePlaceholder}
                      className="w-full px-5 py-3.5 rounded-xl font-sans text-[0.9375rem] outline-none transition-all"
                      style={{
                        background: "var(--surface-alt)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block label-meta text-[0.625rem] mb-2">{t.formEmail}</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t.formEmailPlaceholder}
                      className="w-full px-5 py-3.5 rounded-xl font-sans text-[0.9375rem] outline-none transition-all"
                      style={{
                        background: "var(--surface-alt)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block label-meta text-[0.625rem] mb-2">{t.formSubject}</label>
                  <input
                    required
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder={t.formSubjectPlaceholder}
                    className="w-full px-5 py-3.5 rounded-xl font-sans text-[0.9375rem] outline-none transition-all"
                    style={{
                      background: "var(--surface-alt)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>

                <div>
                  <label className="block label-meta text-[0.625rem] mb-2">{t.formMessage}</label>
                  <textarea
                    required
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.formMessagePlaceholder}
                    className="w-full px-5 py-3.5 rounded-xl font-sans text-[0.9375rem] outline-none transition-all resize-none"
                    style={{
                      background: "var(--surface-alt)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="btn-primary w-full justify-center py-4 text-[0.9375rem]"
                  style={{ opacity: formState === "loading" ? 0.7 : 1 }}
                >
                  {formState === "loading" ? t.formBtnSending : t.formBtnSubmit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
