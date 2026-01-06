// Facts data with unique IDs 
export const factsData = [
  {
    id: 'fact_000',
    type: 'fact',
    year: '2020',
    title: 'First Line of Code',
    description: 'Created a Minecraft mod using Java at the age of 16, marking my very first coding experience.',
    date: '2020-06-01',
    highlight: false
  },
  {
    id: 'fact_002',
    type: 'fact',
    year: '2021',
    title: 'First GitHub Page',
    description: 'Created my first GitHub repository and published my first personal website, marking the beginning of my coding journey.',
    date: '2021-03-15',
    highlight: false
  },
  {
    id: 'fact_004',
    type: 'fact',
    year: '2022',
    title: 'Joined College',
    description: 'Began Software Engineering studies at UTFPR, starting the academic journey in February.',
    date: '2022-02-01',
    highlight: false
  },
  {
    id: 'fact_005',
    type: 'fact',
    year: '2023',
    title: 'First Git Repository',
    description: 'Pushed my first official Git repository to GitHub in May, expanding my developer workflow.',
    date: '2023-05-01',
    highlight: false
  },
  {
    id: 'fact_006',
    type: 'fact',
    year: '2023',
    title: 'First Complete Project',
    description: 'Completed my first fully developed and functional project in November, consolidating my practical knowledge.',
    date: '2023-11-01',
    highlight: false
  },
  {
    id: 'fact_007',
    type: 'fact',
    year: '2024',
    title: 'Portfolio v1 Created',
    description: 'Launched the first version of my personal portfolio in September, showcasing projects and achievements.',
    date: '2024-09-01',
    highlight: false
  }
]

// Function to get fact by ID
export const getFactById = (id) => {
  return factsData.find(fact => fact.id === id)
}

// Function to get all facts sorted by date
export const getSortedFacts = () => {
  return factsData.sort((a, b) => new Date(a.date) - new Date(b.date))
}

// Alias to maintain compatibility
export const sortedFactsData = getSortedFacts()
