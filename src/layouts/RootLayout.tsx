import { Outlet, ScrollRestoration } from 'react-router-dom'

//shared components
import Header from '../components/shared/navbar/Header'

export default function RootLayout() {
  return (
    <>
        <ScrollRestoration />
        <Header />
        <main className='px-[24px]'>
            <Outlet />
        </main>
    </>
  )
}
