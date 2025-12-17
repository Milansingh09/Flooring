export default function NodeLinesBG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      viewBox="0 0 1000 300"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD400" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      {Array.from({ length: 25 }).map((_, i) => (
        <line
          key={i}
          x1={Math.random() * 1000}
          y1={Math.random() * 300}
          x2={Math.random() * 1000}
          y2={Math.random() * 300}
          stroke="url(#line)"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  );
}
