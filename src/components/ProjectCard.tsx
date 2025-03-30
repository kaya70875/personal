'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react'
import Button from './Button';
import Link from 'next/link';
import { motion } from "motion/react";

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
    borderVariant?: 'primary' | 'default';
    link: Link;
}

export default function ProjectCard({ name, image, desc, borderVariant = 'default', link }: ProjectCardProps) {

    const borderVariants = {
        primary: 'border-accent',
        default: 'border-text'
    }

    return (
        <motion.div whileHover={{ scale: 1.025, transition: { duration: 0.25 } }} className={`border-2 rounded-lg ${borderVariants[borderVariant]} p-8 flex flex-col justify-between items-center gap-8 max-w-lg h-[580px]`}>
            <header className='font-bold text-2xl text-text'>{name}</header>
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
        </motion.div>
    )
}
