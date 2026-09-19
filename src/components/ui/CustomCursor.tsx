"use client";

/**
 * CustomCursor.tsx — Editorial Tech Cursor
 * Small dot + trailing ring in terracotta accent color
 */

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const dotX = useSpring(rawX, { stiffness: 800, damping: 50 });
  const dotY = useSpring(rawY, { stiffness: 800, damping: 50 });
  const ringX = useSpring(rawX, { stiffness: 180, damping: 28 });
  const ringY = useSpring(rawY, { stiffness: 180, damping: 28 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setIsVisible(true);

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
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden [@media(pointer:fine)]:block">
      {/* Trailing ring */}
      <motion.div
        style={{ left: ringX, top: ringY, x: "-50%", y: "-50%" }}
        animate={{
          width:  isPointer ? 40 : 28,
          height: isPointer ? 40 : 28,
          opacity: isVisible ? (isPointer ? 0.9 : 0.5) : 0,
          borderColor: isPointer ? "#C8725A" : "rgba(200, 114, 90, 0.4)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="absolute rounded-full border"
      />
      {/* Center dot */}
      <motion.div
        style={{ left: dotX, top: dotY, x: "-50%", y: "-50%" }}
        animate={{
          width:  isPointer ? 8 : 5,
          height: isPointer ? 8 : 5,
          opacity: isVisible ? 1 : 0,
          backgroundColor: "#C8725A",
          scale: isPointer ? 1.3 : 1,
        }}
        transition={{ duration: 0.1 }}
        className="absolute rounded-full"
      />
    </div>
  );
}

