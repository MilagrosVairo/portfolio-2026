import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Milagros Vairo - Full Stack Developer",
  description: "Full Stack Junior Developer Portfolio - Especializada en desarrollo web moderno con React, Next.js, Node.js y bases de datos",
  keywords: ["portfolio", "full stack developer", "frontend developer", "backend developer", "React", "Next.js", "Node.js", "TypeScript", "Milagros Vairo"],
  authors: [{ name: "Milagros Vairo" }],
  openGraph: {
    title: "Milagros Vairo - Full Stack Developer",
    description: "Full Stack Junior Developer - React, Next.js, Node.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
