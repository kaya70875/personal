import Link from "next/link";
import Button from "../Button";
import Socials from "../Socials";
import { RefObject } from "react";
import Image from "next/image";
import myImage from "../../../public/images/headshot.png";

interface HeroProps {
  projectsRef: RefObject<HTMLElement | null>;
}

export default function Hero({ projectsRef }: HeroProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center w-full justify-center md:justify-around max-w-6xl gap-8 relative p-4 xl:p-0">
      <div className="gradient absolute hidden md:block bottom-0 opacity-40 glow-dark"></div>
      <section className="main flex flex-col gap-8 max-w-4xl">
        <header className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="text-accent font-medium">Hello, I'm</span>
            <span className="font-extrabold text-white text-7xl">Ahmet</span>
            <span className="mb-2 font-light text-4xl opacity-80">
              Full Stack Developer
            </span>
          </div>
          <p className="max-w-xl font-light opacity-90 text-center md:text-start">
            I build exceptional and accessible digital experiences for the web.
            Focused on creating elegant solutions with modern technologies.
          </p>
        </header>

        <div className="buttons flex items-center justify-center md:justify-start gap-4">
          <Button
            onClick={() =>
              projectsRef.current?.scrollIntoView({
                behavior: "smooth",
                inline: "end",
              })
            }
          >
            See Projects
          </Button>
          <Link href={"/blog"}>
            <Button variant="secondary">Read Blog</Button>
          </Link>
        </div>
        <div className="w-full flex items-start justify-center md:justify-start opacity-70">
          <Socials gap="gap-4" />
        </div>
      </section>

      <section>
        <HeadShotSection />
      </section>
    </div>
  );
}

function HeadShotSection() {
  return (
    <div className="flex-1 flex justify-center">
      <div className="relative">
        <div className="w-48 h-48 md:w-80 md:h-80 rounded-full border-2 border-yellow-400/30 overflow-hidden relative">
          <Image
            src={myImage}
            alt="profile-img"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function RotatingWrapper() {

  const baseOrbStyle = 'orb w-12 h-12 border border-accent/30 bg-primary text-accent font-bold absolute rounded-full flex items-center justify-center';

  return (
    <div className="absolute -inset-2 rotating-orb">
      <div className={baseOrbStyle}>
        JS
      </div>
      <div className={`${baseOrbStyle} right-0`}>
        TS
      </div>
      <div className={`${baseOrbStyle} bottom-0`}>
        CSS
      </div>
      <div className={`${baseOrbStyle} bottom-0 right-0`}>
        PY
      </div>
    </div>
  )
}
