import React from "react";

const GREEN = "#018837";

export default function ProduceSection() {
  return (
    <section
      className="w-full"
      style={{
        background: "#E6F4EB",
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
            alignItems: "flex-start",
            gap: "200px",
            minHeight: "120px",
          }}
        >
          {/* =========================================
              HOSPITAL ICON + HTML HEADING
          ========================================== */}
          <div
            className="flex shrink-0 items-center"
            style={{
              width: "644px",
              height: "120px",
              gap: "20px",
            }}
          >
            {/* Hospital Icon */}
            <img
              src="/hos.png"
              alt=""
              style={{
                width: "100px",
                height: "100px",
                objectFit: "contain",
                flexShrink: 0,
              }}
            />

            {/* HTML Heading */}
            <h1
              style={{
                margin: 0,
                width: "504px",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                fontFamily: "'Canela Trial', serif",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "50px",
                lineHeight: "60px",
                letterSpacing: "0.01em",
              }}
            >
              <span>
                <span style={{ color: GREEN }}>Admission</span>{" "}
                <span style={{ color: "#000000" }}>Procedure</span>
              </span>

              <span style={{ color: "#000000" }}>&amp; Fees</span>
            </h1>
          </div>

          {/* =========================================
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
              <strong style={{ fontWeight: 700 }}>
                Uttara Adhunik Medical College(UAMC)
              </strong>{" "}
              is the teaching and training hospital of the college. It is a
              500-bedded, multidisciplinary tertiary care facility located in
              Uttara, Dhaka. The hospital serves patients from all over the
              country, particularly from Uttara, Tongi, Gazipur, and Savar.
            </p>
          </div>
        </div>

        {/* =========================================
            IMAGE + ADMISSION OVERLAY
        ========================================== */}
        <div
          style={{
            width: "100%",
            height: "488px",
            padding: "10px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
            position: "relative",
          }}
        >
          {/* =========================================
              GROUP 8
          ========================================== */}
          <div
            style={{
              width: "100%",
              height: "468px",
              position: "relative",
            }}
          >
            {/* =========================================
                HOSPITAL IMAGE
            ========================================== */}
            <img
              src="/team-young-specialist-doctors-standing-corridor-hospital.jpg"
              alt="Hospital doctors"
              style={{
                position: "absolute",
                width: "1033.45px",
                height: "468px",
                left: "0px",
                top: "0px",
                display: "block",
                objectFit: "cover",
              }}
            />

            {/* =========================================
                YELLOW ADMISSION PANEL
            ========================================== */}
            <div
              style={{
                position: "absolute",
                width: "669.25px",
                height: "170px",
                left: "750.75px",
                top: "149px",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                padding: "20px 50px",
                gap: "10px",
                boxSizing: "border-box",
                background: "#FECD2F",
              }}
            >
              {/* =========================================
                  ADMISSION CONTENT
              ========================================== */}
              <div
                style={{
                  width: "525px",
                  height: "96px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  padding: 0,
                  gap: "10px",
                }}
              >
                {/* Admission Text */}
                <span
                  style={{
                    width: "415px",
                    height: "96px",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "'Bitter', serif",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "80px",
                    lineHeight: "96px",
                    letterSpacing: "0.01em",
                    color: "#000000",
                  }}
                >
                  Admission
                </span>

                {/* Figma Line 10 */}
                <div
                  style={{
                    width: "100px",
                    height: "0px",
                    borderTop: "2px solid #000000",
                    flexShrink: 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
