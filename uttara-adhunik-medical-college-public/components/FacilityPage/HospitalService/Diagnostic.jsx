// "use client";

// const GREEN = "#018837";

// const LEFT_SERVICES = [
//   "Modern Diagnostic Facilities",
//   "CT Scan",
//   "Ultrasound",
//   "Digital X-Ray",
// ];

// const RIGHT_SERVICES = [
//   "Reference Pathology & Laboratory",
//   "Cardiac Non-Invasive Lab",
//   "Gastroenterology: Video Endoscopy & Colonoscopy",
// ];

// export default function Diagnostic() {
//   const ServiceItem = ({ title }) => {
//     return (
//       <div
//         className="flex min-h-[76px] w-full items-center justify-between gap-4 px-5 py-5"
//         style={{
//           background: "rgba(1, 136, 55, 0.1)",
//         }}
//       >
//         <span
//           className="text-[16px] font-bold leading-[30px] tracking-[0.01em] text-[#444444] md:text-[18px]"
//           style={{
//             fontFamily: "'Inter', sans-serif",
//           }}
//         >
//           {title}
//         </span>

//         {/* Arrow Button */}
//         <button
//           type="button"
//           aria-label={`View ${title}`}
//           className="group flex h-[36.4px] w-[36.4px] shrink-0 items-center justify-center rounded-[2px] bg-white transition-all duration-200 hover:bg-[#018837]"
//         >
//           <svg
//             width="25"
//             height="25"
//             viewBox="0 0 25 25"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M5.2 12.48H19.76"
//               stroke={GREEN}
//               strokeWidth="2.08"
//               strokeLinecap="round"
//               className="group-hover:stroke-white"
//             />

//             <path
//               d="M12.48 5.2L19.76 12.48L12.48 19.76"
//               stroke={GREEN}
//               strokeWidth="2.08"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="group-hover:stroke-white"
//             />
//           </svg>
//         </button>
//       </div>
//     );
//   };

//   return (
//     <>
//       {/* =========================================
//           DIAGNOSTIC & IMAGING SERVICES
//       ========================================== */}

//       <section className="w-full bg-white px-6 py-16 md:px-20 md:py-20">
//         <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[30px]">
//           {/* =========================
//               Section Heading
//           ========================== */}

//           <div className="flex min-h-[80px] w-full items-center px-[10px]">
//             <h2
//               className="text-[36px] font-medium leading-[45px] tracking-[0.01em] text-black md:text-[50px] md:leading-[60px]"
//               style={{
//                 fontFamily: "'Bitter', serif",
//               }}
//             >
//               Diagnostic &amp; Imaging Services
//             </h2>
//           </div>

//           {/* =========================
//               Services
//           ========================== */}

//           <div className="flex w-full flex-col items-start gap-[30px] lg:flex-row">
//             {/* Left Column */}

//             <div className="flex w-full flex-col gap-[10px] lg:w-1/2">
//               {LEFT_SERVICES.map((service) => (
//                 <ServiceItem key={service} title={service} />
//               ))}
//             </div>

//             {/* Right Column */}

//             <div className="flex w-full flex-col gap-[10px] lg:w-1/2">
//               {RIGHT_SERVICES.map((service) => (
//                 <ServiceItem key={service} title={service} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           FULL-WIDTH HORIZONTAL DIVIDER
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

// Dynamic Version
const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/facility/hospital/diagnostic-service`;

const GREEN = "#018837";

async function getDiagnosticServices() {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch diagnostic services: ${response.status}`,
      );
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Diagnostic services fetch error:", error);
    return [];
  }
}

function ServiceItem({ title }) {
  return (
    <div
      className="
        flex min-h-[76.4px] w-full
        items-center justify-between
        gap-4
        px-4 py-4
        sm:px-5 sm:py-5
      "
      style={{
        background: "rgba(1, 136, 55, 0.1)",
      }}
    >
      <span
        className="
          min-w-0
          flex-1
          text-[15px]
          font-bold
          leading-[24px]
          tracking-[0.01em]
          text-[#444444]
          sm:text-[16px]
          sm:leading-[30px]
          md:text-[18px]
        "
        style={{
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {title}
      </span>

      <button
        type="button"
        aria-label={`View ${title}`}
        className="
          group
          flex
          h-[36.4px]
          w-[36.4px]
          shrink-0
          items-center
          justify-center
          rounded-[2.08px]
          bg-white
          transition-colors
          duration-200
          hover:bg-[#018837]
          focus:outline-none
          focus:ring-2
          focus:ring-[#018837]
          focus:ring-offset-2
        "
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5.2 12.48H19.76"
            stroke={GREEN}
            strokeWidth="2.08"
            strokeLinecap="round"
            className="transition-colors group-hover:stroke-white"
          />

          <path
            d="M12.48 5.2L19.76 12.48L12.48 19.76"
            stroke={GREEN}
            strokeWidth="2.08"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors group-hover:stroke-white"
          />
        </svg>
      </button>
    </div>
  );
}

export default async function Diagnostic() {
  const services = await getDiagnosticServices();

  /*
   * The API currently returns:
   *
   * 0 - Modern Diagnostic Facilities
   * 1 - CT Scan
   * 2 - Ultrasound
   * 3 - Digital X-Ray
   * 4 - Reference Pathology & Laboratory
   * 5 - Cardiac Non-Invasive Lab
   * 6 - Gastroenterology...
   *
   * Split dynamically so the component does not depend
   * on hard-coded service titles.
   */
  const middleIndex = Math.ceil(services.length / 2);

  const leftServices = services.slice(0, middleIndex);
  const rightServices = services.slice(middleIndex);

  return (
    <>
      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-20 xl:px-20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-6 sm:gap-7 md:gap-[30px]">
          {/* Section Heading */}
          <div className="flex min-h-[60px] w-full items-center px-0 sm:min-h-[70px] sm:px-[10px] md:min-h-[80px]">
            <h2
              className="
                w-full
                text-[30px]
                font-medium
                leading-[38px]
                tracking-[0.01em]
                text-black
                sm:text-[36px]
                sm:leading-[45px]
                md:text-[42px]
                md:leading-[52px]
                lg:text-[50px]
                lg:leading-[60px]
              "
              style={{
                fontFamily: "'Bitter', serif",
              }}
            >
              Diagnostic &amp; Imaging Services
            </h2>
          </div>

          {/* Services */}
          {services.length > 0 ? (
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-[10px]
                lg:grid-cols-2
                lg:gap-[30px]
              "
            >
              {/* Left Column */}
              <div className="flex w-full flex-col gap-[10px]">
                {leftServices.map((service) => (
                  <ServiceItem key={service._id} title={service.title} />
                ))}
              </div>

              {/* Right Column */}
              <div className="flex w-full flex-col gap-[10px]">
                {rightServices.map((service) => (
                  <ServiceItem key={service._id} title={service.title} />
                ))}
              </div>
            </div>
          ) : (
            <div className="w-full py-8 text-center text-[#666666]">
              No diagnostic services available.
            </div>
          )}
        </div>
      </section>

      {/* Full-width divider */}
      <div
        className="h-px w-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      />
    </>
  );
}
