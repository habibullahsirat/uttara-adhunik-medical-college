"use client";

import { useState } from "react";

const GREEN = "#018837";
const GRAY = "#737477";

const TABS = [
  "Overview",
  "History of UAMC",
  "Vision & Mission",
  "Aim & Objective",
  "Organizational Structure",
  "Founder Members",
  "EC Members",
  "GB Members",
];

export default function TabNav() {
  const [active, setActive] = useState("GB Members");

  return (
    <section className="w-full bg-[#FBFBFB] px-6 md:px-20 py-[50px]">
      <div className="max-w-[1441px] mx-auto">
        {/* First row - 5 tabs */}
        <div className="flex flex-wrap justify-center gap-[30px]">
          {TABS.slice(0, 5).map((tab) => {
            const isActive = active === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className="w-[200px] h-[45px] px-[30px] py-[15px] rounded-[5px] flex items-center justify-center transition-all duration-200"
                style={{
                  backgroundColor: isActive ? GREEN : GRAY,
                  border: isActive
                    ? `2px dashed ${GREEN}`
                    : "2px solid transparent",
                  backdropFilter: "blur(25px)",
                }}
              >
                <span
                  className="text-white text-[12px] leading-[15px] font-medium text-center whitespace-nowrap"
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {tab}
                </span>
              </button>
            );
          })}
        </div>

        {/* Second row - 3 tabs */}
        <div className="flex flex-wrap justify-center gap-[30px] mt-[30px]">
          {TABS.slice(5).map((tab) => {
            const isActive = active === tab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className="w-[200px] h-[45px] px-[30px] py-[15px] rounded-[5px] flex items-center justify-center transition-all duration-200"
                style={{
                  backgroundColor: isActive ? GREEN : GRAY,
                  border: isActive
                    ? `2px dashed ${GREEN}`
                    : "2px solid transparent",
                  backdropFilter: "blur(25px)",
                }}
              >
                <span
                  className="text-white text-[12px] leading-[15px] font-medium text-center whitespace-nowrap"
                  style={{
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {tab}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
