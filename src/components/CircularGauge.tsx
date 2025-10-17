interface CircularGaugeProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

const CircularGauge = ({ percentage, size = 200, strokeWidth = 12 }: CircularGaugeProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  // Determine color based on moisture level
  const getColor = () => {
    if (percentage >= 60) return "hsl(var(--primary))"; // Healthy green
    if (percentage >= 30) return "hsl(var(--secondary))"; // Water blue
    return "hsl(var(--destructive))"; // Warning orange
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
    </div>
  );
};

export default CircularGauge;
