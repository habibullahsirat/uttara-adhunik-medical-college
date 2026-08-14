// // "use client";

// // import React from "react";

// // const GREEN = "#018837";

// // const notices = [
// //   {
// //     no: "01",
// //     date: "July 18, 2022",
// //     title: "MBBS Admission",
// //   },
// //   {
// //     no: "02",
// //     date: "July 7, 2022",
// //     title: "Selected Candidates under General Quota Merit List",
// //   },
// //   {
// //     no: "03",
// //     date: "July 7, 2022",
// //     title: "Selected Candidates under Freedom Fighter Quota Merit List",
// //   },
// //   {
// //     no: "04",
// //     date: "July 6, 2022",
// //     title: "Total Merit List (A–Z) for MBBS Admission",
// //   },
// //   {
// //     no: "05",
// //     date: "July 6, 2022",
// //     title: "Total Applications (A–Z) – Freedom Fighter Quota",
// //   },
// //   {
// //     no: "06",
// //     date: "July 6, 2022",
// //     title: "Total Applications – Poor & Meritorious Quota",
// //   },
// //   {
// //     no: "07",
// //     date: "August 26, 2021",
// //     title: "General Notice for Admission",
// //   },
// // ];

// // function DownloadIcon() {
// //   return (
// //     <svg
// //       width="19"
// //       height="19"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       xmlns="http://www.w3.org/2000/svg"
// //       aria-hidden="true"
// //     >
// //       <path
// //         d="M12 3V15"
// //         stroke={GREEN}
// //         strokeWidth="1.8"
// //         strokeLinecap="round"
// //       />
// //       <path
// //         d="M7 10L12 15L17 10"
// //         stroke={GREEN}
// //         strokeWidth="1.8"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //       />
// //       <path
// //         d="M5 20H19"
// //         stroke={GREEN}
// //         strokeWidth="1.8"
// //         strokeLinecap="round"
// //       />
// //     </svg>
// //   );
// // }

// // function ShareIcon() {
// //   return (
// //     <svg
// //       width="19"
// //       height="19"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       xmlns="http://www.w3.org/2000/svg"
// //       aria-hidden="true"
// //     >
// //       <circle cx="18" cy="5" r="2.5" stroke={GREEN} strokeWidth="1.8" />
// //       <circle cx="6" cy="12" r="2.5" stroke={GREEN} strokeWidth="1.8" />
// //       <circle cx="18" cy="19" r="2.5" stroke={GREEN} strokeWidth="1.8" />

// //       <path
// //         d="M8.2 10.8L15.8 6.2"
// //         stroke={GREEN}
// //         strokeWidth="1.8"
// //         strokeLinecap="round"
// //       />

// //       <path
// //         d="M8.2 13.2L15.8 17.8"
// //         stroke={GREEN}
// //         strokeWidth="1.8"
// //         strokeLinecap="round"
// //       />
// //     </svg>
// //   );
// // }

// // function ActionButton({ children, label }) {
// //   return (
// //     <button type="button" aria-label={label} className="notice-action-button">
// //       {children}
// //     </button>
// //   );
// // }

// // function NoticeRow({ no, date, title }) {
// //   return (
// //     <div className="notice-row">
// //       <div className="notice-number">{no}</div>

// //       <div className="notice-date">{date}</div>

// //       <div className="notice-separator" />

// //       <div className="notice-title">{title}</div>

// //       <div className="notice-separator" />

// //       <div className="notice-actions">
// //         <ActionButton label={`Download ${title}`}>
// //           <DownloadIcon />
// //         </ActionButton>

// //         <ActionButton label={`Share ${title}`}>
// //           <ShareIcon />
// //         </ActionButton>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function Result() {
// //   return (
// //     <section className="notice-section">
// //       <div className="notice-container">
// //         {/* Header */}
// //         <header className="notice-header">
// //           <h2>Admission Results</h2>

// //           <p>MBBS Admission (Session: 2021–2022)</p>
// //         </header>

// //         {/* Green accent visible above the table */}
// //         {/* Green accent + heading above the table */}
// //         <div className="notice-accent-heading">
// //           <div className="notice-accent" />

// //           <h3>Recent Admission Notices &amp; Required Documents</h3>
// //         </div>

// //         {/* Table */}
// //         <div className="notice-table">
// //           <div className="notice-table-header">
// //             <div>No.</div>
// //             <div>Date</div>
// //             <div />
// //             <div>Title</div>
// //             <div />
// //             <div>Action</div>
// //           </div>

// //           {notices.map((notice) => (
// //             <NoticeRow key={notice.no} {...notice} />
// //           ))}
// //         </div>

// //         {/* Note */}
// //         <div className="notice-note">
// //           <p>
// //             <strong>Note:</strong> Applicants are advised to fill out the
// //             appropriate form as per their eligibility criteria and submit it
// //             along with required documents to the college office within the
// //             notified deadlines.
// //           </p>
// //         </div>
// //       </div>

// //       <style>{`
// //         * {
// //           box-sizing: border-box;
// //         }

// //         .notice-section {
// //   width: 100%;
// //   min-height: 1130px;
// //   padding: 76px 77px 30px;
// //   background: #fff;
// //   font-family: "Inter", Arial, sans-serif;
// // }

// //         .notice-container {
// //           width: 100%;
// //           max-width: 1400px;
// //           margin: 0 auto;
// //         }

// //         /* =========================
// //            HEADER
// //         ========================= */

// //         .notice-header {
// //           width: 100%;
// //           text-align: center;
// //         }

// //         .notice-header h2 {
// //           margin: 0;
// //           font-family: "Bitter", Georgia, serif;
// //           font-size: 50px;
// //           line-height: 60px;
// //           font-weight: 700;
// //           letter-spacing: 0.01em;
// //           color: #000;
// //         }

// //         .notice-header p {
// //           margin: 8px 0 0;
// //           font-family: "Inter", Arial, sans-serif;
// //           font-size: 15px;
// //           line-height: 22px;
// //           font-weight: 400;
// //           color: #000;
// //         }

// //         /* =========================
// //            GREEN ACCENT
// //         ========================= */

// //         .notice-accent-heading {
// //   width: 100%;
// //   height: 45px;
// //   margin-top: 66px;
// //   margin-bottom: 19px;

// //   display: flex;
// //   align-items: center;
// // }

// // .notice-accent {
// //   width: 4px;
// //   min-width: 4px;
// //   height: 45px;
// //   margin: 0 14px 0 0;
// //   background: ${GREEN};
// // }

