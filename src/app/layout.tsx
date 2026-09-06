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

export const metadata: Metadata = {
  title: {
    default: "Md. Mahfuzur Rahman | Full-Stack MERN Developer",
    template: "%s | Md. Mahfuzur Rahman",
  },
  description:
    "Full-Stack MERN Developer specializing in Node.js backend development, REST APIs, React, MongoDB and modern web applications.",
  metadataBase: new URL("https://mahfuz-rahman.com"),
  openGraph: {
    title: "Md. Mahfuzur Rahman | Full-Stack MERN Developer",
    description:
      "Full-Stack MERN Developer specializing in Node.js backend development, REST APIs, React, MongoDB and modern web applications.",
    type: "website",
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
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
