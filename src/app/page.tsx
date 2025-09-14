"use client";

import ContactInfoCard from "@/components/contact/ContactInfoCard";
import SendMessageCard from "@/components/contact/SendMessageCard";
import AnimatedSection from "@/components/motion/AnimatedSection";
import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { scrollToContact } from "@/utils/helpers";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillCategoryCard from "@/components/SkillCategoryCard";
import Header from "@/components/reusables/Header";
import AboutSection from "@/components/sections/AboutSection";
import CollaborationCard from "@/components/contact/CollaborationCard";
import Hero from "@/components/sections/Hero";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const projectsRef = useRef<HTMLElement | null>(null);

  const skillCategories = ["frontend", "backend", "tools"];

  // This useEffects checks for params contact for if we should scroll down to bottom or not for coming other pages besides home.
  useEffect(() => {
    const scrollToTarget = searchParams.get("scrollTo");

    if (scrollToTarget === "contact") {
      scrollToContact();
      router.replace("/", { scroll: false });
    }
  }, [router, searchParams]);

  return (
    <main className="flex flex-col navbar-space text-dark-text">
      <AnimatedSection className="flex items-start justify-center w-full hero-height bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <Hero projectsRef={projectsRef} />
      </AnimatedSection>

      <AnimatedSection className="about flex flex-col" highlight>
        <Header name="About Me" />
        <AboutSection />
      </AnimatedSection>

      <ProjectSection projectsRef={projectsRef} />

      <AnimatedSection className="skills flex flex-col items-center justify-center" highlight>
        <Header name="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
          {skillCategories.map((category, idx) => (
            <SkillCategoryCard category={category} key={idx} />
          ))}
        </div>
      </AnimatedSection>


      <div className="contact scroll-mt-[84px] flex justify-center w-full">
        <AnimatedSection className="flex flex-col w-full">
          <Header name="Get In Touch" desc="I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!" />
          <div className="flex flex-col lg:flex-row gap-4 w-full">
            <SendMessageCard />
            <div className="flex flex-col gap-4 w-full max-w-full md:max-w-3xl">
              <ContactInfoCard />
              <CollaborationCard />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
