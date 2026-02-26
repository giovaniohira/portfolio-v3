// Facts data with unique IDs 
export const factsData = [
  {
    id: 'fact_000',
    type: 'fact',
    year: '2020',
    title: 'First Line of Code',
    description: 'Built a Minecraft mod in Java at 16. That was the first time I wrote actual code.',
    date: '2020-06-01',
    highlight: false
  },
  {
    id: 'fact_002',
    type: 'fact',
    year: '2021',
    title: 'First GitHub Page',
    description: 'Put up my first GitHub repo and a basic personal site. Learned HTML/CSS by breaking things.',
    date: '2021-03-15',
    highlight: false
  },
  {
    id: 'fact_004',
    type: 'fact',
    year: '2022',
    title: 'Joined College',
    description: 'Started Software Engineering at UTFPR. Finally had structure around what I was already doing on my own.',
    date: '2022-02-01',
    highlight: false
  },
  {
    id: 'fact_005',
    type: 'fact',
    year: '2023',
    title: 'First Git Repository',
    description: 'First proper Git repo pushed to GitHub. Version control finally clicked.',
    date: '2023-05-01',
    highlight: false
  },
  {
    id: 'fact_006',
    type: 'fact',
    year: '2023',
    title: 'First Complete Project',
    description: 'Finished my first real project end-to-end in November. Not a tutorial, an actual working app.',
    date: '2023-11-01',
    highlight: false
  },
  {
    id: 'fact_007',
    type: 'fact',
    year: '2024',
    title: 'Portfolio v1 Created',
    description: 'Shipped v1 of my portfolio in September. It looked rough, but it was mine.',
    date: '2024-09-01',
    highlight: false
  }
]

// Function to get fact by ID
export const getFactById = (id) => {
  return factsData.find(fact => fact.id === id)
}

// Function to get all facts sorted by date (non-mutating)
export const getSortedFacts = () => {
  return [...factsData].sort((a, b) => new Date(a.date) - new Date(b.date))
}
