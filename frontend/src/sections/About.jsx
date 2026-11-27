import SectionHeading from "../components/SectionHeading";
import { FaCode } from "react-icons/fa";

const technologies = [
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white text-slate-900 transition-colors dark:bg-[#080d19] dark:text-white"
    >
      <div className="mx-auto w-full max-w-[1088px] px-[18px] py-[65px] min-[851px]:px-7 min-[851px]:py-[85px] min-[1150px]:px-0">
        {/* Section Heading */}
        <SectionHeading
          title="About"
          highlight="Me"
          subtitle="Get to know more about me"
        />

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-start gap-[30px] min-[851px]:grid-cols-[255px_1fr] min-[851px]:gap-[42px]">
          {/* Profile Image */}
          <div className="relative mx-auto h-[320px] w-full max-w-[255px] overflow-hidden rounded-[15px] border border-slate-200 dark:border-[#1d293e] min-[851px]:mx-0">
            <img
              src="/profile.png"
              alt="Ayush Patel"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute bottom-1 left-1/2 w-[90%] -translate-x-1/2 rounded-lg border border-gray-700/60 bg-black/75 px-3 py-2 text-center backdrop-blur-sm transition-all duration-300 hover:bg-black/90">
              <h3 className="text-sm font-bold text-white">Ayush Patel</h3>
              <p className="mt-0.5 text-xs text-gray-300">Frontend Developer</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="min-w-0">
            {/* Developer Badge */}
            <div className="mb-[21px] inline-flex items-center gap-2 rounded-[20px] border border-slate-200 px-[11px] py-[6px] text-xs text-slate-500 dark:border-[#1d293e] dark:text-[#a6b1c7]">
              <FaCode className="text-blue-500" />
              WEB DEVELOPER
            </div>

            {/* Introduction */}
            <p className="text-[17px] leading-[1.6] text-slate-600 dark:text-[#a6b1c7] min-[521px]:text-[19px]">
              I'm a Computer Science graduate who enjoys building modern web
              applications with{" "}
              <span className="bg-gradient-to-r from-[#4a91ff] to-[#8183ee] bg-clip-text font-semibold text-transparent">
                React.js
              </span>
              ,{" "}
              <span className="bg-gradient-to-r from-[#4a91ff] to-[#8183ee] bg-clip-text font-semibold text-transparent">
                JavaScript
              </span>{" "}
              and the MERN stack. I focus on writing clean code, creating
              responsive interfaces and developing practical solutions to
              real-world problems.
            </p>

            {/* Core Technologies */}
            <div className="mt-[27px]">
              <h4 className="mb-[13px] text-[11px] font-bold tracking-[1.2px] text-slate-500 dark:text-[#a6b1c7]">
                CORE TECHNOLOGIES
              </h4>

              <div className="flex flex-wrap gap-[9px]">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-[13px] py-[8px] text-[12px] font-medium text-slate-700 transition-colors dark:border-[#1d293e] dark:bg-[#111a2d] dark:text-[#d9e0ec]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="my-[25px] border-t border-slate-200 dark:border-[#1d293e]" />

            {/* Bottom Information */}
            <div className="grid grid-cols-1 gap-[22px] min-[521px]:grid-cols-2">
              <div>
                <h4 className="mb-[9px] text-[11px] font-bold tracking-[1.2px] text-slate-500 dark:text-[#a6b1c7]">
                  ROLE FOCUS
                </h4>

                <p className="text-[14px] font-semibold text-slate-800 dark:text-[#d9e0ec]">
                  Frontend Development &amp; MERN Stack
                </p>
              </div>

              {/* <div>
                <h4 className="mb-[9px] text-[11px] font-bold tracking-[1.2px] text-slate-500 dark:text-[#a6b1c7]">
                  LOCATION
                </h4>

                <p className="text-[14px] font-semibold text-slate-800 dark:text-[#d9e0ec]">
                  Noida, Uttar Pradesh
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
