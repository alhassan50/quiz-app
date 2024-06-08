import { useNavigate } from "react-router-dom";
import Grid from "../../components/shared/Grid";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../slices/categorySlice";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";


export default function Results({quizScore, quizLength} : {quizScore: number, quizLength: number}) {
    const [windowSize, setWindowSize] = useState<{width: number; height: number;}>({
        width: window.innerWidth,
        height: window.innerHeight
    })
  const navigate = useNavigate()
  const selectedCategory = useSelector(getSelectedCategory)
  
  useEffect(()=>{
    const handleWindowResize = () => {
        setWindowSize(prevDimensions => {
            return {
                ...prevDimensions,
                width: window.innerWidth,
                height: window.innerHeight
            }
        })
    }

    window.addEventListener('resize', () => {
        handleWindowResize()
    })

    return () => {
        window.removeEventListener('resize', () => {
            handleWindowResize()
        })
    };
  }, [])
  
  const playAgain = () => {
    navigate('/')
  }
  
  return (
    <>
        {
            quizScore >= 6 &&
            <Confetti 
                width={windowSize.width}
                height={windowSize.height}
            />
        }
        <Grid>
            <section className="flex flex-col gap-6 lg:gap-[160px]">
            <div className="flex flex-col gap-4">
                <h1 className="">
                <span className="font-light">Quiz completed </span>
                <br />
                You scored...
                </h1>
            </div>
            </section>

            <section>
                <div className="bg-cardBg p-12 rounded-3xl flex flex-col justify-center items-center">

                {
                    selectedCategory && 
                    <div className="flex gap-4 sm:gap-8 items-center">
                        <figure 
                            className={`p-2 w-10 h-10 sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] rounded-[6px]`}
                            style={{ backgroundColor: selectedCategory.color }}
                        >
                            <img 
                                src={selectedCategory.icon}
                                alt={selectedCategory.title}
                                className="w-full h-full"
                            />
                        </figure>
                        <h3 className="">
                            {selectedCategory.title}
                        </h3>
                    </div>
                }

                    <h1 className="text-[88px] sm:text-[100px] md:text-[120px] lg:text-[144px] font-bold">
                    {quizScore}
                    </h1>

                    <p className="text-center text-lg sm:text-xl md:text-2xl text-lightNavy">out of {quizLength}</p>
                </div>
                <button 
                    type="button"
                    className="btn-primary"
                    onClick={() => playAgain()}
                >
                    Play Again
                </button>
            </section>
        </Grid>
    </>
  )
}