// // .notice-accent-heading h3 {
// //   margin: 0;

// //   font-family: "Bitter", Georgia, serif;
// //   font-size: 40px;
// //   line-height: 45px;
// //   font-weight: 700;

// //   color: #444444;
// // }

// //         /* =========================
// //            TABLE
// //         ========================= */

// //         .notice-table {
// //           width: 100%;
// //           overflow: hidden;
// //           background: #fff;
// //           border-top: 1px solid rgba(68, 68, 68, 0.45);
// //         }

// //         .notice-table-header,
// //         .notice-row {
// //           width: 100%;
// //           display: grid;
// //           grid-template-columns:
// //             70px
// //             352px
// //             1px
// //             minmax(0, 1fr)
// //             1px
// //             352px;
// //           align-items: center;
// //           padding-left: 20px;
// //           padding-right: 20px;
// //         }

// //         /* =========================
// //            TABLE HEADER
// //         ========================= */

// //         .notice-table-header {
// //           height: 55px;
// //           background: rgba(20, 168, 0, 0.10);
// //           border-bottom: 1px solid rgba(68, 68, 68, 0.45);

// //           font-family: "Bitter", Georgia, serif;
// //           font-size: 15px;
// //           line-height: 18px;
// //           font-weight: 700;
// //           color: #444;
// //         }

// //         .notice-table-header > div:nth-child(4) {
// //           padding-left: 116px;
// //         }

// //         .notice-table-header > div:nth-child(6) {
// //           padding-left: 20px;
// //           text-align: right;
// //         }

// //         /* =========================
// //            ROW
// //         ========================= */

// //         .notice-row {
// //           min-height: 82px;
// //           padding-top: 18px;
// //           padding-bottom: 18px;
// //           border-bottom: 1px solid rgba(68, 68, 68, 0.12);
// //         }

// //         .notice-row:last-child {
// //           border-bottom: none;
// //         }

// //         .notice-number,
// //         .notice-date,
// //         .notice-title {
// //           font-family: "Inter", Arial, sans-serif;
// //           font-size: 15px;
// //           line-height: 17px;
// //           font-weight: 400;
// //           color: #444;
// //         }

// //         .notice-number {
// //           padding-left: 0;
// //         }

// //         .notice-date {
// //           padding-right: 20px;
// //         }

// //         .notice-title {
// //           padding-left: 116px;
// //           padding-right: 20px;
// //         }

// //         /* =========================
// //            SEPARATORS
// //         ========================= */

// //         .notice-separator {
// //           width: 1px;
// //           height: 17px;
// //           background: rgba(68, 68, 68, 0.5);
// //         }

// //         /* =========================
// //            ACTIONS
// //         ========================= */

// //         .notice-actions {
// //           display: flex;
// //           align-items: center;
// //           justify-content: flex-end;
// //           gap: 10px;
// //           padding-left: 20px;
// //         }

// //         .notice-action-button {
// //           width: 40px;
// //           height: 40px;
// //           padding: 0;
// //           border: 0;
// //           border-radius: 50%;
// //           background: rgba(1, 136, 55, 0.10);

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           cursor: pointer;

// //           transition:
// //             background-color 0.2s ease,
// //             transform 0.2s ease;
// //         }

// //         .notice-action-button:hover {
// //           background: rgba(1, 136, 55, 0.18);
// //           transform: translateY(-1px);
// //         }

// //         .notice-action-button:active {
// //           transform: translateY(0);
// //         }

// //         /* =========================
// //            NOTE
// //         ========================= */

// //         .notice-note {
// //           width: 100%;
// //           margin-top: 28px;
// //           padding: 10px 20px;
// //           border-left: 4px solid ${GREEN};
// //         }

// //         .notice-note p {
// //           margin: 0;
// //           font-family: "Inter", Arial, sans-serif;
// //           font-size: 15px;
// //           line-height: 25px;
// //           font-weight: 400;
// //           color: #444466;
// //         }

// //         .notice-note strong {
// //           font-weight: 700;
// //           color: #000000;
// //         }

// //         /* =========================
// //            TABLET
// //         ========================= */

// //         @media (max-width: 1200px) {
// //           .notice-section {
// //             padding: 60px 40px 70px;
// //           }

// //           .notice-header h2 {
// //             font-size: 44px;
// //             line-height: 52px;
// //           }

// //           .notice-table-header,
// //           .notice-row {
// //             grid-template-columns:
// //               60px
// //               180px
// //               1px
// //               minmax(0, 1fr)
// //               1px
// //               120px;
// //           }

// //           .notice-table-header > div:nth-child(4),
// //           .notice-title {
// //             padding-left: 40px;
// //           }
// //         }

// //         /* =========================
// //            MOBILE
// //         ========================= */

// //         @media (max-width: 768px) {
// //           .notice-section {
// //             min-height: auto;
// //             padding: 45px 20px 60px;
// //           }

// //           .notice-header h2 {
// //             font-size: 32px;
// //             line-height: 40px;
// //           }

// //           .notice-header p {
// //             margin-top: 8px;
// //             font-size: 14px;
// //             line-height: 22px;
// //           }

// //           .notice-accent {
// //             margin-top: 45px;
// //             margin-bottom: 18px;
// //           }

// //           .notice-table {
// //             overflow-x: auto;
// //           }

// //           .notice-table-header,
// //           .notice-row {
// //             min-width: 760px;
// //             grid-template-columns:
// //               60px
// //               160px
// //               1px
// //               minmax(300px, 1fr)
// //               1px
// //               100px;
// //           }

// //           .notice-table-header > div:nth-child(4),
// //           .notice-title {
// //             padding-left: 20px;
// //           }

// //           .notice-row {
// //             min-height: 78px;
// //           }

// //           .notice-note p {
// //             font-size: 14px;
// //             line-height: 22px;
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // }

// // Dynamic version
// "use client";

// import React, { useEffect, useState } from "react";

// const GREEN = "#018837";

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

// function NoticeRow({ no, date, title, pdfUrl, onShare, copiedId, id }) {
//   const handleDownload = () => {
//     if (!pdfUrl) return;

