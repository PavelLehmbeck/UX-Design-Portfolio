import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { heroPhrases } from '../data/heroPhrases'

export default function Hero({ mainRef }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    container: mainRef,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  const [phraseIndex, setPhraseIndex] = useState(0)
  const nextPhrase = () => setPhraseIndex(i => (i + 1) % heroPhrases.length)

  return (
    <section id="hero" ref={ref} style={styles.section}>
      <motion.div style={{ ...styles.sticky, opacity, scale }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={styles.heading}
        >
          UX Designer <br />that loves<br />
          <AnimatePresence mode="wait">
            <motion.span
              key={heroPhrases[phraseIndex]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              style={styles.phrase}
            >
              {heroPhrases[phraseIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>
        <motion.button
          type="button"
          onClick={nextPhrase}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={styles.cta}
        >
          Next
        </motion.button>
      </motion.div>
    </section>
  )
}

const styles = {
  section: {
    height: '100vh',
  },
  sticky: {
    position: 'sticky',
    top: 0,
    height: '100vh',
    zIndex: 0,
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 64px',
    maxWidth: '900px',
  },
  heading: {
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: '24px',
    color: '#111',
  },
  phrase: {
    display: 'inline-block',
    color: '#B82A2A',
  },
  cta: {
    display: 'inline-block',
    padding: '14px 32px',
    background: 'transparent',
    border: '1px solid #888',
    color: '#888',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 500,
    width: 'fit-content',
  },
}
