import { Link, useLocation } from "react-router-dom"

export default function CategoryNotFound() {
    const location = useLocation()
    const pathname = location.pathname.split('/')[1]
  return (
    <div className="flex justify-center items-center h-full">
        <div>
            <div className="bg-cardBg p-10 sm:p-16 md:p-20 rounded-[12px] text-center">
                <h1 className="text-[40px] sm:text-[52px] md:text-[58px] lg:text-[64px] font-bold">
                    Ooops :(
                </h1>

                <p className="font-normal mt-3 text-xl">
                    Quiz for <span className="font-semibold">{pathname}</span> was not found.
                </p>
            </div>
            <Link to={'/'}>
                <button
                    type="button"
                    className="p-3 sm:p-4 md:p-6 lg:p-[32px] mt-[32px] font-medium bg-primaryPurple w-full rounded-[12px] text-lg sm:text-[24px] hover:bg-[#D394FA] transition-all duration-300 text-white"
                >
                    Go Home
                </button>
            </Link>
        </div>
    </div>
  )
}