//     window.open(pdfUrl, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div
//       className="
//         grid min-h-[82px] w-full items-center
//         grid-cols-[60px_160px_1px_minmax(300px,1fr)_1px_100px]
//         border-b border-[#444444]/12
//         px-5 py-[18px]
//         xl:grid-cols-[70px_352px_1px_minmax(0,1fr)_1px_352px]
//         xl:px-5
//         lg:grid-cols-[60px_180px_1px_minmax(0,1fr)_1px_120px]
//         max-md:min-w-[760px]
//       "
//     >
//       {/* Number */}
//       <div
//         className="
//           font-['Inter',Arial,sans-serif]
//           text-[15px] leading-[17px] font-normal
//           text-[#444]
//         "
//       >
//         {no}
//       </div>

//       {/* Date */}
//       <div
//         className="
//           pr-5
//           font-['Inter',Arial,sans-serif]
//           text-[15px] leading-[17px] font-normal
//           text-[#444]
//         "
//       >
//         {date}
//       </div>

//       {/* Separator */}
//       <div className="h-[17px] w-px bg-[#444]/50" />

//       {/* Title */}
//       <div
//         className="
//           px-5
//           font-['Inter',Arial,sans-serif]
//           text-[15px] leading-[17px] font-normal
//           text-[#444]
//           lg:px-10
//           xl:pl-[116px]
//         "
//       >
//         {title}
//       </div>

//       {/* Separator */}
//       <div className="h-[17px] w-px bg-[#444]/50" />

//       {/* Actions */}
//       <div
//         className="
//           flex items-center justify-end gap-2.5 pl-5
//         "
//       >
//         {/* Download */}
//         <button
//           type="button"
//           aria-label={`Download ${title}`}
//           onClick={handleDownload}
//           disabled={!pdfUrl}
//           className="
//             flex h-10 w-10 shrink-0 items-center justify-center
//             rounded-full
//             bg-[#018837]/10
//             transition-all duration-200
//             hover:-translate-y-px hover:bg-[#018837]/18
//             active:translate-y-0
//             disabled:cursor-not-allowed disabled:opacity-40
//           "
//         >
//           <DownloadIcon />
//         </button>

//         {/* Share */}
//         <div className="relative">
//           <button
//             type="button"
//             aria-label={`Share ${title}`}
//             onClick={() => onShare(id, pdfUrl)}
//             disabled={!pdfUrl}
//             className="
//               flex h-10 w-10 shrink-0 items-center justify-center
//               rounded-full
//               bg-[#018837]/10
//               transition-all duration-200
//               hover:-translate-y-px hover:bg-[#018837]/18
//               active:translate-y-0
//               disabled:cursor-not-allowed disabled:opacity-40
//             "
//           >
//             <ShareIcon />
//           </button>

//           {/* Copied message */}
//           {copiedId === id && (
//             <div
//               className="
//                 absolute right-0 top-12 z-20
//                 whitespace-nowrap
//                 rounded-md bg-[#018837]
//                 px-3 py-2
//                 text-xs font-medium text-white
//                 shadow-lg
//               "
//             >
//               Link copied
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function NoticeSection() {
//   const [notices, setNotices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [copiedId, setCopiedId] = useState(null);

//   useEffect(() => {
//     const fetchNotices = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_ADMIN_API}/api/admission/result`,
//           {
//             method: "GET",
//             cache: "no-store",
//           },
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch admission results.");
//         }

//         const data = await response.json();

//         if (!Array.isArray(data)) {
//           throw new Error("Invalid admission notice response.");
//         }

//         setNotices(data);
//       } catch (err) {
//         console.error("Admission notices error:", err);
//         setError("Unable to load admission results.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNotices();
//   }, []);

//   const formatDate = (dateString) => {
//     if (!dateString) return "—";

//     const date = new Date(dateString);

//     if (Number.isNaN(date.getTime())) {
//       return "—";
//     }

//     return new Intl.DateTimeFormat("en-US", {
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     }).format(date);
//   };

//   /**
//    * Your API response was displayed with markdown:
//    *
//    * [https://...pdf](https://...pdf)
//    *
//    * If the actual API returns only the URL, this function simply
//    * returns it unchanged. If it returns markdown, it extracts
//    * the real URL.
//    */
//   const cleanPdfUrl = (url) => {
//     if (!url || typeof url !== "string") {
//       return "";
//     }

//     const markdownMatch = url.match(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/);

//     if (markdownMatch) {
//       return markdownMatch[2];
//     }

//     return url.trim();
//   };

//   const handleShare = async (id, pdfUrl) => {
//     const url = cleanPdfUrl(pdfUrl);

//     if (!url) return;

//     try {
//       await navigator.clipboard.writeText(url);

//       setCopiedId(id);

//       setTimeout(() => {
//         setCopiedId(null);
//       }, 2000);
//     } catch (err) {
//       console.error("Failed to copy link:", err);

//       // Fallback for browsers where Clipboard API isn't available
//       try {
//         const textarea = document.createElement("textarea");
//         textarea.value = url;

//         textarea.style.position = "fixed";
//         textarea.style.left = "-9999px";

//         document.body.appendChild(textarea);
//         textarea.select();

//         document.execCommand("copy");
//         textarea.remove();

//         setCopiedId(id);

//         setTimeout(() => {
//           setCopiedId(null);
//         }, 2000);
//       } catch (fallbackError) {
//         console.error("Fallback copy failed:", fallbackError);
//       }
//     }
//   };

//   return (
//     <section
//       className="
//         w-full
//         bg-white
//         px-5 pb-[60px] pt-[45px]
//         sm:px-8
//         md:px-10 md:pb-[70px] md:pt-[60px]
//         lg:px-[60px]
//         xl:min-h-[1258px] xl:px-[77px] xl:pb-20 xl:pt-[76px]
//       "
//     >
//       <div className="mx-auto w-full max-w-[1400px]">
//         {/* =========================
//             HEADER
//         ========================= */}
//         <header className="w-full text-center">
//           <h2
//             className="
//               m-0
//               font-['Bitter',Georgia,serif]
//               text-[32px] leading-10 font-bold
//               tracking-[0.01em]
//               text-black
//               sm:text-[38px] sm:leading-[46px]
//               md:text-[44px] md:leading-[52px]
//               xl:text-[50px] xl:leading-[60px]
//             "
//           >
//             Admission Results
//           </h2>

//           <p
//             className="
//               mt-2
//               font-['Inter',Arial,sans-serif]
//               text-[14px] leading-[22px] font-normal
//               text-black
//               md:text-[15px]
//             "
//           >
//             MBBS Admission (Session: 2021–2022)
//           </p>
//         </header>

