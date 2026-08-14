// "use client";

// const GREEN = "#018837";

// export default function Form() {
//   return (
//     <section
//       style={{
//         width: "100%",
//         height: "698.8px",

//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-start",
//         alignItems: "center",

//         padding: "80px",

//         gap: "50px",

//         boxSizing: "border-box",

//         background: "#FFFFFF",
//       }}
//     >
//       {/* =====================================================
//           MAIN CONTENT
//       ====================================================== */}
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "1440px",

//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",

//           padding: 0,
//           margin: 0,

//           /* GAP BETWEEN ADMISSION FORMS AND RECENT NOTICES */
//           gap: "70px",

//           boxSizing: "border-box",
//         }}
//       >
//         {/* =====================================================
//             UPPER SECTION
//         ====================================================== */}
//         <div
//           style={{
//             width: "100%",
//             height: "110px",

//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",

//             padding: 0,
//             margin: 0,

//             boxSizing: "border-box",
//           }}
//         >
//           {/* Admission Forms */}
//           <div
//             style={{
//               width: "422px",
//               height: "60px",

//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "center",
//               alignItems: "center",

//               padding: 0,
//               margin: 0,

//               gap: "10px",

//               boxSizing: "border-box",
//             }}
//           >
//             <h1
//               style={{
//                 width: "422px",
//                 height: "60px",

//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",

//                 padding: 0,
//                 margin: 0,

//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 700,
//                 fontSize: "50px",
//                 lineHeight: "60px",

//                 letterSpacing: "0.01em",

//                 color: "#000000",

//                 textAlign: "center",

//                 whiteSpace: "nowrap",
//               }}
//             >
//               Admission Forms
//             </h1>
//           </div>

//           {/* MBBS Admission Forms */}
//           <div
//             style={{
//               width: "191px",
//               height: "50px",

//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "center",
//               alignItems: "center",

//               padding: "10px",

//               gap: "10px",

//               boxSizing: "border-box",
//             }}
//           >
//             <div
//               style={{
//                 width: "171px",
//                 height: "30px",

//                 display: "flex",
//                 alignItems: "center",

//                 padding: 0,
//                 margin: 0,

//                 fontFamily: "'Inter', sans-serif",
//                 fontStyle: "normal",
//                 fontWeight: 400,
//                 fontSize: "15px",
//                 lineHeight: "30px",

//                 letterSpacing: "0.01em",

//                 color: "#000000",

//                 textAlign: "justify",

//                 whiteSpace: "nowrap",
//               }}
//             >
//               MBBS Admission Forms
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             CONTENT SECTION
//         ====================================================== */}
//         <div
//           style={{
//             width: "100%",
//             height: "280.8px",

//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",

//             padding: 0,
//             margin: 0,

//             /* GAP BETWEEN RECENT HEADING, TABLE AND NOTE */
//             gap: "40px",

//             boxSizing: "border-box",
//           }}
//         >
//           {/* ===================================================
//               RECENT ADMISSION HEADING
//               GREEN BAR
//           ==================================================== */}
//           <div
//             style={{
//               width: "100%",
//               height: "44.8px",

//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",

//               padding: 0,
//               margin: 0,

//               boxSizing: "border-box",
//             }}
//           >
//             {/* Green bar */}
//             <div
//               style={{
//                 width: "4px",
//                 height: "45px",

//                 background: GREEN,

//                 flexShrink: 0,
//               }}
//             />

//             <h2
//               style={{
//                 width: "934px",
//                 height: "45px",

//                 display: "flex",
//                 alignItems: "center",

//                 padding: 0,
//                 paddingLeft: "20px",

//                 margin: 0,

//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 700,
//                 fontSize: "40px",
//                 lineHeight: "45px",

//                 color: "#444444",

//                 whiteSpace: "nowrap",

//                 boxSizing: "border-box",
//               }}
//             >
//               Recent Admission Notices &amp; Required Documents
//             </h2>
//           </div>

//           {/* ===================================================
//               TABLE
//           ==================================================== */}
//           <div
//             style={{
//               width: "1400px",
//               height: "216px",

//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",

//               padding: 0,
//               margin: 0,

//               boxSizing: "border-box",
//             }}
//           >
//             {/* =================================================
//                 TABLE HEADER
//             ================================================== */}
//             <div
//               style={{
//                 width: "1400px",
//                 height: "56px",

//                 display: "grid",

//                 gridTemplateColumns: "70px 235px 235px 350px 235px 235px",

//                 alignItems: "center",

//                 padding: "20px",

