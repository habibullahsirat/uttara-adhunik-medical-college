// "use client";

// const GREEN = "#018837";

// const HOSPITAL_ICON = "/assets/hospital-icon.svg";
// const ABOUT_HOSPITAL_IMAGE = "/assets/about-the-hospital.png";

// export default function About() {
//   return (
//     <section className="flex w-full flex-col items-center bg-[#E6F4EB] px-5 py-[60px] sm:px-8 sm:py-[70px] md:px-10 md:py-[80px]">
//       {/* =========================
//           Header Section
//       ========================== */}

//       <div className="flex w-full max-w-[1440px] flex-col items-start gap-[50px]">
//         {/* =========================
//             Title + Description
//         ========================== */}

//         <div className="flex w-full flex-col gap-[50px]">
//           {/* Title + Icon + Description */}
//           <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[100px] xl:gap-[200px]">
//             {/* Title + Icon */}
//             <div className="flex h-[120px] w-full shrink-0 items-center justify-center gap-[20px] lg:w-[382px]">
//               {/* Hospital Icon */}
//               <div className="h-[120px] w-[120px] shrink-0">
//                 <img
//                   src="/hos.png"
//                   alt=""
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               {/* About Hospital Image */}
//               <div className="flex h-[120px] w-[242px] shrink-0 items-center justify-center">
//                 <img
//                   src="/ath.png"
//                   alt="About the Hospital"
//                   className="h-full w-full object-contain"
//                 />
//               </div>
//             </div>

//             {/* Description */}
//             <div className="flex w-full max-w-[683px] items-center justify-center px-[10px] py-[10px] lg:h-[108px]">
//               <p
//                 className="w-full max-w-[663px] text-justify text-[15px] font-bold leading-[22px] tracking-[0.01em] text-[#444444] sm:text-[16px] md:text-[18px]"
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                 }}
//               >
//                 Uttara Adhunik Medical College Hospital (UAMCH) is the teaching
//                 and training hospital of the college. It is a 500-bedded,
//                 multidisciplinary tertiary care facility located in Uttara,
//                 Dhaka. The hospital serves patients from all over the country,
//                 particularly from Uttara, Tongi, Gazipur, and Savar.
//               </p>
//             </div>
//           </div>

//           {/* =========================
//               Hospital Image
//           ========================== */}

//           <div className="flex w-full flex-col items-start gap-[10px] px-[10px]">
//             <div className="h-[300px] w-full overflow-hidden rounded-sm sm:h-[400px] md:h-[450px] lg:h-[532.5px]">
//               <img
//                 src="/assets/2f49a432-a6a2-458a-9c3e-7b83a7bffcf2.jpg"
//                 alt="Uttara Adhunik Medical College Hospital"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* =========================
//             Hospital Statistics
//         ========================== */}
//         {/* =========================
//     Hospital Statistics
// ========================== */}

//         {/* =========================
//     Hospital Statistics
// ========================== */}

//         <div className="mx-auto flex w-full max-w-[971px] flex-col items-center gap-[20px]">
//           {/* Statistics Row */}
//           <div className="flex h-[105px] w-full items-center justify-center gap-[40px]">
//             {/* Total Land Area */}
//             <div className="flex h-[105px] w-[229px] flex-col items-center text-center">
//               {/* Main Number */}
//               <div
//                 className="flex h-[54px] w-full items-center justify-center whitespace-nowrap text-[45px] font-bold leading-[54px] tracking-[0.01em] text-[#018837]"
//                 style={{
//                   fontFamily: "'Bitter', serif",
//                 }}
//               >
//                 87,260.035
//               </div>

//               {/* Subtitle */}
//               <div
//                 className="flex h-[22px] w-full items-center justify-center whitespace-nowrap text-[16px] font-bold leading-[22px] text-[#444444]"
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                 }}
//               >
//                 sq. ft. (5 Bighas)
//               </div>

//               {/* Label */}
//               <div
//                 className="flex h-[22px] w-full items-center justify-center whitespace-nowrap text-[18px] font-bold leading-[22px] text-black"
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                 }}
//               >
//                 Total Land Area
//               </div>
//             </div>

//             {/* Divider */}
//             <div className="h-[62px] w-px shrink-0 bg-black" />

//             {/* Main Building */}
//             <div className="flex h-[105px] w-[178px] flex-col items-center text-center">
//               {/* Main Number */}
//               <div
//                 className="flex h-[54px] w-full items-center justify-center whitespace-nowrap text-[45px] font-bold leading-[54px] tracking-[0.01em] text-[#018837]"
//                 style={{
//                   fontFamily: "'Bitter', serif",
//                 }}
//               >
//                 17
//               </div>

