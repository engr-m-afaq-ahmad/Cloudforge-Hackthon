import { TEAM } from "@/lib/constants";
import RetroWindow from "./retro-window";

export default function Team() {
  return (
    <section id="team" className="py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-8">
          <div className="retro-inset bg-white p-4 inline-block">
            <span className="font-mono text-sm text-[var(--cf-dark)]">
              &gt; RUN C:\CLOUDFORGE\ORGANIZING_TEAM.EXE
            </span>
          </div>
        </div>

        <RetroWindow title="ORGANIZING TEAM.EXE" icon="👥">
          <div className="retro-inset bg-white p-4 mb-5">
            <p className="text-sm font-mono text-[var(--cf-dark)] leading-relaxed">
              CloudForge is organized by the AWS Student Builder Group (SBG) at
              UET Lahore.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TEAM.map((group) => (
              <div
                key={group.role}
                className="retro-inset bg-white p-4"
              >
                <div className="font-mono text-sm text-[var(--cf-blue)] mb-2">
                  {group.role}
                </div>
                <ul className="space-y-1">
                  {group.members.map((member) => (
                    <li
                      key={member}
                      className="text-sm font-mono text-[var(--cf-dark)] flex items-center gap-2"
                    >
                      <span className="text-gray-400">›</span>
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[var(--cf-inset-light)] px-3 py-1.5 mt-4 flex items-center justify-between text-xs font-mono text-gray-500">
            <span>{TEAM.length} groups</span>
            <span>AWS SBG UET LAHORE</span>
          </div>
        </RetroWindow>
      </div>
    </section>
  );
}
