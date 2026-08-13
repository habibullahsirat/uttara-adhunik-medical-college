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

// const objectives = [
//   {
//     title: "Academic Excellence",
//     text: "Deliver a comprehensive MBBS curriculum aligned with Bangladesh Medical & Dental Council (BMDC) and Dhaka University (DU) guidelines. Equip students with a deep understanding of medical sciences, human anatomy, disease mechanisms, and healthcare practices.",
//   },
//   {
//     title: "Clinical & Professional Skills Development",
//     text: "Train students in patient history-taking, clinical examinations, and emergency management. Ensure proficiency in diagnostic procedures, laboratory investigations, and therapeutic decision-making. Promote effective communication skills for patient care and interprofessional collaboration.",
//   },
//   {
//     title: "Ethical & Holistic Medical Practice",
//     text: "Instill a strong sense of medical ethics, integrity, and responsibility towards patient welfare. Encourage a humanitarian approach in medical practice by blending scientific knowledge with empathy.",
//   },
//   {
//     title: "Research & Continuous Learning",
//     text: "Foster critical thinking, research skills, and evidence-based medical practice. Cultivate a lifelong learning mindset to adapt to evolving medical advancements and healthcare needs.",
//   },
//   {
//     title: "Community Health & Global Standards",
//     text: "Enhance healthcare accessibility by training graduates to serve diverse populations, particularly in underserved regions. Align education and healthcare practices with international standards to prepare graduates for global medical opportunities.",
//   },
// ];

// export default function Aim() {
//   return (
//     <section className="w-full bg-[#E6F3EB]">
//       <div className="mx-auto w-full max-w-[1600px] px-5 py-10 md:px-10 lg:px-20">
//         <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[30px]">
//           {/* AIM HEADER */}
//           <div className="flex w-full flex-col items-start gap-8 py-[30px] lg:flex-row lg:items-start lg:gap-[200px]">
//             {/* Aim title */}
//             <div className="flex w-full items-center lg:w-[374px]">
//               <div className="flex items-end gap-[10px]">
//                 <h2 className="font-['Bitter'] text-[40px] font-bold leading-[60px] tracking-[0.01em] text-black md:text-[50px]">
//                   Aim
//                 </h2>

//                 <div className="mb-[8px] h-[2px] w-[120px] bg-black md:w-[200px]" />
//               </div>
//             </div>

//             {/* Description */}
//             <div className="flex w-full items-center lg:w-[866px]">
//               <p className="w-full text-justify font-['Inter'] text-[16px] font-bold leading-[22px] text-[#444444] md:text-[18px]">
//                 Uttara Adhunik Medical College (UAMC) is committed to producing
//                 competent, compassionate, and dedicated healthcare professionals
//                 equipped with the knowledge and skills to serve the community,
//                 particularly in rural areas. The institution strives to provide
//                 a solid foundation for future training, service, and research at
//                 both national and international levels while fostering
//                 continuous professional development.
//               </p>
//             </div>
//           </div>

//           {/* IMAGE + OBJECTIVE */}
//           <div className="relative w-full">
//             <div className="relative h-[300px] w-full overflow-hidden md:h-[468px] lg:w-[1048px]">
//               <img
//                 src="/images/team-young-specialist-doctors-standing-corridor-hospital.jpg"
//                 alt="Medical professionals standing in a hospital corridor"
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             {/* Yellow Objective box */}
//             <div className="relative mt-[-30px] flex min-h-[150px] w-full items-center bg-[#FECD2F] px-6 py-5 md:mt-[-170px] md:ml-auto md:w-[678px] md:min-h-[170px] md:px-[50px]">
//               <div className="flex items-center">
//                 <div className="flex items-end gap-[10px]">
//                   <h2 className="font-['Bitter'] text-[55px] font-bold leading-[70px] tracking-[0.01em] text-black md:text-[80px] md:leading-[96px]">
//                     Objective
//                   </h2>

