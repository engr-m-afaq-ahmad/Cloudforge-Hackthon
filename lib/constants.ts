export const SITE = {
  name: "CLOUDFORGE",
  exe: "CLOUDFORGE",
  tagline: "Hack. Build. Forge.",
  description:
    "A developer competition where bold ideas become real-world technology.",
} as const;

export const TARGET_DATE = "2026-12-31T18:00:00";

export const NAV_LINKS = [
  { label: "About", href: "#about", exe: "ABOUT" },
  { label: "Tracks", href: "#tracks", exe: "TRACKS" },
  { label: "Timeline", href: "#timeline", exe: "LOG" },
  { label: "Prizes", href: "#prizes", exe: "TROPHY" },
  { label: "FAQ", href: "#faq", exe: "HELP" },
] as const;

export const HIGHLIGHTS = [
  { value: "24+", label: "Hours", icon: ">" },
  { value: "500+", label: "Builders", icon: ">" },
  { value: "50+", label: "Teams", icon: ">" },
  { value: "$50K", label: "In Prizes", icon: ">" },
] as const;

export const ABOUT_BLOCKS = [
  {
    number: "01",
    title: "BUILD",
    icon: "[>]",
    description: "Turn ideas into functional products.",
  },
  {
    number: "02",
    title: "COMPETE",
    icon: "[*]",
    description: "Solve challenging problems against talented builders.",
  },
  {
    number: "03",
    title: "FORGE",
    icon: "[#]",
    description: "Learn, collaborate, and create something worth shipping.",
  },
] as const;

export const CHALLENGES = [
  {
    number: "01",
    exe: "AI",
    title: "AI & AUTOMATION",
    icon: "&",
    description:
      "Build intelligent systems that automate complex workflows and decision-making.",
  },
  {
    number: "02",
    exe: "CLOUD",
    title: "CLOUD & INFRASTRUCTURE",
    icon: "#",
    description:
      "Design scalable cloud solutions that push the boundaries of modern infrastructure.",
  },
  {
    number: "03",
    exe: "WEB",
    title: "WEB & MOBILE",
    icon: "@",
    description:
      "Craft exceptional user experiences across platforms with cutting-edge technologies.",
  },
  {
    number: "04",
    exe: "SECURITY",
    title: "SECURITY",
    icon: "!",
    description:
      "Develop tools and systems that protect data, privacy, and digital assets.",
  },
  {
    number: "05",
    exe: "OPEN.INNOVATION",
    title: "OPEN INNOVATION",
    icon: "*",
    description:
      "Surprise us. Bring any bold idea that solves a real problem in a creative way.",
  },
] as const;

export const TIMELINE = [
  {
    step: "01",
    time: "09:00",
    title: "REGISTRATION",
    description: "Register your team. System access granted.",
    status: "COMPLETE",
  },
  {
    step: "02",
    time: "10:00",
    title: "IDEATION",
    description: "Choose your challenge and shape your idea.",
    status: "ACTIVE",
  },
  {
    step: "03",
    time: "10:30",
    title: "BUILD",
    description: "Develop your project. Ship it.",
    status: "PENDING",
  },
  {
    step: "04",
    time: "18:00",
    title: "SUBMISSION",
    description: "Submit before the deadline. No extensions.",
    status: "PENDING",
  },
  {
    step: "05",
    time: "23:59",
    title: "JUDGING",
    description: "Projects are reviewed by the panel.",
    status: "PENDING",
  },
  {
    step: "06",
    time: "10:00",
    title: "FINALE",
    description: "Winners are announced. Trophies delivered.",
    status: "PENDING",
  },
] as const;

export const PRIZES = [
  {
    place: "01ST",
    title: "GRAND PRIZE",
    amount: "$25,000",
    icon: "1",
    perks: ["Funding consideration", "Mentorship program", "Cloud credits"],
  },
  {
    place: "02ND",
    title: "RUNNER UP",
    amount: "$15,000",
    icon: "2",
    perks: ["Cloud credits", "Mentorship session", "Showcase opportunity"],
  },
  {
    place: "03RD",
    title: "SPECIAL AWARDS",
    amount: "$10,000",
    icon: "3",
    perks: ["Best Design", "Most Innovative", "People's Choice"],
  },
] as const;

export const FAQ = [
  {
    q: "Who can participate?",
    a: "Any developer, designer, or problem-solver. Students and professionals welcome. Must be 18+.",
  },
  {
    q: "How do teams work?",
    a: "Teams of 2-4 people. Solo participants welcome. Cross-functional teams encouraged.",
  },
  {
    q: "What can I build?",
    a: "Anything that fits a challenge track. Hardware, software, APIs, bots — you decide.",
  },
  {
    q: "What technologies can I use?",
    a: "Any technology stack. Use whatever gets the job done. No restrictions.",
  },
  {
    q: "When is the deadline?",
    a: "Submissions close at 23:59 on the final day. Late submissions not accepted.",
  },
  {
    q: "Is it free?",
    a: "Yes. Participation is completely free. We provide food, wifi, and good vibes.",
  },
] as const;

export const SYSTEM_LOG = [
  { time: "08:00", msg: "CLOUDFORGE OS v2.0 LOADED" },
  { time: "08:30", msg: "DRIVERS INITIALIZED" },
  { time: "08:45", msg: "NETWORK INTERFACE: CONNECTED" },
  { time: "09:00", msg: "REGISTRATION MODULE: ACTIVE" },
  { time: "09:30", msg: "500+ USERS CONNECTED" },
  { time: "10:00", msg: "HACKATHON MODE: ENGAGED" },
] as const;
