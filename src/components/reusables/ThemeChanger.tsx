import { useTheme } from '@/context/ThemeContext'
import { Moon, Sun } from 'lucide-react';
import React from 'react'

export default function ThemeChanger() {

    const { theme, setTheme } = useTheme();

    return (
        <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className={`cursor-pointer transition-all ease-in duration-200 hover:text-accent text-text dark:text-dark-text`}>
            {theme === 'dark' ? <Sun /> : <Moon />}
        </div>
    )
}
