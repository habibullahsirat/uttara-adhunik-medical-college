"use client";

import React, { useState } from "react";

/* ------------------------------------------------------------------ */
/* Top utility bar                                                     */
/* ------------------------------------------------------------------ */
// function TopBar() {
//   return (
//     <div className="w-full bg-[#FCFBFB] border-b border-dashed border-black/20 hidden md:block">
//       <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-2.5 text-[12px] font-medium text-black/50">
//         <div className="flex items-center gap-5">
//           <span className="flex items-center gap-2">
//             <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
//               <path d="M12 21s-7-6.1-7-11a7 7 0 1114 0c0 4.9-7 11-7 11z" />
//               <circle cx="12" cy="10" r="2.5" />
//             </svg>
//             House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model Town
//           </span>
//           <span className="flex items-center gap-2">
//             <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
//               <rect x="3" y="5" width="18" height="14" rx="2" />
//               <path d="M3 7l9 6 9-6" />
//             </svg>
//             info@uamc.com
//           </span>
//           <span className="flex items-center gap-2">
//             <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
//               <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2z" />
//             </svg>
//             +880 1700-220000
//           </span>
//         </div>
//         <div className="flex items-center gap-4">
//           <span>Student Portal</span>
//           <span>Teachers Portal</span>
//           <span>Alumni</span>
//           <span>Events</span>
//           <span>Contact Us</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ------------------------------------------------------------------ */
// /* Main navigation                                                     */
// /* ------------------------------------------------------------------ */
// function Navbar() {
//   const links = ["HOME", "ABOUT UAMC", "FACILITIES", "ADMISSION", "NOTICE & MEDIA", "CAREER"];
//   return (
//     <header className="w-full bg-white sticky top-0 z-30 shadow-sm">
//       <TopBar />
//       <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-4">
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 rounded-full bg-[#018837] text-white flex items-center justify-center font-bold text-lg shrink-0">
//             U
//           </div>
//           <span className="font-serif font-bold text-[19px] leading-tight text-black">
//             Uttara Adhunik
//             <br />
//             Medical College (UAMC)
//           </span>
//         </div>

//         <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase">
//           {links.map((l) => (
//             <span
//               key={l}
//               className={
//                 l === "NOTICE & MEDIA"
//                   ? "text-[#018837] border-b-2 border-[#018837] pb-4 -mb-4 cursor-pointer"
//                   : "text-black/80 hover:text-[#018837] cursor-pointer transition-colors"
//               }
//             >
//               {l}
//             </span>
//           ))}
//         </nav>

//         <div className="flex items-center gap-4 text-black/70">
//           <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <circle cx="11" cy="11" r="7" />
//             <path d="M21 21l-4.3-4.3" />
//           </svg>
//           <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path d="M4 6h16M4 12h10M4 18h16" />
//           </svg>
//         </div>
//       </div>
//     </header>
//   );
// }

/* ------------------------------------------------------------------ */
/* Hero / page banner                                                  */
/* ------------------------------------------------------------------ */
// function HeroBanner() {
//   return (
//     <section className="relative w-full bg-gradient-to-br from-[#DCEEE1] to-[#EAF5EC] overflow-hidden">
//       <div className="max-w-[1440px] mx-auto px-8 py-14 relative">
//         <div className="relative bg-[#018837]/10 backdrop-blur-sm px-10 py-10 flex items-end justify-between flex-wrap gap-6">
//           <div>
//             <p className="text-[16px] font-medium text-black flex items-center gap-1">
//               HOME <span className="text-black/50">›</span> Notice &amp; Media
//             </p>
//             <h1 className="font-serif font-light text-[44px] md:text-[64px] leading-none text-[#262626] mt-2">
//               Notice <span className="font-bold text-[#018837]">UAMC</span>
//             </h1>
//           </div>
//           <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#018837] text-white flex items-center justify-center font-bold text-2xl shrink-0">
//             UAMC
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#DCEEE1] to-[#EAF5EC]">
      <div className="relative mx-auto max-w-[1440px] px-8 py-14">
        <div className="relative flex flex-wrap items-end justify-between gap-6 bg-[#018837]/10 px-10 py-10 backdrop-blur-sm">
          {/* Left Content */}
          <div>
            <p className="flex items-center gap-1 text-[16px] font-medium text-black">
              HOME <span className="text-black/50">›</span>{" "}
              <span className="text-[#018837]">Notice &amp; Media</span>
            </p>

            <h1 className="mt-2 font-serif text-[44px] font-light leading-none text-[#262626] md:text-[64px]">
              Notice <span className="font-bold text-[#018837]">UAMC</span>
            </h1>
          </div>

          {/* Right Side Image */}
          <img
            src="/logo2.png"
            alt="UAMC"
            className="
              h-24
              w-24
              shrink-0
              rounded-full
              object-cover
              md:h-32
              md:w-32
            "
          />
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

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */
function FooterColumn({ title, items }) {
  return (
    <div className="flex flex-col gap-1">
      <h5 className="text-white text-[18px] font-medium underline underline-offset-4 mb-3">
        {title}
      </h5>
      {items.map((it) => (
        <span
          key={it}
          className="text-[#737477] text-[15px] py-2 hover:text-white transition-colors cursor-pointer"
        >
          {it}
        </span>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-black text-white px-8 pt-12 pb-8">
      <div className="max-w-[1290px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#242424]">
          <h3 className="text-[26px] font-normal">Subscribe To Newsletter</h3>
          <form className="w-full md:w-auto flex">
            <input
              type="email"
              placeholder="Enter Your mail"
              className="bg-transparent border border-[#018837] px-5 py-4 text-[14px] text-white placeholder:text-white/70 outline-none w-full md:w-[280px]"
            />
            <button
              type="submit"
              className="bg-white text-[#110C2D] font-medium text-[14px] px-8 py-4 shrink-0 flex items-center gap-1"
            >
              Submit Button ↗
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#018837] flex items-center justify-center font-bold text-sm">
                U
              </div>
              <span className="font-serif font-bold text-[16px] leading-tight">
                Uttara Adhunik
                <br />
                Medical College (UAMC)
              </span>
            </div>
            <p className="text-[#737477] text-[15px] leading-relaxed">
              We are passionate education dedicated to providing high-quality
              resources learners all backgrounds.
            </p>
            <span className="text-[#737477] text-[15px] flex items-center gap-2">
              📞 +880 1700-220000
            </span>
          </div>

          <FooterColumn
            title="Our Campus"
            items={[
              "Academic",
              "Athletics",
              "Tuition Fee",
              "Research",
              "Academic Area",
            ]}
          />
          <FooterColumn
            title="Our Pages"
            items={["About", "Facility", "Alumni", "Faculty Staff", "Event"]}
          />

          <div className="flex flex-col gap-5">
            <h5 className="text-white text-[18px] font-medium underline underline-offset-4">
              Recent Posts
            </h5>
            <div className="flex gap-3 items-center">
              <div
                className="w-[64px] h-[64px] shrink-0"
                style={{
                  background: "linear-gradient(135deg,#8FBF9F,#3F7B54)",
                }}
              />
              <div>
                <span className="text-[#737477] text-[13px] flex items-center gap-1">
                  📅 August 6, 2024
                </span>
                <p className="text-white text-[14px]">
                  Those Inequalities Are Inequalities That
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <div
                className="w-[64px] h-[64px] shrink-0"
                style={{
                  background: "linear-gradient(135deg,#9AB8CF,#4C6E8C)",
                }}
              />
              <div>
                <span className="text-[#737477] text-[13px] flex items-center gap-1">
                  📅 July 4, 2024
                </span>
                <p className="text-white text-[14px]">
                  After Decades Of Improvement, Cardiovascular
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#242424] text-center text-[#737477] text-[14px]">
          Copyright @ 2024. All Rights Reserved by{" "}
          <span className="text-white">Uniplx</span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function News() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Navbar /> */}
      <HeroBanner />
      <NewsSection />
      <NoticeBoard />
      <Publication />
      <AlumniEvent />
      <EventGallery />
      <Footer />
    </div>
  );
}
