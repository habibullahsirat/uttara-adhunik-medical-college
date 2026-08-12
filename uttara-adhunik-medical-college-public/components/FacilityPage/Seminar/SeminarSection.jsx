// import React from "react";

// const GREEN = "#018837";

// export default function SeminarSection() {
//   return (
//     <section
//       className="w-full bg-[#E6F4EB]"
//       style={{
//         padding: "80px",
//       }}
//     >
//       <div
//         className="mx-auto flex flex-col"
//         style={{
//           width: "100%",
//           maxWidth: "1440px",
//           gap: "50px",
//         }}
//       >
//         {/* =========================================
//             TOP CONTENT
//         ========================================== */}
//         <div
//           className="flex w-full flex-col md:flex-row"
//           style={{
//             justifyContent: "space-between",
//             alignItems: "center",
//             gap: "200px",
//             minHeight: "170px",
//           }}
//         >
//           {/* =========================================
//               LEFT SIDE
//               ICON + SCIENTIFIC SEMINARS IMAGE
//           ========================================== */}
//           <div
//             className="flex w-full flex-1"
//             style={{
//               alignItems: "center",
//             }}
//           >
//             <div
//               className="flex"
//               style={{
//                 width: "381px",
//                 height: "120px",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 gap: "20px",
//               }}
//             >
//               {/* Scientific Seminar Icon */}
//               <img
//                 src="tv.png"
//                 alt=""
//                 style={{
//                   width: "120px",
//                   height: "120px",
//                   flexShrink: 0,
//                   objectFit: "contain",
//                 }}
//               />

//               {/* Scientific Seminars IMAGE
//                   This is an image, NOT HTML text */}
//               <img
//                 src="seminar.png"
//                 alt="Scientific Seminars"
//                 style={{
//                   width: "241px",
//                   height: "120px",
//                   flexShrink: 0,
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//           </div>

//           {/* =========================================
//               RIGHT SIDE
//               DESCRIPTION
//           ========================================== */}
//           <div
//             className="flex w-full flex-1"
//             style={{
//               width: "683px",
//               height: "170px",
//               padding: "10px",
//               justifyContent: "center",
//               alignItems: "center",
//               boxSizing: "border-box",
//             }}
//           >
//             <p
//               style={{
//                 width: "663px",
//                 height: "150px",
//                 margin: 0,
//                 display: "flex",
//                 alignItems: "center",
//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 700,
//                 fontSize: "20px",
//                 lineHeight: "30px",
//                 letterSpacing: "0.01em",
//                 textAlign: "justify",
//                 color: "#444444",
//               }}
//             >
//               Promoting Knowledge Through Shared Clinical Experiences At Uttara
//               Adhunik Medical College (UAMC), Scientific Seminars are held every
//               Saturday, playing a key role in enhancing academic exchange and
//               clinical insight. These sessions are coordinated by the Medical
//               Education Unit (MEU).
//             </p>
//           </div>
//         </div>

//         {/* =========================================
//             LARGE SEMINAR IMAGE
//         ========================================== */}
//         <div
//           className="flex w-full"
//           style={{
//             height: "455px",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "flex-start",
//             gap: "10px",
//             padding: "10px",
//             boxSizing: "border-box",
//           }}
//         >
//           <div
//             className="w-full"
//             style={{
//               height: "532.5px",
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "flex-start",
//               gap: "10px",
//             }}
//           >
//             <img
//               src="/seminar-large.png"
//               alt="Scientific Seminar at UAMC"
//               style={{
//                 width: "100%",
//                 height: "532.5px",
//                 flexGrow: 1,
//                 objectFit: "cover",
//                 display: "block",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

const GREEN = "#018837";

export default function SeminarSection() {
  return (
    <section
      className="w-full bg-[#E6F4EB]"
      style={{
        padding: "80px",
        boxSizing: "border-box",
      }}
    >
      <div
        className="mx-auto flex flex-col"
        style={{
          width: "100%",
          maxWidth: "1440px",
          gap: "50px",
        }}
      >
        {/* =========================================
            TOP CONTENT
        ========================================== */}
        <div
          className="flex w-full flex-col md:flex-row"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            gap: "50px",
            minHeight: "170px",
          }}
        >
          {/* =========================================
              LEFT SIDE
              ICON + HTML TEXT
          ========================================== */}
          <div
            className="flex w-full flex-1"
            style={{
              alignItems: "center",
            }}
          >
            <div
              className="flex"
              style={{
                width: "500px",
                height: "120px",
                flexDirection: "row",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {/* Scientific Seminar Icon */}
              <img
                src="/tv.png"
                alt=""
                style={{
                  width: "120px",
                  height: "120px",
                  flexShrink: 0,
                  objectFit: "contain",
                }}
              />

              {/* =====================================
                  SCIENTIFIC SEMINAR HTML TEXT
              ====================================== */}
              <div
                style={{
                  width: "300px",
                  height: "120px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <h1
                  style={{
                    margin: 0,
                    fontFamily: "'Bitter', serif",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "50px",
                    lineHeight: "60px",
                    letterSpacing: "0.01em",
                    color: "#000000",
                    whiteSpace: "nowrap",
                  }}
                >
                  Scientific
                </h1>

                <h1
                  style={{
                    margin: 0,
                    fontFamily: "'Bitter', serif",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "50px",
                    lineHeight: "60px",
                    letterSpacing: "0.01em",
                    color: GREEN,
                    whiteSpace: "nowrap",
                  }}
                >
                  Seminar
                </h1>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT SIDE
              DESCRIPTION
          ========================================== */}

          <div
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
              <span style={{ display: "block", whiteSpace: "nowrap" }}>
                <strong>
                  Promoting Knowledge Through Shared Clinical Experiences
                </strong>
              </span>

              <span style={{ display: "block" }}>
                At{" "}
                <strong style={{ fontWeight: 700 }}>
                  Uttara Adhunik Medical College & Hospital(UAMCH),
                </strong>{" "}
                Scientific Seminars are held every Saturday, playing a key role
                in enhancing academic exchange and clinical insight. These
                sessions are coordinated by the Medical Education Unit (MEU).
              </span>
            </p>
          </div>
        </div>

        {/* =========================================
            LARGE SEMINAR IMAGE
        ========================================== */}
        <div
          className="flex w-full"
          style={{
            height: "455px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "10px",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <div
            className="w-full"
            style={{
              height: "532.5px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <img
              src="/seminar.png"
              alt="Scientific Seminar at UAMC"
              style={{
                width: "100%",
                height: "532.5px",
                flexGrow: 1,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
