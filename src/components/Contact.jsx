import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionLayout from './ui/SectionLayout'
import DocumentHead from './ui/DocumentHead'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [showForm, setShowForm] = useState(true)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/mvgqqkzw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setShowForm(false)
      } else {
        setSubmitStatus('error')
        setShowForm(false)
      }
    } catch (error) {
      setSubmitStatus('error')
      setShowForm(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Reset form after a few seconds
  useEffect(() => {
    if (submitStatus && !showForm) {
      const timer = setTimeout(() => {
        setSubmitStatus(null)
        setShowForm(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [submitStatus, showForm])

  return (
    <SectionLayout>
      <DocumentHead
        title="Contact"
        description="Get in touch with Giovani Ohira. Hire, collaborate, or chat about backend and full-stack roles. Curitiba, Brazil."
      />
      {/* Header */}
        <div className="text-center mb-20 fade-in">
          <h1 className="text-4xl md:text-5xl font-display font-light mb-6 text-text">
            Let's <span className="accent-text">Talk</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Hiring, collaborating, or just want to chat about a role? Drop me a message and I'll get back to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-hover p-8 fade-in-delay-1">
            <h2 className="text-2xl font-light mb-8 text-text">Send a Message</h2>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && !showForm && (
              <div className="text-center py-12">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-green-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-text mb-3">Message Sent!</h3>
                <p className="text-muted text-sm">
                  Hey! I received your message and will get back to you soon. Feel free to keep exploring my website.
                </p>
                <p className="text-muted text-xs mt-4">
                  Form will reset in a few seconds...
                </p>
              </div>
            )}
            
            {submitStatus === 'error' && !showForm && (
              <div className="text-center py-12">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-text mb-3">Oops!</h3>
                <p className="text-red-400 text-sm">
                  Sorry! Something went wrong. Please contact me directly at giovaniohira@gmail.com
                </p>
                <p className="text-muted text-xs mt-4">
                  Form will reset in a few seconds...
                </p>
              </div>
            )}

            {showForm && (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                    Name / Company
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-b border-border text-text placeholder-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name or company"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border-b border-border text-text placeholder-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-transparent border-b border-border text-text placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-surface text-muted cursor-not-allowed' 
                      : 'bg-accent text-white hover:opacity-90 hover:shadow-lg hover:shadow-[var(--color-accent)]/25'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8 fade-in-delay-2">
            <div>
              <h2 className="text-2xl font-light mb-6 text-text">Get in Touch</h2>
              <p className="text-muted leading-relaxed mb-8">
                If you're a recruiter or hiring manager looking for a backend-leaning developer who can own features end-to-end, I'd like to hear about the role. I'm also happy to chat about contract work or open-source collaboration.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-text font-medium">Email</h4>
                  <p className="text-muted">giovaniohira@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-text font-medium">Location</h4>
                  <p className="text-muted">Remote / Worldwide</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-text font-medium">Response Time</h4>
                  <p className="text-muted">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="card-hover p-6">
              <h3 className="text-lg font-medium mb-4 text-text">What I Bring</h3>
              <ul className="text-muted space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                  Full-stack ownership across backend, infra, CI/CD, and frontend
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                  Security-first mindset from SDET + development background
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                  Production experience with React Native, Node.js, and TypeScript
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                  Fast reply, usually within 24 hours
                </li>
              </ul>
            </div>
          </div>
        </div>
    </SectionLayout>
  )
}

export default Contact 