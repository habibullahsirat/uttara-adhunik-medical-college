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
// const YELLOW = "#FFBF2F";

// export default function PrincipalMessage() {
//   return (
//     <section
//       className="
//         flex
//         w-full
//         flex-col
//         items-center
//         gap-10
//         px-6
//         py-16

//         md:px-20
//         md:py-20
//       "
//       style={{ backgroundColor: "rgba(1,136,55,0.1)" }}
//     >
//       {/* =====================================================
//           SECTION HEADING
//       ====================================================== */}
//       <div
//         className="
//           flex
//           w-full
//           max-w-[1440px]
//           flex-col
//           items-center
//           gap-[10px]
//         "
//       >
//         {/* Eyebrow */}
//         <div className="flex h-[45.67px] w-[321.17px] items-end">
//           {/* Figma Frame 48 / Vector */}
//           <div
//             className="
//               flex
//               h-[45.03px]
//               w-[32.5px]
//               shrink-0
//               items-center
//             "
//           >
//             <img
//               src="/knowledge.png"
//               alt=""
//               className="h-[23.36px] w-[32.5px] object-contain"
//             />
//           </div>

//           {/* Figma Frame 49 */}
//           <div
//             className="
//               flex
//               h-[45.67px]
//               w-[288.67px]
//               items-center
//               justify-center
//               gap-[10.83px]
//               px-[10.83px]
//             "
//           >
//             <span
//               className="
//                 font-body
//                 text-[19.5px]
//                 font-medium
//                 leading-[23px]
//               "
//               style={{ color: GREEN }}
//             >
//               knowledge meets innovation
//             </span>
//           </div>
//         </div>

//         {/* Main heading */}
//         <h2
//           className="
//             m-0
//             w-full
//             text-center
//             font-display
//             text-[42px]
//             font-bold
//             leading-[1.2]
//             tracking-[0.03em]
//             text-black

//             md:text-[60px]
//             md:leading-[72px]
//           "
//         >
//           Message from the <span style={{ color: YELLOW }}>Principal</span>
//         </h2>
//       </div>

//       {/* =====================================================
//           MAIN CONTENT
//           Figma: 1440 × 573
//       ====================================================== */}
//       <div
//         className="
//           flex
//           w-full
//           max-w-[1440px]
//           flex-col
//           items-center
//           gap-10

//           lg:flex-row
//           lg:items-center
//           lg:gap-[50px]
//         "
//       >
//         {/* ===================================================
//             LEFT CONTENT
//             Figma: 695px
//         ==================================================== */}
//         <div
//           className="
//             flex
//             w-full
//             max-w-[695px]
//             flex-col
//             gap-[28px]

//             lg:h-[541px]
//             lg:w-[695px]
//             lg:max-w-none
//             lg:shrink-0
//           "
//         >
//           {/* Principal Information */}
//           <div
//             className="
//               flex
//               flex-col
//               gap-[20px]
//             "
//           >
//             {/* -----------------------------------------------
//                 SIGNATURE
//             ------------------------------------------------ */}
//             <div className="flex h-[141px] w-[186px] items-start">
//               <img
//                 src="/sig.png"
//                 alt="Principal's signature"
//                 className="
//                   block
//                   h-[141px]
//                   w-[186px]
//                   object-contain
//                   object-left
//                 "
//               />
//             </div>

//             {/* -----------------------------------------------
//                 NAME + POSITION
//             ------------------------------------------------ */}
//             <div className="flex flex-col">
//               <p
//                 className="
//                   m-0
//                   font-display
//                   text-[24px]
//                   font-bold
//                   leading-[29px]
//                   tracking-[0.03em]
//                   text-black
//                 "
//               >
//                 Honorable
//               </p>

//               <p
//                 className="
//                   m-0
//                   font-display
//                   text-[28px]
//                   font-bold
//                   leading-[38px]
//                   tracking-[0.03em]

//                   md:text-[32px]
//                 "
//                 style={{ color: GREEN }}
//               >
//                 Prof. Dr. Mohammad Mohibur Rahman
//               </p>

//               <p
//                 className="
//                   m-0
//                   font-display
//                   text-[48px]
//                   font-bold
//                   leading-[120%]
//                   tracking-[0.03em]
//                   text-[#444444]

//                   md:text-[70px]
//                 "
//               >
//                 Principal{" "}
//                 <span
//                   className="
//                     align-middle
//                     text-[28px]

