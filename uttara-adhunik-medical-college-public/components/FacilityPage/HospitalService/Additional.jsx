// "use client";

// const GREEN = "#018837";

// const LEFT_SERVICES = [
//   "Blood Bank",
//   "Oral Rehydration Therapy",
//   "Vaccination Services for Children",
// ];

// const RIGHT_SERVICES = ["Outpatient Department (OPD)", "Laparoscopic Surgery"];

// function ServiceItem({ children }) {
//   return (
//     <div
//       className="w-full h-[76.4px] flex flex-row items-center justify-between px-5 py-5 gap-[10px]"
//       style={{
//         background: "rgba(1, 136, 55, 0.1)",
//       }}
//     >
//       <span
//         className="text-[#444444] text-[18px] leading-[30px] font-bold tracking-[0.01em]"
//         style={{
//           fontFamily: "Inter, sans-serif",
//         }}
//       >
//         {children}
//       </span>

//       <div className="shrink-0 w-[36.4px] h-[36.4px] bg-white rounded-[2.08px] flex items-center justify-center">
//         <svg
//           width="24.96"
//           height="24.96"
//           viewBox="0 0 25 25"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-hidden="true"
//         >
//           <path
//             d="M5.2 12.5H19.8"
//             stroke={GREEN}
//             strokeWidth="2.08"
//             strokeLinecap="round"
//           />
//           <path
//             d="M12.5 5.2L19.8 12.5L12.5 19.8"
//             stroke={GREEN}
//             strokeWidth="2.08"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }

// export default function Additional() {
//   return (
//     <section className="w-full bg-white px-6 md:px-20 py-20">
//       <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start gap-[30px]">
//         {/* Heading */}
//         <div className="w-full h-[80px] flex items-center px-[10px]">
//           <h2
//             className="text-black text-[38px] md:text-[50px] leading-[60px] font-medium tracking-[0.01em]"
//             style={{
//               fontFamily: "'Bitter', serif",
//             }}
//           >
//             Additional Services
//           </h2>
//         </div>

//         {/* Services */}
//         <div className="w-full flex flex-col lg:flex-row items-start gap-[30px]">
//           {/* Left column */}
//           <div className="w-full lg:w-1/2 flex flex-col items-start gap-[10px]">
//             {LEFT_SERVICES.map((service) => (
//               <ServiceItem key={service}>{service}</ServiceItem>
//             ))}
//           </div>

//           {/* Right column */}
//           <div className="w-full lg:w-1/2 flex flex-col items-start gap-[10px]">
//             {RIGHT_SERVICES.map((service) => (
//               <ServiceItem key={service}>{service}</ServiceItem>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic version
const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/facility/hospital/additional-service`;

async function getAdditionalServices() {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch additional services: ${response.status}`,
      );
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Additional services fetch error:", error);
    return [];
  }
}

function ServiceItem({ title }) {
  return (
    <div
      className="
        w-full min-h-[76.4px]
        flex items-center justify-between
        gap-3 sm:gap-4
        px-4 sm:px-5
        py-4 sm:py-5
      "
      style={{
        background: "rgba(1, 136, 55, 0.1)",
      }}
    >
      <span
        className="
          min-w-0
          text-[#444444]
          text-sm sm:text-base lg:text-[18px]
          leading-6 sm:leading-[30px]
          font-bold
          tracking-[0.01em]
          break-words
        "
        style={{
          fontFamily: "Inter, sans-serif",
        }}
      >
        {title}
      </span>

      <div
        className="
          shrink-0
          w-8 h-8
          sm:w-[36.4px] sm:h-[36.4px]
          bg-white
          rounded-[2.08px]
          flex items-center justify-center
        "
      >
        <svg
          className="w-[22px] h-[22px] sm:w-[24.96px] sm:h-[24.96px]"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5.2 12.5H19.8"
            stroke="#018837"
            strokeWidth="2.08"
            strokeLinecap="round"
          />

          <path
            d="M12.5 5.2L19.8 12.5L12.5 19.8"
            stroke="#018837"
            strokeWidth="2.08"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default async function Additional() {
  const services = await getAdditionalServices();

  // Split dynamically into two columns.
  // For 5 items => left: 3, right: 2
  const middleIndex = Math.ceil(services.length / 2);

  const leftServices = services.slice(0, middleIndex);
  const rightServices = services.slice(middleIndex);

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 lg:py-20">
      <div
        className="
          w-full max-w-[1440px]
          mx-auto
          flex flex-col
          items-start
          gap-6 sm:gap-8 lg:gap-[30px]
        "
      >
        {/* Heading */}
        <div
          className="
            w-full
            min-h-[64px] sm:min-h-[70px] lg:h-[80px]
            flex items-center
            px-0 sm:px-[10px]
          "
        >
          <h2
            className="
              text-black
              text-[32px]
              sm:text-[40px]
              md:text-[46px]
              lg:text-[50px]
              leading-tight
              lg:leading-[60px]
              font-medium
              tracking-[0.01em]
            "
            style={{
              fontFamily: "'Bitter', serif",
            }}
          >
            Additional Services
          </h2>
        </div>

        {/* Services */}
        {services.length > 0 ? (
          <div
            className="
              w-full
              flex flex-col lg:flex-row
              items-stretch lg:items-start
              gap-3 sm:gap-4 lg:gap-[30px]
            "
          >
            {/* Left column */}
            <div
              className="
                w-full lg:flex-1
                flex flex-col
                items-start
                gap-2.5
              "
            >
              {leftServices.map((service) => (
                <ServiceItem key={service._id} title={service.title} />
              ))}
            </div>

            {/* Right column */}
            <div
              className="
                w-full lg:flex-1
                flex flex-col
                items-start
                gap-2.5
              "
            >
              {rightServices.map((service) => (
                <ServiceItem key={service._id} title={service.title} />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full py-10 text-center text-[#666666]">
            No additional services available.
          </div>
        )}
      </div>
    </section>
  );
}
