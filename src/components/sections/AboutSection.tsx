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

function AboutCard({ icon, title, desc }: AboutCard) {
    return (
        <div className="bg-gray-200 dark:bg-[#0f172a] p-6 rounded-lg border border-gray-400 dark:border-gray-800 hover:border-accent transition-colors flex flex-col items-center md:items-start gap-3">
            <div className="text-primary dark:text-yellow-400">
                {icon}
            </div>
            <header className="text-xl font-semibold">{title}</header>
            <p className="text-primary dark:text-gray-300">
                {desc}
            </p>
        </div>
    )
}

function AboutDescription() {
    return (
        <section className="about-desc text-text dark:text-white opacity-80 font-light max-w-xl leading-7 space-y-4">
            <p>
                I’m Ahmet, a <span className="font-medium">Full Stack Developer </span>
                passionate about building tools that make learning and productivity more accessible.
            </p>

            <p>
                My main stack is <span className="font-medium">Next.js, TypeScript, and Tailwind </span>
                on the front end, combined with <span className="font-medium">FastAPI, MongoDB, and PostgreSQL </span>
                on the back end. I enjoy turning ideas into scalable, real-world applications.
            </p>

            <p>
                I’ve worked on projects like <span className="font-medium">LearnWithArticles</span>, an English
                learning platform, and <span className="font-medium">YouTube Transcript AI</span>, a tool for
                transcript collection and ML dataset creation. Open-source contributions are also an important part
                of my journey.
            </p>

            <p>
                Beyond coding, you’ll often find me exploring new technologies, practicing fingerstyle guitar,
                or writing to share what I learn with others.
            </p>
        </section>
    )
}
