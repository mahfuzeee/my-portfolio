import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Md. Mahfuzur Rahman regarding remote or contract full-stack development opportunities.",
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container className="max-w-5xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Useful."
          subtitle="I'm currently open to remote and contract opportunities. If you're looking for a developer to build or improve a web application, I'd be happy to hear from you."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-text-secondary">
              Prefer direct communication? Reach out through any of these
              channels.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-accent">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-mono text-text-muted uppercase">
                    Email
                  </p>
                  <p className="text-sm text-text-primary font-medium">
                    {site.email}
                  </p>
                </div>
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-accent">
                  <LinkedInIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-mono text-text-muted uppercase">
                    LinkedIn
                  </p>
                  <p className="text-sm text-text-primary font-medium">
                    Connect with me
                  </p>
                </div>
              </a>

              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-accent">
                  <GitHubIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-mono text-text-muted uppercase">
                    GitHub
                  </p>
                  <p className="text-sm text-text-primary font-medium">
                    View my code
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
