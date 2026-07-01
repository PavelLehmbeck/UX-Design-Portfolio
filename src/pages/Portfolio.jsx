import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import Nav from '../components/Nav'
// import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Beyond from '../components/Beyond'
import Contact from '../components/Contact'

// Scroll distance (in vh) for each phase of the pinned Hero/About timeline.
const HOLD_HERO_VH = 50
const CROSSFADE_VH = 100
const HOLD_ABOUT_VH = 50
const EXIT_ABOUT_VH = 100
const TOTAL_VH = HOLD_HERO_VH + CROSSFADE_VH + HOLD_ABOUT_VH + EXIT_ABOUT_VH

const crossfadeStart = HOLD_HERO_VH / TOTAL_VH
const crossfadeEnd = (HOLD_HERO_VH + CROSSFADE_VH) / TOTAL_VH
const exitStart = (HOLD_HERO_VH + CROSSFADE_VH + HOLD_ABOUT_VH) / TOTAL_VH

export default function Portfolio() {
  const mainRef = useRef(null)
  const transitionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: transitionRef,
    container: mainRef,
    offset: ['start start', 'end start'],
  })

  const heroOpacity = useTransform(scrollYProgress, [crossfadeStart, crossfadeEnd], [1, 0])
  const heroBlur = useTransform(scrollYProgress, [crossfadeStart, crossfadeEnd], [0, 15])
  const aboutEntrance = useTransform(scrollYProgress, [crossfadeStart, crossfadeEnd], [0, 1])
  const aboutExit = useTransform(scrollYProgress, [exitStart, 1], [1, 0])
  const aboutOpacity = useTransform([aboutEntrance, aboutExit], ([entrance, exit]) => entrance * exit)
  const aboutScale = useTransform(scrollYProgress, [exitStart, 1], [1, 0.9])
  const aboutY = useTransform(scrollYProgress, [crossfadeStart, crossfadeEnd], [16, 0])

  return (
    <>
      <Nav />
      {/* <Sidebar /> */}
      <main ref={mainRef}>
        <div ref={transitionRef} style={styles.transitionWrapper}>
          <div id="hero1" style={styles.heroAnchor} />
          <div id="about" style={styles.aboutAnchor} />
          <div style={styles.pinnedFrame}>
            <Hero opacity={heroOpacity} blur={heroBlur} />
            <About opacity={aboutOpacity} scale={aboutScale} y={aboutY} />
          </div>
        </div>
        <Work mainRef={mainRef} />
        <Beyond />
        <Contact />
      </main>
    </>
  )
}

const styles = {
  transitionWrapper: {
    position: 'relative',
    height: `${TOTAL_VH}vh`,
  },
  heroAnchor: {
    position: 'absolute',
    top: 0,
    height: `${HOLD_HERO_VH}vh`,
    width: '1px',
    pointerEvents: 'none',
  },
  aboutAnchor: {
    position: 'absolute',
    top: `${HOLD_HERO_VH + CROSSFADE_VH}vh`,
    height: `${HOLD_ABOUT_VH + EXIT_ABOUT_VH}vh`,
    width: '1px',
    pointerEvents: 'none',
  },
  pinnedFrame: {
    position: 'sticky',
    top: 0,
    height: '100vh',
    overflow: 'hidden',
  },
}
