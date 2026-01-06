// Professional experience data
export const experienceData = [
  {
    id: 'exp_001',
    company: 'Voidr',
    companyUrl: 'https://www.voidr.co/en',
    shortSummary: 'Responsible for validating client platforms through end-to-end automated testing, ensuring reliability and product quality. Translates real user flows into robust automated test suites using Playwright and AI-powered automation.',
    position: 'SDET Jr',
    employmentType: 'Full-time',
    location: 'Paraná, Brazil · Remote',
    startDate: '2025-10-01',
    endDate: null, // null means "Present"
    isCurrent: true,
    description: 'Voidr | Automated testing for modern tech teams',
    functionSummary: 'Responsible for validating client platforms through end-to-end automated testing, ensuring reliability, stability, and product quality. Translates real user flows and technical requirements into robust automated test suites that enhance the value of Voidr\'s AI-powered automation platform.',
    keyResponsibilities: [
      'Perform technical discovery to understand client architecture, critical flows, risks, and API interactions for comprehensive test coverage.',
      'Define automation scope and strategy based on functional requirements and system analysis, translating real user flows into robust automated test suites.',
      'Develop proof-of-concept tests and initial automation suites (smoke/critical path) using JavaScript, Playwright, and CI/CD pipelines.',
      'Implement, maintain, and debug automated E2E tests with focus on stability, repeatability, and scalability for AI-powered automation platform.',
      'Validate client platforms through end-to-end automated testing, ensuring reliability, stability, and product quality using Playwright and internal frameworks.'
    ],
    impact: 'Reduced client platform testing time from 6 hours to 12 minutes, achieving 97% time reduction and significantly improving testing efficiency and delivery speed. Enables reliable automation for clients by bridging technical understanding with customer needs, accelerating platform adoption and reducing manual testing workload.',
    skills: [
      'Playwright',
      'AI-powered automation',
      'Software Testing',
      'Requirements Analysis',
      'JavaScript',
      'CI/CD',
    ]
  }
]

// Function to get experience by ID
export const getExperienceById = (id) => {
  return experienceData.find(exp => exp.id === id)
}

// Function to get all experiences sorted by date (most recent first)
export const getSortedExperiences = () => {
  return experienceData.sort((a, b) => {
    // Current experiences first, then by start date
    if (a.isCurrent && !b.isCurrent) return -1
    if (!a.isCurrent && b.isCurrent) return 1
    return new Date(b.startDate) - new Date(a.startDate)
  })
}

// Function to calculate months difference between two dates
const calculateMonthsDifference = (startDate, endDate) => {
  const start = new Date(startDate)
  const end = new Date(endDate)
  
  const startYear = start.getFullYear()
  const startMonth = start.getMonth()
  const endYear = end.getFullYear()
  const endMonth = end.getMonth()
  
  return (endYear - startYear) * 12 + (endMonth - startMonth)
}

// Function to format work period
export const formatWorkPeriod = (startDate, endDate, isCurrent) => {
  const start = new Date(startDate)
  const startFormatted = start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  
  if (isCurrent) {
    const endFormatted = 'Present'
    const now = new Date()
    // If start date is in the future, show "to Present" without months
    if (start > now) {
      return `${startFormatted} to ${endFormatted}`
    }
    const monthsDiff = Math.max(0, calculateMonthsDifference(startDate, now))
    return `${startFormatted} - ${endFormatted} · ${monthsDiff} mos`
  }
  
  const end = new Date(endDate)
  const endFormatted = end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  const monthsDiff = Math.max(0, calculateMonthsDifference(startDate, endDate))
  return `${startFormatted} - ${endFormatted} · ${monthsDiff} mos`
}

