import QuizProgressTracker from "./QuizProgressTracker"

function Question({questionStep, quizLength, question}: {questionStep: number, quizLength:  number, question: string}) {
  
  console.log(((questionStep+1)/quizLength)*100);
  
  return (
    <div className="flex flex-col gap-4 lg:gap-[80px]">
        <div className="flex flex-col gap-4">
          <p className="text-sm sm:text-xl italic text-[#ABC1E1]">
              Question {questionStep + 1} of {quizLength}
          </p>

          <h2 className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] font-semibold">
              {question}
          </h2>
        </div>

        <QuizProgressTracker 
            length={`${((questionStep+1)/quizLength)*100}%`}
        />
    </div>
  )
}

export default Question