import { HIGHLIGHTS, SITE } from "@/lib/constants";
import RetroWindow from "./retro-window";

export default function Highlights() {
  return (
    <section className="max-w-5xl mx-auto py-10 sm:py-14 px-4 sm:px-8">
      <RetroWindow title="SYSTEM STATUS" icon="📊" showControls={false}>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--cf-inset-light)]">
          {HIGHLIGHTS.map((item) => (
            <div key={item.label} className="text-center px-5 py-5">
              <div className="font-blanka text-3xl sm:text-4xl md:text-5xl tracking-wider text-[var(--cf-blue)]">
                {item.value}
              </div>
              <div className="text-xs sm:text-xs font-mono tracking-[0.1em] sm:tracking-[0.15em] text-gray-600 uppercase mt-2 break-words">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        {/* Status bar */}
        <div className="border-t border-[var(--cf-inset-light)] px-3 py-1.5 flex items-center justify-between text-xs font-mono text-gray-500">
          <span>AWS SBG UET LAHORE</span>
          <span>{SITE.date.toUpperCase()}</span>
        </div>
      </RetroWindow>
    </section>
  );
}
