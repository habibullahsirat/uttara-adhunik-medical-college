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

// // import { ArrowRight } from "lucide-react";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// export default function FindDepartment() {
//   return (
//     <section
//       id="departments"
//       className="
//         flex
//         w-full
//         items-center
//         px-6
//         py-[70px]
//         md:px-20
//         md:py-[100px]
//       "
//       // style={{
//       //   backgroundImage: `
//       //     linear-gradient(
//       //       180deg,
//       //       #ffffff 0%,
//       //       rgba(255, 255, 255, 0) 100%
//       //     ),
//       //     url("/statistic.jpg")
//       //   `,
//       //   backgroundSize: "cover",
//       //   backgroundPosition: "center",
//       // }}
//     >
//       <div
//         className="
//           mx-auto
//           flex
//           w-full
//           max-w-[1440px]
//           flex-col
//           items-center
//           gap-12
//           lg:flex-row
//           lg:gap-[50px]
//         "
//       >
//         {/* =========================================
//             LEFT CONTENT
//         ========================================== */}
//         <div
//           className="
//             flex
//             w-full
//             max-w-[769px]
//             flex-col
//             justify-between
//             gap-[43px]
//             lg:min-h-[456.85px]
//           "
//         >
//           {/* Heading + description */}
//           <div className="flex w-full flex-col">
//             {/* Heading */}
//             <div className="flex h-[68px] items-center py-[10px]">
//               <h2
//                 className="
//                   font-display
//                   text-[32px]
//                   font-bold
//                   leading-[48px]
//                   md:text-[40px]
//                 "
//                 style={{ color: GREEN }}
//               >
//                 Find Your Department
//               </h2>
//             </div>

//             {/* Description */}
//             <div className="flex min-h-[74px] items-center py-[10px]">
//               <p
//                 className="
//                   font-body
//                   text-[14px]
//                   font-normal
//                   leading-[18px]
//                   text-[#737477]
//                   md:text-[15px]
//                 "
//               >
//                 Use the search bar below to explore our comprehensive MBBS
//                 program and discover the perfect path to kickstart your medical
//                 career. Join UAMC and embark on a journey of academic
//                 excellence, hands-on clinical training, and cutting-edge medical
//                 research!
//               </p>
//             </div>
//           </div>

//           {/* Search + popular searches */}
//           <div className="flex w-full flex-col gap-[10px]">
//             {/* Search box */}
//             <div
//               className="
//                 flex
//                 h-[68px]
//                 w-full
//                 items-center
//                 gap-[10px]
//                 px-5
//                 py-[15px]
//               "
//               style={{ backgroundColor: "#E8E8F4" }}
//             >
//               <Search
//                 className="h-6 w-6 shrink-0"
//                 style={{ color: GREEN }}
//                 strokeWidth={2}
//               />

//               <div className="flex h-[38px] items-center px-[10px]">
//                 <input
//                   type="text"
//                   placeholder='Find your program like "Department of Physiology"'
//                   className="
//                     w-full
//                     min-w-0
//                     bg-transparent
//                     font-body
//                     text-[15px]
//                     font-medium
//                     leading-[18px]
//                     text-[#9191A6]
//                     outline-none
//                     placeholder:text-[#9191A6]
//                   "
//                 />
//               </div>
//             </div>

//             {/* Popular search */}
//             <div className="flex min-h-[38px] items-center py-[10px]">
//               <p
//                 className="
//                   font-body
//                   text-[14px]
//                   font-bold
//                   leading-[18px]
//                   md:text-[15px]
//                 "
//                 style={{ color: "rgba(1, 136, 55, 0.7)" }}
//               >
//                 Popular Search: Department of Microbiology&nbsp;&nbsp;
//                 Department of Community Medicine&nbsp;&nbsp; Department of
//                 Pathology
//               </p>
//             </div>
//           </div>

//           {/* =========================================
//               FEATURED DEPARTMENT
//           ========================================== */}
//           <div
//             className="
//               flex
//               min-h-[120px]
//               w-full
//               items-center
//               justify-between
//               gap-5
//               border
//               border-dashed
//               p-5
//             "
//             style={{
//               backgroundColor: "rgba(1, 136, 55, 0.1)",
//               borderColor: GREEN,
//             }}
//           >
//             {/* Department information */}
//             <div className="flex items-center gap-[10px]">
//               {/* Image */}
//               <div className="h-[80px] w-[116px] shrink-0 overflow-hidden">
//                 <img
//                   src="/popular.jpg"
//                   alt="Department of Microbiology"
//                   className="h-full w-full object-cover"
//                 />
//               </div>

