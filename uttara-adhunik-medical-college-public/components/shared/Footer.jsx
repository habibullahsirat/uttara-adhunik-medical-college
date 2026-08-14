// "use client";

// import { ArrowRight } from "lucide-react";

// export default function Footer() {
//   const campusLinks = [
//     "Our Campus",
//     "Careers",
//     "News",
//     "Support",
//     "Accessible mode",
//   ];

//   const pageLinks = ["Home", "About", "Facilities", "Admission", "Contact"];

//   const posts = [
//     {
//       title: "Those inequalities that Matter",
//       date: "August 6, 2024",
//       image: "/post1.png",
//     },
//     {
//       title: "After Decades Of Improvement, Cardiovascular",
//       date: "July 4, 2024",
//       image: "/post2.png",
//     },
//   ];

//   return (
//     <footer className="w-full bg-black text-white">
//       {/* ================= NEWSLETTER ================= */}
//       <div className="border-b border-[#242424]">
//         <div
//           className="
//             mx-auto flex w-full max-w-[1130px]
//             flex-col gap-8
//             px-5 py-[50px]
//             md:flex-row md:items-center md:justify-between
//             md:gap-10
//           "
//         >
//           <h4
//             className="
//               font-body text-[30.94px]
//               font-normal leading-[36px]
//               text-white
//             "
//           >
//             Subscribe To Newsletter
//           </h4>

//           <form
//             className="
//               flex w-full max-w-[494px]
//               flex-col gap-[10px]
//               sm:flex-row
//             "
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <input
//               type="email"
//               placeholder="Enter Your mail"
//               className="
//                 box-border h-[53px] w-full
//                 border border-[#018837]
//                 bg-transparent
//                 px-[21px] py-[18px]
//                 font-body text-[14px]
//                 leading-[17px]
//                 text-white
//                 outline-none
//                 placeholder:text-white
//               "
//             />

//             <button
//               type="submit"
//               className="
//                 flex h-[53px]
//                 w-full shrink-0
//                 items-center justify-center
//                 gap-[3px]
//                 bg-white
//                 px-[38px]
//                 text-[16px]
//                 font-medium
//                 leading-[18px]
//                 text-[#110C2D]
//                 transition-colors
//                 hover:bg-[#FECD2F]
//                 sm:w-[208px]
//               "
//             >
//               <span>Submit Button</span>

//               <span className="text-[18px] leading-none">→</span>
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* ================= MAIN FOOTER ================= */}
//       <div className="mx-auto w-full max-w-[1290px] px-5">
//         <div
//           className="
//             grid
//             grid-cols-1
//             gap-12
//             py-[65px]
//             sm:grid-cols-2
//             lg:grid-cols-4
//             lg:gap-0
//           "
//         >
//           {/* ================= BRAND ================= */}
//           <div className="pr-8">
//             <div className="mb-[25px] flex items-center gap-[8px]">
//               {/* Replace this with your actual logo */}
//               <div
//                 className="
//                   flex h-[66px] w-[66px]
//                   shrink-0 items-center justify-center
//                   overflow-hidden rounded-full
//                 "
//               >
//                 <img
//                   src="/logo2.png"
//                   alt="Uttara Adhunik Medical College"
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               <h3
//                 className="
//                   max-w-[175px]
//                   font-display
//                   text-[20.7px]
//                   font-bold
//                   leading-[25px]
//                   text-white
//                 "
//               >
//                 Uttara Adhunik Medical College
//               </h3>
//             </div>

//             <p
//               className="
//                 max-w-[333px]
//                 font-body
//                 text-[16px]
//                 font-normal
//                 leading-[29px]
//                 text-[#737477]
//               "
//             >
//               We are passionate education dedicated to providing high-quality
//               resources for learners of all backgrounds.
//             </p>
//           </div>

