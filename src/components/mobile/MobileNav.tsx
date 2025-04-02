import React from 'react'
import NavLink from '../NavLink'

interface MobileNavProps {
    navLinks: {
        name: string;
        url: string;
    }[];
    open: boolean;
}

export default function MobileNav({ navLinks, open }: MobileNavProps) {
    return (
        <div className={`hamburger-menu ${open ? 'block' : 'hidden'} fixed md:hidden inset-x-0 z-10 top-20 p-4 bg-white shadow-lg text-text flex flex-col gap-8 items-center justify-center`}>
            {navLinks?.map((link, index) => (
                <li key={index} className='list-none'>
                    <NavLink href={link.url}>{link.name}</NavLink>
                </li>
            ))}
        </div>
    )
}
