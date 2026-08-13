// "use client";

// import { useState } from "react";

// const GREEN = "#018837";

// const FACILITIES = [
//   "Intensive Care Unit (ICU)",
//   "Critical Care Unit or Coronary Care Unit (CCU)",
//   "Neonatal Intensive Care Unit (NICU)",
// ];

// export default function FacilitySection() {
//   const [selectedFacility, setSelectedFacility] = useState(
//     "Intensive Care Unit (ICU)",
//   );

//   const facilityDetails = {
//     "Intensive Care Unit (ICU)": {
//       title: "Intensive Care Unit (ICU)",
//       description:
//         "Equipped with ventilators and advanced life support. A 20-bed unit on the 10th floor equipped with 17 ventilators, providing continuous care and life support for critically ill adult patients.",
//     },

//     "Critical Care Unit or Coronary Care Unit (CCU)": {
//       title: "Critical Care Unit or Coronary Care Unit (CCU)",
//       description:
//         "Provides specialized monitoring and treatment for patients requiring intensive cardiac and critical care.",
//     },

//     "Neonatal Intensive Care Unit (NICU)": {
//       title: "Neonatal Intensive Care Unit (NICU)",
//       description:
//         "Provides specialized intensive care and continuous monitoring for newborns requiring advanced medical support.",
//     },
//   };

//   const activeFacility = facilityDetails[selectedFacility];

//   return (
//     <>
//       {/* =========================================
//           Facility Section
//       ========================================== */}

//       <section className="w-full bg-white px-6 py-16 md:px-20 md:py-20">
//         <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-5">
//           {/* Section Heading */}

//           <div className="flex w-full max-w-[664px] flex-col items-center">
//             <h2
//               className="w-full text-center text-[36px] font-bold leading-[45px] tracking-[0.01em] md:text-[50px] md:leading-[60px]"
//               style={{
//                 fontFamily: "'Bitter', serif",
//                 color: GREEN,
//               }}
//             >
//               UAMCH Facilities &amp; Services
//             </h2>

//             <div className="flex w-full max-w-[481px] items-center justify-center px-[10px] py-[10px]">
//               <p
//                 className="w-full text-center text-[14px] font-normal leading-[30px] tracking-[0.01em] text-black md:text-justify md:text-[15px]"
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                 }}
//               >
//                 Patients requiring intensive care receive specialized attention
//                 in
//               </p>
//             </div>
//           </div>

//           {/* Facility Content */}

//           <div className="mt-5 flex w-full max-w-[1316px] flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-[75px]">
//             {/* Facility List */}

//             <div className="flex w-full flex-col items-start gap-[10px] py-5 lg:w-[433px]">
//               {FACILITIES.map((facility, index) => {
//                 const isActive = selectedFacility === facility;

//                 return (
//                   <button
//                     key={facility}
//                     type="button"
//                     onClick={() => setSelectedFacility(facility)}
//                     className={`flex min-h-[50px] w-full items-center text-left transition-all duration-200 ${
//                       index === 0 ? "h-[60px]" : "h-[50px]"
//                     }`}
//                     style={{
//                       padding: index === 0 ? "15px 20px" : "10px",
//                       background: isActive
//                         ? "linear-gradient(270deg, #FFFFFF 0%, #018837 100%)"
//                         : "transparent",
//                     }}
//                   >
//                     <span
//                       className="text-[16px] font-bold leading-[30px] tracking-[0.01em] md:text-[18px]"
//                       style={{
//                         fontFamily: "'Inter', sans-serif",
//                         color: isActive ? "#FFFFFF" : "#444444",
//                       }}
//                     >
//                       {facility}
//                     </span>
//                   </button>
//                 );
//               })}
//             </div>

//             {/* Facility Card */}

//             <div className="flex min-h-[365px] w-full flex-col items-stretch overflow-hidden rounded-[10px] border border-black/20 bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.25)] md:flex-row lg:w-[808px]">
//               {/* Image */}

//               <div className="h-[250px] w-full shrink-0 md:h-[365px] md:w-[306px]">
//                 <img
//                   src="/assets/team-young-specialist-doctors-standing-corridor-hospital.jpg"
//                   alt="Hospital medical team"
//                   className="h-full w-full object-cover md:rounded-l-[10px]"
//                 />
//               </div>

//               {/* Content */}

//               <div className="flex min-h-[365px] flex-1 flex-col items-start justify-center gap-[5px] px-6 py-8 md:px-0 md:py-0 md:pr-[50px]">
//                 {/* Title */}

