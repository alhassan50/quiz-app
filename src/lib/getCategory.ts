import getCategories from './getCategories'

export default async function getCategory(categoryTitle: string) {
    const categories = await getCategories()
    return categories.find((category) => categoryTitle.toLowerCase() ===  ('/'+category.title).toLowerCase())
}
