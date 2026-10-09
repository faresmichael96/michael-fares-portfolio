import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" aria-labelledby="projects-title">
      <Container>
        <SectionHeading
          eyebrow="04 / Selected Work"
          title="Projects built around real problems."
          description="A selection of applications where I have applied full-stack engineering to practical product requirements."
          className="mb-10 lg:mb-14"
        />

        {featuredProject ? <FeaturedProject project={featuredProject} /> : null}

        {otherProjects.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : null}

        <div className="mt-8 flex justify-end">
          <Link
            href="https://github.com/faresmichael96"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Explore more on GitHub
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