//           {/* ================= OUR CAMPUS ================= */}
//           <div>
//             <h4
//               className="
//                 mb-[46px]
//                 inline-block
//                 font-body
//                 text-[20px]
//                 font-medium
//                 leading-[26px]
//                 text-white
//                 underline
//                 underline-offset-4
//               "
//             >
//               Our Campus
//             </h4>

//             <ul className="flex flex-col">
//               {campusLinks.map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="
//                       block
//                       py-[8px]
//                       font-body
//                       text-[16px]
//                       font-normal
//                       leading-[25px]
//                       text-[#737477]
//                       transition-colors
//                       hover:text-white
//                     "
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ================= OUR PAGES ================= */}
//           <div>
//             <h4
//               className="
//                 mb-[46px]
//                 inline-block
//                 font-body
//                 text-[20px]
//                 font-medium
//                 leading-[26px]
//                 text-white
//                 underline
//                 underline-offset-4
//               "
//             >
//               Our Pages
//             </h4>

//             <ul className="flex flex-col">
//               {pageLinks.map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="
//                       block
//                       py-[8px]
//                       font-body
//                       text-[16px]
//                       font-normal
//                       leading-[25px]
//                       text-[#737477]
//                       transition-colors
//                       hover:text-white
//                     "
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ================= RECENT POSTS ================= */}
//           <div>
//             <h4
//               className="
//                 mb-[46px]
//                 inline-block
//                 font-body
//                 text-[20px]
//                 font-medium
//                 leading-[26px]
//                 text-white
//                 underline
//                 underline-offset-4
//               "
//             >
//               Recent Posts
//             </h4>

//             <div className="flex flex-col gap-[28px]">
//               {posts.map((post) => (
//                 <a
//                   href="#"
//                   key={post.title}
//                   className="
//                     group
//                     flex
//                     items-start
//                     gap-[20px]
//                   "
//                 >
//                   {/* Figma uses 190x80 post images */}
//                   <div
//                     className="
//                       h-[80px]
//                       w-[80px]
//                       shrink-0
//                       overflow-hidden
//                       bg-[#242424]
//                     "
//                   >
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="
//                         h-full
//                         w-full
//                         object-cover
//                         transition-transform
//                         duration-300
//                         group-hover:scale-105
//                       "
//                     />
//                   </div>

//                   <div className="pt-[1px]">
//                     <div className="mb-[10px] flex items-center gap-[8px]">
//                       <span className="text-[#737477]">›</span>

//                       <p
//                         className="
//                           font-body
//                           text-[14px]
//                           font-normal
//                           leading-[25px]
//                           text-[#737477]
//                         "
//                       >
//                         {post.date}
//                       </p>
//                     </div>

//                     <p
//                       className="
//                         max-w-[236px]
//                         font-body
//                         text-[15.75px]
//                         font-normal
//                         leading-[18px]
//                         capitalize
//                         text-white
//                       "
//                     >
//                       {post.title}
//                     </p>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= COPYRIGHT ================= */}
//       <div className="border-t border-[#242424]">
//         <div
//           className="
//             mx-auto
//             flex
//             min-h-[64px]
//             w-full
//             max-w-[1290px]
//             items-center
//             px-5
//           "
//         >
//           <p
//             className="
//               font-body
//               text-[16px]
//               font-normal
//               leading-[29px]
//               text-[#737477]
//             "
//           >
//             Copyright @ 2024. All Rights Reserved by{" "}
//             <span className="text-white">Umaio</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// Dynamic Version
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// const API_BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API;

// /* =========================================================
//    FETCH SITE SETTINGS
// ========================================================= */
// async function getSiteSettings() {
//   try {
//     const response = await fetch(`${API_BASE_URL}/api/site-setting`, {
//       next: {
//         revalidate: 300,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch site settings");
//     }

//     const data = await response.json();

//     return data?.[0] || null;
//   } catch (error) {
//     console.error("Site settings fetch error:", error);
//     return null;
//   }
// }

