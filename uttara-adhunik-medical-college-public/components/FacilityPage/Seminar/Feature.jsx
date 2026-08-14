// import React from "react";

// const GREEN = "#018837";

// const ArrowButton = () => {
//   return (
//     <div
//       style={{
//         width: "36.4px",
//         height: "36.4px",
//         flexShrink: 0,
//         background: "#FFFFFF",
//         borderRadius: "2.07972px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <svg
//         width="25"
//         height="25"
//         viewBox="0 0 25 25"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M5.21 12.5H19.79"
//           stroke={GREEN}
//           strokeWidth="2.08"
//           strokeLinecap="round"
//         />
//         <path
//           d="M13.54 6.25L19.79 12.5L13.54 18.75"
//           stroke={GREEN}
//           strokeWidth="2.08"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </div>
//   );
// };

// const FeatureItem = ({ children, height = "100px" }) => {
//   return (
//     <div
//       className="flex w-full"
//       style={{
//         minHeight: height,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "20px",
//         gap: "10px",
//         background: "rgba(1, 136, 55, 0.1)",
//         boxSizing: "border-box",
//       }}
//     >
//       <p
//         style={{
//           margin: 0,
//           flex: 1,
//           fontFamily: "'Inter', sans-serif",
//           fontStyle: "normal",
//           fontWeight: 700,
//           fontSize: "18px",
//           lineHeight: "30px",
//           letterSpacing: "0.01em",
//           color: "#444444",
//         }}
//       >
//         {children}
//       </p>

//       <ArrowButton />
//     </div>
//   );
// };

// export default function Feature() {
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
//         {/* =========================================
//             WEEKLY ACADEMIC PRESENTATIONS
//         ========================================== */}
//         <div
//           className="flex w-full flex-col"
//           style={{
//             gap: "30px",
//           }}
//         >
//           {/* Section Heading */}
//           <div
//             className="flex w-full items-center"
//             style={{
//               height: "80px",
//               padding: "10px",
//               gap: "10px",
//               boxSizing: "border-box",
//             }}
//           >
//             <h2
//               style={{
//                 margin: 0,
//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 500,
//                 fontSize: "50px",
//                 lineHeight: "60px",
//                 letterSpacing: "0.01em",
//                 color: "#000000",
//               }}
//             >
//               Weekly Academic Presentations
//             </h2>
//           </div>

//           {/* Feature Cards */}
//           <div
//             className="grid w-full grid-cols-1 md:grid-cols-2"
//             style={{
//               gap: "30px",
//             }}
//           >
//             <FeatureItem>
//               Rotational Participation: All departments of UAMC actively
//               participate on a rotating basis, ensuring diverse medical insights
//               across specialties.
//             </FeatureItem>

//             <FeatureItem>
//               Case-Based Learning: Focus on real clinical cases of academic
//               interest to sharpen diagnostic and treatment skills.
//             </FeatureItem>
//           </div>
//         </div>

//         {/* =========================================
//             GUEST SPEAKERS & COLLABORATION
//         ========================================== */}
//         <div
//           className="flex w-full flex-col"
//           style={{
//             gap: "30px",
//           }}
//         >
//           {/* Section Heading */}
//           <div
//             className="flex w-full items-center"
//             style={{
//               height: "80px",
//               padding: "10px",
//               gap: "10px",
//               boxSizing: "border-box",
//             }}
//           >
//             <h2
//               style={{
//                 margin: 0,
//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 500,
//                 fontSize: "50px",
//                 lineHeight: "60px",
//                 letterSpacing: "0.01em",
//                 color: "#000000",
//               }}
//             >
//               Guest Speakers & Collaboration
//             </h2>
//           </div>

//           {/* Feature Cards */}
//           <div
//             className="grid w-full grid-cols-1 md:grid-cols-2"
//             style={{
//               gap: "30px",
//             }}
//           >
//             <FeatureItem height="130px">
//               National & International Experts: Distinguished speakers from
//               other medical institutions in Bangladesh and abroad are invited to
//               share their expertise.
//             </FeatureItem>

//             <FeatureItem height="130px">
//               Cross-disciplinary Learning: Encourages open dialogue and
//               collaboration among specialties, fostering a holistic medical
//               education environment.
//             </FeatureItem>
//           </div>
//         </div>

//         {/* =========================================
//             ACADEMIC ACTIVITIES
//         ========================================== */}
//         <div
//           className="flex w-full flex-col"
//           style={{
//             gap: "30px",
//           }}
//         >
//           {/* Section Heading */}
//           <div
//             className="flex w-full items-center"
//             style={{
//               height: "80px",
//               padding: "10px",
//               gap: "10px",
//               boxSizing: "border-box",
//             }}
//           >
//             <h2
//               style={{
//                 margin: 0,
//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 500,
//                 fontSize: "50px",
//                 lineHeight: "60px",
//                 letterSpacing: "0.01em",
//                 color: "#000000",
//               }}
//             >
//               Academic Activities
//             </h2>
//           </div>

//           {/* Feature Cards */}
//           <div
//             className="grid w-full grid-cols-1 md:grid-cols-2"
//             style={{
//               gap: "30px",
//             }}
//           >
//             <FeatureItem height="76.4px">Clinical Seminars</FeatureItem>

