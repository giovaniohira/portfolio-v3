import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectPage from './components/ProjectPage'
import ExperiencePage from './components/ExperiencePage'
import Footer from './components/Footer'

// Component to handle page state based on location
const PageHandler = ({ currentPage, setCurrentPage }) => {
  const location = useLocation()

  useEffect(() => {
    // Update current page based on URL
    if (location.pathname === '/') {
      setCurrentPage('home')
    } else if (location.pathname === '/projects') {
      setCurrentPage('projects')
    } else if (location.pathname === '/contact') {
      setCurrentPage('contact')
    } else if (location.pathname.startsWith('/projects/')) {
      setCurrentPage('projects')
    }
  }, [location.pathname, setCurrentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <AnimatePresence mode="wait">
      {renderPage()}
    </AnimatePresence>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <Router>
      <div className="min-h-screen">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        
        <main className="pt-16">
          <Routes>
            {/* Individual project pages */}
            <Route path="/projects/:projectId" element={<ProjectPage />} />
            
            {/* Individual experience pages */}
            <Route path="/experience/:experienceId" element={<ExperiencePage />} />
            
            {/* Main app pages */}
            <Route path="*" element={
              <PageHandler currentPage={currentPage} setCurrentPage={setCurrentPage} />
            } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App 