"use client";

/**
 * About.tsx — "The Person Behind the Code" Editorial Narrative
 * Human-centered storytelling · Authentic academic facts (IPK 3.93, LP3I)
 * Women in Tech identity · Bilingual (ID/EN) · Framer Motion
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].about;

  return (
    <section ref={ref} id="about" className="py-20 lg:py-28">
      <div className="container-editorial">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          {/* ── Left Column: Editorial Headline & Narrative ──── */}
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
              className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 tracking-tight"
              style={{ color: "var(--text)", lineHeight: 1.12 }}
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
              className="font-sans text-[0.9375rem] font-medium mb-6"
              style={{ color: "var(--accent)" }}
            >
              {t.tagline}
            </motion.p>

            {/* Story Paragraphs */}
            <motion.div
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-4 font-sans text-[0.9375rem] leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>{t.storyP1}</p>
              <p>{t.storyP2}</p>
              <p>{t.storyP3}</p>
            </motion.div>

            {/* Quote Block */}
            <motion.blockquote
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-8 pl-5 py-2 font-serif italic text-lg sm:text-xl border-l-2"
              style={{
                color: "var(--text)",
                borderColor: "var(--accent)",
              }}
            >
              {t.quote}
            </motion.blockquote>
          </div>

          {/* ── Right Column: Highlighted Academic & Identity Cards ── */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Women in Tech Brand Reflection Card */}
            <div
              className="p-8 sm:p-10 rounded-2xl relative overflow-hidden space-y-4"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
                <span className="label-meta text-[0.6875rem]">Perspektif & Prinsip Desain</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl" style={{ color: "var(--text)" }}>
                Code, curiosity, and purpose.
              </h3>

              <p className="font-sans text-[0.9375rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Sebagai pengembang perempuan di bidang Informatika, saya percaya bahwa perangkat lunak yang hebat tidak hanya dibangun dengan sintaks yang bersih, namun juga dengan kepekaan terhadap kenyamanan orang yang menggunakannya setiap hari.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {["Human-Centered Design", "Structured Logic", "Continuous Learning", "West Java to Tech"].map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.75rem] px-3.5 py-1.5 rounded-lg font-medium"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                      border: "1px solid rgba(200, 117, 93, 0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Credentials List */}
            <div
              className="p-8 sm:p-10 rounded-2xl"
              style={{
                background: "var(--surface-alt)",
                border: "1px solid var(--border)",
              }}
            >
              <p className="label-meta text-[0.6875rem] mb-5">{t.factsTitle}</p>

              <div className="grid sm:grid-cols-2 gap-5">
                {t.stats.map((fact, i) => (
                  <div
                    key={i}
                    className="p-5 sm:p-6 rounded-xl space-y-1"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <p className="font-serif text-2xl sm:text-3xl font-normal" style={{ color: "var(--accent)" }}>
                      {fact.number}
                    </p>
                    <p className="font-sans text-[0.875rem] font-medium leading-snug" style={{ color: "var(--text-secondary)" }}>
                      {fact.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
