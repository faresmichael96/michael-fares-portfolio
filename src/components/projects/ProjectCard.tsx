import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="w-full overflow-hidden rounded-xl border border-border bg-card">
      <div className="grid items-stretch md:grid-cols-[1fr_1.15fr]">
        <div className="flex items-center justify-center bg-secondary/50 p-5 sm:p-8">
          {project.image && (
            <div className="w-full overflow-hidden rounded-lg border border-border bg-card shadow-sm">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={1440}
                height={900}
                className="h-auto w-full"
                sizes="(max-width: 767px) 100vw, 45vw"
              />
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-col p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.08em] text-primary">
              {project.category}
            </p>

            <Badge>{project.status}</Badge>
          </div>

          <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            {project.description}
          </p>

          <ul
            aria-label={`${project.title} technologies`}
            className="mt-5 flex flex-wrap gap-2"
          >
            {project.technologies.map((technology) => (
              <li key={technology}>
                <Badge>{technology}</Badge>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Live Demo
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <SiGithub aria-hidden="true" className="size-4" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
