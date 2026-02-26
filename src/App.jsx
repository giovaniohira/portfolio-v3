import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectPage from './components/ProjectPage'
import ExperiencePage from './components/ExperiencePage'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        
        <main id="main-content" className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
            <Route path="/experience/:experienceId" element={<ExperiencePage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App 