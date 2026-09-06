export type Project = {
  slug: string;
  title: string;
  category: string;
  featured: boolean;
  shortDescription: string;
  description: string;
  technologies: string[];
  features: string[];
  challenge: { problem: string; solution: string };
  keyDecisions: { title: string; rationale: string }[];
  architecture: { layers: string[] };
  lessonsLearned: string;
  screenshots: { src: string; alt: string }[];
  githubUrl: string;
  liveUrl: string;
};

export type SkillCategory = {
  title: string;
  emphasis?: boolean;
  skills: string[];
};

export type JourneyStep = {
  label: string;
  description: string;
  type: "education" | "learning" | "focus";
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};
