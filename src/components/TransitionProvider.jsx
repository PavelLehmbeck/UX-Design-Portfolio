import { createContext, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { animate } from 'framer-motion'

const TransitionContext = createContext(null)
export const useTransition = () => useContext(TransitionContext)

export function TransitionProvider({ children }) {
  const curtainRef = useRef(null)
  const navigate = useNavigate()

  const navigateTo = async (path) => {
    const el = curtainRef.current

    await animate(el, { x: '100%' }, { duration: 0 })
    await animate(el, { x: '0%' }, { duration: 0.5, ease: [0.76, 0, 0.24, 1] })
    navigate(path)
    await animate(el, { x: '-100%' }, { duration: 0.5, ease: [0.76, 0, 0.24, 1] })
  }

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}
      <div
        ref={curtainRef}
        style={{
          position: 'fixed',
          inset: 0,
          background: '#000000ff',
          zIndex: 999,
          pointerEvents: 'none',
          transform: 'translateX(100%)',
        }}
      />
    </TransitionContext.Provider>
  )
}
