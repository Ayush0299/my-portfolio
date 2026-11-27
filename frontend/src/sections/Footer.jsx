
import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/ayush0299",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/ayushpatel0310/",
    },
  ];

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="m-0 border-0 bg-white p-0 text-slate-600 transition-colors duration-300 dark:bg-[#080d19] dark:text-[#a6b1c7]">

      <div className="mx-auto flex w-full max-w-[1088px] flex-col items-center justify-between gap-5 px-[18px] py-[12px] sm:flex-row sm:gap-4 min-[1150px]:px-0">

        {/* Left Side - Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-[12px] font-medium tracking-[0.2px] sm:text-[13px]">
            Built with{" "}
            <span className="text-red-500">❤️</span>{" "}
            by{" "}
            <span className="font-bold text-slate-900 dark:text-white">
              Ayush Patel
            </span>
            {" "}· © 2026 Portfolio
          </p>

          <p className="mt-[4px] text-[11px] text-slate-500 dark:text-[#8492aa]">
            Turning ideas into meaningful digital experiences.
          </p>
        </div>

        {/* Right Side - Social Links & Back to Top */}
        <div className="flex items-center justify-center gap-[12px] sm:gap-[15px]">

          {/* Social Icons */}
          <div className="flex items-center gap-[9px]">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.name === "Email" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={social.name}
                title={social.name}
                className="flex h-[37px] w-[37px] items-center justify-center rounded-[9px] border border-slate-200 bg-slate-50 text-[15px] text-slate-600 transition-all duration-300 hover:-translate-y-[3px] hover:border-blue-400 hover:text-blue-500 dark:border-[#26344d] dark:bg-[#111a2d] dark:text-[#b8c9e6] dark:hover:border-blue-500 dark:hover:text-blue-400"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={handleBackToTop}
            aria-label="Back to top"
            className="group flex h-[37px] items-center gap-[8px] rounded-[9px] bg-gradient-to-r from-[#3987ff] to-[#8985ff] px-[13px] text-[11px] font-bold text-white shadow-md shadow-blue-500/15 transition-all duration-300 hover:-translate-y-[3px] hover:shadow-lg hover:shadow-blue-500/25"
          >
            BACK TO TOP
            <FaArrowUp className="text-[10px] transition-transform duration-300 group-hover:-translate-y-[2px]" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
