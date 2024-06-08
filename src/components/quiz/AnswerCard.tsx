//type 
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

//type 
type Props = {
  question: Question,
  possibleAnswer: Answer, 
  selectedAnswer: Answer | null, 
  isAnswerCorrect: boolean | null, 
  isAnswerSubmitted: boolean, 
  handleAnswerSelection: (selectedAnswer: Answer) => void
}

export default function AnswerCard({
  possibleAnswer, 
  isAnswerSubmitted, 
  selectedAnswer, 
  isAnswerCorrect, 
  question,
  handleAnswerSelection
}: Props) {
  return (
    <div 
        onClick={() => handleAnswerSelection(possibleAnswer)}
        className={`answer-card group border ${!isAnswerSubmitted && (selectedAnswer?.title === possibleAnswer.title ? 'border-primaryPurple' : 'border-cardBg')} grid grid-cols-[40px,1fr,24px] md:grid-cols-[56px,1fr,30px] lg:grid-cols-[60px,1fr,40px] gap-4 sm:gap-8 items-center p-3  sm:p-4 md:p-5 rounded-[12px] ${isAnswerSubmitted ? 'pointer-events-none' : 'cursor-pointer'} ${isAnswerSubmitted ? (possibleAnswer.title === selectedAnswer?.title) ? isAnswerCorrect ? 'border-[#26D782]' : 'border-[#EE5454]' : (selectedAnswer?.title === possibleAnswer.title ? 'border-primaryPurple' : 'border-cardBg') : ''} `}
    >
        <div 
        className={`p-2 w-10 h-10 sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] rounded-[6px] flex justify-center items-center ${isAnswerSubmitted ? selectedAnswer?.title === possibleAnswer.title ? isAnswerCorrect ? 'bg-[#26D782]' : 'bg-[#EE5454]' : 'bg-[#F4F6FA]' : selectedAnswer?.title === possibleAnswer.title ? 'bg-primaryPurple' : 'bg-[#F4F6FA]'}`}
        >
        <h3 className={`text-lg group-hover:text-primaryPurple ${selectedAnswer?.title === possibleAnswer.title && 'text-white group-hover:text-white'} sm:text-[24px] md:text-[28px]  text-[#626C7F] font-medium`}>{possibleAnswer.tag}</h3>
        </div>
        <h3 className="text-lg sm:text-[24px] md:text-[28px] font-medium">
        {possibleAnswer.title}
        </h3>

        <figure className="content-end">
        {
            isAnswerSubmitted &&
            <img
            src={possibleAnswer.title === question.correctAnswer.title ? '/assets/correct.svg' : (possibleAnswer.title === selectedAnswer?.title) && !isAnswerCorrect ? '/assets/wrong.svg' : ''}
            alt=""
            />
        }
        </figure>
    </div>
  )
}
