import Link from "next/link";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <Container className="py-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold text-text-primary">{site.name}</h3>
            <p className="mt-1 text-sm text-text-secondary">{site.role}</p>
            <p className="text-sm text-text-muted">{site.focus}</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted hover:text-accent transition-colors"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted hover:text-accent transition-colors"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="text-text-muted hover:text-accent transition-colors"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>

          <p className="flex items-center gap-2 text-sm font-mono text-text-secondary">
            <span className="h-2 w-2 rounded-full bg-success"></span>
            {site.availability}
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-xs text-text-muted">
            © 2026 {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
