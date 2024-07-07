import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HeroSwipper from './Components/HeroSwipper/HeroSwipper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSwipper/>
    <h1 className=' bg-red-300'>hello guys</h1>
    
    </>
  )
}

export default App
