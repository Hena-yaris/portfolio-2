
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  description: string; // This will now live exclusively in the About section
  email: string;
  socials: {
    github: string;
    linkedin: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Henok",
  title: "Full-Stack Developer",
  tagline: "Building clean, scalable, and thoughtful digital experiences.",
  description:
    "I design and develop modern web applications with a focus on simplicity, performance, and clean architecture. Currently refining my full-stack skills while engineering thoughtful user interfaces and resilient systems.",
  email: "meraey21@gmail.com",
  socials: {
    github: "https://github.com/Hena-yaris",
    linkedin: "https://www.linkedin.com/in/henayaris",
  },
};