import { useEffect, useState } from "react"

type Theme = 'light' | 'dark'

export default function useTheme() {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    const [theme, setTheme] = useState<Theme | null>(storedTheme)
    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        console.log(storedTheme, theme, mq.matches)
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', theme)
        } else if (theme === 'light') {
            document.body.setAttribute('data-theme', 'light')
            localStorage.setItem('theme', theme)
        } else if (mq.matches) {
            setTheme('dark')
            document.body.setAttribute('data-theme', 'dark')
        }
    }, [theme])

    return [theme, setTheme] as const
}