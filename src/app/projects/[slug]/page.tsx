import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Architecture from "@/components/projects/Architecture";
import ProjectLinks from "@/components/projects/ProjectLinks";
import { projects } from "@/data/projects";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Metadata } from "next";

// Generate static pages for each project at build time
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for SEO
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
    },
  };
}

export default function ProjectCaseStudy({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-12 sm:py-16 lg:py-20">
      <Container className="max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
          >
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            Back to Projects
          </Link>
        </div>

        {/* Hero */}
        <header className="mb-12 border-b border-border pb-12">
          <span className="font-mono text-sm uppercase tracking-widest text-accent">
            {project.category}
          </span>
          <h1 className="mt-4 text-4xl font-bold text-text-primary sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            {project.shortDescription}
          </p>
          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </header>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-text-primary">
            Overview
          </h2>
          <p className="text-text-secondary leading-relaxed">
            {project.description}
          </p>
        </section>

        {/* Problem / Goal & Features */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              Problem / Goal
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {project.challenge.problem}
            </p>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Technology & Architecture */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              Technology
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} className="bg-secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              Architecture
            </h2>
            <Architecture project={project} />
          </section>
        </div>

        {/* Key Engineering Decisions */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">
            Key Engineering Decisions
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {project.keyDecisions.map((decision) => (
              <div
                key={decision.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-accent">
                  {decision.title}
                </h3>
                <p className="text-sm text-text-secondary">
                  {decision.rationale}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-text-primary">
            Challenges & Solutions
          </h2>
          <div className="space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                Challenge
              </span>
              <p className="mt-2 text-text-secondary">
                {project.challenge.problem}
              </p>
            </div>
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
              <span className="font-mono text-xs uppercase tracking-wider text-accent">
                Solution
              </span>
              <p className="mt-2 text-text-secondary">
                {project.challenge.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-text-primary">
            Lessons Learned
          </h2>
          <div className="rounded-xl border border-border bg-secondary p-6">
            <p className="text-text-secondary leading-relaxed">
              {project.lessonsLearned}
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="rounded-2xl border border-border bg-card p-8 text-center">
          <h3 className="text-xl font-bold text-text-primary">
            Interested in this project?
          </h3>
          <p className="mt-2 text-text-secondary">
            Check out the code or see it live.
          </p>
          <div className="mt-6 flex justify-center">
            <ProjectLinks project={project} />
          </div>
        </section>
      </Container>
    </article>
  );
}
