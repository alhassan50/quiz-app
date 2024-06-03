import { Link } from "react-router-dom"
import getCategories from "../../lib/getCategories"

export default function Categories() {
    const categories = getCategories()
  return (
    <div>
        <ul className="grid gap-3 sm:gap-6">
            {
                categories.map(category => (
                    <li 
                        key={category.title}
                        className=""
                    >
                        <Link to={`/${category.title}`} className="flex gap-4 sm:gap-8 items-center p-3  sm:p-5 category-card rounded-[12px]">
                            <figure 
                                className={`p-2 w-10 h-10 sm:w-[56px] sm:h-[56px] rounded-[6px]`}
                                style={{ backgroundColor: category.color }}
                            >
                                <img 
                                    src={category.icon}
                                    alt={category.title}
                                    className="w-full h-full"
                                />
                            </figure>
                            <h3 className="text-lg sm:text-[28px] font-medium">
                                {category.title}
                            </h3>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
