import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";

//components
import ColorTheme from "./ColorTheme";

//utils
import getSystemTheme from "../../../lib/getSystenTheme";
import getCategory from "../../../lib/getCategory";


export default function Header() {
  const location = useLocation()
  const path = location.pathname

  //get quiz selected category
  const selectedCategory = getCategory(path)

  //init theme from from local storage or operating system
  const [theme, setTheme] = useState(() => {
      const storedTheme = localStorage.getItem('quizAppTheme');
      return storedTheme ? storedTheme : getSystemTheme();
  })

  //stores website preffered theme in local storage
  const toggleTheme = () => {
      setTheme(prevTheme => {
          const newTheme = prevTheme === 'light' ? 'dark' : 'light'
          localStorage.setItem('quizAppTheme', newTheme);
          return newTheme
      })
  }

  //listen for change in operating system theme
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
  
  //adds preffered theme as attribute to document
  useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <header className="py-[26px]">
        <div className="flex justify-between items-center gap-4 max-w-[1440px] mx-auto px-[6.5%]">
            <figure>
              {
                selectedCategory && 
                <div className="flex gap-4 sm:gap-8 items-center">
                    <figure 
                        className={`p-2 w-10 h-10 sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] rounded-[6px]`}
                        style={{ backgroundColor: selectedCategory.color }}
                    >
                        <img 
                            src={selectedCategory.icon}
                            alt={selectedCategory.title}
                            className="w-full h-full"
                        />
                    </figure>
                    <h3 className="text-lg sm:text-[24px] md:text-[28px] font-medium">
                        {selectedCategory.title}
                    </h3>
                </div>
              }
            </figure>

            <ColorTheme 
                theme={theme}
                toggleTheme={toggleTheme}
            />
        </div>
    </header>
  )
}
