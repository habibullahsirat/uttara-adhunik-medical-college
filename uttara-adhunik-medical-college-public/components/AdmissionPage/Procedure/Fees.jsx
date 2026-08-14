// "use client";

// const GREEN = "#018837";
// const TEXT = "#444444";

// const bdRows = [
//   ["01", "Admission Fee", "19,44,000/-"],
//   ["02", "Internship Fee", "1,80,000/-"],
// ];

// const foreignRows = [["01", "Admission & Tuition (5 Years)", "$40,000"]];

// function FeeTable({ currency, rows }) {
//   const isBDT = currency === "Amount (BDT)";

//   return (
//     <div
//       style={{
//         width: "832px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//         padding: 0,
//         margin: 0,
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Header */}
//       <div
//         style={{
//           width: "832px",
//           height: "56px",
//           boxSizing: "border-box",
//           display: "grid",
//           gridTemplateColumns: "80px 1fr 1px 198px",
//           alignItems: "center",
//           padding: "0 20px",
//           background: "rgba(20, 168, 0, 0.1)",
//           borderTop: "1px solid rgba(68, 68, 68, 0.5)",
//           borderBottom: "1px solid rgba(68, 68, 68, 0.5)",
//         }}
//       >
//         <div
//           style={{
//             fontFamily: "'Bitter', serif",
//             fontWeight: 700,
//             fontSize: "15px",
//             lineHeight: "15px",
//             color: TEXT,
//           }}
//         >
//           No.
//         </div>

//         <div
//           style={{
//             fontFamily: "'Bitter', serif",
//             fontWeight: 700,
//             fontSize: "15px",
//             lineHeight: "15px",
//             color: TEXT,
//           }}
//         >
//           Particulars
//         </div>

//         <div
//           style={{
//             width: "1px",
//             height: "16px",
//             background: "#444444",
//             justifySelf: "center",
//           }}
//         />

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//             fontFamily: "'Bitter', serif",
//             fontWeight: 700,
//             fontSize: "15px",
//             lineHeight: "15px",
//             color: TEXT,
//           }}
//         >
//           {currency}
//         </div>
//       </div>

//       {/* Rows */}
//       {rows.map(([number, particulars, amount]) => (
//         <div
//           key={number}
//           style={{
//             width: "832px",
//             height: "56px",
//             boxSizing: "border-box",
//             display: "grid",
//             gridTemplateColumns: "80px 1fr 1px 198px",
//             alignItems: "center",
//             padding: "0 20px",
//           }}
//         >
//           <div
//             style={{
//               fontFamily: "'Inter', sans-serif",
//               fontWeight: 400,
//               fontSize: "15px",
//               lineHeight: "15px",
//               color: TEXT,
//             }}
//           >
//             {number}
//           </div>

//           <div
//             style={{
//               fontFamily: "'Inter', sans-serif",
//               fontWeight: 400,
//               fontSize: "15px",
//               lineHeight: "15px",
//               color: TEXT,
//             }}
//           >
//             {particulars}
//           </div>

//           <div
//             style={{
//               width: "1px",
//               height: "16px",
//               background: "#444444",
//               justifySelf: "center",
//             }}
//           />

//           <div
//             style={{
//               display: "flex",
//               justifyContent: "flex-end",
//               fontFamily: "'Inter', sans-serif",
//               fontWeight: 400,
//               fontSize: "15px",
//               lineHeight: "15px",
//               color: TEXT,
//             }}
//           >
//             {amount}
//           </div>
//         </div>
//       ))}

//       {/* Total row */}
//       <div
//         style={{
//           width: "832px",
//           height: "56px",
//           boxSizing: "border-box",
//           display: "grid",
//           gridTemplateColumns: "80px 1fr 1px 198px",
//           alignItems: "center",
//           padding: "0 20px",
//           borderTop: "0.5px solid rgba(0, 0, 0, 0.5)",
//         }}
//       >
//         <div />

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//             paddingRight: "12px",
//             fontFamily: "'Bitter', serif",
//             fontWeight: 700,
//             fontSize: "15px",
//             lineHeight: "15px",
//             color: TEXT,
//           }}
//         >
//           Total Payable
//         </div>

