//components
import Categories from "../../components/home/Categories"
import Grid from "../../components/shared/Grid"

export default function Home() {
  return (
    <Grid>
      <div className="flex flex-col gap-4">
        <h1 className="">
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
