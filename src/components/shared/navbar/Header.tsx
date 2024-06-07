import { useEffect } from "react"
import { useLocation } from "react-router-dom";

//components
import ColorTheme from "./ColorTheme";

//utils
import getCategory from "../../../lib/getCategory";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../../slices/categorySlice";


export default function Header() {
  const location = useLocation()
  const dispatch = useDispatch()

  const path = location.pathname

  //get quiz selected category
  const selectedCategory = getCategory(path)

  useEffect(() => {
    dispatch(selectCategory(selectedCategory))
  }, [dispatch, selectedCategory])

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

            <ColorTheme />
        </div>
    </header>
  )
}
