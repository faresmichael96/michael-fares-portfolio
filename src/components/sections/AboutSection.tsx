import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  {
    title: "6+ years of experience",
    description:
      "Building end-to-end web applications, from frontend interfaces to backend services.",
  },
  {
    title: "Product-focused development",
    description:
      "Balancing user experience, business requirements, maintainability, and long-term scalability.",
  },
  {
    title: "Security-minded engineering",
    description:
      "Expanding my knowledge of web application security to better understand vulnerabilities and build more resilient software.",
  },
] as const;

export function AboutSection() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="01 / About"
            title="Engineering with a product mindset."
            description="I care about how software works, how people use it, and how it can evolve over time."
          />

          <div className="space-y-8">
            <div className="space-y-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              <p>
                I am a Full-Stack Software Developer with 6+ years of experience
                building web applications and digital experiences. My work spans
                frontend development, backend services, and integrating the
                pieces into cohesive products.
              </p>

              <p>
                I enjoy turning requirements and designs into practical
                software, with attention to usability, clean code, and
                maintainable architecture. I aim to build solutions that meet
                current needs without making future improvements unnecessarily
                difficult.
              </p>

              <p>
                Alongside software development, I am expanding my knowledge of
                web application security through hands-on learning and practical
                labs. I want to bring that security-minded perspective into the
                way I design, develop, and evaluate applications.
              </p>
            </div>

            <div className="border-t border-border">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="grid gap-2 border-b border-border py-5 sm:grid-cols-[0.8fr_1.2fr] sm:gap-6"
                >
                  <h3 className="text-sm font-semibold text-foreground sm:text-base">
                    {highlight.title}
                  </h3>

                  <p className="text-sm leading-6 text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
