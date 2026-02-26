import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/giovaniohira',
      icon: Github,
      color: 'hover:text-text'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/giovaniohira',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      href: 'mailto:giovaniohira@gmail.com',
      icon: Mail,
      color: 'hover:text-accent'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <footer className="bg-surface/60 backdrop-blur-sm border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <p className="text-sm text-muted leading-relaxed">
              Backend-focused developer who ships secure, maintainable systems.
              Based in Brazil, working remotely.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-muted transition-colors duration-300 ${link.color} hover:scale-110 transform`}
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-text uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className="text-sm text-muted">
                Have a role or project in mind?
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-sm text-accent hover:opacity-80 transition-colors duration-300 group"
              >
                Reach out
                <ExternalLink 
                  size={14} 
                  className="ml-1 group-hover:translate-x-1 transition-transform duration-300" 
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted">
              © {currentYear} Ohira. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <p className="text-xs text-muted">
                Built with React & Tailwind CSS
              </p>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-muted">Open to proposals</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
