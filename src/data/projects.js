// Project data with unique IDs
export const projectsData = [
  {
    id: 'proj_001',
    type: 'project',
    title: "Vault: Secure Password & TOTP Manager",
    description: "A full-stack, end-to-end encrypted credentials manager and TOTP authenticator. Implements client-side AES-GCM encryption, stores only encrypted data on the server, with JWT-based auth, React/Next.js frontend, and Node.js/Express backend.",
    longDescription: "Vault is a comprehensive password and TOTP manager built with security as the top priority. It features client-side AES-GCM encryption, ensuring that sensitive data never leaves the user's browser in plaintext.",
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
      "Secure password storage with AES-GCM encryption",
      "TOTP (2FA) secret management",
      "Client-side encryption (master password never leaves browser)",
      "JWT-based user authentication",
      "Role-based access control",
      "Modern React/Next.js frontend",
      "Responsive UI with Tailwind CSS",
      "PostgreSQL database with Prisma ORM"
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
    id: 'proj_002',
    type: 'project',
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing creative work and professional experience. Features smooth animations, dark mode, and optimized performance for the best user experience.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite", "TypeScript"],
    links: {
      github: "https://github.com/giovaniohira/portfolio",
      liveDemo: "https://giovaniohira.dev"
    },
    date: "2025-09-05",
    status: "completed"
  },
  {
    id: 'proj_003',
    type: 'project',
    title: "Google Maps Routes API Wrapper",
    featured: true,
    description: "Lightweight Node.js library that simplifies integration with Google Maps Directions and Routes endpoints.",
    longDescription: "This project provides a clean, reusable wrapper around the Google Maps Routes API, making it easier to build applications that need routing and directions data without repeatedly handling low-level HTTP requests or complex query construction. It supports flexible request building, response parsing, and can be extended to other Google Maps services.",
    image: "https://i.cdn.newsbytesapp.com/images/l39020231213160207.jpeg",
    additionalImages: [
      // add screenshots of example usage or architecture diagrams if desired
    ],
    tags: ["npm", "Node.js", "API", "Google Maps", "Routing"],
    links: {
      github: "https://github.com/giovaniohira/google-maps-routes-api-wrapper",
      npm: "https://www.npmjs.com/package/google-maps-routes-api-wrapper"
      // you could add npm link if published, e.g. npm: "https://www.npmjs.com/package/google-maps-routes-api-wrapper"
    },
    date: "2025-12-15",
    status: "completed",
    features: [
      "Wrapper for Google Maps Directions and Routes APIs",
      "Simplified request builder with query parameter helpers",
      "Automatic parsing of distance, duration, legs, and polyline data",
      "Support for string or LatLng origin/destination inputs",
      "Easily extendable to additional Google Maps services"
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
    description: "A RESTful API for event management, built with Node.js and Express. Provides endpoints for creating, updating, listing, and deleting events with a PostgreSQL database using Prisma ORM.",
    longDescription: "The Event Management API is a backend service designed to handle the core logic of managing events. It supports CRUD operations for events, integrates PostgreSQL as a relational database, and uses Prisma ORM for database access. The project demonstrates clean architecture, RESTful principles, and modern backend development practices such as environment variable management, error handling, and request validation.",
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
      "CRUD operations for events (create, read, update, delete)",
      "RESTful API architecture",
      "PostgreSQL integration with Prisma ORM",
      "Environment variable management with dotenv",
      "Centralized error handling",
      "Validation of request payloads",
      "Separation of concerns with routes, controllers, and services"
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