//         <div
//           style={{
//             width: "1px",
//             height: "16px",
//             background: "#444444",
//             justifySelf: "center",
//           }}
//         />

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "flex-end",
//             fontFamily: "'Bitter', serif",
//             fontWeight: 700,
//             fontSize: "15px",
//             lineHeight: "15px",
//             color: TEXT,
//           }}
//         >
//           {isBDT ? "21,24,000/-" : "$40,000"}
//         </div>
//       </div>
//     </div>
//   );
// }

// function SectionHeading({ children }) {
//   return (
//     <div
//       style={{
//         width: "1440px",
//         minHeight: "45px",
//         display: "flex",
//         alignItems: "center",
//         padding: 0,
//         margin: 0,
//         boxSizing: "border-box",
//       }}
//     >
//       <div
//         style={{
//           width: "5px",
//           height: "45px",
//           background: GREEN,
//           marginLeft: "34px",
//           flexShrink: 0,
//         }}
//       />

//       <h2
//         style={{
//           margin: 0,
//           marginLeft: "15px",
//           padding: 0,
//           fontFamily: "'Bitter', serif",
//           fontWeight: 700,
//           fontSize: "40px",
//           lineHeight: "45px",
//           color: TEXT,
//         }}
//       >
//         {children}
//       </h2>
//     </div>
//   );
// }

// function EligibilityText({ children }) {
//   return (
//     <div
//       style={{
//         width: "1400px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//         padding: 0,
//         marginLeft: "34px",
//         gap: "8px",
//         boxSizing: "border-box",
//       }}
//     >
//       <p
//         style={{
//           margin: 0,
//           fontFamily: "'Inter', sans-serif",
//           fontWeight: 700,
//           fontSize: "18px",
//           lineHeight: "27px",
//           color: TEXT,
//         }}
//       >
//         Eligibility
//       </p>

//       <p
//         style={{
//           width: "1400px",
//           margin: 0,
//           fontFamily: "'Inter', sans-serif",
//           fontWeight: 400,
//           fontSize: "18px",
//           lineHeight: "27px",
//           color: TEXT,
//         }}
//       >
//         {children}
//       </p>
//     </div>
//   );
// }

// function BulletSection({ title, children, width = "900px" }) {
//   return (
//     <div
//       style={{
//         width,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "flex-start",
//         padding: 0,
//         marginLeft: "34px",
//         gap: "10px",
//         boxSizing: "border-box",
//       }}
//     >
//       <h3
//         style={{
//           margin: 0,
//           fontFamily: "'Bitter', serif",
//           fontStyle: "normal",
//           fontWeight: 700,
//           fontSize: "25px",
//           lineHeight: "45px",
//           color: TEXT,
//         }}
//       >
//         {title}
//       </h3>

//       <ul
//         style={{
//           margin: 0,
//           paddingTop: 0,
//           paddingRight: "20px",
//           paddingBottom: 0,
//           paddingLeft: "25px",
//           listStyleType: "disc",
//           listStylePosition: "outside",
//           fontFamily: "'Inter', sans-serif",
//           fontStyle: "normal",
//           fontWeight: 400,
//           fontSize: "16px",
//           lineHeight: "27px",
//           color: TEXT,
//         }}
//       >
//         {children}
//       </ul>
//     </div>
//   );
// }

// // function Notice({ children, width = "1242px" }) {
// //   return (
// //     <div
// //       style={{
// //         width,
// //         minHeight: "48px",
// //         boxSizing: "border-box",
// //         display: "flex",
// //         alignItems: "center",
// //         padding: "10px 20px",
// //         marginLeft: "34px",
// //         borderLeft: `4px solid ${GREEN}`,
// //       }}
// //     >
// //       <p
// //         style={{
// //           margin: 0,
// //           fontFamily: "'Inter', sans-serif",
// //           fontWeight: 400,
// //           fontSize: "16px",
// //           lineHeight: "27px",
// //           color: "#000000",
// //         }}
// //       >
// //         {children}
// //       </p>
// //     </div>
// //   );
// // }

// function Notice({ children, width = "1242px" }) {
//   return (
//     <div
//       style={{
//         width,
//         minHeight: "48px",
//         boxSizing: "border-box",
//         display: "flex",
//         alignItems: "center",
//         padding: "10px 20px",
//         marginLeft: "20px",
//         borderLeft: `4px solid ${GREEN}`,
//       }}
//     >
//       <div
//         style={{
//           margin: 0,
//           width: "100%",
//           fontFamily: "'Inter', sans-serif",
//           fontWeight: 400,
//           fontSize: "16px",
//           lineHeight: "27px",
//           color: "#000000",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function Fees() {
//   return (
//     <section
//       style={{
//         width: "100%",
//         minHeight: "2405.4px",
//         background: "#FFFFFF",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "80px",
//         gap: "50px",
//         boxSizing: "border-box",
//       }}
//     >
//       {/* =====================================================
//           BD / NATIONAL STUDENTS
//       ====================================================== */}

