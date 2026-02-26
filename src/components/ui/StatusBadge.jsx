/**
 * Project status badge: completed → green, else → yellow.
 */
const StatusBadge = ({ status, className = "" }) => {
  const isCompleted = status === "completed";
  return (
    <span
      className={`text-xs font-medium ${
        isCompleted ? "text-green-300" : "text-yellow-300"
      } ${className}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
