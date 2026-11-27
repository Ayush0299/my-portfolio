import { FaArrowRight, FaFileAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-65px)] items-center bg-white text-slate-900 transition-colors dark:bg-[#080d19] dark:text-white"
    >
      <div className="mx-auto grid w-full max-w-[1088px] grid-cols-1 items-center gap-[42px] px-[18px] py-[42px] min-[851px]:grid-cols-[1.08fr_.92fr] min-[851px]:gap-14 min-[851px]:px-7 min-[851px]:py-5 min-[1150px]:px-0">
        <div className="text-center min-[851px]:text-left">
          <div className="mb-[25px] inline-flex items-center gap-2 rounded-[20px] border border-slate-200 px-[11px] py-[6px] text-xs text-slate-500 dark:border-[#1d293e] dark:text-[#a6b1c7]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#17b978] shadow-[0_0_8px_#17b978]" />
            Available for full-time roles &amp; contracts
          </div>

          <h1 className="text-[49px] font-extrabold leading-[1.08] tracking-[-2px] min-[521px]:text-[clamp(52px,5.5vw,68px)] min-[521px]:tracking-[-2.8px]">
            Ayush{" "}
            <span className="bg-gradient-to-r from-[#4a91ff] to-[#8183ee] bg-clip-text text-transparent">
              Patel
            </span>
          </h1>

          <h2 className="mb-[21px] mt-[11px] text-[17px] font-semibold leading-[1.3] tracking-[-.7px] text-slate-500 dark:text-[#a6b1c7] min-[521px]:text-[22px]">
            Frontend Developer · Building Modern Web Experiences
          </h2>

          <p className="text-[15px] leading-[1.55] text-slate-500 dark:text-[#a6b1c7] min-[521px]:text-[17px]">
            I build responsive and user-friendly web applications using React.js,
            <br className="hidden min-[521px]:block" />
            JavaScript and the MERN stack. I enjoy solving practical problems and
            <br className="hidden min-[521px]:block" />
            turning ideas into functional digital experiences.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-[14px] min-[521px]:flex-row min-[851px]:justify-start">
            <a
              href="#projects"
              className="inline-flex h-[49px] items-center justify-center gap-[9px] rounded-lg bg-[#3c83f6] px-[22px] text-sm font-bold text-white hover:brightness-110"
            >
              Explore Work
              <FaArrowRight />
            </a>

            <a
              href="/Ayush_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[49px] items-center justify-center gap-[9px] rounded-lg border border-slate-200 px-[22px] text-sm font-bold text-slate-700 hover:border-blue-500 dark:border-[#1d293e] dark:text-[#d9e0ec]"
            >
              <FaFileAlt />
              View Resume
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[620px] overflow-hidden rounded-[15px] border border-[#22304a] bg-[#111a2d] shadow-[0_18px_45px_rgba(0,0,0,.16)]">
          <div className="flex h-[37px] items-center bg-[#17233b] px-[13px]">
            <div className="flex gap-2">
              <span className="h-[11px] w-[11px] rounded-full bg-[#e04b4b]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#d89017]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#12a77b]" />
            </div>

            <div className="mx-auto rounded bg-[#111a2d] px-2.5 py-1 text-[10px] text-slate-300">
              <span className="mr-[7px] text-blue-400">⌁</span>
              profile.ts
            </div>

            <span className="text-[9px] text-slate-400">UTF-8</span>
          </div>

          <div className="overflow-x-auto px-[18px] py-5 font-mono text-[10px] leading-[2.16] min-[521px]:text-[11px]">
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">1</span>
              <span className="text-yellow-300">const <span className="font-bold text-white">developer</span> = <span className="text-slate-200">&#123;</span></span>
            </div>
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">2</span>
              <span className="text-teal-300">name: <span className="text-yellow-300">"Ayush Patel"</span>,</span>
            </div>
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">3</span>
              <span className="text-teal-300">role: <span className="text-yellow-300">"Frontend &amp; MERN Stack Developer"</span>,</span>
            </div>
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">4</span>
              <span className="text-teal-300">education: <span className="text-yellow-300">"B.Tech in Computer Science"</span>,</span>
            </div>
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">5</span>
              <span className="text-teal-300">location: <span className="text-yellow-300">"Noida, UP, India"</span>,</span>
            </div>
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">6</span>
              <span className="text-teal-300">degreeScore: <span className="text-yellow-300">"7.71 / 10 CGPA"</span>,</span>
            </div>
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">7</span>
              <span className="text-teal-300">coreStack: <span className="text-slate-200">[</span></span>
            </div>
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">8</span>
              <span className="pl-4 text-yellow-300">"React.js", "JavaScript (ES6+)",</span>
            </div>
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">9</span>
              <span className="pl-4 text-yellow-300">"Node.js", "Tailwind CSS",</span>
            </div>
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">10</span>
              <span className="pl-4 text-yellow-300">"MongoDB", "REST APIs"</span>
            </div>
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">11</span>
              <span className="text-slate-200">],</span>
            </div>
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">12</span>
              <span className="text-teal-300">focus: <span className="text-yellow-300">"Frontend &amp; UI Engineering"</span>,</span>
            </div>
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">13</span>
              <span className="text-teal-300">availableForWork: <span className="text-orange-300">true</span></span>
            </div>
            <div className="flex gap-[14px] whitespace-nowrap">
              <span className="w-5 text-right text-slate-400">14</span>
              <span className="text-slate-200">&#125;;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
