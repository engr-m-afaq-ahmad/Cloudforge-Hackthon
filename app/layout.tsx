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
  title: "CLOUDFORGE | Hackathon Operating System",
  description:
    "A developer competition where bold ideas become real-world technology. Hack. Build. Forge.",
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