// /* =========================================================
//    FETCH LATEST NEWS
// ========================================================= */
// async function getLatestNews() {
//   try {
//     const response = await fetch(`${API_BASE_URL}/api/homepage/news`, {
//       next: {
//         revalidate: 300,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch news");
//     }

//     const data = await response.json();

//     if (!Array.isArray(data)) {
//       return [];
//     }

//     // Sort newest first and take only the latest 2
//     return data
//       .sort(
//         (a, b) =>
//           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
//       )
//       .slice(0, 2);
//   } catch (error) {
//     console.error("News fetch error:", error);
//     return [];
//   }
// }

// /* =========================================================
//    DATE FORMATTER
// ========================================================= */
// function formatDate(date) {
//   if (!date) return "";

//   return new Intl.DateTimeFormat("en-US", {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   }).format(new Date(date));
// }

// /* =========================================================
//    FOOTER
// ========================================================= */
// export default async function Footer() {
//   const [siteSettings, latestNews] = await Promise.all([
//     getSiteSettings(),
//     getLatestNews(),
//   ]);

//   /* =========================================================
//      OUR CAMPUS LINKS
//      Change these hrefs according to your actual routes.
//   ========================================================= */
//   const campusLinks = [
//     {
//       label: "Our Campus",
//       href: "/campus",
//     },
//     {
//       label: "Departments",
//       href: "/departments",
//     },
//     {
//       label: "Faculty & Staff",
//       href: "/faculty-staff",
//     },
//     {
//       label: "Library",
//       href: "/library",
//     },
//     {
//       label: "Student Life",
//       href: "/student-life",
//     },
//   ];

//   /* =========================================================
//      OUR PAGES LINKS
//      Change these hrefs according to your actual routes.
//   ========================================================= */
//   const pageLinks = [
//     {
//       label: "Home",
//       href: "/",
//     },
//     {
//       label: "About Us",
//       href: "/about",
//     },
//     {
//       label: "Facilities",
//       href: "/facilities",
//     },
//     {
//       label: "Admission",
//       href: "/admission",
//     },
//     {
//       label: "Contact Us",
//       href: "/contact",
//     },
//   ];

//   return (
//     <footer className="w-full bg-black text-white">
//       {/* =====================================================
//           NEWSLETTER
//       ===================================================== */}
//       <div className="border-b border-[#242424]">
//         <div
//           className="
//             mx-auto flex w-full max-w-[1130px]
//             flex-col gap-8
//             px-5 py-[50px]
//             sm:px-6
//             md:flex-row md:items-center md:justify-between
//             md:gap-10
//             lg:px-0
//           "
//         >
//           <h4
//             className="
//               font-body text-[30.94px]
//               font-normal leading-[36px]
//               text-white
//             "
//           >
//             Subscribe To Newsletter
//           </h4>

//           <form
//             className="
//               flex w-full max-w-[494px]
//               flex-col gap-[10px]
//               sm:flex-row
//             "
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <input
//               type="email"
//               placeholder="Enter Your mail"
//               className="
//                 box-border h-[53px] w-full
//                 border border-[#018837]
//                 bg-transparent
//                 px-[21px] py-[18px]
//                 font-body text-[14px]
//                 leading-[17px]
//                 text-white
//                 outline-none
//                 placeholder:text-white
//                 focus:border-white
//               "
//             />

//             <button
//               type="submit"
//               className="
//                 flex h-[53px]
//                 w-full shrink-0
//                 items-center justify-center
//                 gap-[3px]
//                 bg-white
//                 px-[38px]
//                 text-[16px]
//                 font-medium
//                 leading-[18px]
//                 text-[#110C2D]
//                 transition-colors
//                 hover:bg-[#FECD2F]
//                 sm:w-[208px]
//               "
//             >
//               <span>Submit Button</span>

