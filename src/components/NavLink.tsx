import Link from 'next/link';
import React from 'react'

interface NavLinkProps {
    href: string;
    children?: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
    return (
        <Link className='transition-all ease-in duration-200 hover:opacity-80' href={href}>{children}</Link>
    )
}
