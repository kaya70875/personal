import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import articlewImg from "../../public/images/articlew.png";
import financeImg from '../../public/images/finance.png';
import myImage from '../../public/images/headshot.png';
import Image from "next/image";
import IconGithub from "@/svg/IconGithub";
import IconIn from "@/svg/IconIn";
import IconArrow from "@/svg/IconArrow";
import Link from "next/link";

export default function Home() {

  const PROJECTS = [
    {
      name: 'articlew',
      desc: 'articlew is a unique educational app designed to enhance your English learning and writing skills. With this app, users can input a word and receive example sentences, definitions, and contextual usages from a variety of topics and articles.',
      image: articlewImg,
      border: 'primary',
    },
    {
      name: 'finance',
      desc: 'Finance is an challange from FrontEnd Mentors. Desing is quite challenging and taught me a lot about flexbox and css in general. This project mostly challanged me with CSS and UI/UX.',
      image: financeImg,
      border: 'default',
    }
  ]

  return (
    <main className="flex flex-col sections-gap">
      <section className="hero flex flex-col gap-8 items-center justify-center text-center relative">
        <header>
          <Image src={myImage} alt="profile-img" width={164} height={164} />
        </header>
        <h1 className="max-w-2xl">Hi, I am <span className="text-accent">Ahmet. </span>I build things for the web.</h1>
        <h3 className="max-w-3xl 2xl:max-w-4xl">I turn ideas into code and write about my journey as a developer. Let’s build something cool!</h3>
        <div className="flex items-center gap-16 justify-center w-full">
          <Button>View My Work</Button>
          <Button variant="secondary">See My Blog</Button>
        </div>

        <div className="socials cursor-pointer text-text flex items-center gap-8 mt-12 justify-center w-full">
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
        <div className="project-cards flex items-center justify-between gap-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard borderVariant={project.border ?? 'default'} name={project.name} desc={project.desc} image={{ src: project.image }} key={index} />
          ))}
        </div>
      </section>
    </main>
  )
}
