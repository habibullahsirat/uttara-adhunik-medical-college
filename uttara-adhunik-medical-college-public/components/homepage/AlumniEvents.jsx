import { ArrowRight } from "lucide-react";

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

export default function AlumniEvents() {
  const events = [
    {
      num: "01",
      title: "Bridging Cultures: Global Perspectives in Medicine",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
    {
      num: "02",
      title: "Literary Voices: Celebrating Diverse Narratives",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
    {
      num: "03",
      title: "Cultural Exchange: Building Global Connections",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
  ];
  return (
    <section
      className="flex flex-col items-center gap-12 px-6 md:px-20 py-20"
      style={{ backgroundColor: "#E6F3EB" }}
    >
      <div className="flex w-full max-w-6xl items-center justify-between">
        <h2
          className="font-display text-3xl md:text-5xl font-bold"
          style={{ color: GREEN }}
        >
          Alumni Event
        </h2>
        <a
          href="#"
          className="flex items-center gap-1 font-body text-sm font-medium"
          style={{ color: GREEN }}
        >
          View All <ArrowRight className="h-4 w-4 -rotate-45" strokeWidth={2} />
        </a>
      </div>

      <div className="flex w-full max-w-6xl flex-col lg:flex-row items-stretch gap-10">
        <div className="flex flex-1 flex-col gap-1">
          {events.map((e) => (
            <div
              key={e.num}
              className="flex items-center gap-8 bg-[#F6F6F6] px-6 py-6"
            >
              <span className="font-display text-6xl font-light border border-[#018837]/60 px-3 py-1 text-black">
                {e.num}
              </span>
              <div className="flex flex-col gap-2">
                <p className="font-body text-lg" style={{ color: GREEN }}>
                  {e.title}
                </p>
                <div className="flex items-center gap-5 font-body text-sm text-[#444444]">
                  <span>{e.date}</span>
                  <span>{e.time}</span>
                  <span>{e.place}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <PhotoPlaceholder
          label="Alumni gathered on campus lawn"
          className="w-full lg:w-[45%] min-h-[300px]"
        />
      </div>
    </section>
  );
}
