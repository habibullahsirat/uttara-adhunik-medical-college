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

// export default function Testimonials() {
//   const reviews = [
//     {
//       name: "Emma Elizabeth",
//       role: "Assistant Teacher",
//       image: "/student1.png",
//     },
//     {
//       name: "Zent Ekizie",
//       role: "Assistant Teacher",
//       image: "/student2.png",
//     },
//     {
//       name: "Samantha Willow",
//       role: "Teacher",
//       image: "/student3.png",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#F8F8F8] px-6 py-16 md:px-20 md:py-20">
//       {/* =========================================
//           HEADING
//       ========================================== */}
//       <div className="flex flex-col items-center">
//         <div className="flex items-center">
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
//           className="
//             mt-4
//             text-center
//             font-display
//             text-[42px]
//             font-bold
//             leading-[48px]
//             md:text-[50px]
//           "
//           style={{ color: GREEN }}
//         >
//           My Students Feedback
//         </h2>

//         <p className="mt-3 w-full text-center font-body text-base leading-[29px] text-[#737477]">
//           You'll find something to spark your curiosity and enhance
//         </p>
//       </div>

//       {/* =========================================
//           TESTIMONIALS
//       ========================================== */}
//       <div className="mx-auto mt-[50px] w-full max-w-[1290px] overflow-hidden">
//         <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-0">
//           {reviews.map((review, index) => (
//             <div
//               key={review.name}
//               className="
//                 relative
//                 flex
//                 h-[317px]
//                 flex-col
//                 bg-white
//                 px-10
//                 pt-12
//               "
//             >
//               {/* =================================
//                   STARS
//               ================================== */}
//               <div className="flex gap-[5px]">
//                 {Array.from({
//                   length: index === 1 ? 5 : 4,
//                 }).map((_, i) => (
//                   <Star
//                     key={i}
//                     className="h-[16px] w-[16px] fill-current"
//                     style={{ color: YELLOW }}
//                   />
//                 ))}
//               </div>

//               {/* =================================
//                   REVIEW
//               ================================== */}
//               <p className="mt-[21px] max-w-[340px] font-body text-[18px] leading-[28px] text-[#444444]">
//                 Contrary to popular belief, Lorem Ipsum is not simply random
//                 text. It has roots in a piece of classical Latin literature from
//                 45 BC, making it over 2000 years old.
//               </p>

//               {/* =================================
//                   AUTHOR
//               ================================== */}
//               <div className="absolute bottom-[39px] left-10 flex items-center">
//                 {/* Student Image */}
//                 <div className="h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full">
//                   <img
//                     src={review.image}
//                     alt={review.name}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>

//                 {/* Name + Role */}
//                 <div className="ml-[10px]">
//                   <p
//                     className="font-display text-[17.8px] font-bold leading-5"
//                     style={{ color: GREEN }}
//                   >
//                     {review.name}
//                   </p>

//                   <p className="mt-[6px] font-body text-[15px] leading-[27px] text-[#444444]">
//                     {review.role}
//                   </p>
//                 </div>
//               </div>

//               {/* =================================
//                   QUOTE
//               ================================== */}
//               <div
//                 className="
//                   absolute
//                   bottom-[38px]
//                   right-[40px]
//                   font-display
//                   text-[70px]
//                   leading-none
//                 "
//                 style={{ color: GREEN }}
//               >
//                 ”
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* =========================================
//             SLIDER DOTS
//         ========================================== */}
//         <div className="mt-[48px] flex justify-center gap-2">
//           <span className="h-2 w-2 rounded-full bg-[#FECD2F]" />
//           <span className="h-2 w-2 rounded-full bg-[#444444]/20" />
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";
import { Star } from "lucide-react";
import { Bitter, Inter } from "next/font/google";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-bitter",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const GREEN = "#018837";
const YELLOW = "#FECD2F";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_ADMIN_API || "http://localhost:3000";

