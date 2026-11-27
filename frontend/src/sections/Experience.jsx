import SectionHeading from "../components/SectionHeading";

const experiences = [
  {
    type: "experience",
    title: "MERN Stack Developer Intern",
    organization: "SparkTales",
    date: "MARCH 2025 — APRIL 2025",
    description:
      "Worked on responsive React interfaces, MERN stack development and REST API integration. Contributed to reusable UI components and backend data integration.",
    technologies: ["React.js", "Node.js", "REST APIs", "MongoDB"],
    dotColor: "#3B82F6",
  },
  {
    type: "experience",
    title: "AWS Cloud Intern",
    organization: "SparkTales",
    date: "SEPTEMBER 2024 — OCTOBER 2024",
    description:
      "Gained practical exposure to AWS cloud services, including EC2, S3 and IAM. Worked with cloud infrastructure concepts and access management.",
    technologies: ["AWS EC2", "AWS S3", "AWS IAM"],
    dotColor: "#3B82F6",
  },
  {
    type: "education",
    title: "Bachelor of Technology",
    organization: "Computer Science & Engineering",
    date: "AUGUST 2022 — JUNE 2026",
    college: "Rakhshpal Bahadur College of Engineering & Technology",
    university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    cgpa: "7.71",
    dotColor: "#818CF8",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen border-b border-slate-200 bg-white text-slate-900 transition-colors duration-300 dark:border-[#1d293e] dark:bg-[#080d19] dark:text-white"
    >
      <div className="mx-auto w-full max-w-[1088px] px-[18px] py-[65px] min-[851px]:px-7 min-[851px]:py-[85px] min-[1150px]:px-0">
        {/* Section Heading */}
        <SectionHeading
          title="Experience &"
          highlight="Education"
          subtitle="My professional journey and academic background"
        />

        {/* Timeline Container */}
        <div className="relative ml-[5px] border-l border-slate-200 dark:border-[#1d293e]">
          {experiences.map((item, index) => (
            <div
              key={item.title}
              className={`relative ml-[25px] ${
                index === experiences.length - 1 ? "pb-0" : "pb-[50px]"
              }`}
            >
              {/* Timeline Dot */}
              <span
                className="absolute -left-[30px] top-[3px] h-[12px] w-[12px] rounded-full border-[2px] bg-white dark:bg-[#080d19]"
                style={{ borderColor: item.dotColor }}
              />

              {/* Experience / Education Header */}
              <div className="flex flex-col gap-2 min-[700px]:flex-row min-[700px]:items-start min-[700px]:justify-between">
                <h3 className="text-[17px] font-bold leading-snug text-slate-900 dark:text-[#f1f5f9] min-[521px]:text-[18px]">
                  {item.title}

                  <span className="mx-[5px] text-slate-400">·</span>

                  <span
                    className="font-normal"
                    style={{ color: item.dotColor }}>
                    {item.organization}
                  </span>
                </h3>

                {/* Date */}
                <span className="shrink-0 text-[9px] font-semibold tracking-[0.3px] text-slate-500 dark:text-[#9ca9bd] min-[700px]:pt-[5px]">
                  {item.date}
                </span>
              </div>

              {/* Internship Description */}
              {item.type === "experience" && (
                <>
                  <p className="mt-[13px] max-w-[690px] text-[13px] leading-[1.65] text-slate-600 dark:text-[#a6b1c7]">
                    {item.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="mt-[13px] flex flex-wrap gap-[7px]">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-[4px] border border-slate-200 bg-slate-50 px-[9px] py-[4px] text-[9px] font-medium text-slate-600 dark:border-[#1d293e] dark:bg-[#101a2b] dark:text-[#a6b1c7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {/* Education Details */}
              {item.type === "education" && (
                <div className="mt-[13px]">
                  <div className="flex flex-wrap items-center gap-x-[12px] gap-y-2 text-[12px]">
                    <span className="font-bold text-slate-800 dark:text-[#e2e8f0]">
                      {item.college}
                    </span>

                    <span className="hidden text-slate-400 min-[521px]:inline">
                      •
                    </span>

                    <span className="text-slate-500 dark:text-[#a6b1c7]">
                      {item.university}
                    </span>
                  </div>

                  {/* CGPA Badge */}
                  <div className="mt-[12px] inline-flex items-center gap-[5px] rounded-[5px] border border-slate-200 bg-slate-50 px-[10px] py-[5px] text-[10px] dark:border-[#1d293e] dark:bg-[#101a2b]">
                    <span className="font-semibold text-slate-700 dark:text-[#dbe4f0]">
                      Cumulative GPA:
                    </span>

                    <span className="font-bold text-blue-500">
                      {item.cgpa}/10.0
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
