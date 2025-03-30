import IconMoon from '@/svg/IconMoon'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='flex w-full items-center p-4 justify-between'>
            <header>
                <h2>ahmet.Dev</h2>
            </header>

            <ul className='nav-items flex items-center gap-8 text-text cursor-pointer'>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Resume</Link>
                <Link href={'/'}>Blog</Link>
                <Link href={'/'}>Contact</Link>
                <IconMoon />
            </ul>
        </nav>
    )
}
