import { useRef } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Work from '../components/Work'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Portfolio() {
  const mainRef = useRef(null)
  return (
    <>
      <Nav />
      <Sidebar />
      <main ref={mainRef}>
        <Hero />
        <Work mainRef={mainRef} />
        <About />
        <Contact />
      </main>
    </>
  )
}
