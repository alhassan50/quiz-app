export default async function getCategories() {
    const response = await fetch('/data/Categories.json')
    return await response.json()
}
