"use client";

/**
 * Footer.tsx
 * ─────────────────────────────────────────────────────────
 * Minimalist glass footer bar.
 * ─────────────────────────────────────────────────────────
 */

import { PERSONAL_INFO } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t dark:border-white/5 border-black/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs dark:text-white/30 text-gray-400">
          © {year} {PERSONAL_INFO.name}. Built with Next.js & ❤️
        </p>
        <p className="font-mono text-xs dark:text-cyber-violet/60 text-lilac-violet/60">
          Neo-Glass Portfolio v1.0
        </p>
      </div>
    </footer>
  );
}
