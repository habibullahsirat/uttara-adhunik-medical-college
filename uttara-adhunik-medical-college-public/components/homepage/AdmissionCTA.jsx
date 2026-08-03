const GREEN = "#018837";
const YELLOW = "#FECD2F";

export default function AdmissionCTA() {
  return (
    <section
      className="flex justify-center px-6 md:px-20 py-14"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(1,136,55,0.55), rgba(1,136,55,0.55)), linear-gradient(135deg,#062b16,#0a3d1f)",
      }}
    >
      <div
        className="flex w-full max-w-6xl flex-col items-center gap-8 py-12 px-6 text-center"
        style={{
          backgroundColor: "rgba(0,0,0,0.12)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          className="font-display text-4xl md:text-6xl font-bold tracking-wide"
          style={{ color: YELLOW }}
        >
          UAMC Admission
        </h2>
        <p className="max-w-4xl font-body text-white/90">
          Uttara Adhunik Medical College (UAMC) was established in 2003 with a
          vision to provide quality medical education and healthcare services.
          Founded through the dedicated efforts of medical professionals and
          social leaders, UAMC is committed to training future doctors while
          ensuring affordable healthcare for the community.
        </p>
        <button
          className="px-10 py-4 font-body font-medium text-white"
          style={{ backgroundColor: GREEN }}
        >
          Learn More →
        </button>
      </div>
    </section>
  );
}
