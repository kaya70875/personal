'use client';

import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import articlewImg from "../../public/images/articlew.png";
import financeImg from '../../public/images/finance.png';
import myImage from '../../public/images/headshot.png';
import noteImg from '../../public/images/note.png';
import Image from "next/image";
import IconGithub from "@/svg/IconGithub";
import IconIn from "@/svg/IconIn";
import IconArrow from "@/svg/IconArrow";
import Link from "next/link";
import { Typewriter } from "@/components/motion/Typewriter";
import { motion } from 'motion/react';
import AnimatedBorderCard from "@/components/motion/AnimatedBorderCard";

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

  return (
    <main className="flex flex-col sections-gap">
      <section className="hero flex flex-col gap-8 items-center justify-center text-center relative">
        <header>
          <Image src={myImage} alt="profile-img" width={164} height={164} />
        </header>
        <h1 className="max-w-2xl">Hi, I am <span className="text-accent">Ahmet. </span>I build things for the web.</h1>
        <Typewriter text="Full-Stack Developer | React | Next.js | FastAPI" />
        <h3 className="max-w-3xl 2xl:max-w-4xl">I turn ideas into code and write about my journey as a developer. Let’s build something cool!</h3>
        <div className="flex items-center gap-16 justify-center w-full">
          <Button>View My Work</Button>
          <Button variant="secondary">See My Blog</Button>
        </div>

        <div className="socials text-text flex items-center gap-8 mt-4 justify-center w-full">
          <Link href={'https://github.com/kaya70875'} target="__blank" className="transition-all duration-200 ease-in hover:text-accent">
            <IconGithub />
          </Link>
          <Link href={'https://www.linkedin.com/in/ahmet-kaya-44a2172aa/'} target="__blank" className="transition-all duration-200 ease-in hover:text-accent">
            <IconIn />
          </Link>
        </div>

        <div className="bounce-arrow absolute -bottom-16 animate-bounce cursor-pointer duration-200 ease-in hover:text-accent">
          <IconArrow />
        </div>
      </section>
      <section className="projects flex flex-col gap-8">
        <header className="section-header">Projects</header>
        <motion.div className="project-cards grid grid-cols-2 justify-items-center gap-12" initial={{ transform: "translateY(100px)" }} viewport={{ once: true, amount: 0.1 }} whileInView={{ transform: "translateY(0px)" }} transition={{ type: 'spring' }}>
          {PROJECTS.map((project, index) => (
            <AnimatedBorderCard key={index} prime={project.prime}>
              <ProjectCard link={project.link} name={project.name} desc={project.desc} image={{ src: project.image }} key={index} />
            </AnimatedBorderCard>
          ))}
        </motion.div>
      </section>
    </main>
  )
}
