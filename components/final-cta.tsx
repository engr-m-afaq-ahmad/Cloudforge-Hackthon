import RetroWindow from "./retro-window";
import RetroButton from "./retro-button";
import LoadingBar from "./loading-bar";

export default function FinalCTA() {
  return (
    <section id="register" className="py-8 sm:py-12 px-4 sm:px-8">
      {/* Full blue screen */}
      <div className="bg-[var(--cf-blue)] border-4 border-[var(--cf-dark)] p-6 sm:p-12 text-center relative overflow-hidden crt-overlay">
        {/* Scanline texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
          }} />
        </div>

        <div className="relative z-10">
          {/* System prompt */}
          <div className="font-mono text-xs sm:text-sm text-white/60 mb-6 tracking-wider">
            C:\CLOUDFORGE&gt; _
          </div>

          {/* Main heading */}
          <h2 className="font-blanka text-4xl sm:text-5xl md:text-7xl tracking-wider text-white leading-tight mb-4">
            READY TO
            <br />
            FORGE?
          </h2>

          <div className="font-mono text-xs text-white/40 mb-6 tracking-wider">
            ════════════════════════════════
          </div>

          {/* System status */}
          <div className="inline-block retro-inset bg-black/30 p-4 mb-8">
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2 text-[11px] font-mono text-green-300">
                <span>✓</span>
                <span>SYSTEM STATUS: ALL SYSTEMS GO</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-green-300">
                <span>✓</span>
                <span>NETWORK: CONNECTED</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-green-300">
                <span>✓</span>
                <span>REGISTRATION: OPEN</span>
              </div>
            </div>
          </div>

          {/* Loading bar */}
          <div className="max-w-xs mx-auto mb-8">
            <LoadingBar progress={100} />
            <div className="text-[9px] font-mono text-white/40 mt-1 text-center">
              100% — READY
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <RetroButton href="#register" primary className="!text-sm !px-6 !py-2">
              ▶ ENTER CLOUDFORGE
            </RetroButton>
          </div>

          {/* Floating popups */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-[9px] font-mono text-white/30">
            <span className="border border-white/20 px-2 py-0.5">CLICK HERE</span>
            <span className="border border-white/20 px-2 py-0.5">REGISTER NOW</span>
            <span className="border border-white/20 px-2 py-0.5">BUILD SOMETHING</span>
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