//                 <div className="flex w-full items-center py-[10px]">
//                   <h3
//                     className="text-[18px] font-bold leading-[30px] text-[#444444]"
//                     style={{
//                       fontFamily: "'Inter', sans-serif",
//                     }}
//                   >
//                     {activeFacility.title}
//                   </h3>
//                 </div>

//                 {/* Description */}

//                 <div className="flex min-h-[140px] w-full items-center py-[10px]">
//                   <p
//                     className="w-full text-justify text-[14px] font-normal leading-[30px] tracking-[0.01em] text-black md:text-[15px]"
//                     style={{
//                       fontFamily: "'Inter', sans-serif",
//                     }}
//                   >
//                     {activeFacility.description}
//                   </p>
//                 </div>

//                 {/* Read More */}

//                 <button
//                   type="button"
//                   className="flex h-[39px] w-[162px] items-center justify-center gap-[10px] px-[21px] py-[10px] text-white transition-all duration-200 hover:opacity-90"
//                   style={{
//                     backgroundColor: GREEN,
//                     fontFamily: "'Inter', sans-serif",
//                   }}
//                 >
//                   <span className="text-[11px] font-medium leading-[18px]">
//                     Read More
//                   </span>

//                   {/* Arrow */}

//                   <svg
//                     width="10"
//                     height="18"
//                     viewBox="0 0 10 18"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M1 1L8 9L1 17"
//                       stroke="white"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           Full-Width Divider
//       ========================================== */}

//       <div
//         className="w-full"
//         style={{
//           height: "1px",
//           backgroundColor: "rgba(0, 0, 0, 0.25)",
//         }}
//       />
//     </>
//   );
// }

// Dynamic version
import Image from "next/image";
import Link from "next/link";

const GREEN = "#018837";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/facility/hospital/facilities`;

async function getFacilities() {
  try {
    const response = await fetch(API_URL, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch facilities: ${response.status}`);
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch hospital facilities:", error);
    return [];
  }
}