//                     md:text-[32px]
//                   "
//                 >
//                   (In Charge)
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* =================================================
//               MESSAGE
//           ================================================== */}
//           <div
//             className="
//               flex
//               flex-col
//               gap-[20px]
//             "
//           >
//             <h4
//               className="
//                 m-0
//                 font-body
//                 text-[20px]
//                 font-bold
//                 leading-[24px]
//                 text-[#444444]
//               "
//             >
//               Ensuring Quality Healthcare &amp; Medical Education
//             </h4>

//             <p
//               className="
//                 m-0
//                 font-body
//                 text-[15px]
//                 font-normal
//                 leading-[18px]
//                 text-[#444444]
//                 lg:text-justify
//               "
//             >
//               Bangladesh faces significant challenges in delivering healthcare
//               nationwide. To support government efforts, Uttara Adhunik Medical
//               College Hospital (UAMCH) has been providing comprehensive health
//               services since 2003, evolving into a tertiary-level
//               multidisciplinary hospital.
//             </p>

//             {/* Read More */}
//             <button
//               type="button"
//               className="
//                 flex
//                 h-[55px]
//                 w-[230px]
//                 items-center
//                 justify-center
//                 gap-[10px]
//                 px-[30px]
//                 py-[15px]
//                 font-body
//                 text-[16px]
//                 font-medium
//                 leading-[25px]
//                 text-white
//                 transition-opacity
//                 hover:opacity-90
//               "
//               style={{ backgroundColor: GREEN }}
//             >
//               <span>Read More</span>

//               <ArrowRight className="h-[25px] w-[14.02px]" strokeWidth={2} />
//             </button>
//           </div>
//         </div>

//         {/* ===================================================
//             PRINCIPAL IMAGE
//             Figma: 695 × 573
//         ==================================================== */}
//         <div
//           className="
//             h-[420px]
//             w-full
//             max-w-[695px]
//             overflow-hidden

//             lg:h-[573px]
//             lg:w-[695px]
//             lg:max-w-none
//             lg:shrink-0
//           "
//         >
//           <img
//             src="/principal.jpg"
//             alt="Prof. Dr. Mohammad Mohibur Rahman"
//             className="
//               block
//               h-full
//               w-full
//               object-cover
//             "
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

//Dynamic Version
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FFBF2F";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/homepage/principle-message`;

