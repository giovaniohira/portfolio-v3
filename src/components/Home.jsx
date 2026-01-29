import { motion } from "framer-motion";
import { getFeaturedProjects } from "../data/projects";
import { getSortedExperiences, formatWorkPeriod } from "../data/experience";

const Home = () => {
  const featuredProjects = getFeaturedProjects();
  const experiences = getSortedExperiences();

  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24 pb-8 fade-in relative">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-100">
            Hi, I'm <span className="accent-text">Giovani Ohira</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Junior developer focused on backend with 2 years of professional experience, currently working as SDET{" "}
            <a href="https://voidr.co" target="_blank" rel="noopener noreferrer" className="accent-text hover:opacity-80">
              @voidr
            </a>
          </p>
          {/* Subtle gradient separator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-24 mb-20">
          {/* Column 1: About Me Section */}
          <section className="fade-in-delay-1 text-left">
            <div className="mb-10">
              <h2 className="text-2xl font-light mb-6 text-gray-100 text-left">
                About <span className="accent-text">Me</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-left">
                Get to know me better through my background and experience.
              </p>
            </div>

            <div className="space-y-10">
              {/* Personal Info */}
              <div className="text-left pl-4 py-4 rounded-lg bg-gradient-to-r from-purple-900/5 to-transparent border-l border-purple-500/10">
                <h3 className="text-lg font-medium mb-4 text-gray-100 text-left">
                  Personal Information
                </h3>
                <ul className="space-y-3 text-left">
                  <li className="text-gray-300 text-left flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    21 years old
                  </li>
                  <li className="text-gray-300 text-left flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Curitiba, Brazil
                  </li>
                  <li className="text-gray-300 text-left flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    Backend/Full-Stack Developer
                  </li>
                </ul>
              </div>

              {/* Description */}
              <div className="text-left pt-6 relative">
                <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-purple-500/15 to-transparent" />
                <h3 className="text-lg font-medium mb-4 text-gray-100 text-left">
                  Who I Am
                </h3>
                <p className="text-gray-300 leading-relaxed text-left">
                  I’m a backend-leaning full‑stack developer who cares about building software that doesn’t break in real life—secure by default, fast under pressure, and easy to maintain. I started coding in 2020 and shifted hard into web development in 2022; since then I’ve been learning by shipping: personal projects that force real decisions around architecture, tradeoffs, and reliability.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4 text-left">
                  Today I work as an SDET, which means I’m obsessive about quality and edge cases—and I bring that mindset into development. My core stack is React, Node.js, and TypeScript, and I’m especially drawn to roles where I can own backend features end‑to‑end, tighten up performance and security, and collaborate with a team that values clear communication and clean execution.
                </p>
              </div>
            </div>
          </section>

          {/* Column 2: Experience + Featured Projects */}
          <div className="fade-in-delay-2">
            {/* Experience Section */}
            <section className="text-left pb-6 relative">
              <div className="mb-10">
                <h2 className="text-2xl font-light mb-6 text-gray-100 text-left">
                  <span className="accent-text">Experience</span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-left">
                  Professional experience and career journey.
                </p>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className="bg-gray-800/10 rounded-lg p-5 border border-gray-700/30 hover:bg-gray-800/20 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    onClick={() => window.location.href = `/experience/${exp.id}`}
                  >
                    {/* Company + meta (gray info à direita, mesma altura que título + cargo) */}
                    <div className="flex justify-between items-stretch gap-4 mb-4">
                      <div className="flex flex-col justify-between">
                        <h3 className="text-lg font-medium text-gray-100 mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-sm font-medium text-purple-300">
                          {exp.position}
                        </p>
                      </div>
                      <div className="flex flex-col justify-between text-right text-xs text-gray-400 shrink-0">
                        <p>{formatWorkPeriod(exp.startDate, exp.endDate, exp.isCurrent)}</p>
                        <p>{exp.location}</p>
                        <p>{exp.employmentType}</p>
                      </div>
                    </div>

                    {/* Short Summary (max 4 lines) */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">
                        {exp.shortSummary || exp.functionSummary}
                      </p>
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-xs text-purple-300 hover:text-purple-200 transition-colors">
                      <span>Read more</span>
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Featured Projects Section */}
            {featuredProjects.length > 0 && (
              <div className="mb-12 pt-6 section-fade-top section-glow">
                <h2 className="text-2xl font-light mb-6 text-gray-100">
                  Featured <span className="text-purple-300">Projects</span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Highlighted projects that showcase my skills and passion for
                  creating innovative solutions.
                </p>

                <div className="space-y-4">
                  {featuredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="bg-gray-800/10 rounded-lg p-3 cursor-pointer hover:bg-gray-800/20 transition-all duration-300 border border-gray-700/30"
                      onClick={() =>
                        (window.location.href = `/projects/${project.id}`)
                      }
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xs font-medium text-gray-100">
                          {project.title}
                        </h3>
                        <span
                          className={`text-xs font-medium ${
                            project.status === "completed"
                              ? "text-green-300"
                              : "text-yellow-300"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <p className="text-gray-300 text-xs mb-2 leading-relaxed line-clamp-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 text-xs text-purple-300 bg-purple-900/20 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="px-1.5 py-0.5 text-gray-400 text-xs">
                            +{project.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
