import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import SkillsSection from "@/components/home/SkillsSection";
import TechStackSection from "@/components/home/TechStackSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <AboutSection />
      <SkillsSection />
    </>
  );
}
