import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function FeaturedProjects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured).slice(0, 3);

  if (!featured) return null;

  return (
    <section className="border-t border-border bg-secondary py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            subtitle="Real-world applications demonstrating my experience across frontend development, backend engineering, databases and API design."
          />
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            View All Projects
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Featured Project Card */}
        <Link
          href={`/projects/${featured.slug}`}
          className="group mb-8 block overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/40"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[300px] bg-background">
              {/* Placeholder for screenshot */}
              {featured.screenshots.length > 0 ? (
                <Image
                  fill
                  src={featured.screenshots[0].src}
                  alt={featured.screenshots[0].alt}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <span className="flex h-full items-center justify-center p-8 font-mono text-sm text-text-muted">
                  `[ADD SCREENSHOT]`
                </span>
              )}
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                {featured.category}
              </span>
              <h3 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-4 text-text-secondary">
                {featured.shortDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.technologies.slice(0, 5).map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-text-primary">
                Read Case Study
                <ArrowRightIcon className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {others.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                {project.category}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-text-primary">
                {project.title}
              </h3>
              <p className="mt-3 flex-grow text-sm text-text-secondary line-clamp-3">
                {project.shortDescription}
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm font-medium text-accent">
                  View Details
                </span>
                <ArrowRightIcon className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
