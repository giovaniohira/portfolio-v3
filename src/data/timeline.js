// Timeline - only ID references
// year and date data are automatically pulled from referenced data
export const timelineData = [
  {
    id: 'timeline_001',
    type: 'project',
    referenceId: 'proj_001', // References the Vault project
  },
  {
    id: 'timeline_002',
    type: 'project',
    referenceId: 'proj_002', // References the Portfolio project
  },
  {
    id: 'timeline_003',
    type: 'fact',
    referenceId: 'fact_000', // First Line of Code (2018)
  },
  {
    id: 'timeline_004',
    type: 'project',
    referenceId: 'proj_003', // References the Google Maps Routes API Wrapper project
  },
  {
    id: 'timeline_006',
    type: 'fact',
    referenceId: 'fact_002', // First GitHub Page (2021)
  },
  {
    id: 'timeline_007',
    type: 'fact',
    referenceId: 'fact_004', // Joined College (2022)
  },
  {
    id: 'timeline_009',
    type: 'fact',
    referenceId: 'fact_005', // First Git Repository (2023)
  },
  {
    id: 'timeline_010',
    type: 'fact',
    referenceId: 'fact_006', // First Complete Project (2023)
  },
  {
    id: 'timeline_011',
    type: 'fact',
    referenceId: 'fact_007', // Portfolio v1 Created (2024)
  },
  {
    id: 'timeline_012',
    type: 'project',
    referenceId: 'proj_004', // References the Event Management API project (2024)
  }
]


// Import functions from separate files
import { getProjectById } from './projects.js'
import { getFactById } from './facts.js'

// Function to get data by ID (project or fact)
export const getDataById = (id) => {
  // Search in projects
  const project = getProjectById(id)
  if (project) return project
  
  // Search in facts
  const fact = getFactById(id)
  if (fact) return fact
  
  return null
}

// Function to get complete timeline data
export const getTimelineWithData = () => {
  return timelineData.map(timelineItem => {
    const referencedData = getDataById(timelineItem.referenceId)
    
    // Pull year and date from referenced data
    const year = referencedData?.year || new Date(referencedData?.date).getFullYear()
    const date = referencedData?.date
    
    return {
      ...timelineItem,
      year,
      date,
      data: referencedData
    }
  }).sort((a, b) => new Date(b.date) - new Date(a.date)) // Always sort from newest to oldest
}

// Function to get timeline by type (already sorted)
export const getTimelineByType = (type) => {
  return getTimelineWithData().filter(item => item.type === type)
}

// Function to get timeline by year (already sorted)
export const getTimelineByYear = (year) => {
  return getTimelineWithData().filter(item => item.year === year)
}

// Function to get timeline sorted by date (already sorted by default)
export const getSortedTimeline = () => {
  return getTimelineWithData() // Already sorted from getTimelineWithData function
}

// Function to add new item to timeline
export const addToTimeline = (type, referenceId, highlight = false) => {
  const newId = `timeline_${String(timelineData.length + 1).padStart(3, '0')}`
  const newTimelineItem = {
    id: newId,
    type,
    referenceId,
    highlight
  }
  timelineData.push(newTimelineItem)
  return newTimelineItem
}

// Function to remove item from timeline
export const removeFromTimeline = (timelineId) => {
  const index = timelineData.findIndex(item => item.id === timelineId)
  if (index > -1) {
    return timelineData.splice(index, 1)[0]
  }
  return null
}

// Sort timeline by date (newest first)
export const sortedTimelineData = getSortedTimeline() 