//               <ArrowRight size={18} strokeWidth={1.8} />
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* =====================================================
//           MAIN FOOTER
//       ===================================================== */}
//       <div className="mx-auto w-full max-w-[1290px] px-5 sm:px-6 lg:px-8">
//         <div
//           className="
//             grid
//             grid-cols-1
//             gap-x-10
//             gap-y-12
//             py-[65px]

//             sm:grid-cols-2

//             lg:grid-cols-4
//             lg:gap-x-8
//             lg:gap-y-0

//             xl:gap-x-12
//           "
//         >
//           {/* =================================================
//               BRAND
//           ================================================= */}
//           <div className="pr-0 lg:pr-4">
//             <div className="mb-[25px] flex items-center gap-[8px]">
//               {/* API LOGO */}
//               <div
//                 className="
//                   relative
//                   h-[66px]
//                   w-[66px]
//                   shrink-0
//                   overflow-hidden
//                   rounded-full
//                 "
//               >
//                 <Image
//                   src={siteSettings?.image || "/logo2.png"}
//                   alt={
//                     siteSettings?.site_name || "Uttara Adhunik Medical College"
//                   }
//                   fill
//                   sizes="66px"
//                   className="object-contain"
//                 />
//               </div>

//               <h3
//                 className="
//                   max-w-[175px]
//                   font-display
//                   text-[20.7px]
//                   font-bold
//                   leading-[25px]
//                   text-white
//                 "
//               >
//                 {siteSettings?.site_name || "Uttara Adhunik Medical College"}
//               </h3>
//             </div>

//             {/* API TAGLINE */}
//             <p
//               className="
//                 max-w-[333px]
//                 font-body
//                 text-[16px]
//                 font-normal
//                 leading-[29px]
//                 text-[#737477]
//               "
//             >
//               {siteSettings?.tagline ||
//                 "We are passionate education dedicated to providing high-quality resources for learners of all backgrounds."}
//             </p>
//           </div>

//           {/* =================================================
//               OUR CAMPUS
//           ================================================= */}
//           <div>
//             <h4
//               className="
//                 mb-[36px]
//                 inline-block
//                 font-body
//                 text-[20px]
//                 font-medium
//                 leading-[26px]
//                 text-white
//                 underline
//                 underline-offset-4
//                 sm:mb-[46px]
//               "
//             >
//               Our Campus
//             </h4>

//             <ul className="flex flex-col">
//               {campusLinks.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="
//                       block
//                       py-[8px]
//                       font-body
//                       text-[16px]
//                       font-normal
//                       leading-[25px]
//                       text-[#737477]
//                       transition-colors
//                       duration-200
//                       hover:text-white
//                     "
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* =================================================
//               OUR PAGES
//           ================================================= */}
//           <div>
//             <h4
//               className="
//                 mb-[36px]
//                 inline-block
//                 font-body
//                 text-[20px]
//                 font-medium
//                 leading-[26px]
//                 text-white
//                 underline
//                 underline-offset-4
//                 sm:mb-[46px]
//               "
//             >
//               Our Pages
//             </h4>

//             <ul className="flex flex-col">
//               {pageLinks.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="
//                       block
//                       py-[8px]
//                       font-body
//                       text-[16px]
//                       font-normal
//                       leading-[25px]
//                       text-[#737477]
//                       transition-colors
//                       duration-200
//                       hover:text-white
//                     "
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* =================================================
//               RECENT POSTS
//           ================================================= */}
//           <div>
//             <h4
//               className="
//                 mb-[36px]
//                 inline-block
//                 font-body
//                 text-[20px]
//                 font-medium
//                 leading-[26px]
//                 text-white
//                 underline
//                 underline-offset-4
//                 sm:mb-[46px]
//               "
//             >
//               Recent Posts
//             </h4>

