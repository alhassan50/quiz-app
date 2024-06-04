import { useEffect } from "react"

//components
import Categories from "../../components/home/Categories"
import Grid from "../../components/shared/Grid"

//redux
import { useDispatch, useSelector } from "react-redux"
import { getSelectedCategory, selectCategory } from "../../slices/categorySlice"

export default function Home() {
  const dispatch = useDispatch()
  const selectedCategory = useSelector(getSelectedCategory)

  //
  useEffect(() => {
    if (selectedCategory !== null) {
      console.log('not null')
      console.log(selectedCategory)
      dispatch(selectCategory(null))
    }
  }, [selectedCategory, dispatch])
  return (
    <Grid>
      <div className="flex flex-col gap-4">
        <h1 className="text-[40px] sm:text-[52px] md:text-[58px] lg:text-[64px] font-bold">
          <span className="font-light">Welcome to the </span>
          <br />
          Frontend Quiz!
        </h1>
    
        <p className="sm:text-xl italic">
          Pick a subject to get started.
        </p>
      </div>
      <Categories />
    </Grid>
  )
}
