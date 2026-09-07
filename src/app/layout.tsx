import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Update this URL with your final deployed domain (e.g., Vercel URL or custom domain)
const baseUrl = process.env.BASE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Md. Mahfuzur Rahman | Full-Stack MERN Developer",
    template: "%s | Md. Mahfuzur Rahman",
  },
  description:
    "Full-Stack MERN Developer specializing in Node.js backend development, REST APIs, React, MongoDB and modern web applications.",
  keywords: [
    "Md. Mahfuzur Rahman",
    "Full-Stack Developer",
    "MERN Developer",
    "Node.js Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Remote Developer",
  ],
  authors: [{ name: "Md. Mahfuzur Rahman" }],
  creator: "Md. Mahfuzur Rahman",
  openGraph: {
    title: "Md. Mahfuzur Rahman | Full-Stack MERN Developer",
    description:
      "Full-Stack MERN Developer specializing in Node.js backend development, REST APIs, React, MongoDB and modern web applications.",
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Md. Mahfuzur Rahman Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Mahfuzur Rahman | Full-Stack MERN Developer",
    description:
      "Full-Stack MERN Developer specializing in Node.js backend development, REST APIs, React, MongoDB and modern web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-text-primary font-sans antialiased">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>

        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
