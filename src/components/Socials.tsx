import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

interface SocialsProps {
    className?: string;
    gap?: string;
}

export default function Socials({ className = '', gap = 'gap-8' }: SocialsProps) {
    return (
        <div className={`socials text-text dark:text-dark-text flex items-center justify-center ${className} ${gap}`}>
            <Link href={'https://github.com/kaya70875'} target="__blank" className="transition-all duration-200 ease-in hover:text-accent">
                <Github />
            </Link>
            <Link href={'https://www.linkedin.com/in/ahmet-kaya-44a2172aa/'} target="__blank" className="transition-all duration-200 ease-in hover:text-accent">
                <Linkedin />
            </Link>
        </div>
    )
}
