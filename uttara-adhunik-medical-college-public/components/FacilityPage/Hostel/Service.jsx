// import React from "react";

// export default function Service() {
//   return (
//     <section
//       className="w-full bg-white"
//       style={{
//         padding: "80px",
//         boxSizing: "border-box",
//       }}
//     >
//       <div
//         className="mx-auto flex w-full flex-col"
//         style={{
//           maxWidth: "1440px",
//           gap: "30px",
//         }}
//       >
//         {/* Heading */}
//         <div
//           className="flex w-full items-center"
//           style={{
//             height: "80px",
//             padding: "10px",
//             boxSizing: "border-box",
//           }}
//         >
//           <h2
//             style={{
//               margin: 0,
//               fontFamily: "'Bitter', serif",
//               fontStyle: "normal",
//               fontWeight: 500,
//               fontSize: "50px",
//               lineHeight: "60px",
//               letterSpacing: "0.01em",
//               color: "#000000",
//             }}
//           >
//             Facilities &amp; Services
//           </h2>
//         </div>

//         {/* Services */}
//         <div
//           className="flex w-full flex-col md:flex-row"
//           style={{
//             height: "230px",
//             gap: "30px",
//           }}
//         >
//           {/* LEFT COLUMN */}
//           <div
//             className="flex w-full flex-1 flex-col"
//             style={{
//               height: "230px",
//               gap: "30px",
//             }}
//           >
//             {/* Healthy Food Options */}
//             <ServiceItem
//               heading="Secure & Comfortable"
//               text="Hostel accommodations are available for female students with a limited number of seats."
//             />
//             <ServiceItem
//               heading="Hygiene & Quality"
//               text="Cleanliness and food safety are strictly maintained."
//             />

//             {/* Extended Hours */}
//           </div>

//           {/* RIGHT COLUMN */}
//           <div
//             className="flex w-full flex-1 flex-col"
//             style={{
//               height: "230px",
//               gap: "30px",
//             }}
//           >
//             {/* Hygiene & Quality */}
//             <ServiceItem
//               heading="Essential Amenities"
//               text="Basic facilities such as furnished rooms, electricity, water, and security are provided to ensure a safe and supportive environment for learning."
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================================
//    SERVICE ITEM
// ========================================= */

// function ServiceItem({ heading, text }) {
//   return (
//     <div
//       className="flex w-full items-center justify-between"
//       style={{
//         height: "100px",
//         padding: "20px",
//         gap: "10px",
//         background: "rgba(1, 136, 55, 0.1)",
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Text */}
//       <p
//         style={{
//           margin: 0,
//           flex: 1,
//           height: "60px",
//           display: "block",
//           fontFamily: "'Inter', sans-serif",
//           fontStyle: "normal",
//           fontWeight: 400,
//           fontSize: "18px",
//           lineHeight: "30px",
//           letterSpacing: "0.01em",
//           color: "#444444",
//         }}
//       >
//         <span
//           style={{
//             fontWeight: 700,
//             whiteSpace: "nowrap",
//           }}
//         >
//           {heading}:
//         </span>{" "}
//         {text}
//       </p>

//       {/* Arrow */}
//       <div
//         className="flex shrink-0 items-center justify-center"
//         style={{
//           width: "36.4px",
//           height: "36.4px",
//           background: "#FFFFFF",
//           borderRadius: "2.07972px",
//         }}
//       >
//         <svg
//           width="24.96"
//           height="24.96"
//           viewBox="0 0 25 25"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M5.2 12.48H19.76"
//             stroke="#018837"
//             strokeWidth="2.08"
//             strokeLinecap="round"
//           />

//           <path
//             d="M13.78 6.78L19.48 12.48L13.78 18.18"
//             stroke="#018837"
//             strokeWidth="2.08"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }
// import React from "react";

// export default function Service() {
//   return (
//     <section
//       className="w-full bg-white"
//       style={{
//         padding: "80px",
//         boxSizing: "border-box",
//       }}
//     >
//       <style>{`
//         .essential-amenities {
//           width: 110% !important;
//         }

//         @media (max-width: 768px) {
//           .essential-amenities {
//             width: 100% !important;
//           }
//         }
//       `}</style>

//       <div
//         className="mx-auto flex w-full flex-col"
//         style={{
//           maxWidth: "1440px",
//           gap: "30px",
//         }}
//       >
//         {/* Heading */}
//         <div
//           className="flex w-full items-center"
//           style={{
//             height: "80px",
//             padding: "10px",
//             boxSizing: "border-box",
//           }}
//         >
//           <h2
//             style={{
//               margin: 0,
//               fontFamily: "'Bitter', serif",
//               fontStyle: "normal",
//               fontWeight: 500,
//               fontSize: "50px",
//               lineHeight: "60px",
//               letterSpacing: "0.01em",
//               color: "#000000",
//             }}
//           >
//             Facilities &amp; Services
//           </h2>
//         </div>

