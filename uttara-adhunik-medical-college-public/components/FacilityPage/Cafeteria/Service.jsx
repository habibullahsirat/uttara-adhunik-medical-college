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
//               heading="Healthy Food Options"
//               text="Carefully selected menus focused on wellness and nutrition."
//             />

//             {/* Extended Hours */}
//             <ServiceItem
//               heading="Extended Hours"
//               text="Services are available until late to accommodate busy academic and clinical schedules."
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
//             {/* Hygiene & Quality */}
//             <ServiceItem
//               heading="Hygiene & Quality"
//               text="Cleanliness and food safety are strictly maintained."
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

// Dynamic Version
import React from "react";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/facility/cafeteria/cafe-facility`;

async function getFacilities() {
  const response = await fetch(API_URL, {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch facilities: ${response.status}`);
  }

  return response.json();
}

export default async function Service() {
  const facilities = await getFacilities();

  // Keep the Figma layout:
  // Left: first + third item
  // Right: second item
  const leftFacilities = facilities.filter((_, index) => index % 2 === 0);
  const rightFacilities = facilities.filter((_, index) => index % 2 !== 0);

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-16 lg:py-20 xl:px-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-[30px]">
        {/* Heading */}
        <div className="flex min-h-[60px] w-full items-center px-2.5 sm:min-h-[70px] md:h-20">
          <h2 className="m-0 font-['Bitter'] text-3xl font-medium leading-tight tracking-[0.01em] text-black sm:text-4xl md:text-[42px] md:leading-[52px] lg:text-[50px] lg:leading-[60px]">
            Facilities &amp; Services
          </h2>
        </div>

        {/* Services */}
        <div className="flex w-full flex-col gap-4 sm:gap-5 md:gap-6 lg:flex-row lg:gap-[30px]">
          {/* LEFT COLUMN */}
          <div className="flex w-full flex-1 flex-col gap-4 sm:gap-5 md:gap-[30px]">
            {leftFacilities.map((facility) => (
              <ServiceItem key={facility._id} title={facility.title} />
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex w-full flex-1 flex-col gap-4 sm:gap-5 md:gap-[30px]">
            {rightFacilities.map((facility) => (
              <ServiceItem key={facility._id} title={facility.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SERVICE ITEM
========================================= */

function ServiceItem({ title }) {
  const [heading, ...descriptionParts] = title.split(":");
  const description = descriptionParts.join(":").trim();

  return (
    <div className="flex min-h-[100px] w-full items-center justify-between gap-3 bg-[rgba(1,136,55,0.1)] p-4 sm:gap-4 sm:p-5">
      {/* Text */}
      <p className="m-0 flex min-w-0 flex-1 items-center font-['Inter'] text-base font-normal leading-7 tracking-[0.01em] text-[#444444] sm:text-[17px] sm:leading-7 md:text-[18px] md:leading-[30px]">
        <span className="font-bold">{heading.trim()}:</span>
        {description && <span className="ml-1 font-normal">{description}</span>}
      </p>

      {/* Arrow */}
      <div className="flex h-[36.4px] w-[36.4px] shrink-0 items-center justify-center rounded-[2.07972px] bg-white">
        <svg
          width="24.96"
          height="24.96"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
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
