import { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";

const GREEN = "#018837";

const noticeSample = Array.from({ length: 6 }).map((_, i) => ({
  day: "12",
  month: "Mar 25",
  time: "3.40 PM",
  title:
    '"BCPS e-Logbook: Modernizing the Monitoring of FCPS 1st Phase Training"',
}));

function TabbedList({ eyebrow, title, tabs, items }) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex items-end justify-between px-2">
        <h2
          className="font-display text-3xl md:text-4xl font-bold"
          style={{ color: GREEN }}
        >
          {title}
        </h2>
        <a
          href="#"
          className="flex items-center gap-1 font-body text-sm font-medium"
          style={{ color: GREEN }}
        >
          View All <ArrowRight className="h-4 w-4 -rotate-45" strokeWidth={2} />
        </a>
      </div>

      <div className="flex flex-col">
        {/* tab bar */}
        <div className="flex items-center gap-1 bg-[#E8E8F4] p-2">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              className={`flex-1 py-4 font-display text-sm font-bold uppercase tracking-wide ${
                i === active ? "bg-white shadow-sm" : "text-black font-normal"
              }`}
              style={
                i === active
                  ? { color: GREEN, borderBottom: `2px solid ${GREEN}` }
                  : {}
              }
            >
              {tab}
            </button>
          ))}
        </div>

        {/* list */}
        <div className="flex max-h-[610px] flex-col gap-2.5 overflow-y-auto bg-white p-2.5">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-[#E8E8F4] p-5">
              <div className="flex w-[90px] shrink-0 flex-col text-center">
                <div className="bg-[#E8E8F4] py-1.5 font-body text-2xl font-bold text-[#444444]">
                  {item.day}
                </div>
                <div
                  className="py-1.5 font-body text-base font-semibold text-white"
                  style={{ backgroundColor: GREEN }}
                >
                  {item.month}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <p className="font-body text-base font-medium text-[#444444]">
                  {item.title}
                </p>
                <span className="flex items-center gap-2 font-body text-sm font-semibold text-[#444444]">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NoticeAndPublication() {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-center gap-10 px-6 md:px-20 py-16">
      <TabbedList
        title="Notice Board"
        tabs={["General Notice", "Admission Notice", "Reports", "Job Circular"]}
        items={noticeSample}
      />
      <TabbedList
        title="Publication"
        tabs={["Journal", "Tenders"]}
        items={noticeSample}
      />
    </section>
  );
}