//               {/* Subtitle */}
//               <div
//                 className="flex h-[22px] w-full items-center justify-center whitespace-nowrap text-[16px] font-bold leading-[22px] text-[#444444]"
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                 }}
//               >
//                 Storied
//               </div>

//               {/* Label */}
//               <div
//                 className="flex h-[22px] w-full items-center justify-center whitespace-nowrap text-[18px] font-bold leading-[22px] text-black"
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                 }}
//               >
//                 Main Building
//               </div>
//             </div>
//           </div>

//           {/* Additional Structures */}
//           <div className="flex h-[42px] w-full items-center justify-center px-[10px] py-[10px]">
//             <p
//               className="flex h-[22px] w-[951px] items-center justify-center whitespace-nowrap text-center text-[18px] font-bold leading-[22px] text-[#444444]"
//               style={{
//                 fontFamily: "'Inter', sans-serif",
//               }}
//             >
//               Additional Structures: Separate buildings for Radiology,
//               Orthopedics, ENT, Dental &amp; Emergency Departments
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// const GREEN = "#018837";

// export default function About() {
//   return (
//     <section className="flex w-full flex-col items-center bg-[#E6F4EB] px-5 py-[60px] sm:px-8 sm:py-[70px] md:px-10 md:py-[80px]">
//       {/* =========================
//           Header Section
//       ========================== */}

//       <div className="flex w-full max-w-[1440px] flex-col items-start gap-[50px]">
//         {/* =========================
//             Title + Description
//         ========================== */}

//         <div className="flex w-full flex-col gap-[50px]">
//           {/* Title + Icon + Description */}
//           <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[100px] xl:gap-[200px]">
//             {/* Title + Icon */}

//             <div className="flex h-[120px] w-full shrink-0 items-center justify-center gap-[20px] lg:w-[382px]">
//               {/* Hospital Icon */}

//               <div className="h-[120px] w-[120px] shrink-0">
//                 <img
//                   src="/hos.png"
//                   alt="Hospital"
//                   className="h-full w-full object-contain"
//                 />
//               </div>

//               {/* HTML Heading */}

//               <div className="flex h-[120px] w-[242px] shrink-0 items-center">
//                 <h1
//                   className="flex flex-col text-left font-bold leading-[1.05] tracking-[0.01em]"
//                   style={{
//                     fontFamily: "'Bitter', serif",
//                   }}
//                 >
//                   <span className="text-[42px] text-black sm:text-[46px]">
//                     About the
//                   </span>

//                   <span
//                     className="text-[42px] sm:text-[46px]"
//                     style={{ color: GREEN }}
//                   >
//                     Hospital
//                   </span>
//                 </h1>
//               </div>
//             </div>

//             {/* Description */}

//             {/* <div
//               className="flex w-full flex-1"
//               style={{
//                 width: "683px",
//                 height: "140px",
//                 padding: "10px",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 boxSizing: "border-box",
//               }}
//             >
//               <p
//                 style={{
//                   width: "663px",
//                   height: "120px",
//                   margin: 0,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "flex-start",
//                   fontFamily: "'Bitter', serif",
//                   fontStyle: "normal",
//                   fontWeight: 400,
//                   fontSize: "20px",
//                   lineHeight: "30px",
//                   letterSpacing: "0.01em",
//                   textAlign: "justify",
//                   color: "#444444",
//                 }}
//               >
//                 <span style={{ display: "block" }}>
//                   <strong>
//                     Uttara Adhunik Medical College Hospital (UAMCH)
//                   </strong>{" "}
//                   is the teaching and training hospital of the college. It is a
//                   500-bedded, multidisciplinary tertiary care facility located
//                   in Uttara, Dhaka. The hospital serves patients from all over
//                   the country, particularly from Uttara, Tongi, Gazipur, and
//                   Savar.
//                 </span>
//               </p>
//             </div>
//             ```jsx
// {/* Description */}

//             <div className="flex w-full flex-1 items-center lg:max-w-[683px]">
//               <p
//                 className="m-0 w-full px-[10px] text-justify text-[18px] leading-[30px] tracking-[0.01em] text-[#444444] sm:text-[19px] lg:text-[20px]"
//                 style={{
//                   fontFamily: "'Bitter', serif",
//                   fontStyle: "normal",
//                   fontWeight: 400,
//                   boxSizing: "border-box",
//                 }}
//               >
//                 <strong>Uttara Adhunik Medical College Hospital (UAMCH)</strong>{" "}
//                 is the teaching and training hospital of the college. It is a
//                 500-bedded, multidisciplinary tertiary care facility located in
//                 Uttara, Dhaka. The hospital serves patients from all over the
//                 country, particularly from Uttara, Tongi, Gazipur, and Savar.
//               </p>
//             </div>
//           </div>{" "}
//           */
//           {/* =========================
//               Hospital Image
//           ========================== */}
//           <div className="flex w-full flex-col items-start gap-[10px] px-[10px]">
//             <div className="h-[300px] w-full overflow-hidden rounded-sm sm:h-[400px] md:h-[450px] lg:h-[532.5px]">
//               <img
//                 src="/assets/2f49a432-a6a2-458a-9c3e-7b83a7bffcf2.jpg"
//                 alt="Uttara Adhunik Medical College Hospital"
//                 className="h-full w-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* =========================
//             Hospital Statistics
//         ========================== */}

