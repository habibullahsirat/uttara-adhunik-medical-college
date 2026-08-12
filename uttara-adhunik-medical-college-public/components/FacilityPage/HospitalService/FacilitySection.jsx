"use client";

import { useState } from "react";

const GREEN = "#018837";

const FACILITIES = [
  "Intensive Care Unit (ICU)",
  "Critical Care Unit or Coronary Care Unit (CCU)",
  "Neonatal Intensive Care Unit (NICU)",
];

export default function FacilitySection() {
  const [selectedFacility, setSelectedFacility] = useState(
    "Intensive Care Unit (ICU)",
  );

  const facilityDetails = {
    "Intensive Care Unit (ICU)": {
      title: "Intensive Care Unit (ICU)",
      description:
        "Equipped with ventilators and advanced life support. A 20-bed unit on the 10th floor equipped with 17 ventilators, providing continuous care and life support for critically ill adult patients.",
    },

    "Critical Care Unit or Coronary Care Unit (CCU)": {
      title: "Critical Care Unit or Coronary Care Unit (CCU)",
      description:
        "Provides specialized monitoring and treatment for patients requiring intensive cardiac and critical care.",
    },

    "Neonatal Intensive Care Unit (NICU)": {
      title: "Neonatal Intensive Care Unit (NICU)",
      description:
        "Provides specialized intensive care and continuous monitoring for newborns requiring advanced medical support.",
    },
  };

  const activeFacility = facilityDetails[selectedFacility];

  return (
    <>
      {/* =========================================
          Facility Section
      ========================================== */}

      <section className="w-full bg-white px-6 py-16 md:px-20 md:py-20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-5">
          {/* Section Heading */}

          <div className="flex w-full max-w-[664px] flex-col items-center">
            <h2
              className="w-full text-center text-[36px] font-bold leading-[45px] tracking-[0.01em] md:text-[50px] md:leading-[60px]"
              style={{
                fontFamily: "'Bitter', serif",
                color: GREEN,
              }}
            >
              UAMCH Facilities &amp; Services
            </h2>

            <div className="flex w-full max-w-[481px] items-center justify-center px-[10px] py-[10px]">
              <p
                className="w-full text-center text-[14px] font-normal leading-[30px] tracking-[0.01em] text-black md:text-justify md:text-[15px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Patients requiring intensive care receive specialized attention
                in
              </p>
            </div>
          </div>

          {/* Facility Content */}

          <div className="mt-5 flex w-full max-w-[1316px] flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-[75px]">
            {/* Facility List */}

            <div className="flex w-full flex-col items-start gap-[10px] py-5 lg:w-[433px]">
              {FACILITIES.map((facility, index) => {
                const isActive = selectedFacility === facility;

                return (
                  <button
                    key={facility}
                    type="button"
                    onClick={() => setSelectedFacility(facility)}
                    className={`flex min-h-[50px] w-full items-center text-left transition-all duration-200 ${
                      index === 0 ? "h-[60px]" : "h-[50px]"
                    }`}
                    style={{
                      padding: index === 0 ? "15px 20px" : "10px",
                      background: isActive
                        ? "linear-gradient(270deg, #FFFFFF 0%, #018837 100%)"
                        : "transparent",
                    }}
                  >
                    <span
                      className="text-[16px] font-bold leading-[30px] tracking-[0.01em] md:text-[18px]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: isActive ? "#FFFFFF" : "#444444",
                      }}
                    >
                      {facility}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Facility Card */}

            <div className="flex min-h-[365px] w-full flex-col items-stretch overflow-hidden rounded-[10px] border border-black/20 bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.25)] md:flex-row lg:w-[808px]">
              {/* Image */}

              <div className="h-[250px] w-full shrink-0 md:h-[365px] md:w-[306px]">
                <img
                  src="/assets/team-young-specialist-doctors-standing-corridor-hospital.jpg"
                  alt="Hospital medical team"
                  className="h-full w-full object-cover md:rounded-l-[10px]"
                />
              </div>

              {/* Content */}

              <div className="flex min-h-[365px] flex-1 flex-col items-start justify-center gap-[5px] px-6 py-8 md:px-0 md:py-0 md:pr-[50px]">
                {/* Title */}

                <div className="flex w-full items-center py-[10px]">
                  <h3
                    className="text-[18px] font-bold leading-[30px] text-[#444444]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {activeFacility.title}
                  </h3>
                </div>

                {/* Description */}

                <div className="flex min-h-[140px] w-full items-center py-[10px]">
                  <p
                    className="w-full text-justify text-[14px] font-normal leading-[30px] tracking-[0.01em] text-black md:text-[15px]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {activeFacility.description}
                  </p>
                </div>

                {/* Read More */}

                <button
                  type="button"
                  className="flex h-[39px] w-[162px] items-center justify-center gap-[10px] px-[21px] py-[10px] text-white transition-all duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: GREEN,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <span className="text-[11px] font-medium leading-[18px]">
                    Read More
                  </span>

                  {/* Arrow */}

                  <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L8 9L1 17"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          Full-Width Divider
      ========================================== */}

      <div
        className="w-full"
        style={{
          height: "1px",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      />
    </>
  );
}
