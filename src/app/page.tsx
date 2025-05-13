import BottomHero from "@/components/home/bottom-hero";
import ContactSection from "@/components/home/contact-section";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import WorkExperience from "@/components/home/work-experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevsPro | Portfolio",
  description: "Created by devsloka.in ",
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen mx-auto container">
        <Hero />
        <WorkExperience />
        <Projects />
        <BottomHero />
        <ContactSection />
      </main>
    </>
  );
}
