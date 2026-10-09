import { ArrowUpRight, Download, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function ContactSection() {
  return (
    <Section id="contact" className="border-t border-border">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.08em] text-primary">
            07 / Contact
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
            Let&apos;s build something useful.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            I&apos;m open to software engineering opportunities, freelance
            projects, and interesting web application ideas.
          </p>

          <div className="mt-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get in touch
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <a href={`mailto:${siteConfig.email}`} className="group">
              <div className="flex items-center gap-3">
                <Mail
                  aria-hidden="true"
                  className="size-4 text-muted-foreground"
                />
                <span className="text-sm font-medium text-foreground">
                  Email
                </span>
              </div>

              <p className="mt-2 break-all text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                {siteConfig.email}
              </p>
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center gap-3">
                <FaLinkedin
                  aria-hidden="true"
                  className="size-4 text-muted-foreground"
                />
                <span className="text-sm font-medium text-foreground">
                  LinkedIn
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                Connect with me
              </p>
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center gap-3">
                <SiGithub
                  aria-hidden="true"
                  className="size-4 text-muted-foreground"
                />
                <span className="text-sm font-medium text-foreground">
                  GitHub
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                View my projects
              </p>
            </a>

            <a
              href={siteConfig.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center gap-3">
                <Download
                  aria-hidden="true"
                  className="size-4 text-muted-foreground"
                />
                <span className="text-sm font-medium text-foreground">
                  Resume
                </span>
              </div>

              <p className="mt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                Download CV
              </p>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