//             <div className="flex flex-col gap-[28px]">
//               {latestNews.length > 0 ? (
//                 latestNews.map((post) => (
//                   <Link
//                     href={`/news/${post._id}`}
//                     key={post._id}
//                     className="
//                       group
//                       flex
//                       items-start
//                       gap-[16px]
//                       sm:gap-[20px]
//                     "
//                   >
//                     {/* NEWS IMAGE */}
//                     <div
//                       className="
//                         relative
//                         h-[80px]
//                         w-[80px]
//                         shrink-0
//                         overflow-hidden
//                         bg-[#242424]
//                       "
//                     >
//                       <Image
//                         src={post.image}
//                         alt={post.title || "News post"}
//                         fill
//                         sizes="80px"
//                         className="
//                           object-cover
//                           transition-transform
//                           duration-300
//                           group-hover:scale-105
//                         "
//                       />
//                     </div>

//                     {/* NEWS CONTENT */}
//                     <div className="min-w-0 pt-[1px]">
//                       <div className="mb-[8px] flex items-center gap-[8px]">
//                         <span className="text-[#737477]">›</span>

//                         <p
//                           className="
//                             font-body
//                             text-[14px]
//                             font-normal
//                             leading-[25px]
//                             text-[#737477]
//                           "
//                         >
//                           {formatDate(post.createdAt)}
//                         </p>
//                       </div>

//                       <p
//                         className="
//                           line-clamp-2
//                           max-w-[236px]
//                           font-body
//                           text-[15.75px]
//                           font-normal
//                           leading-[18px]
//                           capitalize
//                           text-white
//                           transition-colors
//                           duration-200
//                           group-hover:text-[#FECD2F]
//                         "
//                       >
//                         {post.title}
//                       </p>
//                     </div>
//                   </Link>
//                 ))
//               ) : (
//                 <p
//                   className="
//                     font-body
//                     text-[15px]
//                     leading-[25px]
//                     text-[#737477]
//                   "
//                 >
//                   No recent posts available.
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           COPYRIGHT
//       ===================================================== */}
//       <div className="border-t border-[#242424]">
//         <div
//           className="
//             mx-auto
//             flex
//             min-h-[64px]
//             w-full
//             max-w-[1290px]
//             items-center
//             px-5
//             py-4
//             sm:px-6
//             lg:px-8
//           "
//         >
//           <p
//             className="
//               font-body
//               text-[14px]
//               font-normal
//               leading-[24px]
//               text-[#737477]
//               sm:text-[16px]
//               sm:leading-[29px]
//             "
//           >
//             Copyright @ 2024. All Rights Reserved by{" "}
//             <span className="text-white">
//               {siteSettings?.site_name || "Uttara Adhunik Medical College"}
//             </span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// Dynamic Version 2
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API;

/* =========================================================
   DATE FORMATTER
========================================================= */
function formatDate(date) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

