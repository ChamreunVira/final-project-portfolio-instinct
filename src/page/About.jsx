import { Link, useLocation } from "react-router-dom";
import mainLogo from "../assets/profile.png";
import imgInstinct from "../assets/instinct.jpg";
import imgRupp from "../assets/slider1.jpg";
import SkillBar from "../components/ui/SkillBar";
import Projects from "../components/ui/Project";
import {
  IoBriefcase,
  IoCodeSlash,
  IoPerson,
  IoSchoolSharp,
} from "react-icons/io5";
import { DiHtml5, DiJava, DiReact } from "react-icons/di";
import {
  SiJetpackcompose,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
  SiSpringsecurity,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaCodeBranch,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaMicrochip,
  FaServer,
} from "react-icons/fa";

const pages = [
  { id: "about", label: "About me", path: "/about", icon: <IoPerson /> },
  {
    id: "education",
    label: "Education",
    path: "/education",
    icon: <IoSchoolSharp />,
  },
  { id: "skills", label: "Skills", path: "/skills", icon: <IoCodeSlash /> },
  {
    id: "projects",
    label: "Projects",
    path: "/projects",
    icon: <IoBriefcase />,
  },
];

const skills = [
  {
    category: "Backend Development",
    items: [
      {
        skill: "Java",
        percentage: 90,
        color: "from-red-500 to-orange-500",
        icon: <DiJava className="text-3xl text-red-500" />,
      },
      {
        skill: "Spring Boot",
        percentage: 85,
        color: "from-green-400 to-green-600",
        icon: <SiSpringboot className="text-3xl text-green-500" />,
      },
      {
        skill: "Spring Security",
        percentage: 80,
        color: "from-green-500 to-green-700",
        icon: <SiSpringsecurity className="text-3xl text-green-600" />,
      },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      {
        skill: "React.js",
        percentage: 85,
        color: "from-cyan-400 to-cyan-600",
        icon: <DiReact className="text-3xl text-cyan-400" />,
      },
      {
        skill: "Next.js",
        percentage: 75,
        color: "from-gray-700 to-black",
        icon: <SiNextdotjs className="text-3xl text-black dark:text-white" />,
      },
      {
        skill: "Tailwind CSS",
        percentage: 90,
        color: "from-teal-400 to-teal-600",
        icon: <SiTailwindcss className="text-3xl text-teal-400" />,
      },
      {
        skill: "HTML5 / CSS3",
        percentage: 90,
        color: "from-orange-400 to-blue-500",
        icon: <DiHtml5 className="text-3xl text-orange-500" />,
      },
    ],
  },
  {
    category: "Database & API",
    items: [
      {
        skill: "PostgreSQL",
        percentage: 85,
        color: "from-blue-400 to-blue-700",
        icon: <SiPostgresql className="text-3xl text-blue-500" />,
      },
      {
        skill: "MySQL",
        percentage: 80,
        color: "from-blue-500 to-cyan-500",
        icon: <SiMysql className="text-3xl text-blue-500" />,
      },
      {
        skill: "REST API",
        percentage: 90,
        color: "from-purple-400 to-purple-600",
        icon: <FaServer className="text-3xl text-purple-500" />,
      },
      {
        skill: "JPA / Hibernate",
        percentage: 80,
        color: "from-yellow-400 to-yellow-600",
        icon: <FaDatabase className="text-3xl text-yellow-500" />,
      },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      {
        skill: "Docker",
        percentage: 20,
        color: "from-blue-400 to-blue-600",
        icon: <FaDocker className="text-3xl text-blue-500" />,
      },
      {
        skill: "Git / GitHub",
        percentage: 80,
        color: "from-gray-500 to-black",
        icon: <FaGithub className="text-3xl text-gray-700 dark:text-white" />,
      },
      {
        skill: "CI/CD Pipeline",
        percentage: 20,
        color: "from-orange-400 to-red-500",
        icon: <FaCodeBranch className="text-3xl text-orange-500" />,
      },
    ],
  },
  {
    category: "Mobile & IoT",
    items: [
      {
        skill: "Jetpack Compose",
        percentage: 70,
        color: "from-purple-400 to-purple-700",
        icon: <SiJetpackcompose className="text-3xl text-purple-500" />,
      },
      {
        skill: "ESP32 / IoT",
        percentage: 80,
        color: "from-gray-400 to-gray-700",
        icon: <FaMicrochip className="text-3xl text-gray-500" />,
      },
    ],
  },
];

