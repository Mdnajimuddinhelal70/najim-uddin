import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import JourneySection from "@/components/home/JourneySection";
import TechStackSection from "@/components/home/TechStackSection";
import WhatIDoSection from "@/components/home/WhatIDoSection";
import ProjectsSection from "@/components/projects/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <AboutSection />
      <WhatIDoSection />
      <ProjectsSection />
      <JourneySection />
      <ContactSection />
    </>
  );
}
