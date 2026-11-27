
import React from "react";
import SectionHeading from "../components/SectionHeading";
import { FaExternalLinkAlt } from "react-icons/fa";

// Projects Data
const projects = [
  {
    number: "01",
    name: "Interview Prep AI",
    description:
      "AI-powered mock interview simulator with real-time vocal analytics and scoring. Helps candidates practice interviews, improve communication and prepare for real-world opportunities.",
    image: "/projects/interview-prep-ai.png",
    technologies: ["React.js", "Node.js", "Express", "MongoDB"],
    // live: "#",
    github: "https://github.com/Ayush0299/Interview_Prep_AI",
  },
  {
    number: "02",
    name: "IRIS (Intelligent Recognition & Interactive System) ",
    description:
      "IRIS is an AI-powered visual assistant built with Python, YOLOv8, and BLIP, featuring real-time object detection, OCR, image captioning, and visual question answering, along with pothole detection, and live camera processing through Streamlit.",
    image: "/projects/Project-IRIS.png",
    technologies: ["Python", "YOLOv8", "OpenCV", "Streamlit", "EasyOCR", "BLIP"],
    // live: "#",
    github: "https://github.com/Ayush0299/Project-IRIS",
  },
  {
    number: "03",
    name: "My Portfolio",
    description:
      "Personal portfolio website showcasing projects and skills.",
    image: "/projects/My-Portfolio.png",
    technologies: ["JavaScript", "React.js", "Tailwind CSS"],
    // live: "#",
    github: "https://github.com/Ayush0299/my-portfolio/",
  },
];

// Browser Image Component
const BrowserImage = ({ image, name, featured = false }) => {
  return (
    <div className="overflow-hidden rounded-[11px] border border-slate-200 bg-slate-100 dark:border-[#1d293e] dark:bg-[#111a2d]">
      {/* Browser Header */}
      <div className="flex h-[32px] items-center gap-[7px] bg-slate-100 px-3 dark:bg-[#111a2d]">
        <span className="h-[9px] w-[9px] rounded-full bg-[#e04b4b]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#d89017]" />
        <span className="h-[9px] w-[9px] rounded-full bg-[#12a77b]" />

        <span className="ml-2 truncate text-[10px] text-slate-500 dark:text-[#a6b1c7]">
          {name.toLowerCase().replaceAll(" ", "")}/dashboard
        </span>
      </div>

      {/* Project Image */}
      <div
        className={
          featured
            ? "h-[190px] sm:h-[240px] lg:h-[300px]"
            : "h-[220px] sm:h-[260px] lg:h-[290px]"
        }
      >
        <img
          src={image}
          alt={`${name} project preview`}
          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>
    </div>
  );
};

// Project Links Component
const ProjectLinks = ({ live, github }) => {
  return (
    <div className="flex items-center gap-[22px] border-t border-slate-200 pt-[13px] dark:border-[#1d293e]">
      {/* <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-[7px] text-[11px] font-bold text-blue-500 transition-colors hover:text-blue-400"
      >
        LIVE DEMO
        <FaExternalLinkAlt className="text-[9px]" />
      </a> */}

      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-[7px] text-[11px] font-bold text-slate-600 transition-colors hover:text-blue-500 dark:text-[#d9e0ec]"
      >
        GITHUB
        <FaExternalLinkAlt className="text-[9px]" />
      </a>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <article className="group flex h-full flex-col rounded-[15px] border border-slate-200 bg-white p-[17px] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/5 dark:border-[#1d293e] dark:bg-[#0d1525] dark:hover:border-blue-500/40 sm:p-[21px]">
      <BrowserImage image={project.image} name={project.name} />

      <div className="flex flex-1 flex-col pt-[19px]">
        <h3 className="text-[21px] font-bold tracking-[-.5px] text-slate-900 transition-colors group-hover:text-blue-500 dark:text-white">
          {project.name}
        </h3>

        <p className="mt-[9px] min-h-[48px] text-[14px] leading-[1.65] text-slate-500 dark:text-[#a6b1c7]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-[21px] mt-[15px] flex flex-wrap gap-[8px]">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-[5px] border border-slate-200 bg-slate-50 px-[10px] py-[6px] text-[10px] font-semibold text-slate-700 transition-colors hover:border-blue-400/50 dark:border-[#263550] dark:bg-[#17233b] dark:text-[#d9e0ec]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="mt-auto">
          <ProjectLinks live={project.live} github={project.github} />
        </div>
      </div>
    </article>
  );
};

// Main Projects Section
const Projects = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="scroll-mt-[70px] bg-white py-[35px] text-slate-900 transition-colors duration-300 dark:bg-[#080d19] dark:text-white sm:py-[45px]"
    >
      <div className="mx-auto w-full max-w-[1088px] px-[18px] min-[851px]:px-7 min-[1150px]:px-0">

        {/* Section Heading */}
        <SectionHeading
          title="Projects"
          subtitle="Check out some of my recent work"
        />

        {/* Featured Project */}
        <article className="-mt-5 border-b border-slate-200 pb-[35px] pt-[12px] dark:border-[#1d293e] sm:pb-[42px]">

          <div className="grid grid-cols-1 items-center gap-7 min-[851px]:grid-cols-[0.82fr_1.18fr] min-[851px]:gap-[45px]">

            {/* Featured Project Details */}
            <div className="flex flex-col items-start">
              <span className="mb-[12px] rounded-md border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-blue-500">
                Featured Project
              </span>

              <h3 className="text-[28px] font-extrabold tracking-[-1px] text-slate-900 dark:text-white sm:text-[34px]">
                {featuredProject.name}
              </h3>

              <p className="mt-[12px] max-w-[440px] text-[14px] leading-[1.75] text-slate-500 dark:text-[#a6b1c7] sm:text-[15px]">
                {featuredProject.description}
              </p>

              {/* Technologies */}
              <div className="mt-[20px] flex flex-wrap gap-[9px]">
                {featuredProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-[5px] border border-slate-200 bg-slate-50 px-[11px] py-[7px] text-[11px] font-semibold text-slate-700 transition-colors hover:border-blue-400/50 dark:border-[#263550] dark:bg-[#111a2d] dark:text-[#d9e0ec]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="mt-[25px] w-full max-w-[440px]">
                <ProjectLinks
                  // live={featuredProject.live}
                  github={featuredProject.github}
                />
              </div>
            </div>

            {/* Featured Project Image */}
            <div className="rounded-[13px] border border-slate-200 bg-white p-[8px] shadow-lg shadow-slate-200/40 transition-all duration-300 hover:border-blue-400/40 dark:border-[#1d293e] dark:bg-[#0d1525] dark:shadow-black/20">
              <BrowserImage
                image={featuredProject.image}
                name={featuredProject.name}
                featured
              />
            </div>
          </div>
        </article>

        {/* Remaining Projects */}
        <div className="grid grid-cols-1 items-stretch gap-5 py-[32px] sm:grid-cols-2 sm:gap-[25px] sm:py-[38px]">
          {otherProjects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