async function getTestimonials() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/homepage/feedback`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch testimonials");
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Testimonials API error:", error);
    return [];
  }
}

export default async function Testimonials() {
  const reviews = await getTestimonials();

  return (
    <section
      className={`${bitter.variable} ${inter.variable} w-full bg-[#F6F6F6] px-5 py-16 sm:px-8 md:px-10 lg:px-16 xl:px-20`}
    >
      {/* =========================================
          HEADER
      ========================================== */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-4">
        {/* Optional decorative heading mark */}
        <div className="flex items-center">
          <span
            className="mr-3 hidden h-[23px] w-[32px] sm:block"
            style={{ backgroundColor: GREEN }}
          />

          <span
            className="font-body text-[15px] font-medium sm:text-[17px] lg:text-[19.5px]"
            style={{
              color: GREEN,
              fontFamily: "var(--font-inter)",
            }}
          >
            knowledge meets innovation
          </span>
        </div>

        <h2
          className="
            text-center
            font-bold
            text-[34px]
            leading-[40px]
            sm:text-[40px]
            sm:leading-[44px]
            md:text-[46px]
            md:leading-[48px]
            lg:text-[50px]
          "
          style={{
            color: GREEN,
            fontFamily: "var(--font-bitter)",
          }}
        >
          My Students Feedback
        </h2>

        <p
          className="
            w-full
            text-center
            text-[14px]
            leading-[24px]
            sm:text-[15px]
            sm:leading-[27px]
            md:text-base
            md:leading-[29px]
          "
          style={{
            color: "#737477",
            fontFamily: "var(--font-inter)",
          }}
        >
          You&apos;ll find something to spark your curiosity and enhance
        </p>
      </div>

      {/* =========================================
          TESTIMONIAL CARDS
      ========================================== */}
      <div className="mx-auto mt-[50px] w-full max-w-[1290px]">
        {reviews.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {reviews.map((review) => {
              const rating = Math.min(
                5,
                Math.max(0, Number(review.rating) || 0),
              );

              return (
                <article
                  key={review._id}
                  className="
                    relative
                    flex
                    min-h-[317px]
                    flex-col
                    bg-white
                    px-6
                    py-10
                    sm:px-8
                    md:px-10
                  "
                >
                  {/* =================================
                      RATING
                  ================================== */}
                  <div
                    className="flex items-center gap-[4px]"
                    aria-label={`${rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, index) => {
                      const filled = index < rating;

                      return (
                        <Star
                          key={index}
                          className="h-[16px] w-[16px]"
                          strokeWidth={1.5}
                          fill={filled ? YELLOW : "transparent"}
                          color={YELLOW}
                        />
                      );
                    })}
                  </div>

                  {/* =================================
                      REVIEW
                  ================================== */}
                  <p
                    className="
                      mt-[21px]
                      max-w-[340px]
                      whitespace-pre-line
                      text-[16px]
                      leading-[26px]
                      sm:text-[17px]
                      sm:leading-[28px]
                      md:text-[18px]
                    "
                    style={{
                      color: "#444444",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {review.review}
                  </p>

                  {/* =================================
                      AUTHOR
                  ================================== */}
                  <div className="mt-auto flex items-center pt-8">
                    {/* Profile Image */}
                    <div className="relative h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full bg-[#eeeeee]">
                      {review.image ? (
                        <Image
                          src={review.image}
                          alt={review.name || "Student"}
                          fill
                          sizes="50px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[#018837] text-sm font-semibold text-white">
                          {review.name?.charAt(0)?.toUpperCase() || "S"}
                        </div>
                      )}
                    </div>

                    {/* Name + Designation */}
                    <div className="ml-[10px] min-w-0">
                      <p
                        className="
                          truncate
                          text-[16px]
                          font-bold
                          leading-5
                          sm:text-[17.8px]
                        "
                        style={{
                          color: GREEN,
                          fontFamily: "var(--font-bitter)",
                        }}
                      >
                        {review.name}
                      </p>

                      <p
                        className="
                          mt-[6px]
                          truncate
                          text-[14px]
                          leading-[24px]
                          sm:text-[15px]
                          sm:leading-[27px]
                        "
                        style={{
                          color: "#444444",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {review.designation}
                      </p>
                    </div>
                  </div>

                  {/* =================================
                      QUOTE
                  ================================== */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-[25px]
                      right-[25px]
                      select-none
                      text-[64px]
                      leading-none
                      sm:bottom-[30px]
                      sm:right-[30px]
                      sm:text-[70px]
                    "
                    style={{
                      color: GREEN,
                      fontFamily: "var(--font-bitter)",
                    }}
                  >
                    ”
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="flex min-h-[250px] items-center justify-center bg-white">
            <p
              className="text-center text-base text-[#737477]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              No feedback available at the moment.
            </p>
          </div>
        )}

        {/* =========================================
            SLIDER DOTS
        ========================================== */}
        {reviews.length > 1 && (
          <div className="mt-[48px] flex justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#FECD2F]" />
            <span className="h-2 w-2 rounded-full bg-[#444444]/20" />
          </div>
        )}
      </div>
    </section>
  );
}
