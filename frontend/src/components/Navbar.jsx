
import { useState } from "react";

import {
  FaBars,
  FaFileAlt,
  FaMoon,
  FaPaperPlane,
  FaSun,
  FaTimes,
} from "react-icons/fa";

// Navigation Links
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#techstack" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close Mobile Menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 h-[70px] border-b border-slate-200 bg-white dark:border-[#1d293e] dark:bg-[#080d19]">

      {/* Main Navbar Container */}
      <div className="mx-auto flex h-full max-w-[1088px] items-center justify-between gap-5 px-[18px] min-[1150px]:px-0">

        {/* Logo */}
        <a
          href="#home"
          className="flex min-w-0 items-center gap-[11px]"
        >
          <img
            src="/profile.png"
            alt="Ayush Patel"
            className="h-10 w-10 rounded-full border border-slate-300 object-cover object-top dark:border-[#34435c]"
          />

          <span className="grid gap-[4px]">
            <strong className="text-[15px] leading-none tracking-[.4px] text-slate-900 dark:text-white">
              AYUSH PATEL
            </strong>

            <small className="text-[11px] font-bold tracking-[1.2px] text-slate-500 dark:text-[#a7b1c2]">
              WEB DEVELOPER
            </small>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-[5px] rounded-[25px] border border-slate-200 bg-slate-50 p-[6px] md:flex dark:border-[#1d293e] dark:bg-[#0d1524]">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-[20px] border border-transparent px-[16px] py-[10px] text-[13px] font-medium text-slate-500 transition-all duration-300 hover:border-blue-500 hover:text-blue-500 dark:text-[#aab4c8] dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Navbar Action Buttons */}
        <div className="flex min-w-0 items-center justify-end gap-[11px]">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="cursor-pointer rounded-lg border border-transparent bg-transparent p-[10px] text-[19px] text-slate-500 transition-all duration-300 hover:border-blue-500 hover:text-blue-500 dark:text-[#aab4c8] dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Resume Button */}
          <a
            href="/Ayush_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden h-[36px] items-center gap-[8px] rounded-lg border border-transparent bg-[#3c83f6] px-[17px] text-[12px] font-bold text-white transition-all duration-300 hover:border-blue-500 hover:brightness-110 md:inline-flex"
          >
            <FaFileAlt />
            Resume
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden h-[36px] items-center gap-[8px] rounded-lg border border-slate-200 px-[17px] text-[12px] font-bold text-slate-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-500 dark:border-[#1d293e] dark:text-[#d7deea] dark:hover:border-blue-400 dark:hover:text-blue-400 md:inline-flex"
          >
            <FaPaperPlane />
            Contact
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            className="rounded-lg border border-transparent p-[10px] text-xl text-slate-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-500 dark:text-[#aab4c8] dark:hover:border-blue-400 dark:hover:text-blue-400 md:hidden"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="flex flex-col gap-[10px] border-b border-slate-200 bg-white px-7 py-[20px] dark:border-[#1d293e] dark:bg-[#080d19] md:hidden">

          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="rounded-lg border border-transparent px-3 py-2 text-[15px] font-medium text-slate-600 transition-all duration-300 hover:border-blue-500 hover:text-blue-500 dark:text-[#a6b1c7] dark:hover:border-blue-400 dark:hover:text-blue-400"
            >
              {item.name}
            </a>
          ))}

          {/* Mobile Resume */}
          <a
            href="/Ayush_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="rounded-lg border border-transparent px-3 py-2 text-[15px] font-semibold text-blue-600 transition-all duration-300 hover:border-blue-500 dark:text-blue-400 dark:hover:border-blue-400"
          >
            Resume
          </a>

        </nav>
      )}

    </header>
  );
};

export default Navbar;
