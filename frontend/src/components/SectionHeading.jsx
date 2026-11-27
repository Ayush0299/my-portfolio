
const SectionHeading = ({ title, highlight, subtitle }) => {
  return (
    <div className="mb-[20px]">

      {/* Section Title */}
      <h2 className="text-[38px] font-bold tracking-tight leading-tight">
        {title}{" "}

        <span className="bg-gradient-to-r from-[#3987ff] to-[#8985ff] bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>

      {/* Section Subtitle */}
      <p className="mt-[8px] text-[13px] text-slate-600 dark:text-[#b8c9e6]">
        {subtitle}
      </p>

    </div>
  );
};

export default SectionHeading;
