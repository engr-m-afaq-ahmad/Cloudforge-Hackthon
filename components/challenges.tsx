import { CHALLENGES } from "@/lib/constants";
import RetroWindow from "./retro-window";
import RetroButton from "./retro-button";

export default function Challenges() {
  return (
    <section id="tracks" className="py-8 sm:py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-6">
          <div className="retro-inset bg-white p-3 inline-block">
            <span className="font-mono text-[11px] text-[var(--cf-dark)]">
              &gt; DIR C:\CLOUDFORGE\TRACKS\*
            </span>
          </div>
        </div>

        {/* Challenge windows - stacked */}
        <div className="space-y-4">
          {CHALLENGES.map((challenge) => (
            <RetroWindow
              key={challenge.number}
              title={challenge.exe}
              icon={`[${challenge.icon}]`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-[10px] text-gray-400">
                      TRACK {challenge.number}
                    </span>
                    <span className="font-mono text-[10px] text-gray-300">|</span>
                    <span className="font-mono text-[10px] text-[var(--cf-blue)]">
                      {challenge.exe}
                    </span>
                  </div>
                  <h3 className="font-blanka text-lg sm:text-xl tracking-wider text-[var(--cf-dark)] mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-[11px] font-mono text-gray-600 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <RetroButton primary className="!text-[10px]">
                    RUN
                  </RetroButton>
                  <RetroButton className="!text-[10px]">
                    VIEW
                  </RetroButton>
                </div>
              </div>
            </RetroWindow>
          ))}
        </div>
      </div>
    </section>
  );
}
