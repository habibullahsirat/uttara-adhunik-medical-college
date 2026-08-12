// "use client";

// import { useState } from "react";

// const GREEN = "#018837";
// const GRAY = "#737477";

// const TABS = [
//   "Overview",
//   "History of UAMC",
//   "Vision & Mission",
//   "Aim & Objective",
//   "Organizational Structure",
//   "Founder Member",
//   "EC Members",
//   "GB Members",
// ];

// export default function TabNav() {
//   const [active, setActive] = useState("Overview");

//   return (
//     <section className="w-full bg-[#FBFBFB] px-6 md:px-20 py-[50px]">
//       <div className="max-w-[1441px] mx-auto">
//         {/* First row - 5 tabs */}
//         <div className="flex flex-wrap justify-center gap-[30px]">
//           {TABS.slice(0, 5).map((tab) => {
//             const isActive = active === tab;

//             return (
//               <button
//                 key={tab}
//                 type="button"
//                 onClick={() => setActive(tab)}
//                 className="w-[200px] h-[45px] px-[30px] py-[15px] rounded-[5px] flex items-center justify-center transition-all duration-200"
//                 style={{
//                   backgroundColor: isActive ? GREEN : GRAY,
//                   border: isActive
//                     ? `2px dashed ${GREEN}`
//                     : "2px solid transparent",
//                   backdropFilter: "blur(25px)",
//                 }}
//               >
//                 <span
//                   className="text-white text-[12px] leading-[15px] font-medium text-center whitespace-nowrap"
//                   style={{
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   {tab}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Second row - 3 tabs */}
//         <div className="flex flex-wrap justify-center gap-[30px] mt-[30px]">
//           {TABS.slice(5).map((tab) => {
//             const isActive = active === tab;

//             return (
//               <button
//                 key={tab}
//                 type="button"
//                 onClick={() => setActive(tab)}
//                 className="w-[200px] h-[45px] px-[30px] py-[15px] rounded-[5px] flex items-center justify-center transition-all duration-200"
//                 style={{
//                   backgroundColor: isActive ? GREEN : GRAY,
//                   border: isActive
//                     ? `2px dashed ${GREEN}`
//                     : "2px solid transparent",
//                   backdropFilter: "blur(25px)",
//                 }}
//               >
//                 <span
//                   className="text-white text-[12px] leading-[15px] font-medium text-center whitespace-nowrap"
//                   style={{
//                     fontFamily: "Inter, sans-serif",
//                   }}
//                 >
//                   {tab}
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// Sirat Edit

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const GREEN = "#018837";
const GRAY = "#737477";

const TABS = [
  {
    label: "Hospital Service",
    href: "/facility/hospitalservice",
  },
  {
    label: "Departments",
    href: "/facility/department",
  },
  {
    label: "Library",
    href: "/facility/libraryuamc",
  },
  {
    label: "Medical Education Unit",
    href: "/facility/medical",
  },
  {
    label: "Training",
    href: "/facility/training",
  },
  {
    label: "Publications",
    href: "/facility/publication",
  },
  {
    label: "Seminar",
    href: "/facility/seminar",
  },
  {
    label: "Hostel",
    href: "/facility/hostel",
  },
  {
    label: "Laboratory",
    href: "/facility/lab",
  },
  {
    label: "Cafeteria",
    href: "/facility/cafeteria",
  },
];

export default function TabNav() {
  const pathname = usePathname();

  return (
    <section className="w-full bg-[#FBFBFB] px-6 py-[50px] md:px-20">
      <div className="mx-auto max-w-[1441px]">
        {/* =================================================
            FIRST ROW - 5 TABS
        ================================================= */}
        <div className="flex flex-wrap justify-center gap-[30px]">
          {TABS.slice(0, 6).map((tab) => {
            const isActive = pathname === tab.href;

            return (
              <Link
                key={tab.label}
                href={tab.href}
                className="flex h-[45px] w-[200px] items-center justify-center rounded-[5px] px-[30px] py-[15px] transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: isActive ? GREEN : GRAY,
                  border: isActive
                    ? `2px dashed ${GREEN}`
                    : "2px solid transparent",
                  backdropFilter: "blur(25px)",
                }}
              >
                <span
                  className="whitespace-nowrap text-center text-[12px] font-medium leading-[15px] text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* =================================================
            SECOND ROW - 3 TABS
        ================================================= */}
        <div className="mt-[30px] flex flex-wrap justify-center gap-[30px]">
          {TABS.slice(6).map((tab) => {
            const isActive = pathname === tab.href;

            return (
              <Link
                key={tab.label}
                href={tab.href}
                className="flex h-[45px] w-[200px] items-center justify-center rounded-[5px] px-[30px] py-[15px] transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: isActive ? GREEN : GRAY,
                  border: isActive
                    ? `2px dashed ${GREEN}`
                    : "2px solid transparent",
                  backdropFilter: "blur(25px)",
                }}
              >
                <span
                  className="whitespace-nowrap text-center text-[12px] font-medium leading-[15px] text-white"
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {tab.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
