export const PIXEL_ICONS = {
  folder: "📁",
  floppy: "💾",
  warning: "⚠",
  info: "ℹ",
  computer: "🖥",
  file: "📄",
  exe: "⚙",
  key: "🔑",
  disk: "💿",
  terminal: ">_",
  check: "✓",
  error: "✕",
  star: "★",
  arrow: "→",
  bullet: "•",
  hourglass: "⏳",
  network: "🌐",
  lock: "🔒",
  trophy: "🏆",
  code: "</>",
} as const;

type PixelIconKey = keyof typeof PIXEL_ICONS;

interface PixelIconProps {
  name: PixelIconKey;
  className?: string;
}

export default function PixelIcon({ name, className = "" }: PixelIconProps) {
  return (
    <span className={`inline-block text-sm ${className}`} role="img" aria-label={name}>
      {PIXEL_ICONS[name]}
    </span>
  );
}
