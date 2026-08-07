import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
function App() {
  return (
    <div >
      {/* <BrowserChrome /> */}
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App