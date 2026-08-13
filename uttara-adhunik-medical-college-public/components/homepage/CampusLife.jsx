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

// import { ArrowUpRight } from "lucide-react";

// export default function CampusLife() {
//   const GREEN = "#018837";

//   const campusItems = [
//     {
//       title: "Student Life",
//       image: "/popular.jpg",
//     },
//     {
//       title: "Arts & Culture",
//       image: "/art.png",
//     },
//     {
//       title: "Recreation & Wellness",
//       image: "/recreation.png",
//     },
//   ];

//   return (
//     <section
//       className="relative w-full overflow-hidden"
//       style={{ backgroundColor: GREEN }}
//     >
//       {/* Main container */}
//       <div className="relative mx-auto flex min-h-[777px] w-full max-w-[1440px] flex-col px-6 py-16 md:px-10 lg:px-0">
//         {/* =====================================================
//             HEADER
//         ====================================================== */}
//         <div className="relative mx-auto flex w-full max-w-[645px] flex-col items-center">
//           {/* Description + Campus Life heading */}
//           <div className="flex w-full flex-col items-center">
//             {/* Description */}
//             <p className="absolute left-0 top-[120px] w-[304px] font-body text-[16px] font-normal leading-[29px] text-white">
//               Building a vibrant community of creative and accomplished people
//               from around the world
//             </p>

//             {/* Campus Life Image */}
//             <div className="relative z-10 ml-auto mr-[155px] h-[192px] w-[273px] overflow-hidden">
//               <img
//                 src="/campus.png"
//                 alt="Campus Life"
//                 className="h-full w-full object-contain"
//               />
//             </div>

//             {/* Yellow decorative mark */}
//             <div className="absolute right-[116px] top-[-20px] z-20 h-[50px] w-[50px]">
//               <img
//                 src="/yellow.png"
//                 alt=""
//                 className="h-full w-full object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             CAMPUS LIFE CARDS
//         ====================================================== */}
//         <div className="mx-auto mt-[90px] flex w-full max-w-[1285px] flex-col gap-10 md:flex-row md:justify-center md:gap-[36px]">
//           {campusItems.map((item) => (
//             <div
//               key={item.title}
//               className="flex w-full flex-col gap-[34px] md:w-[397px]"
//             >
//               {/* Image */}
//               <div className="h-[305px] w-full overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="h-full w-full object-cover"
//                 />
//               </div>

//               {/* Title + Arrow */}
//               <div className="flex items-center gap-[22.93px]">
//                 <span className="font-display text-[22.85px] font-normal leading-[34px] text-white">
//                   {item.title}
//                 </span>

//                 <ArrowRight
//                   className="h-[26px] w-[26px] rotate-[-30deg] text-white"
//                   strokeWidth={1.8}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* =====================================================
//             RIGHT SIDE DECORATIVE ICON
//             ONLY decorative icon remaining
//         ====================================================== */}
//         <div className="absolute right-[60px] top-[175px] hidden h-[60px] w-[60px] lg:block">
//           <img
//             src="/degree.png"
//             alt=""
//             className="h-full w-full object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/homepage/campus-life`;

async function getCampusLife() {
  const response = await fetch(API_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch campus life data: ${response.status}`);
  }

  return response.json();
}

export default async function CampusLife() {
  const campusItems = await getCampusLife();

  const GREEN = "#018837";

  return (
    <section
      className="relative w-full overflow-hidden bg-[#018837]"
      style={{ backgroundColor: GREEN }}
    >
      <div
        className="
          relative mx-auto
          flex w-full max-w-[1600px]
          flex-col items-center justify-center
          px-5 py-14
          sm:px-8 sm:py-16
          lg:min-h-[777px] lg:px-20 lg:py-0
        "
      >
        {/* =====================================================
            MAIN CONTENT CONTAINER
        ====================================================== */}
        <div
          className="
            relative w-full max-w-[1440px]
            lg:h-[777px]
          "
        >
          {/* =====================================================
              HEADER
          ====================================================== */}
          <div
            className="
              relative mx-auto
              flex w-full max-w-[645px]
              flex-col
              lg:absolute lg:left-1/2 lg:top-[calc(50%-201px)]
              lg:-translate-x-1/2
            "
          >
            {/* Description */}
            <p
              className="
                order-2
                mt-6
                w-full max-w-[304px]
                self-center
                font-body text-[15px] font-normal
                leading-[29px] text-white
                sm:text-[16px]
                lg:absolute lg:left-0 lg:top-[120px]
                lg:mt-0 lg:self-auto
              "
            >
              Building a vibrant community of creative and accomplished people
              from around the world
            </p>

            {/* Campus Life Heading */}
            <div
              className="
                relative z-10
                mx-auto
                h-[120px] w-[220px]
                sm:h-[150px] sm:w-[250px]
                lg:ml-auto lg:mr-[155px]
                lg:h-[192px] lg:w-[273px]
              "
            >
              <Image
                src="/campus.png"
                alt="Campus Life"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 250px, 273px"
              />
            </div>

            {/* Yellow decorative mark */}
            <div
              className="
                absolute
                right-[calc(50%-145px)]
                top-[-15px]
                z-20
                h-[40px] w-[40px]
                sm:right-[calc(50%-165px)]
                sm:h-[45px] sm:w-[45px]
                lg:right-[116px] lg:top-[-20px]
                lg:h-[50px] lg:w-[50px]
              "
            >
              <Image
                src="/yellow.png"
                alt=""
                fill
                className="object-contain"
                sizes="50px"
              />
            </div>
          </div>

          {/* =====================================================
              CAMPUS LIFE CARDS
          ====================================================== */}
          <div
            className="
              mx-auto mt-16
              grid w-full
              grid-cols-1 gap-10
              sm:grid-cols-2
              lg:absolute lg:left-1/2 lg:top-[401px]
              lg:mt-0
              lg:w-[1285px]
              lg:-translate-x-1/2
              lg:grid-cols-3
              lg:gap-9
            "
          >
            {campusItems?.map((item) => (
              <div
                key={item._id}
                className="
                  flex w-full
                  flex-col gap-[34px]
                "
              >
                {/* Image */}
                <div
                  className="
                    relative
                    h-[260px] w-full
                    overflow-hidden
                    sm:h-[280px]
                    lg:h-[305px]
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.cta?.text || "Campus Life"}
                    fill
                    className="object-cover"
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                  />
                </div>

                {/* Title + Arrow */}
                <Link
                  href={item.cta?.href || "/"}
                  className="
                    group
                    flex w-fit
                    items-center
                    gap-[22.93px]
                    pb-1
                  "
                >
                  <span
                    className="
                      font-display
                      text-[21px]
                      font-normal
                      leading-[34px]
                      text-white
                      sm:text-[22.85px]
                    "
                  >
                    {item.cta?.text}
                  </span>

                  <ArrowRight
                    className="
                      h-[26px] w-[26px]
                      shrink-0
                      rotate-[-30deg]
                      text-white
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                    strokeWidth={1.8}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* =====================================================
              RIGHT DECORATIVE ICON
          ====================================================== */}
          <div
            className="
              absolute
              right-[40px]
              top-[178px]
              hidden
              h-[50px] w-[50px]
              xl:block
              2xl:right-[165px]
              2xl:h-[60px]
              2xl:w-[60px]
            "
          >
            <Image
              src="/degree.png"
              alt=""
              fill
              className="object-contain"
              sizes="60px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