function About({ sectionOverride }) {
  const { pathname } = useLocation();
  const section =
    sectionOverride ||
    (pathname === "/education"
      ? "education"
      : pathname === "/skills"
        ? "skills"
        : pathname === "/projects"
          ? "projects"
          : "about");

  const heading =
    section === "about"
      ? "About me"
      : section[0].toUpperCase() + section.slice(1);

  const content = (
    <>
      {section === "about" && <AboutContent />}
      {section === "education" && <EducationContent />}
      {section === "skills" && <SkillsContent />}
      {section === "projects" && <ProjectsContent />}
    </>
  );

  if (sectionOverride) {
    return (
      <section
        id={section}
        className={`scroll-mt-20 py-20 md:py-28 ${
          section === "skills"
            ? "bg-gray-50 dark:bg-[#17171c]"
            : "bg-white dark:bg-primary"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="w-full rounded-3xl border border-gray-100 bg-white p-6 shadow-sm dark:border-white/5 dark:bg-[#232329] md:p-10 lg:p-12">
            {content}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white py-32 dark:bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 lg:hidden">
          <p className="font-mono text-accent">Portfolio</p>
          <h1 className="text-4xl text-primary dark:text-white">
            {heading}
            <span className="text-accent">.</span>
          </h1>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          <aside className="w-full lg:w-1/3">
            <div className="rounded-2xl border border-gray-200 bg-gray-100 p-8 text-center shadow-lg dark:border-gray-800 dark:bg-[#232329] lg:sticky lg:top-28">
              <div className="mx-auto mb-6 h-36 w-36 rounded-full border-2 border-accent p-1">
                <img
                  src={mainLogo}
                  alt="Chamreun Vira"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-primary dark:text-white">
                Chamreun Vira
              </h2>
              <p className="mb-6 text-accent">Web Developer</p>
              <nav
                aria-label="About pages"
                className="flex flex-col gap-3 text-left"
              >
                {pages.map((page) => (
                  <Link
                    key={page.id}
                    to={page.path}
                    className={`flex items-center gap-3 rounded-xl px-5 py-3 font-medium transition ${
                      section === page.id
                        ? "bg-accent text-primary shadow-md"
                        : "bg-white text-gray-600 hover:bg-gray-200 dark:bg-primary/50 dark:text-gray-400 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="text-xl">{page.icon}</span>
                    {page.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <main className="w-full lg:w-2/3">
            <div className="min-h-[500px] rounded-3xl bg-gray-50 p-6 md:p-10 dark:bg-[#232329]">
              {content}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

function AboutContent() {
  const details = [
    ["Phone", "+855 97 30 56 747"],
    ["Email", "virachamreun@gmail.com"],
    ["Experience", "Early-career developer"],
    ["Nationality", "Cambodian"],
  ];
  return (
    <div className="space-y-6">
      <p className="font-mono text-accent">About me</p>
      <h1 className="text-4xl text-primary dark:text-white">
        Why hire me<span className="text-accent">?</span>
      </h1>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        Hello! I’m <span className="font-bold text-accent">Chamreun Vira</span>,
        a web developer who enjoys creating modern, responsive applications with
        a focus on clear and seamless user experiences.
      </p>
      <p className="border-b border-gray-200 pb-6 text-lg leading-relaxed text-gray-600 dark:border-gray-700 dark:text-gray-300">
        I’m pursuing Software Engineering at RUPP and refining my craft through
        hands-on full-stack projects. My goal is to build dependable software
        and keep learning from every product I create.
      </p>
      <div className="grid gap-4 pt-2 sm:grid-cols-2">
        {details.map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-[#1c1c22]"
          >
            <span className="block text-sm text-gray-500 dark:text-gray-400">
              {label}
            </span>
            <span className="text-lg font-semibold text-primary dark:text-white">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationContent() {
  const schools = [
    {
      name: "Instinct Institute",
      period: "2023 – 2024",
      text: "Studied frontend development and modern web technologies with practical, project-based learning.",
      image: imgInstinct,
    },
    {
      name: "Royal University of Phnom Penh (RUPP)",
      period: "2024 – Present",
      text: "Pursuing a Bachelor’s Degree in Software Engineering and strengthening my computer science foundations.",
      image: imgRupp,
    },
  ];
  return (
    <div>
      <p className="font-mono text-accent">Education</p>
      <h1 className="mb-9 text-4xl text-primary dark:text-white">
        My learning path<span className="text-accent">.</span>
      </h1>
      <div className="ml-3 space-y-10 border-l-2 border-accent pl-8">
        {schools.map((school) => (
          <article key={school.name} className="relative">
            <span className="absolute -left-[41px] top-0 grid h-7 w-7 place-items-center rounded-full bg-accent text-primary">
              <IoSchoolSharp />
            </span>
            <h2 className="text-2xl font-bold text-primary dark:text-white">
              {school.name}
            </h2>
            <p className="font-mono text-sm text-accent">{school.period}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {school.text}
            </p>
            <img
              src={school.image}
              alt={school.name}
              className="mt-4 h-48 w-full rounded-xl object-cover md:h-60"
            />
          </article>
        ))}
      </div>
    </div>
  );
}

function SkillsContent() {
  return (
    <div className="space-y-10">
      <p className="font-mono text-accent">Skills</p>
      <h1 className="text-4xl text-primary dark:text-white">
        Tools I use<span className="text-accent">.</span>
      </h1>
      {skills.map((group) => (
        <div key={group.category}>
          <h2 className="mb-5 text-xl font-bold text-primary dark:text-white">
            {group.category}
          </h2>
          <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
            {group.items.map((item) => (
              <SkillBar
                key={item.skill}
                skill={item.skill}
                percentage={item.percentage}
                color={item.color}
                logo={item.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectsContent() {
  return (
    <div>
      <p className="font-mono text-accent">Projects</p>
      <h1 className="mb-3 text-4xl text-primary dark:text-white">
        Selected work<span className="text-accent">.</span>
      </h1>
      <p className="mb-8 text-gray-600 dark:text-gray-400">
        A selection of products I have designed and developed.
      </p>
      <Projects />
    </div>
  );
}

export default About;
