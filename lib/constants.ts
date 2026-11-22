export const SITE = {
  name: "CLOUDFORGE",
  exe: "CLOUDFORGE.EXE",
  event: "AI HACKATHON '26",
  tagline: "Hack. Build. Forge.",
  description:
    "CloudForge 2026 is an AI hackathon run by the AWS Student Builder Group (SBG) at UET Lahore.",
  date: "December 09, 2026",
  venue: "TICKS BIC, UET Lahore",
  format: "On-site",
  teamSize: "4 (solo members allowed)",
  url: "cloudforge-nine.vercel.app",
} as const;

export const TARGET_DATE = "2026-12-09T09:00:00";

export const NAV_LINKS = [
  { label: "About", href: "#about", exe: "ABOUT" },
  { label: "Format", href: "#tracks", exe: "FORMAT" },
  { label: "Agenda", href: "#timeline", exe: "AGENDA" },
  { label: "Prizes", href: "#prizes", exe: "TROPHY" },
  { label: "Team", href: "#team", exe: "TEAM" },
  { label: "FAQ", href: "#faq", exe: "HELP" },
] as const;

export const HIGHLIGHTS = [
  { value: "DEC 09", label: "Event Date", icon: ">" },
  { value: "4", label: "Team Size", icon: ">" },
  { value: "2", label: "Rounds", icon: ">" },
  { value: "5", label: "Finalists", icon: ">" },
] as const;

export const ABOUT_BLOCKS = [
  {
    number: "01",
    title: "ELIGIBILITY",
    icon: "[>]",
    description:
      "Any developer, designer, or problem-solver. Students and professionals welcome. Must be 18+.",
  },
  {
    number: "02",
    title: "REGISTRATION",
    icon: "[*]",
    description:
      "Register through the shared link. Teams of 4, with solo members allowed.",
  },
  {
    number: "03",
    title: "EVENT FORMAT",
    icon: "[#]",
    description:
      "Round 1: solve 1 of 5 problems in 3 hours. Top 5 teams advance to Round 2: the startup pitch.",
  },
] as const;

export const ROUNDS = [
  {
    number: "01",
    exe: "ROUND1.EXE",
    title: "PROBLEM-SOLVING",
    subtitle: "INITIAL ROUND",
    icon: ">",
    description:
      "Solve the given problem using AI tools and submit. Teams pick 1 of 5 problems and get 3 hours to build a working solution.",
    steps: [
      "PICK A PROBLEM — 5 problem statements. Your team picks any one. They can be from any domain.",
      "SOLVE IT AS A TEAM — 3 hours. Any language, framework or database. AI tools, LLMs and web search are all allowed.",
      "PUSH TO GITHUB — Submit your repo link with a README (how to run it) and API test examples.",
      "JUDGES REVIEW — Judges look at how you solved the problem and how well. Not at how it looks.",
      "TOP 5 ADVANCE — The 5 teams with the best solutions move on to the final round.",
    ],
  },
  {
    number: "02",
    exe: "ROUND2.EXE",
    title: "STARTUP PITCH",
    subtitle: "FINAL ROUND",
    icon: "*",
    description:
      "Finalists build a custom solution for a real-world problem and pitch it to the judges like a startup.",
    steps: [
      "REAL PROBLEM — A pain point real people or businesses actually have.",
      "WORKING PRODUCT — Something you can demo live, not just slides.",
      "SUSTAINABLE — A clear way it can make money and keep running.",
      "PITCH SLOT — 3 min presentation, 3 min live demo, 4 min judges' Q&A.",
      "FINAL EVALUATION — The team with the best product wins.",
    ],
  },
] as const;

export const JUDGING = [
  {
    title: "YOUR APPROACH",
    description:
      "How you broke the problem down and the thinking behind your solution.",
  },
  {
    title: "IT WORKS",
    description:
      "The core requirements actually run. It doesn't need to be pretty, it needs to work.",
  },
  {
    title: "A BETTER SOLUTION",
    description:
      "Smart, efficient logic. Did you solve it in a better way than the obvious one?",
  },
  {
    title: "EDGE CASES",
    description:
      "Wrong inputs, duplicates, clashes: the things a good problem-solver thinks of.",
  },
] as const;

