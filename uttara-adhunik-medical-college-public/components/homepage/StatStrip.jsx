// import React from "react";
// const YELLOW = "#F4C430";

// export default function StatStrip() {
//   const stats = [
//     {
//       value: "90%",
//       label: "Post-Graduation Success Rate",
//       width: "w-[144px]",
//     },
//     {
//       value: "Top 10",
//       label: "Colleges That Create Futures",
//       width: "w-[142px]",
//     },
//     {
//       value: "No. 1",
//       label: "In The Nation For Materials R&D",
//       width: "w-[147px]",
//     },
//   ];

//   return (
//     <section
//       className="
//         flex
//         min-h-[311px]
//         w-full
//         flex-col
//         items-center
//         justify-center
//         px-6
//         py-[50px]
//         md:px-[100px]
//       "
//       style={{
//         backgroundImage: `
//           linear-gradient(
//             0deg,
//             rgba(0, 0, 0, 0.4),
//             rgba(0, 0, 0, 0.4)
//           ),
//           url("/statistic.jpg")
//         `,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* =========================================
//           GLASS STAT PANEL
//       ========================================== */}
//       <div
//         className="
//           flex
//           w-full
//           max-w-[1233px]
//           flex-col
//           items-center
//           justify-center
//           gap-10
//           px-8
//           py-10
//           md:h-[211px]
//           md:flex-row
//           md:gap-[150px]
//           md:px-[100px]
//           md:py-[50px]
//         "
//         style={{
//           backgroundColor: "rgba(1, 136, 55, 0.5)",
//           backdropFilter: "blur(5px)",
//           WebkitBackdropFilter: "blur(5px)",
//         }}
//       >
//         {stats.map((stat, index) => (
//           <div key={stat.label} className="flex items-center">
//             {/* Stat */}
//             <div
//               className={`
//                 flex
//                 ${stat.width}
//                 flex-col
//                 items-center
//                 gap-[19px]
//               `}
//             >
//               {/* Value */}
//               <span
//                 className="
//                   flex
//                   h-[48px]
//                   w-full
//                   items-center
//                   justify-center
//                   whitespace-nowrap
//                   font-display
//                   text-[48px]
//                   font-normal
//                   leading-[48px]
//                   text-white
//                 "
//               >
//                 {stat.value}
//               </span>

//               {/* Label */}
//               <span
//                 className="
//                   flex
//                   h-[44px]
//                   w-full
//                   items-center
//                   justify-center
//                   text-center
//                   font-display
//                   text-[18px]
//                   font-bold
//                   leading-[22px]
//                 "
//                 style={{ color: YELLOW }}
//               >
//                 {stat.label}
//               </span>
//             </div>

//             {/* Divider */}
//             {index < stats.length - 1 && (
//               <span
//                 className="
//                   mx-8
//                   hidden
//                   h-[94px]
//                   w-px
//                   shrink-0
//                   bg-white/50
//                   md:mx-0
//                   md:block
//                 "
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

//Dynamic Version
"use client";

import React, { useEffect, useState } from "react";

const YELLOW = "#F4C430";
const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API;

export default function StatStrip() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/homepage/stat`);

        if (!response.ok) {
          throw new Error("Failed to fetch statistics");
        }

        const result = await response.json();

        // API returns an array
        setData(result?.[0] || null);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const parseStat = (text = "") => {
    const valueMatch = text.match(/^(No\.\s*\d+|Top\s+\d+|\d+%)(?:\s+|$)/i);

    if (!valueMatch) {
      return {
        value: "",
        label: text,
      };
    }

    return {
      value: valueMatch[1],
      label: text.slice(valueMatch[0].length).trim(),
    };
  };

  const stats = data
    ? [data.stat1, data.stat2, data.stat3].filter(Boolean).map(parseStat)
    : [];

  // Loading state
  if (loading) {
    return (
      <section
        className="
          flex
          min-h-[311px]
          w-full
          items-center
          justify-center
          px-6
          py-[50px]
        "
        style={{
          backgroundColor: "#555",
        }}
      >
        <div
          className="
            h-[211px]
            w-full
            max-w-[1233px]
            animate-pulse
          "
          style={{
            backgroundColor: "rgba(1, 136, 55, 0.45)",
          }}
        />
      </section>
    );
  }

  return (
    <section
      className="
        flex
        min-h-[311px]
        w-full
        flex-col
        items-center
        justify-center
        px-6
        py-[50px]
      "
      style={{
        backgroundImage: `
          linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.40),
            rgba(0, 0, 0, 0.40)
          ),
          url("${data?.image || "/statistic.jpg"}")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="
          flex
          w-full
          max-w-[1233px]
          flex-col
          items-center
          justify-center
          px-8
          py-10

          md:h-[211px]
          md:flex-row
          md:gap-0
          md:px-[100px]
          md:py-[50px]
        "
        style={{
          backgroundColor: "rgba(1, 136, 55, 0.50)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
        }}
      >
        {stats.map((stat, index) => (
          <React.Fragment key={`${stat.value}-${stat.label}`}>
            <div
              className="
                flex
                w-full
                items-center
                justify-center

                md:w-auto
              "
            >
              <div
                className="
                  flex
                  w-full
                  max-w-[170px]
                  flex-col
                  items-center
                  gap-[19px]

                  md:max-w-none
                "
              >
                {/* Value */}
                <span
                  className="
                    flex
                    h-[48px]
                    w-full
                    items-center
                    justify-center
                    whitespace-nowrap
                    text-center
                    font-display
                    text-[42px]
                    font-normal
                    leading-[48px]
                    text-white

                    md:text-[48px]
                  "
                >
                  {stat.value}
                </span>

                {/* Label */}
                <span
                  className="
                    flex
                    min-h-[44px]
                    w-full
                    items-center
                    justify-center
                    text-center
                    font-display
                    text-[16px]
                    font-bold
                    leading-[22px]

                    md:text-[18px]
                  "
                  style={{
                    color: YELLOW,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            </div>

            {/* Desktop divider */}
            {index < stats.length - 1 && (
              <span
                className="
                  mx-[75px]
                  hidden
                  h-[94px]
                  w-px
                  shrink-0
                  bg-white/50

                  md:block
                "
              />
            )}

            {/* Mobile divider */}
            {index < stats.length - 1 && (
              <span
                className="
                  my-8
                  block
                  h-px
                  w-[100px]
                  bg-white/30

                  md:hidden
                "
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
