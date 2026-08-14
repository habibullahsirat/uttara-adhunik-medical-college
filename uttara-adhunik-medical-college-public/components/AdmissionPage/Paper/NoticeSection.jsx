// import React from "react";

// const GREEN = "#018837";

// const notices = [
//   {
//     no: "01",
//     date: "April 9, 2025",
//     title: "Necessary Documents for MBBS Admission (Session: 2024–2025)",
//   },
//   {
//     no: "02",
//     date: "April 5, 2025",
//     title:
//       "Admission Notice in MBBS Course (Session: 2024–2025) for Private Medical Colleges",
//   },
//   {
//     no: "03",
//     date: "Jan 25, 2025",
//     title:
//       "Necessary Documents for Admission in MBBS Course (Session: 2023–2024)",
//   },
//   {
//     no: "04",
//     date: "Feb 19, 2024",
//     title: "Admission Notice in MBBS Course (Session: 2023–2024)",
//   },
//   {
//     no: "05",
//     date: "Feb 16, 2024",
//     title: "Notice of MBBS Admission (Session: 2022–2023)",
//   },
//   {
//     no: "06",
//     date: "June 30, 2023",
//     title:
//       "Necessary Documents for Admission in MBBS Course (Session: 2023–2024)",
//   },
//   {
//     no: "07",
//     date: "June 25, 2023",
//     title: "Govt. Circular for MBBS Admission 2023 in Private Medical Colleges",
//   },
//   {
//     no: "08",
//     date: "June 6, 2023",
//     title: "Necessary Documents to Submit Application",
//   },
//   {
//     no: "09",
//     date: "June 5, 2021",
//     title: "Admission Circular (Govt. Notice)",
//   },
// ];