export const SAMPLE_CHALLENGE = {
  name: "QueueLess",
  subtitle: "Intelligent Queue Management System",
  difficulty: "MEDIUM",
  category: "BACKEND",
  duration: "3 HOURS",
  concept:
    "Hospitals, banks, universities and service centers often struggle with long queues. Manual queue management leads to confusion, duplicate tokens and inefficient service allocation. Build QueueLess, a backend system that manages digital queues, assigns unique tokens and dynamically calculates estimated waiting times based on service counters and customer activity.",
  requirements: [
    {
      title: "QUEUE CREATION & MANAGEMENT",
      items: [
        "Create multiple service queues.",
        "Generate a unique token for every customer.",
        "Support multiple service counters.",
        "Maintain the current queue status.",
      ],
    },
    {
      title: "CUSTOMER PROCESSING",
      items: [
        "Allow counters to call the next customer.",
        "Mark customers as served, skipped or cancelled.",
        "Support customers joining different queues.",
        "Prevent duplicate token processing.",
      ],
    },
    {
      title: "WAITING TIME ESTIMATION",
      items: [
        "Calculate estimated waiting time based on customers ahead.",
        "Consider average service time per counter.",
        "Recalculate waiting times when queue status changes.",
      ],
    },
    {
      title: "DATA & API MANAGEMENT",
      items: [
        "Persist queue and customer information in a database.",
        "Provide APIs to retrieve queue status and token details.",
        "Handle invalid requests and edge cases.",
      ],
    },
  ],
  criteria: [
    { label: "Problem-solving approach", value: "35%" },
    { label: "Working solution (core requirements)", value: "25%" },
    { label: "Quality of the logic (queue & wait-time)", value: "25%" },
    { label: "Edge cases & concurrency", value: "15%" },
  ],
  niceToHave: [
    "Unit tests.",
    "Database schema / short design note.",
    "Swagger / Postman documentation.",
    "Real-time queue updates.",
  ],
  submit: [
    "GitHub repository link.",
    "README with build and run instructions.",
    "API testing examples (cURL or Postman).",
  ],
  rules: [
    "Any programming language or framework is acceptable.",
    "Database choice is flexible.",
    "Third-party libraries are allowed.",
    "Vibecoding, LLMs and web search are allowed.",
  ],
} as const;

export const TIMELINE = [
  {
    step: "01",
    time: "TBA",
    title: "REGISTRATION",
    description:
      "Check in at the desk, collect your badge and find your team's table. Every team member must be registered.",
    status: "TBA",
  },
  {
    step: "02",
    time: "TBA",
    title: "BRIEFING",
    description:
      "Organizers walk you through the day, the rules and how judging works. Ask your questions here.",
    status: "TBA",
  },
  {
    step: "03",
    time: "TBA",
    title: "ROUND 1",
    description:
      "Problem-solving. Teams pick 1 of 5 problems and get 3 hours to build a working solution and push it to GitHub.",
    status: "TBA",
  },
  {
    step: "04",
    time: "TBA",
    title: "SHORTLIST ANNOUNCEMENT",
    description:
      "Judges review every submission. The top 5 teams with the best solutions move to the final.",
    status: "TBA",
  },
  {
    step: "05",
    time: "TBA",
    title: "ROUND 2 BUILD",
    description:
      "Finalists get their own product ready: a real solution to a real problem, plus the demo and pitch.",
    status: "TBA",
  },
  {
    step: "06",
    time: "TBA",
    title: "PITCHING",
    description:
      "Each finalist gets a 10-minute slot in front of the judges: presentation, live demo, then Q&A.",
    status: "TBA",
  },
  {
    step: "07",
    time: "TBA",
    title: "AWARDS & CLOSING",
    description:
      "Winner and runner-up announced. Shields, AWS swag and certificates handed out.",
    status: "TBA",
  },
];

export const PRIZES = [
  {
    place: "01ST",
    title: "WINNER",
    amount: "SHIELD + SWAG",
    icon: "1",
    perks: ["Recognition shield", "AWS swags", "Featured on social media"],
  },
  {
    place: "02ND",
    title: "RUNNER UP",
    amount: "SHIELD + SWAG",
    icon: "2",
    perks: ["Recognition shield", "AWS swags", "Featured on social media"],
  },
  {
    place: "ALL",
    title: "CERTIFICATES OF PARTICIPATION",
    amount: "CERTIFICATE",
    icon: "3",
    perks: ["Certificate of participation", "Recognition", "Featured on social media"],
  },
] as const;

