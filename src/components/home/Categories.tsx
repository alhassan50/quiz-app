import { Link } from "react-router-dom"

//utils
import getCategories from "../../lib/getCategories"

export default function Categories() {

    const categories = getCategories()

    return (
        <div>
            <ul className="grid gap-3 sm:gap-4 md:gap-6">
                {
                    categories.map(category => (
                        <li 
                            key={category.title}
                            className="hover:-translate-y-1 transition-all duration-500"
                        >
                            <Link to={`/${category.title}`} >
                                <div className="flex gap-4 sm:gap-8 items-center p-3  sm:p-4 md:p-5 category-card rounded-[12px]">
                                    <figure 
                                        className={`p-2 w-10 h-10 sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] rounded-[6px]`}
                                        style={{ backgroundColor: category.color }}
                                    >
                                        <img 
                                            src={category.icon}
                                            alt={category.title}
                                            className="w-full h-full"
                                        />
                                    </figure>
                                    <h3 className="text-lg sm:text-[24px] md:text-[28px] font-medium">
                                        {category.title}
                                    </h3>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            {/* <button className="p-3 sm:p-4 md:p-[32px] mt-[32px] bg-primaryPurple w-full rounded-[12px] text-lg sm:text-[24px]">
                Start Quiz
            </button> */}
        </div>
    )
}