//         {/* =========================
//             ACCENT + HEADING
//         ========================= */}
//         <div
//           className="
//             mt-[45px] mb-[19px]
//             flex h-auto min-h-[45px]
//             w-full items-center
//             md:mt-[55px]
//             xl:mt-[66px]
//           "
//         >
//           <div
//             className="
//               mr-3.5 h-[45px] w-1 shrink-0
//               bg-[#018837]
//             "
//           />

//           <h3
//             className="
//               m-0
//               font-['Bitter',Georgia,serif]
//               text-[25px] leading-[32px] font-bold
//               text-[#444]
//               sm:text-[30px] sm:leading-[38px]
//               md:text-[34px] md:leading-[42px]
//               xl:text-[40px] xl:leading-[45px]
//             "
//           >
//             Recent Admission Notices &amp; Required Documents
//           </h3>
//         </div>

//         {/* =========================
//             TABLE
//         ========================= */}
//         <div className="w-full overflow-x-auto overflow-y-hidden bg-white">
//           <div
//             className="
//               w-full
//               overflow-hidden
//               border-t border-[#444]/45
//               max-md:min-w-[760px]
//             "
//           >
//             {/* Table Header */}
//             <div
//               className="
//                 grid h-[55px] w-full items-center
//                 grid-cols-[60px_160px_1px_minmax(300px,1fr)_1px_100px]
//                 border-b border-[#444]/45
//                 bg-[#14a800]/10
//                 px-5
//                 font-['Bitter',Georgia,serif]
//                 text-[15px] leading-[18px] font-bold
//                 text-[#444]
//                 lg:grid-cols-[60px_180px_1px_minmax(0,1fr)_1px_120px]
//                 xl:grid-cols-[70px_352px_1px_minmax(0,1fr)_1px_352px]
//               "
//             >
//               <div>No.</div>

//               <div>Date</div>

//               <div />

//               <div
//                 className="
//                   pl-5
//                   lg:pl-10
//                   xl:pl-[116px]
//                 "
//               >
//                 Title
//               </div>

//               <div />

//               <div className="pl-5 text-right">Action</div>
//             </div>

//             {/* Loading */}
//             {loading && (
//               <div
//                 className="
//                   flex min-h-[150px] items-center justify-center
//                   font-['Inter',Arial,sans-serif]
//                   text-[15px] text-[#444]
//                 "
//               >
//                 Loading admission notices...
//               </div>
//             )}

//             {/* Error */}
//             {!loading && error && (
//               <div
//                 className="
//                   flex min-h-[150px] items-center justify-center
//                   px-5 text-center
//                   font-['Inter',Arial,sans-serif]
//                   text-[15px] text-red-600
//                 "
//               >
//                 {error}
//               </div>
//             )}

//             {/* Empty */}
//             {!loading && !error && notices.length === 0 && (
//               <div
//                 className="
//                   flex min-h-[150px] items-center justify-center
//                   font-['Inter',Arial,sans-serif]
//                   text-[15px] text-[#444]
//                 "
//               >
//                 No admission notices available.
//               </div>
//             )}

//             {/* Dynamic Rows */}
//             {!loading &&
//               !error &&
//               notices.map((notice, index) => (
//                 <NoticeRow
//                   key={notice._id}
//                   id={notice._id}
//                   no={String(index + 1).padStart(2, "0")}
//                   date={formatDate(notice.createdAt)}
//                   title={notice.title}
//                   pdfUrl={cleanPdfUrl(notice.pdfUrl)}
//                   onShare={handleShare}
//                   copiedId={copiedId}
//                 />
//               ))}
//           </div>
//         </div>

//         {/* =========================
//             NOTE
//         ========================= */}
//         <div
//           className="
//             mt-7 w-full
//             border-l-4 border-[#018837]
//             px-5 py-2.5
//           "
//         >
//           <p
//             className="
//               m-0
//               font-['Inter',Arial,sans-serif]
//               text-[14px] leading-[22px] font-normal
//               text-[#444466]
//               md:text-[15px] md:leading-[25px]
//             "
//           >
//             <strong className="font-bold text-black">Note:</strong> All
//             applicants are advised to check the latest official notices on the
//             Directorate General of Medical Education (DGME) website for
//             up-to-date admission instructions and required documents.
//           </p>
//         </div>
//       </div>
//     </section>
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

