import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectPanel({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            style={styles.backdrop}
          />
          <motion.div
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            style={styles.panel}
          >
            <button onClick={onClose} style={styles.closeBtn} aria-label="Close">✕</button>

            <div style={styles.content}>
              <span style={styles.number}>{project.number}</span>
              <h1 style={styles.title}>{project.title}</h1>
              <div style={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} style={styles.tag}>{tag}</span>
                ))}
              </div>
              <p style={styles.description}>{project.description}</p>
              <div style={{ ...styles.imagePlaceholder, background: project.color }} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

const styles = {
  backdrop: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.35)',
    zIndex: 200,
  },
  panel: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '60vw',
    background: '#fff',
    zIndex: 201,
    overflowY: 'auto',
    padding: '64px',
  },
  closeBtn: {
    position: 'absolute',
    top: '32px',
    left: '-22px',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    border: 'none',
    background: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    paddingTop: '32px',
  },
  number: {
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    color: '#888',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 700,
    lineHeight: 1.1,
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
  description: {
    fontSize: '1.1rem',
    color: '#555',
    lineHeight: 1.8,
    maxWidth: '520px',
  },
  imagePlaceholder: {
    width: '100%',
    height: '400px',
    borderRadius: '12px',
    marginTop: '16px',
  },
}
