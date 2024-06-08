import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

//utils
import fetchQuiz from "../../lib/fetchQuiz";

//components
import Grid from "../../components/shared/Grid";
import Results from "../../components/quiz/Results";
import Question from "../../components/quiz/Question";
import AnswerCard from "../../components/quiz/AnswerCard";
import CategoryNotFound from "../../components/quiz/CategoryNotFound";

//variant
import { AnimatePresence } from "framer-motion";
import { transition, variants } from "../../lib/variants";

//tye
type Answer = {
  tag: string,
  title: string
}

//type
type Question = {
  question: string,
  possibleAnswers: Answer[],
  correctAnswer: Answer
}

export default function Quiz() {
  const location = useLocation()
  const path = location.pathname

  //gets quiz data from selected category
  const quizData = fetchQuiz(path)

  //state hooks
  const [questionStep, setQuestionStep] = useState<number>(0)
  const [quizScore, setQuizScore] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null)
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null)
  const [showResults, setShowResults] = useState<boolean>(false)
  const [showSubmissionErrorMsg, setShowSubmissionErrorMsg] = useState<boolean>(false)
  
  
  const increaseQuizScore = () => {
    setQuizScore(prevScore => prevScore + 1)
  }
    
  const handleAnswerSelection = (selectedAnswer: Answer) => {
    hideSubmissionErrorMsg()
    setSelectedAnswer(selectedAnswer)
  }
  
  const hideSubmissionErrorMsg = () => {
    setShowSubmissionErrorMsg(false)
  }
  
  const displaySubmissionErrorMsg = () => {
    setShowSubmissionErrorMsg(true)
  }
  
  const submitAnswer = (question: Question) => {
    if (selectedAnswer) {
      const correctAnswer = question.correctAnswer.title
        
      if (correctAnswer === selectedAnswer?.title)  {
        increaseQuizScore()
        setIsAnswerCorrect(true)
      } else {
        setIsAnswerCorrect(false)
      }
        
      setIsAnswerSubmitted(true)
      
    } else {
      displaySubmissionErrorMsg()
    }
  }
        
  //reset hooks
  const goToNextQuestion = () => {
    setQuestionStep(prevStep => prevStep + 1)
    setSelectedAnswer(null)
    setIsAnswerSubmitted(false)
    setIsAnswerCorrect(null)
    hideSubmissionErrorMsg()
  }
    
  //renderes 404 page when category is not found
  if (quizData.length === 0) return <CategoryNotFound />

  //display results on request
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
                  <AnimatePresence>
                    <ul className="grid gap-3 sm:gap-4 md:gap-6">
                      {question.possibleAnswers.map(possibleAnswer => (
                        <motion.li 
                          key={possibleAnswer.title} 
                          className={`${isAnswerSubmitted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                          variants={variants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={transition}
                        >
                          <AnswerCard 
                            possibleAnswer={possibleAnswer}
                            selectedAnswer={selectedAnswer}
                            question={question}
                            isAnswerSubmitted={isAnswerSubmitted}
                            isAnswerCorrect={isAnswerCorrect}
                            handleAnswerSelection={handleAnswerSelection}
                          />
                        </motion.li>
                      ))}
                    </ul>
                  </AnimatePresence>

                  <div className="grid gap-3 sm:gap-5 md:gap-8">
                    {
                      isAnswerSubmitted ?
                        quizData.length === questionStep+1 ?
                          <button 
                            type="button"
                            className="btn-primary"
                            onClick={() => setShowResults(true)}
                          >
                            Complete Quiz
                          </button>
                        :
                          <button 
                            type="button"
                            className="btn-primary"
                            onClick={() => goToNextQuestion()}
                          >
                            Next Question
                          </button>
                      :
                        <button 
                          type="button"
                          className="btn-primary"
                          onClick={() => submitAnswer(question)}
                        >
                          Submit Answer
                        </button>
                    }
                    {
                      showSubmissionErrorMsg &&
                      <div className="flex gap-2 justify-center items-center">
                        <figure>
                        <img
                          src='/assets/wrong.svg'
                          alt=""
                        />
                        </figure>
                        <p className="text-red text-lg sm:text-xl lg:text-2xl">Please select an answer</p>
                      </div>
                    }
                  </div>
                </section>
              </Grid>
            </li>
          ))}
        </ul>
  )
}
