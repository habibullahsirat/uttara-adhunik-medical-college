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

// export default function VisionSection() {
//   return (
//     <section className="w-full bg-[#E6F3EB]">
//       {/* Main Vision Section */}
//       <div
//         className="
//           w-full
//           max-w-[1600px]
//           mx-auto
//           px-[80px]
//           py-[100px]
//           flex
//           flex-col
//           items-start
//           gap-[30px]
//         "
//       >
//         {/* Heading + Description */}
//         <div
//           className="
//             w-full
//             max-w-[1440px]
//             min-h-[180px]
//             mx-auto
//             px-[50px]
//             py-[30px]
//             flex
//             flex-row
//             items-center
//             gap-[300px]
//           "
//         >
//           {/* Title */}
//           <h2
//             className="
//               w-[222px]
//               min-w-[222px]
//               h-[120px]
//               flex
//               items-center
//               text-black
//               font-bold
//               text-[50px]
//               leading-[60px]
//               tracking-[0.01em]
//             "
//             style={{
//               fontFamily: "Bitter, serif",
//             }}
//           >
//             Vision of UAMC
//           </h2>

//           {/* Description */}
//           <div
//             className="
//               flex-1
//               max-w-[818px]
//               min-h-[86px]
//               flex
//               flex-col
//               items-start
//             "
//           >
//             <div
//               className="
//                 w-full
//                 min-h-[86px]
//                 px-0
//                 py-[10px]
//                 flex
//                 items-center
//                 justify-center
//               "
//             >
//               <p
//                 className="
//                   w-full
//                   text-[#444444]
//                   font-normal
//                   text-[18px]
//                   leading-[22px]
//                   text-justify
//                 "
//                 style={{
//                   fontFamily: "Inter, sans-serif",
//                 }}
//               >
//                 To be a leading center of excellence in medical education,
//                 healthcare, and research, producing skilled, compassionate, and
//                 ethical medical professionals who contribute to national and
//                 global healthcare advancements.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Image */}
//         <div
//           className="
//             w-full
//             max-w-[1440px]
//             h-[423px]
//             mx-auto
//             bg-cover
//             bg-center
//             bg-no-repeat
//           "
//           style={{
//             backgroundImage: "url('/unnamed.jpg')",
//           }}
//         />
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";
import { Bitter, Inter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const API_URL = process.env.NEXT_PUBLIC_ADMIN_API;
async function getVision() {
  try {
    const response = await fetch(`${API_URL}/api/about/vision-and-mission`, {
      // Change this to { next: { revalidate: 60 } } if you
      // want ISR/caching instead of fetching on every request.
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch vision data");
    }

    const data = await response.json();

    return Array.isArray(data) ? data[0] : data;
  } catch (error) {
    console.error("Vision API Error:", error);
    return null;
  }
}

export default async function VisionSection() {
  const vision = await getVision();

  if (!vision) {
    return null;
  }

  return (
    <section className="w-full bg-[#E6F3EB]">
      <div
        className="
          mx-auto flex w-full max-w-[1600px] flex-col
          gap-[30px]
          px-5 py-12
          sm:px-8 sm:py-16
          md:px-10
          lg:px-16 lg:py-20
          xl:px-20 xl:py-[100px]
        "
      >
        {/* Heading + Description */}
        <div
          className="
            mx-auto flex w-full max-w-[1440px]
            flex-col items-start
            gap-8
            px-0 py-0
            sm:px-5
            lg:flex-row lg:items-center
            lg:gap-16 lg:px-[30px] lg:py-[30px]
            xl:gap-[120px] xl:px-[50px]
            2xl:gap-[300px]
          "
        >
          {/* Title */}
          <h2
            className={`
              m-0 flex shrink-0 items-center
              text-[36px] font-bold leading-[1.15]
              tracking-[0.01em] text-black
              sm:text-[42px]
              md:text-[46px]
              lg:h-[120px] lg:w-[222px] lg:text-[50px] lg:leading-[60px]
              ${bitter.className}
            `}
          >
            {vision.title}
          </h2>

          {/* Description */}
          <div
            className="
              flex min-h-0 w-full flex-1
              flex-col items-start
              lg:min-h-[86px]
              lg:max-w-[818px]
            "
          >
            <div
              className="
                flex w-full items-center justify-center
                px-0 py-0
                lg:min-h-[86px] lg:py-[10px]
              "
            >
              <p
                className={`
                  m-0 w-full
                  text-[16px] font-normal
                  leading-7 text-[#444444]
                  sm:text-[17px]
                  lg:text-[18px] lg:leading-[22px]
                  lg:text-justify
                  ${inter.className}
                `}
              >
                {vision.description}
              </p>
            </div>
          </div>
        </div>

        {/* Vision Image */}
        <div
          className="
            relative mx-auto w-full max-w-[1440px]
            overflow-hidden
            aspect-[16/7]
            min-h-[220px]
            sm:min-h-[280px]
            md:min-h-[340px]
            lg:aspect-auto lg:h-[423px]
          "
        >
          <Image
            src={vision.image}
            alt={vision.title || "Vision of UAMC"}
            fill
            priority
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 100vw,
              1440px
            "
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
