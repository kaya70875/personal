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
    <div className="flex items-center w-full justify-around max-w-6xl gap-8">
      <section className="main flex flex-col gap-8 max-w-4xl">
        <header className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-accent font-medium">Hello, I'm</span>
            <span className="font-extrabold text-white text-7xl">Ahmet</span>
            <span className="mb-2 font-light text-4xl opacity-80">
              Full Stack Developer
            </span>
          </div>
          <p className="max-w-xl font-light opacity-90">
            I build exceptional and accessible digital experiences for the web.
            Focused on creating elegant solutions with modern technologies.
          </p>
        </header>

        <div className="buttons flex items-center gap-4">
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
        <div className="w-full flex items-start opacity-60">
          <Socials gap="gap-4" />
        </div>
      </section>

      <section>
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-yellow-400/20 to-purple-500/20 absolute blur-2xl"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-yellow-400/30 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-yellow-400/30">
                <Image src={myImage} alt="profile-img" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
