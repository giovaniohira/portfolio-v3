/**
 * Shared page/section header: title with optional accent word, subtitle, separator.
 */
const PageHeader = ({ title, accentWord, subtitle, showSeparator = true, className = "" }) => {
  return (
    <div className={`text-center mb-16 pb-8 fade-in relative ${className}`}>
      <h1 className="text-4xl md:text-5xl font-display font-light mb-6 text-text">
        {title}{accentWord ? <> <span className="accent-text">{accentWord}</span></> : null}
      </h1>
      {subtitle && (
        <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {showSeparator && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[rgba(224,124,36,0.2)] to-transparent" />
      )}
    </div>
  );
};

export default PageHeader;
