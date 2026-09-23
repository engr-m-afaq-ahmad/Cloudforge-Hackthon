interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  showControls?: boolean;
  defaultOpen?: boolean;
  icon?: string;
  id?: string;
}

export default function RetroWindow({
  title,
  children,
  className = "",
  showControls = true,
  icon,
  id,
}: RetroWindowProps) {
  return (
    <div
      id={id}
      className={`retro-window animate-slide-in ${className}`}
    >
      {/* Title bar */}
      <div className="retro-title-bar">
        <div className="flex items-center gap-1.5 min-w-0 flex-1">
          {icon && (
            <span className="text-[10px] text-white font-mono shrink-0">
              {icon}
            </span>
          )}
          <span className="text-[11px] font-bold text-white tracking-wide truncate font-mono">
            {title}
          </span>
        </div>
        {showControls && (
          <div className="flex items-center gap-px shrink-0 ml-2">
            <button className="retro-title-btn" aria-label="Minimize">
              <span className="block w-2 h-px bg-black mt-px" />
            </button>
            <button className="retro-title-btn" aria-label="Maximize">
              <span className="block w-[7px] h-[6px] border border-black" />
            </button>
            <button className="retro-title-btn" aria-label="Close">
              <span className="block w-[7px] h-[7px] relative">
                <span className="absolute inset-0 flex items-center justify-center text-[10px] leading-none font-sans font-bold text-black">
                  ×
                </span>
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Menu bar */}
      <div className="bg-[var(--cf-window-bg)] border-b border-[var(--cf-inset-light)] px-2 py-px">
        <div className="flex items-center gap-3 text-[11px] font-mono text-[var(--cf-dark)]">
          <span className="hover:bg-[var(--cf-title-bar)] hover:text-white px-1 cursor-pointer">File</span>
          <span className="hover:bg-[var(--cf-title-bar)] hover:text-white px-1 cursor-pointer">Edit</span>
          <span className="hover:bg-[var(--cf-title-bar)] hover:text-white px-1 cursor-pointer">View</span>
          <span className="hover:bg-[var(--cf-title-bar)] hover:text-white px-1 cursor-pointer">Help</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}