export const RULES = [
  {
    title: "RESPECT",
    description: "Respect all the stakeholders there and yourself.",
  },
  {
    title: "ORIGINALITY",
    description: "Duplicating / copying the idea is not allowed.",
  },
  {
    title: "USE OF AI",
    description: "Use of any AI is allowed.",
  },
  {
    title: "ELIMINATION",
    description:
      "Any activity that violates the code of conduct or shows unprofessionalism leads to elimination.",
  },
] as const;

export const LOGISTICS = [
  {
    title: "WHAT TO BRING",
    description: "Bring your laptop, charger and any other necessary device.",
  },
  {
    title: "INTERNET & POWER",
    description: "Internet will be provided, but keep a backup also just in case.",
  },
  {
    title: "FOOD",
    description: "Food will be provided by our food sponsors.",
  },
  {
    title: "PRAYER & REST AREAS",
    description: "Prayer times will be accommodated as per availability slots.",
  },
] as const;

export const TEAM = [
  { role: "EVENT LEADS", members: ["Muhammad Rayyan", "Aima Imran"] },
  { role: "MANAGEMENT", members: ["Muhammad Ali Zahid", "Noor Fatima"] },
  { role: "TECHNICAL", members: ["Ahmad Effendi", "Laiba Yonus"] },
  { role: "DOCUMENTATION", members: ["Anas Sabir", "Laiba Sheikh"] },
  { role: "GRAPHICS", members: ["Aleena Ahmad"] },
  { role: "MEDIA", members: ["Muhammad Noor Ahmed"] },
  { role: "PUBLIC RELATIONS", members: ["Areeza Fatima", "Muhammad Subhan"] },
] as const;

export const CONTACTS = [
  {
    label: "PHONE",
    value: "03390002956",
    href: "tel:03390002956",
    icon: "☎",
  },
  {
    label: "EMAIL",
    value: "mrayyan5296@gmail.com",
    href: "mailto:mrayyan5296@gmail.com",
    icon: "@",
  },
  {
    label: "LOCATION",
    value: "University of Engineering & Technology, Lahore",
    href: "https://maps.google.com/?q=University+of+Engineering+and+Technology+Lahore",
    icon: "⌂",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/aws-student-builder-group-uet",
    href: "https://linkedin.com/in/aws-student-builder-group-uet",
    icon: "in",
  },
  {
    label: "INSTAGRAM",
    value: "instagram.com/aws_sbg_uet",
    href: "https://www.instagram.com/aws_sbg_uet/",
    icon: "ig",
  },
] as const;

export const FAQ = [
  {
    q: "Who can participate?",
    a: "Any developer, designer, or problem-solver. Students and professionals welcome. Must be 18+.",
  },
  {
    q: "How big are teams?",
    a: "Teams of 4. Solo members are allowed.",
  },
  {
    q: "When and where is CloudForge?",
    a: "December 09, 2026 at TICKS BIC, UET Lahore. The event is on-site.",
  },
  {
    q: "What is the event format?",
    a: "Round 1 is problem-solving: teams pick 1 of 5 problems and get 3 hours to build a working solution. The top 5 teams advance to Round 2, the startup pitch.",
  },
  {
    q: "What technologies can I use?",
    a: "Any language, framework or database. AI tools, LLMs and web search are all allowed.",
  },
  {
    q: "What do I submit in Round 1?",
    a: "A GitHub repository link with a README (how to run it) and API test examples (cURL or Postman).",
  },
  {
    q: "How is Round 1 judged?",
    a: "On your approach, whether it works, the quality of your logic and how you handle edge cases. UI, visuals and styling are not judged.",
  },
  {
    q: "How does the pitch work?",
    a: "Each finalist gets a 10-minute slot: 3 min presentation, 3 min live demo, 4 min judges' Q&A. Cover the problem, solution, market, business model and team.",
  },
  {
    q: "What should I bring?",
    a: "Your laptop, charger and any other necessary device. Internet will be provided, but keep a backup. Food is provided by our food sponsors.",
  },
] as const;

export const SYSTEM_LOG = [
  { time: "08:00", msg: "CLOUDFORGE OS v2.0 LOADED" },
  { time: "08:30", msg: "AWS SBG UET LAHORE: CONNECTED" },
  { time: "08:45", msg: "NETWORK INTERFACE: CONNECTED" },
  { time: "09:00", msg: "REGISTRATION MODULE: ACTIVE" },
  { time: "09:30", msg: "BUILDERS CHECKING IN" },
  { time: "10:00", msg: "HACKATHON MODE: ENGAGED" },
] as const;
