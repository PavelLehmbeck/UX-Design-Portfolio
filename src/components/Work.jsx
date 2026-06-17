import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '../data/projects'
import { useTransition } from './TransitionProvider'

export default function Work({ mainRef }) {
  const { navigateTo } = useTransition()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    container: mainRef,
    offset: ['start start', 'end start'],
  })

  const freeze = 20 / 600
  const x = useTransform(
    scrollYProgress,
    [0, freeze, 1 / 3, 1 / 3 + freeze, 2 / 3],
    ['0vw', '0vw', '-100vw', '-100vw', '-200vw']
  )

  return (
    <section id="work" ref={ref} style={styles.section}>
      <div style={styles.snapAnchor} />
      <div style={styles.sticky}>
        <motion.div style={{ ...styles.track, x }}>
          {projects.map((project) => (
            <div key={project.id} style={{ ...styles.panel, background: project.color }}>
              <div style={styles.content}>
                <span style={styles.number}>{project.number}</span>
                <h2 style={styles.title}>{project.title}</h2>
                <p style={styles.description}>{project.description}</p>
                <div style={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} style={styles.tag}>{tag}</span>
                  ))}
                </div>
                <button style={styles.button} onClick={() => navigateTo(`/project/${project.slug}`)}>View project</button>
              </div>
              <div style={styles.image} />
            </div>
          ))}
        </motion.div>
      </div>
      <div style={styles.snapMarker} />
      <div style={styles.snapMarker} />
    </section>
  )
}

const styles = {
  section: {
    height: '600vh',
  },
  snapAnchor: {
    height: 0,
    scrollSnapAlign: 'start',
  },
  sticky: {
    position: 'sticky',
    top: 0,
    height: '100vh',
    overflow: 'hidden',
  },
  snapMarker: {
    height: '200vh',
    scrollSnapAlign: 'start',
  },
  track: {
    display: 'flex',
    width: '300vw',
    height: '100%',
  },
  panel: {
    width: '100vw',
    height: '100%',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '64px',
    padding: '100px 80px 80px',
  },
  content: {
    flex: '0 0 380px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  number: {
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    color: '#888',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 700,
    color: '#111',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: 1.7,
  },
  tags: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  tag: {
    fontSize: '0.75rem',
    padding: '6px 14px',
    background: 'rgba(0,0,0,0.08)',
    borderRadius: '100px',
    color: '#444',
  },
  button: {
    alignSelf: 'flex-start',
    marginTop: '8px',
    padding: '12px 28px',
    background: '#111',
    color: '#fff',
    border: 'none',
    fontSize: '0.85rem',
    fontWeight: 600,
    letterSpacing: '0.04em',
    cursor: 'pointer',
    borderRadius: '6px',
  },
  image: {
    flex: 1,
    height: '70%',
    background: 'rgba(0,0,0,0.08)',
    borderRadius: '12px',
  },
}