//       <div
//         style={{
//           width: "1440px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           padding: "30px 0",
//           gap: "20px",
//           boxSizing: "border-box",
//         }}
//       >
//         {/* Main information */}
//         <div
//           style={{
//             width: "1440px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             padding: 0,
//             gap: "28px",
//           }}
//         >
//           <div
//             style={{
//               width: "1440px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               gap: "14px",
//             }}
//           >
//             <SectionHeading>For BD/National Student</SectionHeading>

//             <EligibilityText>
//               Applicants must meet the criteria set by the Directorate General
//               of Medical Education (DGME) under the Ministry of Health and
//               Family Welfare, Government of Bangladesh.
//             </EligibilityText>
//           </div>

//           {/* Selection & Admission */}
//           <BulletSection title="Selection & Admission">
//             <li style={{ marginBottom: "4px" }}>
//               Admission is based on the results of the DGHS national medical
//               admission test.
//             </li>

//             <li style={{ marginBottom: "4px" }}>
//               Selection follows candidate preference and merit list as per DGHS
//               guidelines.
//             </li>

//             <li style={{ marginBottom: 0 }}>
//               Final selection is done by the admission committee formed by DGME.
//             </li>
//           </BulletSection>

//           {/* Student Quotas */}
//           <BulletSection title="Student Quotas">
//             <li style={{ marginBottom: "4px" }}>
//               <strong>Poor Quota:</strong> 5% seats (free studentship) based on
//               merit &amp; financial need.
//             </li>

//             <li style={{ marginBottom: "4px" }}>
//               <strong>Freedom Fighter Quota:</strong> Available under DGHS
//               rules.
//             </li>

//             <li style={{ marginBottom: 0 }}>
//               <strong>Total Seats:</strong> 90 for 1st Year MBBS (since
//               2013-2014).
//             </li>
//           </BulletSection>

//           <Notice>
//             Selected students must complete admission within the declared
//             deadline. Failure to do so will result in cancellation, and seats
//             will be filled from the waiting list.
//           </Notice>
//         </div>

//         {/* Fee Structure */}
//         <div
//           style={{
//             width: "832px",
//             minHeight: "444px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             marginLeft: "20px",
//             padding: "20px 0",
//             gap: "30px",
//             boxSizing: "border-box",
//           }}
//         >
//           <h3
//             style={{
//               margin: 0,
//               fontFamily: "'Bitter', serif",
//               fontWeight: 700,
//               fontSize: "25px",
//               lineHeight: "45px",
//               color: TEXT,
//             }}
//           >
//             Fee Structure (Session 2024-2025)
//           </h3>

//           <FeeTable currency="Amount (BDT)" rows={bdRows} />

//           <Notice width="362px">
//             <div
//               style={{
//                 width: "100%",
//                 textAlign: "left",
//               }}
//             >
//               <strong>Monthly Tuition Fee:</strong> ৳10,000
//               <br />
//               <strong>VAT</strong> applicable as per government rules
//             </div>
//           </Notice>
//         </div>

//         <div
//           style={{
//             width: "1271px",
//             height: 0,
//             borderTop: "1px solid #444444",
//           }}
//         />
//       </div>

//       {/* =====================================================
//           FOREIGN STUDENTS
//       ====================================================== */}

//       <div
//         style={{
//           width: "1440px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           padding: "30px 0",
//           gap: "20px",
//           boxSizing: "border-box",
//         }}
//       >
//         {/* Main information */}
//         <div
//           style={{
//             width: "1440px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             padding: 0,
//             gap: "20px",
//           }}
//         >
//           {/* Heading + Eligibility */}
//           <div
//             style={{
//               width: "1440px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//               padding: 0,
//               gap: "14px",
//             }}
//           >
//             <SectionHeading>For Foreign Students</SectionHeading>