//                 boxSizing: "border-box",

//                 background: "rgba(20, 168, 0, 0.1)",

//                 borderTop: "1px solid rgba(68, 68, 68, 0.5)",

//                 borderBottom: "1px solid rgba(68, 68, 68, 0.5)",
//               }}
//             >
//               {/* No. */}
//               <HeaderCell>No.</HeaderCell>

//               {/* Date */}
//               <HeaderCell>Date</HeaderCell>

//               {/* Divider */}
//               <HeaderDivider />

//               {/* Title */}
//               <HeaderCell>Title</HeaderCell>

//               {/* Divider */}
//               <HeaderDivider />

//               {/* Action */}
//               <HeaderCell align="right">Action</HeaderCell>
//             </div>

//             {/* =================================================
//                 ROW 01
//             ================================================== */}
//             <TableRow>
//               <TableCell>01</TableCell>

//               <TableCell>June 22, 2022</TableCell>

//               <VerticalLine />

//               <TableCell>
//                 Application Form for MBBS Admission (Poor &amp; Meritorious
//                 Quota)
//               </TableCell>

//               <VerticalLine />

//               <ActionCell />
//             </TableRow>

//             {/* =================================================
//                 ROW 02
//             ================================================== */}
//             <TableRow>
//               <TableCell>02</TableCell>

//               <TableCell>June 5, 2021</TableCell>

//               <VerticalLine />

//               <TableCell>General Application Form for MBBS Admission</TableCell>

//               <VerticalLine />

//               <ActionCell />
//             </TableRow>
//           </div>

//           {/* ===================================================
//               NOTE
//               GREEN BAR
//           ==================================================== */}
//           <div
//             style={{
//               width: "1427px",
//               height: "48px",

//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "center",
//               alignItems: "center",

//               padding: "10px 20px",

//               margin: 0,

//               gap: "10px",

//               boxSizing: "border-box",

//               borderLeft: `4px solid ${GREEN}`,
//             }}
//           >
//             <div
//               style={{
//                 width: "1387px",
//                 height: "28px",

//                 display: "flex",
//                 alignItems: "center",

//                 padding: 0,
//                 margin: 0,

//                 fontFamily: "'Inter', sans-serif",
//                 fontStyle: "normal",

//                 /* REMAINING NOTE TEXT IS NORMAL */
//                 fontWeight: 400,

//                 fontSize: "16px",
//                 lineHeight: "27px",

//                 /* SLIGHTLY LIGHTER BLACK */
//                 color: "#444444",

//                 whiteSpace: "nowrap",
//               }}
//             >
//               {/* ONLY "Note:" IS BOLD */}
//               <strong
//                 style={{
//                   fontWeight: 700,
//                   color: "#000000",
//                 }}
//               >
//                 Note:
//               </strong>
//               &nbsp;Applicants are advised to fill out the appropriate form as
//               per their eligibility criteria and submit it along with required
//               documents to the college office within the notified deadlines.
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================================================
//    HEADER CELL
// ========================================================= */

// function HeaderCell({ children, align = "left" }) {
//   return (
//     <div
//       style={{
//         height: "11px",

//         display: "flex",
//         alignItems: "center",

//         padding: 0,
//         margin: 0,

//         fontFamily: "'Bitter', serif",
//         fontStyle: "normal",
//         fontWeight: 700,
//         fontSize: "15px",
//         lineHeight: "15px",

//         color: "#444444",

//         justifyContent: align === "right" ? "flex-end" : "flex-start",

//         textAlign: align,

//         whiteSpace: "nowrap",
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// /* =========================================================
//    HEADER DIVIDER
// ========================================================= */

// function HeaderDivider() {
//   return (
//     <div
//       style={{
//         width: "16px",
//         height: "16px",

//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",

//         padding: 0,
//         margin: 0,
//       }}
//     >
//       <div
//         style={{
//           width: "16px",
//           height: "1px",

//           background: "#444444",

//           transform: "rotate(90deg)",
//         }}
//       />
//     </div>
//   );
// }

// /* =========================================================
//    TABLE ROW
// ========================================================= */

// function TableRow({ children }) {
//   return (
//     <div
//       style={{
//         width: "1400px",
//         height: "80px",

//         display: "grid",

//         gridTemplateColumns: "70px 235px 235px 350px 235px 235px",

//         alignItems: "center",

//         padding: "20px",

//         boxSizing: "border-box",
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// /* =========================================================
//    TABLE CELL
// ========================================================= */

