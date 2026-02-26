# Ohira Portfolio

A modern, responsive portfolio website built with React, featuring a dark mode design with purple accents and smooth animations.

## Features

- **Dark Mode Design**: Elegant dark theme with purple highlights
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion powered animations for enhanced UX
- **Interactive Navigation**: Clean navigation with active state indicators
- **Project Showcase**: Full-width project cards with images and descriptions
- **Contact Form**: Functional contact form with validation
- **Timeline Story**: Interactive timeline showing your journey
- **Grainy Background**: Custom grainy texture with blurred purple circles

## Pages

### Home
- Hero section with "Hi, I'm Ohira" headline
- Interactive timeline showing your professional journey
- Call-to-action buttons

### Projects
- Full-width project cards
- Image on left, content on right layout
- Project tags and descriptions
- View project buttons

### Contact
- Contact form with name, email, phone, and description fields
- Contact information display
- Form validation and submission handling

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-v3
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Customization

### Colors
The purple theme can be customized in `tailwind.config.js` under the `colors.purple` section.

### Content
- Update project data in `src/data/projects.js`
- Update experience data in `src/data/experience.js`
- Change contact information in `src/components/Contact.jsx`

### Adding content

**New project**
1. Open `src/data/projects.js`.
2. Use the exported `projectTemplate` at the top as a reference (or copy an existing entry).
3. Add a new object to the `projectsData` array with a unique `id` in the form `proj_XXX` (e.g. `proj_005`).
4. Required fields: `id`, `type: 'project'`, `title`, `description`, `image`, `tags`, `date`, `status`.
5. Optional: `featured`, `longDescription`, `additionalImages`, `links` (github, liveDemo, article, npm), `features`, `architecture`.
6. The project will appear on the Projects page and (if `featured: true`) on the Home page. No routing changes needed.

**New experience**
1. Open `src/data/experience.js`.
2. Use the exported `experienceTemplate` at the top as a reference (or copy an existing entry).
3. Add a new object to the `experienceData` array with a unique `id` in the form `exp_XXX`.
4. Required: `id`, `company`, `position`, `employmentType`, `location`, `startDate`, `endDate` (use `null` if current role), `isCurrent`.
5. Recommended: `shortSummary` (shown on the home card). Optional: `companyUrl`, `description`, `functionSummary`, `keyResponsibilities`, `impact`, `skills`.
6. The experience will appear on the Home page and at `/experience/:id`. No routing changes needed.

### Animations
Animation configurations can be adjusted in the Framer Motion components throughout the app.

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   ├── Home.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` package

## License

This project is open source and available under the [MIT License](LICENSE).
