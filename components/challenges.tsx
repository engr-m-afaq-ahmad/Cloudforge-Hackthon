import { ROUNDS, JUDGING, SAMPLE_CHALLENGE } from "@/lib/constants";
import RetroWindow from "./retro-window";

export default function Challenges() {
  return (
    <section id="tracks" className="py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-8">
          <div className="retro-inset bg-white p-4 inline-block">
            <span className="font-mono text-sm text-[var(--cf-dark)]">
              &gt; DIR C:\CLOUDFORGE\FORMAT\*
            </span>
          </div>
        </div>

        {/* Rounds */}
        <div className="space-y-6">
          {ROUNDS.map((round) => (
            <RetroWindow
              key={round.number}
              title={round.exe}
              icon={`[${round.icon}]`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-gray-400">
                  ROUND {round.number}
                </span>
                <span className="font-mono text-xs text-gray-300">|</span>
                <span className="font-mono text-xs text-[var(--cf-blue)]">
                  {round.subtitle}
                </span>
              </div>
              <h3 className="font-blanka text-xl sm:text-2xl tracking-wider text-[var(--cf-dark)] mb-2">
                {round.title}
              </h3>
              <p className="text-sm font-mono text-gray-600 leading-relaxed mb-3">
                {round.description}
              </p>
              <div className="retro-inset bg-white p-4">
                <ol className="space-y-1.5">
                  {round.steps.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-2 text-sm font-mono text-[var(--cf-dark)] leading-relaxed"
                    >
                      <span className="text-[var(--cf-blue)] shrink-0">
                        {i + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </RetroWindow>
          ))}
        </div>

        {/* Judging criteria */}
        <div className="mt-6">
          <RetroWindow title="WHAT_JUDGES_LOOK_FOR.EXE" icon="[?]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {JUDGING.map((item) => (
                <div key={item.title} className="retro-inset bg-white p-4">
                  <div className="font-mono text-xs text-[var(--cf-blue)] mb-1">
                    {item.title}
                  </div>
                  <p className="text-sm font-mono text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm font-mono text-gray-500 mt-3 leading-relaxed">
              Not judged: UI, visuals, styling or how polished it looks. A plain
              solution that works and solves the problem well beats a pretty one
              that doesn&apos;t.
            </p>
          </RetroWindow>
        </div>

        {/* Sample challenge */}
        <div className="mt-6">
          <RetroWindow title="CHALLENGE_QUEUELESS.EXE" icon="[>]">
            <div className="retro-inset bg-white p-4 mb-3">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-blanka text-xl sm:text-2xl tracking-wider text-[var(--cf-dark)]">
                  {SAMPLE_CHALLENGE.name}
                </h3>
                <span className="font-mono text-xs px-1.5 py-0.5 border border-[var(--cf-blue)] text-[var(--cf-blue)]">
                  {SAMPLE_CHALLENGE.difficulty}
                </span>
                <span className="font-mono text-xs px-1.5 py-0.5 border border-[var(--cf-inset-light)] text-gray-600">
                  {SAMPLE_CHALLENGE.category}
                </span>
                <span className="font-mono text-xs px-1.5 py-0.5 border border-[var(--cf-inset-light)] text-gray-600">
                  ⏱ {SAMPLE_CHALLENGE.duration}
                </span>
              </div>
              <p className="text-sm font-mono text-gray-500 mb-2">
                {SAMPLE_CHALLENGE.subtitle}
              </p>
              <p className="text-sm font-mono text-gray-600 leading-relaxed">
                {SAMPLE_CHALLENGE.concept}
              </p>
            </div>

            <div className="mb-3">
              <div className="font-mono text-xs text-[var(--cf-dark)] mb-2">
                ── REQUIREMENTS ──
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SAMPLE_CHALLENGE.requirements.map((group) => (
                  <div key={group.title} className="retro-inset bg-white p-4">
                    <div className="font-mono text-xs text-[var(--cf-blue)] mb-1">
                      {group.title}
                    </div>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm font-mono text-gray-600 flex items-start gap-1.5 leading-relaxed"
                        >
                          <span className="text-gray-400 shrink-0">›</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="retro-inset bg-white p-4">
                <div className="font-mono text-xs text-[var(--cf-dark)] mb-2">
                  ── JUDGING CRITERIA ──
                </div>
                <ul className="space-y-1">
                  {SAMPLE_CHALLENGE.criteria.map((item) => (
                    <li
                      key={item.label}
                      className="text-sm font-mono text-gray-600 flex items-center justify-between gap-2"
                    >
                      <span>{item.label}</span>
                      <span className="text-[var(--cf-blue)] shrink-0">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="retro-inset bg-white p-4">
                <div className="font-mono text-xs text-[var(--cf-dark)] mb-2">
                  ── WHAT TO SUBMIT ──
                </div>
                <ul className="space-y-1">
                  {SAMPLE_CHALLENGE.submit.map((item) => (
                    <li
                      key={item}
                      className="text-sm font-mono text-gray-600 flex items-start gap-1.5 leading-relaxed"
                    >
                      <span className="text-[var(--cf-blue)] shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="retro-inset bg-white p-4">
                <div className="font-mono text-xs text-[var(--cf-dark)] mb-2">
                  ── NICE TO HAVE (BONUS) ──
                </div>
                <ul className="space-y-1">
                  {SAMPLE_CHALLENGE.niceToHave.map((item) => (
                    <li
                      key={item}
                      className="text-sm font-mono text-gray-600 flex items-start gap-1.5 leading-relaxed"
                    >
                      <span className="text-gray-400 shrink-0">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="retro-inset bg-white p-4">
                <div className="font-mono text-xs text-[var(--cf-dark)] mb-2">
                  ── RULES ──
                </div>
                <ul className="space-y-1">
                  {SAMPLE_CHALLENGE.rules.map((item) => (
                    <li
                      key={item}
                      className="text-sm font-mono text-gray-600 flex items-start gap-1.5 leading-relaxed"
                    >
                      <span className="text-gray-400 shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-[var(--cf-inset-light)] px-3 py-1.5 mt-4 flex items-center justify-between text-xs font-mono text-gray-500">
              <span>SAMPLE ROUND 1 PROBLEM</span>
              <span>FOCUS ON SOLVING THE PROBLEM, NOT JUST ENDPOINTS</span>
            </div>
          </RetroWindow>
        </div>
      </div>
    </section>
  );
}
