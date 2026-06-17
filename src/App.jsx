import { Routes, Route } from 'react-router-dom'
import { TransitionProvider } from './components/TransitionProvider'
import Portfolio from './pages/Portfolio'
import ProjectPage from './pages/ProjectPage'

export default function App() {
  return (
    <TransitionProvider>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </TransitionProvider>
  )
}
