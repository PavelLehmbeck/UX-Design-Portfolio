import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.inner}
      >
        <h2 style={styles.heading}>About me</h2>
        <p style={styles.bio}>
          I'm a UX designer based in [Your City]. I help teams build digital products that
          people actually enjoy using — by combining research, systems thinking, and a
          strong visual sensibility.
        </p>
        <p style={styles.bio}>
          Outside of design, I [your hobbies / interests here].
        </p>
        <div style={styles.skills}>
          {['User Research', 'Interaction Design', 'Prototyping', 'Design Systems', 'Figma', 'Usability Testing'].map(skill => (
            <span key={skill} style={styles.skill}>{skill}</span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const styles = {
  section: {
    height: '100vh',
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '80px 64px 48px',
    background: '#f7f7f5',
  },
  inner: {
    maxWidth: '680px',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '24px',
    color: '#111',
  },
  bio: {
    fontSize: '1.1rem',
    color: '#444',
    lineHeight: 1.8,
    marginBottom: '16px',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '32px',
  },
  skill: {
    padding: '8px 16px',
    border: '1px solid #ddd',
    borderRadius: '100px',
    fontSize: '0.85rem',
    color: '#333',
  },
}