//               {/* Text */}
//               <div className="flex h-[75px] w-full max-w-[248px] flex-col gap-[10px]">
//                 {/* Badge */}
//                 <span
//                   className="
//                     flex
//                     h-[23px]
//                     w-fit
//                     items-center
//                     justify-center
//                     px-[10px]
//                     py-[5px]
//                     font-body
//                     text-[11px]
//                     font-semibold
//                     leading-[13px]
//                     text-black
//                   "
//                   style={{ backgroundColor: YELLOW }}
//                 >
//                   Popular Program
//                 </span>

//                 {/* Department name */}
//                 <div className="flex h-[42px] items-center py-[10px]">
//                   <p
//                     className="
//                       font-body
//                       text-[16px]
//                       font-bold
//                       leading-[22px]
//                       md:text-[18px]
//                     "
//                     style={{ color: GREEN }}
//                   >
//                     Department of Microbiology
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Arrow button */}
//             <button
//               type="button"
//               aria-label="View Department of Microbiology"
//               className="
//                 flex
//                 h-[80px]
//                 w-[57px]
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-[2px]
//               "
//               style={{ backgroundColor: GREEN }}
//             >
//               <ArrowRight
//                 className="h-6 w-6"
//                 style={{ color: YELLOW }}
//                 strokeWidth={2}
//               />
//             </button>
//           </div>
//         </div>

//         {/* =========================================
//             RIGHT IMAGE COLLAGE
//         ========================================== */}
//         <div
//           className="
//             relative
//             h-[400px]
//             w-full
//             max-w-[621px]
//             lg:h-[456.85px]
//           "
//         >
//           {/* Small image */}
//           <div
//             className="
//               absolute
//               left-0
//               top-0
//               h-[205px]
//               w-[45%]
//               overflow-hidden
//               lg:h-[234.44px]
//               lg:w-[252px]
//             "
//           >
//             <img
//               src="/find1.jpg"
//               alt="Doctor consulting patient"
//               className="h-full w-full object-cover"
//             />
//           </div>

//           {/* Large image */}
//           <div
//             className="
//               absolute
//               right-0
//               top-0
//               h-full
//               w-[56%]
//               overflow-hidden
//               lg:h-[456.85px]
//               lg:w-[348px]
//             "
//           >
//             <img
//               src="/find2.jpg"
//               alt="Nurse checking X-ray results"
//               className="h-full w-full object-cover"
//             />
//           </div>

//           {/* =========================================
//               28+ DEPARTMENT OVERLAY
//           ========================================== */}
//           <div
//             className="
//               absolute
//               bottom-0
//               left-0
//               flex
//               min-h-[100px]
//               w-[85%]
//               items-center
//               gap-[18px]
//               px-6
//               py-4
//               lg:h-[116.99px]
//               lg:w-[337.69px]
//               lg:px-[30px]
//               lg:py-[15px]
//             "
//             style={{
//               backgroundColor: "rgba(1, 136, 55, 0.5)",
//               backdropFilter: "blur(5px)",
//               WebkitBackdropFilter: "blur(5px)",
//             }}
//           >
//             {/* Round image */}
//             <div className="h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full lg:h-[86.78px] lg:w-[86.78px]">
//               <img
//                 src="/171328095_10677961.png"
//                 alt=""
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             {/* Number + label */}
//             <div className="flex min-w-0 flex-col">
//               <span
//                 className="
//                   font-display
//                   text-[32px]
//                   font-bold
//                   leading-[43px]
//                   text-white
//                   lg:text-[36.157px]
//                 "
//               >
//                 28+
//               </span>

//               <span
//                 className="
//                   font-body
//                   text-[13px]
//                   font-normal
//                   leading-[18px]
//                   text-white
//                   lg:text-[14.4628px]
//                 "
//               >
//                 Department Available For Student
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API;

const LEFT_API = `${baseUrl}/api/homepage/find-department-left`;

const RIGHT_API = `${baseUrl}/api/homepage/find-department-right`;

