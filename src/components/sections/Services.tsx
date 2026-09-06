import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Full-Stack Applications",
    description:
      "End-to-end web applications using React, Next.js, Node.js and modern backend technologies.",
  },
  {
    title: "Backend APIs",
    description:
      "REST APIs, authentication systems, business logic and backend services using Node.js and Express.",
  },
  {
    title: "Database-Driven Applications",
    description:
      "Data models and database solutions using MongoDB and PostgreSQL.",
  },
  {
    title: "API Integrations",
    description:
      "Integrations between frontend applications, backend services and external APIs.",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="What I Build"
          align="center"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <h3 className="text-lg font-semibold text-text-primary">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-text-secondary">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
