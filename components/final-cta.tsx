import RetroButton from "./retro-button";
import LoadingBar from "./loading-bar";

export default function FinalCTA() {
  return (
    <section id="register" className="max-w-5xl mx-auto py-12 sm:py-20 px-4 sm:px-8">
      {/* Full blue screen */}
      <div className="bg-[var(--cf-blue)] border-4 border-[var(--cf-dark)] p-8 sm:p-14 text-center relative overflow-hidden crt-overlay">
        {/* Scanline texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
          }} />
        </div>

        <div className="relative z-10">
          {/* System prompt */}
          <div className="font-mono text-xs sm:text-sm text-white/60 mb-8 tracking-wider">
            C:\CLOUDFORGE&gt; _
          </div>

          {/* Main heading */}
          <h2 className="font-blanka text-5xl sm:text-6xl md:text-7xl tracking-wider text-white leading-tight mb-6">
            READY TO
            <br />
            FORGE?
          </h2>

          <div className="font-mono text-xs text-white/40 mb-8 tracking-wider">
            ════════════════════════════════
          </div>

          {/* System status */}
          <div className="inline-block retro-inset bg-black/30 p-5 mb-10">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2.5 text-sm font-mono text-green-300">
                <span>✓</span>
                <span>SYSTEM STATUS: ALL SYSTEMS GO</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-mono text-green-300">
                <span>✓</span>
                <span>NETWORK: CONNECTED</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-mono text-green-300">
                <span>✓</span>
                <span>REGISTRATION: OPEN — DEC 09, 2026</span>
              </div>
            </div>
          </div>

          {/* Loading bar */}
          <div className="max-w-xs mx-auto mb-10">
            <LoadingBar progress={100} />
            <div className="text-xs font-mono text-white/40 mt-2 text-center">
              100% — READY
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <RetroButton href="#register" primary className="!text-base !px-8 !py-3">
              ▶ REGISTER NOW
            </RetroButton>
          </div>

          {/* Floating popups */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs font-mono text-white/30">
            <span className="border border-white/20 px-3 py-1.5">DEC 09, 2026</span>
            <span className="border border-white/20 px-3 py-1.5">TICKS BIC, UET LAHORE</span>
            <span className="border border-white/20 px-3 py-1.5">TEAM OF 4</span>
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white/20" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white/20" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white/20" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white/20" />
      </div>
    </section>
  );
}
