import { ArrowRight } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

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

export default function Hero() {
  const slides = ["01", "02", "03", "04", "05"];
  return (
    <section
      id="home"
      className="relative flex flex-col justify-end px-6 md:px-20 py-10 md:py-14 text-white"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(1,136,55,0.75) 100%)",
      }}
    >
      <PhotoPlaceholder
        label="Doctors in the hospital corridor"
        className="absolute inset-0 -z-10"
      />

      {/* slide counter */}
      <div className="mx-auto mb-10 flex items-center gap-8 font-display text-xs font-bold uppercase tracking-widest">
        <span>Prev</span>
        <div className="flex items-center gap-4">
          {slides.map((s, i) => (
            <span key={s} className="flex items-center gap-4">
              <span
                className={i === slides.length - 1 ? "" : "opacity-70"}
                style={i === slides.length - 1 ? { color: YELLOW } : {}}
              >
                {s}
              </span>
              {i < slides.length - 1 && (
                <span className="h-4 w-px bg-white/40" />
              )}
            </span>
          ))}
        </div>
        <span>Next</span>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col md:flex-row items-end justify-between gap-10 rounded-sm bg-black/10 p-6 md:p-10 backdrop-blur-sm">
        <div className="flex flex-col gap-6 max-w-xl">
          <span className="inline-flex items-center gap-2 border-l-2 border-white pl-3 font-body text-sm">
            Shaping the Future of Healthcare, One Student at a Time
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Excellence in Medical Education,{" "}
            <span style={{ color: YELLOW }}>Innovation</span> in Healthcare
          </h1>
          <button
            className="flex w-fit items-center gap-2 bg-white px-6 py-3 font-body text-sm font-medium"
            style={{ color: GREEN }}
          >
            View Our Program
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <h3
            className="font-display text-2xl font-bold"
            style={{ color: YELLOW }}
          >
            MBBS Degrees
          </h3>
          {["Bachelor of Medicine", "Bachelor of Surgery"].map((item) => (
            <a
              key={item}
              href="#"
              className="flex items-center justify-between gap-6 border-b border-white/40 pb-2 font-body text-sm"
            >
              {item}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
