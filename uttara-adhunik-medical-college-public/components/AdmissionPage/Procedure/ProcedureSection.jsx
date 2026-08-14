// import React from "react";

// const GREEN = "#018837";

// export default function ProduceSection() {
//   return (
//     <section
//       className="w-full"
//       style={{
//         background: "#E6F4EB",
//         padding: "80px",
//         boxSizing: "border-box",
//       }}
//     >
//       <div
//         className="mx-auto flex flex-col"
//         style={{
//           width: "100%",
//           maxWidth: "1440px",
//           gap: "50px",
//         }}
//       >
//         {/* =========================================
//             TOP CONTENT
//         ========================================== */}
//         <div
//           className="flex w-full flex-col md:flex-row"
//           style={{
//             justifyContent: "space-between",
//             alignItems: "flex-start",
//             gap: "200px",
//             minHeight: "120px",
//           }}
//         >
//           {/* =========================================
//               HOSPITAL ICON + HTML HEADING
//           ========================================== */}
//           <div
//             className="flex shrink-0 items-center"
//             style={{
//               width: "644px",
//               height: "120px",
//               gap: "20px",
//             }}
//           >
//             {/* Hospital Icon */}
//             <img
//               src="/hos.png"
//               alt=""
//               style={{
//                 width: "100px",
//                 height: "100px",
//                 objectFit: "contain",
//                 flexShrink: 0,
//               }}
//             />

//             {/* HTML Heading */}
//             <h1
//               style={{
//                 margin: 0,
//                 width: "504px",
//                 height: "120px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 fontFamily: "'Canela Trial', serif",
//                 fontStyle: "normal",
//                 fontWeight: 700,
//                 fontSize: "50px",
//                 lineHeight: "60px",
//                 letterSpacing: "0.01em",
//               }}
//             >
//               <span>
//                 <span style={{ color: GREEN }}>Admission</span>{" "}
//                 <span style={{ color: "#000000" }}>Procedure</span>
//               </span>

//               <span style={{ color: "#000000" }}>&amp; Fees</span>
//             </h1>
//           </div>

//           {/* =========================================
//               DESCRIPTION
//           ========================================== */}
//           <div
//             className="flex w-full flex-1"
//             style={{
//               width: "683px",
//               height: "170px",
//               padding: "10px",
//               justifyContent: "center",
//               alignItems: "center",
//               boxSizing: "border-box",
//             }}
//           >
//             <p
//               style={{
//                 width: "663px",
//                 height: "150px",
//                 margin: 0,
//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 400,
//                 fontSize: "20px",
//                 lineHeight: "30px",
//                 letterSpacing: "0.01em",
//                 textAlign: "left",
//                 color: "#444444",
//               }}
//             >
//               <strong style={{ fontWeight: 700 }}>
//                 Uttara Adhunik Medical College(UAMC)
//               </strong>{" "}
//               is the teaching and training hospital of the college. It is a
//               500-bedded, multidisciplinary tertiary care facility located in
//               Uttara, Dhaka. The hospital serves patients from all over the
//               country, particularly from Uttara, Tongi, Gazipur, and Savar.
//             </p>
//           </div>
//         </div>

//         {/* =========================================
//             IMAGE + ADMISSION OVERLAY
//         ========================================== */}
//         <div
//           style={{
//             width: "100%",
//             height: "488px",
//             padding: "10px",
//             boxSizing: "border-box",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             gap: "10px",
//             position: "relative",
//           }}
//         >
//           {/* =========================================
//               GROUP 8
//           ========================================== */}
//           <div
//             style={{
//               width: "100%",
//               height: "468px",
//               position: "relative",
//             }}
//           >
//             {/* =========================================
//                 HOSPITAL IMAGE
//             ========================================== */}
//             <img
//               src="/team-young-specialist-doctors-standing-corridor-hospital.jpg"
//               alt="Hospital doctors"
//               style={{
//                 position: "absolute",
//                 width: "1033.45px",
//                 height: "468px",
//                 left: "0px",
//                 top: "0px",
//                 display: "block",
//                 objectFit: "cover",
//               }}
//             />

//             {/* =========================================
//                 YELLOW ADMISSION PANEL
//             ========================================== */}
//             <div
//               style={{
//                 position: "absolute",
//                 width: "669.25px",
//                 height: "170px",
//                 left: "750.75px",
//                 top: "149px",
//                 display: "flex",
//                 flexDirection: "row",
//                 alignItems: "flex-start",
//                 padding: "20px 50px",
//                 gap: "10px",
//                 boxSizing: "border-box",
//                 background: "#FECD2F",
//               }}
//             >
//               {/* =========================================
//                   ADMISSION CONTENT
//               ========================================== */}
//               <div
//                 style={{
//                   width: "525px",
//                   height: "96px",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignItems: "flex-end",
//                   padding: 0,
//                   gap: "10px",
//                 }}
//               >
//                 {/* Admission Text */}
//                 <span
//                   style={{
//                     width: "415px",
//                     height: "96px",
//                     display: "flex",
//                     alignItems: "center",
//                     fontFamily: "'Bitter', serif",
//                     fontStyle: "normal",
//                     fontWeight: 700,
//                     fontSize: "80px",
//                     lineHeight: "96px",
//                     letterSpacing: "0.01em",
//                     color: "#000000",
//                   }}
//                 >
//                   Admission
//                 </span>

