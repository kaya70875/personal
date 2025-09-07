'use client';

import Button from "@/components/Button";

import myImage from '../../public/images/headshot.png';
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
import { ArrowDown } from "lucide-react";

export default function Home() {

  const router = useRouter();
  const searchParams = useSearchParams();

  const projectsRef = useRef<HTMLElement | null>(null);

  const skillCategories = ['frontend', 'backend', 'tools']

  // This useEffects checks for params contact for if we should scroll down to bottom or not for coming other pages besides home.
  useEffect(() => {
    const scrollToTarget = searchParams.get('scrollTo');

    if (scrollToTarget === 'contact') {
      scrollToContact();
      router.replace('/', { scroll: false });
    }
  }, [router, searchParams])

  return (
    <main className="flex flex-col navbar-space text-text dark:text-dark-text">
      <AnimatedSection className="hero flex flex-col gap-8 items-center justify-center text-center relative z-10">
        <div className="glow-container glow-dark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20" />
        <header>
          <Image src={myImage} alt="profile-img" width={164} height={164} />
        </header>
        <h1 className="max-w-2xl">Hi, I am <span className="text-accent">Ahmet 👋</span><p>I build things for the web.</p></h1>
        <Typewriter text="Full-Stack Developer | React | Next.js | FastAPI" />
        <h3 className="max-w-3xl 2xl:max-w-4xl">I build scalable web apps and write about Python & React.js</h3>
        <div className="flex items-center gap-8 justify-center w-full">
          <Button onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'end' })} className="w-36 sm:w-48 hover:opacity-80">See Projects</Button>
          <Link href={'/blog'}>
            <Button className="w-36 sm:w-48" variant="secondary">Read Blog</Button>
          </Link>
        </div>

        <Socials className="w-full mt-4" />
        <ArrowDown className="animate-bounce cursor-pointer hover:text-accent duration-200 ease-in w-6 h-6" onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'end' })} />

      </AnimatedSection>

      <ProjectSection projectsRef={projectsRef} />

      <AnimatedSection className="skills flex flex-col">
        <Header name="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center w-full gap-4 default-container">
          {skillCategories.map((category, idx) => (
            <SkillCategoryCard category={category} key={idx} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="about flex flex-col" highlight>
        <Header name="About Me" />
        <div className="p-4 sm:p-8 w-full flex flex-col gap-8 shadow-lg rounded-lg bg-white dark:bg-dark-primary text-text dark:text-dark-text opacity-90 tracking-wider leading-loose">
          <header className="font-bold text-xl">Hey there 🖐</header>
          <p>I’m Ahmet, a developer passionate about transforming ideas into reality through code. Whether it’s building sleek UIs, optimizing performance, or diving into new technologies, I’m always up for a challenge.</p>
          <p>I began my coding journey at 15 with C++, where I built basic projects and learned the fundamentals of programming. My drive to create led me to explore C#, and I developed simple apps and algorithms that taught me how to solve real-world problems.</p>
          <p>My curiosity then turned toward web technologies and data scraping, which led me to Python. I became proficient with packages like Selenium, BeautifulSoup, and Requests, and I thoroughly enjoyed creating web scraping projects and automation bots. I’ve also ventured into data analysis and algorithmic trading using Python. Eventually, I discovered web development and fell in love with the blend of visually appealing design and problem-solving through code—this is the field where I choose to build my career.</p>
          <p>Currently, I am working on a couple of projects, carefully selecting each one to address real-world challenges for specific users. One project, called Articlew, is designed to help users improve their English reading and writing skills. For this project, I scrape data from various websites and use FastAPI to build the backend, incorporating AI concepts to help users grasp word usage better. Additionally, I’m developing a Chrome extension named Summaread, which summarizes articles and highlights the essential parts without altering the original content.</p>
          <p>I’m constantly learning and evolving as a developer, and I’m excited to see where my passion for technology takes me next.</p>
          <Link href={`/api/resume`}>
            <Button className="w-full sm:w-48">Download Resume</Button>
          </Link>
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
  )
}
