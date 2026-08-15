// "use client";
// const GREEN = "#018837";
// const YELLOW = "#FECD2F";
// import React, { useState } from "react";
// import {
//   MapPin,
//   Mail,
//   Phone,
//   Search,
//   ChevronDown,
//   AlignJustify,
//   Clock,
//   ArrowRight,
//   Star,
//   Menu,
//   // Facebook,
//   // Youtube,
//   // Linkedin,
//   // Instagram,
//   X,
// } from "lucide-react";

// export default function NewsSection() {
//   const posts = [
//     {
//       tag: "Education",
//       date: "August 6, 2024",
//       title: "10 Effective Study Tips for College Success",
//       image: "/news1.png",
//     },
//     {
//       tag: "University",
//       date: "July 4, 2024",
//       title: "After Decades Of Improvement, Cardiovascular Care Advances",
//       image: "/news2.png",
//     },
//   ];

//   return (
//     <section className="w-full px-6 py-16 md:px-20 md:py-20">
//       {/* ================================
//           SECTION HEADING
//       ================================= */}
//       <div className="mb-12 flex flex-col items-center text-center">
//         <div className="mb-4 flex items-center">
//           {/* Green decorative mark */}
//           <span
//             className="mr-3 block h-[23px] w-[32.5px]"
//             style={{ backgroundColor: GREEN }}
//           />

//           <span
//             className="font-body text-[19.5px] font-medium leading-[23px]"
//             style={{ color: GREEN }}
//           >
//             knowledge meets innovation
//           </span>
//         </div>

//         <h2
//           className="font-display text-3xl font-bold md:text-5xl"
//           style={{ color: GREEN }}
//         >
//           Read Our Latest News
//         </h2>

//         <p className="mt-4 max-w-[700px] font-body text-[16px] leading-[28px] text-[#737477]">
//           You'll find something to spark your curiosity and enhance your
//           knowledge.
//         </p>
//       </div>

//       {/* ================================
//           NEWS CARDS
//       ================================= */}
//       <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-2">
//         {posts.map((post) => (
//           <div
//             key={post.title}
//             className="
//               flex
//               flex-col
//               overflow-hidden
//               border
//               border-dashed
//               bg-white
//               sm:flex-row
//             "
//             style={{ borderColor: GREEN }}
//           >
//             {/* ==========================
//                 NEWS IMAGE
//             =========================== */}
//             <div className="h-[240px] w-full shrink-0 overflow-hidden sm:h-[220px] sm:w-[240px]">
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="
//                   h-full
//                   w-full
//                   object-cover
//                 "
//               />
//             </div>

//             {/* ==========================
//                 NEWS CONTENT
//             =========================== */}
//             <div
//               className="
//                 flex
//                 flex-1
//                 flex-col
//                 justify-center
//                 gap-4
//                 p-6
//               "
//             >
//               {/* Tag */}
//               <span
//                 className="
//                   w-fit
//                   px-3
//                   py-1
//                   font-body
//                   text-xs
//                   font-medium
//                   text-[#110C2D]
//                 "
//                 style={{ backgroundColor: YELLOW }}
//               >
//                 {post.tag}
//               </span>

//               {/* Title */}
//               <h3
//                 className="
//                   m-0
//                   font-display
//                   text-[20px]
//                   font-semibold
//                   leading-[28px]
//                   text-[#110C2D]
//                 "
//               >
//                 {post.title}
//               </h3>

//               {/* Date */}
//               <div className="flex items-center gap-3">
//                 <span className="font-body text-sm text-[#737477]">
//                   {post.date}
//                 </span>
//               </div>

//               {/* Read More */}
//               <button
//                 type="button"
//                 className="
//                   flex
//                   w-fit
//                   items-center
//                   gap-2
//                   font-body
//                   text-[15px]
//                   font-medium
//                   transition-opacity
//                   hover:opacity-75
//                 "
//                 style={{ color: GREEN }}
//               >
//                 Read More
//                 <ArrowRight className="h-4 w-4" strokeWidth={2} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// Dynamic version
import Image from "next/image";
import Link from "next/link";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

const API_URL = process.env.NEXT_PUBLIC_ADMIN_API;

async function getNews() {
  try {
    const response = await fetch(`${API_URL}/api/homepage/news`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("News API error:", error);
    return [];
  }
}

function formatDate(dateString) {
  if (!dateString) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

export default async function NewsSection() {
  const posts = await getNews();

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-[100px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 lg:gap-[50px]">
        {/* ================================
            SECTION HEADER
        ================================= */}
        <div className="flex flex-col items-start gap-5 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-1">
            <h2
              className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[43px] lg:leading-[48px]"
              style={{ color: GREEN }}
            >
              Read Our Latest News
            </h2>

            <p className="font-body text-sm leading-7 text-[#444444] sm:text-base">
              You’ll find something to spark your curiosity and enhance your
              knowledge.
            </p>
          </div>

          <Link
            href="/news"
            className="group flex w-fit items-center gap-2 font-body text-sm font-medium text-[#018837] transition-opacity hover:opacity-75 sm:text-base"
          >
            <span>View All</span>

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* ================================
            NEWS CARDS
        ================================= */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 xl:gap-[60px]">
            {posts.map((post) => (
              <article
                key={post._id}
                className="flex min-w-0 flex-col overflow-hidden border border-dashed border-[#018837] bg-white sm:flex-row"
              >
                {/* IMAGE */}
                <div className="relative aspect-square w-full shrink-0 sm:aspect-auto sm:h-[280px] sm:w-[245px] lg:h-[284px] lg:w-[247px]">
                  <Image
                    src={post.image}
                    alt={post.title || "News image"}
                    fill
                    sizes="
                      (max-width: 639px) 100vw,
                      (max-width: 1023px) 245px,
                      247px
                    "
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-5 p-5 sm:p-6 lg:px-7 lg:py-10">
                  {/* TAG */}
                  <span
                    className="w-fit rounded-[2px] px-[13px] py-[5px] font-body text-[12px] font-normal leading-3 text-black"
                    style={{ backgroundColor: YELLOW }}
                  >
                    {post.type}
                  </span>

                  {/* TITLE + DESCRIPTION */}
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-body text-lg font-normal leading-[30px] text-[#110C2D]">
                      {post.title}
                    </h3>

                    {post.description && (
                      <p className="line-clamp-2 font-body text-sm font-normal leading-[25px] text-[#737477]">
                        {post.description}
                      </p>
                    )}
                  </div>

                  {/* META */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
                          stroke={GREEN}
                          strokeWidth="2"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="2.5"
                          stroke={GREEN}
                          strokeWidth="2"
                        />
                      </svg>

                      <span className="font-body text-sm leading-[25px] text-[#737477]">
                        {post.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="17"
                          rx="2"
                          stroke={GREEN}
                          strokeWidth="2"
                        />
                        <path
                          d="M16 2v4M8 2v4M3 10h18"
                          stroke={GREEN}
                          strokeWidth="2"
                        />
                      </svg>

                      <time
                        dateTime={post.createdAt}
                        className="font-body text-sm leading-[25px] text-[#737477]"
                      >
                        {formatDate(post.createdAt)}
                      </time>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[200px] items-center justify-center border border-dashed border-[#018837]">
            <p className="font-body text-base text-[#737477]">
              No news available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
