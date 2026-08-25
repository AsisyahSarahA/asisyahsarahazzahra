// src/lib/utils.ts
// ─────────────────────────────────────────────────────────
// Utility helpers: cn() for class merging, easing constants, etc.
// ─────────────────────────────────────────────────────────

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely, resolving conflicts.
 * Usage: cn("px-4 py-2", condition && "bg-red-500", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Framer Motion spring presets */
export const springs = {
  gentle:  { type: "spring", stiffness: 100, damping: 20 } as const,
  medium:  { type: "spring", stiffness: 200, damping: 25 } as const,
  snappy:  { type: "spring", stiffness: 400, damping: 30 } as const,
  bouncy:  { type: "spring", stiffness: 300, damping: 15 } as const,
} as const;

/** Framer Motion variant presets for section entries */
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  }),
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export const shardIn = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
};
