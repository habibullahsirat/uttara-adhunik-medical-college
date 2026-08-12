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
import React from "react";

const GREEN = "#018837";

const ArrowButton = () => {
  return (
    <div
      style={{
        width: "36.4px",
        height: "36.4px",
        flexShrink: 0,
        background: "#FFFFFF",
        borderRadius: "2.07972px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.21 12.5H19.79"
          stroke={GREEN}
          strokeWidth="2.08"
          strokeLinecap="round"
        />
        <path
          d="M13.54 6.25L19.79 12.5L13.54 18.75"
          stroke={GREEN}
          strokeWidth="2.08"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const FeatureItem = ({ heading, text, children, height = "100px" }) => {
  return (
    <div
      className="flex w-full"
      style={{
        minHeight: height,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        gap: "10px",
        background: "rgba(1, 136, 55, 0.1)",
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          margin: 0,
          flex: 1,
          fontFamily: "'Inter', sans-serif",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "30px",
          letterSpacing: "0.01em",
          color: "#444444",
        }}
      >
        {heading ? (
          <>
            <span
              style={{
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              {heading}:
            </span>{" "}
            {text}
          </>
        ) : (
          children
        )}
      </p>

      <ArrowButton />
    </div>
  );
};

export default function Feature() {
  return (
    <section
      className="w-full bg-white"
      style={{
        padding: "80px",
        boxSizing: "border-box",
      }}
    >
      <div
        className="mx-auto flex w-full flex-col"
        style={{
          maxWidth: "1440px",
          gap: "30px",
        }}
      >
        {/* =========================================
            WEEKLY ACADEMIC PRESENTATIONS
        ========================================== */}
        <div
          className="flex w-full flex-col"
          style={{
            gap: "30px",
          }}
        >
          {/* Section Heading */}
          <div
            className="flex w-full items-center"
            style={{
              height: "80px",
              padding: "10px",
              gap: "10px",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "'Bitter', serif",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "50px",
                lineHeight: "60px",
                letterSpacing: "0.01em",
                color: "#000000",
              }}
            >
              Weekly Academic Presentations
            </h2>
          </div>

          {/* Feature Cards */}
          <div
            className="grid w-full grid-cols-1 md:grid-cols-2"
            style={{
              gap: "30px",
            }}
          >
            <FeatureItem
              heading="Rotational Participation"
              text="All departments of UAMC actively participate on a rotating basis, ensuring diverse medical insights across specialties."
            />

            <FeatureItem
              heading="Case-Based Learning"
              text="Focus on real clinical cases of academic interest to sharpen diagnostic and treatment skills."
            />
          </div>
        </div>

        {/* =========================================
            GUEST SPEAKERS & COLLABORATION
        ========================================== */}
        <div
          className="flex w-full flex-col"
          style={{
            gap: "30px",
          }}
        >
          {/* Section Heading */}
          <div
            className="flex w-full items-center"
            style={{
              height: "80px",
              padding: "10px",
              gap: "10px",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "'Bitter', serif",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "50px",
                lineHeight: "60px",
                letterSpacing: "0.01em",
                color: "#000000",
              }}
            >
              Guest Speakers &amp; Collaboration
            </h2>
          </div>

          {/* Feature Cards */}
          <div
            className="grid w-full grid-cols-1 md:grid-cols-2"
            style={{
              gap: "30px",
            }}
          >
            <FeatureItem
              heading="National & International Experts"
              text="Distinguished speakers from other medical institutions in Bangladesh and abroad are invited to share their expertise."
              height="130px"
            />

            <FeatureItem
              heading="Cross-disciplinary Learning"
              text="Encourages open dialogue and collaboration among specialties, fostering a holistic medical education environment."
              height="130px"
            />
          </div>
        </div>

        {/* =========================================
            ACADEMIC ACTIVITIES
        ========================================== */}
        <div
          className="flex w-full flex-col"
          style={{
            gap: "30px",
          }}
        >
          {/* Section Heading */}
          <div
            className="flex w-full items-center"
            style={{
              height: "80px",
              padding: "10px",
              gap: "10px",
              boxSizing: "border-box",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: "'Bitter', serif",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "50px",
                lineHeight: "60px",
                letterSpacing: "0.01em",
                color: "#000000",
              }}
            >
              Academic Activities
            </h2>
          </div>

          {/* Feature Cards */}
          <div
            className="grid w-full grid-cols-1 md:grid-cols-2"
            style={{
              gap: "30px",
            }}
          >
            <FeatureItem height="76.4px">
              <strong>Clinical Seminars</strong>
            </FeatureItem>

            <FeatureItem height="76.4px">
              <strong>Workshops</strong>
            </FeatureItem>

            <FeatureItem height="76.4px">
              <strong>Symposia</strong>
            </FeatureItem>
          </div>
        </div>
      </div>

      {/* =========================================
          RESPONSIVE STYLES
      ========================================== */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 50px 20px !important;
          }

          h2 {
            font-size: 32px !important;
            line-height: 40px !important;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 28px !important;
            line-height: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
