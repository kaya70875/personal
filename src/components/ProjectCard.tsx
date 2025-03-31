'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react'
import Button from './Button';
import Link from 'next/link';

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
    return (
        <div className="flex flex-col justify-between items-center gap-8">
            <header className='font-bold text-2xl text-text uppercase'>{name}</header>
            <Image className='rounded-lg' src={image.src} width={image.width ?? 500} height={image.height ?? 500} alt='project' />
            <p className='text-text opacity-90 font-light'>{desc}</p>

            <div className="flex items-center gap-16 justify-center w-full">
                <Link href={link.live} target='__blank'>
                    <Button>View Live</Button>
                </Link>
                <Link href={link.github} target='__blank'>
                    <Button variant="secondary">Github</Button>
                </Link>
            </div>
        </div>

    )
}
