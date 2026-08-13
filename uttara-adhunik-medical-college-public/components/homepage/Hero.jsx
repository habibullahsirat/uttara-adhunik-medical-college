// import { ArrowRight } from "lucide-react";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// export default function Hero() {
//   const slides = ["01", "02", "03", "04", "05"];

//   return (
//     <section
//       id="home"
//       className="relative flex min-h-[750px] flex-col justify-end px-6 py-[50px] text-white md:px-20"
//       style={{
//         backgroundImage: `
//           linear-gradient(
//             180deg,
//             rgba(0, 0, 0, 0.2) 0%,
//             rgba(1, 136, 55, 0.7) 100%
//           ),
//           url("/hero.jpg")
//         `,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* =========================================================
//           MAIN CONTENT WRAPPER
//       ========================================================== */}
//       <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10">
//         {/* =========================================================
//             SLIDE NAVIGATION
//         ========================================================== */}
//         <div className="flex items-center justify-between">
//           {/* Previous */}
//           <button
//             type="button"
//             className="font-display text-[13px] font-bold uppercase leading-[13px]"
//           >
//             Prev
//           </button>

//           {/* Slide numbers */}
//           <div className="flex h-7 items-center justify-center gap-4 md:gap-[37px]">
//             {/* Left divider */}
//             <span className="hidden h-px w-[125px] bg-white/30 md:block" />

//             <div className="flex items-center">
//               {slides.map((slide, index) => (
//                 <div key={slide} className="flex items-center">
//                   <button
//                     type="button"
//                     className="flex h-7 w-8 items-center justify-center px-[5px] font-display text-[18px] font-bold leading-[18px]"
//                     style={{
//                       color: index === 0 ? YELLOW : "rgba(255, 255, 255, 1)",
//                     }}
//                   >
//                     {slide}
//                   </button>

//                   {index < slides.length - 1 && (
//                     <span className="mx-2 h-[22px] w-px bg-white/30" />
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Right divider */}
//             <span className="hidden h-px w-[125px] bg-white/30 md:block" />
//           </div>

//           {/* Next */}
//           <button
//             type="button"
//             className="font-display text-[13px] font-bold uppercase leading-[13px]"
//           >
//             Next
//           </button>
//         </div>

//         {/* =========================================================
//             CONTENT PANEL
//         ========================================================== */}
//         <div
//           className="
//             mx-auto
//             flex
//             w-full
//             max-w-[1440px]
//             flex-col
//             justify-between
//             gap-12
//             bg-black/10
//             p-5
//             backdrop-blur-[2.5px]

//             md:min-h-[399px]
//             md:flex-row
//             md:items-end
//           "
//         >
//           {/* =======================================================
//               LEFT CONTENT
//           ======================================================== */}
//           <div className="flex w-full max-w-[600px] flex-col gap-7">
//             {/* Intro */}
//             <div className="flex items-center gap-2">
//               {/* Left decorative line */}
//               <span className="h-[40px] w-[2px] bg-white" />

//               <span className="font-body text-[14px] font-normal leading-[23px]">
//                 Shaping the Future of Healthcare, One Student at a Time
//               </span>
//             </div>

//             {/* Heading */}
//             <h1
//               className="
//                 max-w-[670px]
//                 font-display
//                 text-[40px]
//                 font-bold
//                 leading-[1.2]

//                 md:text-[60px]
//                 md:leading-[75px]
//               "
//             >
//               Excellence in Medical Education,{" "}
//               <span style={{ color: YELLOW }}>Innovation</span> in Healthcare
//             </h1>

//             {/* CTA */}
//             <button
//               type="button"
//               className="
//                 flex
//                 h-[48px]
//                 w-fit
//                 items-center
//                 justify-center
//                 gap-[10px]
//                 bg-white
//                 px-[26px]
//                 py-[13px]
//                 font-body
//                 text-[14px]
//                 font-medium
//                 leading-[22px]
//                 transition-opacity
//                 hover:opacity-90
//               "
//               style={{ color: GREEN }}
//             >
//               <span>View Our Program</span>

