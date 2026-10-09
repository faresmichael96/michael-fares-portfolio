export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    description:
      "Building responsive, accessible interfaces and interactive web experiences.",
    skills: ["React", "JavaScript", "TypeScript", "Next.js", "HTML", "CSS"],
  },
  {
    title: "Backend Engineering",
    description:
      "Developing application logic, APIs, and server-side functionality.",
    skills: ["Python", "Flask", "Laravel"],
  },
  {
    title: "Data & Platforms",
    description:
      "Working with application data, relational databases, and backend platforms.",
    skills: ["PostgreSQL", "Supabase"],
  },
  {
    title: "Design & Security",
    description:
      "Translating designs into working interfaces and developing a security-minded approach to software.",
    skills: ["Figma", "Responsive Web Design", "Web Application Security"],
  },
];
