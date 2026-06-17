import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={styles.heading}>Let's talk</h2>
        <p style={styles.sub}>
          Open to new projects and collaborations. Reach out and I'll get back to you.
        </p>
        <motion.a
          href="mailto:lehmbeck.pavel@icloud.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={styles.email}
        >
          lehmbeck.pavel@icloud.com
        </motion.a>
        <div style={styles.socials}>
          <a href="#" style={styles.socialLink}>LinkedIn</a>
          <a href="#" style={styles.socialLink}>Dribbble</a>
          <a href="#" style={styles.socialLink}>Read.cv</a>
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
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '80px 64px 48px',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '16px',
    color: '#111',
  },
  sub: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '32px',
    maxWidth: '480px',
    lineHeight: 1.6,
  },
  email: {
    display: 'block',
    fontSize: '1.3rem',
    fontWeight: 600,
    color: '#111',
    textDecoration: 'none',
    marginBottom: '40px',
  },
  socials: {
    display: 'flex',
    gap: '24px',
  },
  socialLink: {
    color: '#555',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
}