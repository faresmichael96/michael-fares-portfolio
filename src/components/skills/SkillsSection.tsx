import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";
import { SkillGroup } from "./SkillGroup";

export function SkillsSection() {
  return (
    <Section id="skills" aria-labelledby="skills-title">
      <Container>
        <SectionHeading
          eyebrow="03 / Skills"
          title="Tools I use to build and ship software."
          description="A practical set of technologies and engineering skills I use to build web applications, from frontend interfaces to backend services."
          className="mb-10 lg:mb-14"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
