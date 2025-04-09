import { useTheme } from '@/context/ThemeContext'
import IconMoon from '@/svg/IconMoon'
import IconSun from '@/svg/IconSun'
import React from 'react'

export default function ThemeChanger() {

    const { theme, setTheme } = useTheme();

    return (
        <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className={`cursor-pointer transition-all ease-in duration-200 text-text dark:text-dark-text`}>
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
        </div>
    )
}