//             <FeatureItem height="76.4px">Workshops</FeatureItem>

//             <FeatureItem height="76.4px">Symposia</FeatureItem>
//           </div>
//         </div>
//       </div>

//       {/* =========================================
//           RESPONSIVE STYLES
//       ========================================== */}
//       <style>{`
//         @media (max-width: 768px) {
//           section {
//             padding: 50px 20px !important;
//           }

//           h2 {
//             font-size: 32px !important;
//             line-height: 40px !important;
//           }
//         }

//         @media (max-width: 480px) {
//           h2 {
//             font-size: 28px !important;
//             line-height: 36px !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

////////////
// import React from "react";

// const GREEN = "#018837";

// const ArrowButton = () => {
//   return (
//     <div
//       style={{
//         width: "36.4px",
//         height: "36.4px",
//         flexShrink: 0,
//         background: "#FFFFFF",
//         borderRadius: "2.07972px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <svg
//         width="25"
//         height="25"
//         viewBox="0 0 25 25"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M5.21 12.5H19.79"
//           stroke={GREEN}
//           strokeWidth="2.08"
//           strokeLinecap="round"
//         />
//         <path
//           d="M13.54 6.25L19.79 12.5L13.54 18.75"
//           stroke={GREEN}
//           strokeWidth="2.08"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </div>
//   );
// };

// const FeatureItem = ({ heading, text, children, height = "100px" }) => {
//   return (
//     <div
//       className="flex w-full"
//       style={{
//         minHeight: height,
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "20px",
//         gap: "10px",
//         background: "rgba(1, 136, 55, 0.1)",
//         boxSizing: "border-box",
//       }}
//     >
//       <p
//         style={{
//           margin: 0,
//           flex: 1,
//           fontFamily: "'Inter', sans-serif",
//           fontStyle: "normal",
//           fontWeight: 400,
//           fontSize: "18px",
//           lineHeight: "30px",
//           letterSpacing: "0.01em",
//           color: "#444444",
//         }}
//       >
//         {heading ? (
//           <>
//             <span
//               style={{
//                 fontWeight: 700,
//                 whiteSpace: "nowrap",
//               }}
//             >
//               {heading}:
//             </span>{" "}
//             {text}
//           </>
//         ) : (
//           children
//         )}
//       </p>

//       <ArrowButton />
//     </div>
//   );
// };

// export default function Feature() {
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
//         {/* =========================================
//             WEEKLY ACADEMIC PRESENTATIONS
//         ========================================== */}
//         <div
//           className="flex w-full flex-col"
//           style={{
//             gap: "30px",
//           }}
//         >
//           {/* Section Heading */}
//           <div
//             className="flex w-full items-center"
//             style={{
//               height: "80px",
//               padding: "10px",
//               gap: "10px",
//               boxSizing: "border-box",
//             }}
//           >
//             <h2
//               style={{
//                 margin: 0,
//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 500,
//                 fontSize: "50px",
//                 lineHeight: "60px",
//                 letterSpacing: "0.01em",
//                 color: "#000000",
//               }}
//             >
//               Weekly Academic Presentations
//             </h2>
//           </div>

//           {/* Feature Cards */}
//           <div
//             className="grid w-full grid-cols-1 md:grid-cols-2"
//             style={{
//               gap: "30px",
//             }}
//           >
//             <FeatureItem
//               heading="Rotational Participation"
//               text="All departments of UAMC actively participate on a rotating basis, ensuring diverse medical insights across specialties."
//             />

//             <FeatureItem
//               heading="Case-Based Learning"
//               text="Focus on real clinical cases of academic interest to sharpen diagnostic and treatment skills."
//             />
//           </div>
//         </div>

//         {/* =========================================
//             GUEST SPEAKERS & COLLABORATION
//         ========================================== */}
//         <div
//           className="flex w-full flex-col"
//           style={{
//             gap: "30px",
//           }}
//         >
//           {/* Section Heading */}
//           <div
//             className="flex w-full items-center"
//             style={{
//               height: "80px",
//               padding: "10px",
//               gap: "10px",
//               boxSizing: "border-box",
//             }}
//           >
//             <h2
//               style={{
//                 margin: 0,
//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 500,
//                 fontSize: "50px",
//                 lineHeight: "60px",
//                 letterSpacing: "0.01em",
//                 color: "#000000",
//               }}
//             >
//               Guest Speakers &amp; Collaboration
//             </h2>
//           </div>

//           {/* Feature Cards */}
//           <div
//             className="grid w-full grid-cols-1 md:grid-cols-2"
//             style={{
//               gap: "30px",
//             }}
//           >
//             <FeatureItem
//               heading="National & International Experts"
//               text="Distinguished speakers from other medical institutions in Bangladesh and abroad are invited to share their expertise."
//               height="130px"
//             />

//             <FeatureItem
//               heading="Cross-disciplinary Learning"
//               text="Encourages open dialogue and collaboration among specialties, fostering a holistic medical education environment."
//               height="130px"
//             />
//           </div>
//         </div>

