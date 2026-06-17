import { useRef } from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Work from '../components/Work'
import About from '../components/About'
import Beyond from '../components/Beyond'
import Contact from '../components/Contact'

export default function Portfolio() {
  const mainRef = useRef(null)
  return (
    <>
      <Nav />
      <Sidebar />
      <main ref={mainRef}>
        <Hero mainRef={mainRef} />
        <Work mainRef={mainRef} />
        <About />
        <Beyond />
        <Contact />
      </main>
    </>
  )
}
