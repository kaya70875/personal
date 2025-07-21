import React from 'react'
import AnimatedSection from '../motion/AnimatedSection'
import AnimatedBorderCard from '../motion/AnimatedBorderCard'
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
            desc: 'YouTubeTranscriptAI solves the time-consuming problem of gathering and structuring large-scale transcript data from YouTube. Whether you are building a dataset for a machine learning model, analyzing trends across videos, or simply need raw transcripts for content processing — this tool handles it, fast. Users can submit any public YouTube channel and receive cleaned, structured transcript data in their preferred format — CSV, JSON or TXT. It supports full-channel exports with up to 600+ videos per job.',
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
        <AnimatedSection ref={projectsRef} className="projects flex flex-col scroll-mt-[84px]">
            <Header name='Featured Projects' />
            <div className="project-cards grid grid-cols-1 md:grid-cols-2 justify-items-center gap-12">
                {PROJECTS.map((project, index) => (
                    <AnimatedBorderCard key={index} prime={project.prime}>
                        <ProjectCard link={project.link} name={project.name} desc={project.desc} image={{ src: project.image }} key={index} />
                    </AnimatedBorderCard>
                ))}
            </div>
            <AnimatePresence mode='wait'>
                {modalImage.open && <ImageModal key="modal" />}
            </AnimatePresence>
        </AnimatedSection>
    )
}
