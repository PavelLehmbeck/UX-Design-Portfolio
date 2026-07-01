import { motion, useTransform } from 'framer-motion'
import heroImage from '../assets/hero.png'

export default function Hero({ opacity, blur }) {
  const filter = useTransform(blur, (v) => `blur(${v}px) brightness(${1 - (v / 15) * 0.4})`)

  return (
    <motion.section style={{ ...styles.section, opacity, filter }}>
      <img src={heroImage} alt="" style={styles.image} />
      <h1 style={styles.title}>Value comes from design</h1>
      <h2 style={styles.subtitle}>Which starts with understanding people</h2>
    </motion.section>
  )
}

const styles = {
  section: {
    position: 'absolute',
    top: '-30px',
    left: '-30px',
    right: '-30px',
    bottom: '-30px',
    zIndex: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  title: {
    position: 'absolute',
    top: '35%',
    left: '5%',
    transform: 'translateY(-50%)',
    margin: 0,
    color: '#fff',
    fontSize: '6rem',
    fontWeight: 700,
    maxWidth: '40%',
  },
  subtitle: {
    position: 'absolute',
    top: '110%',
    left: '5%',
    transform: 'translateY(-50%)',
    margin: 0,
    color: '#fff',
    fontSize: '1.25rem',
    fontWeight: 700,
    maxWidth: '40%',
  },
}
