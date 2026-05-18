

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
    title: "RackUp",
    tagline: "Progressive Web Application",
    description:
      "A real-time pool match score tracker built with offline-first capabilities. Engineered with precise state synchronization and complex match logic tracking.",
    tags: ["React", "Vite", "Tailwind CSS", "PWA"],
    metric: "Offline Sync Engine",
    links: {
      github: "https://github.com/Hena-yaris", 
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