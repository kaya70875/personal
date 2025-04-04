import React from 'react'

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function Button({ variant = 'primary', children, onClick, className }: ButtonProps) {

    const baseStyles = 'px-4 py-3 rounded-lg cursor-pointer font-[600] transition duration-300 ease-in-out whitespace-nowrap';

    const variants = {
        primary: 'bg-accent text-text hover:opacity-80',
        secondary: 'bg-text text-white hover:opacity-80',
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </button>
    )
}
