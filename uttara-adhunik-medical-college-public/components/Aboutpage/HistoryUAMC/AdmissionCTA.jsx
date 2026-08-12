import { ArrowUpRight } from "lucide-react";
const GREEN = "#018837";
const YELLOW = "#FECD2F";

export default function AdmissionCTA() {
  return (
    <section
      className="px-6 md:px-20 py-16 bg-cover bg-center flex justify-center"
      style={{
        backgroundImage: `linear-gradient(
          rgba(1,136,55,0.4),
          rgba(1,136,55,0.4)
        ), url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=500&fit=crop")`,
      }}
    >
      <div
        className="w-full max-w-6xl flex flex-col items-center gap-8 py-14 px-6 md:px-20"
        style={{
          background: "rgba(0,0,0,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          className="text-4xl md:text-6xl font-bold text-center tracking-wide"
          style={{
            color: YELLOW,
            fontFamily: "'Bitter', serif",
          }}
        >
          UAMC Admission
        </h2>

        <p className="text-white text-center max-w-3xl leading-relaxed">
          Uttara Adhunik Medical College (UAMC) was established in 2003 with a
          vision to provide quality medical education and healthcare services.
          Founded through the dedicated efforts of medical professionals and
          social leaders, UAMC is committed to training future doctors while
          ensuring affordable healthcare for the community.
        </p>

        <button
          className="inline-flex items-center gap-3 px-8 py-4 text-white font-medium"
          style={{ background: GREEN }}
        >
          Learn More
          <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
}
