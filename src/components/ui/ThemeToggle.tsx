"use client";

/**
 * ThemeToggle.tsx — Editorial Tech
 * Minimal sun/moon icon switch with terracotta accent
 */

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle({ className }: { className?: string }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      id="theme-toggle"
      onClick={toggleTheme}
      whileTap={{ scale: 0.88 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex items-center justify-center w-8 h-8 transition-colors duration-300 ${className ?? ""}`}
      style={{
        border: "1px solid var(--border-subtle)",
        borderRadius: "2px",
        background: "var(--surface)",
        color: "var(--foreground-muted)",
      }}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 30 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            <Moon size={14} strokeWidth={1.8} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 30 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -30 }}
            transition={{ duration: 0.25 }}
            className="absolute"
          >
            <Sun size={14} strokeWidth={1.8} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

