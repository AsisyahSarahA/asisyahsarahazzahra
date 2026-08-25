"use client";

/**
 * Hero.tsx
 * ─────────────────────────────────────────────────────────
 * Full-viewport hero section.
 *
 * Features:
 * - Mouse-following radial gradient spotlight
 * - Animated mesh gradient background (theme-responsive)
 * - Floating CSS glass sphere with parallax mouse tracking
 * - "Glass shard" assembly page-load animation
 * - Two Skeuomorphic CTAs: View Projects + Download CV
 * ─────────────────────────────────────────────────────────
 */

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  stagger,
  animate,
} from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { SkeuoButton } from "@/components/ui/SkeuoButton";
import { PERSONAL_INFO } from "@/data/portfolio";
import { shardIn, staggerContainer } from "@/lib/utils";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position (normalized -0.5 → 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spotlight position
  const spotX = useSpring(mouseX, { stiffness: 80, damping: 30 });
  const spotY = useSpring(mouseY, { stiffness: 80, damping: 30 });

  // Sphere parallax (opposite direction, slower)
  const sphereX = useTransform(spotX, [-0.5, 0.5], [-30, 30]);
  const sphereY = useTransform(spotY, [-0.5, 0.5], [-20, 20]);

  // Text subtle parallax
  const textX = useTransform(spotX, [-0.5, 0.5], [-10, 10]);
  const textY = useTransform(spotY, [-0.5, 0.5], [-5, 5]);

  // Spotlight as percentage for CSS radial-gradient
  const spotXPct = useTransform(spotX, [-0.5, 0.5], ["20%", "80%"]);
  const spotYPct = useTransform(spotY, [-0.5, 0.5], ["20%", "80%"]);

  const [spotStyle, setSpotStyle] = useState({ x: "50%", y: "40%" });

  useEffect(() => {
    const unsubX = spotXPct.on("change", (v) =>
      setSpotStyle((s) => ({ ...s, x: v }))
    );
    const unsubY = spotYPct.on("change", (v) =>
      setSpotStyle((s) => ({ ...s, y: v }))
    );
    return () => { unsubX(); unsubY(); };
  }, [spotXPct, spotYPct]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Mesh Gradient Background ── */}
      <div className="absolute inset-0 dark:bg-cyber-bg bg-lilac-bg" />
      <div className="absolute inset-0 dark:bg-cyber-mesh bg-lilac-mesh bg-[length:200%_200%] animate-mesh-shift opacity-80" />

      {/* ── Mouse-Follow Spotlight ── */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse 600px 500px at ${spotStyle.x} ${spotStyle.y}, rgba(178,0,255,0.12) 0%, transparent 70%)`,
        }}
      />
      {/* Light mode spotlight */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse 600px 500px at ${spotStyle.x} ${spotStyle.y}, rgba(75,0,130,0.08) 0%, transparent 70%)`,
        }}
      />

      {/* ── Floating Glass Sphere ── */}
      <motion.div
        style={{ x: sphereX, y: sphereY }}
        className="absolute right-[10%] top-[15%] hidden lg:block"
      >
        <div className="relative w-56 h-56 animate-float">
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full dark:bg-cyber-violet/20 bg-lilac-violet/10 blur-3xl scale-125" />
          {/* Glass sphere body */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 35% 35%, rgba(255,255,255,0.25) 0%, rgba(178,0,255,0.1) 40%, rgba(0,240,255,0.05) 100%)",
              boxShadow:
                "inset 0 2px 8px rgba(255,255,255,0.3), inset -4px -4px 16px rgba(0,0,0,0.4), 0 8px 32px rgba(178,0,255,0.3)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          />
          {/* Inner reflection */}
          <div
            className="absolute top-[15%] left-[20%] w-[30%] h-[20%] rounded-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 100%)",
              filter: "blur(2px)",
            }}
          />
          {/* Secondary ring */}
          <div
            className="absolute -inset-4 rounded-full border border-cyber-violet/20 dark:border-cyber-violet/20 border-lilac-violet/15"
            style={{ filter: "blur(1px)" }}
          />
        </div>
      </motion.div>

      {/* ── Decorative Orbiting Particles ── */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full dark:bg-cyber-cyan/60 bg-lilac-violet/40"
          animate={{
            x: [0, Math.cos((i * 72 * Math.PI) / 180) * 120],
            y: [0, Math.sin((i * 72 * Math.PI) / 180) * 120],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
          style={{
            top: "50%",
            left: "50%",
          }}
        />
      ))}

      {/* ── Main Content ── */}
      <motion.div
        style={{ x: textX, y: textY }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={shardIn} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono backdrop-blur-md dark:bg-cyber-violet/10 bg-lilac-violet/10 border dark:border-cyber-violet/30 border-lilac-violet/30 dark:text-cyber-cyan text-lilac-violet">
            <Sparkles size={14} strokeWidth={1.5} className="animate-neon-pulse" />
            {PERSONAL_INFO.tagline}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={shardIn}
          className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="block text-foreground dark:text-white">
            Building Digital
          </span>
          <span className="block bg-gradient-to-r dark:from-cyber-violet dark:via-purple-400 dark:to-cyber-cyan from-lilac-violet via-purple-600 to-lilac-violet bg-clip-text text-transparent">
            Solutions with
          </span>
          <span className="block dark:text-white text-foreground">
            Precision.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={shardIn}
          className="font-body text-lg sm:text-xl dark:text-white/60 text-foreground/60 max-w-xl mx-auto mb-10"
        >
          {PERSONAL_INFO.role} — Crafting meaningful tech experiences with
          clean code and purposeful design.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={shardIn}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <SkeuoButton
            id="hero-cta-projects"
            variant="primary"
            size="lg"
            onClick={scrollToProjects}
          >
            <Sparkles size={18} strokeWidth={1.5} />
            View Projects
          </SkeuoButton>

          <SkeuoButton
            id="hero-cta-cv"
            variant="outline"
            size="lg"
            href="/cv.pdf"
            download="Asisyah-Sarah-Azzahra-CV.pdf"
          >
            <Download size={18} strokeWidth={1.5} />
            Download CV
          </SkeuoButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          variants={shardIn}
          onClick={scrollToAbout}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-16 flex flex-col items-center gap-2 dark:text-white/40 text-foreground/40 hover:text-foreground/70 transition-colors mx-auto"
          aria-label="Scroll down"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.button>
      </motion.div>
    </section>
  );
}
