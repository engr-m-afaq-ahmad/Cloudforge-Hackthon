"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main title bar - full width Windows style */}
      <div className="retro-title-bar !rounded-none">
        <div className="flex items-center gap-2 min-w-0 flex-1 px-3 py-1.5">
          <span className="text-sm text-white font-mono shrink-0">🖥</span>
          <span className="text-sm font-bold text-white tracking-wider font-mono truncate">
            {SITE.exe}
          </span>
        </div>

        {/* Desktop nav links - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-0 text-xs font-mono">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:bg-white/20 hover:text-white px-2.5 py-1.5 transition-colors"
            >
              [{link.label.toUpperCase()}]
            </a>
          ))}
          <a
            href="#register"
            className="text-white bg-[var(--cf-blue)] hover:bg-[var(--cf-blue)]/80 px-3.5 py-1.5 ml-1 font-bold"
          >
            [REGISTER]
          </a>
        </nav>

        {/* Window controls */}
        <div className="flex items-center gap-px ml-2 shrink-0">
          <button className="retro-title-btn" aria-label="Minimize">
            <span className="block w-2 h-px bg-black mt-px" />
          </button>
          <button className="retro-title-btn" aria-label="Maximize">
            <span className="block w-[7px] h-[6px] border border-black" />
          </button>
          <button className="retro-title-btn" aria-label="Close">
            <span className="block w-[7px] h-[7px] relative">
              <span className="absolute inset-0 flex items-center justify-center text-xs leading-none font-sans font-bold text-black">×</span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu bar */}
      <div className="md:hidden bg-[var(--cf-window-bg)] border-b-2 border-[var(--cf-inset-light)]">
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2 text-sm font-mono text-[var(--cf-dark)]">
            <span className="hover:bg-[var(--cf-title-bar)] hover:text-white px-1.5 py-0.5 cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? "✕ Close" : "≡ Menu"}
            </span>
          </div>
          <span className="text-xs font-mono text-[var(--cf-dark)]">
            {time}
          </span>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--cf-window-bg)] border-b-2 border-l-2 border-r-2 border-[var(--cf-window-border-darker)] animate-popup">
          <div className="retro-inset m-2">
            <div className="bg-white p-4 space-y-0">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm font-mono text-[var(--cf-dark)] hover:bg-[var(--cf-title-bar)] hover:text-white px-2.5 py-2 cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-[var(--cf-title-bar)]">{link.exe}</span>
                  <span className="text-gray-500">—</span>
                  <span>{link.label}</span>
                </a>
              ))}
              <div className="border-t border-[var(--cf-gray)] my-2" />
              <a
                href="#register"
                className="flex items-center gap-2 text-sm font-mono text-white bg-[var(--cf-title-bar)] px-2.5 py-2 cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                <span>REGISTER.EXE</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
