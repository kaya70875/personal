import { Github, Linkedin, MailIcon } from 'lucide-react';
import Link from 'next/link'
import React from 'react'

interface SocialsProps {
    className?: string;
    gap?: string;
}

export default function Socials({ className = '', gap = 'gap-8' }: SocialsProps) {

    const linkStyle = 'transition-all duration-200 ease-in hover:text-accent transition-all duration-200 ease-in hover:text-accent';

    return (
        <div className={`socials text-dark-text flex items-center justify-center ${className} ${gap}`}>
            <Link href={'https://github.com/kaya70875'} target="__blank" className={linkStyle}>
                <Github />
            </Link>
            <Link href={'https://www.linkedin.com/in/ahmet-kaya-44a2172aa/'} target="__blank" className={linkStyle}>
                <Linkedin />
            </Link>
            <Link href={'mailto:kaya70875@gmail.com'} target='__blank' rel='noopener noreferrer' className={linkStyle}>
                <MailIcon />
            </Link>
        </div>
    )
}
