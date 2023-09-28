import { createContext, useState, useEffect, ReactNode } from 'react'

interface ThemeContextProps {
    theme: string
    handleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>(null!)

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState('light')
    
    useEffect(() => {
        const temaSalvo = localStorage.getItem('theme')
        if (temaSalvo) {
            return setTheme(temaSalvo)
        }
    }, [])
    
    function handleTheme() {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
