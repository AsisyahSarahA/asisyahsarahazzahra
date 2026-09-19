"use client";

/**
 * LanguageContext.tsx
 * Provides bilingual support (Indonesian 'id' & English 'en')
 * Persists user choice in localStorage
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type Language = "id" | "en";

interface LanguageContextValue {
  locale: Language;
  setLocale: (lang: Language) => void;
  toggleLocale: () => void;
  isEn: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "id";
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored === "id" || stored === "en") return stored;
  return "id";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const active = getInitialLanguage();
      document.documentElement.lang = active;
      setLocaleState(active);
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const setLocale = useCallback((lang: Language) => {
    setLocaleState(lang);
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Language = prev === "id" ? "en" : "id";
      document.documentElement.lang = next;
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        isEn: locale === "en",
      }}
    >
      <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.2s ease" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
