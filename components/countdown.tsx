"use client";

import { useState, useEffect, useCallback } from "react";
import { TARGET_DATE } from "@/lib/constants";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(target: string): TimeLeft | null {
  const difference = new Date(target).getTime() - Date.now();
  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const tick = useCallback(() => {
    const result = calculateTimeLeft(TARGET_DATE);
    if (result) setTimeLeft(result);
  }, []);

  useEffect(() => {
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [tick]);

  const units: { key: keyof TimeLeft; label: string }[] = [
    { key: "days", label: "DAYS" },
    { key: "hours", label: "HRS" },
    { key: "minutes", label: "MIN" },
    { key: "seconds", label: "SEC" },
  ];

  if (!timeLeft) {
    return (
      <div className="flex items-center gap-3 sm:gap-4">
        {units.map((u) => (
          <div key={u.key} className="flex flex-col items-center">
            <div className="font-mono text-xl sm:text-2xl md:text-3xl text-[var(--cf-dark)] tabular-nums bg-white px-2 py-1 border border-[var(--cf-inset-light)]">
              --
            </div>
            <div className="text-[8px] sm:text-[9px] font-mono tracking-wider text-gray-500 mt-1">
              {u.label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 sm:gap-3 max-w-full overflow-x-auto">
      {units.map((u, i) => (
        <div key={u.key} className="flex flex-col items-center">
          <div className="font-mono text-xl sm:text-2xl md:text-3xl text-[var(--cf-dark)] tabular-nums bg-white px-2 py-1 border border-[var(--cf-inset-light)] leading-none">
            {pad(timeLeft[u.key])}
          </div>
          <div className="text-[8px] sm:text-[9px] font-mono tracking-wider text-gray-500 mt-1">
            {u.label}
          </div>
          {i < units.length - 1 && (
            <span className="absolute hidden">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
