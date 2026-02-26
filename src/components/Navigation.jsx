import { motion } from 'framer-motion'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useState } from 'react'

const pathToPage = (pathname) => {
  if (pathname === '/') return 'home'
  if (pathname === '/contact') return 'contact'
  if (pathname === '/projects' || pathname.startsWith('/projects/')) return 'projects'
  return 'home'
}

const Navigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const currentPage = pathToPage(location.pathname)

  const handleNavigation = (page) => {
    if (page === 'home') navigate('/')
    else if (page === 'projects') navigate('/projects')
    else if (page === 'contact') navigate('/contact')
  }

  const handleMobileNavigation = (page) => {
    handleNavigation(page)
    setIsMobileMenuOpen(false)
  }

  const isActive = (page) => currentPage === page

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 slide-in-left">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-medium text-[var(--color-text)] hover:opacity-90 transition-opacity"
              aria-label="Ohira - Home"
            >
              <img src="/favicon.svg" alt="" className="h-8 w-8" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {[
                { name: 'Home', page: 'home' },
                { name: 'Projects', page: 'projects' },
                { name: 'Contact', page: 'contact' }
              ].map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.page)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isActive(item.page)
                      ? 'text-accent'
                      : 'text-muted hover:text-accent'
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  aria-current={isActive(item.page) ? 'page' : undefined}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0 slide-in-right">
            <button
              onClick={() => handleNavigation('contact')}
              className="px-4 py-2 text-sm font-medium text-muted hover:text-accent bg-surface border border-border rounded-lg transition-all duration-300"
            >
              Let's talk
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted hover:text-accent p-2 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-surface/80 backdrop-blur-sm border-t border-border"
          >
            <div className="px-6 py-4 space-y-4">
              {[
                { name: 'Home', page: 'home' },
                { name: 'Projects', page: 'projects' },
                { name: 'Contact', page: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMobileNavigation(item.page)}
                  className={`block w-full text-left text-sm font-medium transition-all duration-300 py-2 ${
                    isActive(item.page)
                      ? 'text-accent'
                      : 'text-muted hover:text-accent'
                  }`}
                  aria-current={isActive(item.page) ? 'page' : undefined}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleMobileNavigation('contact')}
                className="w-full px-4 py-2 text-sm font-medium text-muted hover:text-accent bg-surface border border-border rounded-lg transition-all duration-300 mt-4"
              >
                Let's talk
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 