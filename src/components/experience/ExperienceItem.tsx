import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Experience } from "@/data/experience";

type ExperienceItemProps = {
  item: Experience;
};

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="relative grid gap-5 pb-10 last:pb-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-8">
      <span
        aria-hidden="true"
        className="absolute -left-8 top-1.5 z-10 size-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary ring-1 ring-primary/30"
      />

      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">
          {item.startDate} - {item.endDate}
        </p>
        <p className="text-sm text-muted-foreground">{item.location}</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {item.role}
          </h3>
          <p className="font-medium text-primary">{item.company}</p>
        </div>

        <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
          {item.summary}
        </p>

        <ul className="space-y-3">
          {item.contributions.map((contribution) => (
            <li
              key={contribution}
              className="flex items-start gap-3 text-sm leading-6 text-muted-foreground sm:text-base"
            >
              <Check
                aria-hidden="true"
                className="mt-1 size-4 shrink-0 text-primary"
              />
              <span>{contribution}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          {item.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
