import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { SecuritySection } from "@/components/security/SecuritySection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <SecuritySection />
      <ContactSection />
    </>
  );
}
