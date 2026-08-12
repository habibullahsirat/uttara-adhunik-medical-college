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

"use client";

const GREEN = "#018837";

export default function About() {
  return (
    <section className="flex w-full flex-col items-center bg-[#E6F4EB] px-5 py-[60px] sm:px-8 sm:py-[70px] md:px-10 md:py-[80px]">
      {/* =========================
          Header Section
      ========================== */}

      <div className="flex w-full max-w-[1440px] flex-col items-start gap-[50px]">
        {/* =========================
            Title + Description
        ========================== */}

        <div className="flex w-full flex-col gap-[50px]">
          {/* Title + Icon + Description */}
          <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[100px] xl:gap-[200px]">
            {/* Title + Icon */}

            <div className="flex h-[120px] w-full shrink-0 items-center justify-center gap-[20px] lg:w-[382px]">
              {/* Hospital Icon */}

              <div className="h-[120px] w-[120px] shrink-0">
                <img
                  src="/hos.png"
                  alt="Hospital"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* HTML Heading */}

              <div className="flex h-[120px] w-[242px] shrink-0 items-center">
                <h1
                  className="flex flex-col text-left font-bold leading-[1.05] tracking-[0.01em]"
                  style={{
                    fontFamily: "'Bitter', serif",
                  }}
                >
                  <span className="text-[42px] text-black sm:text-[46px]">
                    About the
                  </span>

                  <span
                    className="text-[42px] sm:text-[46px]"
                    style={{ color: GREEN }}
                  >
                    Hospital
                  </span>
                </h1>
              </div>
            </div>

            {/* Description */}

            {/* <div
              className="flex w-full flex-1"
              style={{
                width: "683px",
                height: "140px",
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
              }}
            >
              <p
                style={{
                  width: "663px",
                  height: "120px",
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  fontFamily: "'Bitter', serif",
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "20px",
                  lineHeight: "30px",
                  letterSpacing: "0.01em",
                  textAlign: "justify",
                  color: "#444444",
                }}
              >
                <span style={{ display: "block" }}>
                  <strong>
                    Uttara Adhunik Medical College Hospital (UAMCH)
                  </strong>{" "}
                  is the teaching and training hospital of the college. It is a
                  500-bedded, multidisciplinary tertiary care facility located
                  in Uttara, Dhaka. The hospital serves patients from all over
                  the country, particularly from Uttara, Tongi, Gazipur, and
                  Savar.
                </span>
              </p>
            </div>
            ```jsx
{/* Description */}

            <div className="flex w-full flex-1 items-center lg:max-w-[683px]">
              <p
                className="m-0 w-full px-[10px] text-justify text-[18px] leading-[30px] tracking-[0.01em] text-[#444444] sm:text-[19px] lg:text-[20px]"
                style={{
                  fontFamily: "'Bitter', serif",
                  fontStyle: "normal",
                  fontWeight: 400,
                  boxSizing: "border-box",
                }}
              >
                <strong>Uttara Adhunik Medical College Hospital (UAMCH)</strong>{" "}
                is the teaching and training hospital of the college. It is a
                500-bedded, multidisciplinary tertiary care facility located in
                Uttara, Dhaka. The hospital serves patients from all over the
                country, particularly from Uttara, Tongi, Gazipur, and Savar.
              </p>
            </div>
          </div>{" "}
          */
          {/* =========================
              Hospital Image
          ========================== */}
          <div className="flex w-full flex-col items-start gap-[10px] px-[10px]">
            <div className="h-[300px] w-full overflow-hidden rounded-sm sm:h-[400px] md:h-[450px] lg:h-[532.5px]">
              <img
                src="/assets/2f49a432-a6a2-458a-9c3e-7b83a7bffcf2.jpg"
                alt="Uttara Adhunik Medical College Hospital"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* =========================
            Hospital Statistics
        ========================== */}

        <div className="mx-auto flex w-full max-w-[971px] flex-col items-center gap-[20px]">
          {/* Statistics Row */}

          <div className="flex h-[105px] w-full items-center justify-center gap-[40px]">
            {/* Total Land Area */}

            <div className="flex h-[105px] w-[229px] flex-col items-center text-center">
              <div
                className="flex h-[54px] w-full items-center justify-center whitespace-nowrap text-[45px] font-bold leading-[54px] tracking-[0.01em]"
                style={{
                  fontFamily: "'Bitter', serif",
                  color: GREEN,
                }}
              >
                87,260.035
              </div>

              <div
                className="flex h-[22px] w-full items-center justify-center whitespace-nowrap text-[16px] font-bold leading-[22px] text-[#444444]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                sq. ft. (5 Bighas)
              </div>

              <div
                className="flex h-[22px] w-full items-center justify-center whitespace-nowrap text-[18px] font-bold leading-[22px] text-black"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Total Land Area
              </div>
            </div>

            {/* Divider */}

            <div className="h-[62px] w-px shrink-0 bg-black" />

            {/* Main Building */}

            <div className="flex h-[105px] w-[178px] flex-col items-center text-center">
              <div
                className="flex h-[54px] w-full items-center justify-center whitespace-nowrap text-[45px] font-bold leading-[54px] tracking-[0.01em]"
                style={{
                  fontFamily: "'Bitter', serif",
                  color: GREEN,
                }}
              >
                17
              </div>

              <div
                className="flex h-[22px] w-full items-center justify-center whitespace-nowrap text-[16px] font-bold leading-[22px] text-[#444444]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Storied
              </div>

              <div
                className="flex h-[22px] w-full items-center justify-center whitespace-nowrap text-[18px] font-bold leading-[22px] text-black"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Main Building
              </div>
            </div>
          </div>

          {/* Additional Structures */}

          <div className="flex h-[42px] w-full items-center justify-center px-[10px] py-[10px]">
            <p
              className="flex h-[22px] w-[951px] items-center justify-center whitespace-nowrap text-center text-[18px] leading-[22px] text-[#444444]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <strong className="font-bold">Additional Structures:</strong>{" "}
              Separate buildings for Radiology, Orthopedics, ENT, Dental &amp;
              Emergency Departments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
