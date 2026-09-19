"use client";

/**
 * Skills.tsx — "The Craft, Not a Skill Bar"
 * Clean categorized technical profile · No fake percentages · No dot ratings
 * Interactive shelf / contextual tool inspector · Bilingual (ID/EN)
 */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import { SKILL_CATEGORIES } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease },
  }),
};

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  const [activeTab, setActiveTab] = useState<number>(0);

  const { locale } = useLanguage();
  const t = TRANSLATIONS[locale].skills;

  return (
    <section
      ref={ref}
      id="skills"
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

        {/* ── Category Selector Tabs ─────────────────────────── */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap gap-3 mb-10 border-b pb-5"
          style={{ borderColor: "var(--border)" }}
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(idx)}
              className="px-5 py-2.5 rounded-xl font-mono text-[0.8125rem] font-medium transition-all"
              style={{
                background: activeTab === idx ? "var(--surface)" : "transparent",
                color: activeTab === idx ? "var(--accent)" : "var(--text-secondary)",
                border: "1px solid",
                borderColor: activeTab === idx ? "var(--accent)" : "var(--border)",
                boxShadow: activeTab === idx ? "var(--shadow-sm)" : "none",
              }}
            >
              {t.categories[idx] || cat.label}
            </button>
          ))}
        </motion.div>

        {/* ── Active Category Skills View ────────────────────── */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease }}
          className="p-8 sm:p-12 rounded-2xl"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div className="max-w-xl mb-9">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl mb-3" style={{ color: "var(--text)" }}>
              {t.categories[activeTab] || SKILL_CATEGORIES[activeTab].label}
            </h3>
            <p className="font-sans text-[0.9375rem] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {SKILL_CATEGORIES[activeTab].description}
            </p>
          </div>

          {/* Skill items chips */}
          <div className="flex flex-wrap gap-3.5">
            {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
              <div
                key={skill}
                className="px-5 py-3 rounded-xl flex items-center gap-3 transition-all hover:scale-[1.02]"
                style={{
                  background: "var(--surface-alt)",
                  border: "1px solid var(--border)",
                }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
                <span className="font-sans text-[0.9375rem] font-medium" style={{ color: "var(--text)" }}>
                  {skill}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t flex flex-wrap items-center justify-between gap-2 font-mono text-[0.75rem]" style={{ borderColor: "var(--border)", color: "var(--text-tertiary)" }}>
            <span>{t.note}</span>
            <span className="text-accent font-semibold px-2.5 py-1 rounded" style={{ background: "var(--accent-soft)" }}>
              Standardized Tools
            </span>
          </div>
        </motion.div>

        {/* Overview across all domains */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.key}
              onClick={() => setActiveTab(idx)}
              className="p-6 sm:p-7 rounded-2xl cursor-pointer transition-all hover:border-accent hover:shadow-sm"
              style={{
                background: "var(--surface)",
                border: "1px solid",
                borderColor: activeTab === idx ? "var(--accent)" : "var(--border)",
              }}
            >
              <p className="label-meta text-[0.625rem] mb-2">{t.categories[idx]}</p>
              <p className="font-serif text-xl mb-2.5" style={{ color: "var(--text)" }}>
                {cat.skills.length} Tools & Topics
              </p>
              <p className="font-sans text-[0.8125rem] leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                {cat.skills.slice(0, 4).join(", ")}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
