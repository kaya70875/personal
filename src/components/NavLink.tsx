import Link from 'next/link';
import React from 'react'

interface NavLinkProps {
    href: string;
    children?: React.ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
    return (
        <Link onClick={onClick} className='transition-all ease-in duration-200 hover:opacity-80' href={href}>{children}</Link>
    )
}
