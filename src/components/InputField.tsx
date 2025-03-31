import React from 'react'

interface InputFieldProps {
    label?: string;
    placeholder?: string;
    className?: string;
}

export default function InputField({ label = '', className, placeholder }: InputFieldProps) {
    return (
        <div className='flex flex-col gap-2 w-full'>
            {label && <label htmlFor={label}>{label}</label>}
            <input type="text" className={`py-1 px-3 border border-text rounded-lg ${className}`} placeholder={placeholder} id={label} />
        </div>
    )
}
