// "use client";

// import { useState } from "react";

// const GREEN = "#018837";
// const GRAY = "#737477";

// const TABS = [
//   "Hospital Service",
//   "Departments",
//   "Library",
//   "Medical Education Unit",
//   "Training",
//   "Publications",
//   "Seminar",
//   "Hostel",
//   "Labratory",
//   "Cafeteria",
// ];

// export default function TabNav() {
//   const [active, setActive] = useState("Seminar");

//   const renderTab = (tab) => {
//     const isActive = active === tab;

//     return (
//       <button
//         key={tab}
//         type="button"
//         onClick={() => setActive(tab)}
//         style={{
//           width: "200px",
//           minWidth: "200px",
//           height: "45px",
//           margin: 0,
//           padding: "15px 30px",

//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           alignItems: "center",

//           boxSizing: "border-box",

//           background: isActive ? GREEN : GRAY,

//           border: isActive ? `2px dashed ${GREEN}` : "2px solid transparent",

//           backdropFilter: "blur(25px)",
//           borderRadius: "5px",

//           cursor: "pointer",

//           flexShrink: 0,
//         }}
//       >
//         <span
//           style={{
//             margin: 0,
//             padding: 0,

//             fontFamily: "'Inter', sans-serif",
//             fontStyle: "normal",
//             fontWeight: 500,
//             fontSize: "12px",
//             lineHeight: "15px",

//             color: "#FFFFFF",
//             textAlign: "center",
//             whiteSpace: "nowrap",
//           }}
//         >
//           {tab}
//         </span>
//       </button>
//     );
//   };

//   return (
//     <section
//       style={{
//         width: "100%",
//         minHeight: "220px",
//         background: "#FBFBFB",

//         padding: "50px 80px",
//         boxSizing: "border-box",

//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "center",
//         alignItems: "flex-start",

//         gap: "10px",
//       }}
//     >
//       {/* =========================================
//           FIGMA FRAME 1261155664
//       ========================================== */}
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "1441px",
//           height: "120px",

//           margin: "0 auto",

//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",

//           gap: "30px",
//         }}
//       >
//         {/* =========================================
//             FIRST ROW - 6 TABS
//         ========================================== */}
//         <div
//           style={{
//             width: "1441px",
//             maxWidth: "100%",
//             height: "45px",

//             display: "flex",
//             flexDirection: "row",

//             justifyContent: "space-between",
//             alignItems: "center",

//             gap: "30px",

//             margin: 0,
//             padding: 0,
//           }}
//         >
//           {TABS.slice(0, 6).map(renderTab)}
//         </div>

//         {/* =========================================
//             SECOND ROW - 4 TABS
//         ========================================== */}
//         <div
//           style={{
//             width: "890px",
//             height: "45px",

//             display: "flex",
//             flexDirection: "row",

//             justifyContent: "flex-start",
//             alignItems: "center",

//             gap: "30px",

//             margin: 0,
//             padding: 0,
//           }}
//         >
//           {TABS.slice(6).map(renderTab)}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";

const GREEN = "#018837";
const GRAY = "#737477";

const TABS = [
  "Hospital Service",
  "Departments",
  "Library",
  "Medical Education Unit",
  "Training",
  "Publications",
  "Seminar",
  "Hostel",
  "Labratory",
  "Cafeteria",
];

export default function TabNav() {
  const [active, setActive] = useState("Seminar");

  const renderTab = (tab) => {
    const isActive = active === tab;

    return (
      <button
        key={tab}
        type="button"
        onClick={() => setActive(tab)}
        style={{
          width: "200px",
          minWidth: "200px",
          height: "45px",

          margin: 0,
          padding: "15px 30px",

          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",

          boxSizing: "border-box",

          background: isActive ? GREEN : GRAY,

          border: isActive ? `2px dashed ${GREEN}` : "2px solid transparent",

          backdropFilter: "blur(25px)",
          borderRadius: "5px",

          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            margin: 0,
            padding: 0,

            fontFamily: "'Inter', sans-serif",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "15px",

            color: "#FFFFFF",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          {tab}
        </span>
      </button>
    );
  };

  return (
    <section
      style={{
        width: "100%",
        height: "220px",

        background: "#FBFBFB",

        /* Same horizontal alignment as Banner */
        padding: "50px 80px",

        boxSizing: "border-box",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {/* =========================================
          CONTENT CONTAINER
          Same 80px left/right alignment as Banner
      ========================================== */}
      <div
        style={{
          width: "100%",
          maxWidth: "1441px",
          height: "120px",

          margin: 0,
          padding: 0,

          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          gap: "30px",
        }}
      >
        {/* =========================================
            FIRST ROW
            Figma: 1441px × 45px
        ========================================== */}
        <div
          style={{
            width: "100%",
            height: "45px",

            margin: 0,
            padding: 0,

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

            gap: "30px",
          }}
        >
          {TABS.slice(0, 6).map(renderTab)}
        </div>

        {/* =========================================
            SECOND ROW
            Figma: 890px × 45px
        ========================================== */}
        <div
          style={{
            width: "890px",
            height: "45px",

            margin: "0 auto",
            padding: 0,

            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",

            gap: "30px",
          }}
        >
          {TABS.slice(6).map(renderTab)}
        </div>
      </div>
    </section>
  );
}
