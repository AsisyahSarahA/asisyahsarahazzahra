"use client";

/**
 * Navigation.tsx
 * ─────────────────────────────────────────────────────────
 * Floating glass pill navigation bar.
 * - Glassmorphism background with heavy blur
 * - Magnetic hover expansion on nav links
 * - Active section detection via IntersectionObserver
 * - ThemeToggle integrated at right end
 * ─────────────────────────────────────────────────────────
 */

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  emoji: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero",       label: "Home",       emoji: "🏠" },
  { id: "about",      label: "About",      emoji: "👤" },
  { id: "skills",     label: "Skills",     emoji: "⚡" },
  { id: "experience", label: "Experience", emoji: "📅" },
  { id: "projects",   label: "Projects",   emoji: "🚀" },
  { id: "contact",    label: "Contact",    emoji: "✉️" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Track scroll position to intensify glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver to detect active section
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-2"
    >
      <div
        className={cn(
          // Glass pill container
          "flex items-center gap-1 px-3 py-2 rounded-pill",
          "backdrop-blur-xl",
          // Background intensity increases on scroll
          scrolled
            ? "dark:bg-[rgba(11,12,21,0.85)] bg-[rgba(248,249,250,0.85)]"
            : "dark:bg-[rgba(11,12,21,0.6)] bg-[rgba(248,249,250,0.6)]",
          // Border
          "border border-white/15 dark:border-white/10",
          // Shadow
          "shadow-glass-md",
          "transition-all duration-300",
        )}
      >
        {/* Nav items */}
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          const isHovered = hoveredItem === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              animate={{
                // Magnetic expansion on hover
                paddingLeft: isHovered ? 16 : 10,
                paddingRight: isHovered ? 16 : 10,
              }}
              className={cn(
                "relative flex items-center gap-1.5 py-1.5 rounded-full text-sm font-body",
                "transition-colors duration-200",
                isActive
                  ? "text-cyber-violet dark:text-cyber-cyan font-semibold"
                  : "text-foreground/60 hover:text-foreground/90",
              )}
              aria-label={`Navigate to ${item.label}`}
            >
              {/* Active indicator pill */}
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full dark:bg-cyber-violet/15 bg-lilac-violet/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 text-xs">{item.emoji}</span>
              <motion.span
                animate={{ opacity: isHovered || isActive ? 1 : 0, width: isHovered || isActive ? "auto" : 0 }}
                className="relative z-10 overflow-hidden whitespace-nowrap text-xs font-medium"
              >
                {item.label}
              </motion.span>
            </motion.button>
          );
        })}

        {/* Divider */}
        <div className="w-px h-5 bg-white/15 mx-1" />

        {/* Theme toggle */}
        <ThemeToggle className="w-8 h-8" />
      </div>
    </motion.nav>
  );
}
