import React from 'react'
import NavLink from '../NavLink'
import { useScrollNavigation } from '@/hooks/useScroll';

interface MobileNavProps {
    navLinks: {
        name: string;
        url: string;
    }[];
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({ navLinks, open, setOpen }: MobileNavProps) {

    const { handleContactScroll } = useScrollNavigation();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, name: string) => {
        setOpen(false);

        if (name === 'Contact') {
            handleContactScroll(e);
        }
    }

    return (
        <div className={`hamburger-menu ${open ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'} transition-all duration-200 ease fixed md:hidden inset-x-0 z-10 top-20 p-4 bg-dark-bg shadow-lg text-dark-text flex flex-col gap-8 items-center justify-center`}>
            {navLinks?.map((link, index) => (
                <li key={index} className='list-none'>
                    <NavLink onClick={(e) => handleClick(e!, link.name)} href={link.url}>{link.name}</NavLink>
                </li>
            ))}
        </div>
    )
}
