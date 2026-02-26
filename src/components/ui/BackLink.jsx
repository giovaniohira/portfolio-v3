import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * Back navigation link with arrow; uses React Router navigate (SPA).
 */
const BackLink = ({ to, label, className = "" }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className={`flex items-center gap-2 text-muted hover:text-accent transition-colors ${className}`}
    >
      <ArrowLeft className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
};

export default BackLink;
