
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './assets/Pages/About'
import Blog from './assets/Pages/Blog'
import Help from './assets/Pages/Help'
import HomePage from './assets/Pages/HomePage'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import NotFound from './Components/NotFound/NotFound'

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element ={<HomePage />} />
        <Route path='/about' element ={<About />} />
        <Route path='/blog' element ={<Blog />} />
        <Route path='/help' element ={<Help />} />
        <Route path='*' element ={<NotFound />} />
      </Route>
    )
  )

  return (
    <>
      <Navbar />
      
      {/* <About />
      <Blog />
      <Help /> */}
      <RouterProvider router={myRoute} />
      <Footer />
    </>
  )
}

export default App
