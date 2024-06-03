import { Link } from "react-router-dom"
import getCategories from "../../lib/getCategories"

export default function Categories() {
    const categories = getCategories()
  return (
    <div>
        <ul className="grid gap-3">
            {
                categories.map(category => (
                    <li 
                        key={category.title}
                        className=""
                    >
                        <Link to={`/${category.title}`} className="flex gap-4 items-center p-3 category-card rounded-[12px]">
                            <figure 
                                className={`p-2 w-10 h-10 rounded-[6px]`}
                                style={{ backgroundColor: category.color }}
                            >
                                <img 
                                    src={category.icon}
                                    alt={category.title}
                                    className="w-full h-full"
                                />
                            </figure>
                            <h3 className="text-lg font-medium">
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
