import { PRIZES } from "@/lib/constants";
import RetroWindow from "./retro-window";
import RetroButton from "./retro-button";

export default function Prizes() {
  return (
    <section id="prizes" className="py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-6">
          <div className="retro-inset bg-white p-3 inline-block">
            <span className="font-mono text-[11px] text-[var(--cf-dark)]">
              &gt; RUN C:\CLOUDFORGE\TROPHY.EXE
            </span>
          </div>
        </div>

        {/* Prize windows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PRIZES.map((prize) => (
            <RetroWindow
              key={prize.place}
              title={`TROPHY ${prize.place}`}
              icon="🏆"
            >
              <div className="text-center py-4">
                {/* Trophy */}
                <div className="text-4xl mb-3">🏆</div>

                {/* Place */}
                <div className="font-mono text-[10px] text-gray-500 tracking-wider mb-1">
                  ── {prize.place} PLACE ──
                </div>

                {/* Title */}
                <h3 className="font-blanka text-base sm:text-lg tracking-wider text-[var(--cf-dark)] mb-2">
                  {prize.title}
                </h3>

                {/* Amount */}
                <div className="font-blanka text-2xl sm:text-3xl tracking-wider text-[var(--cf-blue)] mb-4">
                  {prize.amount}
                </div>

                {/* Perks */}
                <div className="retro-inset bg-white p-2 text-left mb-4">
                  <div className="text-[9px] font-mono text-gray-400 mb-1">INCLUDED:</div>
                  <ul className="space-y-1">
                    {prize.perks.map((perk) => (
                      <li
                        key={perk}
                        className="text-[10px] font-mono text-[var(--cf-dark)] flex items-center gap-1.5"
                      >
                        <span className="text-[var(--cf-blue)]">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                <RetroButton primary className="w-full">
                  CLAIM PRIZE
                </RetroButton>
              </div>
            </RetroWindow>
          ))}
        </div>

        {/* Total prize pool */}
        <div className="mt-4">
          <div className="retro-inset bg-white p-3 text-center">
            <span className="font-mono text-[10px] text-gray-500">TOTAL PRIZE POOL: </span>
            <span className="font-blanka text-lg tracking-wider text-[var(--cf-blue)]">$50,000+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
