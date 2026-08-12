"use client";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

export default function Banner() {
  return (
    <section
      style={{
        width: "100%",
        height: "500px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",

        padding: "80px",
        gap: "10px",

        boxSizing: "border-box",

        backgroundImage: `url("/bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* =========================================
          FRAME 1261155625
          PREVIOUS BANNER SIZE
      ========================================== */}
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          height: "327.29px",

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",

          padding: "20px 50px",
          gap: "20px",

          boxSizing: "border-box",

          background: "rgba(1, 136, 55, 0.3)",

          margin: "0 auto",
        }}
      >
        {/* =========================================
            FRAME 1261155626
            LEFT CONTENT
        ========================================== */}
        <div
          style={{
            flex: "1 1 0%",
            width: "100%",
            maxWidth: "1090px",
            height: "118.67px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",

            padding: 0,
            margin: "0 auto",

            gap: "10px",

            boxSizing: "border-box",
          }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              width: "396px",
              height: "24px",

              display: "flex",
              alignItems: "center",

              padding: 0,
              margin: 0,

              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "20px",
              lineHeight: "24px",

              color: "#000000",
              whiteSpace: "nowrap",
            }}
          >
            <span>HOME</span>

            <span style={{ margin: "0 6px" }}>&gt;</span>

            <span>ADMISSION UAMC</span>

            <span style={{ margin: "0 6px" }}>&gt;&gt;</span>

            <span style={{ color: GREEN }}>Admission Results</span>
          </div>

          {/* =========================================
              FRAME 51
          ========================================== */}
          <div
            style={{
              width: "100%",
              maxWidth: "1090px",
              height: "84.67px",

              display: "flex",
              flexDirection: "row",
              alignItems: "center",

              padding: "10.8332px 0",
              gap: "10.83px",

              boxSizing: "border-box",
            }}
          >
            {/* Heading → ABOUT UAMC */}
            <h1
              style={{
                width: "564px",
                height: "63px",

                display: "flex",
                alignItems: "center",

                padding: 0,
                margin: 0,

                fontFamily: "'Bitter', serif",
                fontStyle: "normal",
                fontWeight: 300,
                fontSize: "70px",
                lineHeight: "62px",

                color: "#262626",

                whiteSpace: "nowrap",
              }}
            >
              ADMISSION{" "}
              <span
                style={{
                  marginLeft: "10px",
                  fontWeight: 700,
                  color: GREEN,
                }}
              >
                UAMC
              </span>
            </h1>
          </div>
        </div>

        {/* =========================================
            RIGHT LOGO
        ========================================== */}
        <div
          style={{
            width: "250px",
            height: "287.29px",

            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",

            padding: 0,
            margin: "0 auto",

            flexShrink: 0,
          }}
        >
          <img
            src="/logo2.png"
            alt="Uttara Adhunik Medical College"
            style={{
              width: "250px",
              height: "287.29px",

              display: "block",

              objectFit: "contain",
              objectPosition: "center bottom",
            }}
          />
        </div>
      </div>
    </section>
  );
}
