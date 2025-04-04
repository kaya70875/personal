'use client';

import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import articlewImg from "../../public/images/articlew.png";
import financeImg from '../../public/images/finance.png';
import myImage from '../../public/images/headshot.png';
import noteImg from '../../public/images/note.png';
import Image from "next/image";
import { Typewriter } from "@/components/motion/Typewriter";
import AnimatedBorderCard from "@/components/motion/AnimatedBorderCard";
import SkillButton from "@/components/SkillButton";
import { SKILLS } from "@/data/skills";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import Socials from "@/components/Socials";
import SendMessageCard from "@/components/contact/SendMessageCard";
import AnimatedSection from "@/components/motion/AnimatedSection";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {

  const PROJECTS = [
    {
      name: 'articlew',
      desc: 'articlew is a unique educational app designed to enhance your English learning and writing skills. With this app, users can input a word and receive example sentences, definitions, and contextual usages from a variety of topics and articles.',
      image: articlewImg,
      prime: true,
      link: {
        live: 'https://learn-with-articles-next.vercel.app/search',
        github: 'https://github.com/kaya70875/articlew'
      }
    },
    {
      name: 'finance',
      desc: 'Finance is an challange from FrontEnd Mentors. Desing is quite challenging and taught me a lot about flexbox and css in general. This project mostly challanged me with CSS and UI/UX.',
      image: financeImg,
      prime: false,
      link: {
        live: 'https://personel-finance-app-next.vercel.app/login',
        github: 'https://github.com/kaya70875/personel-finance-app-next'
      }
    },
    {
      name: 'note',
      desc: 'Note is a clean and simple app for taking notes. This project taught me a lot of advance Next JS features. This app also highly customizable with a lot of features.',
      image: noteImg,
      prime: false,
      link: {
        live: 'https://note-taking-app-next-beta.vercel.app/',
        github: 'https://github.com/kaya70875/note-taking-app-next'
      }
    }
  ] as const;

  const projectsRef = useRef<HTMLElement | null>(null);

  return (
    <main className="flex flex-col sections-gap mx-0 2xl:mx-24 navbar-space">
      <AnimatedSection className="hero flex flex-col gap-8 items-center justify-center text-center relative">
        <header>
          <Image src={myImage} alt="profile-img" width={164} height={164} />
        </header>
        <h1 className="max-w-2xl">Hi, I am <span className="text-accent">Ahmet. </span>I build things for the web.</h1>
        <Typewriter text="Full-Stack Developer | React | Next.js | FastAPI" />
        <h3 className="max-w-3xl 2xl:max-w-4xl">I turn ideas into code and write about my journey as a developer. Let’s build something cool!</h3>
        <div className="flex items-center gap-8 sm:gap-16 justify-center w-full">
          <Button onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'end' })} className="w-36 sm:w-48">View My Work</Button>
          <Link href={'/blog'}>
            <Button className="w-36 sm:w-48" variant="secondary">See My Blog</Button>
          </Link>
        </div>

        <Socials className="w-full mt-4" />
      </AnimatedSection>

      <AnimatedSection ref={projectsRef} className="projects flex flex-col gap-8 scroll-mt-32">
        <header className="section-header">Projects</header>
        <div className="project-cards grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12">
          {PROJECTS.map((project, index) => (
            <AnimatedBorderCard key={index} prime={project.prime}>
              <ProjectCard link={project.link} name={project.name} desc={project.desc} image={{ src: project.image }} key={index} />
            </AnimatedBorderCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="skills flex flex-col gap-8">
        <header className="section-header">Skills</header>
        <div className="skill-buttons grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <SkillButton name={skill.name} icon={skill.icon} key={index} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="about flex flex-col gap-8">
        <header className="section-header">About Me</header>
        <div className="p-4 sm:p-8 w-full flex flex-col gap-8 shadow-lg rounded-lg bg-white text-text opacity-90 tracking-wider leading-loose">
          <p>Hey there! I’m Ahmet, a developer passionate about transforming ideas into reality through code. Whether it’s building sleek UIs, optimizing performance, or diving into new technologies, I’m always up for a challenge.</p>
          <p>I began my coding journey at 15 with C++, where I built basic projects and learned the fundamentals of programming. My drive to create led me to explore C#, and I developed simple apps and algorithms that taught me how to solve real-world problems.</p>
          <p>My curiosity then turned toward web technologies and data scraping, which led me to Python. I became proficient with packages like Selenium, BeautifulSoup, and Requests, and I thoroughly enjoyed creating web scraping projects and automation bots. I’ve also ventured into data analysis and algorithmic trading using Python. Eventually, I discovered web development and fell in love with the blend of visually appealing design and problem-solving through code—this is the field where I choose to build my career.</p>
          <p>Currently, I am working on a couple of projects, carefully selecting each one to address real-world challenges for specific users. One project, called Articlew, is designed to help users improve their English reading and writing skills. For this project, I scrape data from various websites and use FastAPI to build the backend, incorporating AI concepts to help users grasp word usage better. Additionally, I’m developing a Chrome extension named Summaread, which summarizes articles and highlights the essential parts without altering the original content.</p>
          <p>I’m constantly learning and evolving as a developer, and I’m excited to see where my passion for technology takes me next.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="contact flex flex-col gap-8 scroll-mt-32">
        <header className="section-header">Contact</header>
        <div className="flex w-full flex-col-reverse lg:flex-row lg:flex-1 gap-8 bg-white">
          <ContactInfoCard />
          <SendMessageCard />
        </div>
      </AnimatedSection>
    </main>
  )
}
