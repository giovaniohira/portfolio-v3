// Project data with unique IDs
export const projectsData = [
  {
    id: 'proj_001',
    type: 'project',
    title: "Vault: Secure Password & TOTP Manager",
    description: "End-to-end encrypted password + TOTP manager. Client-side AES‑GCM (WebCrypto) keeps secrets in the browser; the server stores only ciphertext. Built with Next.js/React, Node/Express, Prisma, and Postgres.",
    longDescription: "Vault started as a security challenge: build a password + TOTP manager where the master password never leaves the device and the server never sees plaintext secrets. The core model is client-side AES‑GCM encryption via WebCrypto—Vault only sends encrypted payloads to the backend, so the database remains useful to an attacker only as ciphertext.\n\nBeyond the crypto, I focused on the parts that make security usable: a clean flow for creating and managing credentials, predictable auth with JWT, and a UI that makes the “secure default” path the easiest path. This project pushed me to think in threat models and trade-offs, not just features—what to protect, where to protect it, and how to keep the system maintainable as it grows.",
    image: "https://i.ibb.co/ZpgScTy4/image-2025-08-27-213005278.png",
    additionalImages: [
      "https://i.ibb.co/cS2LspnJ/image-2025-08-27-214106190.png",
      "https://i.ibb.co/Hf1LjWsT/image-2025-08-27-214401791.png",
      "https://i.ibb.co/Y7mWknXn/image-2025-08-27-214614962.png",
      "https://i.ibb.co/Ndw8gMVC/image-2025-08-27-220123188.png",
      "https://i.ibb.co/dwFnqYFB/image-2025-08-27-220316244.png"
    ],
    tags: ["TypeScript", "Next.js", "React", "Node.js", "Express", "Prisma", "PostgreSQL", "AES-GCM", "JWT", "WebCrypto", "Tailwind CSS"],
    links: {
      github: "https://github.com/giovaniohira/vault",
      liveDemo: "https://vault-demo.vercel.app",
      article: "https://medium.com/@giovaniohira/how-i-built-an-end-to-end-encrypted-credentials-manager-and-authenticator-and-what-i-learned-about-74ffb89f0d01"
    },
    date: "2025-06-01",
    status: "completed",
    featured: true,
    features: [
      "Encrypted-at-source storage: credentials and TOTP secrets are AES‑GCM encrypted in the browser before any network request",
      "Master password stays client-side; backend persists only encrypted blobs",
      "JWT authentication to protect access to encrypted vault data",
      "Prisma + PostgreSQL persistence layer built for safe data access patterns",
      "Responsive, fast UI built with Next.js/React and Tailwind CSS"
    ],
    architecture: {
      frontend: "Next.js (React) with TypeScript",
      backend: "Node.js with Express.js",
      database: "PostgreSQL with Prisma ORM",
      encryption: "AES-GCM with WebCrypto API",
      authentication: "JWT tokens with bcrypt password hashing"
    }
  },
  {
    id: 'proj_003',
    type: 'project',
    title: "Google Maps Routes API Wrapper",
    featured: true,
    description: "A lightweight Node.js wrapper for Google Maps Routes/Directions that improves developer experience with cleaner request building and parsed, consistent outputs.",
    longDescription: "This project is about developer experience. Instead of rewriting low-level HTTP calls and query construction every time I needed routes data, I built a small wrapper that centralizes configuration, request building, and response parsing.\n\nThe result is a reusable module that makes routing features faster to ship and easier to maintain—especially when an app needs to evolve beyond a single endpoint or a single route format.",
    image: "https://i.cdn.newsbytesapp.com/images/l39020231213160207.jpeg",
    additionalImages: [
      // add screenshots of example usage or architecture diagrams if desired
    ],
    tags: ["npm", "Node.js", "API", "Google Maps", "Routing"],
    links: {
      github: "https://github.com/giovaniohira/google-maps-routes-api-wrapper",
      npm: "https://www.npmjs.com/package/google-maps-routes-api-wrapper"
    },
    date: "2025-12-15",
    status: "completed",
    features: [
      "Centralized wrapper for Google Maps Directions and Routes endpoints",
      "Request builder that keeps query construction readable and reusable",
      "Response parsing to extract common route fields (distance, duration, legs, polylines)",
      "Input flexibility for origin/destination formats",
      "Designed to be extendable as routing needs grow"
    ],
    architecture: {
      language: "JavaScript (Node.js)",
      packageManager: "npm",
      coreModules: [
        "Request Builder: generates URL and query parameters",
        "Response Parser: extracts route details like distance, duration, and polylines",
        "Error Handling Layer: normalizes Google Maps API errors"
      ],
      dependencies: [
        "axios (HTTP client)",
        "dotenv (environment variable management)"
      ],
      design: "Modular structure with clear separation of concerns for request building, response parsing, and configuration. Built to be imported as a standalone package or integrated into larger back-end services."
    }
  },
  {
    id: 'proj_004',
    type: 'project',
    title: "Event Management API",
    description: "REST API for event CRUD built with Express + Prisma + Postgres, with validation and centralized error handling to keep the service predictable as it scales.",
    longDescription: "This project is a clean, practical backend foundation for managing events—create, update, list, and delete—backed by PostgreSQL and Prisma. I built it to be easy to extend: clear separation between routes/controllers/services, predictable error handling, and input validation that protects the database and the developer experience.\n\nIt’s the kind of API work I enjoy: small surface area, strong fundamentals, and a structure that stays readable when requirements change.",
    image: "https://blog.accurate.com.br/wp-content/uploads/2023/10/apiwebservicewebstoryslide2-1920x1080-1.jpg", // can be replaced with a screenshot of your repo or diagram
    additionalImages: [
      // here you can add code screenshots, architecture diagrams, or test screenshots
    ],
    tags: ["JavaScript", "Node.js", "Express", "Prisma", "PostgreSQL", "REST API", "dotenv"],
    links: {
      github: "https://github.com/giovaniohira/event-management-api"
    },
    date: "2024-06-01", // used an estimate, you can put the actual start or end date
    status: "completed",
    featured: false,
    features: [
      "CRUD endpoints for event management with a predictable REST surface",
      "Prisma + PostgreSQL persistence with clear data access patterns",
      "Centralized error handling for consistent API responses",
      "Request payload validation to prevent bad data and reduce debugging time",
      "Separation of concerns (routes/controllers/services) for maintainability"
    ],
    architecture: {
      language: "JavaScript (Node.js)",
      framework: "Express.js",
      database: "PostgreSQL",
      orm: "Prisma",
      environment: "dotenv for config management",
      design: "Layered architecture separating routes, controllers, and database logic. Built to be modular, scalable, and maintainable."
    }
  },
    
]

// Function to get project by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id)
}

// Function to get all projects sorted by date
export const getSortedProjects = () => {
  return projectsData.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Function to group projects by year
export const getProjectsByYear = () => {
  return getSortedProjects().reduce((acc, project) => {
    const year = new Date(project.date).getFullYear()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(project)
    return acc
  }, {})
}

// Function to get unique years from projects
export const getProjectYears = () => {
  return Object.keys(getProjectsByYear()).sort((a, b) => b - a)
}

// Function to get all technologies
export const getAllTechnologies = () => {
  const allTags = getSortedProjects().flatMap(project => project.tags)
  return [...new Set(allTags)].sort()
}

// Function to filter projects by technology
export const filterProjectsByTechnology = (technology) => {
  if (!technology || technology === 'all') return getSortedProjects()
  return getSortedProjects().filter(project => 
    project.tags.some(tag => tag.toLowerCase().includes(technology.toLowerCase()))
  )
}

// Function to get featured projects
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured === true)
}

// Aliases to maintain compatibility
export const sortedProjectsData = getSortedProjects()
export const projectsByYear = getProjectsByYear()
export const projectYears = getProjectYears() 
