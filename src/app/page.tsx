import BottomHero from "@/components/home/bottom-hero";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import WorkExperience from "@/components/home/work-experience";

export default function Home() {
  return (
    <>
      <main className="min-h-screen mx-auto container">
        <Hero />
        <WorkExperience />
        <Projects />
        <BottomHero />
      </main>
    </>
  );
}
