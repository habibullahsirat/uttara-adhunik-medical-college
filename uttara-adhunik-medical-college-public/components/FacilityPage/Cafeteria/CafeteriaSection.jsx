// import React from "react";

// const GREEN = "#018837";

// export default function CafeteriaSection() {
//   return (
//     <section
//       className="w-full bg-[#E6F4EB]"
//       style={{
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
//             justifyContent: "center",
//             alignItems: "flex-start",
//             gap: "50px",
//             minHeight: "140px",
//           }}
//         >
//           {/* =========================================
//               LEFT SIDE
//               ICON + HTML TEXT
//           ========================================== */}
//           <div
//             className="flex w-full flex-1"
//             style={{
//               alignItems: "flex-start",
//             }}
//           >
//             <div
//               className="flex"
//               style={{
//                 width: "500px",
//                 height: "120px",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: "20px",
//               }}
//             >
//               {/* Cafeteria Icon */}
//               <img
//                 src="/hat.png"
//                 alt="Cafeteria"
//                 style={{
//                   width: "120px",
//                   height: "120px",
//                   flexShrink: 0,
//                   objectFit: "contain",
//                 }}
//               />

//               {/* =====================================
//                   CAFETERIA SERVICES HTML TEXT
//               ====================================== */}
//               <div
//                 style={{
//                   width: "300px",
//                   height: "120px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "flex-start",
//                 }}
//               >
//                 {/* Cafeteria */}
//                 <h1
//                   style={{
//                     margin: 0,
//                     fontFamily: "'Bitter', serif",
//                     fontStyle: "normal",
//                     fontWeight: 700,
//                     fontSize: "50px",
//                     lineHeight: "60px",
//                     letterSpacing: "0.01em",
//                     color: GREEN,
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   Cafeteria
//                 </h1>

//                 {/* Services */}
//                 <h1
//                   style={{
//                     margin: 0,
//                     fontFamily: "'Bitter', serif",
//                     fontStyle: "normal",
//                     fontWeight: 700,
//                     fontSize: "50px",
//                     lineHeight: "60px",
//                     letterSpacing: "0.01em",
//                     color: "#000000",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   Services
//                 </h1>
//               </div>
//             </div>
//           </div>

//           {/* =========================================
//               RIGHT SIDE
//               DESCRIPTION
//           ========================================== */}
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
//                 <strong>Nourishing Meals in a Relaxed Setting</strong>
//               </span>

//               <span style={{ display: "block" }}>
//                 Located on the 3rd floor, the{" "}
//                 <strong style={{ fontWeight: 700 }}>UAMCH</strong> cafeteria
//                 offers a variety of balanced, nutritious, and hygienic meals at
//                 subsidized prices for students, staff, and visitors.
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* =========================================
//             LARGE CAFETERIA IMAGE
//         ========================================== */}
//         <div
//           className="flex w-full"
//           style={{
//             height: "455px",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "flex-start",
//             gap: "10px",
//           }}
//         >
//           <div
//             className="w-full"
//             style={{
//               height: "457.35px",
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "flex-start",
//               gap: "10px",
//             }}
//           >
//             <img
//               src="/large.png"
//               alt="UAMCH Cafeteria"
//               style={{
//                 width: "100%",
//                 height: "457.35px",
//                 flexGrow: 1,
//                 objectFit: "cover",
//                 display: "block",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/facility/cafeteria/about`;

export default async function CafeteriaSection() {
  let cafeteria = null;

  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch cafeteria data");
    }

    const data = await response.json();
    cafeteria = data?.[0] ?? null;
  } catch (error) {
    console.error("Cafeteria API Error:", error);
  }

  if (!cafeteria) {
    return null;
  }

  const images = [cafeteria.image1, cafeteria.image2].filter(Boolean);

  return (
    <section className="w-full bg-[#E6F4EB] px-4 py-12 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 md:gap-12 lg:gap-[50px]">
        {/* ================================
            TOP CONTENT
        ================================= */}
        <div className="flex w-full flex-col items-start justify-center gap-8 md:flex-row md:gap-10 lg:gap-[50px]">
          {/* LEFT SIDE */}
          <div className="flex w-full flex-1 items-start">
            <div className="flex w-full items-center gap-4 sm:gap-5 md:max-w-[500px]">
              {/* Cafeteria Icon */}
              <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24 md:h-[120px] md:w-[120px]">
                <Image
                  src="/hat.png"
                  alt="Cafeteria"
                  fill
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 120px"
                  className="object-contain"
                />
              </div>

              {/* Dynamic Title */}
              <div className="flex min-w-0 flex-1 items-start justify-center">
                <h1 className="font-['Bitter'] text-3xl font-bold leading-tight tracking-[0.01em] text-[#018837] sm:text-4xl md:text-[42px] md:leading-[1.15] lg:text-[50px]">
                  {cafeteria.title}
                </h1>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - DYNAMIC DESCRIPTION */}
          <div className="flex w-full flex-1 items-center justify-center md:min-h-[140px]">
            <p className="w-full font-['Bitter'] text-base font-normal leading-7 tracking-[0.01em] text-[#444444] sm:text-lg md:text-xl md:leading-[30px] md:text-justify">
              {cafeteria.description}
            </p>
          </div>
        </div>

        {/* ================================
            DYNAMIC IMAGES
        ================================= */}
        {images.length > 0 && (
          <div
            className={`grid w-full gap-4 ${
              images.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {images.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative aspect-[16/9] w-full overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${cafeteria.title || "Cafeteria"} image ${index + 1}`}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
