'use client';

import IconMoon from '@/svg/IconMoon'
import React, { useState } from 'react'
import NavLink from './NavLink';
import { MdMenu } from 'react-icons/md';
import MobileNav from './mobile/MobileNav';

export default function Navbar() {

    const navLinks = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Resume',
            url: '/resume'
        },
        {
            name: 'Blog',
            url: '/blog'
        },
        {
            name: 'Contact',
            url: '#'
        },
    ];

    const [open, setOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, name: string) => {
        if (name === 'Contact') {
            e.preventDefault();
            const contactRef = document?.querySelector('.contact');
            if (contactRef) {
                contactRef.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <nav className='flex w-full items-center justify-between fixed top-0 left-0 default-container shadow-xl z-30 backdrop-blur-sm'>
            <header>
                <h2>ahmetky.Dev</h2>
            </header>

            <ul className='nav-items hidden md:flex items-center gap-8 text-text cursor-pointer'>
                {navLinks?.map((link, index) => (
                    <li key={index}>
                        <NavLink onClick={(e) => handleScroll(e!, link.name)} href={link.url}>{link.name}</NavLink>
                    </li>
                ))}
                <IconMoon />
            </ul>

            <MobileNav open={open} navLinks={navLinks} />

            <div className='flex md:hidden items-center gap-4'>
                <MdMenu onClick={() => setOpen((prev) => !prev)} className='block md:hidden' size={24} color='var(--color-text)' />
                <IconMoon />
            </div>

        </nav>
    )
}
