// import React from "react";

// const GREEN = "#018837";

// export default function HostelSection() {
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
//                 src="/host.png"
//                 alt="Hostel"
//                 style={{
//                   width: "120px",
//                   height: "120px",
//                   flexShrink: 0,
//                   objectFit: "contain",
//                 }}
//               />

//               {/* Scientific Seminars Image */}
//               <img
//                 src="/hoste.png"
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
//               UAMC provides comfortable and convenient hostel facilities
//               designed to offer a safe and welcoming environment for students,
//               patients, and their attendants. The hostel services support a
//               peaceful stay with essential facilities, ensuring comfort,
//               convenience, and a supportive environment throughout their time at
//               the medical college.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

const GREEN = "#018837";

export default function HostelSection() {
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
              {/* Hostel Icon */}
              <img
                src="/host.png"
                alt="Hostel"
                style={{
                  width: "120px",
                  height: "120px",
                  flexShrink: 0,
                  objectFit: "contain",
                }}
              />

              {/* =====================================
                  HOSTEL SERVICES HTML TEXT
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
                {/* Hostel */}
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
                  Hostel
                </h1>

                {/* Services */}
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
                  Services
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
              height: "170px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                width: "663px",
                height: "150px",
                margin: 0,
                fontFamily: "'Bitter', serif",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "30px",
                letterSpacing: "0.01em",
                textAlign: "left",
                color: "#444444",
              }}
            >
              <strong style={{ fontWeight: 700 }}>UAMC</strong> provides
              comfortable and convenient hostel facilities designed to offer a
              safe and welcoming environment for students, patients, and their
              attendants. The hostel services support a peaceful stay with
              essential facilities, ensuring comfort, convenience, and a
              supportive environment throughout their time at the medical
              college.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
