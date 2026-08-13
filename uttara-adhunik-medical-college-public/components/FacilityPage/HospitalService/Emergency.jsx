// "use client";

// const GREEN = "#018837";

// const LEFT_SERVICES = [
//   "24/7 Emergency Services",
//   "Ambulance Services",
//   "ICU (Intensive Care Unit) – 20 beds, 17 ventilators (10th floor)",
//   "CCU (Coronary Care Unit) – 17 beds (3rd floor)",
// ];

// const RIGHT_SERVICES = [
//   "NICU (Neonatal Intensive Care Unit) – For critical neonatal cases",
//   "Ambulance Services",
//   "Haemodialysis Unit",
// ];

// export default function Emergency() {
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
//             className="transition-all duration-200"
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
//           EMERGENCY & SPECIALIZED CARE
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
//               Emergency &amp; Specialized Care
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

// Dynamic version
import Image from "next/image";

const GREEN = "#018837";

async function getEmergencyServices() {
  const apiUrl = process.env.NEXT_PUBLIC_ADMIN_API;

  try {
    const response = await fetch(
      `${apiUrl}/api/facility/hospital/emergency-service`,
      {
        method: "GET",
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch emergency services: ${response.status}`);
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Emergency services fetch error:", error);
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
        px-5 py-5
      "
      style={{
        background: "rgba(1, 136, 55, 0.1)",
      }}
    >
      <span
        className="
          min-w-0 flex-1
          text-[16px] font-bold
          leading-[30px]
          tracking-[0.01em]
          text-[#444444]
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
          flex h-[36.4px] w-[36.4px]
          shrink-0 items-center justify-center
          rounded-[2.08px]
          bg-white
          transition-colors duration-200
          hover:bg-[#018837]
        "
      >
        <Image
          src="/arrow-right.png"
          alt=""
          width={25}
          height={25}
          className="
            transition-all duration-200
            group-hover:brightness-0 group-hover:invert
          "
        />
      </button>
    </div>
  );
}

export default async function EmergencySection() {
  const services = await getEmergencyServices();

  /*
   * Automatically split the API response into two columns.
   *
   * 7 API items:
   * Left  = 4
   * Right = 3
   *
   * If the API later returns 8 items:
   * Left  = 4
   * Right = 4
   *
   * If it returns 10:
   * Left  = 5
   * Right = 5
   */
  const middleIndex = Math.ceil(services.length / 2);

  const leftServices = services.slice(0, middleIndex);
  const rightServices = services.slice(middleIndex);

  return (
    <>
      <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 xl:px-20">
        <div
          className="
            mx-auto flex w-full max-w-[1440px]
            flex-col items-start
            gap-[30px]
          "
        >
          {/* Section Heading */}
          <div
            className="
              flex min-h-[60px] w-full
              items-center
              px-0
              sm:min-h-[70px] sm:px-[10px]
              md:min-h-[80px]
            "
          >
            <h2
              className="
                text-[32px]
                font-medium
                leading-[40px]
                tracking-[0.01em]
                text-black
                sm:text-[38px]
                sm:leading-[48px]
                md:text-[44px]
                md:leading-[54px]
                lg:text-[50px]
                lg:leading-[60px]
              "
              style={{
                fontFamily: "'Bitter', serif",
              }}
            >
              Emergency &amp; Specialized Care
            </h2>
          </div>

          {/* Services */}
          {services.length > 0 ? (
            <div
              className="
                flex w-full
                flex-col
                gap-[10px]
                lg:flex-row
                lg:items-start
                lg:gap-[30px]
              "
            >
              {/* Left Column */}
              <div
                className="
                  flex w-full
                  flex-col gap-[10px]
                  lg:flex-1
                "
              >
                {leftServices.map((service) => (
                  <ServiceItem key={service._id} title={service.title} />
                ))}
              </div>

              {/* Right Column */}
              <div
                className="
                  flex w-full
                  flex-col gap-[10px]
                  lg:flex-1
                "
              >
                {rightServices.map((service) => (
                  <ServiceItem key={service._id} title={service.title} />
                ))}
              </div>
            </div>
          ) : (
            <p className="text-base text-[#666666]">
              No emergency services available.
            </p>
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
