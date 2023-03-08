import { useEffect, useState } from "react"

type Theme = 'light' | 'dark'

export default function useTheme() {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    const [theme, setTheme] = useState<Theme | null>(storedTheme)
    const [defaultTheme, setDefaultTheme] = useState<Theme | null>(null)
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    
    useEffect(() => {
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', theme)
        } else if (theme === 'light') {
            document.body.setAttribute('data-theme', 'light')
            localStorage.setItem('theme', theme)
        } else if (mq.matches) {
            document.body.setAttribute('data-theme', 'dark')
            setDefaultTheme('dark')
        } else {
            document.body.setAttribute('data-theme', 'light')
            setDefaultTheme('light')
        }
    }, [theme])

    useEffect(() => {
        function changeDefaultTheme() {
            if (!theme && mq.matches) {
                document.body.setAttribute('data-theme', 'dark')
                setDefaultTheme('dark')
            } else if (!theme && !mq.matches) {
                document.body.setAttribute('data-theme', 'light')
                setDefaultTheme('light')
            }
        }
        mq.addEventListener('change', changeDefaultTheme)

        return () => { mq.removeEventListener('change', changeDefaultTheme) }
    }, [])

    return { theme, setTheme, defaultTheme } as const
}