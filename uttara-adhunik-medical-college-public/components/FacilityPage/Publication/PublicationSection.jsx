"use client";

import { useState } from "react";
import { Clock3 } from "lucide-react";

const GREEN = "#018837";
const LIGHT_PURPLE = "#E8E8F4";
const TEXT = "#444444";

const publications = Array.from({ length: 10 }, (_, index) => ({
  day: "12",
  month: "Mar 25",
  title:
    '"BCPS e-Logbook: Modernizing the Monitoring of FCPS 1st Phase Training"',
  time: "3.40 PM",
}));

export default function PublicationSection() {
  const [activeTab, setActiveTab] = useState("Journal");

  return (
    <section
      className="
        w-full
        bg-white
        flex
        flex-col
        items-center
        justify-center
        px-5
        py-20
        gap-[50px]
      "
    >
      {/* Main content */}
      <div
        className="
          w-full
          max-w-[1440px]
          flex
          flex-col
          items-start
          gap-[45px]
        "
      >
        {/* Section title */}
        <div className="flex items-center justify-center h-[80px] px-0 py-[10px]">
          <h2
            className="
              text-[50px]
              leading-[60px]
              font-bold
              text-[#018837]
            "
            style={{
              fontFamily: "'Bitter', serif",
            }}
          >
            Publication
          </h2>
        </div>

        {/* Publication content */}
        <div className="w-full flex flex-col items-start">
          {/* Tabs */}
          <div
            className="
              w-full
              h-[84px]
              bg-[#E8E8F4]
              p-[10px]
              flex
              items-center
              justify-between
              gap-[10px]
            "
          >
            {/* Journal */}
            <button
              type="button"
              onClick={() => setActiveTab("Journal")}
              className={`
                h-[64px]
                flex-1
                flex
                items-center
                justify-center
                px-0
                py-[15px]
                bg-white
                transition-all
                duration-200
                ${
                  activeTab === "Journal"
                    ? "border-b-2 border-[#018837] shadow-[1px_1px_10px_rgba(0,0,0,0.25)]"
                    : ""
                }
              `}
            >
              <span
                className={`
                  text-[15px]
                  leading-[34px]
                  ${
                    activeTab === "Journal"
                      ? "font-bold text-[#018837]"
                      : "font-normal text-black"
                  }
                `}
                style={{
                  fontFamily: "'Bitter', serif",
                }}
              >
                Journal
              </span>
            </button>

            {/* Tenders */}
            <button
              type="button"
              onClick={() => setActiveTab("Tenders")}
              className={`
                h-[64px]
                flex-1
                flex
                items-center
                justify-center
                px-0
                py-[15px]
                transition-all
                duration-200
                ${
                  activeTab === "Tenders"
                    ? "bg-white border-b-2 border-[#018837] shadow-[1px_1px_10px_rgba(0,0,0,0.25)]"
                    : "bg-transparent"
                }
              `}
            >
              <span
                className={`
                  text-[15px]
                  leading-[34px]
                  ${
                    activeTab === "Tenders"
                      ? "font-bold text-[#018837]"
                      : "font-normal text-black"
                  }
                `}
                style={{
                  fontFamily: "'Bitter', serif",
                }}
              >
                Tenders
              </span>
            </button>
          </div>

          {/* Scrollable publication list */}
          <div
            className="
              w-full
              h-[610px]
              overflow-y-auto
              bg-white
              p-[10px]
              flex
              flex-col
              items-start
              gap-[10px]
            "
          >
            {publications.map((publication, index) => (
              <article
                key={index}
                className="
                  w-full
                  min-h-[126px]
                  shrink-0
                  bg-[#E8E8F4]
                  p-[20px]
                  flex
                  flex-row
                  items-center
                  gap-[16px]
                "
              >
                {/* Date */}
                <div className="w-[90px] h-[86px] shrink-0 flex flex-col items-center">
                  {/* Day */}
                  <div
                    className="
                      w-[90px]
                      h-[43px]
                      bg-[#E8E8F4]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span
                      className="
                        w-[65px]
                        h-[43px]
                        flex
                        items-center
                        justify-center
                        text-center
                        text-[25px]
                        leading-[42px]
                        font-bold
                        text-[#444444]
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {publication.day}
                    </span>
                  </div>

                  {/* Month */}
                  <div
                    className="
                      w-[90px]
                      h-[43px]
                      bg-[#018837]
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span
                      className="
                        w-[64px]
                        h-[43px]
                        flex
                        items-center
                        justify-center
                        text-center
                        text-[18.75px]
                        leading-[42px]
                        font-semibold
                        text-white
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {publication.month}
                    </span>
                  </div>
                </div>

                {/* Publication information */}
                <div
                  className="
                    flex-1
                    self-stretch
                    min-w-0
                    h-[86px]
                    py-[5px]
                    flex
                    flex-col
                    items-start
                    justify-between
                  "
                >
                  {/* Title */}
                  <p
                    className="
                      w-full
                      m-0
                      text-[18px]
                      leading-[22px]
                      font-medium
                      text-[#444444]
                    "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {publication.title}
                  </p>

                  {/* Time */}
                  <div
                    className="
                      h-[18px]
                      flex
                      flex-row
                      items-end
                      gap-[14px]
                    "
                  >
                    <Clock3 size={15} strokeWidth={1.25} color={TEXT} />

                    <span
                      className="
                        text-[15px]
                        leading-[18px]
                        font-semibold
                        text-[#444444]
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {publication.time}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
