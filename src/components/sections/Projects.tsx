"use client";

/**
 * Projects.tsx
 * ─────────────────────────────────────────────────────────
 * Project showcase with frosted-glass masonry grid & category filters.
 * Features:
 * - Category filter tabs (All, Government, Education, Web App, Custom Logic)
 * - 3D card tilt physics & glass blur intensify on hover
 * - Modal overlay with full details, features checklist, impact & GitHub link
 * ─────────────────────────────────────────────────────────
 */

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Tag, CheckCircle2, Code2, Layers } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SkeuoButton } from "@/components/ui/SkeuoButton";
import { PROJECTS, type Project } from "@/data/portfolio";
import { fadeUp, staggerContainer, shardIn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all",   label: "Semua Project", icon: "✨" },
  { id: "gov",   label: "Pemerintahan",   icon: "🏛️" },
  { id: "edu",   label: "Pendidikan",     icon: "🎓" },
  { id: "web",   label: "Web Application",icon: "🌐" },
  { id: "logic", label: "Logic & Custom", icon: "⚙️" },
];

function ProjectCard({
  project,
  index,
  onViewDetails,
}: {
  project: Project;
  index: number;
  onViewDetails: (p: Project) => void;
}) {
  return (
    <motion.div variants={shardIn} custom={index} layout>
      <GlassCard
        className="p-6 h-full flex flex-col group border border-white/10 dark:border-white/10"
        glowClass="hover:shadow-neon-violet"
        intensity="md"
      >
        {/* Card Header Gradient & Icon */}
        <div
          className={`relative w-full h-32 rounded-xl mb-5 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden border border-white/10`}
        >
          <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
            {project.icon}
          </span>
          <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono dark:bg-black/40 bg-white/60 backdrop-blur-sm dark:text-cyber-cyan text-lilac-violet border border-white/10">
            {project.client}
          </div>
          {/* Glass shine sweep */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transform" />
        </div>

        {/* Content Body */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-heading font-bold text-lg dark:text-white text-gray-900 mb-1.5 group-hover:text-cyber-violet dark:group-hover:text-cyber-cyan transition-colors">
            {project.title}
          </h3>
          <p className="font-body text-sm dark:text-white/65 text-gray-600 leading-relaxed flex-1 mb-4">
            {project.description}
          </p>

          {/* Impact snippet if available */}
          {project.impact && (
            <div className="mb-4 p-2.5 rounded-lg dark:bg-cyber-violet/10 bg-lilac-violet/10 border border-cyber-violet/20 dark:border-cyber-violet/30 text-xs font-mono dark:text-cyber-cyan text-lilac-violet flex items-center gap-2">
              <CheckCircle2 size={14} className="shrink-0" />
              <span className="truncate">{project.impact}</span>
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono dark:bg-white/5 bg-black/5 dark:text-white/60 text-gray-600 border dark:border-white/10 border-black/10"
              >
                <Tag size={9} />
                {t}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <SkeuoButton
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            className="w-full justify-center mt-auto"
            id={`project-view-${project.id}`}
          >
            Detail Project
          </SkeuoButton>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 dark:bg-cyber-bg/85 bg-white/85 backdrop-blur-md" />

      {/* Modal Card */}
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl my-8 z-10"
      >
        <GlassCard className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto" hoverable={false} intensity="xl">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full dark:bg-white/10 bg-black/10 flex items-center justify-center dark:hover:bg-white/20 hover:bg-black/20 transition-colors z-20"
            aria-label="Close modal"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          {/* Modal Header */}
          <div
            className={`w-full h-44 rounded-2xl mb-6 bg-gradient-to-br ${project.color} flex items-center justify-center border border-white/15 relative overflow-hidden`}
          >
            <span className="text-7xl animate-float">{project.icon}</span>
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-mono dark:bg-black/50 bg-white/70 backdrop-blur-md dark:text-cyber-cyan text-lilac-violet border border-white/10">
              Client: {project.client}
            </div>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl font-bold dark:text-white text-gray-900 mb-2">
            {project.title}
          </h2>

          <p className="font-body dark:text-white/80 text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
            {project.fullDescription || project.description}
          </p>

          {/* Impact Banner */}
          {project.impact && (
            <div className="mb-6 p-4 rounded-xl dark:bg-cyber-violet/15 bg-lilac-violet/15 border border-cyber-violet/30 dark:border-cyber-violet/40">
              <div className="flex items-center gap-2 font-mono text-xs dark:text-cyber-cyan text-lilac-violet font-semibold mb-1">
                <CheckCircle2 size={16} />
                <span>Hasil & Dampak Utama</span>
              </div>
              <p className="font-body text-xs sm:text-sm dark:text-white/90 text-gray-800 font-medium">
                {project.impact}
              </p>
            </div>
          )}

          {/* Features Checklist */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h4 className="font-mono text-xs dark:text-white/50 text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Layers size={14} />
                Fitur Utama Aplikasi
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 font-body text-xs dark:text-white/80 text-gray-700"
                  >
                    <span className="text-cyber-violet dark:text-cyber-cyan mt-0.5">•</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="mb-8">
            <h4 className="font-mono text-xs dark:text-white/50 text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Code2 size={14} />
              Teknologi Yang Digunakan
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-mono dark:bg-cyber-violet/20 bg-lilac-violet/15 dark:text-cyber-cyan text-lilac-violet border dark:border-cyber-violet/30 border-lilac-violet/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {project.githubUrl && (
              <SkeuoButton
                variant="primary"
                href={project.githubUrl}
                className="w-full sm:w-auto justify-center"
              >
                <ExternalLink size={16} strokeWidth={1.5} />
                Lihat Repository GitHub
              </SkeuoButton>
            )}
            <SkeuoButton
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto justify-center"
            >
              Tutup Preview
            </SkeuoButton>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="projects" ref={ref} className="py-24 px-4 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute -right-32 bottom-0 w-96 h-96 dark:bg-cyber-violet/5 bg-lilac-violet/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <span className="font-mono text-sm dark:text-cyber-cyan text-lilac-violet tracking-widest uppercase">
              — Showcase Portofolio —
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold mt-3 dark:text-white text-gray-900">
              Featured Projects
            </h2>
            <p className="font-body dark:text-white/50 text-gray-500 mt-3 max-w-lg mx-auto text-sm sm:text-base">
              Kumpulan solusi sistem informasi dan aplikasi web yang telah dibangun untuk instansi pemerintah, pendidikan, dan proyek kustom.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex items-center justify-center gap-2 flex-wrap mb-12"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`
                    relative flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-medium
                    transition-all duration-200 backdrop-blur-md
                    ${
                      isActive
                        ? "dark:bg-cyber-violet/30 bg-lilac-violet/20 dark:text-cyber-cyan text-lilac-violet border dark:border-cyber-violet/50 border-lilac-violet/50 shadow-glass-sm"
                        : "dark:bg-white/5 bg-black/5 dark:text-white/60 text-gray-600 border dark:border-white/10 border-black/10 hover:bg-white/10"
                    }
                  `}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-project-tab"
                      className="absolute inset-0 rounded-full dark:border-cyber-cyan/40 border-lilac-violet/40 border pointer-events-none"
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
