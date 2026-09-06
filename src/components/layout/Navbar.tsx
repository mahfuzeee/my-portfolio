"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";
import {
  GitHubIcon,
  LinkedInIcon,
  MenuIcon,
  CloseIcon,
} from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-wider text-text-primary hover:text-accent transition-colors"
        >
          MAHFUZ
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.resumeUrl}
              download
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Resume
            </a>
          </div>

          <div className="h-6 w-px bg-border" />

          <div className="flex items-center gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-4 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.resumeUrl}
              download
              className="text-base font-medium text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
            <div className="mt-4 flex items-center gap-6 border-t border-border pt-4">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <GitHubIcon className="h-6 w-6" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
