/**
 * Template for a new experience. Copy into experienceData and fill in.
 * Required: id, company, position, employmentType, location, startDate, endDate (or null if current), isCurrent.
 * Recommended: shortSummary (used on home card). Optional: companyUrl, description, functionSummary, keyResponsibilities, impact, skills.
 * ID format: exp_XXX (e.g. exp_003).
 */
export const experienceTemplate = {
  id: 'exp_XXX',
  company: '',
  companyUrl: '',
  shortSummary: '',
  position: '',
  employmentType: '',
  location: '',
  startDate: 'YYYY-MM-DD',
  endDate: null,
  isCurrent: false,
  description: '',
  functionSummary: '',
  keyResponsibilities: [],
  impact: '',
  skills: []
}

// Professional experience data (internal; use getSortedExperiences / getExperienceById)
const experienceData = [
  {
    id: 'exp_002',
    company: 'Nexus Labz Ltda.',
    companyUrl: 'https://nexuslabz.co',
    shortSummary: 'Mid-Level Software Engineer building production React Native (Expo) apps with full-stack ownership across architecture, auth, payments, infra, and CI/CD.',
    position: 'Mid-Level Software Engineer',
    employmentType: 'Contract',
    location: 'Brazil · Remote',
    startDate: '2026-02-01',
    endDate: null,
    isCurrent: true,
    description: 'At Nexus Labz I architect and deliver a production-grade React Native (Expo) mobile application, defining system architecture across mobile and backend, and leading infrastructure and deployment decisions.',
    functionSummary: 'I own end-to-end delivery: from mobile app architecture and backend design to production infrastructure. I implemented payment processing, offline caching, and Google OAuth; designed JWT-based authentication and secure API communication; and set up the VPS production environment with Nginx, SSL/TLS (Let\'s Encrypt), and CI/CD via GitHub Actions. I also mentor a junior developer and conduct technical reviews.',
    keyResponsibilities: [
      'Architected and delivered a production-grade React Native (Expo) mobile application.',
      'Defined system architecture across mobile and backend layers.',
      'Integrated payment processing, offline caching, and Google OAuth.',
      'Designed JWT-based authentication flow with secure API communication.',
      'Led infrastructure decisions and implemented VPS-based production environment.',
      'Configured Nginx reverse proxy, SSL/TLS (Let\'s Encrypt), and server-level security hardening.',
      'Implemented CI/CD pipelines with GitHub Actions for automated backend deployment.',
      'Mentored junior developer and conducted technical reviews.'
    ],
    impact: 'Shipped a production-ready mobile app with full-stack ownership, from auth and payments to infrastructure and CI/CD, enabling reliable deployments and team growth through mentoring.',
    skills: [
      'React Native',
      'Expo',
      'JWT',
      'Google OAuth',
      'Nginx',
      'SSL/TLS',
      'Let\'s Encrypt',
      'GitHub Actions',
      'CI/CD',
      'VPS',
      'System Architecture',
      'Technical Mentorship'
    ]
  },
  {
    id: 'exp_001',
    company: 'Voidr',
    companyUrl: 'https://www.voidr.co/en',
    shortSummary: 'SDET Jr building reliable end-to-end automation for client platforms. Turns real user flows into stable Playwright suites with TypeScript, MCP integration, and self-healing capabilities that cut regression time and raise confidence in releases.',
    position: 'SDET Jr',
    employmentType: 'Full-time',
    location: 'Paraná, Brazil · Remote',
    startDate: '2025-10-01',
    endDate: '2026-02-01',
    isCurrent: false,
    description: 'At Voidr, I help teams trust their releases by building end-to-end automation around the flows that matter most to users, using Playwright, TypeScript, MCP, and self-healing test patterns.',
    functionSummary: 'My daily work centers on building and maintaining reliable test automation. I start with technical discovery: mapping client architecture, critical user paths, and API interactions, then translate that into an automation strategy. I write Playwright tests in TypeScript, integrate them with MCP for better test orchestration, and implement self-healing patterns to reduce flakiness. I maintain these suites in CI/CD, debug failures quickly, and work with stakeholders to ensure coverage aligns with real user outcomes, not just happy paths.',
    keyResponsibilities: [
      'Run technical discovery to understand client architecture, critical paths, risks, and key API interactions.',
      'Define automation scope and strategy from functional requirements and system behavior (what to cover first, and why).',
      'Build proof-of-concept and smoke/critical-path suites in Playwright with TypeScript, integrated into CI/CD pipelines.',
      'Implement self-healing test patterns and MCP integration to improve test stability and reduce maintenance overhead.',
      'Maintain and debug E2E tests with a focus on stability, repeatability, and low flake rate.',
      'Partner with stakeholders to align automation coverage with real user outcomes, not just happy-path checks.'
    ],
    impact: 'Reduced a client regression cycle from ~6 hours to ~12 minutes (97% faster), improving delivery speed and freeing teams from repetitive manual checks. Helped accelerate adoption of automation by connecting technical constraints to customer goals and turning them into dependable test coverage.',
    skills: [
      'Playwright',
      'TypeScript',
      'MCP',
      'Self-healing tests',
      'AI-powered automation',
      'Software Testing',
      'Requirements Analysis',
      'CI/CD',
    ]
  }
]

// Function to get experience by ID
export const getExperienceById = (id) => {
  return experienceData.find(exp => exp.id === id)
}

// Function to get all experiences sorted by date (most recent first, non-mutating)
export const getSortedExperiences = () => {
  return [...experienceData].sort((a, b) => {
    if (a.isCurrent && !b.isCurrent) return -1
    if (!a.isCurrent && b.isCurrent) return 1
    return parseLocalDate(b.startDate) - parseLocalDate(a.startDate)
  })
}

// Parse YYYY-MM-DD as local date (avoids UTC midnight shifting day in other timezones)
const parseLocalDate = (dateStr) => {
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(y, m - 1, d)
}

// Function to calculate months difference between two dates
const calculateMonthsDifference = (startDate, endDate) => {
  const start = parseLocalDate(startDate)
  const end = typeof endDate === 'string' ? parseLocalDate(endDate) : endDate
  
  const startYear = start.getFullYear()
  const startMonth = start.getMonth()
  const endYear = end.getFullYear()
  const endMonth = end.getMonth()
  
  // Inclusive: both start and end month count (e.g. Sep 2025 - Feb 2026 = 6 months)
  return (endYear - startYear) * 12 + (endMonth - startMonth) + 1
}

// Function to format work period
export const formatWorkPeriod = (startDate, endDate, isCurrent) => {
  const start = parseLocalDate(startDate)
  const startFormatted = start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  
  if (isCurrent) {
    const endFormatted = 'Present'
    const now = new Date()
    // If start date is in the future, show "to Present" without months
    if (start > now) {
      return `${startFormatted} to ${endFormatted}`
    }
    const monthsDiff = Math.max(1, calculateMonthsDifference(startDate, now))
    return `${startFormatted} - ${endFormatted} · ${monthsDiff} mos`
  }
  
  const end = parseLocalDate(endDate)
  const endFormatted = end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  const monthsDiff = Math.max(1, calculateMonthsDifference(startDate, endDate))
  return `${startFormatted} - ${endFormatted} · ${monthsDiff} mos`
}

