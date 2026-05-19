// export const skills = [
//   "JavaScript",
//   "React",
//   "Next.js",
//   "Tailwind CSS",
//   "Flutter",
//   "Git",
//   "GitHub",
//   "Firebase",
//   "Responsive Design",
//   "Frontend Architecture",
// ];
export interface SkillGroup {
  category: string;
  index: string;
  description: string;
  technologies: string[];
}

export const skillsData: SkillGroup[] = [
  {
    index: "01",
    category: "Frontend Engineering",
    description:
      "Crafting highly performant, type-safe web interactive layers.",
    technologies: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS v4",
      "Vite",
    ],
  },
  {
    index: "02",
    category: "Backend Architecture",
    description:
      "Designing resilient server logic, custom APIs, and database structures.",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "RESTful APIs"],
  },
  {
    index: "03",
    category: "Mobile & Architecture",
    description:
      "Engineering native mobile applications and progressive architectures.",
    technologies: [
      "Flutter",
      "Dart",
      "PWA Architecture",
      "Git / GitHub",
      "Vercel Optimization",
    ],
  },
];