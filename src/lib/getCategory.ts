import categories from '../../public/data/Categories.json'

export default function getCategory(categoryTitle: string) {
    return categories.find(category => categoryTitle.toLowerCase() ===  ('/'+category.title).toLowerCase())
}
