import { TIMELINE } from "@/lib/constants";
import RetroWindow from "./retro-window";

export default function Timeline() {
  return (
    <section id="timeline" className="py-8 sm:py-12 px-4 sm:px-8">
      <RetroWindow title="SYSTEM LOG" icon="📋">
        {/* Terminal header */}
        <div className="bg-black text-green-400 font-mono text-[10px] p-2 mb-3 flex items-center justify-between">
          <span>CLOUDFORGE SYSTEM LOG</span>
          <span className="animate-blink">█</span>
        </div>

        {/* Log entries */}
        <div className="retro-inset bg-black p-3 space-y-0">
          {TIMELINE.map((item, index) => (
            <div
              key={item.step}
              className="flex items-start gap-3 text-[11px] font-mono py-1.5 border-b border-gray-800 last:border-b-0"
            >
              {/* Timestamp */}
              <span className="text-green-500 shrink-0 w-12">
                {item.time}
              </span>

              {/* Status indicator */}
              <span className={`shrink-0 w-14 sm:w-16 text-center text-[9px] px-1 ${
                item.status === "COMPLETE"
                  ? "text-green-400"
                  : item.status === "ACTIVE"
                  ? "text-yellow-400"
                  : "text-gray-600"
              }`}>
                [{item.status}]
              </span>

              {/* Message */}
              <div className="flex-1 min-w-0">
                <span className="text-white">
                  {item.title}
                </span>
                <span className="text-gray-500 ml-2 hidden sm:inline">
                  — {item.description}
                </span>
              </div>
            </div>
          ))}

          {/* Blinking cursor line */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-green-500">&gt;</span>
            <span className="animate-blink text-green-400">_</span>
          </div>
        </div>

        {/* Status bar */}
        <div className="border-t border-[var(--cf-inset-light)] px-2 py-0.5 flex items-center justify-between text-[9px] font-mono text-gray-500 mt-2">
          <span>6 entries</span>
          <span>LOG FILE: C:\CLOUDFORGE\SYSTEM.LOG</span>
        </div>
      </RetroWindow>
    </section>
  );
}