/* =========================================================
   FOOTER
========================================================= */
export default function Footer() {
  const [siteSettings, setSiteSettings] = useState(null);
  const [latestNews, setLatestNews] = useState([]);

  /* =========================================================
     FETCH FOOTER DATA
  ========================================================= */
  useEffect(() => {
    let isMounted = true;

    async function fetchFooterData() {
      try {
        const [siteSettingsResponse, newsResponse] = await Promise.all([
          fetch(`${API_BASE_URL}/api/site-setting`),
          fetch(`${API_BASE_URL}/api/homepage/news`),
        ]);

        if (!siteSettingsResponse.ok) {
          throw new Error("Failed to fetch site settings");
        }

        if (!newsResponse.ok) {
          throw new Error("Failed to fetch news");
        }

        const [siteSettingsData, newsData] = await Promise.all([
          siteSettingsResponse.json(),
          newsResponse.json(),
        ]);

        if (!isMounted) return;

        /* ================= SITE SETTINGS ================= */
        setSiteSettings(siteSettingsData?.[0] || null);

        /* ================= LATEST NEWS ================= */
        if (Array.isArray(newsData)) {
          const latestTwoNews = [...newsData]
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime(),
            )
            .slice(0, 2);

          setLatestNews(latestTwoNews);
        } else {
          setLatestNews([]);
        }
      } catch (error) {
        console.error("Footer data fetch error:", error);

        if (!isMounted) return;

        setSiteSettings(null);
        setLatestNews([]);
      }
    }

    fetchFooterData();

    return () => {
      isMounted = false;
    };
  }, []);

  /* =========================================================
     OUR CAMPUS LINKS
  ========================================================= */
  const campusLinks = [
    {
      label: "Our Campus",
      href: "/about/historyofuamc",
    },
    {
      label: "Departments",
      href: "/facility/department",
    },
    {
      label: "Founder Members",
      href: "/about/founder",
    },
    {
      label: "Library",
      href: "/facility/libraryuamc",
    },
    {
      label: "Student Life",
      href: "/facility/lab",
    },
  ];

  /* =========================================================
     OUR PAGES LINKS
  ========================================================= */
  const pageLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about/overview",
    },
    {
      label: "Facilities",
      href: "/facility/hospitalservice/",
    },
    {
      label: "Admission",
      href: "/admission/procedure",
    },
    {
      label: "Contact Us",
      href: "/career",
    },
  ];

  return (
    <footer className="w-full bg-black text-white">
      {/* =====================================================
          NEWSLETTER
      ===================================================== */}
      <div className="border-b border-[#242424]">
        <div
          className="
            mx-auto flex w-full max-w-[1130px]
            flex-col gap-8
            px-5 py-[50px]
            sm:px-6
            md:flex-row md:items-center md:justify-between
            md:gap-10
            lg:px-0
          "
        >
          <h4
            className="
              font-body text-[30.94px]
              font-normal leading-[36px]
              text-white
            "
          >
            Subscribe To Newsletter
          </h4>

          <form
            className="
              flex w-full max-w-[494px]
              flex-col gap-[10px]
              sm:flex-row
            "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter Your mail"
              className="
                box-border h-[53px] w-full
                border border-[#018837]
                bg-transparent
                px-[21px] py-[18px]
                font-body text-[14px]
                leading-[17px]
                text-white
                outline-none
                placeholder:text-white
                focus:border-white
              "
            />

            <button
              type="submit"
              className="
                flex h-[53px]
                w-full shrink-0
                items-center justify-center
                gap-[3px]
                bg-white
                px-[38px]
                text-[16px]
                font-medium
                leading-[18px]
                text-[#110C2D]
                transition-colors
                hover:bg-[#FECD2F]
                sm:w-[208px]
              "
            >
              <span>Submit Button</span>

              <ArrowRight size={18} strokeWidth={1.8} />
            </button>
          </form>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="mx-auto w-full max-w-[1290px] px-5 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            gap-x-10
            gap-y-12
            py-[65px]

            sm:grid-cols-2

            lg:grid-cols-4
            lg:gap-x-8
            lg:gap-y-0

            xl:gap-x-12
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}
          <div className="pr-0 lg:pr-4">
            <div className="mb-[25px] flex items-center gap-[8px]">
              <div
                className="
                  relative
                  h-[66px]
                  w-[66px]
                  shrink-0
                  overflow-hidden
                  rounded-full
                "
              >
                <Image
                  src={siteSettings?.image || "/logo2.png"}
                  alt={
                    siteSettings?.site_name || "Uttara Adhunik Medical College"
                  }
                  fill
                  sizes="66px"
                  className="object-contain"
                />
              </div>

              <h3
                className="
                  max-w-[175px]
                  font-display
                  text-[20.7px]
                  font-bold
                  leading-[25px]
                  text-white
                "
              >
                {siteSettings?.site_name || "Uttara Adhunik Medical College"}
              </h3>
            </div>

            <p
              className="
                max-w-[333px]
                font-body
                text-[16px]
                font-normal
                leading-[29px]
                text-[#737477]
              "
            >
              {siteSettings?.tagline ||
                "We are passionate education dedicated to providing high-quality resources for learners of all backgrounds."}
            </p>
          </div>

          {/* =================================================
              OUR CAMPUS
          ================================================= */}
          <div>
            <h4
              className="
                mb-[36px]
                inline-block
                font-body
                text-[20px]
                font-medium
                leading-[26px]
                text-white
                underline
                underline-offset-4
                sm:mb-[46px]
              "
            >
              Our Campus
            </h4>

            <ul className="flex flex-col">
              {campusLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="
                      block
                      py-[8px]
                      font-body
                      text-[16px]
                      font-normal
                      leading-[25px]
                      text-[#737477]
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              OUR PAGES
          ================================================= */}
          <div>
            <h4
              className="
                mb-[36px]
                inline-block
                font-body
                text-[20px]
                font-medium
                leading-[26px]
                text-white
                underline
                underline-offset-4
                sm:mb-[46px]
              "
            >
              Our Pages
            </h4>

            <ul className="flex flex-col">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="
                      block
                      py-[8px]
                      font-body
                      text-[16px]
                      font-normal
                      leading-[25px]
                      text-[#737477]
                      transition-colors
                      duration-200
                      hover:text-white
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              RECENT POSTS
          ================================================= */}
          <div>
            <h4
              className="
                mb-[36px]
                inline-block
                font-body
                text-[20px]
                font-medium
                leading-[26px]
                text-white
                underline
                underline-offset-4
                sm:mb-[46px]
              "
            >
              Recent Posts
            </h4>

            <div className="flex flex-col gap-[28px]">
              {latestNews.length > 0 ? (
                latestNews.map((post) => (
                  <Link
                    href={`/news/${post._id}`}
                    key={post._id}
                    className="
                      group
                      flex
                      items-start
                      gap-[16px]
                      sm:gap-[20px]
                    "
                  >
                    {/* NEWS IMAGE */}
                    <div
                      className="
                        relative
                        h-[80px]
                        w-[80px]
                        shrink-0
                        overflow-hidden
                        bg-[#242424]
                      "
                    >
                      <Image
                        src={post.image}
                        alt={post.title || "News post"}
                        fill
                        sizes="80px"
                        className="
                          object-cover
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                      />
                    </div>

                    {/* NEWS CONTENT */}
                    <div className="min-w-0 pt-[1px]">
                      <div className="mb-[8px] flex items-center gap-[8px]">
                        <span className="text-[#737477]">›</span>

                        <p
                          className="
                            font-body
                            text-[14px]
                            font-normal
                            leading-[25px]
                            text-[#737477]
                          "
                        >
                          {formatDate(post.createdAt)}
                        </p>
                      </div>

                      <p
                        className="
                          line-clamp-2
                          max-w-[236px]
                          font-body
                          text-[15.75px]
                          font-normal
                          leading-[18px]
                          capitalize
                          text-white
                          transition-colors
                          duration-200
                          group-hover:text-[#FECD2F]
                        "
                      >
                        {post.title}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p
                  className="
                    font-body
                    text-[15px]
                    leading-[25px]
                    text-[#737477]
                  "
                >
                  No recent posts available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          COPYRIGHT
      ===================================================== */}
      <div className="border-t border-[#242424]">
        <div
          className="
            mx-auto
            flex
            min-h-[64px]
            w-full
            max-w-[1290px]
            items-center
            px-5
            py-4
            sm:px-6
            lg:px-8
          "
        >
          <p
            className="
              font-body
              text-[14px]
              font-normal
              leading-[24px]
              text-[#737477]
              sm:text-[16px]
              sm:leading-[29px]
            "
          >
            Copyright @ 2024. All Rights Reserved by{" "}
            <span className="text-white">
              {siteSettings?.site_name || "Uttara Adhunik Medical College"}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
