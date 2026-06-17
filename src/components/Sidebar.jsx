import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'hero', label: 'Home', threshold: 0.5 },
  { id: 'work', label: 'Work', threshold: 0.1 },
  { id: 'about', label: 'About', threshold: 0.5 },
  { id: 'contact', label: 'Contact', threshold: 0.5 },
]

export default function Sidebar() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const root = document.querySelector('main')
    const observers = []

    sections.forEach(({ id, threshold }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold, root }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav style={styles.nav}>
      {sections.map(({ id, label }) => {
        const isActive = active === id
        return (
          <a key={id} href={`#${id}`} style={styles.item}>
            {isActive && (
              <motion.div
                layoutId="active-box"
                style={styles.activeBox}
                transition={{
                  type: 'tween',
                  ease: [0.8, 0, 1, 1],
                  duration: 0.45,
                }}
              />
            )}
            <span style={styles.label}>
              {label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}

const styles = {
  nav: {
    position: 'fixed',
    right: '24px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    zIndex: 100,
  },
  item: {
    position: 'relative',
    writingMode: 'vertical-rl',
    padding: '20px 10px',
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff',
  },
  activeBox: {
    position: 'absolute',
    inset: 0,
    background: '#111',
    zIndex: 0,
  },
  label: {
    position: 'relative',
    zIndex: 1,
    color: '#fff',
    mixBlendMode: 'difference',
  },
}
