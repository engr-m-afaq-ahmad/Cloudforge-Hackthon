"use client";

interface LoadingBarProps {
  progress: number;
  className?: string;
  showLabel?: boolean;
}

export default function LoadingBar({ progress, className = "", showLabel = false }: LoadingBarProps) {
  const blocks = Math.floor((progress / 100) * 20);

  return (
    <div className={className}>
      <div className="retro-progress">
        <div className="retro-progress-blocks">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className={`retro-progress-block transition-colors duration-100 ${
                i < blocks ? "bg-[var(--cf-title-bar)]" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
      {showLabel && (
        <div className="flex justify-between mt-1 text-[10px] font-mono text-[var(--cf-dark)]">
          <span>{Math.round(progress)}%</span>
          <span>{blocks}/20 blocks</span>
        </div>
      )}
    </div>
  );
}