//         <div className="mx-auto flex w-full max-w-[971px] flex-col items-center gap-[20px]">
//           {/* Statistics Row */}

//           <div className="flex h-[105px] w-full items-center justify-center gap-[40px]">
//             {/* Total Land Area */}

//             <div className="flex h-[105px] w-[229px] flex-col items-center text-center">
//               <div
//                 className="flex h-[54px] w-full items-center justify-center whitespace-nowrap text-[45px] font-bold leading-[54px] tracking-[0.01em]"
//                 style={{
//                   fontFamily: "'Bitter', serif",
//                   color: GREEN,
//                 }}
//               >
//                 87,260.035
//               </div>

//               <div
//                 className="flex h-[22px] w-full items-center justify-center whitespace-nowrap text-[16px] font-bold leading-[22px] text-[#444444]"
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                 }}
//               >
//                 sq. ft. (5 Bighas)
//               </div>

//               <div
//                 className="flex h-[22px] w-full items-center justify-center whitespace-nowrap text-[18px] font-bold leading-[22px] text-black"
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                 }}
//               >
//                 Total Land Area
//               </div>
//             </div>

//             {/* Divider */}

//             <div className="h-[62px] w-px shrink-0 bg-black" />

//             {/* Main Building */}

//             <div className="flex h-[105px] w-[178px] flex-col items-center text-center">
//               <div
//                 className="flex h-[54px] w-full items-center justify-center whitespace-nowrap text-[45px] font-bold leading-[54px] tracking-[0.01em]"
//                 style={{
//                   fontFamily: "'Bitter', serif",
//                   color: GREEN,
//                 }}
//               >
//                 17
//               </div>

//               <div
//                 className="flex h-[22px] w-full items-center justify-center whitespace-nowrap text-[16px] font-bold leading-[22px] text-[#444444]"
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                 }}
//               >
//                 Storied
//               </div>

//               <div
//                 className="flex h-[22px] w-full items-center justify-center whitespace-nowrap text-[18px] font-bold leading-[22px] text-black"
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                 }}
//               >
//                 Main Building
//               </div>
//             </div>
//           </div>

//           {/* Additional Structures */}

//           <div className="flex h-[42px] w-full items-center justify-center px-[10px] py-[10px]">
//             <p
//               className="flex h-[22px] w-[951px] items-center justify-center whitespace-nowrap text-center text-[18px] leading-[22px] text-[#444444]"
//               style={{
//                 fontFamily: "'Inter', sans-serif",
//               }}
//             >
//               <strong className="font-bold">Additional Structures:</strong>{" "}
//               Separate buildings for Radiology, Orthopedics, ENT, Dental &amp;
//               Emergency Departments
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";

const GREEN = "#018837";

