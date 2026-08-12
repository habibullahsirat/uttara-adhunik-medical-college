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
  const [active, setActive] = useState("Publications");

  const renderTab = (tab) => {
    const isActive = active === tab;

    return (
      <button
        key={tab}
        type="button"
        onClick={() => setActive(tab)}
        className="shrink-0"
        style={{
          width: "200px",
          height: "45px",
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
        }}
      >
        <span
          style={{
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
        minHeight: "220px",
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
      {/* Figma Frame 1261155664 */}
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

          gap: "30px",
        }}
      >
        {/* First Row - 6 Tabs */}
        {/* Figma Frame 1261155665 */}
        <div
          style={{
            width: "100%",
            height: "45px",

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",

            gap: "30px",
          }}
        >
          {TABS.slice(0, 6).map(renderTab)}
        </div>

        {/* Second Row - 4 Tabs */}
        {/* Figma Frame 1261155666 */}
        <div
          style={{
            width: "890px",
            height: "45px",

            display: "flex",
            flexDirection: "row",
            alignItems: "center",

            justifyContent: "flex-start",

            gap: "30px",
          }}
        >
          {TABS.slice(6).map(renderTab)}
        </div>
      </div>
    </section>
  );
}
