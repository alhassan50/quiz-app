export default async function getCategories() {
    const response = await fetch('/data/categories.json')
    return await response.json()
}
