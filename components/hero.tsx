"use client";

import { useState, useEffect } from "react";
import RetroWindow from "./retro-window";
import RetroButton from "./retro-button";
import LoadingBar from "./loading-bar";
import Countdown from "./countdown";
import { SITE } from "@/lib/constants";

const BOOT_LINES = [
  "CLOUDFORGE BIOS v2.0",
  "Copyright (c) 2026 Cloudforge Systems",
  "",
  "Checking system memory... 640K OK",
  "Initializing display adapter... OK",
  "Loading CLOUDFORGE...",
  "Loading HACKATHON.DRV...",
  "Starting CLOUDFORGE...",
  "",
  "SYSTEM READY",
];

export default function Hero() {
  const [bootPhase, setBootPhase] = useState<"booting" | "loading" | "ready">("booting");
  const [visibleLines, setVisibleLines] = useState(0);
  const [bootProgress, setBootProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    if (bootPhase === "booting") {
      const lineTimer = setInterval(() => {
        setVisibleLines((prev) => {
          if (prev >= BOOT_LINES.length) {
            clearInterval(lineTimer);
            setTimeout(() => setBootPhase("loading"), 300);
            return prev;
          }
          return prev + 1;
        });
      }, 120);
      return () => clearInterval(lineTimer);
    }

    if (bootPhase === "loading") {
      const progressTimer = setInterval(() => {
        setBootProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            setTimeout(() => setBootPhase("ready"), 200);
            return 100;
          }
          return prev + 5;
        });
      }, 50);
      return () => clearInterval(progressTimer);
    }
  }, [bootPhase]);

  return (
    <section id="hero" className="min-h-screen desktop-bg pt-0">
      <div className="min-h-screen flex items-start justify-center p-4 sm:p-8 pt-20 sm:pt-24">
        <div className="w-full max-w-4xl">
          {/* Boot Screen */}
          {bootPhase === "booting" && (
            <RetroWindow title="CLOUDFORGE BOOT" icon="⚙" showControls={false}>
              <div className="bg-black text-green-400 font-mono text-xs sm:text-sm p-4 min-h-[200px] crt-overlay">
                {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className={`${i === BOOT_LINES.length - 1 && visibleLines === BOOT_LINES.length ? "text-white font-bold" : ""}`}>
                    {line || "\u00A0"}
                  </div>
                ))}
                <span className="animate-blink">_</span>
              </div>
            </RetroWindow>
          )}

          {/* Loading Phase */}
          {bootPhase === "loading" && (
            <RetroWindow title="LOADING CLOUDFORGE" icon="⏳" showControls={false}>
              <div className="p-4">
                <div className="text-[11px] font-mono text-[var(--cf-dark)] mb-3">
                  Loading hackathon modules...
                </div>
                <LoadingBar progress={bootProgress} />
                <div className="flex justify-between mt-2 text-[10px] font-mono text-gray-500">
                  <span>{bootProgress}% complete</span>
                  <span>Initializing...</span>
                </div>
              </div>
            </RetroWindow>
          )}

          {/* Ready - Main Hero */}
          {bootPhase === "ready" && (
            <div className="space-y-4 animate-fade-in">
              {/* Main window */}
              <RetroWindow title={SITE.exe} icon="🖥" className="!border-[var(--cf-blue)]">
                <div className="text-center py-8 sm:py-12">
                  {/* System status bar */}
                  <div className="inline-flex items-center gap-2 bg-green-100 border border-green-600 px-3 py-1 mb-8 text-[10px] font-mono text-green-800">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
                    SYSTEM ONLINE — ALL MODULES LOADED
                  </div>

                  {/* Title */}
                  <h1 className="mb-2">
                    <span className="block font-blanka text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-wider text-[var(--cf-blue)]">
                      CLOUD
                    </span>
                    <span className="block font-blanka text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-wider text-[var(--cf-dark)]">
                      FORGE
                    </span>
                  </h1>

                  <div className="font-mono text-xs sm:text-sm tracking-[0.3em] text-gray-500 mb-2">
                    ════════════════════════════════
                  </div>

                  <p className="font-blanka text-lg sm:text-2xl md:text-3xl tracking-[0.2em] text-[var(--cf-dark)] mb-2">
                    HACKATHON
                  </p>

                  <p className="font-mono text-sm sm:text-base text-gray-600 mb-8">
                    FORGE THE FUTURE.
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
                    <RetroButton href="#register" primary>
                      ▶ ENTER CLOUDFORGE
                    </RetroButton>
                    <RetroButton href="#tracks">
                      OPEN TRACKS
                    </RetroButton>
                  </div>

                  {/* Countdown */}
                  <div className="retro-inset p-4 inline-block bg-white">
                    <div className="text-[10px] font-mono text-gray-500 mb-2 tracking-wider">
                      ── SYSTEM CLOCK ──
                    </div>
                    <Countdown />
                  </div>

                  {/* Registration status */}
                  <div className="mt-6 text-[10px] font-mono text-gray-500 tracking-wider">
                    &gt; REGISTRATION STATUS: OPEN
                  </div>
                </div>
              </RetroWindow>

              {/* Floating system notification */}
              {showPopup && (
                <div className="fixed bottom-4 right-4 z-40 hidden sm:block animate-popup">
                  <div className="retro-window !w-64">
                    <div className="retro-title-bar !py-0.5">
                      <span className="text-[9px] font-bold text-white font-mono">⚠ SYSTEM MESSAGE</span>
                      <button
                        className="retro-title-btn !w-3 !h-3"
                        aria-label="Close"
                        onClick={() => setShowPopup(false)}
                      >
                        <span className="text-[8px] font-bold text-black">×</span>
                      </button>
                    </div>
                    <div className="p-3 bg-[var(--cf-window-bg)]">
                      <p className="text-[10px] font-mono text-[var(--cf-dark)] mb-2">
                        ARE YOU READY TO BUILD?
                      </p>
                      <div className="flex gap-2">
                        <RetroButton primary className="!text-[9px] !px-2" onClick={() => setShowPopup(false)}>
                          YES
                        </RetroButton>
                        <RetroButton className="!text-[9px] !px-2" onClick={() => setShowPopup(false)}>
                          NO
                        </RetroButton>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
