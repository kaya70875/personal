import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function Button({ variant = 'primary', children, onClick, className, ...props }: ButtonProps) {

    const baseStyles = 'px-4 py-2 sm:py-3 rounded-md cursor-pointer font-medium transition duration-300 ease-in-out whitespace-nowrap';

    const variants = {
        primary: 'bg-accent text-text hover:opacity-80',
        secondary: 'border border-gray-600 text-primary dark:text-white rounded-md transition-all hover:bg-white/10 hover:border-gray-400',
    }

    return (
        <button onClick={onClick} {...props} className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </button>
    )
}