//                 {/* Figma Line 10 */}
//                 <div
//                   style={{
//                     width: "100px",
//                     height: "0px",
//                     borderTop: "2px solid #000000",
//                     flexShrink: 0,
//                   }}
//                 />
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

const GREEN = "#018837";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/admission/procedure-and-fee/about`;

async function getAdmissionAbout() {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch admission information: ${response.status}`,
      );
    }

    const data = await response.json();

    return Array.isArray(data) ? data[0] : data;
  } catch (error) {
    console.error("Admission about API error:", error);
    return null;
  }
}

export default async function ProduceSection() {
  const data = await getAdmissionAbout();

  if (!data) {
    return null;
  }

  const title = data.title || "Admission Procedure & Fees";
  const description = data.description || "";
  const image =
    data.image ||
    "/team-young-specialist-doctors-standing-corridor-hospital.jpg";

  // Keep the Figma title styling dynamic.
  const titleWords = title.trim().split(/\s+/);

  const firstWord = titleWords[0] || "Admission";
  const remainingTitle = titleWords.slice(1).join(" ");

  return (
    <section className="w-full bg-[#E6F4EB] px-4 py-12 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 sm:gap-12 lg:gap-[50px]">
        {/* =====================================================
            TOP CONTENT
        ====================================================== */}
        <div className="flex w-full flex-col items-start justify-between gap-8 lg:flex-row lg:gap-12 xl:gap-[100px] 2xl:gap-[200px]">
          {/* =================================================
              TITLE
          ================================================== */}
          <div className="flex w-full shrink-0 items-center gap-4 sm:gap-5 lg:w-[644px]">
            {/* Hospital Icon */}
            <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24 lg:h-[120px] lg:w-[120px]">
              <Image
                src="/hos.png"
                alt="Hospital"
                fill
                sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 120px"
                className="object-contain"
              />
            </div>

            {/* Dynamic Heading */}
            <h1 className="flex min-h-[100px] flex-1 items-center font-['Canela_Trial'] text-[32px] font-bold leading-[1.15] tracking-[0.01em] sm:text-[40px] sm:leading-[1.2] lg:h-[120px] lg:w-[504px] lg:flex-none lg:text-[50px]">
              <span>
                <span style={{ color: GREEN }}>{firstWord}</span>{" "}
                <span className="text-black">{remainingTitle}</span>
              </span>
            </h1>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}
          <div className="flex w-full flex-1 items-center justify-center p-0 sm:p-2.5 lg:min-h-[108px] lg:w-[683px]">
            <p className="m-0 w-full font-['Inter'] text-base font-normal leading-6 tracking-[0.01em] text-[#444444] sm:text-[17px] sm:leading-[24px] lg:w-[663px] lg:text-[18px] lg:leading-[22px] lg:text-justify">
              {description}
            </p>
          </div>
        </div>

        {/* =====================================================
            IMAGE + ADMISSION OVERLAY
        ====================================================== */}
        <div className="w-full p-0 sm:p-2.5">
          <div
            className="
              relative
              min-h-0
              w-full
              overflow-visible
              lg:h-[468px]
            "
          >
            {/* =================================================
                HOSPITAL IMAGE
            ================================================== */}
            <div
              className="
                relative
                h-[280px]
                w-full
                sm:h-[360px]
                md:h-[420px]
                lg:absolute
                lg:left-0
                lg:top-0
                lg:h-[468px]
                lg:w-[72.78%]
              "
            >
              <Image
                src={image}
                alt={title}
                fill
                priority
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 100vw,
                  73vw
                "
                className="object-cover"
              />
            </div>

            {/* =================================================
                YELLOW ADMISSION PANEL
            ================================================== */}
            <div
              className="
                relative
                mt-0
                flex
                min-h-[130px]
                w-full
                items-center
                bg-[#FECD2F]
                px-5
                py-5
                sm:min-h-[150px]
                sm:px-8
                md:px-10
                lg:absolute
                lg:right-0
                lg:top-1/2
                lg:mt-0
                lg:h-[170px]
                lg:w-[47.16%]
                lg:-translate-y-1/2
                lg:px-[50px]
                lg:py-5
              "
            >
              <div
                className="
                  flex
                  w-full
                  items-center
                  gap-4
                  sm:gap-6
                  lg:w-[525px]
                  lg:items-end
                  lg:gap-2.5
                "
              >
                {/* Admission Text */}
                <span
                  className="
                    shrink-0
                    font-['Bitter']
                    text-[42px]
                    font-bold
                    leading-none
                    tracking-[0.01em]
                    text-black
                    sm:text-[56px]
                    md:text-[68px]
                    lg:w-[415px]
                    lg:text-[80px]
                    lg:leading-[96px]
                  "
                >
                  Admission
                </span>

                {/* Line */}
                <div className="h-0 min-w-[40px] flex-1 border-t-2 border-black sm:min-w-[60px] lg:w-[100px] lg:flex-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