// function DownloadIcon() {
//   return (
//     <svg
//       width="19"
//       height="19"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-hidden="true"
//     >
//       <path
//         d="M12 3V15"
//         stroke={GREEN}
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//       <path
//         d="M7 10L12 15L17 10"
//         stroke={GREEN}
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//       <path
//         d="M5 20H19"
//         stroke={GREEN}
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function ShareIcon() {
//   return (
//     <svg
//       width="19"
//       height="19"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-hidden="true"
//     >
//       <circle cx="18" cy="5" r="2.5" stroke={GREEN} strokeWidth="1.8" />
//       <circle cx="6" cy="12" r="2.5" stroke={GREEN} strokeWidth="1.8" />
//       <circle cx="18" cy="19" r="2.5" stroke={GREEN} strokeWidth="1.8" />

//       <path
//         d="M8.2 10.8L15.8 6.2"
//         stroke={GREEN}
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />

//       <path
//         d="M8.2 13.2L15.8 17.8"
//         stroke={GREEN}
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function ActionButton({ children, label }) {
//   return (
//     <button type="button" aria-label={label} className="notice-action-button">
//       {children}
//     </button>
//   );
// }

// function NoticeRow({ no, date, title }) {
//   return (
//     <div className="notice-row">
//       <div className="notice-number">{no}</div>

//       <div className="notice-date">{date}</div>

//       <div className="notice-separator" />

//       <div className="notice-title">{title}</div>

//       <div className="notice-separator" />

//       <div className="notice-actions">
//         <ActionButton label={`Download ${title}`}>
//           <DownloadIcon />
//         </ActionButton>

//         <ActionButton label={`Share ${title}`}>
//           <ShareIcon />
//         </ActionButton>
//       </div>
//     </div>
//   );
// }

// export default function NoticeSection() {
//   return (
//     <section className="notice-section">
//       <div className="notice-container">
//         {/* Header */}
//         <header className="notice-header">
//           <h2>Admission Papers &amp; Notices</h2>

//           <p>MBBS Admission – Session 2024–2025</p>
//         </header>

//         {/* Green accent visible above the table */}
//         {/* Green accent + heading above the table */}
//         <div className="notice-accent-heading">
//           <div className="notice-accent" />

//           <h3>Recent Admission Notices &amp; Required Documents</h3>
//         </div>

//         {/* Table */}
//         <div className="notice-table">
//           <div className="notice-table-header">
//             <div>No.</div>
//             <div>Date</div>
//             <div />
//             <div>Title</div>
//             <div />
//             <div>Action</div>
//           </div>

//           {notices.map((notice) => (
//             <NoticeRow key={notice.no} {...notice} />
//           ))}
//         </div>

//         {/* Note */}
//         <div className="notice-note">
//           <p>
//             <strong> Note:</strong> All applicants are advised to check the
//             latest official notices on the Directorate General of Medical
//             Education (DGME) website for up-to-date admission instructions and
//             required documents.
//           </p>
//         </div>
//       </div>

//       <style>{`
//         * {
//           box-sizing: border-box;
//         }

//         .notice-section {
//           width: 100%;
//           min-height: 1258px;
//           padding: 76px 77px 80px;
//           background: #fff;
//           font-family: "Inter", Arial, sans-serif;
//         }

//         .notice-container {
//           width: 100%;
//           max-width: 1400px;
//           margin: 0 auto;
//         }

//         /* =========================
//            HEADER
//         ========================= */

//         .notice-header {
//           width: 100%;
//           text-align: center;
//         }

//         .notice-header h2 {
//           margin: 0;
//           font-family: "Bitter", Georgia, serif;
//           font-size: 50px;
//           line-height: 60px;
//           font-weight: 700;
//           letter-spacing: 0.01em;
//           color: #000;
//         }

//         .notice-header p {
//           margin: 8px 0 0;
//           font-family: "Inter", Arial, sans-serif;
//           font-size: 15px;
//           line-height: 22px;
//           font-weight: 400;
//           color: #000;
//         }

//         /* =========================
//            GREEN ACCENT
//         ========================= */

//        .notice-accent-heading {
//   width: 100%;
//   height: 45px;
//   margin-top: 66px;
//   margin-bottom: 19px;

//   display: flex;
//   align-items: center;
// }

// .notice-accent {
//   width: 4px;
//   min-width: 4px;
//   height: 45px;
//   margin: 0 14px 0 0;
//   background: ${GREEN};
// }

// .notice-accent-heading h3 {
//   margin: 0;

//   font-family: "Bitter", Georgia, serif;
//   font-size: 40px;
//   line-height: 45px;
//   font-weight: 700;

//   color: #444444;
// }

//         /* =========================
//            TABLE
//         ========================= */

//         .notice-table {
//           width: 100%;
//           overflow: hidden;
//           background: #fff;
//           border-top: 1px solid rgba(68, 68, 68, 0.45);
//         }

//         .notice-table-header,
//         .notice-row {
//           width: 100%;
//           display: grid;
//           grid-template-columns:
//             70px
//             352px
//             1px
//             minmax(0, 1fr)
//             1px
//             352px;
//           align-items: center;
//           padding-left: 20px;
//           padding-right: 20px;
//         }

//         /* =========================
//            TABLE HEADER
//         ========================= */

//         .notice-table-header {
//           height: 55px;
//           background: rgba(20, 168, 0, 0.10);
//           border-bottom: 1px solid rgba(68, 68, 68, 0.45);

//           font-family: "Bitter", Georgia, serif;
//           font-size: 15px;
//           line-height: 18px;
//           font-weight: 700;
//           color: #444;
//         }

//         .notice-table-header > div:nth-child(4) {
//           padding-left: 116px;
//         }

//         .notice-table-header > div:nth-child(6) {
//           padding-left: 20px;
//           text-align: right;
//         }

//         /* =========================
//            ROW
//         ========================= */

//         .notice-row {
//           min-height: 82px;
//           padding-top: 18px;
//           padding-bottom: 18px;
//           border-bottom: 1px solid rgba(68, 68, 68, 0.12);
//         }

//         .notice-row:last-child {
//           border-bottom: none;
//         }

//         .notice-number,
//         .notice-date,
//         .notice-title {
//           font-family: "Inter", Arial, sans-serif;
//           font-size: 15px;
//           line-height: 17px;
//           font-weight: 400;
//           color: #444;
//         }

//         .notice-number {
//           padding-left: 0;
//         }

//         .notice-date {
//           padding-right: 20px;
//         }

//         .notice-title {
//           padding-left: 116px;
//           padding-right: 20px;
//         }

//         /* =========================
//            SEPARATORS
//         ========================= */

//         .notice-separator {
//           width: 1px;
//           height: 17px;
//           background: rgba(68, 68, 68, 0.5);
//         }

//         /* =========================
//            ACTIONS
//         ========================= */

//         .notice-actions {
//           display: flex;
//           align-items: center;
//           justify-content: flex-end;
//           gap: 10px;
//           padding-left: 20px;
//         }

//         .notice-action-button {
//           width: 40px;
//           height: 40px;
//           padding: 0;
//           border: 0;
//           border-radius: 50%;
//           background: rgba(1, 136, 55, 0.10);

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           cursor: pointer;
//           transition:
//             background-color 0.2s ease,
//             transform 0.2s ease;
//         }

//         .notice-action-button:hover {
//           background: rgba(1, 136, 55, 0.18);
//           transform: translateY(-1px);
//         }

//         .notice-action-button:active {
//           transform: translateY(0);
//         }

//         /* =========================
//            NOTE
//         ========================= */

//         .notice-note {
//           width: 100%;
//           margin-top: 28px;
//           padding: 10px 20px;
//           border-left: 4px solid ${GREEN};
//         }

//         .notice-note p {
//   margin: 0;
//   font-family: "Inter", Arial, sans-serif;
//   font-size: 15px;
//   line-height: 25px;
//   font-weight: 400;
//   color: #444466; /* lighter black */
// }

// .notice-note strong {
//   font-weight: 700;
//   color: #000000; /* Note: stays bold black */
// }

//         /* =========================
//            TABLET
//         ========================= */

//         @media (max-width: 1200px) {
//           .notice-section {
//             padding: 60px 40px 70px;
//           }

//           .notice-header h2 {
//             font-size: 44px;
//             line-height: 52px;
//           }

//           .notice-table-header,
//           .notice-row {
//             grid-template-columns:
//               60px
//               180px
//               1px
//               minmax(0, 1fr)
//               1px
//               120px;
//           }

//           .notice-table-header > div:nth-child(4),
//           .notice-title {
//             padding-left: 40px;
//           }
//         }

//         /* =========================
//            MOBILE
//         ========================= */

//         @media (max-width: 768px) {
//           .notice-section {
//             min-height: auto;
//             padding: 45px 20px 60px;
//           }

//           .notice-header h2 {
//             font-size: 32px;
//             line-height: 40px;
//           }

//           .notice-header p {
//             margin-top: 8px;
//             font-size: 14px;
//             line-height: 22px;
//           }

//           .notice-accent {
//             margin-top: 45px;
//             margin-bottom: 18px;
//           }

//           .notice-table {
//             overflow-x: auto;
//           }

//           .notice-table-header,
//           .notice-row {
//             min-width: 760px;
//             grid-template-columns:
//               60px
//               160px
//               1px
//               minmax(300px, 1fr)
//               1px
//               100px;
//           }

//           .notice-table-header > div:nth-child(4),
//           .notice-title {
//             padding-left: 20px;
//           }

//           .notice-row {
//             min-height: 78px;
//           }

//           .notice-note p {
//             font-size: 14px;
//             line-height: 22px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// Dynamic Version
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
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/admission/paper`,
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
            Admission Papers &amp; Notices
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
            MBBS Admission – Session 2024–2025
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
