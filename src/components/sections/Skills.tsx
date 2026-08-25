"use client";

/**
 * Skills.tsx
 * ─────────────────────────────────────────────────────────
 * Bento Grid of skill categories with physical token chips & proficiency badges.
 * ─────────────────────────────────────────────────────────
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { SKILLS } from "@/data/portfolio";
import { fadeUp, staggerContainer, shardIn } from "@/lib/utils";

const CATEGORY_STYLES = [
  {
    bg: "dark:from-cyber-violet/20 from-lilac-violet/10 to-transparent",
    chip: "dark:bg-cyber-violet/15 dark:border-cyber-violet/30 dark:text-cyber-cyan bg-lilac-violet/10 border-lilac-violet/30 text-lilac-violet",
    accent: "dark:text-cyber-violet text-lilac-violet",
    glow: "hover:shadow-neon-violet",
  },
  {
    bg: "dark:from-blue-500/20 from-blue-400/10 to-transparent",
    chip: "dark:bg-blue-500/15 dark:border-blue-400/30 dark:text-blue-300 bg-blue-400/10 border-blue-400/30 text-blue-600",
    accent: "dark:text-blue-400 text-blue-600",
    glow: "hover:shadow-[0_0_16px_rgba(59,130,246,0.4)]",
  },
  {
    bg: "dark:from-emerald-500/20 from-emerald-400/10 to-transparent",
    chip: "dark:bg-emerald-500/15 dark:border-emerald-400/30 dark:text-emerald-300 bg-emerald-400/10 border-emerald-400/30 text-emerald-600",
    accent: "dark:text-emerald-400 text-emerald-600",
    glow: "hover:shadow-[0_0_16px_rgba(16,185,129,0.4)]",
  },
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 dark:bg-cyber-cyan/5 bg-lilac-lavender/30 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm dark:text-cyber-cyan text-lilac-violet tracking-widest uppercase">
            — Keahlian & Spesialisasi —
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold mt-3 dark:text-white text-gray-900">
            Skills & Expertise
          </h2>
          <p className="font-body dark:text-white/50 text-gray-500 mt-3 max-w-md mx-auto text-sm sm:text-base">
            Perangkat lunak, bahasa pemrograman, dan kompetensi teknis yang dikuasai.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SKILLS.map((category, catIdx) => {
            const styles = CATEGORY_STYLES[catIdx % CATEGORY_STYLES.length];
            return (
              <motion.div key={category.label} variants={shardIn}>
                <GlassCard
                  className={`p-6 sm:p-7 h-full flex flex-col justify-between bg-gradient-to-br ${styles.bg}`}
                  glowClass={styles.glow}
                  intensity="md"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b dark:border-white/10 border-black/10">
                      <span className="text-3xl">{category.emoji}</span>
                      <div>
                        <h3 className={`font-heading font-bold text-lg sm:text-xl ${styles.accent}`}>
                          {category.label}
                        </h3>
                        <p className="font-mono text-xs dark:text-white/40 text-gray-500">
                          {category.skills.length} Komponen Terverifikasi
                        </p>
                      </div>
                    </div>

                    {/* Skill Token Chips */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: catIdx * 0.1 + i * 0.05 + 0.3, duration: 0.3 }}
                          whileHover={{
                            y: -3,
                            scale: 1.04,
                            transition: { type: "spring", stiffness: 400 },
                          }}
                          className={`
                            relative group flex items-center gap-2 px-3.5 py-2 rounded-full
                            border cursor-default
                            font-mono text-xs font-medium
                            backdrop-blur-sm
                            shadow-[0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]
                            transition-all duration-200
                            ${styles.chip}
                          `}
                        >
                          <span className="text-base">{skill.icon}</span>
                          <span>{skill.name}</span>

                          {/* Level Badge Tooltip on Hover */}
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[9px] px-1.5 py-0.5 rounded-full dark:bg-black/60 bg-white/80 dark:text-white text-gray-800 border border-white/20">
                            {skill.level}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t dark:border-white/5 border-black/5 flex items-center justify-between font-mono text-[10px] dark:text-white/30 text-gray-400">
                    <span>Verified Skill Set</span>
                    <span>100% Practical</span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
