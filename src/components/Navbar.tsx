import IconMoon from '@/svg/IconMoon'
import React from 'react'
import NavLink from './NavLink';

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
            url: '/contact'
        },
    ] as const;

    return (
        <nav className='flex w-full items-center p-4 justify-between'>
            <header>
                <h2>ahmet.Dev</h2>
            </header>

            <ul className='nav-items flex items-center gap-8 text-text cursor-pointer'>
                {navLinks.map((link, index) => (
                    <NavLink href={link.url} key={index}>{link.name}</NavLink>
                ))}
                <IconMoon />
            </ul>
        </nav>
    )
}