//                   <div className="mb-[10px] hidden h-[2px] w-[200px] bg-black md:block" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* OBJECTIVES GRID */}
//           <div className="w-full bg-[rgba(1,136,55,0.1)] px-5 py-[30px] md:px-10 lg:px-5">
//             {/* First row - 3 cards */}
//             <div className="grid grid-cols-1 gap-[10px] lg:grid-cols-3">
//               {objectives.slice(0, 3).map((item) => (
//                 <ObjectiveCard
//                   key={item.title}
//                   title={item.title}
//                   text={item.text}
//                 />
//               ))}
//             </div>

//             {/* Second row - 2 cards */}
//             <div className="mt-[10px] grid grid-cols-1 gap-[10px] lg:grid-cols-2">
//               {objectives.slice(3).map((item) => (
//                 <ObjectiveCard
//                   key={item.title}
//                   title={item.title}
//                   text={item.text}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* BOTTOM STATEMENT */}
//           <div className="flex w-full items-center justify-center px-5 py-5 md:px-[80px]">
//             <p className="w-full text-center font-['Inter'] text-[17px] font-normal leading-[24px] text-[#444444] md:text-[20px]">
//               With a structured five-year MBBS program followed by a one-year
//               internship, UAMC ensures that graduates are well-prepared to
//               contribute meaningfully to the medical field and society.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* -------------------------------------------------
//    OBJECTIVE CARD
// ------------------------------------------------- */

// function ObjectiveCard({ title, text }) {
//   return (
//     <div className="flex min-h-[277px] flex-col items-start p-[10px]">
//       {/* Card heading */}
//       <div className="flex w-full flex-col items-start gap-[10px]">
//         <h3 className="font-['Bitter'] text-[20px] font-bold leading-[24px] text-[#018837]">
//           {title}
//         </h3>

//         <div className="h-[1px] w-[70%] bg-[#444444]" />
//       </div>

//       {/* Card description */}
//       <div className="flex w-full flex-1 items-center justify-center p-[10px]">
//         <p className="w-full text-justify font-['Inter'] text-[16px] font-normal leading-[22px] text-[#444444] md:text-[18px]">
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// }

// Dynamic version
import Image from "next/image";

const API_BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API;

const BANNER_API = `${API_BASE_URL}/api/about/aim/banner`;
const OBJECTIVE_API = `${API_BASE_URL}/api/about/aim/objective`;

