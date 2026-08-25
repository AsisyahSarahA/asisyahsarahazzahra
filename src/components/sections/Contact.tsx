"use client";

/**
 * Contact.tsx
 * ─────────────────────────────────────────────────────────
 * Contact section with:
 * - Interactive glass contact form (Name, Email, Message)
 * - Copy email physical switch toggle with toast feedback
 * - Direct social media links with GitHub (AsisyahSarahA) & Email (asisyahsrahazz@gmail.com)
 * ─────────────────────────────────────────────────────────
 */

import { useRef, useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Check, Copy, Send, Sparkles, MessageSquare, User, AtSign } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SkeuoButton } from "@/components/ui/SkeuoButton";
import { PERSONAL_INFO } from "@/data/portfolio";
import { fadeUp } from "@/lib/utils";

// Inline SVG components for social icons
function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const el = document.createElement("textarea");
      el.value = PERSONAL_INFO.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus("sending");
    setTimeout(() => {
      // Simulate mailto or submission
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Portofolio Contact from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
      setFormStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 800);
  };

  const SOCIAL_LINKS = [
    {
      id: "contact-github",
      label: "GitHub",
      handle: "AsisyahSarahA",
      icon: <GithubIcon className="w-5 h-5" />,
      href: PERSONAL_INFO.github,
    },
    {
      id: "contact-linkedin",
      label: "LinkedIn",
      handle: "Asisyah Sarah Azzahra",
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: PERSONAL_INFO.linkedin,
    },
    {
      id: "contact-email",
      label: "Email Direct",
      handle: PERSONAL_INFO.email,
      icon: <Mail size={20} strokeWidth={1.5} />,
      href: `mailto:${PERSONAL_INFO.email}`,
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Ambient background mesh */}
      <div className="absolute inset-0 dark:bg-cyber-mesh bg-lilac-mesh opacity-30" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm dark:text-cyber-cyan text-lilac-violet tracking-widest uppercase">
            — Hubungi Saya —
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold mt-3 dark:text-white text-gray-900">
            Let&apos;s Work Together
          </h2>
          <p className="font-body dark:text-white/50 text-gray-500 mt-3 max-w-md mx-auto text-sm sm:text-base">
            Terbuka untuk kesempatan kolaborasi proyek, posisi IT Support, maupun diskusi seputar pengembangan perangkat lunak.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* ── Left Column: Contact Form (7 cols) ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-7"
          >
            <GlassCard className="p-6 sm:p-8" hoverable={false} intensity="xl">
              <h3 className="font-heading text-xl font-bold dark:text-white text-gray-900 mb-2 flex items-center gap-2">
                <MessageSquare size={20} className="dark:text-cyber-cyan text-lilac-violet" />
                Kirim Pesan Langsung
              </h3>
              <p className="font-body text-xs dark:text-white/50 text-gray-500 mb-6">
                Isi formulir di bawah ini untuk terhubung langsung via email.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label className="block font-mono text-xs dark:text-white/60 text-gray-600 mb-1.5 flex items-center gap-1">
                    <User size={12} />
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama Anda..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl font-body text-sm dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 dark:text-white text-gray-900 focus:outline-none focus:border-cyber-violet dark:focus:border-cyber-cyan transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block font-mono text-xs dark:text-white/60 text-gray-600 mb-1.5 flex items-center gap-1">
                    <AtSign size={12} />
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl font-body text-sm dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 dark:text-white text-gray-900 focus:outline-none focus:border-cyber-violet dark:focus:border-cyber-cyan transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block font-mono text-xs dark:text-white/60 text-gray-600 mb-1.5 flex items-center gap-1">
                    <MessageSquare size={12} />
                    Pesan / Keperluan Proyek
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tuliskan pesan atau penawaran kerja sama Anda di sini..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl font-body text-sm dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 dark:text-white text-gray-900 focus:outline-none focus:border-cyber-violet dark:focus:border-cyber-cyan transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <SkeuoButton
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={formStatus === "sending"}
                  className="w-full justify-center"
                  id="contact-submit-btn"
                >
                  {formStatus === "sending" ? (
                    <span>Menyiapkan Pesan...</span>
                  ) : formStatus === "sent" ? (
                    <>
                      <Check size={16} />
                      <span>Pesan Terkirim!</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Kirim Pesan Sekarang</span>
                    </>
                  )}
                </SkeuoButton>
              </form>
            </GlassCard>
          </motion.div>

          {/* ── Right Column: Info & Social Links (5 cols) ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-5 space-y-6"
          >
            {/* Fast Email Copy Card */}
            <GlassCard className="p-6 text-center" hoverable={false} intensity="xl">
              <div className="w-12 h-12 rounded-2xl dark:bg-cyber-violet/20 bg-lilac-violet/15 flex items-center justify-center mx-auto mb-3 border border-white/15">
                <Sparkles size={22} className="dark:text-cyber-cyan text-lilac-violet" />
              </div>
              <p className="font-mono text-xs dark:text-white/40 text-gray-400 uppercase tracking-widest mb-2">
                Salin Email Resmi
              </p>
              <p className="font-mono text-sm font-bold dark:text-white text-gray-900 mb-4 select-all">
                {PERSONAL_INFO.email}
              </p>

              <motion.button
                id="contact-copy-email"
                onClick={copyEmail}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ y: 2, scale: 0.97 }}
                animate={{
                  backgroundColor: copied ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.08)",
                  borderColor: copied ? "rgba(34,197,94,0.5)" : "rgba(255,255,255,0.2)",
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border font-mono text-xs font-medium transition-colors shadow-skeuo cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-green-400" />
                    <span className="text-green-400">Email Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="dark:text-white/70 text-gray-600" />
                    <span className="dark:text-white/80 text-gray-700">Salin ke Clipboard</span>
                  </>
                )}
              </motion.button>
            </GlassCard>

            {/* Social Channels List */}
            <GlassCard className="p-6" hoverable={false} intensity="md">
              <p className="font-mono text-xs dark:text-white/40 text-gray-400 uppercase tracking-widest mb-4">
                Kanal Media Sosial
              </p>

              <div className="space-y-3">
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.id}
                    id={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4, scale: 1.01 }}
                    className="flex items-center justify-between p-3.5 rounded-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 hover:border-cyber-violet/40 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg dark:bg-white/10 bg-black/10 dark:text-cyber-cyan text-lilac-violet group-hover:scale-110 transition-transform">
                        {link.icon}
                      </div>
                      <div>
                        <div className="font-heading text-xs font-bold dark:text-white text-gray-900">
                          {link.label}
                        </div>
                        <div className="font-mono text-[11px] dark:text-white/50 text-gray-500">
                          {link.handle}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs dark:text-white/30 text-gray-400 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
