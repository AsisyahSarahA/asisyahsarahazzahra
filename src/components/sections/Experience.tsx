"use client";

/**
 * Experience.tsx
 * ─────────────────────────────────────────────────────────
 * Vertical timeline with neon tube line & detailed bullet points.
 * Cards slide in from alternating sides on scroll.
 * ─────────────────────────────────────────────────────────
 */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { TIMELINE, type TimelineEntry } from "@/data/portfolio";
import { fadeUp } from "@/lib/utils";

const TYPE_COLORS: Record<TimelineEntry["type"], string> = {
  education:    "dark:bg-cyber-violet/20 dark:border-cyber-violet/40 bg-lilac-violet/15 border-lilac-violet/40",
  work:         "dark:bg-blue-500/20 dark:border-blue-400/40 bg-blue-400/15 border-blue-400/40",
  organization: "dark:bg-emerald-500/20 dark:border-emerald-400/40 bg-emerald-400/15 border-emerald-400/40",
  certification:"dark:bg-yellow-500/20 dark:border-yellow-400/40 bg-yellow-400/15 border-yellow-400/40",
};

const TYPE_DOT_COLORS: Record<TimelineEntry["type"], string> = {
  education:    "dark:bg-cyber-violet bg-lilac-violet dark:shadow-neon-violet",
  work:         "bg-blue-500 dark:shadow-[0_0_12px_rgba(59,130,246,0.8)]",
  organization: "bg-emerald-500 dark:shadow-[0_0_12px_rgba(16,185,129,0.8)]",
  certification:"bg-yellow-400 dark:shadow-[0_0_12px_rgba(234,179,8,0.8)]",
};

function TimelineCard({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-0">
      {/* Desktop Left card */}
      <div className={`w-full md:w-[calc(50%-2.5rem)] ${!isLeft ? "md:invisible hidden md:block" : ""}`}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
            className="md:pr-4"
          >
            <GlassCard
              className={`p-6 border ${TYPE_COLORS[entry.type]}`}
              hoverable={false}
              intensity="md"
            >
              <EntryContent entry={entry} />
            </GlassCard>
          </motion.div>
        )}
      </div>

      {/* Center dot */}
      <div className="relative z-10 flex items-center justify-center md:w-20 shrink-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-lg ${TYPE_DOT_COLORS[entry.type]}`}
        >
          <span>{entry.icon}</span>
        </motion.div>
      </div>

      {/* Desktop Right card */}
      <div className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? "md:invisible hidden md:block" : ""}`}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.1 }}
            className="md:pl-4"
          >
            <GlassCard
              className={`p-6 border ${TYPE_COLORS[entry.type]}`}
              hoverable={false}
              intensity="md"
            >
              <EntryContent entry={entry} />
            </GlassCard>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function EntryContent({ entry }: { entry: TimelineEntry }) {
  return (
    <>
      <div className="flex items-start justify-between gap-2 mb-2 flex-wrap">
        <h3 className="font-heading font-bold text-base sm:text-lg dark:text-white text-gray-900 leading-tight">
          {entry.title}
        </h3>
        <span className="font-mono text-xs px-2.5 py-0.5 rounded-full dark:bg-white/10 bg-black/5 dark:text-cyber-cyan text-lilac-violet font-medium">
          {entry.period}
        </span>
      </div>
      <p className="font-body text-xs sm:text-sm font-semibold dark:text-cyber-cyan text-lilac-violet mb-3">
        {entry.organization}
      </p>
      <p className="font-body text-xs sm:text-sm dark:text-white/70 text-gray-600 leading-relaxed mb-3">
        {entry.description}
      </p>

      {/* Bullets if present */}
      {entry.bullets && entry.bullets.length > 0 && (
        <ul className="space-y-1.5 pt-2 border-t dark:border-white/10 border-black/10">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 font-body text-xs dark:text-white/60 text-gray-600">
              <span className="dark:text-cyber-violet text-lilac-violet font-bold">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export function Experience() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-32 w-px h-full dark:bg-cyber-violet/10 bg-lilac-violet/10 blur-xl" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={isHeaderInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm dark:text-cyber-cyan text-lilac-violet tracking-widest uppercase">
            — Rekam Jejak & Pengalaman —
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold mt-3 dark:text-white text-gray-900">
            Experience & Education
          </h2>
          <p className="font-body dark:text-white/50 text-gray-500 mt-3 max-w-md mx-auto text-sm">
            Perjalanan akademik, sertifikasi teknis, serta keorganisasian.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Neon Tube Center Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px">
            <div className="w-full h-full dark:bg-gradient-to-b dark:from-cyber-violet dark:via-cyber-cyan dark:to-cyber-violet bg-gradient-to-b from-lilac-violet via-purple-300 to-lilac-violet opacity-60" />
            <div className="absolute inset-0 w-[3px] -left-[1px] dark:bg-cyber-violet/50 opacity-0 dark:opacity-100 blur-[2px]" />
          </div>

          {/* Timeline Entries */}
          <div className="space-y-10">
            {TIMELINE.map((entry, index) => (
              <TimelineCard key={entry.id} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
