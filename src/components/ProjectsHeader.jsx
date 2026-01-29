const ProjectsHeader = () => {
  return (
    <div className="text-center mb-16 pb-8 fade-in relative">
      <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-100">
        My <span className="accent-text">Projects</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
        A collection of projects that showcase my skills and passion for
        creating innovative solutions.
      </p>
      {/* Subtle gradient separator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
    </div>
  );
};

export default ProjectsHeader;
