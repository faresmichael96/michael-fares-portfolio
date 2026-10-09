import { Download, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-8 py-10 sm:py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-base font-semibold tracking-tight text-foreground">
                {siteConfig.name}
              </p>

              <p className="mt-2 text-sm text-muted-foreground">
                {siteConfig.title}
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                  >
                    <Mail aria-hidden="true" className="size-4" />
                    Email
                  </a>
                </li>

                <li>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                  >
                    <FaLinkedin aria-hidden="true" className="size-4" />
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                  >
                    <SiGithub aria-hidden="true" className="size-4" />
                    GitHub
                  </a>
                </li>

                <li>
                  <a
                    href={siteConfig.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                  >
                    <Download aria-hidden="true" className="size-4" />
                    CV
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
