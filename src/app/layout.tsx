/**
 * layout.tsx — Root Layout
 * Asisyah Sarah Azzahra — "The Woman Behind the Code"
 */

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Asisyah Sarah Azzahra — Junior Web Developer | Software Developer",
  description:
    "A personal portfolio of Asisyah Sarah Azzahra, a Junior Web Developer and Informatics Management student from Indonesia, showcasing web applications, software projects, and digital experiences.",
  keywords: [
    "Asisyah Sarah Azzahra",
    "Junior Web Developer",
    "Software Developer",
    "Politeknik LP3I Tasikmalaya",
    "Manajemen Informatika",
    "N-PRESENCE",
    "HAKI",
    "BNSP Junior Programmer",
    "Laravel",
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Ciamis",
    "Women in Tech",
    "Portfolio",
  ],
  authors: [{ name: "Asisyah Sarah Azzahra" }],
  openGraph: {
    title: "Asisyah Sarah Azzahra — Junior Web Developer | Software Developer",
    description:
      "A personal portfolio of Asisyah Sarah Azzahra, showcasing web applications, software projects, and digital experiences.",
    type: "website",
    url: "https://asisyahsarahazzahra.vercel.app",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
