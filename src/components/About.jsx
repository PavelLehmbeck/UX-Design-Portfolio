import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { heroPhrases } from '../data/heroPhrases'
import profileImg from '../assets/profileimg.jpg'

export default function About({ opacity, scale, y }) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const nextPhrase = () => setPhraseIndex(i => (i + 1) % heroPhrases.length)

  return (
    <motion.section style={{ ...styles.section, opacity, scale, y }}>
      <motion.img
        src={profileImg}
        alt="Pavel Lehmbeck"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={styles.photo}
      />
      <div style={styles.textColumn}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={styles.heading}
        >
          Hi. I am a UX Designer <br />that loves
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
          <br />
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
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={styles.bio}
        >
          Placeholder text goes here. This is where a short continuing bio about my
          background, approach, and experience will live.
        </motion.p>
      </div>
    </motion.section>
  )
}

const styles = {
  section: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '48px',
    padding: '0 64px',
    maxWidth: '900px',
  },
  photo: {
    width: '200px',
    aspectRatio: '9 / 16',
    objectFit: 'cover',
    borderRadius: '12px',
    flexShrink: 0,
    display: 'block',
  },
  textColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  heading: {
    fontSize: 'clamp(1rem, 3vw, 2rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: '24px',
    color: '#fff',
    textAlign: 'right',
  },
  phrase: {
    display: 'inline-block',
    color: '#90EE90',
  },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    verticalAlign: 'middle',
    marginLeft: '16px',
    padding: '6px 16px',
    fontSize: '0.85rem',
    background: 'transparent',
    border: '1px solid #888',
    color: '#888',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 500,
    width: 'fit-content',
  },
  bio: {
    marginTop: '24px',
    fontSize: 'clamp(1rem, 3vw, 2rem)',
    fontWeight: 700,
    color: '#fff',
    lineHeight: 1.1,
    maxWidth: '50vw',
    textAlign: 'right',
  },
}
