"use client";

const GREEN = "#018837";

export default function Form() {
  return (
    <section
      style={{
        width: "100%",
        height: "698.8px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",

        padding: "80px",

        gap: "50px",

        boxSizing: "border-box",

        background: "#FFFFFF",
      }}
    >
      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          padding: 0,
          margin: 0,

          /* GAP BETWEEN ADMISSION FORMS AND RECENT NOTICES */
          gap: "70px",

          boxSizing: "border-box",
        }}
      >
        {/* =====================================================
            UPPER SECTION
        ====================================================== */}
        <div
          style={{
            width: "100%",
            height: "110px",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            padding: 0,
            margin: 0,

            boxSizing: "border-box",
          }}
        >
          {/* Admission Forms */}
          <div
            style={{
              width: "422px",
              height: "60px",

              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",

              padding: 0,
              margin: 0,

              gap: "10px",

              boxSizing: "border-box",
            }}
          >
            <h1
              style={{
                width: "422px",
                height: "60px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                padding: 0,
                margin: 0,

                fontFamily: "'Bitter', serif",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "50px",
                lineHeight: "60px",

                letterSpacing: "0.01em",

                color: "#000000",

                textAlign: "center",

                whiteSpace: "nowrap",
              }}
            >
              Admission Forms
            </h1>
          </div>

          {/* MBBS Admission Forms */}
          <div
            style={{
              width: "191px",
              height: "50px",

              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",

              padding: "10px",

              gap: "10px",

              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "171px",
                height: "30px",

                display: "flex",
                alignItems: "center",

                padding: 0,
                margin: 0,

                fontFamily: "'Inter', sans-serif",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "30px",

                letterSpacing: "0.01em",

                color: "#000000",

                textAlign: "justify",

                whiteSpace: "nowrap",
              }}
            >
              MBBS Admission Forms
            </div>
          </div>
        </div>

        {/* =====================================================
            CONTENT SECTION
        ====================================================== */}
        <div
          style={{
            width: "100%",
            height: "280.8px",

            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",

            padding: 0,
            margin: 0,

            /* GAP BETWEEN RECENT HEADING, TABLE AND NOTE */
            gap: "40px",

            boxSizing: "border-box",
          }}
        >
          {/* ===================================================
              RECENT ADMISSION HEADING
              GREEN BAR
          ==================================================== */}
          <div
            style={{
              width: "100%",
              height: "44.8px",

              display: "flex",
              flexDirection: "row",
              alignItems: "center",

              padding: 0,
              margin: 0,

              boxSizing: "border-box",
            }}
          >
            {/* Green bar */}
            <div
              style={{
                width: "4px",
                height: "45px",

                background: GREEN,

                flexShrink: 0,
              }}
            />

            <h2
              style={{
                width: "934px",
                height: "45px",

                display: "flex",
                alignItems: "center",

                padding: 0,
                paddingLeft: "20px",

                margin: 0,

                fontFamily: "'Bitter', serif",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "45px",

                color: "#444444",

                whiteSpace: "nowrap",

                boxSizing: "border-box",
              }}
            >
              Recent Admission Notices &amp; Required Documents
            </h2>
          </div>

          {/* ===================================================
              TABLE
          ==================================================== */}
          <div
            style={{
              width: "1400px",
              height: "216px",

              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",

              padding: 0,
              margin: 0,

              boxSizing: "border-box",
            }}
          >
            {/* =================================================
                TABLE HEADER
            ================================================== */}
            <div
              style={{
                width: "1400px",
                height: "56px",

                display: "grid",

                gridTemplateColumns: "70px 235px 235px 350px 235px 235px",

                alignItems: "center",

                padding: "20px",

                boxSizing: "border-box",

                background: "rgba(20, 168, 0, 0.1)",

                borderTop: "1px solid rgba(68, 68, 68, 0.5)",

                borderBottom: "1px solid rgba(68, 68, 68, 0.5)",
              }}
            >
              {/* No. */}
              <HeaderCell>No.</HeaderCell>

              {/* Date */}
              <HeaderCell>Date</HeaderCell>

              {/* Divider */}
              <HeaderDivider />

              {/* Title */}
              <HeaderCell>Title</HeaderCell>

              {/* Divider */}
              <HeaderDivider />

              {/* Action */}
              <HeaderCell align="right">Action</HeaderCell>
            </div>

            {/* =================================================
                ROW 01
            ================================================== */}
            <TableRow>
              <TableCell>01</TableCell>

              <TableCell>June 22, 2022</TableCell>

              <VerticalLine />

              <TableCell>
                Application Form for MBBS Admission (Poor &amp; Meritorious
                Quota)
              </TableCell>

              <VerticalLine />

              <ActionCell />
            </TableRow>

            {/* =================================================
                ROW 02
            ================================================== */}
            <TableRow>
              <TableCell>02</TableCell>

              <TableCell>June 5, 2021</TableCell>

              <VerticalLine />

              <TableCell>General Application Form for MBBS Admission</TableCell>

              <VerticalLine />

              <ActionCell />
            </TableRow>
          </div>

          {/* ===================================================
              NOTE
              GREEN BAR
          ==================================================== */}
          <div
            style={{
              width: "1427px",
              height: "48px",

              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",

              padding: "10px 20px",

              margin: 0,

              gap: "10px",

              boxSizing: "border-box",

              borderLeft: `4px solid ${GREEN}`,
            }}
          >
            <div
              style={{
                width: "1387px",
                height: "28px",

                display: "flex",
                alignItems: "center",

                padding: 0,
                margin: 0,

                fontFamily: "'Inter', sans-serif",
                fontStyle: "normal",

                /* REMAINING NOTE TEXT IS NORMAL */
                fontWeight: 400,

                fontSize: "16px",
                lineHeight: "27px",

                /* SLIGHTLY LIGHTER BLACK */
                color: "#444444",

                whiteSpace: "nowrap",
              }}
            >
              {/* ONLY "Note:" IS BOLD */}
              <strong
                style={{
                  fontWeight: 700,
                  color: "#000000",
                }}
              >
                Note:
              </strong>
              &nbsp;Applicants are advised to fill out the appropriate form as
              per their eligibility criteria and submit it along with required
              documents to the college office within the notified deadlines.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HEADER CELL
