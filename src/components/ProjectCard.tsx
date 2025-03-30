import Image, { StaticImageData } from 'next/image';
import React from 'react'
import Button from './Button';

interface ProjectCardProps {
    name: string;
    image: {
        src: StaticImageData;
        width?: number;
        height?: number;
    };
    desc: string;
    borderVariant?: 'primary' | 'default';
}

export default function ProjectCard({ name, image, desc, borderVariant = 'default' }: ProjectCardProps) {

    const borderVariants = {
        primary: 'border-accent',
        default: 'border-text'
    }

    return (
        <div className={`border-4 rounded-lg ${borderVariants[borderVariant]} p-8 flex flex-col justify-between items-center gap-8 max-w-lg`}>
            <header className='font-bold text-2xl text-text'>{name}</header>
            <Image src={image.src} width={image.width ?? 500} height={image.height ?? 500} alt='project' />
            <p className='text-text opacity-90 font-light'>{desc}</p>

            <div className="flex items-center gap-16 justify-center w-full">
                <Button>View Live</Button>
                <Button variant="secondary">Github</Button>
            </div>
        </div>
    )
}