//               <ArrowRight className="h-[22px] w-[12px]" strokeWidth={2} />
//             </button>
//           </div>

//           {/* =======================================================
//               MBBS CONTENT
//           ======================================================== */}
//           <div className="flex w-full max-w-[272px] flex-col gap-[22px]">
//             {/* Title */}
//             <h3
//               className="
//                 flex
//                 h-[54px]
//                 items-center
//                 font-display
//                 text-[30px]
//                 font-bold
//                 leading-[34px]
//               "
//               style={{ color: YELLOW }}
//             >
//               MBBS Degrees
//             </h3>

//             <div className="flex w-full flex-col gap-[10px]">
//               {/* =================================================
//                   BACHELOR OF MEDICINE
//               ================================================== */}
//               <div className="flex flex-col pb-[10px]">
//                 <a
//                   href="#"
//                   className="
//                     flex
//                     h-[26px]
//                     w-full
//                     items-center
//                     justify-between
//                     font-display
//                     text-[16px]
//                     font-normal
//                     leading-[26px]
//                   "
//                 >
//                   <span>Bachelor of Medicine</span>

//                   <ArrowRight className="h-6 w-6 shrink-0" strokeWidth={2} />
//                 </a>

//                 <p
//                   className="
//                     mt-[10px]
//                     font-body
//                     text-[12px]
//                     font-normal
//                     leading-[15px]
//                     text-white/50
//                   "
//                 >
//                   Comprehensive medical education preparing students for
//                   professional healthcare practice.
//                 </p>
//               </div>

//               {/* =================================================
//                   BACHELOR OF SURGERY
//               ================================================== */}
//               <div className="flex flex-col pb-[10px]">
//                 <a
//                   href="#"
//                   className="
//                     flex
//                     h-[26px]
//                     w-full
//                     items-center
//                     justify-between
//                     font-display
//                     text-[16px]
//                     font-normal
//                     leading-[26px]
//                   "
//                 >
//                   <span>Bachelor of Surgery</span>

//                   <ArrowRight className="h-6 w-6 shrink-0" strokeWidth={2} />
//                 </a>

//                 <p
//                   className="
//                     mt-[10px]
//                     font-body
//                     text-[12px]
//                     font-normal
//                     leading-[15px]
//                     text-white/50
//                   "
//                 >
//                   Develop practical surgical knowledge and skills through
//                   hands-on clinical learning.
//                 </p>
//               </div>
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

async function getHeroData() {
  const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API;

  if (!baseUrl) {
    throw new Error("API_URL is not defined in the environment variables.");
  }

  const response = await fetch(`${baseUrl}/api/homepage/hero`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch hero data.");
  }

  const data = await response.json();

  return Array.isArray(data) ? data : [];
}