========================================================= */

function HeaderCell({ children, align = "left" }) {
  return (
    <div
      style={{
        height: "11px",

        display: "flex",
        alignItems: "center",

        padding: 0,
        margin: 0,

        fontFamily: "'Bitter', serif",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "15px",
        lineHeight: "15px",

        color: "#444444",

        justifyContent: align === "right" ? "flex-end" : "flex-start",

        textAlign: align,

        whiteSpace: "nowrap",
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   HEADER DIVIDER
========================================================= */

function HeaderDivider() {
  return (
    <div
      style={{
        width: "16px",
        height: "16px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          width: "16px",
          height: "1px",

          background: "#444444",

          transform: "rotate(90deg)",
        }}
      />
    </div>
  );
}

/* =========================================================
   TABLE ROW
========================================================= */

function TableRow({ children }) {
  return (
    <div
      style={{
        width: "1400px",
        height: "80px",

        display: "grid",

        gridTemplateColumns: "70px 235px 235px 350px 235px 235px",

        alignItems: "center",

        padding: "20px",

        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   TABLE CELL
========================================================= */

function TableCell({ children }) {
  return (
    <div
      style={{
        minWidth: 0,

        display: "flex",
        alignItems: "center",

        padding: 0,
        margin: 0,

        fontFamily: "'Inter', sans-serif",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "15px",

        color: "#444444",
      }}
    >
      {children}
    </div>
  );
}

/* =========================================================
   VERTICAL DIVIDER
========================================================= */

function VerticalLine() {
  return (
    <div
      style={{
        width: "16px",
        height: "16px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          width: "16px",
          height: "1px",

          background: "#444444",

          transform: "rotate(90deg)",
        }}
      />
    </div>
  );
}

/* =========================================================
   ACTION CELL
========================================================= */

function ActionCell() {
  return (
    <div
      style={{
        width: "235px",
        height: "40px",

        display: "flex",
        flexDirection: "row",

        justifyContent: "flex-end",
        alignItems: "center",

        gap: "10px",

        padding: 0,
        margin: 0,
      }}
    >
      {/* DOWNLOAD */}
      <button
        type="button"
        aria-label="Download"
        style={{
          width: "40px",
          height: "40px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          padding: 0,
          margin: 0,

          border: "none",
          borderRadius: "100px",

          background: "rgba(1, 136, 55, 0.1)",

          cursor: "pointer",
        }}
      >
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path
            d="M2.25 9.825V11.25C2.25 12.0784 2.92157 12.75 3.75 12.75H11.25C12.0784 12.75 12.75 12.0784 12.75 11.25V9.825"
            stroke={GREEN}
            strokeWidth="1.66667"
            strokeLinecap="round"
          />

          <path
            d="M7.5 2.25V9.75"
            stroke={GREEN}
            strokeWidth="1.66667"
            strokeLinecap="round"
          />

          <path
            d="M4.875 7.125L7.5 9.75L10.125 7.125"
            stroke={GREEN}
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* SHARE */}
      <button
        type="button"
        aria-label="Share"
        style={{
          width: "40px",
          height: "40px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          padding: 0,
          margin: 0,

          border: "none",
          borderRadius: "100px",

          background: "rgba(1, 136, 55, 0.1)",

          cursor: "pointer",
        }}
      >
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
          <circle
            cx="12.5"
            cy="3.5"
            r="1.75"
            stroke={GREEN}
            strokeWidth="1.66667"
          />

          <circle
            cx="3.5"
            cy="8.5"
            r="1.75"
            stroke={GREEN}
            strokeWidth="1.66667"
          />

          <circle
            cx="12.5"
            cy="13.5"
            r="1.75"
            stroke={GREEN}
            strokeWidth="1.66667"
          />

          <path
            d="M5.05 7.55L10.95 4.45"
            stroke={GREEN}
            strokeWidth="1.66667"
            strokeLinecap="round"
          />

          <path
            d="M5.05 9.45L10.95 12.55"
            stroke={GREEN}
            strokeWidth="1.66667"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
