// Professional experience data
export const experienceData = [
  {
    id: 'exp_001',
    company: 'Voidr',
    companyUrl: 'https://www.voidr.co/en',
    shortSummary: 'SDET Jr building reliable end-to-end automation for client platforms—turning real user flows into stable Playwright suites with TypeScript, MCP integration, and self-healing capabilities that cut regression time and raise confidence in releases.',
    position: 'SDET Jr',
    employmentType: 'Full-time',
    location: 'Paraná, Brazil · Remote',
    startDate: '2025-10-01',
    endDate: null, // null means "Present"
    isCurrent: true,
    description: 'At Voidr, I help teams trust their releases by building end-to-end automation around the flows that matter most to users, using Playwright, TypeScript, MCP, and self-healing test patterns.',
    functionSummary: 'My daily work centers on building and maintaining reliable test automation. I start with technical discovery—mapping client architecture, critical user paths, and API interactions—then translate that into an automation strategy. I write Playwright tests in TypeScript, integrate them with MCP for better test orchestration, and implement self-healing patterns to reduce flakiness. I maintain these suites in CI/CD, debug failures quickly, and work with stakeholders to ensure coverage aligns with real user outcomes, not just happy paths.',
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

