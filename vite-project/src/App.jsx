import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import ProjectDetail from './Components/ProjectDetail/ProjectDetail'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <ProjectDetail/>
      <Contact/>
    </div>
  )
}
export default App