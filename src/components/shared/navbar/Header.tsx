import { useState, useEffect } from "react"

//components
import ColorTheme from "./ColorTheme";

//utils
import getSystemTheme from "../../../lib/getSystenTheme";


export default function Header() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('quizAppTheme');
        return storedTheme ? storedTheme : getSystemTheme();
    })

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light'
            localStorage.setItem('quizAppTheme', newTheme);
            return newTheme
        })
    }

    useEffect(() => {
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
          if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
          }
        };
    
        const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkMediaQuery.addEventListener('change', handleSystemThemeChange);
    
        return () => {
          darkMediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, []);
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

  return (
    <header className="py-[26px]">
        <div className="flex justify-between items-center gap-4 px-[24px]">
            <figure></figure>

            <ColorTheme 
                theme={theme}
                toggleTheme={toggleTheme}
            />
        </div>
    </header>
  )
}
