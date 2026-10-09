import { Badge } from "@/components/ui/Badge";
import type { SkillGroup as SkillGroupType } from "@/data/skills";

type SkillGroupProps = {
  group: SkillGroupType;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-5 sm:p-6">
      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {group.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {group.description}
      </p>

      <ul
        aria-label={`${group.title} skills`}
        className="mt-6 flex flex-wrap gap-2"
      >
        {group.skills.map((skill) => (
          <li key={skill}>
            <Badge>{skill}</Badge>
          </li>
        ))}
      </ul>
    </article>
  );
}
