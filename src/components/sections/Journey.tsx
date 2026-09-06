import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { journey } from "@/data/journey";
import { cn } from "@/lib/utils";

export default function Journey() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Background"
          title="Development Journey"
          align="center"
          className="mb-12"
        />

        <div className="relative mx-auto max-w-2xl">
          {/* Vertical Line */}
          <div className="absolute left-4 top-2 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {journey.map((step, index) => (
              <div
                key={step.label}
                className={cn(
                  "relative flex items-center gap-8",
                  "md:justify-center",
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row",
                )}
              >
                {/* Dot */}
                <div className="absolute left-4 z-10 h-3 w-3 rounded-full bg-accent ring-4 ring-background md:left-1/2 md:-translate-x-1/2" />

                {/* Content Card */}
                <div className="ml-12 w-full md:ml-0 md:w-5/12">
                  <div className="rounded-lg border border-border bg-card p-5">
                    <span className="font-mono text-xs uppercase tracking-wider text-accent">
                      {step.type === "education"
                        ? "Education"
                        : step.type === "learning"
                          ? "Learning"
                          : "Focus"}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-text-primary">
                      {step.label}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
