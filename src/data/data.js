import social_pro01 from "../assets/social_01.png";
import social_pro02 from "../assets/social_02.png";
import social_pro03 from "../assets/social_03.png";
import social_pro04 from "../assets/social_04.png";
import social_pro05 from "../assets/social_05.png";

import bacii_pro01 from "../assets/bacii_01.png";
import bacii_pro02 from "../assets/bacii_02.png";
import bacii_pro03 from "../assets/bacii_03.png";
import bacii_pro04 from "../assets/bacii_04.png";
import bacii_pro05 from "../assets/bacii_05.png";

import ecommerce_pro01 from "../assets/ecommerce_01.png";
import ecommerce_pro02 from "../assets/ecommerce_02.png";
import ecommerce_pro03 from "../assets/ecommerce_03.png";
import ecommerce_pro04 from "../assets/ecommerce_04.png";
import ecommerce_pro05 from "../assets/ecommerce_05.png";
import ecommerce_pro06 from "../assets/ecommerce_06.png";
import ecommerce_pro07 from "../assets/ecommerce_07.png";
import ecommerce_pro08 from "../assets/ecommerce_08.png";

import khmerSocial from "../assets/khmer-social.png";
import shopPreview from "../assets/project3.png";
import bacii from "../assets/bacii.png";

export const mockProjects = [
  {
    id: "ecommerce-platform",
    title: "Ecommerce Website",
    category: "Full Stack",
    summary:
      "A focused storefront experience built around easy product discovery and checkout.",
    description:
      "A modern commerce concept with a clean product browsing journey, responsive layouts, and attention to conversion-friendly details.",
    images: [
      ecommerce_pro01,
      ecommerce_pro02,
      ecommerce_pro03,
      ecommerce_pro04,
      ecommerce_pro05,
      ecommerce_pro06,
      ecommerce_pro07,
      ecommerce_pro08,
    ],
    stack: ["Next Js", "Spring Boot", "PostgreSQL"],
    liveUrl: "https://github.com/ChamreunVira/ecommerce-web",
    githubUrl: "https://github.com/ChamreunVira/ecommerce-web",
  },
  {
    id: "khmer-social",
    title: "Khmer Social",
    category: "Full Stack",
    summary:
      "A social platform concept designed for connection, sharing, and a friendly community experience.",
    description:
      "The interface brings posts, conversation, and community activity together in a responsive social product.",
    images: [
      social_pro01,
      social_pro02,
      social_pro03,
      social_pro04,
      social_pro05,
    ],
    stack: ["React", "REST API", "Tailwind CSS"],
    liveUrl: "https://khmer-social.vercel.app/",
    githubUrl: "https://github.com/Vyrabot",
  },
  {
    id: "bacii-score",
    title: "Track Score BacII",
    category: "Utility",
    summary: "A focused tool for tracking and understanding BacII exam scores.",
    description:
      "This utility makes it easier for students to follow scores in a clean, distraction-free environment.",
    images: [bacii_pro01, bacii_pro02, bacii_pro03, bacii_pro04, bacii_pro05],
    stack: ["React", "Data UI", "Responsive Design"],
    liveUrl: "https://www.bacii.online/",
    githubUrl: "https://github.com/Vyrabot",
  },
];

export const mockPosts = [
  {
    id: "maintainable-react-interfaces",
    title: "Building maintainable React interfaces",
    excerpt:
      "A few practical habits that keep a React project easy to extend as it grows.",
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
    excerpt:
      "How I think through relationships, validation, and endpoints before writing a backend.",
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
    excerpt:
      "Spacing, feedback, and readable type are details that make a polished interface feel effortless.",
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
