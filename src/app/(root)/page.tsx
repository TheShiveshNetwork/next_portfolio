import { MediumPosts } from "@/components/blogs/medium";
import { AngledLinesPattern } from "@/components/common/separator";
import { Experience } from "@/components/experience";
import Techs from "@/components/techs/Techs";
import { HeroSection } from "@/sections/hero";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Experience />
      <AngledLinesPattern spacing={5} className="h-10 border-primary border-t border-b" />
      <Techs />
      <MediumPosts />
    </>
  );
}