async function getAboutHospital() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_ADMIN_API}/api/facility/hospital/about-hospital`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch hospital information");
    }

    const data = await response.json();

    return data?.[0] ?? null;
  } catch (error) {
    console.error("About Hospital API Error:", error);
    return null;
  }
}

/**
 * Converts:
 * "87,260.035 sq. ft. (5 Bighas) Total Land Area"
 *
 * into:
 * {
 *   value: "87,260.035",
 *   unit: "sq. ft. (5 Bighas)",
 *   label: "Total Land Area"
 * }
 */
function parseLandArea(value = "") {
  const match = value.match(/^([\d,.]+)\s+(.*?)\s+(Total Land Area)$/i);

  if (!match) {
    return {
      value,
      unit: "",
      label: "",
    };
  }

  return {
    value: match[1],
    unit: match[2],
    label: match[3],
  };
}

/**
 * Converts:
 * "17 Storied Main Building"
 *
 * into:
 * {
 *   value: "17",
 *   unit: "Storied",
 *   label: "Main Building"
 * }
 */
function parseBuilding(value = "") {
  const match = value.match(/^(\d+)\s+(Storied)\s+(Main Building)$/i);

  if (!match) {
    return {
      value,
      unit: "",
      label: "",
    };
  }

  return {
    value: match[1],
    unit: match[2],
    label: match[3],
  };
}

export default async function About() {
  const hospital = await getAboutHospital();

  if (!hospital) {
    return null;
  }

  const landArea = parseLandArea(hospital.data1);
  const building = parseBuilding(hospital.data2);

  return (
    <section className="w-full bg-[#E6F4EB] px-5 py-[60px] sm:px-8 sm:py-[70px] md:px-10 md:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[50px]">
        {/* =========================================
            Header
        ========================================== */}
        <div className="flex w-full flex-col gap-[50px]">
          <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[60px] xl:gap-[200px]">
            {/* Title + Hospital Icon */}
            <div className="flex w-full shrink-0 items-center justify-center gap-4 sm:gap-5 lg:w-[382px] lg:justify-start">
              <div className="relative h-[90px] w-[90px] shrink-0 sm:h-[100px] sm:w-[100px] md:h-[120px] md:w-[120px]">
                <Image
                  src="/hos.png"
                  alt="Hospital"
                  fill
                  sizes="(max-width: 640px) 90px, (max-width: 768px) 100px, 120px"
                  className="object-contain"
                />
              </div>

              <div className="flex min-h-[90px] items-center sm:min-h-[100px] md:min-h-[120px]">
                <h1
                  className="flex flex-col text-left text-[36px] font-bold leading-[1.05] tracking-[0.01em] sm:text-[42px] md:text-[46px] lg:text-[50px]"
                  style={{ fontFamily: "'Bitter', serif" }}
                >
                  <span className="text-black">About the</span>
                  <span style={{ color: GREEN }}>Hospital</span>
                </h1>
              </div>
            </div>

            {/* Description */}
            <div className="flex w-full flex-1 items-center lg:max-w-[683px]">
              <p
                className="m-0 w-full px-0 text-justify text-[16px] leading-[26px] tracking-[0.01em] text-[#444444] sm:px-[10px] sm:text-[18px] sm:leading-[28px] lg:text-[18px] lg:leading-[22px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                }}
              >
                {hospital.description}
              </p>
            </div>
          </div>

          {/* =========================================
              Hospital Image
          ========================================== */}
          <div className="w-full px-0 sm:px-[10px]">
            <div className="relative aspect-[1420/532.5] w-full overflow-hidden rounded-sm">
              <Image
                src={hospital.image}
                alt="Uttara Adhunik Medical College Hospital"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1420px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* =========================================
            Hospital Statistics
        ========================================== */}
        <div className="mx-auto flex w-full max-w-[971px] flex-col items-center gap-5">
          {/* Statistics */}
          <div className="flex w-full flex-col items-center justify-center gap-6 sm:flex-row sm:gap-6 md:gap-10">
            {/* Total Land Area */}
            <div className="flex min-h-[105px] w-full max-w-[229px] flex-col items-center text-center">
              <div
                className="flex min-h-[54px] w-full items-center justify-center whitespace-nowrap text-[32px] font-bold leading-[54px] tracking-[0.01em] sm:text-[38px] md:text-[45px]"
                style={{
                  fontFamily: "'Bitter', serif",
                  color: GREEN,
                }}
              >
                {landArea.value}
              </div>

              {landArea.unit && (
                <div
                  className="flex min-h-[22px] w-full items-center justify-center text-[14px] font-bold leading-[22px] text-[#444444] sm:text-[16px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {landArea.unit}
                </div>
              )}

              <div
                className="flex min-h-[22px] w-full items-center justify-center text-[16px] font-bold leading-[22px] text-black sm:text-[18px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {landArea.label}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden h-[62px] w-px shrink-0 bg-black sm:block" />

            {/* Main Building */}
            <div className="flex min-h-[105px] w-full max-w-[178px] flex-col items-center text-center">
              <div
                className="flex min-h-[54px] w-full items-center justify-center whitespace-nowrap text-[38px] font-bold leading-[54px] tracking-[0.01em] sm:text-[42px] md:text-[45px]"
                style={{
                  fontFamily: "'Bitter', serif",
                  color: GREEN,
                }}
              >
                {building.value}
              </div>

              {building.unit && (
                <div
                  className="flex min-h-[22px] w-full items-center justify-center text-[14px] font-bold leading-[22px] text-[#444444] sm:text-[16px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {building.unit}
                </div>
              )}

              <div
                className="flex min-h-[22px] w-full items-center justify-center text-[16px] font-bold leading-[22px] text-black sm:text-[18px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {building.label}
              </div>
            </div>
          </div>

          {/* =========================================
              Additional Structures
          ========================================== */}
          <div className="flex w-full items-center justify-center px-0 sm:px-[10px]">
            <p
              className="m-0 w-full text-center text-[14px] leading-[22px] text-[#444444] sm:text-[16px] md:text-[18px]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {(() => {
                const text = hospital.data3 || "";
                const [title, ...rest] = text.split(":");

                return (
                  <>
                    <strong className="font-bold">{title}:</strong>{" "}
                    {rest.join(":").trim()}
                  </>
                );
              })()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
