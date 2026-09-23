interface RetroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  primary?: boolean;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}

export default function RetroButton({
  children,
  onClick,
  href,
  primary = false,
  className = "",
  disabled = false,
  type = "button",
}: RetroButtonProps) {
  const classes = `retro-btn ${primary ? "retro-btn-primary" : ""} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
