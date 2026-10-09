import Link from "next/link";
import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="flex min-h-[calc(85svh-4rem)] items-center py-20 sm:py-24 lg:min-h-[calc(90svh-4rem)] lg:py-28"
    >
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.12em] text-primary sm:text-sm">
            Full-Stack Software Developer
          </p>

          <h1
            id="hero-title"
            className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-7xl"
          >
            Building modern web applications with a focus on{" "}
            <span className="text-primary">
              quality, usability, and security.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I build end-to-end web applications using React, TypeScript,
            Next.js, Python, and Laravel, turning ideas and designs into
            reliable software.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              View My Work
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>

            <a
              href="/cv/michael-fares-cv.pdf"
              download
              className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span>6+ years of experience</span>

            <span
              aria-hidden="true"
              className="hidden size-1 rounded-full bg-border sm:block"
            />

            <span className="inline-flex items-center gap-2">
              <ShieldCheck aria-hidden="true" className="size-4 text-primary" />
              Security-minded engineering
            </span>
          </div>

          <a
            href="#about"
            className="mt-14 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
          >
            <ArrowDown aria-hidden="true" className="size-4" />
            Discover more
          </a>
        </div>
      </Container>
    </section>
  );
}
