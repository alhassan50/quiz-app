import { Suspense, useEffect, useState } from "react";
import { Await, useLocation } from "react-router-dom";
import fetchQuiz from "../../lib/fetchQuiz";
import Grid from "../../components/shared/Grid";

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
  const [questionStep, setQuestionStep] = useState<number>(0)
  const [quizScore, setQuizScore] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const location = useLocation()
  
  const path = location.pathname
  const quizPromise = fetchQuiz(path)

  const increaseQuizScore = () => {
    setQuizScore(prevScore => prevScore + 1)
  }

  const handleAnswerSelection = (question: Question, selectedAnswer: Answer) => {
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
  
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Await resolve={quizPromise}>
        {(quizData) => (
          <ul>
            {quizData.map((question: Question, index: number) => (
              questionStep === index &&
              <li key={question.question} >
                <Grid>
                  <section className="flex flex-col gap-6 lg:gap-[160px]">
                    <div className="flex flex-col gap-4">
                      <p className="text-sm sm:text-xl italic text-[#ABC1E1]">
                        Question {questionStep + 1} of {quizData.length}
                      </p>

                      <h2 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] font-semibold">
                        {question.question}
                      </h2>
                    </div>

                    {/* progress tracker */}
                    <div className="progress_tracker w-full p-1 rounded-[50px]">
                      <div className={`h-2 bg-primaryPurple rounded-[50px] w-[${((index+1)/quizData.length)*100}%)]`}></div>
                    </div>
                  </section>

                  <section>
                    <ul className="grid gap-3 sm:gap-4 md:gap-6">
                      {question.possibleAnswers.map(possibleAnswer => (
                        <li 
                          key={possibleAnswer.title} 
                          className={`${isAnswerSubmitted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                          <div 
                            onClick={() => handleAnswerSelection(question, possibleAnswer)}
                            className={`answer-card group border ${selectedAnswer?.title === possibleAnswer.title ? 'border-primaryPurple' : 'border-[var(--card-background-color)]'} flex gap-4 sm:gap-8 items-center p-3  sm:p-4 md:p-5 rounded-[12px] ${isAnswerSubmitted ? 'pointer-events-none' : 'cursor-pointer'}
                            ${isAnswerSubmitted ? (possibleAnswer.title === selectedAnswer?.title) ? isAnswerCorrect ? 'border-[#26D782]' : 'border-[#EE5454]' : '' : ''}
                            transition-all duration-300`}
                          >
                            <div 
                              className={`p-2 w-10 h-10 bg-[#F4F6FA] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] rounded-[6px] flex justify-center items-center ${selectedAnswer?.title === possibleAnswer.title && 'bg-primaryPurple'} 
                              ${isAnswerSubmitted ? (possibleAnswer.title === selectedAnswer?.title) ? isAnswerCorrect ? 'bg-[#26D782]' : 'bg-[#EE5454]' : '' : ''}`}
                            >
                              <h3 className={`text-lg group-hover:text-primaryPurple ${selectedAnswer?.title === possibleAnswer.title && 'text-white group-hover:text-white'} sm:text-[24px] md:text-[28px]  text-[#626C7F] font-medium`}>{possibleAnswer.tag}</h3>
                            </div>
                            <h3 className="text-lg sm:text-[24px] md:text-[28px] font-medium">
                              {possibleAnswer.title}
                            </h3>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div>
                      {
                        isAnswerSubmitted ?
                          <button 
                            type="button"
                            className="p-3 sm:p-4 md:p-6 lg:p-[32px] mt-[32px] font-medium bg-primaryPurple w-full rounded-[12px] text-lg sm:text-[24px] hover:bg-[#D394FA] transition-all duration-300"
                            onClick={() => goToNextQuestion()}
                          >
                            Next Question
                          </button>
                        :
                          <button 
                            type="button"
                            className="p-3 sm:p-4 md:p-6 lg:p-[32px] mt-[32px] font-medium bg-primaryPurple w-full rounded-[12px] text-lg sm:text-[24px] hover:bg-[#D394FA] transition-all duration-300"
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
        )}
      </Await>
    </Suspense>
  )
}