//             {/* Foreign Eligibility */}
//             <div
//               style={{
//                 width: "1400px",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 marginLeft: "34px",
//                 gap: "8px",
//                 boxSizing: "border-box",
//               }}
//             >
//               <p
//                 style={{
//                   margin: 0,
//                   fontFamily: "'Inter', sans-serif",
//                   fontWeight: 700,
//                   fontSize: "18px",
//                   lineHeight: "27px",
//                   color: TEXT,
//                 }}
//               >
//                 Eligibility
//               </p>

//               <ul
//                 style={{
//                   margin: 0,
//                   paddingTop: 0,
//                   paddingRight: "20px",
//                   paddingBottom: 0,
//                   paddingLeft: "25px",
//                   listStyleType: "disc",
//                   listStylePosition: "outside",
//                   fontFamily: "'Inter', sans-serif",
//                   fontWeight: 400,
//                   fontSize: "18px",
//                   lineHeight: "27px",
//                   color: TEXT,
//                 }}
//               >
//                 <li style={{ marginBottom: "4px" }}>
//                   Must hold a non-Bangladeshi passport.
//                 </li>

//                 <li style={{ marginBottom: 0 }}>
//                   Must follow foreign student admission policy set by the
//                   Government of Bangladesh.
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Full-time tuition */}
//           <BulletSection title="Full-time tuition">
//             <li style={{ marginBottom: "4px" }}>
//               Attested copies of O &amp; A level or equivalent certificates (by
//               their Foreign Ministry).
//             </li>

//             <li style={{ marginBottom: "4px" }}>
//               Application form from the Bangladesh Embassy of the respective
//               country.
//             </li>

//             <li style={{ marginBottom: "4px" }}>
//               UAMC’s Foreign Student Application Form (available at college
//               office).
//             </li>

//             <li style={{ marginBottom: "4px" }}>
//               Photocopies of passport &amp; academic documents.
//             </li>

//             <li style={{ marginBottom: 0 }}>
//               Documents must be sent to DGHS via the Foreign Ministry of
//               Bangladesh.
//             </li>
//           </BulletSection>
//         </div>

//         {/* Foreign Fee Structure */}
//         <div
//           style={{
//             width: "832px",
//             minHeight: "371px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             marginLeft: "20px",
//             padding: "20px 0",
//             gap: "30px",
//             boxSizing: "border-box",
//           }}
//         >
//           <h3
//             style={{
//               margin: 0,
//               fontFamily: "'Bitter', serif",
//               fontWeight: 700,
//               fontSize: "32px",
//               lineHeight: "45px",
//               textTransform: "capitalize",
//               color: TEXT,
//             }}
//           >
//             Fee Structure (Session 2024-2025)
//           </h3>

//           <FeeTable currency="Amount (USD)" rows={foreignRows} />

//           <Notice width="659px">
//             <div
//               style={{
//                 width: "100%",
//                 textAlign: "left",
//               }}
//             >
//               VAT &amp; university fees are applicable as per government and
//               university regulations.
//             </div>
//           </Notice>
//         </div>
//       </div>

//       {/* =====================================================
//           CONTACT FOR ADMISSION
//       ====================================================== */}

//       <div
//         style={{
//           width: "1440px",
//           minHeight: "173.8px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           padding: 0,
//           gap: "20px",
//           boxSizing: "border-box",
//         }}
//       >
//         <SectionHeading>Contact for Admission</SectionHeading>

//         {/* Contact content aligned with 34px left content margin */}
//         <div
//           style={{
//             width: "1400px",
//             minHeight: "109px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-start",
//             padding: 0,
//             marginLeft: "34px",
//             boxSizing: "border-box",
//           }}
//         >
//           <p
//             style={{
//               width: "100%",
//               margin: 0,
//               fontFamily: "'Inter', sans-serif",
//               fontWeight: 400,
//               fontSize: "18px",
//               lineHeight: "27px",
//               color: TEXT,
//               textAlign: "left",
//             }}
//           >
//             Uttara Adhunik Medical College
//             <br />
//             🏥 House # 34, Road # 4, Sector # 9,
//             <br />
//             Sonargaon Janapath, Uttara Model Town,
//             <br />
//             Dhaka-1230, Bangladesh
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// app/admission/procedure-and-fee/page.jsx
// Server Component — DO NOT add "use client"

const API_BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API;

/* -------------------------------------------------------------------------- */
/* Types                                                                       */
/* -------------------------------------------------------------------------- */

