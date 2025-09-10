'use client';

import React, { useState } from 'react'
import NavLink from './NavLink';
import MobileNav from './mobile/MobileNav';
import { useScrollNavigation } from '@/hooks/useScroll';
import ThemeChanger from './reusables/ThemeChanger';
import Link from 'next/link';
import { Download, Menu } from 'lucide-react';

export default function Navbar() {

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
        <nav className='flex w-full items-center justify-between fixed top-0 left-0 px-[20px] md:px-[80px] xl:px-[150px] 2xl:px-[250px] py-4 md:py-6 z-30 bg-bg dark:bg-dark-bg border border-gray-200 dark:border-gray-800'>
            <header>
                <Link href={'/'}>
                    <h2 className='text-text dark:text-dark-text'><span className='text-accent font-bold'>ahmetky</span>.dev</h2>
                </Link>
            </header>

            <ul className='nav-items hidden md:flex items-center gap-8 text-text dark:text-dark-text cursor-pointer font-medium'>
                {navLinks?.map((link, index) => (
                    <li key={index}>
                        <NavLink onClick={(e) => handleClick(e!, link.name)} href={link.url}>{link.name == 'Resume' ? (<div className='flex items-center gap-2'>{link.name} <Download className='w-4 h-4' /></div>) : link.name}</NavLink>
                    </li>
                ))}
                <ThemeChanger />
            </ul>

            <MobileNav open={open} setOpen={setOpen} navLinks={navLinks} />

            <div className='flex md:hidden items-center gap-4'>
                <Menu onClick={() => setOpen((prev) => !prev)} className='block md:hidden text-text dark:text-dark-text' size={24} />
                <ThemeChanger />
            </div>

        </nav>
    )
}
