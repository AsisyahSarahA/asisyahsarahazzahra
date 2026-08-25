"use client";

/**
 * ThemeToggle.tsx
 * ─────────────────────────────────────────────────────────
 * Animated sun/moon toggle with icon morph transition.
 * Uses AnimatePresence for enter/exit animation.
 * ─────────────────────────────────────────────────────────
 */

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, rotate: 15 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        // Glass pill button
        "relative flex items-center justify-center w-10 h-10 rounded-full",
        "backdrop-blur-md",
        "dark:bg-white/10 bg-black/10",
        "border border-white/20 dark:border-white/20",
        "shadow-glass-sm",
        "transition-colors duration-300",
        "overflow-hidden",
        className,
      )}
    >
      {/* Rotating icon container */}
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute"
          >
            <Moon
              size={18}
              strokeWidth={1.5}
              className="text-cyber-cyan"
            />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute"
          >
            <Sun
              size={18}
              strokeWidth={1.5}
              className="text-lilac-violet"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
