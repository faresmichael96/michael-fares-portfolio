import { ShieldCheck } from "lucide-react";
import { securityFocus } from "@/data/security";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export function SecuritySection() {
  return (
    <Section id="security" className="bg-[#111315] text-[#F5F7FA]">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.08em] text-[#60A5FA]">
            06 / Security
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[1.2]">
            Security-minded engineering.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#A1A7B0] sm:text-lg sm:leading-8">
            Understanding how applications can be exploited is an important part
            of building better software. I am expanding my knowledge of web
            application security through hands-on learning, security labs, and
            vulnerability analysis.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {securityFocus.map((focus) => (
            <article
              key={focus.title}
              className="rounded-2xl border border-[#2A2E33] bg-[#17191C] p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#2A2E33] bg-[#111315] text-[#60A5FA]">
                  <ShieldCheck aria-hidden="true" className="size-5" />
                </div>
              </div>

              <h3 className="mt-8 text-xl font-semibold text-[#F5F7FA]">
                {focus.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#A1A7B0] sm:text-base">
                {focus.description}
              </p>

              <ul className="mt-6 space-y-3">
                {focus.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-3 text-sm text-[#F5F7FA]"
                  >
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-[#60A5FA]"
                    />
                    {topic}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-[#2A2E33] pt-6">
          <p className="max-w-3xl text-sm leading-6 text-[#8A8F98]">
            My goal is to combine full-stack development experience with an
            adversarial mindset, allowing me to identify potential weaknesses
            earlier and build applications that are more resilient by design.
          </p>
        </div>
      </Container>
    </Section>
  );
}
