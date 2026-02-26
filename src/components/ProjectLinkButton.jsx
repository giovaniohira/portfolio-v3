import { ExternalLink, Github, Globe, BookOpen, Package } from "lucide-react";

const ProjectLinkButton = ({ 
  type, 
  href, 
  children, 
  className = "", 
  onClick 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'github':
        return <Github className="w-4 h-4 mr-3" />;
      case 'demo':
      case 'liveDemo':
        return <ExternalLink className="w-4 h-4 mr-3" />;
      case 'article':
        return <BookOpen className="w-4 h-4 mr-3" />;
      case 'npm':
        return <Package className="w-4 h-4 mr-3" />;
      case 'website':
        return <Globe className="w-4 h-4 mr-3" />;
      default:
        return <ExternalLink className="w-4 h-4 mr-3" />;
    }
  };

  const getDefaultText = () => {
    switch (type) {
      case 'github':
        return 'View on GitHub';
      case 'demo':
      case 'liveDemo':
        return 'Live Demo';
      case 'article':
        return 'View Article';
      case 'npm':
        return 'View on NPM';
      case 'website':
        return 'Visit Website';
      default:
        return 'View Link';
    }
  };

  const baseClasses = "flex items-center w-full px-4 py-3 border border-border hover:border-accent/60 text-text rounded transition-all duration-300";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={combinedClasses}
      onClick={onClick}
    >
      {getIcon()}
      {children || getDefaultText()}
    </a>
  );
};

export default ProjectLinkButton;
