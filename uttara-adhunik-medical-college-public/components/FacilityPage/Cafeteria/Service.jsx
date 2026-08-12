import React from "react";

export default function Service() {
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
        {/* Heading */}
        <div
          className="flex w-full items-center"
          style={{
            height: "80px",
            padding: "10px",
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
            Facilities &amp; Services
          </h2>
        </div>

        {/* Services */}
        <div
          className="flex w-full flex-col md:flex-row"
          style={{
            height: "230px",
            gap: "30px",
          }}
        >
          {/* LEFT COLUMN */}
          <div
            className="flex w-full flex-1 flex-col"
            style={{
              height: "230px",
              gap: "30px",
            }}
          >
            {/* Healthy Food Options */}
            <ServiceItem
              heading="Healthy Food Options"
              text="Carefully selected menus focused on wellness and nutrition."
            />

            {/* Extended Hours */}
            <ServiceItem
              heading="Extended Hours"
              text="Services are available until late to accommodate busy academic and clinical schedules."
            />
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="flex w-full flex-1 flex-col"
            style={{
              height: "230px",
              gap: "30px",
            }}
          >
            {/* Hygiene & Quality */}
            <ServiceItem
              heading="Hygiene & Quality"
              text="Cleanliness and food safety are strictly maintained."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SERVICE ITEM
========================================= */

function ServiceItem({ heading, text }) {
  return (
    <div
      className="flex w-full items-center justify-between"
      style={{
        height: "100px",
        padding: "20px",
        gap: "10px",
        background: "rgba(1, 136, 55, 0.1)",
        boxSizing: "border-box",
      }}
    >
      {/* Text */}
      <p
        style={{
          margin: 0,
          flex: 1,
          height: "60px",
          display: "block",
          fontFamily: "'Inter', sans-serif",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "30px",
          letterSpacing: "0.01em",
          color: "#444444",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          {heading}:
        </span>{" "}
        {text}
      </p>

      {/* Arrow */}
      <div
        className="flex shrink-0 items-center justify-center"
        style={{
          width: "36.4px",
          height: "36.4px",
          background: "#FFFFFF",
          borderRadius: "2.07972px",
        }}
      >
        <svg
          width="24.96"
          height="24.96"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.2 12.48H19.76"
            stroke="#018837"
            strokeWidth="2.08"
            strokeLinecap="round"
          />

          <path
            d="M13.78 6.78L19.48 12.48L13.78 18.18"
            stroke="#018837"
            strokeWidth="2.08"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
