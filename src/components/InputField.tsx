import React from 'react'

interface InputFieldProps {
    label?: string;
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ label = '', className, placeholder, onChange }: InputFieldProps) {
    return (
        <div className='flex flex-col gap-2 w-full'>
            {label && <label htmlFor={label}>{label}</label>}
            <input type="text" onChange={onChange} className={`py-1 px-3 border border-text dark:border-dark-text rounded-lg ${className}`} placeholder={placeholder} id={label} />
        </div>
    )
}
