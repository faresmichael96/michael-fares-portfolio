import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

type FeaturedProjectProps = {
  project: Project;
};

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-[0.08em] text-primary">
              Featured project
            </span>

            <Badge>{project.status}</Badge>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            {project.category}
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            {project.description}
          </p>

          <ul
            aria-label={`${project.title} technologies`}
            className="mt-6 flex flex-wrap gap-2"
          >
            {project.technologies.map((technology) => (
              <li key={technology}>
                <Badge>{technology}</Badge>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.caseStudyUrl && (
              <Link
                href={project.caseStudyUrl}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                View Case Study
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Live demo
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Source code
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center border-t border-border bg-secondary/50 p-6 lg:border-l lg:border-t-0 lg:p-8">
          {project.image && (
            <div className="flex h-full max-h-130 w-full items-center justify-center">
              <Image
                src={project.image}
                alt={`${project.title} mobile screenshot`}
                width={390}
                height={844}
                className="h-auto max-h-115 w-auto max-w-full object-contain"
                sizes="(max-width: 1023px) 260px, 260px"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
