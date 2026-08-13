// export default function Education() {
//   return (
//     <section className="w-full bg-[#E6F4EB]">
//       <div
//         className="
//           w-full
//           max-w-[1600px]
//           mx-auto
//           min-h-[805px]
//           flex
//           flex-col
//           items-center
//           gap-[50px]
//           px-[80px]
//           py-[80px]
//           box-border
//         "
//       >
//         {/* ================= TOP CONTENT ================= */}
//         <div
//           className="
//             w-full
//             max-w-[1440px]
//             h-[140px]
//             flex
//             flex-row
//             justify-center
//             items-start
//             gap-[50px]
//           "
//         >
//           {/* ================= LEFT SIDE ================= */}
//           <div
//             className="
//               w-[707px]
//               h-[120px]
//               flex
//               items-start
//               flex-1
//             "
//           >
//             {/* ICON + TITLE */}
//             <div
//               className="
//                 w-[418px]
//                 h-[120px]
//                 flex
//                 flex-row
//                 items-center
//                 gap-[20px]
//               "
//             >
//               {/* Medical Education Icon */}
//               <img
//                 src="/bag.png"
//                 alt=""
//                 className="
//                   w-[120px]
//                   h-[120px]
//                   object-contain
//                   shrink-0
//                 "
//               />

//               {/* TEXT */}
//               <div
//                 className="
//                   w-[278px]
//                   h-[120px]
//                   flex
//                   flex-col
//                   justify-center
//                   items-start
//                 "
//               >
//                 {/* Medical Education */}
//                 <h1
//                   className="
//                     m-0
//                     whitespace-nowrap
//                     text-[50px]
//                     leading-[60px]
//                     font-bold
//                     tracking-[0.01em]
//                     text-[#018837]
//                   "
//                   style={{
//                     fontFamily: "'Bitter', serif",
//                   }}
//                 >
//                   Medical Education
//                 </h1>

//                 {/* Unit (MEU) */}
//                 <h1
//                   className="
//                     m-0
//                     whitespace-nowrap
//                     text-[50px]
//                     leading-[60px]
//                     font-bold
//                     tracking-[0.01em]
//                     text-[#018837]
//                   "
//                   style={{
//                     fontFamily: "'Bitter', serif",
//                   }}
//                 >
//                   Unit (MEU)
//                 </h1>
//               </div>
//             </div>
//           </div>

//           {/* ================= DESCRIPTION ================= */}

//           <div
//             className="flex w-full flex-1"
//             style={{
//               width: "683px",
//               height: "140px",
//               padding: "10px",
//               justifyContent: "center",
//               alignItems: "center",
//               boxSizing: "border-box",
//             }}
//           >
//             <p
//               style={{
//                 width: "663px",
//                 height: "120px",
//                 margin: 0,
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "flex-start",
//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 400,
//                 fontSize: "20px",
//                 lineHeight: "30px",
//                 letterSpacing: "0.01em",
//                 textAlign: "justify",
//                 color: "#444444",
//               }}
//             >
//               <span style={{ display: "block", whiteSpace: "nowrap" }}>
//                 <strong>
//                   Enhancing Learning Through Technology &amp; Collaboration
//                 </strong>
//               </span>

//               <span style={{ display: "block" }}>
//                 At The Medical Education Unit (MEU) is a vital academic support
//                 center of the college, situated adjacent to the library. It is
//                 designed to enhance the quality of medical education by offering
//                 digital resources, training facilities, and collaborative
//                 opportunities.
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* ================= LARGE IMAGE ================= */}
//         <div
//           className="
//             w-full
//             max-w-[1440px]
//             h-[455px]
//             flex
//             flex-col
//             justify-center
//             items-start
//             gap-[10px]
//           "
//         >
//           <div
//             className="
//               w-full
//               h-[457.35px]
//               flex
//               flex-row
//               items-start
//               gap-[10px]
//             "
//           >
//             <img
//               src="/assets/eb3eef03-816e-45c5-8b6f-695bc5f3b6eb.jpg"
//               alt="Medical Education Unit"
//               className="
//                 w-full
//                 h-[457.35px]
//                 object-cover
//                 flex-1
//               "
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";

async function getEducationData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_API}/api/facility/meu/about`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Medical Education Unit data");
  }

  const data = await response.json();

  return data?.[0] ?? null;
}

export default async function Education() {
  const education = await getEducationData();

  if (!education) {
    return null;
  }

  return (
    <section className="w-full bg-[#E6F4EB]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:gap-[50px] lg:px-20 lg:py-20">
        {/* TOP CONTENT */}
        <div className="flex w-full max-w-[1440px] flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-[50px]">
          {/* LEFT SIDE */}
          <div className="flex w-full flex-1 items-center lg:h-[140px] lg:items-start">
            <div className="flex w-full items-center gap-4 sm:gap-5 lg:w-auto">
              {/* ICON */}
              <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24 lg:h-[120px] lg:w-[120px]">
                <Image
                  src="/bag.png"
                  alt="Medical Education Unit"
                  fill
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 120px"
                  className="object-contain"
                />
              </div>

              {/* TITLE */}
              <h1
                className="text-3xl font-bold leading-tight tracking-[0.01em] text-[#018837] sm:text-4xl md:text-5xl lg:text-[50px] lg:leading-[60px]"
                style={{
                  fontFamily: "'Bitter', serif",
                }}
              >
                {education.title}
              </h1>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="flex w-full flex-1 items-center justify-center lg:min-h-[140px]">
            <p
              className="w-full text-justify text-base font-normal leading-7 tracking-[0.01em] text-[#444444] sm:text-lg lg:text-[20px] lg:leading-[30px]"
              style={{
                fontFamily: "'Bitter', serif",
              }}
            >
              {education.description}
            </p>
          </div>
        </div>

        {/* LARGE IMAGE */}
        <div className="w-full max-w-[1440px]">
          <div className="relative aspect-[1440/457] w-full overflow-hidden">
            <Image
              src={education.image}
              alt={education.title}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1440px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
