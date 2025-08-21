import { MediumPosts } from "@/components/blogs/medium";
import { AngledLinesPattern } from "@/components/common/separator";
import { Experience } from "@/components/experience";
import { TechSection } from "@/components/techs/Techs";
import { HeroSection } from "@/sections/hero";
import { ProfileSection } from "@/sections/profile";
import { Projects } from "@/sections/projects";
import { SocialSecion } from "@/sections/social";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProfileSection />
      <SocialSecion />
      <Experience />
      <AngledLinesPattern spacing={5} className="h-10 border-primary border-t border-b" />
      <TechSection />
      <Projects />
      <MediumPosts />
    </>
  );
}
