import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

export default function TechStack() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Technical Arsenal"
          title="Technologies I Work With"
          subtitle="A backend-focused toolkit enabling end-to-end application development."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <div
              key={category.title}
              className={cn(
                "rounded-xl border bg-card p-6 transition-colors hover:border-accent/40",
                category.emphasis
                  ? "border-accent/30 ring-1 ring-accent/10"
                  : "border-border",
              )}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
                {category.emphasis && (
                  <span className="font-mono text-xs text-accent">FOCUS</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
