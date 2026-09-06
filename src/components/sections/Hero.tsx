import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AvailabilityPill from "@/components/ui/AvailabilityPill";
import { site } from "@/data/site";
import { ArrowRightIcon, DownloadIcon } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

      <Container className="relative py-20 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6">
            <span className="font-mono text-sm uppercase tracking-widest text-accent">
              Full-Stack MERN Developer
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Building modern web applications with a backend-first mindset.
            </h1>

            <p className="max-w-xl text-lg text-text-secondary">
              I&apos;m a Full-Stack MERN Developer focused on Node.js backend
              development. I build practical web applications with secure APIs,
              database-driven architectures and modern frontend technologies.
            </p>

            <div className="mt-2">
              <AvailabilityPill />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/projects" size="lg">
                View Projects <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button
                href={site.resumeUrl}
                download
                variant="secondary"
                size="lg"
              >
                <DownloadIcon className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </div>

            <a
              href="/contact"
              className="mt-4 text-sm text-text-muted underline-offset-4 transition-colors hover:text-text-primary hover:underline"
            >
              Contact Me
            </a>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-border bg-card">
              <Image
                src={site.photoUrl}
                alt={site.photoAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
