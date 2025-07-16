import {useEffect} from "react"
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/all"


import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CustomCursor from './components/CustomCursor'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import ProgressBar from "./components/ProgressBar"


function App() {

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)


    // Refresh ScrollTrigger 

    ScrollTrigger.refresh()

    // Clean up Scroll Trigger 
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger)=>trigger.kill())
    }
  }, [])
  
 

  return (
    <>
   <Header/>
    <HeroSection/>
    <CustomCursor/>
    <AboutSection/>
    <ProjectsSection/>
    <ContactSection/>
    <Footer/>
    <ProgressBar/>
    </>
  )
}

export default App
