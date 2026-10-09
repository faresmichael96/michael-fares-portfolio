import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Image from "next/image";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  title: "Multi-Tenant Reservation Platform | Michael Fares",
  description:
    "A case study of a multi-tenant reservation SaaS, covering product workflows, architecture, tenant isolation, testing, and AI-assisted development.",
};

const technologies = ["React", "TypeScript", "Supabase", "shadcn/ui"];

const businessWorkflow = [
  "Create and manage services, including descriptions, duration, and price.",
  "Manage staff members and working hours.",
  "Review booking requests and approve or decline them.",
  "Manage the business through administrative permissions.",
  "Allow staff to create bookings for themselves and manage days off.",
];

const customerWorkflow = [
  "Choose a service.",
  "Select a date and available time.",
  "Optionally choose a staff member.",
  "Enter contact details, including name and phone number. Email is optional.",
  "Submit a booking request for the business to review.",
];

const developmentWorkflow = [
  {
    name: "/brainstorm",
    detail:
      "Clarify the problem, explore alternatives, and decide whether to build, defer, or reject an idea.",
  },
  {
    name: "/plan",
    detail:
      "Turn the selected direction into an actionable implementation plan.",
  },
  {
    name: "/sign-off",
    detail: "Review the proposed plan and prepare it for approval.",
  },
  {
    name: "Manual approval",
    detail:
      "I review the plan and explicitly approve it before implementation.",
    approval: true,
  },
  {
    name: "Implement",
    detail: "Develop the approved solution.",
  },
  {
    name: "/code-review",
    detail:
      "Review changes for correctness, maintainability, and potential issues.",
  },
  {
    name: "/qa",
    detail:
      "Run risk-based quality checks and manual verification where appropriate.",
  },
  {
    name: "/test",
    detail: "Run relevant tests and validate expected behavior.",
  },
  {
    name: "/commit",
    detail: "Commit changes after the required quality gates are satisfied.",
  },
  {
    name: "/deploy",
    detail: "Deploy the verified changes.",
  },
];

function CaseStudyHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.08em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-[17px]">
          {description}
        </p>
      )}
    </div>
  );
}

function WorkflowCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
      <ol className="mt-6 space-y-4">
        {items.map((item, index) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium">
              {index + 1}
            </span>
            <span className="text-sm leading-6 text-muted-foreground">
              {item}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function ReservationPlatformPage() {
  return (
    <>
      <ScrollToTop />
      <Section className="pb-12 pt-10 sm:pb-16 lg:pb-20 lg:pt-16">
        <Container>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <MdOutlineKeyboardBackspace aria-hidden="true" className="size-4" />
            Back to projects
          </Link>

          <div className="mt-10">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>SaaS · Booking &amp; Scheduling</Badge>
              <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-sm font-medium text-amber-700">
                In Development
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              Multi-Tenant Reservation Platform
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              A booking platform designed to help service-based businesses
              manage services, staff, working hours, and appointment requests
              through one application.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">
              A deployed MVP is available to explore. Development and
              verification work are still ongoing, so not every feature should
              be considered complete.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://reservado-blue.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                View Live Demo
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <div className="w-full max-w-85 overflow-hidden rounded-4xl">
                <Image
                  src="/images/projects/reservation/reservation-platform.png"
                  alt="Reservation platform mobile interface"
                  width={390}
                  height={844}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-card">
        <Container>
          <CaseStudyHeading
            eyebrow="01 / Context"
            title="The problem and the solution"
            description="Service-based businesses need a practical way to coordinate appointments without relying entirely on manual communication."
          />

          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold">The problem</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                Managing services, staff schedules, and customer appointments
                can become difficult when information and booking requests are
                handled across disconnected channels. Customers also need a
                convenient way to request an appointment.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">The solution</h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                The platform brings business management and customer booking
                into one application. Its multi-tenant approach is intended to
                support different service-based businesses without tying the
                product to a single business.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <CaseStudyHeading
            eyebrow="02 / Product"
            title="Two sides of the booking experience"
            description="The platform supports business operations while giving customers a straightforward way to request appointments."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <WorkflowCard
              title="Business workflow"
              description="Tools for managing day-to-day booking operations."
              items={businessWorkflow}
            />
            <WorkflowCard
              title="Customer workflow"
              description="A guided process for requesting an appointment."
              items={customerWorkflow}
            />
          </div>

          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            Booking requests may require business approval. Submitting a request
            does not necessarily mean the appointment is confirmed.
          </p>
        </Container>
      </Section>

      <Section className="border-y border-border bg-card">
        <Container>
          <CaseStudyHeading
            eyebrow="03 / Architecture"
            title="Designed around tenant isolation"
            description="A high-level view of how the application connects users to tenant-scoped data."
          />

          <div className="mx-auto max-w-3xl">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background p-5 text-center">
                <h3 className="font-semibold">Business users</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Admins and staff
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-5 text-center">
                <h3 className="font-semibold">Customers</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  People requesting appointments
                </p>
              </div>
            </div>

            <div
              className="py-3 text-center text-xl text-muted-foreground"
              aria-hidden="true"
            >
              ↓
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.08em] text-primary">
                Application layer
              </p>
              <h3 className="mt-2 text-xl font-semibold">React + TypeScript</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                User interface, booking interactions, and role-specific
                experiences.
              </p>
            </div>

            <div
              className="py-3 text-center text-xl text-muted-foreground"
              aria-hidden="true"
            >
              ↓
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background p-5 text-center">
                <h3 className="font-semibold">Supabase Auth</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Authentication
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-5 text-center">
                <h3 className="font-semibold">Supabase database</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Data and configured RLS policies
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-border px-4 py-3 text-center text-sm leading-6 text-muted-foreground">
              Tenant-scoped access depends on correctly configured and tested
              authorization rules and Row Level Security policies.
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">
            This diagram is a conceptual overview, not a complete deployment or
            database schema. Supabase Row Level Security (RLS) is an important
            part of preventing users from accessing another tenant&apos;s
            protected data. Its effectiveness depends on the actual policies and
            access paths being correctly implemented.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <CaseStudyHeading
            eyebrow="04 / Access control"
            title="Authentication is only one part of security"
            description="The application needs to distinguish who a user is, what they are allowed to do, and which business data they may access."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border-t-2 border-border pt-5">
              <h3 className="font-semibold">Authentication</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Google login or account creation is supported for applicable
                authenticated users.
              </p>
            </div>
            <div className="border-t-2 border-border pt-5">
              <h3 className="font-semibold">Role-based permissions</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Admin and staff capabilities differ. Administrative access
                should not be assumed for every authenticated user.
              </p>
            </div>
            <div className="border-t-2 border-border pt-5">
              <h3 className="font-semibold">Tenant isolation</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Database policies and access checks must restrict protected data
                to the appropriate tenant and role.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[#111315] text-[#F5F7FA]">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.08em] text-[#60A5FA]">
              05 / Development process
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              AI-assisted development, with human oversight
            </h2>
            <p className="mt-4 text-base leading-7 text-[#A1A7B0] sm:text-[17px]">
              I use Claude AI and custom Claude Skills to structure development
              from early problem exploration through deployment. I review plans,
              make technical decisions, approve the proposed approach, and
              verify the resulting changes rather than accepting generated code
              blindly.
            </p>
          </div>

          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {developmentWorkflow.map((step, index) => (
              <li
                key={step.name}
                className={`rounded-xl border p-5 ${
                  "approval" in step && step.approval
                    ? "border-[#60A5FA] bg-[#17263B]"
                    : "border-[#2A2E33] bg-[#191C20]"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#A1A7B0]">
                    STEP {String(index + 1).padStart(2, "0")}
                  </span>
                  {"approval" in step && step.approval && (
                    <span className="rounded-md bg-[#60A5FA]/15 px-2 py-1 text-xs font-medium text-[#93C5FD]">
                      Human decision
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#A1A7B0]">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-lg border border-[#2A2E33] p-5">
            <h3 className="font-semibold">Why this workflow matters</h3>
            <p className="mt-2 text-sm leading-6 text-[#A1A7B0]">
              Planning and explicit approval help keep implementation aligned
              with the intended solution. Code review, risk-based QA, relevant
              tests, and verification provide additional opportunities to
              identify problems before delivery. These steps improve discipline,
              but they do not guarantee defect-free or secure software.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <CaseStudyHeading
            eyebrow="06 / Quality"
            title="Testing and verification"
            description="Automated tests are part of the development workflow, alongside review and manual checks."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold">Jest</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Used for component and unit tests to check focused pieces of
                application behavior.
              </p>
            </div>
            <div className="rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold">Playwright</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Used for end-to-end testing of important user journeys through
                the application.
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-6 text-muted-foreground">
            The main testing flows have been implemented and are reported as
            passing in the current project status. This does not mean every
            feature is fully tested or that all security risks have been
            eliminated. Relevant lint, build, automated test, and manual
            verification checks should be run as changes are made.
          </p>
        </Container>
      </Section>

      <Section className="border-t border-border bg-card">
        <Container>
          <CaseStudyHeading
            eyebrow="07 / Current status"
            title="A working MVP, still evolving"
            description="The reservation platform has a deployed MVP and continues to evolve as implementation and verification work progresses."
          />

          <div className="flex flex-wrap gap-3">
            <a
              href="https://reservado-blue.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore Live Demo
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>

            <Link
              href="/#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-background px-5 text-sm font-medium transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Back to Projects
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
