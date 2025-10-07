
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import ProjectDetail from './Components/ProjectDetail/ProjectDetail'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <ProjectDetail/>
      <Contact/>
      <Footer/>
    </>
  )
}
export default App