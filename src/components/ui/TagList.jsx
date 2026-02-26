/**
 * Renders a list of tags; optionally show only first maxVisible and "+N" for the rest.
 */
const TagList = ({ tags = [], maxVisible, className = "" }) => {
  if (!tags.length) return null;
  const visible = maxVisible != null ? tags.slice(0, maxVisible) : tags;
  const restCount = maxVisible != null ? tags.length - maxVisible : 0;
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {visible.map((tag) => (
        <span key={tag} className="text-accent text-xs">
          {tag}
        </span>
      ))}
      {restCount > 0 && (
        <span className="text-muted text-xs">+{restCount}</span>
      )}
    </div>
  );
};

export default TagList;
