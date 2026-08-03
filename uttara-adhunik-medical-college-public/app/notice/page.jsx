"use client";

import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/* Hero / page banner                                                  */
/* ------------------------------------------------------------------ */
function HeroBanner() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#DCEEE1] to-[#EAF5EC] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 py-14 relative">
        <div className="relative bg-[#018837]/10 backdrop-blur-sm px-10 py-10 flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="text-[16px] font-medium text-black flex items-center gap-1">
              HOME <span className="text-black/50">›</span> Notice &amp; Media
            </p>
            <h1 className="font-serif font-light text-[44px] md:text-[64px] leading-none text-[#262626] mt-2">
              Notice <span className="font-bold text-[#018837]">UAMC</span>
            </h1>
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#018837] text-white flex items-center justify-center font-bold text-2xl shrink-0">
            UAMC
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* News section                                                        */
/* ------------------------------------------------------------------ */
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

function NewsSection() {
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

/* ------------------------------------------------------------------ */
/* Reusable tabbed list block (used for Notice Board & Publication)    */
/* ------------------------------------------------------------------ */
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

function noticeRow() {
  return {
    day: "12",
    month: "Mar 25",
    title:
      '"BCPS e-Logbook: Modernizing the Monitoring of FCPS 1st Phase Training"',
    time: "3.40 PM",
  };
}

function NoticeBoard() {
  const generalNotice = Array.from({ length: 6 }, noticeRow);
  const other = Array.from({ length: 4 }, noticeRow);
  return (
    <TabbedList
      heading="Notice Board"
      tabs={["General Notice", "Admission Notice", "Reports", "Job Circular"]}
      rowsPerTab={[generalNotice, other, other, other]}
      maxHeight="820px"
    />
  );
}

function Publication() {
  const journal = Array.from({ length: 7 }, noticeRow);
  const tenders = Array.from({ length: 4 }, noticeRow);
  return (
    <TabbedList
      heading="Publication"
      tabs={["Journal", "Tenders"]}
      rowsPerTab={[journal, tenders]}
      maxHeight="960px"
    />
  );
}

/* ------------------------------------------------------------------ */
/* Alumni event                                                        */
/* ------------------------------------------------------------------ */
function AlumniRow({ number, title, date, time, place }) {
  return (
    <div className="flex items-center gap-6 bg-[#F6F6F6] px-5 py-6">
      <span className="font-serif text-[64px] leading-none text-transparent [-webkit-text-stroke:1px_#018837] w-[90px] shrink-0">
        {number}
      </span>
      <div className="flex flex-col gap-2 min-w-0">
        <h4 className="text-[17px] text-[#018837] truncate">{title}</h4>
        <div className="flex items-center gap-5 text-[13px] text-[#444444] flex-wrap">
          <span>📅 {date}</span>
          <span>🕓 {time}</span>
          <span>📍 {place}</span>
        </div>
      </div>
    </div>
  );
}

function AlumniEvent() {
  const rows = [
    {
      number: "01",
      title: "Bridging Cultures: Global Perspectives in",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
    {
      number: "02",
      title: "Literary Voices: Celebrating Diverse Narratives",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
    {
      number: "03",
      title: "Cultural Exchange: Building Global Connections",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
  ];

  return (
    <section className="w-full bg-[#E6F3EB] py-20 px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10">
        <h2 className="font-serif font-bold text-[36px] text-[#018837]">
          Alumni Event
        </h2>
        <div className="w-full flex flex-col lg:flex-row items-stretch gap-10">
          <div className="flex-1 flex flex-col gap-4 justify-between">
            {rows.map((r) => (
              <AlumniRow key={r.number} {...r} />
            ))}
          </div>
          <div
            className="flex-1 min-h-[300px] lg:min-h-0"
            style={{ background: "linear-gradient(135deg,#9AB8CF,#4C6E8C)" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Event gallery                                                       */
/* ------------------------------------------------------------------ */
function GalleryCard({ caption, hue }) {
  return (
    <div className="flex flex-col">
      <div
        className="w-full aspect-[8/5]"
        style={{ background: `linear-gradient(135deg, ${hue}, #1F1F25)` }}
      />
      <div className="bg-[#018837] text-white text-[14px] font-serif font-bold px-4 py-4 truncate">
        {caption}
      </div>
    </div>
  );
}

function EventGallery() {
  const captions = [
    "বঙ্গবন্ধুর স্বদেশ প্রত্যাবর্তন...",
    "স্বাধীনতা দিবস ও সুবর্ণজয়ন্তী",
    "স্বাধীনতা দিবস ও সুবর্ণজয়ন্তী",
  ];
  const hues = ["#4A5FA5", "#D97A2A", "#3F7B54"];

  return (
    <section className="w-full bg-white py-20 px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-10">
          <h2 className="font-serif font-bold text-[36px] text-[#018837]">
            Event Gallery of UAMC
          </h2>
          <p className="text-[15px] text-[#444444] mt-1">
            You'll find something to spark your curiosity and enhance
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 12 }).map((_, i) => (
            <GalleryCard
              key={i}
              caption={captions[i % captions.length]}
              hue={hues[i % hues.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function News() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <HeroBanner />
      <NewsSection />
      <NoticeBoard />
      <Publication />
      <AlumniEvent />
      <EventGallery />
    </div>
  );
}
