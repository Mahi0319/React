import { useState } from 'react'
import './App.css'
import Hero from './Components/Me'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Certifications from './Components/Certifications'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Certifications/>
    </>
  )
}

export default App
