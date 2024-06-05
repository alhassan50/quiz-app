export default async function fetchQuiz(categoryTitle: string) {
    if (!categoryTitle || typeof(categoryTitle) !== "string") throw new Error('Invalid category')
    const response = await fetch(`/data${(categoryTitle).toLowerCase()}.json`)
    return await response.json()
}
