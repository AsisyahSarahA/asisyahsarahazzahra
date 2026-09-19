"use client";

/**
 * SkeuoButton.tsx
 * ─────────────────────────────────────────────────────────
 * Skeuomorphic-Glass button with physical tactile feel.
 * Color Scheme: 60% Navy, 30% Purple/Ungu, 10% White
 * ─────────────────────────────────────────────────────────
 */

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkeuoButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  id?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
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
  target,
  rel,
}: SkeuoButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs sm:text-sm gap-1.5",
    md: "px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base gap-2",
    lg: "px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg gap-2.5",
  };

  const variantClasses = {
    // 30% Ungu with 10% White text & crisp glow
    primary: cn(
      "bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#6D28D9]",
      "text-white font-semibold",
      "shadow-[0_4px_14px_rgba(124,58,237,0.4),inset_0_1px_0_rgba(255,255,255,0.35)]",
      "hover:shadow-[0_6px_22px_rgba(139,92,246,0.6),inset_0_1px_0_rgba(255,255,255,0.45)]",
      "hover:brightness-110 border border-purple-400/30",
    ),
    // Navy base with Purple border & White text
    outline: cn(
      "dark:bg-[#0F172A]/70 bg-white/80 backdrop-blur-md",
      "border border-purple-500/30 dark:border-white/20",
      "dark:text-white text-gray-900 font-medium",
      "hover:border-purple-400 hover:bg-purple-900/20 dark:hover:bg-purple-950/40",
      "shadow-glass-sm hover:shadow-[0_0_16px_rgba(139,92,246,0.3)]",
    ),
    // 10% Crisp White highlight button
    white: cn(
      "bg-white text-[#0A0F1D] font-semibold",
      "shadow-[0_4px_16px_rgba(255,255,255,0.3),inset_0_1px_0_rgba(255,255,255,1)]",
      "hover:bg-slate-100 hover:shadow-[0_0_24px_rgba(255,255,255,0.5)]",
      "border border-white",
    ),
    ghost: cn(
      "bg-transparent border-none",
      "text-foreground/80 hover:text-white hover:bg-purple-600/10",
    ),
  };

  const baseClasses = cn(
    "relative inline-flex items-center justify-center font-body",
    "rounded-pill overflow-hidden cursor-pointer",
    "transition-all duration-200 ease-smooth select-none",
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  const motionProps = {
    whileHover: disabled ? {} : { y: -2, scale: 1.02 },
    whileTap:   disabled ? {} : { y: 1, scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 25 },
  };

  // Render as anchor if href is provided
  if (href) {
    return (
      <motion.a
        id={id}
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={baseClasses}
        {...motionProps}
      >
        {/* Top highlight shine */}
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-pill opacity-40"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",
          }}
        />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
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
      {/* Top highlight shine */}
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-pill opacity-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",
        }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
