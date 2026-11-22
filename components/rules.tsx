import { RULES, LOGISTICS } from "@/lib/constants";
import RetroWindow from "./retro-window";

export default function Rules() {
  return (
    <section id="rules" className="py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-8">
          <div className="retro-inset bg-white p-4 inline-block">
            <span className="font-mono text-sm text-[var(--cf-dark)]">
              &gt; TYPE C:\CLOUDFORGE\RULES.TXT
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Code of conduct */}
          <RetroWindow title="RULES & CODE OF CONDUCT" icon="§">
            <div className="space-y-0">
              {RULES.map((rule) => (
                <div
                  key={rule.title}
                  className="flex items-start gap-4 p-4 border-b border-[var(--cf-inset-light)] last:border-b-0"
                >
                  <span className="font-mono text-xs text-[var(--cf-blue)] shrink-0 mt-0.5">
                    [✓]
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-blanka text-base sm:text-lg tracking-wider text-[var(--cf-dark)] mb-1">
                      {rule.title}
                    </h3>
                    <p className="text-sm font-mono text-gray-600 leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[var(--cf-inset-light)] px-3 py-1.5 mt-3 flex items-center justify-between text-xs font-mono text-gray-500">
              <span>{RULES.length} rules</span>
              <span>READ BEFORE YOU BUILD</span>
            </div>
          </RetroWindow>

          {/* Venue & logistics */}
          <RetroWindow title="VENUE & LOGISTICS" icon="⌂">
            <div className="retro-inset bg-white p-4 mb-3">
              <p className="text-sm font-mono text-[var(--cf-dark)] leading-relaxed">
                <span className="font-bold">TICKS BIC, UET Lahore</span> — on-site.
                December 09, 2026.
              </p>
            </div>
            <div className="space-y-0">
              {LOGISTICS.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 border-b border-[var(--cf-inset-light)] last:border-b-0"
                >
                  <span className="font-mono text-xs text-gray-400 shrink-0 mt-0.5">
                    &gt;
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-blanka text-base sm:text-lg tracking-wider text-[var(--cf-dark)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-mono text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[var(--cf-inset-light)] px-3 py-1.5 mt-3 flex items-center justify-between text-xs font-mono text-gray-500">
              <span>{LOGISTICS.length} items</span>
              <span>LOGISTICS.TXT</span>
            </div>
          </RetroWindow>
        </div>
      </div>
    </section>
  );
}
