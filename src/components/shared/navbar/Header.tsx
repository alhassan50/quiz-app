import { useEffect } from "react"
import { useLocation } from "react-router-dom";

//components
import ColorTheme from "./ColorTheme";

//utils
import getCategory from "../../../lib/getCategory";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../../slices/categorySlice";
import Logo from "./Logo";


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
                <Logo selectedCategory={selectedCategory} />
              }
            </figure>

            <ColorTheme />
        </div>
    </header>
  )
}
