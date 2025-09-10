import { CodeIcon, LaptopIcon, UserIcon } from "lucide-react";

interface AboutCard {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

export default function AboutSection() {

    const aboutCards: AboutCard[] = [
        {
            icon: <UserIcon size={26} />,
            title: 'Experience',
            desc: '2+ years of development experience',

        },
        {
            icon: <CodeIcon size={26} />,
            title: 'Technologies',
            desc: 'Specialized in React, Next.js, and Node.js ecosystems.',
        },
        {
            icon: <LaptopIcon size={26} />,
            title: 'Projects',
            desc: 'Completed projects for various topics with focusing on real world problems.'
        }
    ] as const;

    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-24 w-full">
            <section className="about-desc text-text dark:text-white font-light max-w-xl">
                <AboutDescription />
            </section>

            <section className="about-cards grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">
                {aboutCards.map((card, idx) => (
                    <AboutCard icon={card.icon} title={card.title} desc={card.desc} key={idx} />
                ))}
            </section>
        </div>
    )
}

function AboutCard({icon, title, desc} : AboutCard) {
    return (
        <div className="bg-[#0f172a] p-6 rounded-lg border border-gray-800 hover:border-yellow-400/30 transition-colors flex flex-col items-center md:items-start gap-3">
                  <div className="text-yellow-400">
                    {icon}
                  </div>
                  <header className="text-xl font-semibold">{title}</header>
                  <p className="text-gray-300">
                    {desc}
                  </p>
            </div>
    )
}

function AboutDescription() {
    return (
        <section className="about-desc text-text dark:text-white opacity-80 font-light max-w-xl">
            <p>
              I'm a passionate Full Stack Developer with expertise in building
            modern web applications.
            </p>
            <br />
            <p>
              With a strong foundation in both front-end
            and back-end technologies, I create seamless, user-friendly
            experiences that solve real-world problems.
            </p>
            <br />
            <p>
              My journey in software
            development began over 5 years ago, and since then, I've worked on a
            variety of projects ranging from small business websites to complex
            enterprise applications. When I'm not coding, you can find me
            exploring new technologies, contributing to open-source projects, or
            sharing my knowledge through blog posts and tutorials.
            </p>
          </section>
    )
}