import { Outlet, ScrollRestoration } from 'react-router-dom'

export default function RootLayout() {
  return (
    <main>
        <ScrollRestoration />
        NAVABR
        <Outlet />
        FOOTER
    </main>
  )
}
