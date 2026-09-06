import { SkillCategory } from "@/types/skills";

export const skills: SkillCategory[] = [
  {
    title: "Backend",
    emphasis: true,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
      "Authorization",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Mongoose", "PostgreSQL"],
  },
  {
    title: "Data & State",
    skills: ["TanStack Query", "Zustand", "Axios"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "Postman"],
  },
];

export const techStrip = [
  "NODE.JS",
  "EXPRESS",
  "REACT",
  "NEXT.JS",
  "MONGODB",
  "POSTGRESQL",
];

export default skills;
