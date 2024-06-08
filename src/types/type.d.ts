type Category = {
    title: string,
    icon: string,
    color: string,
}

type Answer = {
    tag: string,
    title: string
}

type Question = {
    question: string,
    possibleAnswers: Answer[],
    correctAnswer: Answer
}