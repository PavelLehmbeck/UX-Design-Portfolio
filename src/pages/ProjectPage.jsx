import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { useTransition } from '../components/TransitionProvider'

export default function ProjectPage() {
  const { slug } = useParams()
  const { navigateTo } = useTransition()
  const project = projects.find(p => p.slug === slug)

  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0, 0, 1] }}
      style={styles.page}
    >
      <button onClick={() => navigateTo('/')} style={styles.back}>← Back</button>

      <div style={styles.header}>
        <span style={styles.number}>{project.number}</span>
        <h1 style={styles.title}>{project.name}</h1>
        <div style={styles.tags}>
          {project.tags.map(tag => (
            <span key={tag} style={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ ...styles.hero, background: project.color }} />

      <div style={styles.body}>
        <p style={styles.description}>{project.description}</p>
      </div>
    </motion.div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    padding: '48px 80px 120px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  back: {
    background: 'none',
    border: 'none',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#555',
    cursor: 'pointer',
    padding: 0,
    marginBottom: '64px',
    letterSpacing: '0.02em',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '48px',
  },
  number: {
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    color: '#888',
  },
  title: {
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    fontWeight: 700,
    lineHeight: 1.05,
    color: '#111',
  },
  tags: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  tag: {
    fontSize: '0.75rem',
    padding: '6px 14px',
    background: 'rgba(0,0,0,0.06)',
    borderRadius: '100px',
    color: '#444',
  },
  hero: {
    width: '100%',
    height: '55vh',
    borderRadius: '12px',
    marginBottom: '64px',
  },
  body: {
    maxWidth: '640px',
  },
  description: {
    fontSize: '1.15rem',
    color: '#555',
    lineHeight: 1.8,
  },
}
