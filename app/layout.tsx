import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const blanka = localFont({
  src: "../public/fonts/blanka-regular.otf",
  variable: "--font-blanka",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CLOUDFORGE | AI Hackathon '26 — AWS SBG UET Lahore",
  description:
    "CloudForge 2026 is an AI hackathon run by the AWS Student Builder Group (SBG) at UET Lahore. December 09, 2026 at TICKS BIC. Hack. Build. Forge.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${blanka.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