async function getJson(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${endpoint}: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

function formatBDT(amount) {
  const value = Number(amount || 0);

  return `${new Intl.NumberFormat("en-IN").format(value)}/-`;
}

function formatUSD(amount) {
  const value = Number(amount || 0);

  return `$${new Intl.NumberFormat("en-US").format(value)}`;
}

function getTotal(rows = []) {
  return rows.reduce((total, row) => total + Number(row.amount || 0), 0);
}

/* -------------------------------------------------------------------------- */
/* Reusable UI                                                                */
/* -------------------------------------------------------------------------- */

function SectionHeading({ children }) {
  return (
    <div className="flex min-h-[45px] w-full items-center">
      <div className="ml-0 h-[45px] w-[5px] shrink-0 bg-[#018837] sm:ml-0 lg:ml-[34px]" />

      <h2 className="ml-3.5 font-['Bitter'] text-[30px] font-bold leading-[45px] text-[#444444] sm:text-[34px] lg:text-[40px]">
        {children}
      </h2>
    </div>
  );
}

function EligibilityText({ children }) {
  return (
    <div className="ml-0 flex w-full flex-col gap-2 px-0 sm:px-5 lg:ml-[34px] lg:w-[calc(100%-34px)] lg:px-0">
      <p className="m-0 font-['Inter'] text-[17px] font-bold leading-[27px] text-[#444444] sm:text-[18px]">
        Eligibility
      </p>

      {children}
    </div>
  );
}

function BulletSection({ title, children, width = "lg:max-w-[900px]" }) {
  return (
    <div
      className={`ml-0 flex w-full flex-col items-start gap-2.5 sm:px-5 lg:ml-[34px] lg:px-0 ${width}`}
    >
      <h3 className="m-0 font-['Bitter'] text-[24px] font-bold leading-[45px] text-[#444444] sm:text-[25px]">
        {title}
      </h3>

      <ul className="m-0 list-outside list-disc pl-[25px] pr-5 font-['Inter'] text-[16px] font-normal leading-[27px] text-[#444444]">
        {children}
      </ul>
    </div>
  );
}

function Notice({ children, width = "lg:w-[1242px]" }) {
  return (
    <div
      className={`ml-0 flex min-h-[48px] w-full items-center border-l-[4px] border-[#018837] px-4 py-2 sm:px-5 lg:ml-[20px] ${width}`}
    >
      <div className="w-full font-['Inter'] text-[16px] font-normal leading-[27px] text-black">
        {children}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Fee Table                                                                   */
/* -------------------------------------------------------------------------- */

function FeeTable({ currency, rows }) {
  const isBDT = currency === "Amount (BDT)";
  const total = getTotal(rows);

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[620px] w-full max-w-[832px]">
        {/* Header */}
        <div className="grid h-14 grid-cols-[60px_minmax(180px,1fr)_1px_minmax(120px,198px)] items-center border-y border-[rgba(68,68,68,0.5)] bg-[rgba(20,168,0,0.1)] px-3 sm:grid-cols-[80px_minmax(220px,1fr)_1px_198px] sm:px-5">
          <div className="font-['Bitter'] text-[15px] font-bold leading-[15px] text-[#444444]">
            No.
          </div>

          <div className="font-['Bitter'] text-[15px] font-bold leading-[15px] text-[#444444]">
            Particulars
          </div>

          <div className="h-4 w-px justify-self-center bg-[#444444]" />

          <div className="text-right font-['Bitter'] text-[15px] font-bold leading-[15px] text-[#444444]">
            {currency}
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, index) => {
          const amount = isBDT ? formatBDT(row.amount) : formatUSD(row.amount);

          return (
            <div
              key={row._id || `${row.particulars}-${index}`}
              className="grid min-h-14 grid-cols-[60px_minmax(180px,1fr)_1px_minmax(120px,198px)] items-center px-3 sm:grid-cols-[80px_minmax(220px,1fr)_1px_198px] sm:px-5"
            >
              <div className="font-['Inter'] text-[15px] font-normal leading-[15px] text-[#444444]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="pr-3 font-['Inter'] text-[15px] font-normal leading-[20px] text-[#444444]">
                {row.particulars}
              </div>

              <div className="h-4 w-px justify-self-center bg-[#444444]" />

              <div className="text-right font-['Inter'] text-[15px] font-normal leading-[15px] text-[#444444]">
                {amount}
              </div>
            </div>
          );
        })}

        {/* Total */}
        <div className="grid min-h-14 grid-cols-[60px_minmax(180px,1fr)_1px_minmax(120px,198px)] items-center border-t-[0.5px] border-[rgba(0,0,0,0.5)] px-3 sm:grid-cols-[80px_minmax(220px,1fr)_1px_198px] sm:px-5">
          <div />

          <div className="pr-3 text-right font-['Bitter'] text-[15px] font-bold leading-[15px] text-[#444444]">
            Total Payable
          </div>

          <div className="h-4 w-px justify-self-center bg-[#444444]" />

          <div className="text-right font-['Bitter'] text-[15px] font-bold leading-[15px] text-[#444444]">
            {isBDT ? formatBDT(total) : formatUSD(total)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default async function Fees() {
  const [
    nationalEligibility,
    documents,
    foreignEligibility,
    foreignFees,
    nationalFees,
    monthlyFee,
    nationalSelection,
    studentQuota,
    siteSettings,
  ] = await Promise.all([
    getJson("/api/admission/procedure-and-fee/eligibility-national-student"),
    getJson("/api/admission/procedure-and-fee/documents"),
    getJson("/api/admission/procedure-and-fee/eligibility-foreign-student"),
    getJson("/api/admission/procedure-and-fee/fee-structure-foreign"),
    getJson("/api/admission/procedure-and-fee/fee-structure-national"),
    getJson("/api/admission/procedure-and-fee/monthly-fee"),
    getJson("/api/admission/procedure-and-fee/national-student-selection"),
    getJson("/api/admission/procedure-and-fee/student-quota"),
    getJson("/api/site-setting"),
  ]);

  const site = siteSettings?.[0] || {};

  const nationalEligibilityText = nationalEligibility?.[0]?.description || "";

  const nationalTotal = getTotal(nationalFees);
  const foreignTotal = getTotal(foreignFees);

  return (
    <section className="box-border flex w-full flex-col items-center gap-8 bg-white px-4 py-10 sm:gap-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16 xl:px-20 xl:py-20">
      {/* ================================================================== */}
      {/* NATIONAL STUDENTS                                                  */}
      {/* ================================================================== */}

      <div className="box-border flex w-full max-w-[1440px] flex-col items-start gap-5 py-4 sm:py-6 lg:py-[30px]">
        {/* Main information */}
        <div className="flex w-full flex-col items-start gap-7">
          {/* Heading + Eligibility */}
          <div className="flex w-full flex-col items-start gap-3.5">
            <SectionHeading>For BD/National Student</SectionHeading>

            <EligibilityText>
              <p className="m-0 w-full font-['Inter'] text-[16px] font-normal leading-[27px] text-[#444444] sm:text-[18px]">
                {nationalEligibilityText}
              </p>
            </EligibilityText>
          </div>

          {/* Selection */}
          <BulletSection title="Selection & Admission">
            {nationalSelection?.map((item, index) => (
              <li
                key={item._id || index}
                className={index === nationalSelection.length - 1 ? "" : "mb-1"}
              >
                {item.title}
              </li>
            ))}
          </BulletSection>

          {/* Quotas */}
          <BulletSection title="Student Quotas">
            {studentQuota?.map((item, index) => {
              const title = item.title || "";

              /*
               * The API returns strings such as:
               * "Poor Quota: 5% seats..."
               *
               * This makes the text before the first ":" bold while
               * keeping the actual API content dynamic.
               */
              const separatorIndex = title.indexOf(":");

              if (separatorIndex === -1) {
                return (
                  <li
                    key={item._id || index}
                    className={index === studentQuota.length - 1 ? "" : "mb-1"}
                  >
                    {title}
                  </li>
                );
              }

              const label = title.slice(0, separatorIndex);
              const description = title.slice(separatorIndex + 1).trim();

              return (
                <li
                  key={item._id || index}
                  className={index === studentQuota.length - 1 ? "" : "mb-1"}
                >
                  <strong>{label}:</strong> {description}
                </li>
              );
            })}
          </BulletSection>

          {/* Admission notice
              This notice does not have an API endpoint in the supplied data,
              so the original static Figma/content is retained. */}
          <Notice>
            Selected students must complete admission within the declared
            deadline. Failure to do so will result in cancellation, and seats
            will be filled from the waiting list.
          </Notice>
        </div>

        {/* National fee structure */}
        <div className="ml-0 flex w-full max-w-[832px] flex-col items-start gap-7 px-0 py-5 sm:ml-5">
          <h3 className="m-0 font-['Bitter'] text-[24px] font-bold leading-[45px] text-[#444444] sm:text-[25px]">
            Fee Structure (Session 2024-2025)
          </h3>

          <FeeTable currency="Amount (BDT)" rows={nationalFees || []} />

          <Notice width="max-w-[362px]">
            <div className="w-full text-left">
              <strong>
                {monthlyFee?.[0]?.title || "Monthly Tuition Fee: ৳10,000"}
              </strong>
              <br />
              <strong>VAT</strong> applicable as per government rules
            </div>
          </Notice>
        </div>

        {/* Divider */}
        <div className="ml-0 w-full max-w-[1271px] border-t border-[#444444] sm:ml-0" />
      </div>

      {/* ================================================================== */}
      {/* FOREIGN STUDENTS                                                   */}
      {/* ================================================================== */}

      <div className="box-border flex w-full max-w-[1440px] flex-col items-start gap-5 py-4 sm:py-6 lg:py-[30px]">
        {/* Main information */}
        <div className="flex w-full flex-col items-start gap-5">
          {/* Heading + Eligibility */}
          <div className="flex w-full flex-col items-start gap-3.5">
            <SectionHeading>For Foreign Students</SectionHeading>

            <div className="ml-0 flex w-full flex-col gap-2 px-0 sm:px-5 lg:ml-[34px] lg:w-[calc(100%-34px)] lg:px-0">
              <p className="m-0 font-['Inter'] text-[17px] font-bold leading-[27px] text-[#444444] sm:text-[18px]">
                Eligibility
              </p>

              <ul className="m-0 list-outside list-disc pl-[25px] pr-5 font-['Inter'] text-[16px] font-normal leading-[27px] text-[#444444] sm:text-[18px]">
                {foreignEligibility?.map((item, index) => (
                  <li
                    key={item._id || index}
                    className={
                      index === foreignEligibility.length - 1 ? "" : "mb-1"
                    }
                  >
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Documents */}
          <BulletSection title="Full-time tuition" width="lg:max-w-[685px]">
            {documents?.map((item, index) => (
              <li
                key={item._id || index}
                className={index === documents.length - 1 ? "" : "mb-1"}
              >
                {item.title}
              </li>
            ))}
          </BulletSection>
        </div>

        {/* Foreign fee structure */}
        <div className="ml-0 flex w-full max-w-[832px] flex-col items-start gap-7 px-0 py-5 sm:ml-5">
          <h3 className="m-0 font-['Bitter'] text-[26px] font-bold capitalize leading-[45px] text-[#444444] sm:text-[32px]">
            Fee Structure (Session 2024-2025)
          </h3>

          <FeeTable currency="Amount (USD)" rows={foreignFees || []} />

          <Notice width="max-w-[659px]">
            VAT &amp; university fees are applicable as per government and
            university regulations.
          </Notice>
        </div>
      </div>

      {/* ================================================================== */}
      {/* CONTACT FOR ADMISSION                                              */}
      {/* ================================================================== */}

      <div className="box-border flex w-full max-w-[1440px] flex-col items-start gap-5">
        <SectionHeading>Contact for Admission</SectionHeading>

        <div className="ml-0 flex w-full flex-col px-0 sm:px-5 lg:ml-[34px] lg:w-[calc(100%-34px)] lg:px-0">
          <div className="font-['Inter'] text-[16px] font-normal leading-[27px] text-[#444444] sm:text-[18px]">
            {/* College name */}
            {site.site_name && (
              <p className="m-0 font-medium">{site.site_name}</p>
            )}

            {/* Address */}
            {site.address && (
              <p className="m-0 whitespace-pre-line">🏥 {site.address}</p>
            )}

            {/* Phone */}
            {site.phone && (
              <p className="m-0">
                ☎️{" "}
                <a
                  href={`tel:${site.phone}`}
                  className="transition-colors hover:text-[#018837]"
                >
                  {site.phone}
                </a>
              </p>
            )}

            {/* Email */}
            {site.email && (
              <p className="m-0">
                ✉️{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-[#018837]"
                >
                  {site.email}
                </a>
              </p>
            )}

            {/* Office email */}
            {site.office_email && (
              <p className="m-0">
                Office Email:{" "}
                <a
                  href={`mailto:${site.office_email}`}
                  className="transition-colors hover:text-[#018837]"
                >
                  {site.office_email}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
