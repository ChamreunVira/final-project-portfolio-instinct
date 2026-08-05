import ecommercePreview from "../assets/ecommerce_preview.png";
import khmerSocial from "../assets/khmer-social.png";
import viraAcademy from "../assets/project2.png";
import shopPreview from "../assets/project3.png";
import bacii from "../assets/bacii.png";
import projectOne from "../assets/project1.png";
import projectFour from "../assets/project4.png";

export const mockProjects = [
  {
    id: "ecommerce-platform",
    title: "Ecommerce Website",
    category: "Full Stack",
    summary: "A focused storefront experience built around easy product discovery and checkout.",
    description: "A modern commerce concept with a clean product browsing journey, responsive layouts, and attention to conversion-friendly details.",
    images: [ecommercePreview, projectOne, projectFour],
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://github.com/ChamreunVira/ecommerce-web",
    githubUrl: "https://github.com/ChamreunVira/ecommerce-web",
  },
  {
    id: "khmer-social",
    title: "Khmer Social",
    category: "Full Stack",
    summary: "A social platform concept designed for connection, sharing, and a friendly community experience.",
    description: "The interface brings posts, conversation, and community activity together in a responsive social product.",
    images: [khmerSocial, projectFour, projectOne],
    stack: ["React", "REST API", "Tailwind CSS"],
    liveUrl: "https://khmer-social.vercel.app/",
    githubUrl: "https://github.com/Vyrabot",
  },
  {
    id: "vira-academy",
    title: "Vira Academy",
    category: "Education",
    summary: "An approachable learning platform for structured courses and self-paced progress.",
    description: "A course-driven education experience with simple content organization and mobile-ready presentation.",
    images: [viraAcademy, projectOne, projectFour],
    stack: ["React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://viraacadamy.vercel.app/",
    githubUrl: "https://github.com/Vyrabot",
  },
  {
    id: "commerce-shop",
    title: "E-Commerce Shop",
    category: "Full Stack",
    summary: "A product-first shopping UI with clear browsing paths and polished responsive behavior.",
    description: "A practical e-commerce interface created to make product selection feel quick, confident, and enjoyable.",
    images: [shopPreview, ecommercePreview, projectOne],
    stack: ["React", "JavaScript", "CSS"],
    liveUrl: "https://kat0zy.vercel.app/",
    githubUrl: "https://github.com/Vyrabot",
  },
  {
    id: "bacii-score",
    title: "Track Score BacII",
    category: "Utility",
    summary: "A focused tool for tracking and understanding BacII exam scores.",
    description: "This utility makes it easier for students to follow scores in a clean, distraction-free environment.",
    images: [bacii, projectFour, projectOne],
    stack: ["React", "Data UI", "Responsive Design"],
    liveUrl: "https://www.bacii.online/",
    githubUrl: "https://github.com/Vyrabot",
  },
];

export const mockPosts = [
  {
    id: "maintainable-react-interfaces",
    title: "Building maintainable React interfaces",
    excerpt: "A few practical habits that keep a React project easy to extend as it grows.",
    content: [
      "Thoughtful component boundaries, clear data flow, and reusable UI patterns make a project easier to maintain. I start with the user journey and keep each component focused on one responsibility.",
      "When a component grows, I look for a natural split: a display component, a small hook for state, or a data module. That keeps the important part of the UI easy to understand and safer to change.",
      "Consistency is another useful tool. Shared spacing, buttons, states, and naming conventions mean that a new feature can feel like it belonged in the product from the beginning.",
    ],
    category: "React",
    publishedAt: "2026-07-28",
    readTime: "4 min read",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    id: "database-schema-to-useful-api",
    title: "From database schema to useful API",
    excerpt: "How I think through relationships, validation, and endpoints before writing a backend.",
    content: [
      "A useful API begins with a clear model of the information it owns. Defining relationships and validation rules early helps the frontend receive predictable, meaningful responses.",
      "I map the actions a person can take before deciding on endpoints. That makes it much easier to keep requests small, error messages helpful, and permissions understandable.",
      "An API does not need to expose every database detail. A deliberately shaped response gives the client exactly what it needs and leaves room for the schema to evolve.",
    ],
    category: "Backend",
    publishedAt: "2026-07-12",
    readTime: "6 min read",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: "small-design-decisions",
    title: "Small design decisions that improve usability",
    excerpt: "Spacing, feedback, and readable type are details that make a polished interface feel effortless.",
    content: [
      "Good interfaces are usually calm and predictable. Consistent spacing, helpful empty states, and accessible contrast allow people to focus on their task rather than the interface itself.",
      "Feedback is especially important. A loading state, a clear success message, or a useful validation hint tells people that their action was understood.",
      "I like to treat details as part of the product, not decoration. They are often the difference between a page that merely works and one that feels comfortable to use.",
    ],
    category: "Design",
    publishedAt: "2026-06-25",
    readTime: "3 min read",
    accent: "from-violet-500 to-fuchsia-600",
  },
];