async function fetchJson(url) {
  const response = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${url}`);
  }

  return response.json();
}

async function getAimData() {
  try {
    const [bannerResponse, objectiveResponse] = await Promise.all([
      fetchJson(BANNER_API),
      fetchJson(OBJECTIVE_API),
    ]);

    const banner = Array.isArray(bannerResponse)
      ? bannerResponse[0]
      : bannerResponse;

    const objectives = Array.isArray(objectiveResponse)
      ? objectiveResponse
      : [];

    return {
      banner,
      objectives,
    };
  } catch (error) {
    console.error("Aim section API error:", error);

    return {
      banner: null,
      objectives: [],
    };
  }
}

export default async function AimSection() {
  const { banner, objectives } = await getAimData();

  const title1 = banner?.title1 || "Aim";
  const title2 = banner?.title2 || "Objective";

  const description = banner?.description || "";

  const image =
    banner?.image ||
    "/images/team-young-specialist-doctors-standing-corridor-hospital.jpg";

  return (
    <section className="w-full bg-[#E6F3EB]">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-6 md:px-10 lg:px-20 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[30px]">
          {/* =========================================================
              AIM HEADER
          ========================================================= */}
          <div className="flex w-full flex-col gap-8 py-5 lg:flex-row lg:items-start lg:gap-[200px] lg:py-[30px]">
            {/* Title */}
            <div className="flex w-full shrink-0 items-center lg:w-[374px]">
              <div className="flex w-full items-end gap-[10px]">
                <h2 className="font-['Bitter'] text-[40px] font-bold leading-[48px] tracking-[0.01em] text-black sm:text-[44px] sm:leading-[54px] md:text-[50px] md:leading-[60px]">
                  {title1}
                </h2>

                <div className="mb-[7px] h-[2px] min-w-[60px] flex-1 bg-black sm:min-w-[100px] md:max-w-[200px]" />
              </div>
            </div>

            {/* Description */}
            <div className="flex w-full items-center lg:w-[866px]">
              <p className="w-full text-justify font-['Inter'] text-[16px] font-bold leading-[22px] text-[#444444] sm:text-[17px] md:text-[18px]">
                {description}
              </p>
            </div>
          </div>

          {/* =========================================================
              IMAGE + OBJECTIVE TITLE
          ========================================================= */}
          <div className="relative w-full">
            {/* Image */}
            <div className="relative h-[260px] w-full overflow-hidden sm:h-[350px] md:h-[420px] lg:h-[468px] lg:w-[72.78%]">
              <Image
                src={image}
                alt={`${title1} - ${title2}`}
                fill
                priority
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 100vw,
                  72.78vw
                "
                className="object-cover"
              />
            </div>

            {/* Objective yellow box */}
            <div
              className="
                relative
                mt-[-1px]
                flex
                min-h-[130px]
                w-full
                items-center
                bg-[#FECD2F]
                px-5
                py-5

                sm:min-h-[150px]
                sm:px-8

                md:min-h-[170px]
                md:px-[40px]

                lg:absolute
                lg:right-0
                lg:top-[248px]
                lg:mt-0
                lg:w-[47.13%]
                lg:px-[50px]
              "
            >
              <div className="flex w-full items-center">
                <div className="flex w-full items-end gap-[10px]">
                  <h2 className="whitespace-nowrap font-['Bitter'] text-[48px] font-bold leading-[58px] tracking-[0.01em] text-black sm:text-[60px] sm:leading-[72px] md:text-[70px] md:leading-[84px] lg:text-[80px] lg:leading-[96px]">
                    {title2}
                  </h2>

                  <div className="mb-[9px] hidden h-[2px] min-w-[80px] flex-1 bg-black md:block lg:max-w-[200px]" />
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              OBJECTIVES
          ========================================================= */}
          <div className="w-full bg-[rgba(1,136,55,0.1)] px-4 py-6 sm:px-5 md:px-10 lg:px-5 lg:py-[30px]">
            {objectives.length > 0 ? (
              <div className="grid grid-cols-1 gap-[10px] lg:grid-cols-3">
                {objectives.slice(0, 3).map((item) => (
                  <ObjectiveCard
                    key={item._id}
                    title={item.title}
                    description1={item.description1}
                    description2={item.description2}
                  />
                ))}

                {objectives.slice(3).map((item) => (
                  <ObjectiveCard
                    key={item._id}
                    title={item.title}
                    description1={item.description1}
                    description2={item.description2}
                    className="lg:col-span-1"
                  />
                ))}

                {/* Keep the last two cards centered like the Figma 3 + 2 layout */}
                {objectives.length > 3 && objectives.length < 6 && (
                  <div className="hidden lg:block" />
                )}
              </div>
            ) : (
              <div className="py-10 text-center">
                <p className="font-['Inter'] text-[16px] text-[#444444]">
                  No objectives available.
                </p>
              </div>
            )}
          </div>

          {/* =========================================================
              BOTTOM STATEMENT
          ========================================================= */}
          <div className="flex w-full items-center justify-center px-3 py-5 sm:px-5 md:px-[80px]">
            <p className="w-full text-center font-['Inter'] text-[16px] font-normal leading-[23px] text-[#444444] sm:text-[18px] sm:leading-[24px] md:text-[20px]">
              With a structured five-year MBBS program followed by a one-year
              internship, UAMC ensures that graduates are well-prepared to
              contribute meaningfully to the medical field and society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================================
   OBJECTIVE CARD
============================================================= */

function ObjectiveCard({ title, description1, description2 }) {
  const description = [description1, description2].filter(Boolean).join(" ");

  return (
    <article className="flex min-h-[277px] flex-col items-start p-[10px]">
      {/* Heading */}
      <div className="flex w-full flex-col items-start gap-[10px]">
        <h3 className="font-['Bitter'] text-[19px] font-bold leading-[24px] text-[#018837] sm:text-[20px]">
          {title}
        </h3>

        <div className="h-[1px] w-[70%] bg-[#444444]" />
      </div>

      {/* Description */}
      <div className="flex w-full flex-1 items-center justify-center p-[10px]">
        <p className="w-full text-justify font-['Inter'] text-[16px] font-normal leading-[22px] text-[#444444] md:text-[18px]">
          {description}
        </p>
      </div>
    </article>
  );
}
