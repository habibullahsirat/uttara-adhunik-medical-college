import { ArrowRight } from "lucide-react";

const GREEN = "#018837";

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

export default function AboutUAMC() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 md:px-20 py-16 md:py-24">
      <div className="relative w-full max-w-[500px] h-[420px] shrink-0">
        <PhotoPlaceholder
          label="Campus building"
          className="absolute left-0 top-6 h-[90%] w-[52%]"
        />
        <PhotoPlaceholder
          label="Lecture hall"
          className="absolute right-0 top-0 h-[90%] w-[42%] shadow-lg"
        />
        <div
          className="absolute left-[32%] top-[38%] flex h-32 w-32 items-center justify-center rounded-full text-white text-center font-display text-xs font-bold shadow-xl"
          style={{ backgroundColor: GREEN }}
        >
          UAMC
          <br />
          Est. 2003
        </div>
      </div>

      <div className="flex w-full max-w-xl flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span
            className="flex items-center gap-2 font-body text-lg font-medium"
            style={{ color: GREEN }}
          >
            <span className="h-6 w-8" style={{ backgroundColor: GREEN }} />
            knowledge meets innovation
          </span>
          <h2 className="font-display text-5xl font-light text-[#262626]">
            About{" "}
            <span className="font-bold" style={{ color: GREEN }}>
              UAMC
            </span>
          </h2>
        </div>

        <p className="font-body text-lg leading-relaxed text-[#737477]">
          <strong className="text-[#444444]">
            Uttara Adhunik Medical College (UAMC) is a prestigious medical
            institution located in Uttara Model Town, Dhaka, Bangladesh.
            Established in 2003.
          </strong>
        </p>
        <p className="font-body text-lg leading-relaxed text-[#737477]">
          UAMC offers a Bachelor of Medicine and Bachelor of Surgery (MBBS)
          program, designed to equip students with the knowledge, skills, and
          hands-on clinical training needed to excel in the medical profession.
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          {[
            { title: "College Mission", sub: "Statement" },
            { title: "College Vision", sub: "Achievement" },
          ].map((box) => (
            <div
              key={box.title}
              className="flex flex-1 items-center gap-4 border border-dashed p-5"
              style={{ borderColor: GREEN }}
            >
              <div
                className="h-10 w-10 shrink-0 rounded-full"
                style={{ backgroundColor: GREEN }}
              />
              <div>
                <p
                  className="font-display text-lg font-medium"
                  style={{ color: GREEN }}
                >
                  {box.title}
                </p>
                <p
                  className="font-display text-lg font-medium"
                  style={{ color: GREEN }}
                >
                  {box.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="flex w-fit items-center gap-2 px-8 py-4 font-body font-medium text-white"
          style={{ backgroundColor: GREEN }}
        >
          View Our Program <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}
