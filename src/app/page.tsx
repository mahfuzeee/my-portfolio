import Hero from "@/components/sections/Hero";
import TechStrip from "@/components/sections/TechStrip";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Services from "@/components/sections/Services";
import AboutPreview from "@/components/sections/AboutPreview";
import Journey from "@/components/sections/Journey";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <TechStack />
      <FeaturedProjects />
      <Services />
      <AboutPreview />
      <Journey />
      <ContactCTA />
    </>
  );
}