export default async function Hero() {
  const heroes = await getHeroData();

  // Use the first hero as the active hero.
  const hero = heroes[0];

  if (!hero) {
    return null;
  }

  const slides = heroes.map((_, index) => String(index + 1).padStart(2, "0"));

  return (
    <section
      id="home"
      className="relative flex min-h-[750px] flex-col justify-end overflow-hidden px-6 py-[50px] text-white md:px-20"
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}
      <Image
        src={hero.image}
        alt={hero.title || "Hero background"}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* =========================================================
          GRADIENT OVERLAY
      ========================================================== */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.2) 0%,
              rgba(1, 136, 55, 0.7) 100%
            )
          `,
        }}
      />

      {/* =========================================================
          MAIN CONTENT WRAPPER
      ========================================================== */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-10">
        {/* =========================================================
            SLIDE NAVIGATION
        ========================================================== */}
        <div className="flex items-center justify-between">
          {/* Previous */}
          <button
            type="button"
            className="font-display text-[13px] font-bold uppercase leading-[13px]"
          >
            Prev
          </button>

          {/* Slide numbers */}
          <div className="flex h-7 items-center justify-center gap-4 md:gap-[37px]">
            {/* Left divider */}
            <span className="hidden h-px w-[125px] bg-white/30 md:block" />

            <div className="flex items-center">
              {slides.map((slide, index) => (
                <div key={slide} className="flex items-center">
                  <button
                    type="button"
                    className="flex h-7 w-8 items-center justify-center px-[5px] font-display text-[18px] font-bold leading-[18px]"
                    style={{
                      color: index === 0 ? YELLOW : "rgba(255, 255, 255, 1)",
                    }}
                  >
                    {slide}
                  </button>

                  {index < slides.length - 1 && (
                    <span className="mx-2 h-[22px] w-px bg-white/30" />
                  )}
                </div>
              ))}
            </div>

            {/* Right divider */}
            <span className="hidden h-px w-[125px] bg-white/30 md:block" />
          </div>

          {/* Next */}
          <button
            type="button"
            className="font-display text-[13px] font-bold uppercase leading-[13px]"
          >
            Next
          </button>
        </div>

        {/* =========================================================
            CONTENT PANEL
        ========================================================== */}
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1440px]
            flex-col
            justify-between
            gap-12
            bg-black/10
            p-5
            backdrop-blur-[2.5px]

            md:min-h-[399px]
            md:flex-row
            md:items-end
          "
        >
          {/* =======================================================
              LEFT CONTENT
          ======================================================== */}
          <div className="flex w-full max-w-[600px] flex-col gap-7">
            {/* Intro */}
            <div className="flex items-center gap-2">
              {/* Left decorative line */}
              <span className="h-[40px] w-[2px] bg-white" />

              <span className="font-body text-[14px] font-normal leading-[23px]">
                {hero.subtitle}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-[670px]
                font-display
                text-[40px]
                font-bold
                leading-[1.2]

                md:text-[60px]
                md:leading-[75px]
              "
            >
              {hero.title}
            </h1>

            {/* CTA */}
            <a
              href={hero.cta?.href || "#"}
              className="
                flex
                h-[48px]
                w-fit
                items-center
                justify-center
                gap-[10px]
                bg-white
                px-[26px]
                py-[13px]
                font-body
                text-[14px]
                font-medium
                leading-[22px]
                transition-opacity
                hover:opacity-90
              "
              style={{ color: GREEN }}
            >
              <span>{hero.cta?.text || "View Our Program"}</span>

              <ArrowRight className="h-[22px] w-[12px]" strokeWidth={2} />
            </a>
          </div>

          {/* =======================================================
              PROGRAM CONTENT
          ======================================================== */}
          <div className="flex w-full max-w-[272px] flex-col gap-[22px]">
            {/* Title */}
            <h3
              className="
                flex
                h-[54px]
                items-center
                font-display
                text-[30px]
                font-bold
                leading-[34px]
              "
              style={{ color: YELLOW }}
            >
              {hero.programHeading}
            </h3>

            <div className="flex w-full flex-col gap-[10px]">
              {hero.programs?.map((program, index) => (
                <div
                  key={`${program.programTitle}-${index}`}
                  className="flex flex-col pb-[10px]"
                >
                  <a
                    href={program.href || "#"}
                    className="
                      flex
                      h-[26px]
                      w-full
                      items-center
                      justify-between
                      font-display
                      text-[16px]
                      font-normal
                      leading-[26px]
                    "
                  >
                    <span>{program.programTitle}</span>

                    <ArrowRight className="h-6 w-6 shrink-0" strokeWidth={2} />
                  </a>

                  <p
                    className="
                      mt-[10px]
                      font-body
                      text-[12px]
                      font-normal
                      leading-[15px]
                      text-white/50
                    "
                  >
                    {program.programDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
