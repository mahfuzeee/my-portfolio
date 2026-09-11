import { SkillCategory } from "@/types/index";

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
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    title: "Data & State",
    skills: ["TanStack Query", "Zustand", "Axios", "Redux"],
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
  "MONGOOSE",
];

export default skills;
