"use client";

import { useState } from "react";
import { FAQ } from "@/lib/constants";
import RetroWindow from "./retro-window";
import RetroButton from "./retro-button";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-8 sm:py-12 px-4 sm:px-8">
      <RetroWindow title="HELP" icon="❓">
        {/* Help header */}
        <div className="retro-inset bg-white p-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">❓</span>
            <span className="font-mono text-[11px] text-[var(--cf-dark)]">
              CLOUDFORGE HELP — Click a question to view answer
            </span>
          </div>
        </div>

        {/* FAQ items */}
        <div className="space-y-0">
          {FAQ.map((item, index) => (
            <div
              key={index}
              className="border-b border-[var(--cf-inset-light)] last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center gap-2 p-3 text-left hover:bg-[var(--cf-title-bar)]/10 transition-colors"
              >
                <span className="font-mono text-[11px] text-[var(--cf-blue)] shrink-0">
                  [{openIndex === index ? "−" : "+"}]
                </span>
                <span className="font-mono text-[11px] text-[var(--cf-dark)]">
                  {item.q}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-3 animate-fade-in">
                  <div className="retro-inset bg-white p-3">
                    <div className="flex items-start gap-2">
                      <span className="text-[10px] text-gray-400 shrink-0 mt-0.5">→</span>
                      <p className="text-[11px] font-mono text-gray-600 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <RetroButton
                      onClick={() => setOpenIndex(null)}
                      className="!text-[9px] !px-2"
                    >
                      OK
                    </RetroButton>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div className="border-t border-[var(--cf-inset-light)] px-2 py-0.5 mt-2 flex items-center justify-between text-[9px] font-mono text-gray-500">
          <span>{FAQ.length} topics available</span>
          <span>CLOUDFORGE HELP SYSTEM v1.0</span>
        </div>
      </RetroWindow>
    </section>
  );
}
