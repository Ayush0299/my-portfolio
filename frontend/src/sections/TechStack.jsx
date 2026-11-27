import SectionHeading from "../components/SectionHeading";
import React, { useState } from "react";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaWind,
  FaNodeJs,
  FaCode,
  FaDatabase,
  FaKey,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaCloud,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";

const technologies = [
  {
    name: "React.js",
    category: "Frontend",
    icon: <FaReact />,
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: <FaJs />,
    color: "#F7DF1E",
  },
  { name: "HTML5", category: "Frontend", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", category: "Frontend", icon: <FaCss3Alt />, color: "#1572B6" },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: <FaWind />,
    color: "#06B6D4",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <FaNodeJs />,
    color: "#339933",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: <FaCode />,
    color: "#64748B",
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: <FaCode />,
    color: "#3B82F6",
  },
  { name: "JWT Auth", category: "Backend", icon: <FaKey />, color: "#D946EF" },
  {
    name: "MongoDB",
    category: "Database",
    icon: <FaDatabase />,
    color: "#47A248",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: <FaDatabase />,
    color: "#00758F",
  },
  { name: "SQL", category: "Database", icon: <FaDatabase />, color: "#10B981" },
  {
    name: "Git",
    category: "Tools & Cloud",
    icon: <FaGitAlt />,
    color: "#F05032",
  },
  {
    name: "GitHub",
    category: "Tools & Cloud",
    icon: <FaGithub />,
    color: "#64748B",
  },
  {
    name: "VS Code",
    category: "Tools & Cloud",
    icon: <FaCode />,
    color: "#007ACC",
  },
  {
    name: "AWS EC2",
    category: "Tools & Cloud",
    icon: <FaServer />,
    color: "#FF9900",
  },
  {
    name: "AWS S3",
    category: "Tools & Cloud",
    icon: <FaCloud />,
    color: "#FF9900",
  },
  {
    name: "AWS IAM",
    category: "Tools & Cloud",
    icon: <FaShieldAlt />,
    color: "#FF9900",
  },
];

const categories = ["All", "Frontend", "Backend", "Database", "Tools & Cloud"];

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section
      id="techstack"
      className="min-h-screen px-[34px] py-[76px]
      bg-slate-50 text-slate-900
      dark:bg-[#0d1423] dark:text-white
      transition-colors duration-300"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        {/* Section Heading */}
        <SectionHeading
          title="My"
          highlight="Tech Stack"
          subtitle="Technologies I work with — from frontend interfaces to full-stack applications."
        />

        {/* Category Buttons */}
        <div className="flex flex-wrap items-center gap-[9px] mb-[54px]">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-[15px] py-[8px] rounded-full text-[12px] font-medium border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#3b82f6] border-[#3b82f6] text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:border-[#3b82f6] hover:text-[#3b82f6] dark:bg-transparent dark:border-[#1e2a40] dark:text-[#b8c9e6] dark:hover:border-[#3b82f6] dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-[20px]">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="group h-[101px] rounded-[15px]
              border border-slate-200 bg-white
              dark:border-[#1c293d] dark:bg-[#0d1524]
              flex flex-col items-center justify-center gap-[12px]
              cursor-pointer transition-all duration-300
              hover:border-[#3b82f6] hover:bg-blue-50
              dark:hover:border-[#3b82f6] dark:hover:bg-[#141f33]
              hover:-translate-y-1
              hover:shadow-[0_8px_25px_rgba(59,130,246,0.10)]"
            >
              <div
                className="text-[32px] transition-transform duration-300 group-hover:scale-110"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>

              <p className="text-[11px] font-semibold text-slate-800 dark:text-white">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
