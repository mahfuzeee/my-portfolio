import Container from "@/components/ui/Container";
import { techStrip } from "@/data/skills";

export default function TechStrip() {
  return (
    <section className="border-b border-border bg-secondary">
      <Container className="py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:gap-x-12">
          {techStrip.map((tech) => (
            <span
              key={tech}
              className="font-mono text-sm font-medium text-text-muted transition-colors hover:text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
