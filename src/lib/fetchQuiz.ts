export default async function fetchQuiz({category}: {category: string}) {
    if (!category || typeof(category) !== "string") throw new Error('Invalid category')

    const response = await fetch(`/${category}.json`)
    return await response.json()
}
