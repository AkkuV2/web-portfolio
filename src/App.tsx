import { useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import ContactMe from './components/ContactMe'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#35343e', color: '#e8e8f0', fontFamily: 'Outfit, sans-serif' }}>

      {/* NAV */}
      <Navbar/>

      {/* HERO */}
      <Hero/>
     
      {/* SKILLS */}
      <Skills/>

      {/* ABOUT */}
      <AboutMe/>


      {/* PROJECTS */}
      <Projects/>

      {/* EXPERIENCE */}
      
      <Experience/>

      {/* EDUCATION */}
      <Education/>



      {/* CONTACT */}
      <ContactMe/>

      {/* FOOTER */}
      <footer
        className="py-8 text-center text-xs"
        style={{ borderTop: '1px solid rgba(79,154,185,0.12)', color: '#9898a8', fontFamily: 'JetBrains Mono, monospace' }}
      >
        <span>© 2026 Ali Erazo — built with React &amp; Tailwind CSS</span>
      </footer>
    </div>
  )
}
