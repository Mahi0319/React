import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
