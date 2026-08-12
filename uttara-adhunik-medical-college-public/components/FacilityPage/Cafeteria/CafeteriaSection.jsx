import React from "react";

const GREEN = "#018837";

export default function CafeteriaSection() {
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
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "50px",
            minHeight: "140px",
          }}
        >
          {/* =========================================
              LEFT SIDE
              ICON + HTML TEXT
          ========================================== */}
          <div
            className="flex w-full flex-1"
            style={{
              alignItems: "flex-start",
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
              {/* Cafeteria Icon */}
              <img
                src="/hat.png"
                alt="Cafeteria"
                style={{
                  width: "120px",
                  height: "120px",
                  flexShrink: 0,
                  objectFit: "contain",
                }}
              />

              {/* =====================================
                  CAFETERIA SERVICES HTML TEXT
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
                {/* Cafeteria */}
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
                  Cafeteria
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
                <strong>Nourishing Meals in a Relaxed Setting</strong>
              </span>

              <span style={{ display: "block" }}>
                Located on the 3rd floor, the{" "}
                <strong style={{ fontWeight: 700 }}>UAMCH</strong> cafeteria
                offers a variety of balanced, nutritious, and hygienic meals at
                subsidized prices for students, staff, and visitors.
              </span>
            </p>
          </div>
        </div>

        {/* =========================================
            LARGE CAFETERIA IMAGE
        ========================================== */}
        <div
          className="flex w-full"
          style={{
            height: "455px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <div
            className="w-full"
            style={{
              height: "457.35px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <img
              src="/large.png"
              alt="UAMCH Cafeteria"
              style={{
                width: "100%",
                height: "457.35px",
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
