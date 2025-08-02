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
        <div className="flex flex-col justify-between h-full items-center gap-8">
            <div className='flex flex-col gap-8 items-center'>
                <header className='font-bold text-xl md:text-2xl text-text dark:text-dark-text uppercase'>{name}</header>
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
