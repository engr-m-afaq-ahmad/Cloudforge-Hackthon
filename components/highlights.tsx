import { HIGHLIGHTS } from "@/lib/constants";
import RetroWindow from "./retro-window";

export default function Highlights() {
  return (
    <section className="py-4 sm:py-6 px-4 sm:px-8">
      <RetroWindow title="SYSTEM STATUS" icon="📊" showControls={false}>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--cf-inset-light)]">
          {HIGHLIGHTS.map((item) => (
            <div key={item.label} className="text-center px-4 py-3">
              <div className="font-blanka text-2xl sm:text-3xl md:text-4xl tracking-wider text-[var(--cf-blue)]">
                {item.value}
              </div>
              <div className="text-[9px] sm:text-xs font-mono tracking-[0.1em] sm:tracking-[0.15em] text-gray-600 uppercase mt-1 break-words">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        {/* Status bar */}
        <div className="border-t border-[var(--cf-inset-light)] px-2 py-0.5 flex items-center justify-between text-[9px] font-mono text-gray-500">
          <span>500+ users connected</span>
          <span>UPTIME: 99.9%</span>
        </div>
      </RetroWindow>
    </section>
  );
}
