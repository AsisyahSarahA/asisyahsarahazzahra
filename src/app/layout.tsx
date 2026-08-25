/**
 * layout.tsx — Root App Layout
 * ─────────────────────────────────────────────────────────
 * - Imports Google Fonts via CSS @import in globals.css
 * - Wraps app with ThemeProvider
 * - Mounts CustomCursor (desktop only, via CSS)
 * - Sets metadata (SEO)
 * ─────────────────────────────────────────────────────────
 */

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Asisyah Sarah Azzahra — Full Stack Developer",
  description:
    "Personal portfolio of Asisyah Sarah Azzahra — Management Informatics student at LP3I Tasikmalaya, BNSP-certified Junior Programmer, and IT Support specialist. Specializing in web-based information systems.",
  keywords: [
    "Asisyah Sarah Azzahra",
    "IT Specialist",
    "Junior Programmer",
    "BNSP",
    "LP3I Tasikmalaya",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Asisyah Sarah Azzahra" }],
  openGraph: {
    title: "Asisyah Sarah Azzahra — Neo-Glass Portfolio",
    description:
      "IT Specialist | Junior Programmer | Management Informatics Student",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Preload hint for fonts (loaded via globals.css @import) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          {/* Custom cursor — auto-hides on touch via CSS */}
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
