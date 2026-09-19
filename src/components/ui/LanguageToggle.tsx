"use client";

/**
 * LanguageToggle.tsx — Minimalist Editorial Language Switcher
 * Displays ID / EN with terracotta active indicator
 */

import { useLanguage } from "@/context/LanguageContext";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selection"
      className="inline-flex items-center p-0.5 rounded text-xs font-mono tracking-wider transition-colors"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-subtle)",
      }}
    >
      <button
        type="button"
        id="lang-toggle-id"
        onClick={() => setLocale("id")}
        aria-pressed={locale === "id"}
        className="px-2 py-1 rounded transition-all duration-200 font-semibold"
        style={{
          background: locale === "id" ? "var(--accent)" : "transparent",
          color: locale === "id" ? "#FAFAF9" : "var(--foreground-muted)",
        }}
      >
        ID
      </button>
      <button
        type="button"
        id="lang-toggle-en"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className="px-2 py-1 rounded transition-all duration-200 font-semibold"
        style={{
          background: locale === "en" ? "var(--accent)" : "transparent",
          color: locale === "en" ? "#FAFAF9" : "var(--foreground-muted)",
        }}
      >
        EN
      </button>
    </div>
  );
}
