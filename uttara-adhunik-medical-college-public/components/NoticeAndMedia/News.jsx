// import React, { useState } from "react";

// function TabbedList({ heading, tabs, rowsPerTab, maxHeight = "820px" }) {
//   const [active, setActive] = useState(0);
//   const rows = rowsPerTab[active] || [];

//   return (
//     <section className="w-full bg-white py-20 px-8">
//       <div className="max-w-[1450px] mx-auto flex flex-col items-center gap-12">
//         <h2 className="font-serif font-bold text-[40px] text-[#018837]">
//           {heading}
//         </h2>

//         <div className="w-full">
//           {/* Tabs */}
//           <div className="flex bg-[#E8E8F4] p-2 gap-2 flex-wrap">
//             {tabs.map((t, i) => (
//               <button
//                 key={t}
//                 onClick={() => setActive(i)}
//                 className={
//                   "flex-1 min-w-[150px] text-center py-4 font-serif text-[15px] tracking-wide uppercase transition-colors " +
//                   (i === active
//                     ? "bg-white text-[#018837] border-b-2 border-[#018837] shadow"
//                     : "text-black hover:text-[#018837]")
//                 }
//               >
//                 {t}
//               </button>
//             ))}
//           </div>

//           {/* Rows */}
//           <div className="bg-white p-3 overflow-y-auto" style={{ maxHeight }}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
//               {rows.map((row, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-4 bg-[#E8E8F4] p-5"
//                 >
//                   <div className="flex flex-col shrink-0 w-[90px] text-center">
//                     <div className="bg-[#E8E8F4] text-[#444444] font-bold text-[22px] py-2">
//                       {row.day}
//                     </div>
//                     <div className="bg-[#018837] text-white font-semibold text-[15px] py-2">
//                       {row.month}
//                     </div>
//                   </div>
//                   <div className="flex flex-col justify-between gap-3 min-w-0">
//                     <p className="text-[16px] text-[#444444] leading-snug">
//                       {row.title}
//                     </p>
//                     <span className="flex items-center gap-2 text-[13px] text-[#444444] font-semibold">
//                       🕒 {row.time}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function NewsCard({ tag, tagColor, title, desc, author, date }) {
//   return (
//     <div className="border border-dashed border-[#018837] flex items-center gap-6 p-5 hover:shadow-md transition-shadow">
//       <div
//         className="w-[160px] h-[160px] shrink-0 bg-cover bg-center"
//         style={{
//           background: "linear-gradient(135deg,#8FBF9F,#3F7B54)",
//         }}
//       />
//       <div className="flex flex-col gap-3 min-w-0">
//         <span
//           className="inline-block w-fit px-3 py-1 text-[11px] font-medium rounded-sm"
//           style={{ background: tagColor }}
//         >
//           {tag}
//         </span>
//         <h3 className="text-[16px] text-[#110C2D] font-medium truncate">
//           {title}
//         </h3>
//         <p className="text-[13px] text-[#737477] leading-relaxed line-clamp-2">
//           {desc}
//         </p>
//         <div className="flex items-center gap-4 text-[12px] text-[#737477]">
//           <span className="flex items-center gap-1">👤 {author}</span>
//           <span className="flex items-center gap-1">📅 {date}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function News() {
//   const items = [
//     {
//       tag: "Education",
//       tagColor: "#FECD2F",
//       title: "Those inequalities are inequalities",
//       desc: "10 Effective Study Tips for College Success Welcome...",
//       author: "admin",
//       date: "August 6, 2024",
//     },
//     {
//       tag: "University",
//       tagColor: "#FECD2F",
//       title: "After Decades Of Improvement,",
//       desc: "10 Effective Study Tips for College Success Welcome...",
//       author: "admin",
//       date: "July 4, 2024",
//     },
//     {
//       tag: "Education",
//       tagColor: "#FECD2F",
//       title: "Those inequalities are inequalities",
//       desc: "10 Effective Study Tips for College Success Welcome...",
//       author: "admin",
//       date: "August 6, 2024",
//     },
//     {
//       tag: "University",
//       tagColor: "#FECD2F",
//       title: "After Decades Of Improvement,",
//       desc: "10 Effective Study Tips for College Success Welcome...",
//       author: "admin",
//       date: "July 4, 2024",
//     },
//     {
//       tag: "Education",
//       tagColor: "#FECD2F",
//       title: "Those inequalities are inequalities",
//       desc: "10 Effective Study Tips for College Success Welcome...",
//       author: "admin",
//       date: "August 6, 2024",
//     },
//     {
//       tag: "University",
//       tagColor: "#FECD2F",
//       title: "After Decades Of Improvement,",
//       desc: "10 Effective Study Tips for College Success Welcome...",
//       author: "admin",
//       date: "July 4, 2024",
//     },
//   ];

