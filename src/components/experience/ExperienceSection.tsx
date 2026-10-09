import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceSection() {
  return (
    <Section id="experience" aria-labelledby="experience-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="02 / Experience"
              title="Building software through practical experience."
              description="My professional experience spans full-stack development, product delivery, and solving real business problems."
            />
          </div>

          <div className="relative pl-8">
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-1.5 w-px -translate-x-1/2 bg-border"
            />

            {experience.map((item) => (
              <ExperienceItem
                key={`${item.company}-${item.startDate}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
