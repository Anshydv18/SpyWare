import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSwipper from './Components/HeroSwipper/HeroSwipper'
import Footer from './Components/Footer/Footer'
import Article from './Components/HomeArticles/Article'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSwipper/>
    <Article/>
    <Footer/>
    </>
  )
}

export default App