//         {/* =========================================
//             ACADEMIC ACTIVITIES
//         ========================================== */}
//         <div
//           className="flex w-full flex-col"
//           style={{
//             gap: "30px",
//           }}
//         >
//           {/* Section Heading */}
//           <div
//             className="flex w-full items-center"
//             style={{
//               height: "80px",
//               padding: "10px",
//               gap: "10px",
//               boxSizing: "border-box",
//             }}
//           >
//             <h2
//               style={{
//                 margin: 0,
//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 500,
//                 fontSize: "50px",
//                 lineHeight: "60px",
//                 letterSpacing: "0.01em",
//                 color: "#000000",
//               }}
//             >
//               Academic Activities
//             </h2>
//           </div>

//           {/* Feature Cards */}
//           <div
//             className="grid w-full grid-cols-1 md:grid-cols-2"
//             style={{
//               gap: "30px",
//             }}
//           >
//             <FeatureItem height="76.4px">
//               <strong>Clinical Seminars</strong>
//             </FeatureItem>

//             <FeatureItem height="76.4px">
//               <strong>Workshops</strong>
//             </FeatureItem>

//             <FeatureItem height="76.4px">
//               <strong>Symposia</strong>
//             </FeatureItem>
//           </div>
//         </div>
//       </div>

//       {/* =========================================
//           RESPONSIVE STYLES
//       ========================================== */}
//       <style>{`
//         @media (max-width: 768px) {
//           section {
//             padding: 50px 20px !important;
//           }

//           h2 {
//             font-size: 32px !important;
//             line-height: 40px !important;
//           }
//         }

//         @media (max-width: 480px) {
//           h2 {
//             font-size: 28px !important;
//             line-height: 36px !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// Dynamic Section
import React from "react";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/facility/seminar`;

async function getSeminarData(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
}

function ArrowButton() {
  return (
    <div className="flex h-[36.4px] w-[36.4px] shrink-0 items-center justify-center rounded-[2.08px] bg-white">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M5.21 12.5H19.79"
          stroke="#018837"
          strokeWidth="2.08"
          strokeLinecap="round"
        />
        <path
          d="M13.54 6.25L19.79 12.5L13.54 18.75"
          stroke="#018837"
          strokeWidth="2.08"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function FeatureItem({ title, description, height }) {
  return (
    <div
      className={`flex min-h-[76.4px] w-full items-center justify-between gap-[10px] bg-[rgba(1,136,55,0.1)] p-5 ${height ?? ""}`}
    >
      <p className="m-0 flex-1 text-[18px] font-normal leading-[30px] tracking-[0.01em] text-[#444444]">
        <span className="font-bold">{title}</span>

        {description && (
          <>
            : <span className="font-normal">{description}</span>
          </>
        )}
      </p>

      <ArrowButton />
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <div className="flex min-h-[80px] w-full items-center gap-[10px] p-[10px]">
      <h2 className="m-0 font-['Bitter'] text-[28px] font-medium leading-[36px] tracking-[0.01em] text-black sm:text-[34px] sm:leading-[42px] md:text-[40px] md:leading-[48px] lg:text-[50px] lg:leading-[60px]">
        {children}
      </h2>
    </div>
  );
}

function SeminarSection({ title, items, type }) {
  return (
    <div className="flex w-full flex-col gap-[30px]">
      <SectionHeading>{title}</SectionHeading>

      <div
        className="
          grid w-full grid-cols-1 gap-[30px]
          md:grid-cols-2
        "
      >
        {items.map((item) => {
          if (type === "activity") {
            return (
              <FeatureItem
                key={item._id}
                title={item.title}
                height="min-h-[76.4px]"
              />
            );
          }

          const colonIndex = item.title.indexOf(":");

          if (colonIndex === -1) {
            return (
              <FeatureItem
                key={item._id}
                title={item.title}
                height={
                  title === "Guest Speakers & Collaboration"
                    ? "min-h-[130px]"
                    : "min-h-[100px]"
                }
              />
            );
          }

          const heading = item.title.slice(0, colonIndex).trim();
          const description = item.title.slice(colonIndex + 1).trim();

          return (
            <FeatureItem
              key={item._id}
              title={heading}
              description={description}
              height={
                title === "Guest Speakers & Collaboration"
                  ? "min-h-[130px]"
                  : "min-h-[100px]"
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default async function Feature() {
  const [presentations, collaboration, activities] = await Promise.all([
    getSeminarData("presentation"),
    getSeminarData("collaboration"),
    getSeminarData("activity"),
  ]);

  return (
    <section className="w-full bg-white px-5 py-[50px] sm:px-6 sm:py-[60px] md:px-10 md:py-[70px] lg:px-[60px] lg:py-[80px] xl:px-[80px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[30px]">
        <SeminarSection
          title="Weekly Academic Presentations"
          items={presentations}
          type="description"
        />

        <SeminarSection
          title="Guest Speakers & Collaboration"
          items={collaboration}
          type="description"
        />

        <SeminarSection
          title="Academic Activities"
          items={activities}
          type="activity"
        />
      </div>
    </section>
  );
}
