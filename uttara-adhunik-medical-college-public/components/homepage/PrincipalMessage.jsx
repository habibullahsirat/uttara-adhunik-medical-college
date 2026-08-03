function PhotoPlaceholder({ label, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a3d1f] to-[#018837] ${className}`}
    >
      <span className="font-body text-[11px] uppercase tracking-widest text-white/60 text-center px-4">
        {label}
      </span>
    </div>
  );
}

export default function PrincipalMessage() {
  return (
    <section
      className="flex flex-col items-center gap-10 px-6 md:px-20 py-16 md:py-24"
      style={{ backgroundColor: "rgba(1,136,55,0.1)" }}
    >
      <span
        className="flex items-center gap-2 font-body text-lg font-medium"
        style={{ color: GREEN }}
      >
        <span className="h-6 w-8" style={{ backgroundColor: GREEN }} />{" "}
        knowledge meets innovation
      </span>
      <h2 className="font-display text-4xl md:text-6xl font-bold text-center text-black">
        Message from the <span style={{ color: YELLOW }}>Principal</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-6xl">
        <div className="flex flex-col gap-7 flex-1">
          <div className="flex flex-col gap-1">
            <p className="font-display text-2xl font-bold tracking-wide text-black">
              Honorable
            </p>
            <p
              className="font-display text-3xl font-bold tracking-wide"
              style={{ color: GREEN }}
            >
              Prof. Dr. Mohammad Mohibur Rahman
            </p>
            <p className="font-display text-5xl font-bold tracking-wide text-[#444444]">
              Principal{" "}
              <span className="text-2xl align-middle">(In Charge)</span>
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="font-body text-xl font-bold text-[#444444]">
              Ensuring Quality Healthcare &amp; Medical Education
            </h4>
            <p className="font-body text-sm text-justify text-[#444444]">
              Bangladesh faces significant challenges in delivering healthcare
              nationwide. To support government efforts, Uttara Adhunik Medical
              College Hospital (UAMCH) has been providing comprehensive health
              services since 2003, evolving into a tertiary-level
              multidisciplinary hospital.
            </p>
            <button
              className="flex w-fit items-center gap-2 px-8 py-4 font-body font-medium text-white"
              style={{ backgroundColor: GREEN }}
            >
              Read More <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>

        <PhotoPlaceholder
          label="Portrait of the Principal"
          className="w-full lg:w-[45%] h-[420px] shrink-0"
        />
      </div>
    </section>
  );
}
