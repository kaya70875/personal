'use client';

import { createContext, useContext, useEffect, useState } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextProps {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme');
        }

        return 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useContext must be used within a ThemeContextProvider');
    }

    return context;
}