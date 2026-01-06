import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/giovaniohira',
      icon: Github,
      color: 'hover:text-gray-100'
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
      color: 'hover:text-purple-300'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <footer className="bg-gray-900/40 backdrop-blur-sm border-t border-purple-500/20">
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
            <p className="text-sm text-gray-400 leading-relaxed">
              Building digital experiences that matter. 
              Passionate about clean code and innovative solutions.
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
                    className={`text-gray-500 transition-colors duration-300 ${link.color} hover:scale-110 transform`}
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
            <h4 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                Ready to start your next project?
              </p>
              <a
                href="/contact"
                className="inline-flex items-center text-sm text-purple-300 hover:text-purple-200 transition-colors duration-300 group"
              >
                Let's work together
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
          className="mt-8 pt-8 border-t border-purple-500/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {currentYear} Ohira. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <p className="text-xs text-gray-600">
                Built with React & Tailwind CSS
              </p>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">Open to proposals</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
