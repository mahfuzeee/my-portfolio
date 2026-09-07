import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Journey from "@/components/sections/Journey";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Md. Mahfuzur Rahman, a Full-Stack MERN Developer with a background in Electrical Engineering and a focus on Node.js backend development.",
};

export default function AboutPage() {
  return (
    <>
      {/* About Me Hero */}
      <section className="border-b border-border py-16 sm:py-20 lg:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="About Me"
            title="Engineering mindset. Software passion."
            align="left"
            className="mb-8"
          />
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              I&apos;m Md. Mahfuzur Rahman, a Full-Stack MERN Developer focused
              on Node.js backend development. My interests include backend
              architecture, REST APIs, authentication, database design and
              building reliable full-stack applications.
            </p>
            <p>
              I specialize in writing clean, maintainable backend logic and
              pairing it with modern, reactive frontends. Whether it&apos;s
              designing database schemas, securing API routes, or integrating
              third-party services, I enjoy handling the complete flow of data
              through an application.
            </p>
          </div>
        </Container>
      </section>

      {/* Engineering Background */}
      <section className="border-b border-border py-16 sm:py-20 lg:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Foundation"
            title="Engineering Background"
            align="left"
            className="mb-8"
          />
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              I hold a B.Sc. in Electrical & Electronic Engineering. My
              engineering education developed my analytical thinking,
              problem-solving ability and systems-oriented approach. My passion
              for programming led me into web development, where I now focus on
              building modern full-stack applications.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge className="border-accent/30 text-accent">
                Analytical Thinking
              </Badge>
              <Badge className="border-accent/30 text-accent">
                Problem Solving
              </Badge>
              <Badge className="border-accent/30 text-accent">
                Systems Thinking
              </Badge>
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Focus */}
      <section className="border-b border-border bg-secondary py-16 sm:py-20 lg:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Specialization"
            title="Technical Focus"
            align="left"
            className="mb-8"
          />
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              While I build end-to-end applications, my primary technical focus
              is the backend. I am most interested in:
            </p>
            <ul className="space-y-4 pl-1">
              <li className="flex items-start gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="text-text-primary font-semibold">
                    API Design:
                  </strong>{" "}
                  Building predictable, well-structured REST APIs using Node.js
                  and Express.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="text-text-primary font-semibold">
                    Authentication & Security:
                  </strong>{" "}
                  Implementing JWT-based auth flows, role-based access control,
                  and route protection.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="text-text-primary font-semibold">
                    Database Architecture:
                  </strong>{" "}
                  Designing schemas and querying data in both relational
                  (PostgreSQL) and non-relational (MongoDB) databases.
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Career Journey (Reused Component) */}
      <Journey />

      {/* Professional Development */}
      <section className="py-16 sm:py-20 lg:py-28">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Growth"
            title="Professional Development"
            align="left"
            className="mb-8"
          />
          <div className="space-y-6 text-text-secondary leading-relaxed">
            <p>
              I am continuously refining my skills through hands-on project
              development and deep-dive learning. I focus on writing code that
              is not just functional, but scalable and easy to maintain.
            </p>
            <p>
              Currently, I am expanding my knowledge in backend testing,
              containerization with Docker, and advanced database optimization
              techniques. I am open to remote and contract opportunities where I
              can contribute to meaningful projects and grow as a software
              engineer.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
