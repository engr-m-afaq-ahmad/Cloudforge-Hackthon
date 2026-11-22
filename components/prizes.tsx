import { PRIZES } from "@/lib/constants";
import RetroWindow from "./retro-window";
import RetroButton from "./retro-button";

export default function Prizes() {
  return (
    <section id="prizes" className="py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-8">
          <div className="retro-inset bg-white p-4 inline-block">
            <span className="font-mono text-sm text-[var(--cf-dark)]">
              &gt; RUN C:\CLOUDFORGE\PRIZES.EXE
            </span>
          </div>
        </div>

        {/* Prize windows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRIZES.map((prize) => (
            <RetroWindow
              key={prize.place}
              title={`TROPHY ${prize.place}`}
              icon="🏆"
            >
              <div className="text-center py-6">
                {/* Trophy */}
                <div className="text-5xl mb-4">🏆</div>

                {/* Place */}
                <div className="font-mono text-xs text-gray-500 tracking-wider mb-2">
                  ── {prize.place} PLACE ──
                </div>

                {/* Title */}
                <h3 className="font-blanka text-lg sm:text-xl tracking-wider text-[var(--cf-dark)] mb-3">
                  {prize.title}
                </h3>

                {/* Amount */}
                <div className="font-blanka text-2xl sm:text-3xl tracking-wider text-[var(--cf-blue)] mb-5">
                  {prize.amount}
                </div>

                {/* Perks */}
                <div className="retro-inset bg-white p-4 text-left mb-5">
                  <div className="text-xs font-mono text-gray-400 mb-2">INCLUDED:</div>
                  <ul className="space-y-1.5">
                    {prize.perks.map((perk) => (
                      <li
                        key={perk}
                        className="text-sm font-mono text-[var(--cf-dark)] flex items-center gap-2"
                      >
                        <span className="text-[var(--cf-blue)]">✓</span>
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                <RetroButton primary className="w-full">
                  RECOGNITION
                </RetroButton>
              </div>
            </RetroWindow>
          ))}
        </div>

        {/* Recognition note */}
        <div className="mt-6">
          <div className="retro-inset bg-white p-4 text-center">
            <span className="font-mono text-xs text-gray-500">
              WINNING TEAMS ARE FEATURED ON OUR SOCIAL MEDIA CHANNELS
            </span>
            <span className="font-blanka text-lg tracking-wider text-[var(--cf-blue)] ml-2">
              SHIELDS + AWS SWAGS + CERTIFICATES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
