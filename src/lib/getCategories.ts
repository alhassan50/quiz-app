type Category = {
    title: string,
    icon: string,
    color: string,
}

export default async function getCategories(): Promise<Category[]> {
    const response = await fetch('/data/categories.json')
    return await response.json()
}
