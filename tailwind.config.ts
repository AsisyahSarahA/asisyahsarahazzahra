import type { Config } from "tailwindcss";

/**
 * tailwind.config.ts
 * Neo-Glass Portfolio — Custom Design Token Configuration
 * All color values sourced from PRD §1.2
 */
const config: Config = {
  // Enable class-based dark mode (ThemeProvider sets 'dark' on <html>)
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Color Palette (PRD §1.2) ─────────────────────────────────────
      colors: {
        // Dark Mode — "Cyber-Night"
        cyber: {
          bg:       "#0B0C15", // 60% dark bg (deep space)
          "bg-alt": "#1A1A2E", // gradient end
          surface:  "rgba(45,0,80,0.4)", // 30% glass surfaces
          violet:   "#B200FF", // 10% accent primary (neon violet)
          cyan:     "#00F0FF", // 10% accent secondary (electric cyan)
        },
        // Light Mode — "Soft Lilac"
        lilac: {
          bg:         "#F8F9FA", // 60% light bg
          "bg-alt":   "#FFF0F5", // gradient end
          surface:    "rgba(200,162,200,0.3)", // 30% glass surfaces
          violet:     "#4B0082", // 10% accent primary (deep violet)
          lavender:   "#E6E6FA", // 10% accent secondary
        },
      },

      // ─── Typography ───────────────────────────────────────────────────
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body:    ["var(--font-inter)", "sans-serif"],
        mono:    ["var(--font-jetbrains)", "monospace"],
      },

      // ─── Backdrop Blur Scale (mobile-optimized) ───────────────────────
      backdropBlur: {
        xs:  "2px",
        sm:  "4px",   // mobile
        md:  "8px",   // tablet
        lg:  "12px",
        xl:  "16px",  // desktop
        "2xl": "24px",
      },

      // ─── Box Shadow — Skeuomorphic Depth System ───────────────────────
      boxShadow: {
        // Glass card drop shadow
        "glass-sm":  "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        "glass-md":  "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
        "glass-lg":  "0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
        // Skeuomorphic button shadows
        "skeuo":        "0 4px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.3)",
        "skeuo-press":  "0 2px 4px rgba(0,0,0,0.5), inset 0 1px 4px rgba(0,0,0,0.3)",
        // Neon glow (Dark mode accents)
        "neon-violet":  "0 0 16px rgba(178,0,255,0.6), 0 0 32px rgba(178,0,255,0.3)",
        "neon-cyan":    "0 0 16px rgba(0,240,255,0.6), 0 0 32px rgba(0,240,255,0.3)",
        // Light mode glow
        "soft-violet":  "0 0 16px rgba(75,0,130,0.2), 0 4px 12px rgba(75,0,130,0.1)",
      },

      // ─── Border Radius ────────────────────────────────────────────────
      borderRadius: {
        "glass": "16px",
        "pill":  "9999px",
      },

      // ─── Background Images — Gradients & Noise ────────────────────────
      backgroundImage: {
        // Dark mode mesh gradient
        "cyber-mesh":
          "radial-gradient(ellipse at 20% 50%, rgba(178,0,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,240,255,0.1) 0%, transparent 60%), radial-gradient(ellipse at 50% 80%, rgba(45,0,80,0.3) 0%, transparent 60%)",
        // Light mode mesh gradient
        "lilac-mesh":
          "radial-gradient(ellipse at 20% 50%, rgba(200,162,200,0.3) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(230,230,250,0.4) 0%, transparent 60%), radial-gradient(ellipse at 50% 80%, rgba(255,240,245,0.5) 0%, transparent 60%)",
        // Neon gradient for text/borders
        "neon-gradient":  "linear-gradient(135deg, #B200FF 0%, #00F0FF 100%)",
        "lilac-gradient": "linear-gradient(135deg, #4B0082 0%, #E6E6FA 100%)",
        // Glass border gradient
        "glass-border":
          "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
      },

      // ─── Keyframe Animations ──────────────────────────────────────────
      keyframes: {
        // Floating animation for glass sphere
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":      { transform: "translateY(-12px) rotate(1deg)" },
          "66%":      { transform: "translateY(-6px) rotate(-1deg)" },
        },
        // Mesh gradient shift
        "mesh-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        // Neon pulse glow
        "neon-pulse": {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%":      { opacity: "0.8", filter: "brightness(1.3)" },
        },
        // Shard assemble (page load)
        "shard-in": {
          "0%":   { opacity: "0", transform: "scale(0.8) rotate(-5deg) translateY(30px)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg) translateY(0px)" },
        },
        // Shimmer for glass borders
        shimmer: {
          "0%":   { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        float:         "float 6s ease-in-out infinite",
        "mesh-shift":  "mesh-shift 8s ease infinite",
        "neon-pulse":  "neon-pulse 2s ease-in-out infinite",
        "shard-in":    "shard-in 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards",
        shimmer:       "shimmer 3s linear infinite",
      },

      // ─── Transition Timing ────────────────────────────────────────────
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
