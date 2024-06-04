import categories from '../../public/data/Categories.json'

export default function getCategories(categoryTitle: string) {
    return categories.find(category => category.title === categoryTitle)
}
