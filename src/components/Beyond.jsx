import { motion } from 'framer-motion'
import { beyondCategories } from '../data/beyond'

export default function Beyond() {
  return (
    <section id="beyond" style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.inner}
      >
        <h2 style={styles.heading}>Beyond my portfolio</h2>
        <div style={styles.grid}>
          {beyondCategories.map(category => (
            <div key={category.title} style={styles.category}>
              <h3 style={styles.categoryTitle}>{category.title}</h3>
              <ul style={styles.list}>
                {category.items.map(item => (
                  <li key={item.name} style={styles.item}>
                    <span style={styles.itemName}>{item.name}</span>
                    <span style={styles.itemMeta}>{item.meta}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

const styles = {
  section: {
    minHeight: '100vh',
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '80px 64px',
    background: '#fff',
  },
  inner: {
    maxWidth: '1000px',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '48px',
    color: '#111',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '40px',
  },
  category: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  categoryTitle: {
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#888',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    listStyle: 'none',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  itemName: {
    fontSize: '1.05rem',
    fontWeight: 600,
    color: '#111',
  },
  itemMeta: {
    fontSize: '0.85rem',
    color: '#777',
  },
}
