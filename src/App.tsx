import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

//pages
import Home from './pages/home'
import Quiz from './pages/quiz'

//layouts
import RootLayout from "./layouts/RootLayout"


//setup routes
const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path=":category" element={<Quiz />}/>
    </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App