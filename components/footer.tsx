"use client";

import { useState, useEffect } from "react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const [time, setTime] = useState("--:-- --");

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString("en-US", { hour12: true }));
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <footer className="mt-8">
      {/* Taskbar - Windows 95 style */}
      <div className="bg-[var(--cf-window-bg)] border-t-2 border-[var(--cf-window-border-light)]">
        <div className="flex items-stretch">
          {/* Start button */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--cf-window-bg)] border border-[var(--cf-window-border-light)] border-r-[var(--cf-window-border-darker)] border-b-[var(--cf-window-border-darker)] hover:bg-[var(--cf-gray)] transition-colors text-[11px] font-mono font-bold text-[var(--cf-dark)]">
            <span className="text-sm">🖥</span>
            Start
          </button>

          {/* Divider */}
          <div className="w-px bg-[var(--cf-inset-light)] mx-1" />

          {/* Quick launch */}
          <div className="flex items-center gap-0.5 px-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 px-2 py-1 text-[10px] font-mono text-[var(--cf-dark)] hover:bg-[var(--cf-gray)] border border-transparent hover:border-[var(--cf-window-border-light)] hover:border-b-[var(--cf-window-border-darker)] hover:border-r-[var(--cf-window-border-darker)]"
              >
                <span className="text-[9px]">📄</span>
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* System tray */}
          <div className="flex items-center gap-2 px-3 py-1 border-l-2 border-[var(--cf-inset-light)] text-[10px] font-mono text-[var(--cf-dark)]">
            <span className="text-[10px]">🔊</span>
            <span className="text-[10px]">🌐</span>
            <span className="border border-[var(--cf-inset-light)] border-b-[var(--cf-window-border-light)] border-r-[var(--cf-window-border-light)] px-1.5 py-0.5">
              {time}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="bg-[var(--cf-window-bg)] border-t border-[var(--cf-inset-light)] px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-[9px] font-mono text-gray-500">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
            SYSTEMS OPERATIONAL
          </span>
          <span>&copy; 2026 {SITE.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <span>CLOUDFORGE v2.0</span>
          <span>MEM: 640K</span>
          <span>C:\CLOUDFORGE\</span>
        </div>
      </div>
    </footer>
  );
}
