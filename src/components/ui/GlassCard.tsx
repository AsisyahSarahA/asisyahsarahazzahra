"use client";

/**
 * GlassCard.tsx
 * ─────────────────────────────────────────────────────────
 * Reusable Skeuomorphic-Glass card component.
 *
 * Features:
 * - backdrop-blur (adaptive: sm on mobile, xl on desktop)
 * - Gradient glass border via pseudo-element overlay
 * - Inner highlight shadow (simulates glass thickness)
 * - Optional 3D tilt on mouse hover (Framer Motion)
 * - Deep drop shadow for Skeuomorphic depth
 * ─────────────────────────────────────────────────────────
 */

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Enable 3D tilt effect on hover */
  hoverable?: boolean;
  /** Blur intensity: 'sm' | 'md' | 'lg' | 'xl' */
  intensity?: "sm" | "md" | "lg" | "xl";
  /** Click handler */
  onClick?: () => void;
  /** Custom glow color class e.g. "shadow-neon-violet" */
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

  // Mouse position values for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring-damped tilt — feels physical
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hoverable || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    // Normalize to -0.5 → 0.5
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Backdrop blur class mapping (mobile performance optimization)
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
      whileHover={hoverable ? { scale: 1.02, y: -4 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        // Base glass structure
        "relative rounded-glass overflow-hidden",
        // Adaptive backdrop blur
        blurMap[intensity],
        // Dark mode glass surface
        "dark:bg-[rgba(45,0,80,0.25)]",
        // Light mode glass surface
        "bg-[rgba(200,162,200,0.2)]",
        // Border — semi-transparent gradient effect
        "border border-white/10 dark:border-white/10",
        // Skeuomorphic drop shadow
        "shadow-glass-md dark:shadow-glass-lg",
        // Hover glow
        hoverable && "cursor-pointer transition-shadow duration-300",
        hoverable && "hover:shadow-glass-lg",
        glowClass,
        className,
      )}
    >
      {/* Inner top-highlight — simulates glass thickness/bevel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
      {/* Noise texture overlay — frosted glass feel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/noise.svg')] bg-repeat bg-[length:100px_100px]"
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