// function TableCell({ children }) {
//   return (
//     <div
//       style={{
//         minWidth: 0,

//         display: "flex",
//         alignItems: "center",

//         padding: 0,
//         margin: 0,

//         fontFamily: "'Inter', sans-serif",
//         fontStyle: "normal",
//         fontWeight: 400,
//         fontSize: "15px",
//         lineHeight: "15px",

//         color: "#444444",
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// /* =========================================================
//    VERTICAL DIVIDER
// ========================================================= */

// function VerticalLine() {
//   return (
//     <div
//       style={{
//         width: "16px",
//         height: "16px",

//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",

//         padding: 0,
//         margin: 0,
//       }}
//     >
//       <div
//         style={{
//           width: "16px",
//           height: "1px",

//           background: "#444444",

//           transform: "rotate(90deg)",
//         }}
//       />
//     </div>
//   );
// }

// /* =========================================================
//    ACTION CELL
// ========================================================= */

// function ActionCell() {
//   return (
//     <div
//       style={{
//         width: "235px",
//         height: "40px",

//         display: "flex",
//         flexDirection: "row",

//         justifyContent: "flex-end",
//         alignItems: "center",

//         gap: "10px",

//         padding: 0,
//         margin: 0,
//       }}
//     >
//       {/* DOWNLOAD */}
//       <button
//         type="button"
//         aria-label="Download"
//         style={{
//           width: "40px",
//           height: "40px",

//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",

//           padding: 0,
//           margin: 0,

//           border: "none",
//           borderRadius: "100px",

//           background: "rgba(1, 136, 55, 0.1)",

//           cursor: "pointer",
//         }}
//       >
//         <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
//           <path
//             d="M2.25 9.825V11.25C2.25 12.0784 2.92157 12.75 3.75 12.75H11.25C12.0784 12.75 12.75 12.0784 12.75 11.25V9.825"
//             stroke={GREEN}
//             strokeWidth="1.66667"
//             strokeLinecap="round"
//           />

//           <path
//             d="M7.5 2.25V9.75"
//             stroke={GREEN}
//             strokeWidth="1.66667"
//             strokeLinecap="round"
//           />

//           <path
//             d="M4.875 7.125L7.5 9.75L10.125 7.125"
//             stroke={GREEN}
//             strokeWidth="1.66667"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </button>

//       {/* SHARE */}
//       <button
//         type="button"
//         aria-label="Share"
//         style={{
//           width: "40px",
//           height: "40px",

//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",

//           padding: 0,
//           margin: 0,

//           border: "none",
//           borderRadius: "100px",

//           background: "rgba(1, 136, 55, 0.1)",

//           cursor: "pointer",
//         }}
//       >
//         <svg width="16" height="17" viewBox="0 0 16 17" fill="none">
//           <circle
//             cx="12.5"
//             cy="3.5"
//             r="1.75"
//             stroke={GREEN}
//             strokeWidth="1.66667"
//           />

//           <circle
//             cx="3.5"
//             cy="8.5"
//             r="1.75"
//             stroke={GREEN}
//             strokeWidth="1.66667"
//           />

//           <circle
//             cx="12.5"
//             cy="13.5"
//             r="1.75"
//             stroke={GREEN}
//             strokeWidth="1.66667"
//           />

//           <path
//             d="M5.05 7.55L10.95 4.45"
//             stroke={GREEN}
//             strokeWidth="1.66667"
//             strokeLinecap="round"
//           />

//           <path
//             d="M5.05 9.45L10.95 12.55"
//             stroke={GREEN}
//             strokeWidth="1.66667"
//             strokeLinecap="round"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";

const GREEN = "#018837";

function DownloadIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 3V15"
        stroke={GREEN}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 10L12 15L17 10"
        stroke={GREEN}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 20H19"
        stroke={GREEN}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="2.5" stroke={GREEN} strokeWidth="1.8" />

      <circle cx="6" cy="12" r="2.5" stroke={GREEN} strokeWidth="1.8" />

      <circle cx="18" cy="19" r="2.5" stroke={GREEN} strokeWidth="1.8" />

      <path
        d="M8.2 10.8L15.8 6.2"
        stroke={GREEN}
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M8.2 13.2L15.8 17.8"
        stroke={GREEN}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NoticeRow({ no, date, title, pdfUrl, onShare, copiedId, id }) {
  const handleDownload = () => {
    if (!pdfUrl) return;

    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="
        grid min-h-[82px] w-full items-center
        grid-cols-[60px_160px_1px_minmax(300px,1fr)_1px_100px]
        border-b border-[#444444]/12
        px-5 py-[18px]
        xl:grid-cols-[70px_352px_1px_minmax(0,1fr)_1px_352px]
        xl:px-5
        lg:grid-cols-[60px_180px_1px_minmax(0,1fr)_1px_120px]
        max-md:min-w-[760px]
      "
    >
      {/* Number */}
      <div
        className="
          font-['Inter',Arial,sans-serif]
          text-[15px] leading-[17px] font-normal
          text-[#444]
        "
      >
        {no}
      </div>

      {/* Date */}
      <div
        className="
          pr-5
          font-['Inter',Arial,sans-serif]
          text-[15px] leading-[17px] font-normal
          text-[#444]
        "
      >
        {date}
      </div>

      {/* Separator */}
      <div className="h-[17px] w-px bg-[#444]/50" />

      {/* Title */}
      <div
        className="
          px-5
          font-['Inter',Arial,sans-serif]
          text-[15px] leading-[17px] font-normal
          text-[#444]
          lg:px-10
          xl:pl-[116px]
        "
      >
        {title}
      </div>

      {/* Separator */}
      <div className="h-[17px] w-px bg-[#444]/50" />

      {/* Actions */}
      <div
        className="
          flex items-center justify-end gap-2.5 pl-5
        "
      >
        {/* Download */}
        <button
          type="button"
          aria-label={`Download ${title}`}
          onClick={handleDownload}
          disabled={!pdfUrl}
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full
            bg-[#018837]/10
            transition-all duration-200
            hover:-translate-y-px hover:bg-[#018837]/18
            active:translate-y-0
            disabled:cursor-not-allowed disabled:opacity-40
          "
        >
          <DownloadIcon />
        </button>

        {/* Share */}
        <div className="relative">
          <button
            type="button"
            aria-label={`Share ${title}`}
            onClick={() => onShare(id, pdfUrl)}
            disabled={!pdfUrl}
            className="
              flex h-10 w-10 shrink-0 items-center justify-center
              rounded-full
              bg-[#018837]/10
              transition-all duration-200
              hover:-translate-y-px hover:bg-[#018837]/18
              active:translate-y-0
              disabled:cursor-not-allowed disabled:opacity-40
            "
          >
            <ShareIcon />
          </button>

          {/* Copied message */}
          {copiedId === id && (
            <div
              className="
                absolute right-0 top-12 z-20
                whitespace-nowrap
                rounded-md bg-[#018837]
                px-3 py-2
                text-xs font-medium text-white
                shadow-lg
              "
            >
              Link copied
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function NoticeSection() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/admission/form`,
          {
            method: "GET",
            cache: "no-store",
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch admission notices.");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid admission notice response.");
        }

        setNotices(data);
      } catch (err) {
        console.error("Admission notices error:", err);
        setError("Unable to load admission notices.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "—";

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) {
      return "—";
    }

    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  /**
   * Your API response was displayed with markdown:
   *
   * [https://...pdf](https://...pdf)
   *
   * If the actual API returns only the URL, this function simply
   * returns it unchanged. If it returns markdown, it extracts
   * the real URL.
   */
  const cleanPdfUrl = (url) => {
    if (!url || typeof url !== "string") {
      return "";
    }

    const markdownMatch = url.match(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/);

    if (markdownMatch) {
      return markdownMatch[2];
    }

    return url.trim();
  };

  const handleShare = async (id, pdfUrl) => {
    const url = cleanPdfUrl(pdfUrl);

    if (!url) return;

    try {
      await navigator.clipboard.writeText(url);

      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);

      // Fallback for browsers where Clipboard API isn't available
      try {
        const textarea = document.createElement("textarea");
        textarea.value = url;

        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";

        document.body.appendChild(textarea);
        textarea.select();

        document.execCommand("copy");
        textarea.remove();

        setCopiedId(id);

        setTimeout(() => {
          setCopiedId(null);
        }, 2000);
      } catch (fallbackError) {
        console.error("Fallback copy failed:", fallbackError);
      }
    }
  };

  return (
    <section
      className="
        w-full
        bg-white
        px-5 pb-[60px] pt-[45px]
        sm:px-8
        md:px-10 md:pb-[70px] md:pt-[60px]
        lg:px-[60px]
        xl:min-h-[1258px] xl:px-[77px] xl:pb-20 xl:pt-[76px]
      "
    >
      <div className="mx-auto w-full max-w-[1400px]">
        {/* =========================
            HEADER
        ========================= */}
        <header className="w-full text-center">
          <h2
            className="
              m-0
              font-['Bitter',Georgia,serif]
              text-[32px] leading-10 font-bold
              tracking-[0.01em]
              text-black
              sm:text-[38px] sm:leading-[46px]
              md:text-[44px] md:leading-[52px]
              xl:text-[50px] xl:leading-[60px]
            "
          >
            Admission Forms
          </h2>

          <p
            className="
              mt-2
              font-['Inter',Arial,sans-serif]
              text-[14px] leading-[22px] font-normal
              text-black
              md:text-[15px]
            "
          >
            MBBS Admission Forms
          </p>
        </header>

        {/* =========================
            ACCENT + HEADING
        ========================= */}
        <div
          className="
            mt-[45px] mb-[19px]
            flex h-auto min-h-[45px]
            w-full items-center
            md:mt-[55px]
            xl:mt-[66px]
          "
        >
          <div
            className="
              mr-3.5 h-[45px] w-1 shrink-0
              bg-[#018837]
            "
          />

          <h3
            className="
              m-0
              font-['Bitter',Georgia,serif]
              text-[25px] leading-[32px] font-bold
              text-[#444]
              sm:text-[30px] sm:leading-[38px]
              md:text-[34px] md:leading-[42px]
              xl:text-[40px] xl:leading-[45px]
            "
          >
            Recent Admission Notices &amp; Required Documents
          </h3>
        </div>

        {/* =========================
            TABLE
        ========================= */}
        <div className="w-full overflow-x-auto overflow-y-hidden bg-white">
          <div
            className="
              w-full
              overflow-hidden
              border-t border-[#444]/45
              max-md:min-w-[760px]
            "
          >
            {/* Table Header */}
            <div
              className="
                grid h-[55px] w-full items-center
                grid-cols-[60px_160px_1px_minmax(300px,1fr)_1px_100px]
                border-b border-[#444]/45
                bg-[#14a800]/10
                px-5
                font-['Bitter',Georgia,serif]
                text-[15px] leading-[18px] font-bold
                text-[#444]
                lg:grid-cols-[60px_180px_1px_minmax(0,1fr)_1px_120px]
                xl:grid-cols-[70px_352px_1px_minmax(0,1fr)_1px_352px]
              "
            >
              <div>No.</div>

              <div>Date</div>

              <div />

              <div
                className="
                  pl-5
                  lg:pl-10
                  xl:pl-[116px]
                "
              >
                Title
              </div>

              <div />

              <div className="pl-5 text-right">Action</div>
            </div>

            {/* Loading */}
            {loading && (
              <div
                className="
                  flex min-h-[150px] items-center justify-center
                  font-['Inter',Arial,sans-serif]
                  text-[15px] text-[#444]
                "
              >
                Loading admission notices...
              </div>
            )}

            {/* Error */}
            {!loading && error && (
              <div
                className="
                  flex min-h-[150px] items-center justify-center
                  px-5 text-center
                  font-['Inter',Arial,sans-serif]
                  text-[15px] text-red-600
                "
              >
                {error}
              </div>
            )}

            {/* Empty */}
            {!loading && !error && notices.length === 0 && (
              <div
                className="
                  flex min-h-[150px] items-center justify-center
                  font-['Inter',Arial,sans-serif]
                  text-[15px] text-[#444]
                "
              >
                No admission notices available.
              </div>
            )}

            {/* Dynamic Rows */}
            {!loading &&
              !error &&
              notices.map((notice, index) => (
                <NoticeRow
                  key={notice._id}
                  id={notice._id}
                  no={String(index + 1).padStart(2, "0")}
                  date={formatDate(notice.createdAt)}
                  title={notice.title}
                  pdfUrl={cleanPdfUrl(notice.pdfUrl)}
                  onShare={handleShare}
                  copiedId={copiedId}
                />
              ))}
          </div>
        </div>

        {/* =========================
            NOTE
        ========================= */}
        <div
          className="
            mt-7 w-full
            border-l-4 border-[#018837]
            px-5 py-2.5
          "
        >
          <p
            className="
              m-0
              font-['Inter',Arial,sans-serif]
              text-[14px] leading-[22px] font-normal
              text-[#444466]
              md:text-[15px] md:leading-[25px]
            "
          >
            <strong className="font-bold text-black">Note:</strong> All
            applicants are advised to check the latest official notices on the
            Directorate General of Medical Education (DGME) website for
            up-to-date admission instructions and required documents.
          </p>
        </div>
      </div>
    </section>
  );
}
