"use client";

/**
 * page.tsx — Main Page Assembly
 * Asisyah Sarah Azzahra — "The Woman Behind the Code"
 * Prioritized Section Flow:
 * 01. Hero (Identity & Introduction)
 * 02. Projects (Selected Work & Flagship N-PRESENCE Showcase)
 * 03. About (The Person Behind the Code & Women in Tech Narrative)
 * 04. Skills (The Craft & Engineering Tools)
 * 05. Experience (Journey, BNSP Certification, Education & Awards)
 * 06. Contact (Direct Connections & Messages)
 */

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
