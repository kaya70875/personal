import React from 'react'

interface HeaderProps {
    name: string;
    desc?: string;
}

export default function Header({ name, desc }: HeaderProps) {
    return (
        <div className='flex flex-col w-full items-center mb-14'>
            <header className='section-header text-center'>
                {name}
            </header>
            <div className="header-line w-32 h-12 bg-accent mb-4"></div>
            {desc && (
                <p className="desc font-light max-w-2xl text-center w-full opacity-90">{desc}</p>
            )}
        </div>
    )
}