function ActionButton({ label, onClick, disabled, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="
        flex h-10 w-10 shrink-0 items-center justify-center
        rounded-full
        bg-[#018837]/10
        transition-all duration-200
        hover:-translate-y-px hover:bg-[#018837]/18
        active:translate-y-0
        disabled:cursor-not-allowed disabled:opacity-40
        touch-manipulation
      "
    >
      {children}
    </button>
  );
}

function NoticeActions({ title, pdfUrl, id, onShare, copiedId }) {
  const handleDownload = () => {
    if (!pdfUrl) return;

    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex items-center gap-2.5">
      <ActionButton
        label={`Download ${title}`}
        onClick={handleDownload}
        disabled={!pdfUrl}
      >
        <DownloadIcon />
      </ActionButton>

      <div className="relative">
        <ActionButton
          label={`Share ${title}`}
          onClick={() => onShare(id, pdfUrl)}
          disabled={!pdfUrl}
        >
          <ShareIcon />
        </ActionButton>

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
  );
}

function NoticeRow({ no, date, title, pdfUrl, onShare, copiedId, id }) {
  return (
    <>
      {/* =========================
          DESKTOP / TABLET TABLE ROW
      ========================= */}
      <div
        className="
          hidden
          min-h-[82px]
          w-full
          items-center
          border-b border-[#444444]/12
          px-5 py-[18px]

          md:grid
          md:grid-cols-[55px_145px_1px_minmax(0,1fr)_1px_110px]

          lg:grid-cols-[60px_180px_1px_minmax(0,1fr)_1px_120px]

          xl:grid-cols-[70px_352px_1px_minmax(0,1fr)_1px_352px]
        "
      >
        {/* Number */}
        <div
          className="
            min-w-0
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
            min-w-0
            pr-3
            font-['Inter',Arial,sans-serif]
            text-[15px] leading-[17px] font-normal
            text-[#444]
            lg:pr-5
          "
        >
          {date}
        </div>

        {/* Separator */}
        <div className="h-[17px] w-px bg-[#444]/50" />

        {/* Title */}
        <div
          className="
            min-w-0
            break-words
            px-4
            font-['Inter',Arial,sans-serif]
            text-[15px] leading-[20px] font-normal
            text-[#444]

            lg:px-10

            xl:pl-[116px]
            xl:pr-5
          "
        >
          {title}
        </div>

        {/* Separator */}
        <div className="h-[17px] w-px bg-[#444]/50" />

        {/* Actions */}
        <div className="flex justify-end pl-3 lg:pl-5">
          <NoticeActions
            title={title}
            pdfUrl={pdfUrl}
            id={id}
            onShare={onShare}
            copiedId={copiedId}
          />
        </div>
      </div>

      {/* =========================
          MOBILE CARD
      ========================= */}
      <article
        className="
          relative
          block
          border-b border-[#444]/12
          px-4 py-5

          sm:px-5
          md:hidden
        "
      >
        {/* Top section */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            {/* Number + Date */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span
                className="
                  font-['Inter',Arial,sans-serif]
                  text-[13px] font-semibold
                  text-[#018837]
                "
              >
                {no}
              </span>

              <span
                className="
                  h-3.5 w-px
                  bg-[#444]/30
                "
                aria-hidden="true"
              />

              <span
                className="
                  font-['Inter',Arial,sans-serif]
                  text-[13px] leading-[18px]
                  text-[#666]
                "
              >
                {date}
              </span>
            </div>

            {/* Title */}
            <h4
              className="
                mt-2.5
                break-words
                font-['Inter',Arial,sans-serif]
                text-[15px]
                leading-[22px]
                font-medium
                text-[#444]
              "
            >
              {title}
            </h4>
          </div>

          {/* Actions */}
          <div className="shrink-0">
            <NoticeActions
              title={title}
              pdfUrl={pdfUrl}
              id={id}
              onShare={onShare}
              copiedId={copiedId}
            />
          </div>
        </div>
      </article>
    </>
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
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/admission/result`,
          {
            method: "GET",
            cache: "no-store",
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch admission results.");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid admission notice response.");
        }

        setNotices(data);
      } catch (err) {
        console.error("Admission notices error:", err);
        setError("Unable to load admission results.");
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

        px-4
        pb-12
        pt-10

        xs:px-5

        sm:px-8
        sm:pb-[60px]
        sm:pt-[45px]

        md:px-10
        md:pb-[70px]
        md:pt-[60px]

        lg:px-[60px]

        xl:min-h-[1258px]
        xl:px-[77px]
        xl:pb-20
        xl:pt-[76px]
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
              text-[30px]
              leading-[38px]
              font-bold
              tracking-[0.01em]
              text-black

              xs:text-[32px]
              xs:leading-10

              sm:text-[38px]
              sm:leading-[46px]

              md:text-[44px]
              md:leading-[52px]

              xl:text-[50px]
              xl:leading-[60px]
            "
          >
            Admission Results
          </h2>

          <p
            className="
              mt-2
              font-['Inter',Arial,sans-serif]
              text-[13px]
              leading-[20px]
              font-normal
              text-black

              sm:text-[14px]
              sm:leading-[22px]

              md:text-[15px]
            "
          >
            MBBS Admission (Session: 2021–2022)
          </p>
        </header>

        {/* =========================
            ACCENT + HEADING
        ========================= */}
        <div
          className="
            mt-9
            mb-[18px]
            flex
            min-h-[45px]
            w-full
            items-center

            sm:mt-[45px]

            md:mt-[55px]

            xl:mt-[66px]
            xl:mb-[19px]
          "
        >
          <div
            className="
              mr-3
              h-[45px]
              w-1
              shrink-0
              bg-[#018837]

              sm:mr-3.5
            "
          />

          <h3
            className="
              m-0
              min-w-0
              font-['Bitter',Georgia,serif]
              text-[22px]
              leading-[29px]
              font-bold
              text-[#444]

              xs:text-[24px]
              xs:leading-[32px]

              sm:text-[30px]
              sm:leading-[38px]

              md:text-[34px]
              md:leading-[42px]

              xl:text-[40px]
              xl:leading-[45px]
            "
          >
            Recent Admission Notices &amp; Required Documents
          </h3>
        </div>

        {/* =========================
            TABLE / NOTICE LIST
        ========================= */}
        <div
          className="
            w-full
            overflow-hidden
            bg-white
            border-t
            border-[#444]/45
          "
        >
          {/* Desktop / Tablet Header */}
          <div
            className="
              hidden
              h-[55px]
              w-full
              items-center
              border-b
              border-[#444]/45
              bg-[#14a800]/10
              px-5

              font-['Bitter',Georgia,serif]
              text-[15px]
              leading-[18px]
              font-bold
              text-[#444]

              md:grid
              md:grid-cols-[55px_145px_1px_minmax(0,1fr)_1px_110px]

              lg:grid-cols-[60px_180px_1px_minmax(0,1fr)_1px_120px]

              xl:grid-cols-[70px_352px_1px_minmax(0,1fr)_1px_352px]
            "
          >
            <div>No.</div>

            <div>Date</div>

            <div />

            <div
              className="
                pl-4

                lg:pl-10

                xl:pl-[116px]
              "
            >
              Title
            </div>

            <div />

            <div className="pl-3 text-right lg:pl-5">Action</div>
          </div>

          {/* =========================
              LOADING
          ========================= */}
          {loading && (
            <div
              className="
                flex
                min-h-[150px]
                items-center
                justify-center
                px-5
                text-center
                font-['Inter',Arial,sans-serif]
                text-[14px]
                text-[#444]

                sm:text-[15px]
              "
            >
              Loading admission notices...
            </div>
          )}

          {/* =========================
              ERROR
          ========================= */}
          {!loading && error && (
            <div
              className="
                flex
                min-h-[150px]
                items-center
                justify-center
                px-5
                text-center
                font-['Inter',Arial,sans-serif]
                text-[14px]
                text-red-600

                sm:text-[15px]
              "
            >
              {error}
            </div>
          )}

          {/* =========================
              EMPTY
          ========================= */}
          {!loading && !error && notices.length === 0 && (
            <div
              className="
                flex
                min-h-[150px]
                items-center
                justify-center
                px-5
                text-center
                font-['Inter',Arial,sans-serif]
                text-[14px]
                text-[#444]

                sm:text-[15px]
              "
            >
              No admission notices available.
            </div>
          )}

          {/* =========================
              DYNAMIC ROWS
          ========================= */}
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

        {/* =========================
            NOTE
        ========================= */}
        <div
          className="
            mt-6
            w-full
            border-l-4
            border-[#018837]
            px-4
            py-2.5

            sm:mt-7
            sm:px-5
          "
        >
          <p
            className="
              m-0
              font-['Inter',Arial,sans-serif]
              text-[13px]
              leading-[21px]
              font-normal
              text-[#444466]

              sm:text-[14px]
              sm:leading-[22px]

              md:text-[15px]
              md:leading-[25px]
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

// Version 2
// "use client";

// import React, { useEffect, useState } from "react";

// const GREEN = "#018837";

// /* =========================================================
//    ICONS
// ========================================================= */

// function DownloadIcon() {
//   return (
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-hidden="true"
//     >
//       <path
//         d="M12 3V15"
//         stroke={GREEN}
//         strokeWidth="1.7"
//         strokeLinecap="round"
//       />

//       <path
//         d="M7 10L12 15L17 10"
//         stroke={GREEN}
//         strokeWidth="1.7"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />

//       <path
//         d="M5 20H19"
//         stroke={GREEN}
//         strokeWidth="1.7"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function ShareIcon() {
//   return (
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-hidden="true"
//     >
//       <circle cx="18" cy="5" r="2.5" stroke={GREEN} strokeWidth="1.7" />

//       <circle cx="6" cy="12" r="2.5" stroke={GREEN} strokeWidth="1.7" />

//       <circle cx="18" cy="19" r="2.5" stroke={GREEN} strokeWidth="1.7" />

//       <path
//         d="M8.2 10.8L15.8 6.2"
//         stroke={GREEN}
//         strokeWidth="1.7"
//         strokeLinecap="round"
//       />

//       <path
//         d="M8.2 13.2L15.8 17.8"
//         stroke={GREEN}
//         strokeWidth="1.7"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// /* =========================================================
//    ACTION BUTTON
// ========================================================= */

// function ActionButton({ label, onClick, disabled, children }) {
//   return (
//     <button
//       type="button"
//       aria-label={label}
//       onClick={onClick}
//       disabled={disabled}
//       className="
//         flex
//         h-10
//         w-10
//         shrink-0
//         items-center
//         justify-center
//         rounded-full
//         bg-[#018837]/10
//         transition-all
//         duration-200
//         hover:-translate-y-px
//         hover:bg-[#018837]/15
//         focus:outline-none
//         focus-visible:ring-2
//         focus-visible:ring-[#018837]/40
//         active:translate-y-0
//         disabled:cursor-not-allowed
//         disabled:opacity-40
//         touch-manipulation
//       "
//     >
//       {children}
//     </button>
//   );
// }

// /* =========================================================
//    NOTICE ACTIONS
// ========================================================= */

// function NoticeActions({ title, pdfUrl, id, onShare, copiedId }) {
//   const handleDownload = () => {
//     if (!pdfUrl) return;

//     window.open(pdfUrl, "_blank", "noopener,noreferrer");
//   };

//   return (
//     <div className="flex items-center gap-2.5">
//       <ActionButton
//         label={`Download ${title}`}
//         onClick={handleDownload}
//         disabled={!pdfUrl}
//       >
//         <DownloadIcon />
//       </ActionButton>

//       <div className="relative">
//         <ActionButton
//           label={`Share ${title}`}
//           onClick={() => onShare(id, pdfUrl)}
//           disabled={!pdfUrl}
//         >
//           <ShareIcon />
//         </ActionButton>

//         {copiedId === id && (
//           <div
//             className="
//               absolute
//               right-0
//               top-[46px]
//               z-30
//               whitespace-nowrap
//               rounded-md
//               bg-[#018837]
//               px-3
//               py-2
//               text-xs
//               font-medium
//               text-white
//               shadow-lg
//             "
//           >
//             Link copied
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    DESKTOP ROW
// ========================================================= */

// function DesktopNoticeRow({ no, date, title, pdfUrl, onShare, copiedId, id }) {
//   return (
//     <div
//       className="
//         hidden
//         min-h-[80px]
//         w-full
//         grid-cols-[70px_minmax(130px,235px)_1px_minmax(0,350px)_1px_minmax(110px,235px)]
//         items-center
//         gap-x-0
//         border-b
//         border-[#444]/12
//         px-5
//         md:grid
//       "
//     >
//       {/* Number */}
//       <div
//         className="
//           min-w-0
//           pr-3
//           font-['Inter',Arial,sans-serif]
//           text-[15px]
//           leading-[15px]
//           font-normal
//           text-[#444]
//         "
//       >
//         {no}
//       </div>

//       {/* Date */}
//       <div
//         className="
//           min-w-0
//           pr-4
//           font-['Inter',Arial,sans-serif]
//           text-[15px]
//           leading-[20px]
//           font-normal
//           text-[#444]
//         "
//       >
//         {date}
//       </div>

//       {/* Separator */}
//       <div
//         className="
//           mx-auto
//           h-4
//           w-px
//           bg-[#444]/50
//         "
//       />

//       {/* Title */}
//       <div
//         className="
//           min-w-0
//           px-5
//           font-['Inter',Arial,sans-serif]
//           text-[15px]
//           leading-[20px]
//           font-normal
//           text-[#444]
//           md:px-6
//           lg:px-8
//           xl:px-10
//         "
//       >
//         <span className="block break-words">{title}</span>
//       </div>

//       {/* Separator */}
//       <div
//         className="
//           mx-auto
//           h-4
//           w-px
//           bg-[#444]/50
//         "
//       />

//       {/* Actions */}
//       <div className="flex justify-end pl-4">
//         <NoticeActions
//           title={title}
//           pdfUrl={pdfUrl}
//           id={id}
//           onShare={onShare}
//           copiedId={copiedId}
//         />
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    MOBILE ROW
// ========================================================= */

// function MobileNoticeRow({ no, date, title, pdfUrl, onShare, copiedId, id }) {
//   return (
//     <article
//       className="
//         block
//         border-b
//         border-[#444]/12
//         px-4
//         py-5
//         sm:px-5
//         md:hidden
//       "
//     >
//       <div className="flex items-start gap-4">
//         {/* Content */}
//         <div className="min-w-0 flex-1">
//           {/* Number + Date */}
//           <div
//             className="
//               flex
//               flex-wrap
//               items-center
//               gap-x-3
//               gap-y-1
//             "
//           >
//             <span
//               className="
//                 font-['Inter',Arial,sans-serif]
//                 text-[13px]
//                 leading-[18px]
//                 font-semibold
//                 text-[#018837]
//               "
//             >
//               {no}
//             </span>

//             <span
//               className="
//                 h-3.5
//                 w-px
//                 bg-[#444]/30
//               "
//               aria-hidden="true"
//             />

//             <span
//               className="
//                 font-['Inter',Arial,sans-serif]
//                 text-[13px]
//                 leading-[18px]
//                 font-normal
//                 text-[#666]
//               "
//             >
//               {date}
//             </span>
//           </div>

//           {/* Title */}
//           <h4
//             className="
//               mt-2.5
//               break-words
//               font-['Inter',Arial,sans-serif]
//               text-[15px]
//               leading-[22px]
//               font-medium
//               text-[#444]
//             "
//           >
//             {title}
//           </h4>
//         </div>

//         {/* Actions */}
//         <div className="shrink-0">
//           <NoticeActions
//             title={title}
//             pdfUrl={pdfUrl}
//             id={id}
//             onShare={onShare}
//             copiedId={copiedId}
//           />
//         </div>
//       </div>
//     </article>
//   );
// }

// /* =========================================================
//    HEADER
// ========================================================= */

// function SectionHeader() {
//   return (
//     <header
//       className="
//         flex
//         w-full
//         flex-col
//         items-center
//         text-center
//       "
//     >
//       <h2
//         className="
//           m-0
//           font-['Bitter',Georgia,serif]
//           text-[30px]
//           leading-[38px]
//           font-bold
//           tracking-[0.01em]
//           text-black

//           xs:text-[32px]
//           xs:leading-[40px]

//           sm:text-[38px]
//           sm:leading-[46px]

//           md:text-[44px]
//           md:leading-[52px]

//           lg:text-[48px]
//           lg:leading-[58px]

//           xl:text-[50px]
//           xl:leading-[60px]
//         "
//       >
//         Admission Results
//       </h2>

//       <p
//         className="
//           m-0
//           mt-1
//           px-3
//           font-['Inter',Arial,sans-serif]
//           text-[13px]
//           leading-[22px]
//           font-normal
//           tracking-[0.01em]
//           text-black

//           sm:mt-0
//           sm:text-[14px]
//           sm:leading-[26px]

//           md:text-[15px]
//           md:leading-[30px]
//         "
//       >
//         MBBS Admission (Session: 2021–2022)
//       </p>
//     </header>
//   );
// }

// /* =========================================================
//    TABLE HEADER
// ========================================================= */

// function TableHeader() {
//   return (
//     <div
//       className="
//         hidden
//         min-h-[56px]
//         w-full
//         grid-cols-[70px_minmax(130px,235px)_1px_minmax(0,350px)_1px_minmax(110px,235px)]
//         items-center
//         border-y
//         border-[#444]/50
//         bg-[#14A800]/10
//         px-5
//         md:grid
//       "
//     >
//       {/* Number */}
//       <div
//         className="
//           font-['Bitter',Georgia,serif]
//           text-[15px]
//           leading-[15px]
//           font-bold
//           text-[#444]
//         "
//       >
//         No.
//       </div>

//       {/* Date */}
//       <div
//         className="
//           font-['Bitter',Georgia,serif]
//           text-[15px]
//           leading-[15px]
//           font-bold
//           text-[#444]
//         "
//       >
//         Date
//       </div>

//       {/* Separator */}
//       <div
//         className="
//           mx-auto
//           h-4
//           w-px
//           bg-[#444]/50
//         "
//       />

//       {/* Title */}
//       <div
//         className="
//           px-5
//           font-['Bitter',Georgia,serif]
//           text-[15px]
//           leading-[15px]
//           font-bold
//           text-[#444]
//           md:px-6
//           lg:px-8
//           xl:px-10
//         "
//       >
//         Title
//       </div>

//       {/* Separator */}
//       <div
//         className="
//           mx-auto
//           h-4
//           w-px
//           bg-[#444]/50
//         "
//       />

//       {/* Action */}
//       <div
//         className="
//           flex
//           justify-end
//           pl-4
//           font-['Bitter',Georgia,serif]
//           text-[15px]
//           leading-[15px]
//           font-bold
//           text-[#444]
//         "
//       >
//         Action
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    MAIN COMPONENT
// ========================================================= */

// export default function NoticeSection() {
//   const [notices, setNotices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [copiedId, setCopiedId] = useState(null);

//   /* =======================================================
//      FETCH
//   ======================================================= */

//   useEffect(() => {
//     const fetchNotices = async () => {
//       try {
//         setLoading(true);
//         setError("");

//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_ADMIN_API}/api/admission/result`,
//           {
//             method: "GET",
//             cache: "no-store",
//           },
//         );

//         if (!response.ok) {
//           throw new Error("Failed to fetch admission results.");
//         }

//         const data = await response.json();

//         if (!Array.isArray(data)) {
//           throw new Error("Invalid admission notice response.");
//         }

//         setNotices(data);
//       } catch (err) {
//         console.error("Admission notices error:", err);

//         setError("Unable to load admission results.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNotices();
//   }, []);

//   /* =======================================================
//      DATE FORMAT
//   ======================================================= */

//   const formatDate = (dateString) => {
//     if (!dateString) return "—";

//     const date = new Date(dateString);

//     if (Number.isNaN(date.getTime())) {
//       return "—";
//     }

//     return new Intl.DateTimeFormat("en-US", {
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     }).format(date);
//   };

//   /* =======================================================
//      PDF URL CLEANER
//   ======================================================= */

//   const cleanPdfUrl = (url) => {
//     if (!url || typeof url !== "string") {
//       return "";
//     }

//     const markdownMatch = url.match(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/);

//     if (markdownMatch) {
//       return markdownMatch[2];
//     }

//     return url.trim();
//   };

//   /* =======================================================
//      SHARE
//   ======================================================= */

//   const handleShare = async (id, pdfUrl) => {
//     const url = cleanPdfUrl(pdfUrl);

//     if (!url) return;

//     try {
//       await navigator.clipboard.writeText(url);

//       setCopiedId(id);

//       setTimeout(() => {
//         setCopiedId(null);
//       }, 2000);
//     } catch (err) {
//       console.error("Failed to copy link:", err);

//       try {
//         const textarea = document.createElement("textarea");

//         textarea.value = url;

//         textarea.style.position = "fixed";
//         textarea.style.left = "-9999px";
//         textarea.style.top = "0";

//         document.body.appendChild(textarea);

//         textarea.focus();
//         textarea.select();

//         document.execCommand("copy");

//         textarea.remove();

//         setCopiedId(id);

//         setTimeout(() => {
//           setCopiedId(null);
//         }, 2000);
//       } catch (fallbackError) {
//         console.error("Fallback copy failed:", fallbackError);
//       }
//     }
//   };

//   /* =======================================================
//      RENDER
//   ======================================================= */

//   return (
//     <section
//       className="
//         w-full
//         overflow-hidden
//         bg-white

//         px-4
//         pb-12
//         pt-10

//         xs:px-5

//         sm:px-8
//         sm:pb-[55px]
//         sm:pt-[45px]

//         md:px-10
//         md:pb-[65px]
//         md:pt-[55px]

//         lg:px-12
//         lg:pb-[70px]
//         lg:pt-[65px]

//         xl:px-20
//         xl:pb-20
//         xl:pt-20
//       "
//     >
//       {/* =================================================
//           FIGMA CONTENT CONTAINER

//           Figma:
//           Section = 1600px
//           Horizontal padding = 80px
//           Content = 1440px
//       ================================================== */}

//       <div
//         className="
//           mx-auto
//           flex
//           w-full
//           max-w-[1440px]
//           flex-col
//         "
//       >
//         {/* =================================================
//             HEADER
//         ================================================== */}

//         <SectionHeader />

//         {/* =================================================
//             NOTICE AREA

//             Figma gap from header = 50px
//         ================================================== */}

//         <div
//           className="
//             mt-9
//             flex
//             w-full
//             flex-col
//             items-start
//             gap-5

//             sm:mt-10

//             md:mt-12

//             lg:mt-[50px]
//           "
//         >
//           {/* Heading */}
//           <div
//             className="
//               flex
//               min-h-[45px]
//               w-full
//               items-center
//             "
//           >
//             {/* Green accent */}
//             <div
//               className="
//                 mr-3
//                 h-[45px]
//                 w-1
//                 shrink-0
//                 bg-[#018837]

//                 sm:mr-3.5
//               "
//             />

//             <h3
//               className="
//                 m-0
//                 min-w-0
//                 break-words
//                 font-['Bitter',Georgia,serif]
//                 text-[22px]
//                 leading-[29px]
//                 font-bold
//                 text-[#444]

//                 xs:text-[24px]
//                 xs:leading-[32px]

//                 sm:text-[28px]
//                 sm:leading-[36px]

//                 md:text-[32px]
//                 md:leading-[40px]

//                 lg:text-[36px]
//                 lg:leading-[43px]

//                 xl:text-[40px]
//                 xl:leading-[45px]
//               "
//             >
//               Recent Admission Notices &amp; Required Documents
//             </h3>
//           </div>

//           {/* =================================================
//               TABLE
//           ================================================== */}

//           <div
//             className="
//               w-full
//               overflow-hidden
//               bg-white
//             "
//           >
//             <TableHeader />

//             {/* =================================================
//                 LOADING
//             ================================================== */}

//             {loading && (
//               <div
//                 className="
//                   flex
//                   min-h-[150px]
//                   w-full
//                   items-center
//                   justify-center
//                   px-5
//                   text-center
//                   font-['Inter',Arial,sans-serif]
//                   text-[14px]
//                   text-[#444]

//                   sm:text-[15px]
//                 "
//               >
//                 Loading admission notices...
//               </div>
//             )}

//             {/* =================================================
//                 ERROR
//             ================================================== */}

//             {!loading && error && (
//               <div
//                 className="
//                   flex
//                   min-h-[150px]
//                   w-full
//                   items-center
//                   justify-center
//                   px-5
//                   text-center
//                   font-['Inter',Arial,sans-serif]
//                   text-[14px]
//                   text-red-600

//                   sm:text-[15px]
//                 "
//               >
//                 {error}
//               </div>
//             )}

//             {/* =================================================
//                 EMPTY
//             ================================================== */}

//             {!loading && !error && notices.length === 0 && (
//               <div
//                 className="
//                     flex
//                     min-h-[150px]
//                     w-full
//                     items-center
//                     justify-center
//                     px-5
//                     text-center
//                     font-['Inter',Arial,sans-serif]
//                     text-[14px]
//                     text-[#444]

//                     sm:text-[15px]
//                   "
//               >
//                 No admission notices available.
//               </div>
//             )}

//             {/* =================================================
//                 NOTICES
//             ================================================== */}

//             {!loading &&
//               !error &&
//               notices.map((notice, index) => {
//                 const id = notice._id || index;

//                 const title = notice.title || "Admission Notice";

//                 const pdfUrl = cleanPdfUrl(notice.pdfUrl);

//                 const no = String(index + 1).padStart(2, "0");

//                 const date = formatDate(notice.createdAt);

//                 return (
//                   <React.Fragment key={id}>
//                     {/* Desktop / Tablet */}
//                     <DesktopNoticeRow
//                       no={no}
//                       date={date}
//                       title={title}
//                       pdfUrl={pdfUrl}
//                       id={id}
//                       onShare={handleShare}
//                       copiedId={copiedId}
//                     />

//                     {/* Mobile */}
//                     <MobileNoticeRow
//                       no={no}
//                       date={date}
//                       title={title}
//                       pdfUrl={pdfUrl}
//                       id={id}
//                       onShare={handleShare}
//                       copiedId={copiedId}
//                     />
//                   </React.Fragment>
//                 );
//               })}
//           </div>
//         </div>

//         {/* =================================================
//             NOTE

//             Figma:
//             border-left: 4px
//             padding: 10px 20px
//             min-height: 48px
//         ================================================== */}

//         <div
//           className="
//             mt-6
//             flex
//             min-h-[48px]
//             w-full
//             items-center
//             border-l-4
//             border-[#018837]
//             px-4
//             py-2.5

//             sm:mt-7
//             sm:px-5

//             md:mt-8
//           "
//         >
//           <p
//             className="
//               m-0
//               break-words
//               font-['Inter',Arial,sans-serif]
//               text-[13px]
//               leading-[21px]
//               font-normal
//               text-black

//               sm:text-[14px]
//               sm:leading-[22px]

//               md:text-[15px]
//               md:leading-[24px]

//               lg:text-[16px]
//               lg:leading-[27px]
//             "
//           >
//             <strong className="font-bold">Note:</strong> All applicants are
//             advised to check the latest official notices on the Directorate
//             General of Medical Education (DGME) website for up-to-date admission
//             instructions and required documents.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
