"use client";
import { useState } from "react";
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

export default function OurFacilities() {
  const items = [
    "Hostel",
    "Laboratory",
    "Hospital Service",
    "Cafeteria",
    "Training",
    "Medical Education Unit",
    "Departments",
    "Publications",
    "Seminar",
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="flex flex-col gap-10 py-16">
      <div className="flex flex-col items-center gap-2 bg-[#FAF6F6] py-10">
        <span
          className="flex items-center gap-2 font-body text-lg font-medium"
          style={{ color: GREEN }}
        >
          <span className="h-6 w-8" style={{ backgroundColor: GREEN }} />{" "}
          knowledge meets innovation
        </span>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-black">
          Our Facilities
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-6 bg-[#FAF6F6] px-6 md:px-20 pb-16">
        <div className="flex w-full max-w-xs flex-col gap-2">
          {items.map((item, i) => (
            <button
              key={item}
              onClick={() => setActive(i)}
              className={`flex items-center justify-between px-5 py-4 font-display text-base font-bold ${
                i === active ? "text-white" : "bg-white text-black"
              }`}
              style={i === active ? { backgroundColor: GREEN } : {}}
            >
              {item}
              <ArrowRight
                className="h-4 w-4"
                style={{ color: YELLOW }}
                strokeWidth={2}
              />
            </button>
          ))}
        </div>

        <div className="flex w-full max-w-3xl flex-col md:flex-row items-center gap-8 bg-white p-6">
          <PhotoPlaceholder
            label="Hostel building"
            className="h-[340px] w-full md:w-[45%] shrink-0"
          />
          <div className="flex flex-col gap-6">
            <h3
              className="font-display text-3xl font-bold"
              style={{ color: GREEN }}
            >
              Hostel Facilities
            </h3>
            <div>
              <p className="font-display text-lg font-medium text-[#4A4A4A]">
                Ladies hostel:
              </p>
              <p className="font-body text-lg text-[#4A4A4A]">
                Hostel accommodations for female students are available with
                limited number of seats.
              </p>
            </div>
            <a
              href="#"
              className="w-fit border-b border-[#0094D3] font-body text-sm font-semibold text-[#0094D3]"
            >
              View Details →
            </a>
            <button
              className="flex w-fit items-center gap-2 px-8 py-4 font-body font-medium text-white"
              style={{ backgroundColor: GREEN }}
            >
              View Our Program{" "}
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
