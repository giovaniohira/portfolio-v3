/**
 * Standard page/section wrapper: min-height, padding, max-width container.
 */
const SectionLayout = ({ children, maxWidth = "4xl", className = "" }) => {
  const maxWidthClass = maxWidth === "6xl" ? "max-w-6xl" : "max-w-4xl";
  return (
    <div className={`min-h-screen px-6 py-16 ${className}`}>
      <div className={`${maxWidthClass} mx-auto`}>
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
