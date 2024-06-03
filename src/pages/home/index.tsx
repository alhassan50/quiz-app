//components
import Categories from "../../components/home/Categories"

export default function Home() {
  return (
    <section className="py-[32px]">
      <div  className="grid gap-10">
        <div className="grid gap-4">
          <h1 className="text-[40px] font-bold">
            <span className="font-light">Welcome to the </span>
            <br />
            Frontend Quiz!
          </h1>

          <p className="c italic">
            Pick a subject to get started.
          </p>
        </div>
        <Categories />
      </div>
    </section>
  )
}
