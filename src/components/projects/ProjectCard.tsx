import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-accent/40"
    >
      {/* Screenshot Placeholder Area */}
      <div className="relative aspect-video w-full bg-secondary flex items-center justify-center border-b border-border">
        {project.screenshots.length > 0 ? (
          <img
            src={project.screenshots[0].src}
            alt={project.screenshots[0].alt}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-mono text-xs text-text-muted">
            [ADD SCREENSHOT]
          </span>
        )}
      </div>

      <div className="flex flex-grow flex-col p-6">
        <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
          {project.category}
        </span>
        <h3 className="mt-2 text-xl font-semibold text-text-primary">
          {project.title}
        </h3>
        <p className="mt-3 flex-grow text-sm text-text-secondary line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent">
          View Case Study
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
