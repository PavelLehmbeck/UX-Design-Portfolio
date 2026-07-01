import { motion } from 'framer-motion'

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
      style={styles.nav}
    >
      <span style={styles.logo}>Pavel Lehmbeck</span>
      <div style={styles.links}>
        <a href="#work" style={styles.link}>Work</a>
        <a href="#about" style={styles.link}>About</a>
        <a href="#beyond" style={styles.link}>Beyond</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </motion.nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 64px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: 'transparent',
  },
  logo: {
    fontWeight: 700,
    fontSize: '1rem',
    color: '#fff',
  },
  links: {
    display: 'flex',
    gap: '32px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 700,
    fontSize: '0.9rem',
  },
}
