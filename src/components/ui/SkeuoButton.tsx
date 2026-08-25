"use client";

/**
 * SkeuoButton.tsx
 * ─────────────────────────────────────────────────────────
 * Skeuomorphic-Glass button with physical press effect.
 *
 * Variants:
 * - 'primary'  → Neon Violet gradient, glow on hover
 * - 'outline'  → Glass border, transparent fill
 * - 'ghost'    → Minimal, for secondary actions
 *
 * Physics:
 * - Press: translateY(2px) + shadow reduction (tactile feel)
 * - Hover: glow intensifies, slight lift
 * - Top-highlight bevel gradient for 3D convex effect
 * ─────────────────────────────────────────────────────────
 */

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkeuoButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  id?: string;
  download?: boolean | string;
}

export function SkeuoButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  disabled = false,
  type = "button",
  id,
  download,
}: SkeuoButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const variantClasses = {
    primary: cn(
      // Neon violet gradient background
      "bg-gradient-to-br from-[#B200FF] via-[#8B00CC] to-[#6600AA]",
      "dark:from-[#B200FF] dark:via-[#8B00CC] dark:to-[#5500BB]",
      // Light mode: deep violet
      "text-white",
      // Skeuomorphic shadow: top bevel + drop shadow + inner highlight
      "shadow-skeuo",
      // Hover glow
      "hover:shadow-neon-violet dark:hover:shadow-neon-violet",
      "hover:brightness-110",
    ),
    outline: cn(
      // Glass fill
      "bg-white/5 dark:bg-white/5 backdrop-blur-sm",
      // Gradient border
      "border border-white/20 dark:border-white/20",
      "text-cyber-violet dark:text-cyber-violet",
      "hover:bg-cyber-violet/10 dark:hover:bg-cyber-violet/10",
      "shadow-glass-sm hover:shadow-glass-md",
    ),
    ghost: cn(
      "bg-transparent border-none",
      "text-foreground/70 hover:text-foreground",
      "hover:bg-white/5",
    ),
  };

  const baseClasses = cn(
    // Layout
    "relative inline-flex items-center justify-center font-body font-medium",
    "rounded-pill overflow-hidden",
    // Smooth transitions
    "transition-all duration-200 ease-smooth",
    // Disable state
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    // Size
    sizeClasses[size],
    // Variant
    variantClasses[variant],
    className,
  );

  const motionProps = {
    whileHover: disabled ? {} : { y: -2, scale: 1.02 },
    whileTap: disabled
      ? {}
      : {
          y: 2,          // press down
          scale: 0.98,
          transition: { duration: 0.05 },
        },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  };

  const inner = (
    <>
      {/* Top-bevel highlight — convex 3D glass effect */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />
      {/* Bottom shadow inset for depth */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-black/30 to-transparent"
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        id={id}
        href={href}
        download={download}
        className={baseClasses}
        {...motionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
    >
      {inner}
    </motion.button>
  );
}
