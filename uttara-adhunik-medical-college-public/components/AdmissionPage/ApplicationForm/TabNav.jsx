"use client";

import { useState } from "react";

const GREEN = "#018837";
const GRAY = "#737477";

const TABS = [
  "Admission Procedure & Fees",
  "Admission Papers",
  "Application Form",
  "Admission Results",
  "Online Registration",
];

export default function TabNav() {
  const [active, setActive] = useState("Application Form");

  const renderTab = (tab) => {
    const isActive = active === tab;

    return (
      <button
        key={tab}
        type="button"
        onClick={() => setActive(tab)}
        style={{
          width: "200px",
          height: "45px",

          padding: "15px 30px",

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          boxSizing: "border-box",
          flexShrink: 0,

          background: isActive ? GREEN : GRAY,

          border: isActive ? `2px dashed ${GREEN}` : "2px solid transparent",

          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",

          borderRadius: "5px",

          cursor: "pointer",
        }}
      >
        <span
          style={{
            width: "100%",

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
        /* Navigation */
        width: "100%",
        height: "220px",

        background: "#FBFBFB",

        padding: "50px 80px",

        boxSizing: "border-box",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",

        gap: "10px",
      }}
    >
      {/* Frame 1261155664 */}
      <div
        style={{
          width: "100%",
          maxWidth: "1441px",

          height: "120px",

          margin: "0 auto",

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",

          /* Figma gap between tab rows */
          gap: "30px",

          /* Extra 30px gap from Banner */
          transform: "translateY(30px)",
        }}
      >
        {/* Frame 1261155665 */}
        <div
          style={{
            width: "100%",
            height: "45px",

            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            gap: "20px",
          }}
        >
          {TABS.map(renderTab)}
        </div>

        {/* Frame 1261155666 */}
        <div
          style={{
            width: "890px",
            height: "45px",

            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",

            gap: "20px",
          }}
        >
          {/* Second row intentionally empty.
              Add additional tabs here if your Figma has them. */}
        </div>
      </div>
    </section>
  );
}
