import categories from '../../public/data/categories.json'

type Category = {
    title: string,
    icon: string,
    color: string,
}

export default function getCategory(categoryTitle: string) {
    return categories.find((category: Category) => categoryTitle.toLowerCase() ===  ('/'+category.title).toLowerCase())
}
