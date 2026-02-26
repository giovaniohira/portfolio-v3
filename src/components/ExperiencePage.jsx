import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { getExperienceById, formatWorkPeriod } from "../data/experience";
import { ExternalLink } from "lucide-react";
import BackLink from "./ui/BackLink";
import DocumentHead from "./ui/DocumentHead";

const ExperiencePage = () => {
  const { experienceId } = useParams();
  const experience = getExperienceById(experienceId);

  if (!experience) {
    return (
      <div className="min-h-screen px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-display font-light mb-4 text-text">
              Experience not found
            </h1>
            <BackLink to="/" label="Return to home" className="text-accent hover:opacity-90" />
          </div>
        </div>
      </div>
    );
  }

  const pageTitle = `${experience.position} at ${experience.company} | Giovani Ohira`;
  const rawDesc = experience.shortSummary || experience.functionSummary || experience.description || "";
  const pageDescription = rawDesc.length > 155 ? rawDesc.slice(0, 155) + "…" : rawDesc || `Experience: ${experience.position} at ${experience.company}.`;

  return (
    <div className="min-h-screen px-6 py-16">
      <DocumentHead title={pageTitle} description={pageDescription} />
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          className="mb-8 fade-in"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <BackLink to="/" label="Back to home" />
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-12 fade-in-delay-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-light mb-4 text-text">
                {experience.company}
              </h1>
              <p className="text-xl font-medium text-accent mb-4">
                {experience.position}
              </p>
            </div>
            {experience.companyUrl && (
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted hover:text-accent bg-surface/60 border border-border rounded-lg transition-all duration-300 hover:bg-surface/80"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Company</span>
              </a>
            )}
          </div>

          <div className="space-y-2 text-sm text-muted">
            <p>
              {experience.company} · {experience.employmentType}
            </p>
            <p>{formatWorkPeriod(experience.startDate, experience.endDate, experience.isCurrent)}</p>
            <p>{experience.location}</p>
          </div>
        </motion.div>

        {/* Description */}
        {experience.description && (
          <motion.div
            className="mb-8 fade-in-delay-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-lg text-muted leading-relaxed">
              {experience.description}
            </p>
          </motion.div>
        )}

        {/* Function Summary */}
        {experience.functionSummary && (
          <motion.div
            className="mb-8 fade-in-delay-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h2 className="text-2xl font-display font-light mb-4 text-text">
              Function <span className="accent-text">Summary</span>
            </h2>
            <p className="text-muted leading-relaxed">
              {experience.functionSummary}
            </p>
          </motion.div>
        )}

        {/* Key Responsibilities */}
        {experience.keyResponsibilities && experience.keyResponsibilities.length > 0 && (
          <motion.div
            className="mb-8 fade-in-delay-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h2 className="text-2xl font-display font-light mb-4 text-text">
              Key <span className="accent-text">Responsibilities</span>
            </h2>
            <ul className="space-y-3">
              {experience.keyResponsibilities.map((responsibility, idx) => (
                <li
                  key={idx}
                  className="text-muted leading-relaxed flex items-start gap-3"
                >
                  <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                  <span className="flex-1">{responsibility}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Impact */}
        {experience.impact && (
          <motion.div
            className="mb-8 fade-in-delay-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h2 className="text-2xl font-display font-light mb-4 text-text">
              <span className="accent-text">Impact</span>
            </h2>
            <p className="text-muted leading-relaxed">
              {experience.impact}
            </p>
          </motion.div>
        )}

        {/* Skills */}
        {experience.skills && experience.skills.length > 0 && (
          <motion.div
            className="mb-8 fade-in-delay-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <h2 className="text-2xl font-display font-light mb-4 text-text">
              <span className="accent-text">Skills</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {experience.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 text-sm text-accent bg-surface/60 rounded border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Company Link Section */}
        {experience.companyUrl && (
          <motion.div
            className="mt-12 pt-8 border-t border-border fade-in-delay-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <h2 className="text-2xl font-display font-light mb-4 text-text">
              Learn More About <span className="accent-text">{experience.company}</span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              See what {experience.company} is building.
            </p>
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-text hover:text-accent bg-surface/60 border border-border rounded-lg transition-all duration-300 hover:bg-surface/80 hover:border-accent/50"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Visit {experience.company} Website</span>
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExperiencePage;


