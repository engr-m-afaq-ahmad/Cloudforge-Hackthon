import { TIMELINE } from "@/lib/constants";
import RetroWindow from "./retro-window";

export default function Timeline() {
  return (
    <section id="timeline" className="max-w-5xl mx-auto py-12 sm:py-20 px-4 sm:px-8">
      <RetroWindow title="SCHEDULE.EXE" icon="📋">
        {/* Terminal header */}
        <div className="bg-black text-green-400 font-mono text-xs p-3 mb-4 flex items-center justify-between">
          <span>CLOUDFORGE AGENDA — EXACT TIMES SHARED BEFORE THE EVENT</span>
          <span className="animate-blink">█</span>
        </div>

        {/* Log entries */}
        <div className="retro-inset bg-black p-4 space-y-0">
          {TIMELINE.map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-4 text-sm font-mono py-2.5 border-b border-gray-800 last:border-b-0"
            >
              {/* Timestamp */}
              <span className="text-green-500 shrink-0 w-14">
                {item.time}
              </span>

              {/* Status indicator */}
              <span className={`shrink-0 w-20 text-center text-xs px-1 ${
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
          <div className="flex items-center gap-2 pt-3">
            <span className="text-green-500">&gt;</span>
            <span className="animate-blink text-green-400">_</span>
          </div>
        </div>

        {/* Status bar */}
        <div className="border-t border-[var(--cf-inset-light)] px-3 py-1.5 flex items-center justify-between text-xs font-mono text-gray-500 mt-3">
          <span>7 entries</span>
          <span>AGENDA: C:\CLOUDFORGE\SCHEDULE.LOG</span>
        </div>
      </RetroWindow>
    </section>
  );
}
