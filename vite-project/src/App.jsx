import { useState } from "react";
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import ProjectDetail from './Components/ProjectDetail/ProjectDetail'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      {!selectedProject ? (
        <Services onSelectProject={setSelectedProject} />
      ) : (
        <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
      )}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
