import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" style={styles.section}>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={styles.heading}
      >
        UX Designer <br />crafting meaningful experiences
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={styles.sub}
      >
        I design digital products that are intuitive, accessible, and delightful.
      </motion.p>
      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        style={styles.cta}
      >
        View my work
      </motion.a>
    </section>
  )
}

const styles = {
  section: {
    height: '100vh',
    scrollSnapAlign: 'start',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 48px',
    maxWidth: '900px',
  },
  heading: {
    fontSize: 'clamp(2.5rem, 6vw, 5rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: '24px',
    color: '#111',
  },
  sub: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '40px',
    maxWidth: '500px',
  },
  cta: {
    display: 'inline-block',
    padding: '14px 32px',
    background: '#111',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 500,
    width: 'fit-content',
  },
}
