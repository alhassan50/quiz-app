import { Suspense, useState } from "react";
import { Await, useLocation } from "react-router-dom";
import fetchQuiz from "../../lib/fetchQuiz";
import Grid from "../../components/shared/Grid";

type Qestion = {
  question: string,
  possible_answers: string[],
  answer: string
}

export default function Quiz() {
  const [questionStep, setQuestionStep] = useState(0)
  const location = useLocation()
  
  const path = location.pathname
  const quizPromise = fetchQuiz(path)
  
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Await resolve={quizPromise}>
        {(quizData) => (
          <ul>
            {quizData.map((question: Qestion, index: number) => (
              questionStep === index &&
              <li key={question.question}>
                <Grid>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      <p className="text-sm sm:text-xl italic text-[#ABC1E1]">
                        Question {questionStep + 1} of {quizData.length}
                      </p>

                      <h2 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] font-semibold">
                        {question.question}
                      </h2>
                    </div>

                    {/* progress tracker */}
                    <div className="w-full p-1 bg-[#3B4D66] rounded-[50px]">
                      <div className={`h-2 bg-primaryPurple rounded-[50px] w-[${((index+1)/quizData.length)*100}%]`}></div>
                    </div>
                  </div>
                  <ul>
                    {question.possible_answers.map(possible_answer => (
                      <li key={possible_answer}>
                        {possible_answer}
                      </li>
                    ))}
                  </ul>
                </Grid>
              </li>
            ))}
          </ul>
        )}
      </Await>
    </Suspense>
  )
}
