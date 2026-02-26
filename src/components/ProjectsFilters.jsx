import { useState } from "react";
import { getProjectYears, getAllTechnologies } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";

const categorizeTechnologies = (technologies) => {
  const categories = {
    frontend: [],
    backend: [],
    database: [],
    other: [],
  };

  const frontendKeywords = ['react', 'next.js', 'nextjs', 'tailwind', 'framer', 'vite', 'typescript'];
  const backendKeywords = ['node.js', 'nodejs', 'express', 'javascript', 'rest api', 'api'];
  const databaseKeywords = ['postgresql', 'prisma'];

  technologies.forEach((tech) => {
    const techLower = tech.toLowerCase();
    if (frontendKeywords.some((kw) => techLower.includes(kw) || techLower === kw)) {
      categories.frontend.push(tech);
    } else if (backendKeywords.some((kw) => techLower.includes(kw) || techLower === kw)) {
      categories.backend.push(tech);
    } else if (databaseKeywords.some((kw) => techLower.includes(kw) || techLower === kw)) {
      categories.database.push(tech);
    } else {
      categories.other.push(tech);
    }
  });

  return categories;
};

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  other: "Other",
};

const pillBase =
  "px-2.5 py-1 text-xs font-medium rounded-full border transition-all duration-200 select-none";

const ProjectsFilters = ({
  selectedYear,
  selectedTechnologies,
  onYearChange,
  onTechnologyToggle,
  onClearTechnologies,
}) => {
  const technologies = getAllTechnologies();
  const projectYears = getProjectYears();
  const categorized = categorizeTechnologies(technologies);
  const hasActiveFilters = selectedTechnologies.length > 0 || selectedYear !== "all";

  const handleClearAll = () => {
    onClearTechnologies();
    onYearChange("all");
  };

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="relative rounded-lg border border-border bg-surface/40 overflow-hidden">
        <div
          className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/60"
          aria-hidden
        />

        <div className="pl-4 pr-4 py-3">
          {/* Refine + Year on one row, Clear on the right */}
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mb-3">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[11px] font-display font-medium tracking-widest uppercase text-muted">
                Refine
              </span>
              <span className="text-border">|</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => onYearChange("all")}
                  className={`${pillBase} ${
                    selectedYear === "all"
                      ? "bg-accent/15 text-accent border-accent/50"
                      : "bg-transparent text-muted border-border hover:border-accent/30 hover:text-text"
                  }`}
                >
                  All
                </button>
                {projectYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => onYearChange(year)}
                    className={`${pillBase} ${
                      selectedYear === year
                        ? "bg-accent/15 text-accent border-accent/50"
                        : "bg-transparent text-muted border-border hover:border-accent/30 hover:text-text"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
            <AnimatePresence mode="wait">
              {hasActiveFilters ? (
                <motion.button
                  key="clear"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleClearAll}
                  className="text-[11px] font-medium text-accent hover:text-text transition-colors flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear all
                </motion.button>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Technologies: single row of groups */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {['frontend', 'backend', 'database', 'other'].map((category) => {
              const tags = categorized[category];
              if (!tags.length) return null;

              const selectedCount = tags.filter((t) => selectedTechnologies.includes(t)).length;

              return (
                <div key={category} className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-display font-medium text-text">
                      {categoryLabels[category]}
                    </span>
                    {selectedCount > 0 && (
                      <span className="text-[10px] font-medium text-accent bg-accent/10 px-1 py-0.5 rounded">
                        {selectedCount}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {tags.map((tech) => {
                      const isSelected = selectedTechnologies.includes(tech);
                      return (
                        <button
                          key={tech}
                          onClick={() => onTechnologyToggle(tech)}
                          className={`${pillBase} ${
                            isSelected
                              ? "bg-accent/15 text-accent border-accent/50"
                              : "bg-transparent text-muted border-border hover:border-accent/30 hover:text-text"
                          }`}
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsFilters;