async function getFindDepartmentData() {
  try {
    const [leftResponse, rightResponse] = await Promise.all([
      fetch(LEFT_API, {
        cache: "no-store",
      }),
      fetch(RIGHT_API, {
        cache: "no-store",
      }),
    ]);

    if (!leftResponse.ok || !rightResponse.ok) {
      throw new Error("Failed to fetch Find Department data");
    }

    const [leftData, rightData] = await Promise.all([
      leftResponse.json(),
      rightResponse.json(),
    ]);

    return {
      left: leftData?.[0] ?? null,
      right: rightData?.[0] ?? null,
    };
  } catch (error) {
    console.error("Find Department API error:", error);

    return {
      left: null,
      right: null,
    };
  }
}

export default async function FindDepartment() {
  const { left, right } = await getFindDepartmentData();

  // Gracefully don't render if API data is unavailable.
  if (!left || !right) {
    return null;
  }

  /**
   * The left API does not currently provide a dedicated image
   * for the popular department.
   *
   * Therefore we use the right-side image1 as a fallback/featured
   * department image.
   */
  const popularProgramImage = right.image1;

  return (
    <section
      id="departments"
      className="w-full px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-20 lg:py-[100px]"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-[50px]">
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <div className="flex w-full min-w-0 flex-1 flex-col justify-between gap-10 lg:min-h-[456.85px] lg:gap-[43px]">
          {/* Heading + Description */}
          <div className="flex w-full flex-col">
            {/* Heading */}
            <div className="flex min-h-[68px] items-center py-2.5">
              <h2
                className="
                  font-display
                  text-[30px]
                  font-bold
                  leading-[38px]
                  sm:text-[34px]
                  sm:leading-[42px]
                  md:text-[40px]
                  md:leading-[48px]
                "
                style={{ color: GREEN }}
              >
                {left.title}
              </h2>
            </div>

            {/* Description */}
            <div className="flex items-center py-2.5">
              <p
                className="
                  max-w-[769px]
                  font-body
                  text-[14px]
                  font-normal
                  leading-[20px]
                  text-[#737477]
                  sm:text-[15px]
                  sm:leading-[18px]
                "
              >
                {left.description}
              </p>
            </div>
          </div>

          {/* Search + Popular Search */}
          <div className="flex w-full flex-col gap-2.5">
            {/* Search Box */}
            <div
              className="
                flex
                min-h-[60px]
                w-full
                items-center
                gap-2.5
                px-4
                py-3.5
                sm:h-[68px]
                sm:px-5
              "
              style={{ backgroundColor: "#E8E8F4" }}
            >
              <Search
                className="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
                style={{ color: GREEN }}
                strokeWidth={2}
              />

              <div className="flex min-w-0 flex-1 items-center px-1 sm:px-2.5">
                <input
                  type="text"
                  placeholder='Find your program like "Department of Physiology"'
                  aria-label="Find your program"
                  className="
                    w-full
                    min-w-0
                    bg-transparent
                    font-body
                    text-[13px]
                    font-medium
                    leading-[18px]
                    text-[#9191A6]
                    outline-none
                    placeholder:text-[#9191A6]
                    sm:text-[15px]
                  "
                />
              </div>
            </div>

            {/* Popular Search */}
            <div className="flex min-h-[38px] items-center py-2.5">
              <p
                className="
                  break-words
                  font-body
                  text-[13px]
                  font-bold
                  leading-[18px]
                  sm:text-[14px]
                  md:text-[15px]
                "
                style={{ color: "rgba(1, 136, 55, 0.7)" }}
              >
                Popular Search: {left.popularSearchTitle}
              </p>
            </div>
          </div>

          {/* =================================================
              FEATURED / POPULAR PROGRAM
          ================================================== */}
          <div
            className="
              flex
              w-full
              min-h-[120px]
              flex-col
              gap-4
              border
              border-dashed
              p-4
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:gap-5
              sm:p-5
            "
            style={{
              backgroundColor: "rgba(1, 136, 55, 0.1)",
              borderColor: GREEN,
            }}
          >
            {/* Department Information */}
            <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-[10px]">
              {/* Department Image */}
              <div className="relative h-[70px] w-[100px] shrink-0 overflow-hidden sm:h-[80px] sm:w-[116px]">
                <Image
                  src={popularProgramImage}
                  alt={left.popularProgramTitle}
                  fill
                  sizes="(max-width: 640px) 100px, 116px"
                  className="object-cover"
                />
              </div>

              {/* Department Text */}
              <div className="flex min-w-0 flex-col gap-2.5">
                {/* Badge */}
                <span
                  className="
                    flex
                    h-[23px]
                    w-fit
                    items-center
                    justify-center
                    px-2.5
                    py-[5px]
                    font-body
                    text-[10px]
                    font-semibold
                    leading-[13px]
                    text-black
                    sm:text-[11px]
                  "
                  style={{ backgroundColor: YELLOW }}
                >
                  Popular Program
                </span>

                {/* Department Name */}
                <div className="flex items-center">
                  <p
                    className="
                      line-clamp-2
                      font-body
                      text-[15px]
                      font-bold
                      leading-[20px]
                      sm:text-[18px]
                      sm:leading-[22px]
                    "
                    style={{ color: GREEN }}
                  >
                    {left.popularProgramTitle}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href={left.cta?.href || "#"}
              aria-label={left.cta?.text || "View program"}
              className="
                flex
                h-14
                w-full
                shrink-0
                items-center
                justify-center
                rounded-[2px]
                transition-opacity
                hover:opacity-90
                sm:h-[80px]
                sm:w-[57px]
              "
              style={{ backgroundColor: GREEN }}
            >
              <ArrowRight
                className="h-5 w-5 sm:h-6 sm:w-6"
                style={{ color: YELLOW }}
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>

        {/* =====================================================
            RIGHT IMAGE COLLAGE
        ====================================================== */}
        <div
          className="
            relative
            h-[400px]
            w-full
            shrink-0
            sm:h-[450px]
            lg:h-[456.85px]
            lg:max-w-[621px]
            lg:flex-1
          "
        >
          {/* Small Image */}
          <div
            className="
              absolute
              left-0
              top-0
              h-[58%]
              w-[45%]
              overflow-hidden
              sm:w-[43%]
              lg:h-[234.44px]
              lg:w-[252px]
            "
          >
            <Image
              src={right.image1}
              alt="Medical department"
              fill
              sizes="
                (max-width: 640px) 45vw,
                (max-width: 1024px) 43vw,
                252px
              "
              className="object-cover"
              priority
            />
          </div>

          {/* Large Image */}
          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-[56%]
              overflow-hidden
              sm:w-[55%]
              lg:h-[456.85px]
              lg:w-[348px]
            "
          >
            <Image
              src={right.image2}
              alt="Medical professionals"
              fill
              sizes="
                (max-width: 640px) 56vw,
                (max-width: 1024px) 55vw,
                348px
              "
              className="object-cover"
              priority
            />
          </div>

          {/* =================================================
              DEPARTMENT COUNT OVERLAY
          ================================================== */}
          <div
            className="
              absolute
              bottom-0
              left-0
              flex
              min-h-[105px]
              w-[86%]
              items-center
              gap-3
              px-4
              py-3
              sm:w-[65%]
              sm:gap-4
              sm:px-5
              lg:h-[116.99px]
              lg:w-[337.69px]
              lg:gap-[18px]
              lg:px-[30px]
              lg:py-[15px]
            "
            style={{
              backgroundColor: "rgba(1, 136, 55, 0.5)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
            }}
          >
            {/* Round Image */}
            <div
              className="
                relative
                h-[60px]
                w-[60px]
                shrink-0
                overflow-hidden
                rounded-full
                sm:h-[70px]
                sm:w-[70px]
                lg:h-[86.78px]
                lg:w-[86.78px]
              "
            >
              <Image
                src="/grad-cap.png"
                alt="Rounded image"
                fill
                sizes="87px"
                className="object-cover"
              />
            </div>

            {/* Count + Label */}
            <div className="flex min-w-0 flex-col">
              <span
                className="
                  font-display
                  text-[28px]
                  font-bold
                  leading-[36px]
                  text-white
                  sm:text-[32px]
                  sm:leading-[40px]
                  lg:text-[36.157px]
                  lg:leading-[43px]
                "
              >
                {right.title?.match(/\d+\+?/i)?.[0] || "28+"}
              </span>

              <span
                className="
                  font-body
                  text-[12px]
                  font-normal
                  leading-[17px]
                  text-white
                  sm:text-[13px]
                  lg:text-[14.4628px]
                  lg:leading-[18px]
                "
              >
                {right.title?.replace(/\d+\+?\s*/i, "") ||
                  "Department Available For Student"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
