"use client";

/**
 * ThemeContext.tsx
 * ─────────────────────────────────────────────────────────
 * Robust Dark/Light theme provider.
 * - Reads from localStorage / system preference on client mount
 * - Applies `dark` class to <html> for Tailwind dark: variants
 * ─────────────────────────────────────────────────────────
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "editorial-theme-v2";

/** Reads initial theme safely — defaults to 'dark' for Obsidian aesthetic */
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "dark" || stored === "light") return stored;
  return "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Initialize theme on client mount after initial render
  useEffect(() => {
    const activeTheme = getInitialTheme();
    document.documentElement.classList.toggle("dark", activeTheme === "dark");
    setTheme(activeTheme);
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      localStorage.setItem(STORAGE_KEY, nextTheme);
      return nextTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      {/* Suppress hydration mismatch by rendering cleanly */}
      <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.2s ease" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
