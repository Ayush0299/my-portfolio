
import { useState } from "react";

import {
  FaEnvelope,
  FaCopy,
  FaUsers,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const email = "patelayush0310@gmail.com";

  // Copy Email Address
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      window.location.href = `mailto:${email}`;
    }
  };

  // Handle Contact Form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const contactData = {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      subject: formData.get("subject").trim(),
      message: formData.get("message").trim(),
    };

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(
        "https://my-portfolio-heqr.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to send message."
        );
      }

      setStatus({
        type: "success",
        message: data.message,
      });

      // Reset form after successful submission
      form.reset();

    } catch (error) {
      console.error("Contact Form Error:", error);

      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again.",
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate min-h-screen overflow-hidden border-t border-slate-200 bg-slate-50 text-slate-900 transition-colors duration-300 dark:border-[#1d293e] dark:bg-[#0d1423] dark:text-white"
    >
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-[180px] -top-[180px] h-[500px] w-[500px] rounded-full bg-blue-500/[0.10] opacity-0 blur-[130px] dark:opacity-100" />

        <div className="absolute -bottom-[200px] -right-[150px] h-[500px] w-[500px] rounded-full bg-indigo-500/[0.08] opacity-0 blur-[140px] dark:opacity-100" />

      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1088px] px-[18px] py-[65px] min-[851px]:px-7 min-[851px]:py-[85px] min-[1150px]:px-0">

        {/* Main Contact Layout */}
        <div className="grid grid-cols-1 items-start gap-[35px] min-[851px]:grid-cols-[0.85fr_1.15fr] min-[851px]:gap-[48px]">

          {/* Left Side - Contact Information */}
          <div>

            {/* Section Heading */}
            <h2 className="text-[34px] font-bold leading-tight tracking-[-1px] min-[521px]:text-[38px]">
              Let's{" "}
              <span className="bg-gradient-to-r from-[#3987ff] to-[#8985ff] bg-clip-text text-transparent">
                Connect
              </span>
            </h2>

            {/* Introduction */}
            <p className="mt-[10px] max-w-[380px] text-[13px] leading-[1.7] text-slate-600 dark:text-[#b8c9e6]">
              Have a question or an opportunity? Feel free to send me a
              message. I'd love to hear from you.
            </p>

            {/* Direct Email Card */}
            <div className="mt-[27px] rounded-[13px] border border-slate-200 bg-white p-[17px] dark:border-[#1c293d] dark:bg-[#0d1423]">

              <p className="mb-[12px] text-[9px] font-semibold tracking-[0.5px] text-slate-500 dark:text-[#a6b1c7]">
                DIRECT EMAIL
              </p>

              {/* Email Address */}
              <div className="flex h-[50px] items-center justify-between gap-3 rounded-[8px] border border-slate-200 bg-slate-50 px-[11px] dark:border-[#1c293d] dark:bg-[#080d19]">

                <span className="break-all text-[11px] font-semibold text-slate-800 dark:text-white">
                  {email}
                </span>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="shrink-0 cursor-pointer p-2 text-[13px] text-slate-500 transition-colors hover:text-blue-500 dark:text-[#b8c9e6]"
                >
                  {copied ? (
                    <span className="text-[10px] text-green-500">
                      Copied!
                    </span>
                  ) : (
                    <FaCopy />
                  )}
                </button>

              </div>

              {/* Open Email Button */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=patelayush0310@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[10px] flex h-[33px] items-center justify-center gap-[8px] rounded-[7px] bg-[#3b82f6] text-[9px] font-bold tracking-[0.4px] text-white transition-all hover:bg-blue-600"
              >
                <FaEnvelope />
                OPEN IN MAIL CLIENT
              </a>

            </div>

            {/* Social Links */}
            <div className="mt-[13px] grid grid-cols-2 gap-[10px]">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ayushpatel0310/"
                target="_blank"
                rel="noreferrer"
                className="group flex min-w-0 items-center justify-between rounded-[11px] border border-slate-200 bg-white px-[13px] py-[14px] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 dark:border-[#1c293d] dark:bg-[#0d1423] dark:hover:border-blue-500"
              >
                <div className="flex min-w-0 items-center gap-[9px]">

                  <FaUsers className="shrink-0 text-[14px] text-blue-500" />

                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-slate-800 dark:text-white">
                      LinkedIn
                    </p>

                    <p className="mt-[2px] truncate text-[9px] text-slate-500 dark:text-[#a6b1c7]">
                      /ayushpatel0310
                    </p>
                  </div>

                </div>

                <FaExternalLinkAlt className="shrink-0 text-[9px] text-slate-400 transition-colors group-hover:text-blue-500" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Ayush0299"
                target="_blank"
                rel="noreferrer"
                className="group flex min-w-0 items-center justify-between rounded-[11px] border border-slate-200 bg-white px-[13px] py-[14px] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 dark:border-[#1c293d] dark:bg-[#0d1423] dark:hover:border-blue-500"
              >
                <div className="flex min-w-0 items-center gap-[9px]">

                  <FaCode className="shrink-0 text-[14px] text-blue-500" />

                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-slate-800 dark:text-white">
                      GitHub
                    </p>

                    <p className="mt-[2px] truncate text-[9px] text-slate-500 dark:text-[#a6b1c7]">
                      /Ayush0299
                    </p>
                  </div>

                </div>

                <FaExternalLinkAlt className="shrink-0 text-[9px] text-slate-400 transition-colors group-hover:text-blue-500" />
              </a>

            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-[15px] border border-slate-200 bg-white p-[20px] dark:border-[#1c293d] dark:bg-[#0d1423] min-[521px]:p-[27px]">

            {/* Form Heading */}
            <h3 className="text-[18px] font-bold text-slate-900 dark:text-white">
              Send a Message
            </h3>

            <p className="mt-[4px] text-[11px] text-slate-500 dark:text-[#b8c9e6]">
              I typically respond within 24 business hours.
            </p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mt-[23px]">

              {/* Name and Email */}
              <div className="grid grid-cols-1 gap-[17px] min-[521px]:grid-cols-2">

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-[8px] block text-[9px] font-semibold tracking-[0.3px] text-slate-600 dark:text-[#b8c9e6]"
                  >
                    NAME
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    maxLength={100}
                    className="h-[43px] w-full rounded-[7px] border border-slate-200 bg-slate-50 px-[13px] text-[11px] text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 dark:border-[#1c293d] dark:bg-[#080d19] dark:text-white dark:placeholder:text-[#64748b]"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-[8px] block text-[9px] font-semibold tracking-[0.3px] text-slate-600 dark:text-[#b8c9e6]"
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    maxLength={254}
                    className="h-[43px] w-full rounded-[7px] border border-slate-200 bg-slate-50 px-[13px] text-[11px] text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 dark:border-[#1c293d] dark:bg-[#080d19] dark:text-white dark:placeholder:text-[#64748b]"
                  />
                </div>

              </div>

              {/* Subject Field */}
              <div className="mt-[19px]">
                <label
                  htmlFor="contact-subject"
                  className="mb-[8px] block text-[9px] font-semibold tracking-[0.3px] text-slate-600 dark:text-[#b8c9e6]"
                >
                  SUBJECT *
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Project inquiry, collaboration, or opportunity..."
                  required
                  maxLength={200}
                  className="h-[43px] w-full rounded-[7px] border border-slate-200 bg-slate-50 px-[13px] text-[11px] text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 dark:border-[#1c293d] dark:bg-[#080d19] dark:text-white dark:placeholder:text-[#64748b]"
                />
              </div>

              {/* Message Field */}
              <div className="mt-[19px]">
                <label
                  htmlFor="contact-message"
                  className="mb-[8px] block text-[9px] font-semibold tracking-[0.3px] text-slate-600 dark:text-[#b8c9e6]"
                >
                  MESSAGE
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project, role, or question..."
                  required
                  maxLength={5000}
                  className="min-h-[125px] w-full resize-y rounded-[7px] border border-slate-200 bg-slate-50 px-[13px] py-[12px] text-[11px] leading-[1.6] text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 dark:border-[#1c293d] dark:bg-[#080d19] dark:text-white dark:placeholder:text-[#64748b]"
                />
              </div>

              {/* Success / Error Message */}
              {status.message && (
                <div
                  role="status"
                  className={`mt-[15px] rounded-[7px] px-[12px] py-[10px] text-[11px] ${
                    status.type === "success"
                      ? "border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400"
                      : "border border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-[21px] flex h-[40px] items-center justify-center gap-[6px] rounded-[7px] bg-[#3b82f6] px-[27px] text-[10px] font-bold tracking-[0.3px] text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "SENDING..." : "SEND MESSAGE"}
                {!loading && <span>→</span>}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