export default async function FacilitySection() {
  const facilities = await getFacilities();

  if (!facilities.length) {
    return null;
  }

  return (
    <>
      <section className="w-full bg-white px-5 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-5">
          {/* Heading */}
          <div className="flex w-full max-w-[664px] flex-col items-center">
            <h2
              className="w-full text-center text-[32px] font-bold leading-[40px] tracking-[0.01em] sm:text-[38px] sm:leading-[46px] md:text-[44px] md:leading-[54px] lg:text-[50px] lg:leading-[60px]"
              style={{
                fontFamily: "'Bitter', serif",
                color: GREEN,
              }}
            >
              UAMCH Facilities &amp; Services
            </h2>

            <div className="flex w-full max-w-[481px] items-center justify-center px-2.5 py-2.5">
              <p
                className="w-full text-center text-[14px] font-normal leading-[25px] tracking-[0.01em] text-black sm:text-[15px] sm:leading-[30px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Patients requiring intensive care receive specialized attention
                in
              </p>
            </div>
          </div>

          {/* 
            CSS-only facility selector.

            Each radio controls its corresponding card.
            No useState and no client-side JavaScript are required.
          */}
          <div className="facility-selector mt-5 grid w-full max-w-[1316px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,433px)_minmax(0,808px)] lg:items-start lg:gap-[75px]">
            {/* Facility List */}
            <div className="flex w-full flex-col items-start gap-2.5 py-0 lg:py-5">
              {facilities.map((facility, index) => {
                const inputId = `facility-${facility._id}`;

                return (
                  <div key={facility._id} className="w-full">
                    <input
                      id={inputId}
                      name="facility"
                      type="radio"
                      defaultChecked={index === 0}
                      className="facility-radio sr-only"
                    />

                    <label
                      htmlFor={inputId}
                      className="facility-tab flex min-h-[50px] w-full cursor-pointer items-center px-2.5 py-2.5 text-left transition-all duration-200 lg:h-[50px] lg:px-2.5"
                    >
                      <span
                        className="facility-tab-text text-[16px] font-bold leading-[30px] tracking-[0.01em] sm:text-[17px] lg:text-[18px]"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {facility.title}
                      </span>
                    </label>
                  </div>
                );
              })}
            </div>

            {/* Facility Cards */}
            <div className="relative w-full">
              {facilities.map((facility, index) => {
                const inputId = `facility-${facility._id}`;

                return (
                  <article
                    key={facility._id}
                    data-facility-card={facility._id}
                    className={`facility-card-${facility._id} ${
                      index === 0 ? "is-default" : ""
                    } hidden min-h-[365px] w-full overflow-hidden rounded-[10px] border border-black/20 bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.25)] md:min-h-[365px] md:flex-row`}
                  >
                    {/* Image */}
                    <div className="relative h-[230px] w-full shrink-0 sm:h-[280px] md:h-[365px] md:w-[38%] lg:w-[306px]">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 767px) 100vw, (max-width: 1024px) 38vw, 306px"
                        className="object-cover md:rounded-l-[10px]"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex min-h-[365px] min-w-0 flex-1 flex-col items-start justify-center gap-[5px] px-6 py-8 sm:px-8 md:px-6 md:py-0 lg:pr-[50px]">
                      {/* Title */}
                      <div className="flex w-full items-center py-2.5">
                        <h3
                          className="text-[18px] font-bold leading-[30px] text-[#444444]"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {facility.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <div className="flex min-h-0 w-full items-center py-2.5 md:min-h-[140px]">
                        <p
                          className="w-full text-justify text-[14px] font-normal leading-[26px] tracking-[0.01em] text-black sm:text-[15px] sm:leading-[30px]"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {facility.description}
                        </p>
                      </div>

                      {/* CTA */}
                      {facility.ctaLink && facility.ctaLink !== "#" ? (
                        <Link
                          href={facility.ctaLink}
                          className="mt-1 flex h-[39px] w-[162px] shrink-0 items-center justify-center gap-2.5 px-[21px] py-2.5 text-white transition-opacity duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#018837] focus:ring-offset-2"
                          style={{
                            backgroundColor: GREEN,
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          <span className="text-[11px] font-medium leading-[18px]">
                            {facility.ctaText || "Read More"}
                          </span>

                          <svg
                            width="10"
                            height="18"
                            viewBox="0 0 10 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M1 1L8 9L1 17"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      ) : (
                        <button
                          type="button"
                          className="mt-1 flex h-[39px] w-[162px] shrink-0 items-center justify-center gap-2.5 px-[21px] py-2.5 text-white transition-opacity duration-200 hover:opacity-90"
                          style={{
                            backgroundColor: GREEN,
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          <span className="text-[11px] font-medium leading-[18px]">
                            {facility.ctaText || "Read More"}
                          </span>

                          <svg
                            width="10"
                            height="18"
                            viewBox="0 0 10 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              d="M1 1L8 9L1 17"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="h-px w-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      />

      {/* CSS-only interaction */}
      <style>{`
        ${facilities
          .map(
            (facility, index) => `
              #facility-${facility._id}:checked
                ~ .facility-card-${facility._id} {
                display: flex;
              }

              #facility-${facility._id}:checked
                + .facility-tab {
                background: linear-gradient(
                  270deg,
                  #ffffff 0%,
                  #018837 100%
                );
              }

              #facility-${facility._id}:checked
                + .facility-tab
                .facility-tab-text {
                color: #ffffff;
              }
            `,
          )
          .join("")}

        /* The card is outside the input's parent, so use :has()
           on the common selector container. */
        ${facilities
          .map(
            (facility) => `
              .facility-selector:has(
                #facility-${facility._id}:checked
              ) .facility-card-${facility._id} {
                display: flex;
              }

              .facility-selector:has(
                #facility-${facility._id}:checked
              ) .facility-tab {
                background: transparent;
              }

              .facility-selector:has(
                #facility-${facility._id}:checked
              ) .facility-tab-text {
                color: #444444;
              }

              .facility-selector:has(
                #facility-${facility._id}:checked
              ) label[for="facility-${facility._id}"] {
                background: linear-gradient(
                  270deg,
                  #ffffff 0%,
                  #018837 100%
                );
              }

              .facility-selector:has(
                #facility-${facility._id}:checked
              ) label[for="facility-${facility._id}"]
                .facility-tab-text {
                color: #ffffff;
              }
            `,
          )
          .join("")}

        /* First facility is visible before CSS state is evaluated */
        .facility-card.is-default {
          display: flex;
        }

        /* Once another radio is checked, hide the default card */
        .facility-selector:has(
          .facility-radio:not(:first-of-type):checked
        ) .facility-card.is-default {
          display: none;
        }

        @media (max-width: 767px) {
          .facility-card {
            flex-direction: column;
          }
        }

        @media (min-width: 768px) {
          .facility-card {
            flex-direction: row;
          }
        }
      `}</style>
    </>
  );
}
