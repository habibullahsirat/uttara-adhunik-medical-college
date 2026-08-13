// "use client";

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

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// const fontImport = `
//   @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500;700&family=Inter:wght@400;500;600;700&display=swap');
//   .font-display { font-family: 'Bitter', serif; }
//   .font-body { font-family: 'Inter', sans-serif; }
// `;

// export default function HistorySection() {
//   return (
//     <section className="w-full bg-[#E6F3EB] px-6 md:px-20 py-[60px] md:py-[100px]">
//       <div className="max-w-[1440px] mx-auto">
//         {/* Heading + Description */}
//         <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[200px] py-[30px]">
//           {/* Title */}
//           <div className="w-full lg:w-[584px] shrink-0">
//             <h2
//               className="text-[36px] md:text-[44px] lg:text-[50px] leading-[1.2] font-bold tracking-[0.01em] text-black"
//               style={{
//                 fontFamily: "Bitter, serif",
//               }}
//             >
//               History of Uttara Adhunik Medical College (UAMC)
//             </h2>
//           </div>

//           {/* Description */}
//           <div className="w-full lg:w-[656px] flex flex-col items-start">
//             <h3
//               className="text-[18px] md:text-[20px] leading-[24px] font-bold text-[#444444]"
//               style={{
//                 fontFamily: "Bitter, serif",
//               }}
//             >
//               A Journey of Excellence in Medical Education &amp; Healthcare
//             </h3>

//             <div className="w-full flex items-center justify-center py-[10px]">
//               <p
//                 className="w-full text-[16px] md:text-[18px] leading-[22px] font-bold text-[#444444] text-justify"
//                 style={{
//                   fontFamily: "Inter, sans-serif",
//                 }}
//               >
//                 Uttara Adhunik Medical College (UAMC) has a rich history of
//                 dedication, innovation, and excellence in medical education and
//                 healthcare services. Rooted in the vision of advancing private
//                 medical education in Bangladesh, UAMC has grown into a leading
//                 institution in a short span of time.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* History Image */}
//         <div className="w-full h-[280px] md:h-[360px] lg:h-[423px] overflow-hidden mt-[30px]">
//           <img
//             src="/images/unnamed.jpg"
//             alt="History of Uttara Adhunik Medical College"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/about/history/history-banner`;

async function getHistoryBanner() {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch history banner");
    }

    const data = await response.json();

    return data?.[0] ?? null;
  } catch (error) {
    console.error("History banner fetch error:", error);
    return null;
  }
}

export default async function HistorySection() {
  const history = await getHistoryBanner();

  if (!history) {
    return null;
  }

  return (
    <section className="w-full bg-[#E6F3EB] px-5 py-[60px] sm:px-6 md:px-10 lg:px-20 md:py-[80px] lg:py-[100px]">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Heading + Description */}
        <div className="flex flex-col items-start gap-8 py-0 lg:flex-row lg:items-center lg:gap-[80px] lg:py-[30px] xl:gap-[200px]">
          {/* Title */}
          <div className="w-full shrink-0 lg:w-[45%] xl:w-[584px]">
            <h2
              className="text-[32px] leading-[1.2] font-bold tracking-[0.01em] text-black sm:text-[38px] md:text-[44px] lg:text-[50px]"
              style={{
                fontFamily: "Bitter, serif",
              }}
            >
              {history.title}
            </h2>
          </div>

          {/* Description */}
          <div className="flex w-full flex-col items-start lg:flex-1">
            <h3
              className="text-[18px] leading-[24px] font-bold text-[#444444] sm:text-[19px] md:text-[20px]"
              style={{
                fontFamily: "Bitter, serif",
              }}
            >
              {history.subtitle}
            </h3>

            <div className="flex w-full items-center justify-center py-[10px]">
              <p
                className="w-full text-[15px] leading-[22px] font-bold text-[#444444] sm:text-[16px] md:text-[18px]"
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {history.description}
              </p>
            </div>
          </div>
        </div>

        {/* History Image */}
        <div className="relative mt-[30px] h-[220px] w-full overflow-hidden sm:h-[280px] md:h-[360px] lg:h-[423px]">
          <Image
            src={history.image}
            alt={history.title || "History of Uttara Adhunik Medical College"}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1440px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