//         {/* Services */}
//         <div
//           className="flex w-full flex-col md:flex-row"
//           style={{
//             height: "230px",
//             gap: "30px",
//           }}
//         >
//           {/* LEFT COLUMN */}
//           <div
//             className="flex w-full flex-1 flex-col"
//             style={{
//               height: "230px",
//               gap: "30px",
//             }}
//           >
//             {/* Secure & Comfortable */}
//             <ServiceItem
//               heading="Secure & Comfortable"
//               text="Hostel accommodations are available for female students with a limited number of seats."
//             />

//             {/* Hygiene & Quality */}
//             <ServiceItem
//               heading="Hygiene & Quality"
//               text="Cleanliness and food safety are strictly maintained."
//             />
//           </div>

//           {/* RIGHT COLUMN */}
//           <div
//             className="flex w-full flex-1 flex-col"
//             style={{
//               height: "230px",
//               gap: "30px",
//             }}
//           >
//             {/* Essential Amenities */}
//             <ServiceItem
//               heading="Essential Amenities"
//               text="Basic facilities such as furnished rooms, electricity, water, and security are provided to ensure a safe and supportive environment for learning."
//               className="essential-amenities"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================================
//    SERVICE ITEM
// ========================================= */

// function ServiceItem({ heading, text, className = "" }) {
//   return (
//     <div
//       className={`flex w-full items-center justify-between ${className}`}
//       style={{
//         height: "100px",
//         padding: "20px",
//         gap: "10px",
//         background: "rgba(1, 136, 55, 0.1)",
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Text */}
//       <p
//         style={{
//           margin: 0,
//           flex: 1,
//           height: "60px",
//           display: "block",
//           fontFamily: "'Inter', sans-serif",
//           fontStyle: "normal",
//           fontWeight: 400,
//           fontSize: "18px",
//           lineHeight: "30px",
//           letterSpacing: "0.01em",
//           color: "#444444",
//         }}
//       >
//         <span
//           style={{
//             fontWeight: 700,
//             whiteSpace: "nowrap",
//           }}
//         >
//           {heading}:
//         </span>{" "}
//         {text}
//       </p>

//       {/* Arrow */}
//       <div
//         className="flex shrink-0 items-center justify-center"
//         style={{
//           width: "36.4px",
//           height: "36.4px",
//           background: "#FFFFFF",
//           borderRadius: "2.07972px",
//         }}
//       >
//         <svg
//           width="24.96"
//           height="24.96"
//           viewBox="0 0 25 25"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M5.2 12.48H19.76"
//             stroke="#018837"
//             strokeWidth="2.08"
//             strokeLinecap="round"
//           />

//           <path
//             d="M13.78 6.78L19.48 12.48L13.78 18.18"
//             stroke="#018837"
//             strokeWidth="2.08"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }

// Dynamic Version

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/facility/hostel-service/service`;

async function getServices() {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch services: ${response.status}`);
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch hostel services:", error);
    return [];
  }
}

export default async function Service() {
  const services = await getServices();

  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-7">
        {/* Heading */}
        <div className="flex w-full items-center px-0 sm:px-2.5">
          <h2 className="m-0 font-['Bitter'] text-[32px] font-medium leading-[1.2] tracking-[0.01em] text-black sm:text-[40px] lg:text-[50px]">
            Facilities &amp; Services
          </h2>
        </div>

        {/* Services */}
        {services.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-[30px]">
            {/* Left column */}
            <div className="flex w-full flex-col gap-5 md:gap-[30px]">
              {services
                .filter((_, index) => index % 2 === 0)
                .map((service) => (
                  <ServiceItem key={service._id} title={service.title} />
                ))}
            </div>

            {/* Right column */}
            <div className="flex w-full flex-col gap-5 md:gap-[30px]">
              {services
                .filter((_, index) => index % 2 !== 0)
                .map((service) => (
                  <ServiceItem key={service._id} title={service.title} />
                ))}
            </div>
          </div>
        ) : (
          <div className="flex min-h-[100px] w-full items-center justify-center bg-[rgba(1,136,55,0.1)] px-5 py-6 text-center font-['Inter'] text-base text-[#444]">
            No facilities or services available.
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceItem({ title }) {
  const [heading, ...descriptionParts] = title.split(":");

  const description = descriptionParts.join(":").trim();

  return (
    <div className="flex min-h-[100px] w-full items-center justify-between gap-4 bg-[rgba(1,136,55,0.1)] p-4 sm:p-5">
      {/* Text */}
      <p className="m-0 min-w-0 flex-1 font-['Inter'] text-[15px] font-normal leading-7 tracking-[0.01em] text-[#444] sm:text-[16px] lg:text-[18px]">
        <span className="font-bold">
          {heading.trim()}
          {description ? ":" : ""}
        </span>

        {description && <> {description}</>}
      </p>

      {/* Arrow */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] bg-white sm:h-[36.4px] sm:w-[36.4px]">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-[24.96px] sm:w-[24.96px]"
        >
          <path
            d="M5.2 12.48H19.76"
            stroke="#018837"
            strokeWidth="2.08"
            strokeLinecap="round"
          />

          <path
            d="M13.78 6.78L19.48 12.48L13.78 18.18"
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
