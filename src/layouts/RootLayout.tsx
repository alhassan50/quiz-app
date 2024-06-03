import { Outlet, ScrollRestoration } from 'react-router-dom'

//shared components
import Header from '../components/shared/navbar/Header'

export default function RootLayout() {
  return (
    <>
        <ScrollRestoration />
        <Header />
        <main className='max-w-[1440px] mx-auto px-[3.2%] sm:px-[5%]'>
            <div className='bg bg-Ima'></div>
            <Outlet />
        </main>
    </>
  )
}
