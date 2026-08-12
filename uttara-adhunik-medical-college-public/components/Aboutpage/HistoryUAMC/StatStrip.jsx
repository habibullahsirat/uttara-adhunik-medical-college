import React from "react";
const YELLOW = "#F4C430";

export default function StatStrip() {
  const stats = [
    {
      value: "90%",
      label: "Post-Graduation Success Rate",
      width: "w-[144px]",
    },
    {
      value: "Top 10",
      label: "Colleges That Create Futures",
      width: "w-[142px]",
    },
    {
      value: "No. 1",
      label: "In The Nation For Materials R&D",
      width: "w-[147px]",
    },
  ];

  return (
    <section
      className="
        flex
        min-h-[311px]
        w-full
        flex-col
        items-center
        justify-center
        px-6
        py-[50px]
        md:px-[100px]
      "
      style={{
        backgroundImage: `
          linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.4)
          ),
          url("/statistic.jpg")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* =========================================
          GLASS STAT PANEL
      ========================================== */}
      <div
        className="
          flex
          w-full
          max-w-[1233px]
          flex-col
          items-center
          justify-center
          gap-10
          px-8
          py-10
          md:h-[211px]
          md:flex-row
          md:gap-[150px]
          md:px-[100px]
          md:py-[50px]
        "
        style={{
          backgroundColor: "rgba(1, 136, 55, 0.5)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
        }}
      >
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center">
            {/* Stat */}
            <div
              className={`
                flex
                ${stat.width}
                flex-col
                items-center
                gap-[19px]
              `}
            >
              {/* Value */}
              <span
                className="
                  flex
                  h-[48px]
                  w-full
                  items-center
                  justify-center
                  whitespace-nowrap
                  font-display
                  text-[48px]
                  font-normal
                  leading-[48px]
                  text-white
                "
              >
                {stat.value}
              </span>

              {/* Label */}
              <span
                className="
                  flex
                  h-[44px]
                  w-full
                  items-center
                  justify-center
                  text-center
                  font-display
                  text-[18px]
                  font-bold
                  leading-[22px]
                "
                style={{ color: YELLOW }}
              >
                {stat.label}
              </span>
            </div>

            {/* Divider */}
            {index < stats.length - 1 && (
              <span
                className="
                  mx-8
                  hidden
                  h-[94px]
                  w-px
                  shrink-0
                  bg-white/50
                  md:mx-0
                  md:block
                "
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
