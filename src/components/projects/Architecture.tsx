import { Project } from "@/types";

export default function Architecture({ project }: { project: Project }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-8">
      <span className="font-mono text-xs uppercase tracking-wider text-accent">
        System Architecture
      </span>
      <div className="flex flex-col items-center gap-2 w-full max-w-xs">
        {project.architecture.layers.map((layer, index) => (
          <div key={index} className="flex w-full flex-col items-center gap-2">
            <div className="w-full rounded-lg border border-border bg-secondary py-3 text-center font-mono text-sm text-text-primary">
              {layer}
            </div>
            {index < project.architecture.layers.length - 1 && (
              <div className="h-6 w-px bg-border" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
