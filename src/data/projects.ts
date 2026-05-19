
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  links: {
    live?: string;
    github: string;
  };
  metric?: string; 
}

export const projectsData: Project[] = [
  {
    id: "01",
    title: "Pawlos Online Qine Bet",
    tagline: "Mobile First PWA Learning Platform",
    description:
      "A mobile first progressive web application transforming traditional Ethiopian Ge'ez scholarship into a centralized digital system. Solves structural learning limitations by organizing complex content structures into a minimalist, distraction free interface.",
    tags: ["Next.js", "MongoDB", "PWA Architecture", "Feature-Based Layout"],
    metric: "Mobile First PWA Layer",
    links: {
      github: "https://github.com/Hena-yaris/pawlos-kinebet-case-study",
      live: "https://www.pawloskinebet.com/",
    },
  },

  {
    id: "02",
    title: "Innerspace Journal",
    tagline: "Secure Writing Sanctuary",
    description:
      "A distraction free, private digital environment for reflective writing. Built with a rich text editing canvas, secure JWT authentication via middleware edge route protection, and optimized media pipelines for cloud asset management.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "MongoDB",
      "Server Actions",
      "Tiptap",
      "JWT",
    ],
    metric: "Middleware Route Protection",
    links: {
      github: "https://github.com/Hena-yaris/innerspace-journal",
      live: "https://innerspace-journal.vercel.app/",
    },
  },

  {
    id: "03",
    title: "Menschen Arena Cup",
    tagline: "Live Tournament Tracking System",
    description:
      "A live tracking campus sports platform engineered to manage real time team standings, tournament brackets, and player metrics. Features an interactive fan match prediction engine running on a decoupled, high performance architecture.",
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Tailwind CSS",
    ],
    metric: "Decoupled MERN Architecture",
    links: {
      github: "https://github.com/Hena-yaris/menschen-arena-cup",
      live: "https://menschenarena.netlify.app/",
    },
  },

  {
    id: "04",
    title: "FluentForge",
    tagline: "Active Build // Mobile Architecture",
    description:
      "An intelligent, mobile first language retention platform engineered with Flutter and Dart. Implements an active Spaced Repetition System (SRS) using the SM-2 algorithmic engine, local Hive state caching, and native device speech pipelines (TTS/STT).",
    tags: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Hive DB",
      "SM-2 Algorithm",
      "Next.js API",
    ],
    metric: "SM-2 Algorithmic Retention Engine",
    links: {
      github: "https://github.com/Hena-yaris", 
    },
  },
];