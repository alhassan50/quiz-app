import htmlQuiz from '../data/html.json'
import cssQuiz  from '../data/css.json'
import javascriptQuiz  from '../data/javascript.json'
import accessibilityQuiz  from '../data/accessibility.json'

export default function fetchQuiz(categoryTitle: string) {
    if (!categoryTitle || typeof(categoryTitle) !== "string") throw new Error('Invalid category')
    if ((categoryTitle).toLowerCase() === '/html') return htmlQuiz
    if ((categoryTitle).toLowerCase() === '/css') return cssQuiz
    if ((categoryTitle).toLowerCase() === '/javascript') return javascriptQuiz
    if ((categoryTitle).toLowerCase() === '/accessibility') return accessibilityQuiz
    return []
}
