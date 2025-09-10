"use client";

import Button from "@/components/Button";

import myImage from "../../public/images/headshot.png";
import Image from "next/image";
import { Typewriter } from "@/components/motion/Typewriter";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import Socials from "@/components/Socials";
import SendMessageCard from "@/components/contact/SendMessageCard";
import AnimatedSection from "@/components/motion/AnimatedSection";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { scrollToContact } from "@/utils/helpers";
import ProjectSection from "@/components/sections/ProjectSection";
import SkillCategoryCard from "@/components/SkillCategoryCard";
import Header from "@/components/reusables/Header";
import { ArrowDown, UserIcon } from "lucide-react";
import AboutSection from "@/components/sections/AboutSection";

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
    <main className="flex flex-col navbar-space text-text dark:text-dark-text">
      <AnimatedSection className="hero flex flex-col gap-8 items-center justify-center text-center relative z-10">
        <div className="glow-container glow-dark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20" />
        <header>
          <Image src={myImage} alt="profile-img" width={164} height={164} />
        </header>
        <h1 className="max-w-2xl">
          Hi, I am <span className="text-accent">Ahmet 👋</span>
          <p>I build things for the web.</p>
        </h1>
        <Typewriter text="Full-Stack Developer | React | Next.js | FastAPI" />
        <h3 className="max-w-3xl 2xl:max-w-4xl">
          I build scalable web apps and write about Python & React.js
        </h3>
        <div className="flex items-center gap-8 justify-center w-full">
          <Button
            onClick={() =>
              projectsRef.current?.scrollIntoView({
                behavior: "smooth",
                inline: "end",
              })
            }
            className="w-36 sm:w-48 hover:opacity-80"
          >
            See Projects
          </Button>
          <Link href={"/blog"}>
            <Button className="w-36 sm:w-48" variant="secondary">
              Read Blog
            </Button>
          </Link>
        </div>

        <Socials className="w-full mt-4" />
        <ArrowDown
          className="animate-bounce cursor-pointer hover:text-accent duration-200 ease-in w-6 h-6"
          onClick={() =>
            projectsRef.current?.scrollIntoView({
              behavior: "smooth",
              inline: "end",
            })
          }
        />
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


      <div className="contact scroll-mt-[84px]">
        <AnimatedSection className="flex flex-col">
          <Header name="Get In Touch" />
          <div className="flex w-full flex-col-reverse lg:flex-row lg:flex-1 gap-8">
            <ContactInfoCard />
            <SendMessageCard />
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
