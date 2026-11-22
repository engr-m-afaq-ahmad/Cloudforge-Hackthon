import { ABOUT_BLOCKS, SITE } from "@/lib/constants";
import RetroWindow from "./retro-window";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto py-12 sm:py-20 px-4 sm:px-8">
      <RetroWindow title="ABOUT" icon="ℹ">
        {/* Info header */}
        <div className="retro-inset bg-white p-4 mb-5">
          <div className="flex items-start gap-2">
            <span className="text-sm shrink-0">ℹ</span>
            <div>
              <p className="text-sm font-mono text-[var(--cf-dark)] leading-relaxed">
                <span className="font-bold">CLOUDFORGE 2026</span> is an AI hackathon
                run by the AWS Student Builder Group (SBG) at UET Lahore. On behalf
                of the AWS SBG UET Lahore, we&apos;re glad to have you at CloudForge.
              </p>
            </div>
          </div>
        </div>

        {/* About blocks as file list */}
        <div className="space-y-0">
          {ABOUT_BLOCKS.map((block) => (
            <div
              key={block.number}
              className="flex items-start gap-4 p-4 hover:bg-[var(--cf-title-bar)]/10 border-b border-[var(--cf-inset-light)] last:border-b-0 cursor-pointer"
            >
              <span className="font-mono text-xs text-gray-500 shrink-0 mt-0.5">
                {block.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-gray-400">
                    {block.number}
                  </span>
                  <h3 className="font-blanka text-base sm:text-lg tracking-wider text-[var(--cf-dark)]">
                    {block.title}
                  </h3>
                </div>
                <p className="text-sm font-mono text-gray-600 leading-relaxed">
                  {block.description}
                </p>
              </div>
              <span className="font-mono text-xs text-[var(--cf-blue)] shrink-0">
                [OPEN]
              </span>
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div className="border-t border-[var(--cf-inset-light)] px-3 py-1.5 mt-3 flex items-center justify-between text-xs font-mono text-gray-500">
          <span>3 modules</span>
          <span>{SITE.name} INFORMATION SYSTEM</span>
        </div>
      </RetroWindow>
    </section>
  );
}
