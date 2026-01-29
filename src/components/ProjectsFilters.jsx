import { useState } from "react";
import { projectYears, getAllTechnologies } from "../data/projects";

// Categorize technologies
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
      // Everything else (including security items) goes to "other"
      categories.other.push(tech);
    }
  });

  return categories;
};

const ProjectsFilters = ({
  selectedYear,
  selectedTechnologies,
  onYearChange,
  onTechnologyToggle,
  onClearTechnologies,
}) => {
  const technologies = getAllTechnologies();
  const categorized = categorizeTechnologies(technologies);
  
  const [expandedCategories, setExpandedCategories] = useState({
    frontend: true,
    backend: true,
    database: false,
    other: false,
  });

  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    other: "Other",
  };

  const getSelectedCount = (category) => {
    return categorized[category].filter((tech) =>
      selectedTechnologies.includes(tech)
    ).length;
  };

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const hasActiveFilters = selectedTechnologies.length > 0 || selectedYear !== "all";

  return (
    <div className="mb-12 fade-in-delay-1 pb-8 relative">
      {/* Header with Clear All */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
          Filters
        </h3>
        {hasActiveFilters && (
          <button
            onClick={() => {
              onClearTechnologies();
              onYearChange("all");
            }}
            className="text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Clear all</span>
          </button>
        )}
      </div>

      {/* Year Filter - Horizontal */}
      <div className="mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-gray-500 font-medium mr-1">Year:</span>
          <button
            onClick={() => onYearChange("all")}
            className={`px-4 py-1.5 text-sm font-medium rounded-md border transition-all duration-200 min-w-[60px] ${
              selectedYear === "all"
                ? "text-purple-300 bg-purple-900/30 border-purple-500/50 shadow-sm shadow-purple-500/10"
                : "text-gray-400 bg-gray-800/20 border-gray-700/30 hover:border-purple-500/30 hover:text-purple-300 hover:bg-gray-800/30"
            }`}
          >
            All
          </button>
          {projectYears.map((year) => (
            <button
              key={year}
              onClick={() => onYearChange(year)}
              className={`px-4 py-1.5 text-sm font-medium rounded-md border transition-all duration-200 min-w-[60px] ${
                selectedYear === year
                  ? "text-purple-300 bg-purple-900/30 border-purple-500/50 shadow-sm shadow-purple-500/10"
                  : "text-gray-400 bg-gray-800/20 border-gray-700/30 hover:border-purple-500/30 hover:text-purple-300 hover:bg-gray-800/30"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Technology Filters - Expandable Sections Side by Side */}
      <div className="flex flex-wrap gap-x-6 gap-y-4">
        {['frontend', 'backend', 'database', 'other'].map((category) => {
          if (categorized[category].length === 0) return null;

          const selectedCount = getSelectedCount(category);
          const hasSelections = selectedCount > 0;
          const isExpanded = expandedCategories[category];

          return (
            <div key={category} className="flex-1 min-w-[200px]">
              {/* Category Header - Clickable to Expand/Collapse */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between mb-2 p-2 rounded-md hover:bg-gray-800/10 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium ${
                    hasSelections ? "text-purple-300" : "text-gray-500"
                  }`}>
                    {categoryLabels[category]}
                  </span>
                  {selectedCount > 0 && (
                    <span className="text-xs text-purple-400 font-medium">
                      ({selectedCount})
                    </span>
                  )}
                </div>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Technology Tags - Expandable Content */}
              {isExpanded && (
                <div className="flex flex-wrap gap-1.5">
                  {categorized[category].map((tech) => {
                    const isSelected = selectedTechnologies.includes(tech);
                    return (
                      <button
                        key={tech}
                        onClick={() => onTechnologyToggle(tech)}
                        className={`px-3 py-1 text-xs font-medium rounded-md border transition-all duration-200 whitespace-nowrap min-w-[80px] text-center ${
                          isSelected
                            ? "text-purple-300 bg-purple-900/30 border-purple-500/50 shadow-sm shadow-purple-500/10"
                            : "text-gray-400 bg-gray-800/20 border-gray-700/30 hover:border-purple-500/30 hover:text-purple-300 hover:bg-gray-800/30"
                        }`}
                      >
                        {tech}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mt-6 pt-4 border-t border-gray-700/30">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-gray-500 font-medium">
              Active filters:
            </span>
            {selectedYear !== "all" && (
              <span className="px-2 py-0.5 text-xs font-medium text-purple-300 bg-purple-900/20 border border-purple-500/30 rounded">
                {selectedYear}
              </span>
            )}
            {selectedTechnologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-medium text-purple-300 bg-purple-900/20 border border-purple-500/30 rounded"
              >
                {tech}
              </span>
            ))}
            {selectedTechnologies.length > 4 && (
              <span className="px-2 py-0.5 text-xs font-medium text-gray-400">
                +{selectedTechnologies.length - 4}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsFilters;
