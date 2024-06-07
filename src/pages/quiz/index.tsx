import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import fetchQuiz from "../../lib/fetchQuiz";
import Grid from "../../components/shared/Grid";
import Results from "../../components/quiz/Results";
import Question from "../../components/quiz/Question";
import AnswerCard from "../../components/quiz/AnswerCard";

type Answer = {
  tag: string,
  title: string
}

type Question = {
  question: string,
  possibleAnswers: Answer[],
  correctAnswer: Answer
}

export default function Quiz() {
  const location = useLocation()
  const path = location.pathname

  const quizData = fetchQuiz(path)

  const [questionStep, setQuestionStep] = useState<number>(0)
  const [quizScore, setQuizScore] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const [showResults, setShowResults] = useState<boolean>(false)

  const increaseQuizScore = () => {
    setQuizScore(prevScore => prevScore + 1)
  }

  const handleAnswerSelection = (selectedAnswer: Answer) => {
    console.log(selectedAnswer)
    setSelectedAnswer(selectedAnswer)
  }
  
  const submitAnswer = (question: Question) => {
    const correctAnswer = question.correctAnswer.title
    if (correctAnswer === selectedAnswer?.title)  {
      increaseQuizScore()
      setIsAnswerCorrect(true)
    } else setIsAnswerCorrect(false)
    setIsAnswerSubmitted(true)
  }
  
  const goToNextQuestion = () => {
    setQuestionStep(prevStep => prevStep + 1)
    setSelectedAnswer(null)
    setIsAnswerSubmitted(false)
    setIsAnswerCorrect(null)
  }

  useEffect(() => {
    console.log("quizScore:::", quizScore)
  }, [quizScore])

  if (showResults) return <Results quizScore={quizScore} quizLength={quizData.length} />
  
  return (
        <ul>
          {quizData.map((question: Question, index: number) => (
            questionStep === index &&
            <li key={question.question} >
              <Grid>
                <section className="flex flex-col gap-6 lg:gap-[160px]">
                  <Question 
                    questionStep={questionStep}
                    quizLength={quizData.length}
                    question={question.question}
                  />
                </section>

                <section>
                  <ul className="grid gap-3 sm:gap-4 md:gap-6">
                    {question.possibleAnswers.map(possibleAnswer => (
                      <li 
                        key={possibleAnswer.title} 
                        className={`${isAnswerSubmitted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                        <AnswerCard 
                          possibleAnswer={possibleAnswer}
                          selectedAnswer={selectedAnswer}
                          question={question}
                          isAnswerSubmitted={isAnswerSubmitted}
                          isAnswerCorrect={isAnswerCorrect}
                          handleAnswerSelection={handleAnswerSelection}

                        />
                      </li>
                    ))}
                  </ul>
                  <div>
                    {
                      isAnswerSubmitted ?
                        quizData.length === questionStep+1 ?
                          <button 
                            type="button"
                            className="p-3 sm:p-4 md:p-6 lg:p-[32px] mt-[32px] font-medium bg-primaryPurple w-full rounded-[12px] text-lg sm:text-[24px] hover:bg-[#D394FA] transition-all duration-300 text-white"
                            onClick={() => setShowResults(true)}
                          >
                            Complete Quiz
                          </button>
                        :
                          <button 
                            type="button"
                            className="p-3 sm:p-4 md:p-6 lg:p-[32px] mt-[32px] font-medium bg-primaryPurple w-full rounded-[12px] text-lg sm:text-[24px] hover:bg-[#D394FA] transition-all duration-300 text-white"
                            onClick={() => goToNextQuestion()}
                          >
                            Next Question
                          </button>
                      :
                        <button 
                          type="button"
                          className="p-3 sm:p-4 md:p-6 lg:p-[32px] mt-[32px] font-medium bg-primaryPurple w-full rounded-[12px] text-lg sm:text-[24px] hover:bg-[#D394FA] transition-all duration-300 text-white"
                          onClick={() => submitAnswer(question)}
                        >
                          Submit Answer
                        </button>
                    }
                  </div>
                </section>
              </Grid>
            </li>
          ))}
        </ul>
  )
}
