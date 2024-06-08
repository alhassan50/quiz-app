import { Link, useLocation } from "react-router-dom"

export default function CategoryNotFound() {
    const location = useLocation()
    const pathname = location.pathname.split('/')[1]
  return (
    <div className="flex justify-center items-center h-full">
        <div>
            <div className="bg-cardBg p-10 sm:p-16 md:p-20 rounded-[12px] text-center">
                <h1 className="">
                    Ooops :(
                </h1>

                <p className="font-normal mt-3 text-xl">
                    Quiz for <span className="font-semibold">{pathname}</span> was not found.
                </p>
            </div>
            <Link to={'/'}>
                <button
                    type="button"
                    className="btn-primary"
                >
                    Go Home
                </button>
            </Link>
        </div>
    </div>
  )
}
