import React from 'react'

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
}

export default function Button({ variant = 'primary', children, onClick }: ButtonProps) {

    const baseStyles = 'px-4 py-4 rounded-lg cursor-pointer font-[600] w-48 transition duration-300 ease-in-out';

    const variants = {
        primary: 'bg-accent text-text hover:opacity-80',
        secondary: 'bg-text text-white hover:opacity-80',
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
            {children}
        </button>
    )
}