//   return (
//     <section className="w-full bg-white py-20 px-8">
//       <div className="max-w-[1440px] mx-auto">
//         <div className="mb-10">
//           <h2 className="font-serif font-bold text-[36px] text-[#018837]">
//             Read Our Latest News
//           </h2>
//           <p className="text-[15px] text-[#444444] mt-1">
//             You'll find something to spark your curiosity and enhance
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
//           {items.map((it, i) => (
//             <NewsCard key={i} {...it} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/homepage/news`;

const getTagColor = (type) => {
  switch (type?.toLowerCase()) {
    case "education":
      return "#FECD2F";
    case "university":
      return "#A7D8B8";
    default:
      return "#FECD2F";
  }
};

const formatDate = (dateString) => {
  if (!dateString) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
};

function NewsCard({ news }) {
  return (
    <article className="group w-full border border-dashed border-[#018837] p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        {/* Image */}
        <div className="relative h-[220px] w-full shrink-0 overflow-hidden sm:h-[150px] sm:w-[150px] md:h-[160px] md:w-[160px]">
          {news.image ? (
            <Image
              src={news.image}
              alt={news.title || "News image"}
              fill
              sizes="(max-width: 640px) 100vw, 160px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#8FBF9F] to-[#3F7B54]" />
          )}
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          {/* Tag */}
          <span
            className="w-fit rounded-sm px-3 py-1 text-[11px] font-medium"
            style={{
              backgroundColor: getTagColor(news.type),
            }}
          >
            {news.type || "News"}
          </span>

          {/* Title */}
          <h3 className="line-clamp-2 text-[16px] font-medium leading-snug text-[#110C2D]">
            {news.title}
          </h3>

          {/* Description */}
          <p className="line-clamp-2 text-[13px] leading-relaxed text-[#737477]">
            {news.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] text-[#737477]">
            <span className="flex items-center gap-1">
              <span aria-hidden="true">👤</span>
              admin
            </span>

            <span className="flex items-center gap-1">
              <span aria-hidden="true">📅</span>
              {formatDate(news.createdAt)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function NewsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse border border-dashed border-[#018837] p-4 sm:p-5"
        >
          <div className="flex flex-col gap-5 sm:flex-row">
            <div className="h-[220px] w-full shrink-0 bg-gray-200 sm:h-[150px] sm:w-[150px] md:h-[160px] md:w-[160px]" />

            <div className="flex flex-1 flex-col gap-3">
              <div className="h-6 w-20 bg-gray-200" />
              <div className="h-5 w-full bg-gray-200" />
              <div className="h-5 w-4/5 bg-gray-200" />
              <div className="h-10 w-full bg-gray-200" />
              <div className="h-4 w-2/3 bg-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await response.json();

        setNews(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("News API error:", err);
        setError("Unable to load news right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#018837] sm:text-[36px]">
            Read Our Latest News
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#444444] sm:text-[15px]">
            You&apos;ll find something to spark your curiosity and enhance your
            knowledge.
          </p>
        </div>

        {/* Loading */}
        {loading && <NewsSkeleton />}

        {/* Error */}
        {!loading && error && (
          <div className="flex min-h-[200px] items-center justify-center border border-dashed border-red-300 px-5 text-center text-sm text-red-500">
            {error}
          </div>
        )}

        {/* Empty */}
        {!loading && !error && news.length === 0 && (
          <div className="flex min-h-[200px] items-center justify-center border border-dashed border-[#018837] px-5 text-center text-sm text-[#737477]">
            No news available.
          </div>
        )}

        {/* News */}
        {!loading && !error && news.length > 0 && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
            {news.map((item) => (
              <NewsCard key={item._id} news={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
