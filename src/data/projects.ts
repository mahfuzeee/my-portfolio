import { Project } from "@/types/index";

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    category: "Full-Stack Application",
    featured: true,
    shortDescription:
      "A full-stack e-commerce application supporting product discovery, search, filtering, pagination, authentication, cart management, orders and customer reviews.",
    description:
      "A comprehensive e-commerce solution designed to handle the end-to-end flow of online shopping. The architecture emphasizes a robust backend API to manage product catalogs, user sessions, and order processing, paired with a dynamic frontend for a seamless customer experience.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TanStack Query",
      "Zustand",
      "JWT",
    ],
    features: [
      "Product management",
      "Product search",
      "Filtering",
      "Pagination",
      "Authentication",
      "Cart",
      "Orders",
      "Reviews",
      "Admin functionality",
    ],
    challenge: {
      problem:
        "Product filtering needed to work together with pagination and multiple query parameters.",
      solution:
        "URL search parameters were used to represent filter state, while those parameters were incorporated into TanStack Query keys so that query caching and refetching remained synchronized with the active filters.",
    },
    keyDecisions: [
      {
        title: "State Management",
        rationale:
          "Used Zustand for global cart state to prevent unnecessary re-renders across unrelated components.",
      },
      {
        title: "Data Fetching",
        rationale:
          "Implemented TanStack Query to handle server state, caching, and background updates efficiently.",
      },
    ],
    architecture: {
      layers: ["React / Next.js", "REST API", "Node.js + Express", "MongoDB"],
    },
    lessonsLearned:
      "Gained deep insights into designing RESTful APIs that are both scalable and easy to consume from the frontend.",
    screenshots: [
      {
        src: "/images/Ecommerce-screenshoot.png",
        alt: "E-commerce Platform",
      },
    ],
    githubUrl: "/images/Ecommerce-screenshoot.png",
    liveUrl: "[ADD LIVE DEMO URL]",
  },
  {
    slug: "job-portal",
    title: "Job Portal",
    category: "Full-Stack Application",
    featured: false,
    shortDescription:
      "A full-stack recruitment platform connecting job seekers and employers through searchable job listings, authentication and role-based functionality.",
    description:
      "A platform designed to bridge the gap between talent and opportunities. It features distinct user roles and tailored dashboards, ensuring a secure and efficient job application process.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    features: [
      "User authentication",
      "Job creation",
      "Job search",
      "Filtering",
      "Applications",
      "User dashboard",
      "Role-based access",
    ],
    challenge: {
      problem:
        "Managing different levels of access for job seekers vs. employers.",
      solution:
        "Implemented a role-based access control (RBAC) middleware on the backend to protect specific routes, returning tailored responses based on the user role encoded in the JWT.",
    },
    keyDecisions: [
      {
        title: "Authentication Strategy",
        rationale:
          "Utilized JWT for stateless authentication, reducing database lookups on protected routes.",
      },
    ],
    architecture: {
      layers: ["React", "REST API", "Node.js + Express", "MongoDB"],
    },
    lessonsLearned:
      "Reinforced the importance of secure route protection and clean separation of concerns in API design.",
    screenshots: [
      {
        src: "/images/Job-portal.png",
        alt: "Job Portal",
      },
    ],
    githubUrl: "https://github.com/mahfuzeee/job-portal-full-stack-MERN",
    liveUrl: "https://job-portal-mern-five-sigma.vercel.app/",
  },
  {
    slug: "inventory-management",
    title: "Inventory Management System",
    category: "Business Application",
    featured: false,
    shortDescription:
      "A business-oriented inventory management application designed to manage products, stock levels and inventory operations through a centralized dashboard.",
    description:
      "An internal tool built for efficiency. The system provides a centralized dashboard to track inventory flow, manage product categories, and execute stock operations with precision.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Product management",
      "Stock tracking",
      "Categories",
      "Inventory operations",
      "Dashboard",
      "Authentication",
      "Role-based access",
    ],
    challenge: {
      problem:
        "Maintaining data integrity during concurrent inventory updates.",
      solution:
        "Leveraged PostgreSQL transaction blocks to ensure that stock deductions and additions were atomic operations, preventing race conditions.",
    },
    keyDecisions: [
      {
        title: "Database Choice",
        rationale:
          "Selected PostgreSQL over MongoDB due to the highly relational nature of inventory data and the need for ACID compliance.",
      },
    ],
    architecture: {
      layers: ["React", "REST API", "Node.js + Express", "PostgreSQL"],
    },
    lessonsLearned:
      "Deepened understanding of relational database design and transactional integrity.",
    screenshots: [
      {
        src: "/images/Inventory-management.png",
        alt: "Inventory Management System",
      },
    ],
    githubUrl: "[ADD GITHUB URL]",
    liveUrl: "[ADD LIVE DEMO URL]",
  },
  {
    slug: "modern-blog-platform",
    title: "Modern Blog Platform",
    category: "Content Management",
    featured: false,
    shortDescription:
      "A full-stack blogging platform featuring content management, authentication and user interactions.",
    description:
      "A dynamic content platform built for writers and readers. It supports rich text management, user engagement, and responsive design to ensure content looks great on any device.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    features: [
      "Authentication",
      "CRUD",
      "Blog management",
      "Comments",
      "User profiles",
      "Responsive UI",
    ],
    challenge: {
      problem:
        "Handling rich text formatting safely without exposing the app to XSS attacks.",
      solution:
        "Sanitized all HTML input on the server before storing it in the database, and rendered content using safe rendering methods on the frontend.",
    },
    keyDecisions: [
      {
        title: "SEO Optimization",
        rationale:
          "Used Next.js server-side rendering for blog post pages to ensure optimal search engine indexing.",
      },
    ],
    architecture: {
      layers: ["Next.js", "REST API", "Node.js + Express", "MongoDB"],
    },
    lessonsLearned:
      "Improved skills in server-side rendering and content security practices.",
    screenshots: [
      {
        src: "/images/Blog_screenshot.png",
        alt: "Modern Blog Platform",
      },
    ],
    githubUrl: "[ADD GITHUB URL]",
    liveUrl: "[ADD LIVE DEMO URL]",
  },
];

export default projects;
