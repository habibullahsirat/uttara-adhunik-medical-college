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

// export default function OurFacilities() {
//   const items = [
//     "Hostel",
//     "Laboratory",
//     "Hospital Service",
//     "Cafeteria",
//     "Training",
//     "Medical Education Unit",
//     "Departments",
//     "Publications",
//     "Seminar",
//   ];

//   const [active, setActive] = useState(0);

//   return (
//     <section className="w-full bg-white">
//       {/* =====================================================
//           SECTION HEADER
//       ====================================================== */}
//       <div className="flex w-full flex-col items-center gap-[10px] px-5 py-10 md:px-10 lg:py-[50px]">
//         {/* Eyebrow */}
//         <div className="flex h-[45.67px] w-fit items-end">
//           {/* Knowledge Icon */}
//           <div className="flex h-[45.03px] w-[32.5px] shrink-0 items-center">
//             <img
//               src="/knowledge.png"
//               alt=""
//               className="h-[23.36px] w-[32.5px] object-contain"
//             />
//           </div>

//           {/* Knowledge Text */}
//           <span
//             className="flex h-[45.67px] items-center justify-center px-[10.83px] font-body text-[19.5px] font-medium leading-[23px]"
//             style={{ color: GREEN }}
//           >
//             knowledge meets innovation
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="font-display text-center text-[42px] font-bold leading-[1.2] tracking-[0.03em] text-black md:text-[60px] md:leading-[72px]">
//           Our Facilities
//         </h2>
//       </div>

//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}
//       <div className="flex w-full justify-center bg-[#FAF6F6] px-5 pb-20 pt-10 md:px-10 lg:px-20">
//         <div className="flex w-full max-w-[1432px] flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-0">
//           {/* =================================================
//               LEFT — FACILITIES MENU
//           ================================================== */}
//           <div className="flex w-full max-w-[600px] flex-col gap-5 lg:mr-[-70px] lg:shrink-0">
//             {items.map((item, i) => (
//               <button
//                 key={item}
//                 type="button"
//                 onClick={() => setActive(i)}
//                 className="flex h-[65px] w-full items-center justify-between rounded-[5px] bg-white p-[10px] transition-all"
//                 style={{
//                   color: i === active ? GREEN : "#000000",
//                   boxShadow:
//                     i === active ? "0 0 0 1px rgba(1,136,55,0.05)" : "none",
//                 }}
//               >
//                 {/* Facility Name */}
//                 <span
//                   className="flex items-center px-[10px] font-display text-[18.7px] font-bold leading-[22px]"
//                   style={{
//                     color: i === active ? GREEN : "#000000",
//                   }}
//                 >
//                   {item}
//                 </span>

//                 {/* Arrow Box */}
//                 <span
//                   className="flex h-[36.4px] w-[36.4px] shrink-0 items-center justify-center rounded-[2px]"
//                   style={{
//                     backgroundColor:
//                       i === active
//                         ? "rgba(1,136,55,0.5)"
//                         : "rgba(1,136,55,0.1)",
//                   }}
//                 >
//                   <ArrowRight
//                     className="h-[25px] w-[25px]"
//                     style={{ color: YELLOW }}
//                     strokeWidth={2}
//                   />
//                 </span>
//               </button>
//             ))}
//           </div>

//           {/* =================================================
//               RIGHT — FACILITY CARD
//           ================================================== */}
//           <div className="flex w-full max-w-[832px] flex-col overflow-hidden bg-white lg:ml-0 lg:h-[741px] lg:flex-row">
//             {/* Facility Image */}
//             <div className="relative h-[400px] w-full shrink-0 overflow-hidden lg:h-full lg:w-[404px]">
//               <img
//                 src="/hostel.jpg"
//                 alt="UAMC Hostel building"
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             {/* Facility Details */}
//             <div className="flex w-full flex-col justify-center px-6 py-12 lg:h-full lg:w-[418px] lg:px-[10px]">
//               <div className="flex flex-col gap-[38px] px-2 lg:px-[7.7px]">
//                 {/* Title */}
//                 <h3
//                   className="font-display text-[32px] font-bold leading-[46px] lg:text-[38.4px]"
//                   style={{ color: GREEN }}
//                 >
//                   Hostel Facilities
//                 </h3>

//                 {/* Description */}
//                 <div className="flex flex-col gap-[8px]">
//                   <p className="font-display text-[19px] font-medium leading-[23px] text-[#4A4A4A]">
//                     Ladies hostel:
//                   </p>

//                   <p className="font-body text-[19px] font-normal leading-[23px] text-[#4A4A4A]">
//                     Hostel accommodations for female students are available with
//                     limited number of seats.
//                   </p>
//                 </div>

//                 {/* View Details */}
//                 <a
//                   href="#"
//                   className="flex w-fit items-center gap-5 border-b border-[#0094D3] pb-[2px] font-body text-[11px] font-semibold leading-[13px] text-[#0094D3]"
//                 >
//                   <span>View Details</span>

//                   <ArrowRight className="h-[11px] w-[11px]" strokeWidth={1.5} />
//                 </a>
//               </div>

