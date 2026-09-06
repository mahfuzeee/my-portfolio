import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { DownloadIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";

export default function ContactCTA() {
  return (
    <section className="border-t border-border bg-secondary py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12 lg:p-16">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Let&apos;s Build Something Useful.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            I&apos;m currently open to remote and contract opportunities. If
            you&apos;re looking for a developer to build or improve a web
            application, I&apos;d be happy to hear from you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Contact Me
            </Button>
            <Button
              href={site.resumeUrl}
              download
              variant="secondary"
              size="lg"
            >
              <DownloadIcon className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
