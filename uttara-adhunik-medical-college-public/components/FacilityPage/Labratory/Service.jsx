// const GREEN = "#018837";

// const leftServices = [
//   "Hematology",
//   "Clinical Chemistry",
//   "Urinalysis",
//   "Therapeutic Drug Monitoring",
//   "Bacteriology",
// ];

// const rightServices = [
//   "Mycology",
//   "Parasitology",
//   "Diagnostic Serology",
//   "Surgical Pathology",
//   "Cytopathology",
// ];

// function ServiceItem({ name }) {
//   return (
//     <div
//       className="
//         w-full
//         h-[76.4px]
//         flex
//         flex-row
//         justify-between
//         items-center
//         px-[20px]
//         py-[20px]
//         gap-[10px]
//       "
//       style={{
//         background: "rgba(1, 136, 55, 0.1)",
//       }}
//     >
//       {/* Service name */}
//       <p
//         className="
//           m-0
//           flex-1
//           h-[30px]
//           flex
//           items-center
//           text-[18px]
//           leading-[30px]
//           font-bold
//           tracking-[0.01em]
//           text-[#444444]
//         "
//         style={{
//           fontFamily: "'Inter', sans-serif",
//         }}
//       >
//         {name}
//       </p>

//       {/* Arrow button */}
//       <div
//         className="
//           shrink-0
//           w-[36.4px]
//           h-[36.4px]
//           bg-white
//           rounded-[2.07972px]
//           flex
//           items-center
//           justify-center
//         "
//       >
//         <svg
//           width="24.96"
//           height="24.96"
//           viewBox="0 0 24.96 24.96"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* Horizontal line */}
//           <path
//             d="M5.2 12.48H19.76"
//             stroke={GREEN}
//             strokeWidth="2.07972"
//             strokeLinecap="round"
//           />

//           {/* Arrow */}
//           <path
//             d="M12.48 5.2L19.76 12.48L12.48 19.76"
//             stroke={GREEN}
//             strokeWidth="2.07972"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }

// export default function LaboratoryServices() {
//   return (
//     <section
//       className="
//         w-full
//         bg-white
//         flex
//         flex-col
//         items-start
//         px-[80px]
//         py-[80px]
//         gap-[30px]
//       "
//     >
//       {/* 1440px content container */}
//       <div
//         className="
//           w-full
//           max-w-[1440px]
//           mx-auto
//           flex
//           flex-col
//           items-start
//           gap-[30px]
//         "
//       >
//         {/* Heading */}
//         <div
//           className="
//             w-full
//             h-[80px]
//             flex
//             items-center
//             px-[10px]
//             gap-[10px]
//           "
//         >
//           <h2
//             className="
//               m-0
//               h-[60px]
//               flex
//               items-center
//               text-[50px]
//               leading-[60px]
//               font-medium
//               tracking-[0.01em]
//               text-black
//             "
//             style={{
//               fontFamily: "'Bitter', serif",
//             }}
//           >
//             Laboratory Services
//           </h2>
//         </div>

//         {/* Two-column service area */}
//         <div
//           className="
//             w-full
//             flex
//             flex-row
//             items-start
//             gap-[30px]
//           "
//         >
//           {/* Left column */}
//           <div
//             className="
//               w-1/2
//               max-w-[705px]
//               flex
//               flex-col
//               items-start
//               gap-[30px]
//             "
//           >
//             {leftServices.map((service) => (
//               <ServiceItem key={service} name={service} />
//             ))}
//           </div>

//           {/* Right column */}
//           <div
//             className="
//               w-1/2
//               max-w-[705px]
//               flex
//               flex-col
//               items-start
//               gap-[30px]
//             "
//           >
//             {rightServices.map((service) => (
//               <ServiceItem key={service} name={service} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic version
const GREEN = "#018837";

async function getLaboratoryServices() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_API}/api/facility/laboratory/lab-facility`,
    {
      // Change/remove this depending on your caching requirements.
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch laboratory services");
  }

  return response.json();
}

function ArrowIcon() {
  return (
    <svg
      width="24.96"
      height="24.96"
      viewBox="0 0 24.96 24.96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5.2 12.48H19.76"
        stroke={GREEN}
        strokeWidth="2.07972"
        strokeLinecap="round"
      />

      <path
        d="M12.48 5.2L19.76 12.48L12.48 19.76"
        stroke={GREEN}
        strokeWidth="2.07972"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceItem({ name }) {
  return (
    <div
      className="
        w-full
        min-h-[76.4px]
        flex
        items-center
        justify-between
        gap-[10px]
        px-5
        py-5
        bg-[rgba(1,136,55,0.1)]
      "
    >
      <p
        className="
          m-0
          min-w-0
          flex-1
          flex
          items-center
          text-[16px]
          sm:text-[18px]
          leading-[30px]
          font-bold
          tracking-[0.01em]
          text-[#444444]
        "
        style={{
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {name}
      </p>

      <div
        className="
          shrink-0
          w-[36.4px]
          h-[36.4px]
          flex
          items-center
          justify-center
          bg-white
          rounded-[2.07972px]
        "
      >
        <ArrowIcon />
      </div>
    </div>
  );
}

export default async function LaboratoryServices() {
  const services = await getLaboratoryServices();

  // Split dynamically into two columns.
  // For 10 items:
  // left  = 5
  // right = 5
  const midpoint = Math.ceil(services.length / 2);

  const leftServices = services.slice(0, midpoint);
  const rightServices = services.slice(midpoint);

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          gap-[30px]
        "
      >
        {/* Heading */}
        <div
          className="
            flex
            w-full
            min-h-[60px]
            items-center
            gap-[10px]
            px-0
            sm:px-[10px]
          "
        >
          <h2
            className="
              m-0
              text-[36px]
              leading-[44px]
              font-medium
              tracking-[0.01em]
              text-black
              sm:text-[42px]
              sm:leading-[52px]
              lg:text-[50px]
              lg:leading-[60px]
            "
            style={{
              fontFamily: "'Bitter', serif",
            }}
          >
            Laboratory Services
          </h2>
        </div>

        {/* Services */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-[20px]
            md:grid-cols-2
            md:gap-[30px]
          "
        >
          {/* Left column */}
          <div className="flex w-full flex-col gap-[20px] md:gap-[30px]">
            {leftServices.map((service) => (
              <ServiceItem key={service._id} name={service.title} />
            ))}
          </div>

          {/* Right column */}
          <div className="flex w-full flex-col gap-[20px] md:gap-[30px]">
            {rightServices.map((service) => (
              <ServiceItem key={service._id} name={service.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
