"use client";

/**
 * MediaViewerModal.tsx — Editorial Interactive Media & Document Viewer
 * Supports both high-res Images (single/gallery with thumb navigation)
 * and PDF Documents (interactive iframe with open/download fallbacks)
 * Accessible with ESC key, backdrop dismiss, and keyboard navigation.
 */

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface MediaItem {
  name: string;
  url: string;
  type: "image" | "pdf";
  label?: string;
}

interface MediaViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  badge?: string;
  items: MediaItem[];
  initialIndex?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function MediaViewerModal({
  isOpen,
  onClose,
  title,
  subtitle,
  badge,
  items,
  initialIndex = 0,
}: MediaViewerModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  // Sync index on open
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(Math.min(initialIndex, Math.max(0, items.length - 1)));
      setIsZoomed(false);
    }
  }, [isOpen, initialIndex, items.length]);

  // Handle keyboard events (ESC, Left, Right)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
      }
    },
    [isOpen, onClose, items.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];
  const isPdf = currentItem.type === "pdf" || currentItem.url.toLowerCase().endsWith(".pdf");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6"
        onClick={onClose}
      >
        {/* Deep editorial blurred backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(18, 16, 15, 0.82)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.3, ease }}
          className="relative w-full max-w-5xl h-[92vh] max-h-[92vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: "var(--bg)",
            border: "1px solid var(--border)",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div
            className="flex items-center justify-between px-5 py-4 sm:px-7 sm:py-5 border-b shrink-0 z-10"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex-1 min-w-0 pr-4">
              <div className="flex items-center gap-2 mb-1">
                {badge && (
                  <span
                    className="font-mono text-[0.625rem] font-bold px-2 py-0.5 rounded tracking-wider uppercase"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                      border: "1px solid rgba(200, 117, 93, 0.2)",
                    }}
                  >
                    {badge}
                  </span>
                )}
                <span
                  className="font-mono text-[0.6875rem]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {isPdf ? "DOKUMEN PDF" : `FOTO ${currentIndex + 1} / ${items.length}`}
                </span>
              </div>
              <h3
                className="font-serif text-lg sm:text-xl truncate"
                style={{ color: "var(--text)" }}
                title={title}
              >
                {title}
              </h3>
              {subtitle && (
                <p
                  className="font-sans text-[0.8125rem] truncate"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {subtitle}
                </p>
              )}
            </div>

            {/* Action buttons & Close */}
            <div className="flex items-center gap-2 shrink-0">
              {/* External open / Download button */}
              <a
                href={currentItem.url}
                target="_blank"
                rel="noopener noreferrer"
                download={currentItem.name}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[0.75rem] font-semibold transition-opacity hover:opacity-80"
                style={{
                  background: "var(--accent)",
                  color: "#F6F3EE",
                }}
                title="Buka atau unduh file asli"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="hidden sm:inline">{isPdf ? "Unduh PDF" : "Unduh"}</span>
              </a>

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Tutup Penampil"
                className="p-2 rounded-lg transition-colors hover:opacity-75"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  background: "var(--surface-alt)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main Media Content Area */}
          <div
            className="relative flex-1 min-h-0 w-full overflow-auto flex items-center justify-center p-4 sm:p-6 select-none"
            style={{
              background: "var(--surface-alt)",
            }}
          >
            {isPdf ? (
              /* PDF Document View via iframe + mobile helper */
              <div className="w-full h-full flex flex-col items-center justify-center">
                <iframe
                  src={`${currentItem.url}#toolbar=1&navpanes=0`}
                  title={currentItem.name}
                  className="w-full h-full rounded-lg border shadow-sm"
                  style={{
                    borderColor: "var(--border)",
                    background: "#FFFFFF",
                  }}
                />
                <div
                  className="sm:hidden mt-3 p-3 rounded-lg text-center w-full"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <p className="font-sans text-[0.8125rem] mb-2" style={{ color: "var(--text-secondary)" }}>
                    Jika pratinjau PDF tidak muncul di ponsel Anda:
                  </p>
                  <a
                    href={currentItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-1.5 px-4 inline-flex items-center gap-1.5"
                  >
                    Buka PDF Langsung ↗
                  </a>
                </div>
              </div>
            ) : (
              /* High-Resolution Image View */
              <div
                className={`relative flex items-center justify-center max-w-full max-h-full transition-transform duration-200 cursor-pointer ${
                  isZoomed ? "scale-125" : "scale-100"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                title="Klik untuk memperbesar / memperkecil"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentItem.url}
                  alt={currentItem.label || currentItem.name}
                  className="max-w-full max-h-[72vh] object-contain rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
            )}

            {/* Previous / Next Arrow buttons if multiple items */}
            {items.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1))}
                  aria-label="Item Sebelumnya"
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full shadow-lg transition-transform hover:scale-105"
                  style={{
                    background: "rgba(23, 21, 19, 0.75)",
                    color: "#F6F3EE",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0))}
                  aria-label="Item Berikutnya"
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full shadow-lg transition-transform hover:scale-105"
                  style={{
                    background: "rgba(23, 21, 19, 0.75)",
                    color: "#F6F3EE",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Footer Gallery Selector (if > 1 item) */}
          {items.length > 1 && (
            <div
              className="flex items-center justify-center gap-2 p-3 sm:p-4 border-t overflow-x-auto shrink-0"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              {items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg font-mono text-[0.75rem] font-medium transition-all ${
                    currentIndex === idx ? "font-bold shadow-sm" : "opacity-75 hover:opacity-100"
                  }`}
                  style={{
                    background: currentIndex === idx ? "var(--accent)" : "var(--surface-alt)",
                    color: currentIndex === idx ? "#F6F3EE" : "var(--text)",
                    border: `1px solid ${currentIndex === idx ? "var(--accent)" : "var(--border)"}`,
                  }}
                >
                  {item.label || item.name || `Halaman ${idx + 1}`}
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
