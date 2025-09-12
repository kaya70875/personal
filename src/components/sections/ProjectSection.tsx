import React from 'react'
import AnimatedSection from '../motion/AnimatedSection'
import ProjectCard from '../ProjectCard'
import ImageModal from '../modals/ImageModal'
import articlewImg from "../../../public/images/articlew.png";
import youtubetranscriptImg from "../../../public/images/youtubetranscriptai.png";
import financeImg from '../../../public/images/finance.png';
import noteImg from '../../../public/images/note.png';
import { useModal } from '@/context/ImageModalContext'
import { AnimatePresence } from 'motion/react'
import Header from '../reusables/Header'

interface ProjectSectionProps {
    projectsRef: React.RefObject<HTMLElement | null>
}

export default function ProjectSection({ projectsRef }: ProjectSectionProps) {

    const { modalImage } = useModal();

    const PROJECTS = [
        {
            name: 'articlew',
            desc: 'Articlew is a unique educational app designed to enhance your English learning and writing skills. With this app, users can input a word and receive example sentences, definitions, and contextual usages from a variety of topics and articles.',
            image: articlewImg,
            prime: true,
            link: {
                live: 'https://learn-with-articles-next.vercel.app/search',
                github: 'https://github.com/kaya70875/articlew'
            }
        },
        {
            name: 'youtubetranscriptai',
            desc: 'YouTubeTranscriptAI quickly gathers and structures large-scale YouTube transcripts — perfect for datasets, trend analysis, or content processing.',
            image: youtubetranscriptImg,
            prime: true,
            link: {
                live: 'https://youtubetranscriptai.vercel.app/',
                github: 'https://github.com/kaya70875/youtube-transcript-fetcher-frontend'
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
        <AnimatedSection ref={projectsRef} className="projects flex flex-col items-center justify-center scroll-mt-[84px]">
            <Header name='Featured Projects' />
            <div className="project-cards grid grid-cols-1 lg:grid-cols-2 max-w-6xl gap-8">
                {PROJECTS.map((project, index) => (
                    <ProjectCard link={project.link} name={project.name} desc={project.desc} image={{ src: project.image }} key={index} />
                ))}
            </div>
            <AnimatePresence mode='wait'>
                {modalImage.open && <ImageModal key="modal" />}
            </AnimatePresence>
        </AnimatedSection>
    )
}
