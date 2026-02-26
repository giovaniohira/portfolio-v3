import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getSortedProjects } from "../data/projects";
import SectionLayout from "./ui/SectionLayout";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsFilters from "./ProjectsFilters";
import ProjectsGrid from "./ProjectsGrid";
import DocumentHead from "./ui/DocumentHead";

const Projects = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const scrollPositionRef = useRef(0);
  const isFilteringRef = useRef(false);
  const sortedProjects = getSortedProjects();

  const toggleTechnology = (tech) => {
    // Store current scroll position before filtering
    scrollPositionRef.current = window.pageYOffset;
    isFilteringRef.current = true;
    
    setSelectedTechnologies((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const handleYearChange = (year) => {
    // Store current scroll position before filtering
    scrollPositionRef.current = window.pageYOffset;
    isFilteringRef.current = true;
    setSelectedYear(year);
  };

  const handleClearTechnologies = () => {
    // Store current scroll position before filtering
    scrollPositionRef.current = window.pageYOffset;
    isFilteringRef.current = true;
    setSelectedTechnologies([]);
  };

  const handleClearAllFilters = () => {
    // Store current scroll position before filtering
    scrollPositionRef.current = window.pageYOffset;
    isFilteringRef.current = true;
    setSelectedYear("all");
    setSelectedTechnologies([]);
  };

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  // Effect to restore scroll position after filtering
  useEffect(() => {
    if (isFilteringRef.current) {
      // Use requestAnimationFrame to ensure DOM has updated
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPositionRef.current);
        isFilteringRef.current = false;
      });
    }
  }, [selectedYear, selectedTechnologies]);

  const filteredProjects = sortedProjects.filter((project) => {
    const projectYear = new Date(project.date).getFullYear().toString();
    const yearMatch = selectedYear === "all" || projectYear === selectedYear;
    const techMatch =
      selectedTechnologies.length === 0 ||
      selectedTechnologies.some((tech) => project.tags.includes(tech));
    return yearMatch && techMatch;
  });

  return (
    <SectionLayout>
      <DocumentHead
        title="Projects"
        description="Portfolio projects by Giovani Ohira: full-stack and backend apps, APIs, and side projects. TypeScript, React, Node.js, security and architecture."
      />
      <ProjectsHeader />
      
      <ProjectsFilters
        selectedYear={selectedYear}
        selectedTechnologies={selectedTechnologies}
        onYearChange={handleYearChange}
        onTechnologyToggle={toggleTechnology}
        onClearTechnologies={handleClearTechnologies}
      />

      <div className="relative pt-8">
        {/* Subtle separator before projects grid */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[rgba(224,124,36,0.2)] to-transparent" />
        
        <ProjectsGrid
          filteredProjects={filteredProjects}
          onProjectClick={handleProjectClick}
          onClearAllFilters={handleClearAllFilters}
        />
      </div>
    </SectionLayout>
  );
};

export default Projects;
