"use client";

/**
 * GlassCard.tsx
 * ─────────────────────────────────────────────────────────
 * Reusable Skeuomorphic-Glass card component.
 * Palette: 60% Navy Base, 30% Purple Glow, 10% Crisp White Highlight
 * ─────────────────────────────────────────────────────────
 */

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  intensity?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  glowClass?: string;
}

export function GlassCard({
  children,
  className,
  hoverable = true,
  intensity = "md",
  onClick,
  glowClass,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverable || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const blurMap = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-sm md:backdrop-blur-md",
    lg: "backdrop-blur-sm md:backdrop-blur-lg",
    xl: "backdrop-blur-sm md:backdrop-blur-xl",
  };

  return (
    <motion.div
      ref={cardRef}
      style={hoverable ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
      whileHover={hoverable ? { scale: 1.015, y: -3 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        "relative rounded-glass overflow-hidden",
        blurMap[intensity],
        // Dark mode: Deep Navy Glass with subtle purple sheen
        "dark:bg-[#0B132B]/80 dark:border-white/10 dark:hover:border-purple-500/40",
        // Light mode: Pure crisp white glass on ice navy
        "bg-white/85 border-slate-200/80 hover:border-purple-300",
        // Shadows: Deep Navy drop with top white highlight
        "shadow-glass-md hover:shadow-glass-lg",
        glowClass,
        className,
      )}
    >
      {/* Physical top edge reflection for 10% White highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent z-10" />

      {/* Subtle purple radial glow on top-right */}
      <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-purple-500/10 blur-2xl z-0" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
