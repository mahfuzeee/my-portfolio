import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function AboutPreview() {
  return (
    <section className="border-t border-border bg-secondary py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-sm uppercase tracking-widest text-accent">
            About Me
          </span>
          <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl">
            Engineering mindset. Software passion.
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            I&apos;m a Full-Stack MERN Developer with a particular focus on
            Node.js backend development. I enjoy designing APIs, working with
            databases, building authentication systems and turning practical
            requirements into complete web applications.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary">
              About Me <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
