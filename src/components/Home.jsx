import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getFeaturedProjects } from "../data/projects";
import { getSortedExperiences, formatWorkPeriod } from "../data/experience";
import PageHeader from "./ui/PageHeader";
import SectionLayout from "./ui/SectionLayout";
import StatusBadge from "./ui/StatusBadge";
import TagList from "./ui/TagList";
import DocumentHead from "./ui/DocumentHead";

const listVariants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const HOME_DESCRIPTION = "Giovani Ohira — Backend & full-stack developer, Mid-Level Software Engineer at Nexus Labz. 2+ years building production mobile and backend systems. Projects, experience & contact. Curitiba, Brazil.";

const Home = () => {
  const navigate = useNavigate();
  const featuredProjects = getFeaturedProjects();
  const experiences = getSortedExperiences();

  return (
    <SectionLayout>
      <DocumentHead title="Giovani Ohira | Backend & Full-Stack Developer" description={HOME_DESCRIPTION} />
        {/* Header */}
        <PageHeader
          title="Hi, I'm"
          accentWord="Giovani Ohira"
          subtitle={
            <>
              Backend-leaning full-stack developer with 2 years of professional experience. Currently shipping production mobile and backend systems as Mid-Level Software Engineer{" "}
              <a href="https://nexuslabz.co" target="_blank" rel="noopener noreferrer" className="accent-text hover:opacity-80">
                @Nexus Labz
              </a>
            </>
          }
          className="mb-24"
        />

        {/* Main Content - Two Column Layout */}
        <motion.div
          className="grid lg:grid-cols-2 gap-24 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={listVariants}
        >
          {/* Column 1: About Me Section */}
          <motion.section
            className="text-left"
            variants={itemVariants}
          >
            <div className="mb-10">
              <h2 className="text-2xl font-light mb-6 text-text text-left">
                About <span className="accent-text">Me</span>
              </h2>
              <p className="text-muted leading-relaxed text-left">
                Background, stack, and what I bring to a team.
              </p>
            </div>

            <div className="space-y-10">
              {/* Personal Info */}
              <div className="text-left pl-4 py-4 rounded-lg bg-gradient-to-r from-surface/50 to-transparent border-l border-border">
                <h3 className="text-lg font-medium mb-4 text-text text-left">
                  Personal Information
                </h3>
                <ul className="space-y-3 text-left">
                  <li className="text-muted text-left flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-accent"
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
                  <li className="text-muted text-left flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-accent"
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
                  <li className="text-muted text-left flex items-center gap-3">
                    <svg
                      className="w-4 h-4 text-accent"
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
                <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-accent/15 to-transparent" />
                <h3 className="text-lg font-medium mb-4 text-text text-left">
                  Who I Am
                </h3>
                <p className="text-muted leading-relaxed text-left">
                  I’m a backend-leaning full-stack developer. I care about building software that doesn’t break in real life: secure by default, fast under pressure, and easy to maintain. I started coding in 2020 and shifted hard into web development in 2022; since then I’ve been learning by shipping real projects that force real decisions around architecture, tradeoffs, and reliability.
                </p>
                <p className="text-muted leading-relaxed mt-4 text-left">
                  Today I work as an SDET, so I’m obsessive about quality and edge cases, and I bring that mindset into everything I build. My core stack is React, Node.js, and TypeScript. I’m especially drawn to roles where I can own backend features from design to deployment, tighten up performance and security, and work with a team that values clear communication and clean execution.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Column 2: Experience + Featured Projects */}
          <motion.div variants={itemVariants}>
            {/* Experience Section */}
            <section className="text-left pb-6 relative">
              <div className="mb-10">
                <h2 className="text-2xl font-light mb-6 text-text text-left">
                  <span className="accent-text">Experience</span>
                </h2>
                <p className="text-muted leading-relaxed text-left">
                  Where I've worked and what I've shipped.
                </p>
              </div>

              <motion.div
                className="space-y-8"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.id}
                    className="bg-surface/40 rounded-lg p-5 border border-border hover:bg-surface/60 transition-all duration-300 cursor-pointer"
                    variants={itemVariants}
                    onClick={() => navigate(`/experience/${exp.id}`)}
                  >
                    {/* Company + meta: right block fixed at top so multi-line titles don't push it down */}
                    <div className="flex justify-between items-start gap-4 mb-4">
                      <div className="flex flex-col min-w-0">
                        <h3 className="text-lg font-medium text-text mb-1">
                          {exp.company}
                        </h3>
                        <p className="text-sm font-medium text-accent">
                          {exp.position}
                        </p>
                      </div>
                      <div className="flex flex-col items-end text-right text-xs text-muted shrink-0">
                        <p>{formatWorkPeriod(exp.startDate, exp.endDate, exp.isCurrent)}</p>
                        <p>{exp.location}</p>
                        <p>{exp.employmentType}</p>
                      </div>
                    </div>

                    {/* Short Summary (max 4 lines) */}
                    <div className="mb-4">
                      <p className="text-sm text-muted leading-relaxed line-clamp-4">
                        {exp.shortSummary || exp.functionSummary}
                      </p>
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-xs text-accent hover:opacity-80 transition-colors">
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
              </motion.div>
            </section>

            {/* Featured Projects Section */}
            {featuredProjects.length > 0 && (
              <motion.div
                className="mb-12 pt-6 section-fade-top section-glow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={listVariants}
              >
                <h2 className="text-2xl font-light mb-6 text-text">
                  Featured <span className="text-accent">Projects</span>
                </h2>
                <p className="text-muted leading-relaxed mb-8">
                  Side projects where I made real architecture and security
                  decisions, not tutorials.
                </p>

                <motion.div
                  className="space-y-4"
                  variants={listVariants}
                >
                  {featuredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      className="bg-surface/40 rounded-lg p-3 cursor-pointer hover:bg-surface/60 transition-all duration-300 border border-border"
                      onClick={() => navigate(`/projects/${project.id}`)}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xs font-medium text-text">
                          {project.title}
                        </h3>
                        <StatusBadge status={project.status} />
                      </div>

                      <p className="text-muted text-xs mb-2 leading-relaxed line-clamp-1">
                        {project.description}
                      </p>

                      <TagList tags={project.tags} maxVisible={2} className="gap-1" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

          </motion.div>
        </motion.div>
    </SectionLayout>
  );
};

export default Home;
