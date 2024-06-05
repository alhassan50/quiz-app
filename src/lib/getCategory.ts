import categories from '../../public/data/categories.json'

export default function getCategory(categoryTitle: string) {
    return categories.find(category => categoryTitle.toLowerCase() ===  ('/'+category.title).toLowerCase())
}
