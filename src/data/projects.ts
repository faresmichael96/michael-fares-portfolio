export type Project = {
  title: string;
  category: string;
  status: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
  caseStudyUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Multi-Tenant Reservation Platform",
    category: "SaaS · Booking & Scheduling",
    status: "In Development",
    description:
      "A multi-tenant booking platform for service-based businesses to manage services, staff, working hours, and appointments. Currently focused on a mobile-friendly booking experience, with an emphasis on tenant isolation, role-based access, and automated testing.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "shadcn/ui",
    ],
    githubUrl: "",
    liveUrl: "https://reservado-blue.vercel.app/",
    featured: true,
    image: "/images/projects/reservation/reservation-platform.png",
    caseStudyUrl: "/projects/reservation-platform",
  },
  {
    title: "Clinical Dietitian Website",
    category: "Full-Stack · Healthcare Website",
    status: "Almost Finished",
    description:
      "A responsive website for a clinical dietitian, with service information, appointment booking, a blog, contact functionality, and an admin dashboard. Designed in Figma and implemented as a full-stack web application.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
    ],
    githubUrl: "",
    liveUrl: "",
    featured: false,
    image: "/images/projects/dietitian/clinical-dietitian.png",
  },
];
