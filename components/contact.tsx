import { CONTACTS } from "@/lib/constants";
import RetroWindow from "./retro-window";
import RetroButton from "./retro-button";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-20 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="mb-8">
          <div className="retro-inset bg-white p-4 inline-block">
            <span className="font-mono text-sm text-[var(--cf-dark)]">
              &gt; RUN C:\CLOUDFORGE\CONTACT.EXE
            </span>
          </div>
        </div>

        <RetroWindow title="CONTACT US" icon="☎">
          <div className="retro-inset bg-white p-4 mb-5">
            <p className="text-sm font-mono text-[var(--cf-dark)] leading-relaxed">
              Questions about CloudForge? Reach the AWS Student Builder Group at
              UET Lahore.
            </p>
          </div>

          <div className="space-y-0">
            {CONTACTS.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 border-b border-[var(--cf-inset-light)] last:border-b-0 hover:bg-[var(--cf-title-bar)]/10 transition-colors"
              >
                <span className="font-mono text-xs text-gray-500 w-20 shrink-0">
                  {contact.label}
                </span>
                <span className="font-mono text-sm text-[var(--cf-dark)] flex-1 min-w-0 break-all">
                  {contact.value}
                </span>
                <span className="font-mono text-xs text-[var(--cf-blue)] shrink-0">
                  [OPEN]
                </span>
              </a>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <RetroButton
              primary
              href="https://www.instagram.com/aws_sbg_uet/"
              className="!text-xs"
            >
              FOLLOW @AWS_SBG_UET
            </RetroButton>
          </div>

          <div className="border-t border-[var(--cf-inset-light)] px-3 py-1.5 mt-4 flex items-center justify-between text-xs font-mono text-gray-500">
            <span>{CONTACTS.length} channels</span>
            <span>GOOD LUCK!</span>
          </div>
        </RetroWindow>
      </div>
    </section>
  );
}
