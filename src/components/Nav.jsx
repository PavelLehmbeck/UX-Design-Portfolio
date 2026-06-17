import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return

    let lastY = 0

    const onScroll = () => {
      const y = main.scrollTop
      setHidden(y > lastY && y > 80)
      lastY = y
    }

    main.addEventListener('scroll', onScroll, { passive: true })
    return () => main.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: hidden ? '-100%' : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
      style={styles.nav}
    >
      <span style={styles.logo}>Pavel Lehmbeck</span>
      <div style={styles.links}>
        <a href="#work" style={styles.link}>Work</a>
        <a href="#about" style={styles.link}>About</a>
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
    padding: '24px 48px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(10px)',
  },
  logo: {
    fontWeight: 600,
    fontSize: '1rem',
  },
  links: {
    display: 'flex',
    gap: '32px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '0.9rem',
  },
}
