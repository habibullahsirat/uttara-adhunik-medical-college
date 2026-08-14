import React, { useState } from "react";

function TabbedList({ heading, tabs, rowsPerTab, maxHeight = "820px" }) {
  const [active, setActive] = useState(0);
  const rows = rowsPerTab[active] || [];

  return (
    <section className="w-full bg-white py-20 px-8">
      <div className="max-w-[1450px] mx-auto flex flex-col items-center gap-12">
        <h2 className="font-serif font-bold text-[40px] text-[#018837]">
          {heading}
        </h2>

        <div className="w-full">
          {/* Tabs */}
          <div className="flex bg-[#E8E8F4] p-2 gap-2 flex-wrap">
            {tabs.map((t, i) => (
              <button
                key={t}
                onClick={() => setActive(i)}
                className={
                  "flex-1 min-w-[150px] text-center py-4 font-serif text-[15px] tracking-wide uppercase transition-colors " +
                  (i === active
                    ? "bg-white text-[#018837] border-b-2 border-[#018837] shadow"
                    : "text-black hover:text-[#018837]")
                }
              >
                {t}
              </button>
            ))}
          </div>

          {/* Rows */}
          <div className="bg-white p-3 overflow-y-auto" style={{ maxHeight }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#E8E8F4] p-5"
                >
                  <div className="flex flex-col shrink-0 w-[90px] text-center">
                    <div className="bg-[#E8E8F4] text-[#444444] font-bold text-[22px] py-2">
                      {row.day}
                    </div>
                    <div className="bg-[#018837] text-white font-semibold text-[15px] py-2">
                      {row.month}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-3 min-w-0">
                    <p className="text-[16px] text-[#444444] leading-snug">
                      {row.title}
                    </p>
                    <span className="flex items-center gap-2 text-[13px] text-[#444444] font-semibold">
                      🕒 {row.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsCard({ tag, tagColor, title, desc, author, date }) {
  return (
    <div className="border border-dashed border-[#018837] flex items-center gap-6 p-5 hover:shadow-md transition-shadow">
      <div
        className="w-[160px] h-[160px] shrink-0 bg-cover bg-center"
        style={{
          background: "linear-gradient(135deg,#8FBF9F,#3F7B54)",
        }}
      />
      <div className="flex flex-col gap-3 min-w-0">
        <span
          className="inline-block w-fit px-3 py-1 text-[11px] font-medium rounded-sm"
          style={{ background: tagColor }}
        >
          {tag}
        </span>
        <h3 className="text-[16px] text-[#110C2D] font-medium truncate">
          {title}
        </h3>
        <p className="text-[13px] text-[#737477] leading-relaxed line-clamp-2">
          {desc}
        </p>
        <div className="flex items-center gap-4 text-[12px] text-[#737477]">
          <span className="flex items-center gap-1">👤 {author}</span>
          <span className="flex items-center gap-1">📅 {date}</span>
        </div>
      </div>
    </div>
  );
}

export default function News() {
  const items = [
    {
      tag: "Education",
      tagColor: "#FECD2F",
      title: "Those inequalities are inequalities",
      desc: "10 Effective Study Tips for College Success Welcome...",
      author: "admin",
      date: "August 6, 2024",
    },
    {
      tag: "University",
      tagColor: "#FECD2F",
      title: "After Decades Of Improvement,",
      desc: "10 Effective Study Tips for College Success Welcome...",
      author: "admin",
      date: "July 4, 2024",
    },
    {
      tag: "Education",
      tagColor: "#FECD2F",
      title: "Those inequalities are inequalities",
      desc: "10 Effective Study Tips for College Success Welcome...",
      author: "admin",
      date: "August 6, 2024",
    },
    {
      tag: "University",
      tagColor: "#FECD2F",
      title: "After Decades Of Improvement,",
      desc: "10 Effective Study Tips for College Success Welcome...",
      author: "admin",
      date: "July 4, 2024",
    },
    {
      tag: "Education",
      tagColor: "#FECD2F",
      title: "Those inequalities are inequalities",
      desc: "10 Effective Study Tips for College Success Welcome...",
      author: "admin",
      date: "August 6, 2024",
    },
    {
      tag: "University",
      tagColor: "#FECD2F",
      title: "After Decades Of Improvement,",
      desc: "10 Effective Study Tips for College Success Welcome...",
      author: "admin",
      date: "July 4, 2024",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-10">
          <h2 className="font-serif font-bold text-[36px] text-[#018837]">
            Read Our Latest News
          </h2>
          <p className="text-[15px] text-[#444444] mt-1">
            You'll find something to spark your curiosity and enhance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {items.map((it, i) => (
            <NewsCard key={i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
