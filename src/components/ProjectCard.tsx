'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react'
import Button from './Button';
import Link from 'next/link';
import { useModal } from '@/context/ImageModalContext';

interface Link {
    live: string;
    github: string;
}

interface ProjectCardProps {
    name: string;
    image: {
        src: StaticImageData;
        width?: number;
        height?: number;
    };
    desc: string;
    link: Link;
}

export default function ProjectCard({ name, image, desc, link }: ProjectCardProps) {

    const { modalImage, setModalImage } = useModal();

    const projectButtonStyles = "min-w-32"

    const handleImageClick = () => {
        setModalImage({ ...modalImage, open: true, image: image.src })
    }

    return (
        <div className="flex flex-col justify-between h-full bg-gradient-to-br from-gray-900 to-[#0a1122] items-center gap-8 p-6 rounded-lg border border-opacity-30 border-gray-700 transition-all duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:-translate-y-1">
            <div className='flex flex-col gap-6 items-center'>
                <header className='font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400 uppercase w-full text-start'>{name}</header>
                <Image onClick={handleImageClick} className='rounded-lg cursor-pointer' src={image.src} width={image.width ?? 500} height={image.height ?? 500} alt='project' />
                <p className='text-text dark:text-dark-text opacity-90 font-light'>{desc}</p>
            </div>

            <div className="flex items-center justify-center gap-8 lg:gap-12 lg:md-8 w-full">
                <Link href={link.live} target='__blank'>
                    <Button className={projectButtonStyles}>View Live</Button>
                </Link>
                <Link href={link.github} target='__blank'>
                    <Button className={projectButtonStyles} variant="secondary">Github</Button>
                </Link>
            </div>
        </div>

    )
}
