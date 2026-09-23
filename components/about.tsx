import { ABOUT_BLOCKS, SITE } from "@/lib/constants";
import RetroWindow from "./retro-window";

export default function About() {
  return (
    <section id="about" className="py-8 sm:py-12 px-4 sm:px-8">
      <RetroWindow title="ABOUT" icon="ℹ">
        {/* Info header */}
        <div className="retro-inset bg-white p-3 mb-4">
          <div className="flex items-start gap-2">
            <span className="text-sm shrink-0">ℹ</span>
            <div>
              <p className="text-[11px] font-mono text-[var(--cf-dark)] leading-relaxed">
                <span className="font-bold">CLOUDFORGE</span> is a hackathon for builders,
                developers, designers and problem solvers. Turn bold ideas into
                working technology.
              </p>
            </div>
          </div>
        </div>

        {/* About blocks as file list */}
        <div className="space-y-0">
          {ABOUT_BLOCKS.map((block) => (
            <div
              key={block.number}
              className="flex items-start gap-3 p-3 hover:bg-[var(--cf-title-bar)]/10 border-b border-[var(--cf-inset-light)] last:border-b-0 cursor-pointer"
            >
              <span className="font-mono text-[10px] text-gray-500 shrink-0 mt-0.5">
                {block.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] text-gray-400">
                    {block.number}
                  </span>
                  <h3 className="font-blanka text-sm sm:text-base tracking-wider text-[var(--cf-dark)]">
                    {block.title}
                  </h3>
                </div>
                <p className="text-[11px] font-mono text-gray-600 leading-relaxed">
                  {block.description}
                </p>
              </div>
              <span className="font-mono text-[10px] text-[var(--cf-blue)] shrink-0">
                [OPEN]
              </span>
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div className="border-t border-[var(--cf-inset-light)] px-2 py-0.5 mt-2 flex items-center justify-between text-[9px] font-mono text-gray-500">
          <span>3 objects</span>
          <span>{SITE.name} INFORMATION SYSTEM</span>
        </div>
      </RetroWindow>
    </section>
  );
}
