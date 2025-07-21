import React from 'react'

interface SectionBackgroundWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export default function SectionBackgroundWrapper({ children, className }: SectionBackgroundWrapperProps) {
    return (
        <div className={`${className} p-6`}>
            {children}
        </div>
    )
}
