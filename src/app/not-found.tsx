import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <Container className="text-center">
        <span className="font-mono text-sm uppercase tracking-widest text-accent">
          Error 404
        </span>
        <h1 className="mt-4 text-4xl font-bold text-text-primary sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-text-secondary">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/">
            Back to Home <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
