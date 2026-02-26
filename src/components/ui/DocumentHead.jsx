import { useEffect } from 'react'

const SITE_URL = 'https://giovaniohira.com'

/**
 * Updates document title and meta description for the current page (SPA).
 * Use on each route so Google and social crawlers see the right title/description after JS runs.
 */
export default function DocumentHead({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title
    if (title) {
      document.title = title.includes('|') ? title : `${title} | Giovani Ohira`
    }

    const metaDesc = document.querySelector('meta[name="description"]')
    if (description && metaDesc) {
      metaDesc.setAttribute('content', description)
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDesc = document.querySelector('meta[property="og:description"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogTitle && title) ogTitle.setAttribute('content', title.includes('|') ? title : `${title} | Giovani Ohira`)
    if (ogDesc && description) ogDesc.setAttribute('content', description)
    if (ogUrl && typeof window !== 'undefined') ogUrl?.setAttribute('content', window.location.href)

    const twTitle = document.querySelector('meta[name="twitter:title"]')
    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twTitle && title) twTitle.setAttribute('content', title.includes('|') ? title : `${title} | Giovani Ohira`)
    if (twDesc && description) twDesc.setAttribute('content', description)

    return () => {
      document.title = previousTitle
    }
  }, [title, description])

  return null
}

export { SITE_URL }
