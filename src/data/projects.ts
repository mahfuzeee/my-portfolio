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
    githubUrl: "https://github.com/mahfuzeee/ecommerce-backend-mern",
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
    githubUrl: "https://github.com/mahfuzeee/blog-services-api",
    liveUrl: "https://inkwell-blog-react.vercel.app/",
  },

  {
    slug: "email-verification-mern",
    title: "MERN Email Verification System",
    category: "Authentication & Backend",
    featured: false,

    shortDescription:
      "A MERN-oriented authentication project demonstrating user registration and email verification through verification links or OTP.",

    description:
      "An authentication-focused MERN project implementing user registration and email verification. The project uses a Node.js backend, MongoDB, and a frontend component to demonstrate verification through a link or OTP-based workflow.",

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JavaScript",
      "JWT",
      "Email Verification",
      "OTP",
    ],

    features: [
      "User registration",
      "Email verification",
      "Verification link workflow",
      "OTP verification workflow",
      "MongoDB persistence",
      "Authentication-oriented backend structure",
    ],

    challenge: {
      problem:
        "Newly registered accounts need a mechanism to verify ownership of the supplied email address before allowing the account to be treated as verified.",

      solution:
        "The project implements an email verification workflow using verification links and/or OTP, with MongoDB used to persist user information and verification-related data.",
    },

    keyDecisions: [
      {
        title: "Dedicated verification workflow",
        rationale:
          "Separating email verification from the basic registration flow makes the authentication system easier to understand and extend.",
      },
      {
        title: "MongoDB persistence",
        rationale:
          "MongoDB provides flexible persistence for user and verification-related information.",
      },
      {
        title: "CommonJS backend",
        rationale:
          "The project uses a straightforward Node.js CommonJS setup suitable for demonstrating backend authentication fundamentals.",
      },
    ],

    architecture: {
      layers: [
        "Frontend verification interface",
        "Express API layer",
        "Authentication/verification logic",
        "MongoDB/Mongoose data layer",
        "Email/OTP verification mechanism",
      ],
    },

    lessonsLearned:
      "This project improved my understanding of authentication workflows, email verification, OTP concepts, user registration, MongoDB persistence, and designing multi-step account verification processes.",

    screenshots: [
      {
        src: "/images/email-verification.jpeg",
        alt: "Email verification registration interface",
      },
      {
        src: "/images/projects/email-verification/verification.png",
        alt: "Email verification interface",
      },
    ],

    githubUrl: "https://github.com/mahfuzeee/email-verification-mern",

    liveUrl: "https://email-verification-mern.vercel.app/",
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
        src: "/images/inventory-management.jpeg",
        alt: "Inventory Management System",
      },
    ],
    githubUrl: "[ADD GITHUB URL]",
    liveUrl: "[ADD LIVE DEMO URL]",
  },

  {
    slug: "course-management-backend-mern",
    title: "Course Management Backend API",
    category: "Backend API",
    featured: false,

    shortDescription:
      "An Express and MongoDB backend API for user authentication, profile management, and protected course CRUD operations.",

    description:
      "A backend API for managing users and courses. The project implements registration, login, profile management, JWT authentication through an HTTP cookie, and protected course CRUD operations using Express.js and MongoDB.",

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "REST API",
      "HTTP Cookies",
    ],

    features: [
      "User registration",
      "User login",
      "Cookie-based JWT authentication",
      "Protected user profile",
      "Profile update",
      "User logout",
      "Course creation",
      "Course listing",
      "Course details",
      "Course update",
      "Course deletion",
      "Password hashing",
    ],

    challenge: {
      problem:
        "The API needed to protect user and course operations while maintaining a clear authentication flow between the client and backend.",

      solution:
        "JWT tokens are stored in an HTTP cookie and authentication middleware protects profile and course routes. Mongoose models handle user and course persistence.",
    },

    keyDecisions: [
      {
        title: "Cookie-based authentication",
        rationale:
          "Using a cookie for the JWT demonstrates an alternative authentication approach to storing tokens directly in frontend application state.",
      },
      {
        title: "Protected course routes",
        rationale:
          "Course operations are protected so that only authenticated users can interact with the management endpoints.",
      },
      {
        title: "Mongoose models",
        rationale:
          "Mongoose provides schema-based data modeling and validation for users and courses.",
      },
    ],

    architecture: {
      layers: [
        "REST API route layer",
        "Controller/request-handling layer",
        "Authentication middleware",
        "Mongoose model layer",
        "MongoDB database layer",
      ],
    },

    lessonsLearned:
      "This project strengthened my understanding of Express API development, MongoDB data modeling, JWT authentication, HTTP cookies, protected routes, password hashing, and CRUD API design.",

    screenshots: [
      {
        src: "/images/course-management.jpeg",
        alt: "Course Management API testing interface",
      },
    ],

    githubUrl: "https://github.com/mahfuzeee/course-management-backend-mern",

    liveUrl: "",
  },
];

export default projects;
