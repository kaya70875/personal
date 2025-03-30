import React from 'react'

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
}

export default function Button({ variant = 'primary', children, onClick }: ButtonProps) {

    const baseStyles = 'px-4 py-4 rounded-lg cursor-pointer font-[600] w-48'

    const variants = {
        primary: 'bg-accent text-text',
        secondary: 'bg-text text-white'
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
            {children}
        </button>
    )
}
