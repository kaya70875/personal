'use client';

import IconMoon from '@/svg/IconMoon'
import React, { useState } from 'react'
import NavLink from './NavLink';
import { MdMenu } from 'react-icons/md';
import MobileNav from './mobile/MobileNav';
import { useScrollNavigation } from '@/hooks/useScroll';
import IconSun from '@/svg/IconSun';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {

    const { theme, setTheme } = useTheme();
    const { handleContactScroll } = useScrollNavigation();

    const navLinks = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Resume',
            url: '/api/resume'
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

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, name: string) => {
        if (name === 'Contact') {
            handleContactScroll(e);
        }
    }

    return (
        <nav className='flex w-full items-center justify-between fixed top-0 left-0 default-container shadow-xl z-30 backdrop-blur-sm'>
            <header>
                <h2 className='text-text dark:text-dark-text'>ahmetky.Dev</h2>
            </header>

            <ul className='nav-items hidden md:flex items-center gap-8 text-text dark:text-dark-text cursor-pointer'>
                {navLinks?.map((link, index) => (
                    <li key={index}>
                        <NavLink onClick={(e) => handleClick(e!, link.name)} href={link.url}>{link.name}</NavLink>
                    </li>
                ))}
                <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className={`cursor-pointer transition-all ease-in duration-200`}>
                    {theme === 'dark' ? <IconSun /> : <IconMoon />}
                </div>
            </ul>

            <MobileNav open={open} setOpen={setOpen} navLinks={navLinks} />

            <div className='flex md:hidden items-center gap-4'>
                <MdMenu onClick={() => setOpen((prev) => !prev)} className='block md:hidden text-text dark:text-dark-text' size={24} />
                <IconMoon />
            </div>

        </nav>
    )
}