async function getPrincipalMessage() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch principal message: ${response.status}`);
    }

    const data = await response.json();

    return Array.isArray(data) ? data[0] : data;
  } catch (error) {
    console.error("Principal message API error:", error);
    return null;
  }
}

export default async function PrincipalMessage() {
  const data = await getPrincipalMessage();

  if (!data) {
    return null;
  }

  return (
    <section
      className="
        w-full
        bg-[rgba(1,136,55,0.1)]
        px-4
        py-12

        sm:px-6
        sm:py-14

        md:px-10
        md:py-16

        lg:px-16
        lg:py-20

        xl:px-20
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-10

          sm:gap-12

          lg:gap-[50px]
        "
      >
        {/* =====================================================
            SECTION HEADING
        ====================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-center
            gap-2.5
          "
        >
          {/* Eyebrow */}
          <div
            className="
              flex
              min-h-[45px]
              w-auto
              max-w-full
              items-end
            "
          >
            <div
              className="
                flex
                h-[45px]
                w-[32px]
                shrink-0
                items-center
              "
            >
              <Image
                src="/knowledge.png"
                alt=""
                width={33}
                height={24}
                className="
                  h-auto
                  w-[26px]

                  sm:w-[30px]

                  md:w-[32px]
                "
              />
            </div>

            <div
              className="
                flex
                min-h-[45px]
                items-center
                justify-center
                px-2.5
              "
            >
              <span
                className="
                  font-body
                  text-center
                  text-sm
                  font-medium
                  leading-6

                  sm:text-base

                  md:text-[19.5px]
                "
                style={{ color: GREEN }}
              >
                {data.subtitle}
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h2
            className="
              m-0
              w-full
              text-center
              font-display
              text-[32px]
              font-bold
              leading-[1.2]
              tracking-[0.02em]
              text-black

              sm:text-[40px]

              md:text-[48px]

              lg:text-[60px]
              lg:leading-[72px]
            "
          >
            {data.title?.replace("Principal", "").trim()}{" "}
            <span style={{ color: YELLOW }}>Principal</span>
          </h2>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div
          className="
            flex
            w-full
            flex-col
            items-stretch
            gap-10

            lg:flex-row
            lg:items-center
            lg:gap-[50px]
          "
        >
          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-7

              lg:w-1/2
              lg:max-w-[695px]
              lg:shrink-0
            "
          >
            {/* Principal Information */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-5
              "
            >
              {/* Signature */}
              {data.image2 && (
                <div
                  className="
                    relative
                    h-[100px]
                    w-[150px]

                    sm:h-[120px]
                    sm:w-[170px]

                    md:h-[141px]
                    md:w-[186px]
                  "
                >
                  <Image
                    src={data.image2}
                    alt={`${data.principleName || "Principal"} signature`}
                    fill
                    sizes="
                      (max-width: 640px) 150px,
                      (max-width: 768px) 170px,
                      186px
                    "
                    className="object-contain object-left"
                  />
                </div>
              )}

              {/* Name + Position */}
              <div className="flex w-full flex-col">
                <p
                  className="
                    m-0
                    font-display
                    text-[20px]
                    font-bold
                    leading-[29px]
                    tracking-[0.03em]
                    text-black

                    sm:text-[22px]

                    md:text-[24px]
                  "
                >
                  Honorable
                </p>

                <p
                  className="
                    m-0
                    font-display
                    text-[22px]
                    font-bold
                    leading-[1.25]
                    tracking-[0.03em]

                    sm:text-[26px]

                    md:text-[32px]
                  "
                  style={{ color: GREEN }}
                >
                  {data.principleName}
                </p>

                <p
                  className="
                    m-0
                    font-display
                    text-[38px]
                    font-bold
                    leading-[1.2]
                    tracking-[0.03em]
                    text-[#444444]

                    sm:text-[48px]

                    md:text-[58px]

                    lg:text-[70px]
                  "
                >
                  {data.designation?.replace(/\s*\(.*?\)/, "")}

                  {data.designation?.match(/\(.*?\)/)?.[0] && (
                    <span
                      className="
                        ml-1
                        align-middle
                        text-[18px]

                        sm:text-[24px]

                        md:text-[28px]

                        lg:text-[32px]
                      "
                    >
                      {data.designation.match(/\(.*?\)/)?.[0]}
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* =================================================
                MESSAGE
            ================================================== */}
            <div
              className="
                flex
                w-full
                flex-col
                gap-5
              "
            >
              <h4
                className="
                  m-0
                  font-body
                  text-base
                  font-bold
                  leading-6
                  text-[#444444]

                  sm:text-lg

                  md:text-[20px]
                "
              >
                {data.responsibility}
              </h4>

              <p
                className="
                  m-0
                  font-body
                  text-[14px]
                  font-normal
                  leading-[1.5]
                  text-[#444444]

                  sm:text-[15px]
                  sm:leading-[18px]

                  lg:text-justify
                "
              >
                {data.description}
              </p>

              {/* CTA */}
              {data.cta?.href && (
                <Link
                  href={data.cta.href}
                  className="
                    flex
                    h-[55px]
                    w-full
                    max-w-[230px]
                    items-center
                    justify-center
                    gap-2.5
                    px-[30px]
                    py-[15px]
                    font-body
                    text-base
                    font-medium
                    leading-[25px]
                    text-white
                    transition-opacity
                    hover:opacity-90
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#018837]
                    focus:ring-offset-2
                  "
                  style={{ backgroundColor: GREEN }}
                >
                  <span>{data.cta.text}</span>

                  <ArrowRight className="h-[25px] w-[14px]" strokeWidth={2} />
                </Link>
              )}
            </div>
          </div>

          {/* ===================================================
              PRINCIPAL IMAGE
          ==================================================== */}
          {data.image1 && (
            <div
              className="
                relative
                aspect-[4/3]
                w-full
                overflow-hidden

                sm:aspect-[16/11]

                lg:aspect-auto
                lg:h-[573px]
                lg:w-1/2
                lg:max-w-[695px]
                lg:shrink-0
              "
            >
              <Image
                src={data.image1}
                alt={data.principleName || "Principal"}
                fill
                priority
                sizes="
                  (max-width: 1023px) 100vw,
                  50vw
                "
                className="
                  object-cover
                  object-center
                "
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
