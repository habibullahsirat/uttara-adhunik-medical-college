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

// export default function Admission() {
//   return (
//     <section
//       className="flex w-full justify-center px-5 py-[50px] sm:px-10 lg:px-20"
//       style={{
//         backgroundImage:
//           "linear-gradient(0deg, rgba(1, 136, 55, 0.4), rgba(1, 136, 55, 0.4)), url('/admission.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div
//         className="flex w-full max-w-[1440px] flex-col items-center gap-[30px] py-[50px]"
//         style={{
//           backgroundColor: "rgba(0, 0, 0, 0.1)",
//           backdropFilter: "blur(10px)",
//           WebkitBackdropFilter: "blur(10px)",
//         }}
//       >
//         {/* Heading + Description */}
//         <div className="flex w-full flex-col items-center gap-5">
//           <h2
//             className="font-display text-center text-[40px] font-bold leading-[1.2] tracking-[0.05em] sm:text-[48px] lg:text-[60px] lg:leading-[72px]"
//             style={{ color: YELLOW }}
//           >
//             UAMC Admission
//           </h2>

//           <div className="flex w-full items-center justify-center px-5 sm:px-10 lg:px-20">
//             <p className="w-full max-w-[1280px] text-center font-body text-[16px] font-normal leading-[22px] text-white sm:text-[18px]">
//               Uttara Adhunik Medical College (UAMC) was established in 2003 with
//               a vision to provide quality medical education and healthcare
//               services. Founded through the dedicated efforts of medical
//               professionals and social leaders, UAMC is committed to training
//               future doctors while ensuring affordable healthcare for the
//               community.
//             </p>
//           </div>
//         </div>

//         {/* Button */}
//         <button
//           type="button"
//           className="flex h-[55px] w-[230px] items-center justify-center gap-[10px] font-body text-[16px] font-medium leading-[25px] text-white transition-opacity hover:opacity-90"
//           style={{
//             backgroundColor: GREEN,
//           }}
//         >
//           <span>Learn More</span>

//           <ArrowRight className="h-[25px] w-[14px]" strokeWidth={2} />
//         </button>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";
const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API;

async function getAdmissionData() {
  try {
    const response = await fetch(`${baseUrl}/api/homepage/admission`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch admission data");
    }

    const data = await response.json();

    return data?.[0] ?? null;
  } catch (error) {
    console.error("Admission API error:", error);
    return null;
  }
}

export default async function Admission() {
  const admission = await getAdmissionData();

  if (!admission) {
    return null;
  }

  return (
    <section className="relative flex w-full justify-center overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-20 lg:py-[50px]">
      {/* Background Image */}
      <Image
        src={admission.image}
        alt={admission.title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Green Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(1, 136, 55, 0.4), rgba(1, 136, 55, 0.4))",
        }}
      />

      {/* Content */}
      <div
        className="
          relative z-10
          flex w-full max-w-[1440px]
          flex-col items-center
          gap-6
          px-4 py-8
          sm:gap-[30px]
          sm:px-6 sm:py-10
          lg:px-0 lg:py-[50px]
        "
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        {/* Heading + Description */}
        <div className="flex w-full flex-col items-center gap-5">
          <h2
            className="
              w-full
              text-center
              font-display
              text-[32px]
              font-bold
              leading-[1.2]
              tracking-[0.05em]
              sm:text-[40px]
              md:text-[48px]
              lg:text-[60px]
              lg:leading-[72px]
            "
            style={{ color: YELLOW }}
          >
            {admission.title}
          </h2>

          <div
            className="
              flex w-full
              items-center justify-center
              px-2
              sm:px-6
              lg:px-20
            "
          >
            <p
              className="
                w-full max-w-[1280px]
                text-center
                font-body
                text-[14px]
                font-normal
                leading-[22px]
                text-white
                sm:text-[16px]
                md:text-[18px]
              "
            >
              {admission.description}
            </p>
          </div>
        </div>

        {/* Button */}
        <Link
          href="/admission"
          className="
            flex h-[55px] w-[230px]
            shrink-0
            items-center justify-center
            gap-[10px]
            font-body
            text-[16px]
            font-medium
            leading-[25px]
            text-white
            transition-opacity
            hover:opacity-90
            focus:outline-none
            focus:ring-2
            focus:ring-white
            focus:ring-offset-2
          "
          style={{
            backgroundColor: GREEN,
          }}
        >
          <span>Learn More</span>

          <ArrowRight className="h-[25px] w-[14px]" strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
