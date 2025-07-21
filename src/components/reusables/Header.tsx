import React from 'react'

interface HeaderProps {
    name: string
}

export default function Header({ name }: HeaderProps) {
    return (
        <div className='flex flex-col gap-2 w-full items-center mb-24'>
            <header className='section-header'>
                {name}
            </header>
            <div className="header-line w-32 h-12 bg-accent"></div>
        </div>
    )
}
