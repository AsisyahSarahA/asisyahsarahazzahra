"use client";

/**
 * CustomCursor.tsx
 * ─────────────────────────────────────────────────────────
 * Custom cursor: small dot + trailing ring.
 * - Lerp-based smooth trailing movement
 * - Expands on elements with data-cursor="pointer"
 * - Hidden on touch devices (CSS media query)
 * ─────────────────────────────────────────────────────────
 */

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse position
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Spring-smoothed positions (different stiffness for dot vs ring)
  const dotX = useSpring(rawX, { stiffness: 800, damping: 50 });
  const dotY = useSpring(rawY, { stiffness: 800, damping: 50 });
  const ringX = useSpring(rawX, { stiffness: 200, damping: 30 });
  const ringY = useSpring(rawY, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setIsVisible(true);

      // Check if hovering a clickable element
      const target = e.target as HTMLElement;
      const clickable = target.closest(
        'a, button, [role="button"], [data-cursor="pointer"], input, select, textarea, label'
      );
      setIsPointer(!!clickable);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [rawX, rawY]);

  return (
    // Hide on touch devices via CSS (pointer:coarse)
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden [@media(pointer:fine)]:block">
      {/* Trailing ring */}
      <motion.div
        style={{ left: ringX, top: ringY, x: "-50%", y: "-50%" }}
        animate={{
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          opacity: isVisible ? 1 : 0,
          borderColor: isPointer ? "#B200FF" : "rgba(255,255,255,0.5)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute rounded-full border-2 border-white/50"
      />
      {/* Center dot */}
      <motion.div
        style={{ left: dotX, top: dotY, x: "-50%", y: "-50%" }}
        animate={{
          width: isPointer ? 6 : 6,
          height: isPointer ? 6 : 6,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isPointer ? "#B200FF" : "white",
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ duration: 0.1 }}
        className="absolute rounded-full bg-white"
      />
    </div>
  );
}
