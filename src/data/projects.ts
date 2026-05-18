// export const projects = [
//   {
//     id: 1,
//     title: "Modern Portfolio",
//     description:
//       "A minimalist portfolio built with Next.js, Tailwind CSS, and scalable frontend architecture.",
//     technologies: ["Next.js", "Tailwind CSS", "Vercel"],
//     github: "#",
//     live: "#",
//   },

//   {
//     id: 2,
//     title: "Chat Application UI",
//     description:
//       "A clean mobile-inspired chat interface focused on modern interaction and responsive layouts.",
//     technologies: ["React", "CSS", "Firebase"],
//     github: "#",
//     live: "#",
//   },

//   {
//     id: 3,
//     title: "Flutter Mobile App",
//     description:
//       "A cross-platform mobile application exploring scalable Flutter UI architecture.",
//     technologies: ["Flutter", "Dart"],
//     github: "#",
//     live: "#",
//   },
// ];

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
  metric?: string; // High-impact technical callout
}

export const projectsData: Project[] = [
  {
    id: "01",
    title: "RackUp",
    tagline: "Progressive Web Application",
    description:
      "A real-time pool match score tracker built with offline-first capabilities. Engineered with precise state synchronization and complex match logic tracking.",
    tags: ["React", "Vite", "Tailwind CSS", "PWA"],
    metric: "Offline Sync Engine",
    links: {
      github: "https://github.com/Hena-yaris", // Replace with actual project URL when ready
    },
  },
  {
    id: "02",
    title: "Tournament Bracket Engine",
    tagline: "Algorithms & Layout Architecture",
    description:
      "A fixture generation and automated knockout bracket system designed for multi-club sports competitions. Manages group-stage progressions with type-safe routing.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    metric: "Automated Fixture Generation",
    links: {
      github: "https://github.com/Hena-yaris",
    },
  },

  {
    id: "03",
    title: "Mobile Client System",
    tagline: "Cross-Platform Mobile App",
    description:
      "Engineered a native mobile application using Flutter and Dart. Focuses on fluid rendering performance, native state tracking, and direct REST API integration.",
    tags: ["Flutter", "Dart", "REST API", "State Management"],
    metric: "Cross-Platform Engine",
    links: {
      github: "https://github.com/Hena-yaris",
    },
  },
];