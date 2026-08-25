/**
 * page.tsx — Main Page Assembly
 * ─────────────────────────────────────────────────────────
 * Assembles all sections in order with page-level
 * stagger animation (glass shards fly in and merge).
 *
 * Section order:
 * 1. Navigation (fixed overlay)
 * 2. Hero
 * 3. About
 * 4. Skills
 * 5. Experience
 * 6. Projects
 * 7. Contact
 * 8. Footer
 * ─────────────────────────────────────────────────────────
 */

"use client";

import { motion, type Variants } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

/** Page-level assembly animation — sections stagger in */
const pageVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HomePage() {
  return (
    <>
      {/* ── Fixed Navigation ── */}
      <Navigation />

      {/* ── Main Content ── */}
      <motion.main
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Dynamic background — dark/light gradient */}
        <div className="fixed inset-0 -z-10 dark:bg-cyber-bg bg-lilac-bg transition-colors duration-500" />
        {/* Subtle top-left glow orb */}
        <div className="fixed -top-64 -left-64 w-[600px] h-[600px] dark:bg-cyber-violet/5 bg-lilac-violet/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        {/* Bottom-right glow orb */}
        <div className="fixed -bottom-64 -right-64 w-[600px] h-[600px] dark:bg-cyber-cyan/5 bg-lilac-lavender/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <motion.div variants={sectionVariants}>
          <Hero />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <About />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Skills />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Experience />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Projects />
        </motion.div>

        <motion.div variants={sectionVariants}>
          <Contact />
        </motion.div>
      </motion.main>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
