function QuizProgressTracker({length}: {length: string}) {
  return (
    <div className="progress_tracker w-full p-1 rounded-[50px]">
        <div 
            className={`h-2 bg-primaryPurple rounded-[50px]`}
            style={{width: length}}
        ></div>
    </div>
  )
}

export default QuizProgressTracker