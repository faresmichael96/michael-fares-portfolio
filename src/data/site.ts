export const siteConfig = {
  name: "Michael Fares",
  title: "Full-Stack Software Developer",
  description:
    "I build modern, scalable web applications with React, TypeScript, JavaScript, Python, and Laravel.",
  url: "https://michaelfares.dev",
  email: "michaelfares50@gmail.com",
  linkedin: "https://www.linkedin.com/in/michael-fares-3ba64a17b/",
  github: "https://github.com/faresmichael96",
  cv: "/cv/michael-fares-cv.pdf",
} as const;

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Security", href: "#security" },
  { label: "Contact", href: "#contact" },
] as const;