//               {/* View Program Button */}
//               <button
//                 type="button"
//                 className="mt-[50px] flex h-[55px] w-[230px] items-center justify-center gap-2 px-[30px] font-body text-[16px] font-medium leading-[25px] text-white"
//                 style={{ backgroundColor: GREEN }}
//               >
//                 <span>View Our Program</span>

//                 <ArrowRight className="h-[14px] w-[14px]" strokeWidth={2} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

async function getFacilities() {
  const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API || "http://localhost:3000";

  const response = await fetch(`${baseUrl}/api/homepage/feature`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch facilities");
  }

  return response.json();
}

export default async function OurFacilities() {
  const facilities = await getFacilities();

  if (!facilities?.length) return null;

  return (
    <section className="w-full bg-white">
      {/* Header */}
      <div className="flex flex-col items-center gap-[10px] bg-[#FAF6F6] px-4 py-10 md:py-[40px]">
        <div className="flex items-end">
          <Image
            src="/knowledge.png"
            alt=""
            width={33}
            height={24}
            className="h-auto w-[32.5px]"
          />

          <span
            className="flex h-[45.67px] items-center px-[10.83px] font-body text-[16px] font-medium leading-[23px] sm:text-[19.5px]"
            style={{ color: GREEN }}
          >
            knowledge meets innovation
          </span>
        </div>

        <h2 className="font-display text-center text-[40px] font-bold leading-[1.2] tracking-[0.03em] sm:text-[50px] md:text-[60px] md:leading-[72px]">
          Our Facilities
        </h2>
      </div>

      {/* Facilities */}
      <div className="bg-[#FAF6F6] px-4 pb-12 pt-6 sm:px-6 md:px-10 md:pb-20 md:pt-10 lg:px-20">
        <div className="mx-auto grid w-full max-w-[1432px] lg:grid-cols-[600px_1fr]">
          {/* Radios + menu */}
          <div className="relative z-10 flex flex-col gap-4 lg:mr-[-70px] lg:gap-5">
            {facilities.map((facility, index) => (
              <div key={facility._id}>
                <input
                  id={`facility-${facility._id}`}
                  name="facility"
                  type="radio"
                  defaultChecked={index === 0}
                  className="peer sr-only"
                />

                <label
                  htmlFor={`facility-${facility._id}`}
                  className="flex min-h-[65px] cursor-pointer items-center justify-between rounded-[5px] bg-white p-[10px]"
                >
                  <span className="px-[10px] font-display text-[18.7px] font-bold leading-[22px] text-black peer-checked:text-[#018837]">
                    {facility.featureName}
                  </span>

                  <span className="flex h-[36.4px] w-[36.4px] items-center justify-center rounded-[2px] bg-[rgba(1,136,55,0.1)] peer-checked:bg-[rgba(1,136,55,0.5)]">
                    <ArrowRight
                      className="h-[25px] w-[25px]"
                      style={{ color: YELLOW }}
                    />
                  </span>
                </label>

                {/* Card for this facility */}
                <div className="mt-6 hidden overflow-hidden bg-white peer-checked:flex lg:absolute lg:left-[530px] lg:top-0 lg:mt-0 lg:h-[741px] lg:w-[832px]">
                  <div className="relative h-[300px] w-full shrink-0 sm:h-[400px] lg:h-full lg:w-[404px]">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 404px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex w-full flex-col justify-center px-6 py-10 sm:px-8 lg:h-full lg:w-[418px] lg:px-[10px]">
                    <div className="px-2 lg:px-[7.7px]">
                      <h3
                        className="font-display text-[30px] font-bold leading-[1.2] sm:text-[36px] lg:text-[38.4px] lg:leading-[46px]"
                        style={{ color: GREEN }}
                      >
                        {facility.title}
                      </h3>

                      <p className="mt-8 font-body text-[16px] leading-[1.55] text-[#4A4A4A] sm:text-[18px] lg:mt-[38px] lg:text-[19px] lg:leading-[23px]">
                        {facility.description}
                      </p>

                      {facility.cta?.href && (
                        <a
                          href={facility.cta.href}
                          className="mt-8 flex w-fit items-center gap-5 border-b border-[#0094D3] pb-[2px] font-body text-[11px] font-semibold text-[#0094D3]"
                        >
                          View Details
                          <ArrowRight
                            className="h-[11px] w-[11px]"
                            strokeWidth={1.5}
                          />
                        </a>
                      )}

                      {facility.cta?.href && (
                        <a
                          href={facility.cta.href}
                          className="mt-10 flex h-[55px] w-[230px] items-center justify-center gap-2 px-[30px] font-body text-[16px] font-medium text-white lg:mt-[50px]"
                          style={{ backgroundColor: GREEN }}
                        >
                          {facility.cta.text}
                          <ArrowRight
                            className="h-[14px] w-[14px]"
                            strokeWidth={2}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop card area */}
          <div className="hidden lg:block lg:h-[741px]" />
        </div>
      </div>
    </section>
  );
}
