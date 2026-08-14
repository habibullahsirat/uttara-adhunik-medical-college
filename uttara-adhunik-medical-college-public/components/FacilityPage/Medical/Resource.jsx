// // import React from "react";

// // const facilities = [
// //   {
// //     heading: "Computer Access",
// //     text: "Multiple modern computers equipped with webcams, digital cameras, and necessary peripherals.",
// //   },
// //   {
// //     heading: "Peripheral Devices",
// //     text: "Printers and scanners available for both students and faculty.",
// //   },
// //   {
// //     heading: "Connectivity Tools",
// //     text: "Fax, internet, and email services are freely available and extensively used.",
// //   },
// // ];

// // const databases = [
// //   {
// //     heading: "Hinari & Medline",
// //     text: "Students and teachers enjoy online access to internationally recognized medical databases such as Hinari and Medline, supporting evidence-based education and research.",
// //   },
// // ];

// // const academicActivities = ["Clinical Seminars", "Workshops", "Symposia"];

// // const ArrowButton = () => {
// //   return (
// //     <a href="#" className="resource-arrow" aria-label="Learn more">
// //       <span>→</span>
// //     </a>
// //   );
// // };

// // const ResourceCard = ({ heading, text, large = false, children }) => {
// //   return (
// //     <div className={`resource-card ${large ? "resource-card-large" : ""}`}>
// //       {heading ? (
// //         <p>
// //           <strong>{heading}:</strong> <span>{text}</span>
// //         </p>
// //       ) : (
// //         <p>{children}</p>
// //       )}

// //       <ArrowButton />
// //     </div>
// //   );
// // };

// // const Resource = () => {
// //   return (
// //     <section className="resource-section">
// //       <div className="resource-container">
// //         {/* =================================
// //             FACILITIES & RESOURCES
// //         ================================= */}
// //         <div className="resource-group">
// //           <div className="resource-heading">
// //             <h2>Facilities &amp; Resources</h2>
// //           </div>

// //           <div className="resource-grid">
// //             {facilities.map((item, index) => (
// //               <ResourceCard
// //                 key={index}
// //                 heading={item.heading}
// //                 text={item.text}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* =================================
// //             ACADEMIC DATABASES
// //         ================================= */}
// //         <div className="resource-group">
// //           <div className="resource-heading">
// //             <h2>Academic Databases</h2>
// //           </div>

// //           <div className="database-grid">
// //             {databases.map((item, index) => (
// //               <ResourceCard
// //                 key={index}
// //                 heading={item.heading}
// //                 text={item.text}
// //                 large
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* =================================
// //             ACADEMIC ACTIVITIES
// //         ================================= */}
// //         <div className="resource-group">
// //           <div className="resource-heading">
// //             <h2>Academic Activities</h2>
// //           </div>

// //           <div className="activities-grid">
// //             {/* Left Column */}
// //             <div className="activities-column">
// //               <ResourceCard>{academicActivities[0]}</ResourceCard>

// //               <ResourceCard>{academicActivities[2]}</ResourceCard>
// //             </div>

// //             {/* Right Column */}
// //             <div className="activities-column">
// //               <ResourceCard>{academicActivities[1]}</ResourceCard>
// //             </div>
// //           </div>

// //           {/* Description */}
// //           <p className="activities-description">
// //             These activities are <strong>regularly organized</strong> under MEU,
// //             promoting <strong>interdisciplinary collaboration</strong> and{" "}
// //             <strong>continuous professional development</strong> among faculty
// //             and students.
// //           </p>
// //         </div>
// //       </div>

// //       {/* =================================
// //           STYLES
// //       ================================= */}
// //       <style>{`

// //         /* =================================
// //            MAIN SECTION
// //         ================================= */

// //         .resource-section {
// //           width: 100%;
// //           min-height: 1152.79px;
// //           padding: 80px;
// //           box-sizing: border-box;
// //           background: #ffffff;
// //         }

// //         /* =================================
// //            MAIN CONTAINER
// //         ================================= */

// //         .resource-container {
// //           width: 100%;
// //           max-width: 1440px;
// //           margin: 0 auto;

// //           display: flex;
// //           flex-direction: column;
// //           align-items: flex-start;

// //           gap: 50px;
// //         }

// //         /* =================================
// //            RESOURCE GROUP
// //         ================================= */

// //         .resource-group {
// //           width: 100%;

// //           display: flex;
// //           flex-direction: column;
// //           align-items: flex-start;

// //           gap: 30px;
// //         }

// //         /* =================================
// //            HEADING
// //         ================================= */

// //         .resource-heading {
// //           width: 100%;
// //           height: 80px;

// //           display: flex;
// //           align-items: center;
// //           justify-content: flex-start;

// //           padding: 10px;
// //           box-sizing: border-box;
// //         }

// //         .resource-heading h2 {
// //           margin: 0;

// //           font-family: "Bitter", serif;
// //           font-style: normal;
// //           font-weight: 500;

// //           font-size: 50px;
// //           line-height: 60px;

// //           letter-spacing: 0.01em;

// //           color: #000000;
// //         }

// //         /* =================================
// //            FACILITIES GRID
// //         ================================= */

// //         .resource-grid {
// //           width: 100%;

// //           display: grid;

// //           grid-template-columns:
// //             minmax(0, 1fr)
// //             minmax(0, 1fr);

// //           column-gap: 30px;
// //           row-gap: 30px;
// //         }

// //         /* =================================
// //            RESOURCE CARD
// //         ================================= */

// //         .resource-card {
// //           width: 100%;
// //           min-height: 100px;

// //           padding: 20px;

// //           box-sizing: border-box;

// //           display: flex;
// //           flex-direction: row;

// //           align-items: center;
// //           justify-content: space-between;

// //           gap: 20px;

// //           background: rgba(1, 136, 55, 0.1);
// //         }

// //         .resource-card p {
// //           margin: 0;

// //           flex: 1;

// //           font-family: "Inter", sans-serif;
// //           font-style: normal;

// //           font-weight: 400;

// //           font-size: 18px;
// //           line-height: 30px;

// //           letter-spacing: 0.01em;

// //           color: #444444;
// //         }

// //         /* ONLY CARD HEADING IS BOLD */

// //         .resource-card p strong {
// //           font-weight: 700;
// //         }

// //         .resource-card p span {
// //           font-weight: 400;
// //         }

// //         /* =================================
// //            ARROW BUTTON
// //         ================================= */

// //         .resource-arrow {
// //           width: 36.4px;
// //           height: 36.4px;

// //           flex-shrink: 0;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           background: #ffffff;

// //           border-radius: 2.08px;

// //           text-decoration: none;

// //           transition:
// //             background 0.2s ease,
// //             transform 0.2s ease;
// //         }

// //         .resource-arrow span {
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           color: #018837;

// //           font-family: Arial, sans-serif;

// //           font-size: 25px;
// //           font-weight: 400;

// //           line-height: 1;

// //           transform: translateY(-1px);
// //         }

// //         .resource-arrow:hover {
// //           background: #018837;
// //           transform: translateX(3px);
// //         }

// //         .resource-arrow:hover span {
// //           color: #ffffff;
// //         }

// //         /* =================================
// //            ACADEMIC DATABASE
// //         ================================= */

// //         .database-grid {
// //           width: 100%;
// //           display: flex;
// //         }

// //         .resource-card-large {
// //           width: 100%;
// //           min-height: 100px;
// //         }

// //         /* =================================
// //            ACADEMIC ACTIVITIES
// //         ================================= */

// //         .activities-grid {
// //           width: 100%;

// //           display: grid;

// //           grid-template-columns:
// //             minmax(0, 1fr)
// //             minmax(0, 1fr);

// //           column-gap: 30px;
// //           row-gap: 30px;
// //         }

// //         .activities-column {
// //           width: 100%;

// //           display: flex;
// //           flex-direction: column;

// //           gap: 30px;
// //         }

// //         .activities-column .resource-card {
// //           width: 100%;

// //           height: 76.4px;
// //           min-height: 76.4px;
// //         }

// //         .activities-column .resource-card p {
// //           height: 30px;

// //           display: flex;
// //           align-items: center;
// //         }

// //         /* =================================
// //            DESCRIPTION
// //         ================================= */

// //         .activities-description {
// //           width: 100%;

// //           margin: 0;
// //           padding: 0;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           min-height: 60px;

// //           font-family: "Inter", sans-serif;
// //           font-style: normal;

// //           font-weight: 400;

// //           font-size: 18px;
// //           line-height: 30px;

// //           letter-spacing: 0.01em;

// //           text-align: center;

// //           color: #000000;
// //         }

// //         .activities-description strong {
// //           font-weight: 700;
// //         }

// //         /* =================================
// //            TABLET
// //         ================================= */

// //         @media (max-width: 1100px) {

// //           .resource-section {
// //             padding: 60px 40px;
// //           }

// //           .resource-container {
// //             gap: 40px;
// //           }

// //           .resource-grid {
// //             grid-template-columns: 1fr;
// //           }

// //           .activities-grid {
// //             grid-template-columns: 1fr 1fr;
// //           }

// //         }

// //         /* =================================
// //            MOBILE
// //         ================================= */

// //         @media (max-width: 600px) {

// //           .resource-section {
// //             padding: 40px 20px;
// //             min-height: auto;
// //           }

// //           .resource-container {
// //             gap: 35px;
// //           }

// //           .resource-group {
// //             gap: 20px;
// //           }

// //           .resource-heading {
// //             height: auto;
// //             padding: 0;
// //           }

// //           .resource-heading h2 {
// //             font-size: 34px;
// //             line-height: 42px;
// //           }

// //           .resource-card {
// //             min-height: 90px;
// //             padding: 15px;
// //             gap: 15px;
// //           }

// //           .resource-card p {
// //             font-size: 15px;
// //             line-height: 24px;
// //           }

// //           .resource-arrow {
// //             width: 32px;
// //             height: 32px;
// //           }

// //           .resource-arrow span {
// //             font-size: 21px;
// //           }

// //           .activities-grid {
// //             grid-template-columns: 1fr;
// //             gap: 15px;
// //           }

// //           .activities-column {
// //             width: 100%;
// //             gap: 15px;
// //           }

// //           .activities-column .resource-card {
// //             width: 100%;
// //             height: 65px;
// //             min-height: 65px;
// //           }

// //           .activities-description {
// //             font-size: 15px;
// //             line-height: 24px;
// //           }

// //         }

// //         /* =================================
// //            SMALL MOBILE
// //         ================================= */

// //         @media (max-width: 400px) {

// //           .resource-section {
// //             padding: 30px 15px;
// //           }

// //           .resource-heading h2 {
// //             font-size: 28px;
// //             line-height: 36px;
// //           }

// //           .resource-card {
// //             padding: 12px;
// //           }

// //           .resource-card p {
// //             font-size: 14px;
// //             line-height: 22px;
// //           }

// //         }

// //       `}</style>
// //     </section>
// //   );
// // };

// // export default Resource;

// import React from "react";

// const facilities = [
//   {
//     heading: "Computer Access",
//     text: "Multiple modern computers equipped with webcams, digital cameras, and necessary peripherals.",
//   },
//   {
//     heading: "Peripheral Devices",
//     text: "Printers and scanners available for both students and faculty.",
//   },
//   {
//     heading: "Connectivity Tools",
//     text: "Fax, internet, and email services are freely available and extensively used.",
//   },
// ];

// const databases = [
//   {
//     heading: "Hinari & Medline",
//     text: "Students and teachers enjoy online access to internationally recognized medical databases such as Hinari and Medline, supporting evidence-based education and research.",
//   },
// ];

// const academicActivities = ["Clinical Seminars", "Workshops", "Symposia"];

// const ArrowButton = () => {
//   return (
//     <a href="#" className="resource-arrow" aria-label="Learn more">
//       <span>→</span>
//     </a>
//   );
// };

// const ResourceCard = ({
//   heading,
//   text,
//   large = false,
//   children,
//   bold = false,
// }) => {
//   return (
//     <div className={`resource-card ${large ? "resource-card-large" : ""}`}>
//       {heading ? (
//         <p>
//           <strong>{heading}:</strong> <span>{text}</span>
//         </p>
//       ) : (
//         <p className={bold ? "bold-card-text" : ""}>{children}</p>
//       )}

//       <ArrowButton />
//     </div>
//   );
// };

// const Resource = () => {
//   return (
//     <section className="resource-section">
//       <div className="resource-container">
//         {/* =================================
//             FACILITIES & RESOURCES
//         ================================= */}
//         <div className="resource-group">
//           <div className="resource-heading">
//             <h2>Facilities &amp; Resources</h2>
//           </div>

//           <div className="resource-grid">
//             {facilities.map((item, index) => (
//               <ResourceCard
//                 key={index}
//                 heading={item.heading}
//                 text={item.text}
//               />
//             ))}
//           </div>
//         </div>

//         {/* =================================
//             ACADEMIC DATABASES
//         ================================= */}
//         <div className="resource-group">
//           <div className="resource-heading">
//             <h2>Academic Databases</h2>
//           </div>

//           <div className="database-grid">
//             {databases.map((item, index) => (
//               <ResourceCard
//                 key={index}
//                 heading={item.heading}
//                 text={item.text}
//                 large
//               />
//             ))}
//           </div>
//         </div>

//         {/* =================================
//             ACADEMIC ACTIVITIES
//         ================================= */}
//         <div className="resource-group">
//           <div className="resource-heading">
//             <h2>Academic Activities</h2>
//           </div>

//           <div className="activities-grid">
//             {/* LEFT COLUMN */}
//             <div className="activities-column">
//               <ResourceCard bold>{academicActivities[0]}</ResourceCard>

//               <ResourceCard bold>{academicActivities[2]}</ResourceCard>
//             </div>

//             {/* RIGHT COLUMN */}
//             <div className="activities-column">
//               <ResourceCard bold>{academicActivities[1]}</ResourceCard>
//             </div>
//           </div>

//           {/* =================================
//               DESCRIPTION
//           ================================= */}
//           <p className="activities-description">
//             These activities are <strong>regularly organized</strong> under MEU,
//             promoting <strong>interdisciplinary collaboration</strong> and{" "}
//             <strong>continuous professional development</strong> among faculty
//             and students.
//           </p>
//         </div>
//       </div>

//       {/* =================================
//           STYLES
//       ================================= */}
//       <style>{`

//         /* =================================
//            MAIN SECTION
//         ================================= */

//         .resource-section {
//           width: 100%;
//           min-height: 1152.79px;
//           padding: 80px;
//           box-sizing: border-box;
//           background: #ffffff;
//         }

//         /* =================================
//            MAIN CONTAINER
//         ================================= */

//         .resource-container {
//           width: 100%;
//           max-width: 1440px;
//           margin: 0 auto;

//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;

//           gap: 50px;
//         }

//         /* =================================
//            RESOURCE GROUP
//         ================================= */

//         .resource-group {
//           width: 100%;

//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;

//           gap: 30px;
//         }

//         /* =================================
//            HEADING
//         ================================= */

//         .resource-heading {
//           width: 100%;
//           height: 80px;

//           display: flex;
//           align-items: center;
//           justify-content: flex-start;

//           padding: 10px;
//           box-sizing: border-box;
//         }

//         .resource-heading h2 {
//           margin: 0;

//           font-family: "Bitter", serif;
//           font-style: normal;
//           font-weight: 500;

//           font-size: 50px;
//           line-height: 60px;

//           letter-spacing: 0.01em;

//           color: #000000;
//         }

//         /* =================================
//            FACILITIES GRID
//         ================================= */

//         .resource-grid {
//           width: 100%;

//           display: grid;

//           grid-template-columns:
//             minmax(0, 1fr)
//             minmax(0, 1fr);

//           column-gap: 30px;
//           row-gap: 30px;
//         }

//         /* =================================
//            RESOURCE CARD
//         ================================= */

//         .resource-card {
//           width: 100%;
//           min-height: 100px;

//           padding: 20px;

//           box-sizing: border-box;

//           display: flex;
//           flex-direction: row;

//           align-items: center;
//           justify-content: space-between;

//           gap: 20px;

//           background: rgba(1, 136, 55, 0.1);
//         }

//         .resource-card p {
//           margin: 0;

//           flex: 1;

//           font-family: "Inter", sans-serif;
//           font-style: normal;

//           font-weight: 400;

//           font-size: 18px;
//           line-height: 30px;

//           letter-spacing: 0.01em;

//           color: #444444;
//         }

//         /* Facilities & Database headings */
//         .resource-card p strong {
//           font-weight: 700;
//         }

//         /* Remaining statement text */
//         .resource-card p span {
//           font-weight: 400;
//         }

//         /* Academic Activities cards */
//         .resource-card p.bold-card-text {
//           font-weight: 700;
//         }

//         /* =================================
//            ARROW BUTTON
//         ================================= */

//         .resource-arrow {
//           width: 36.4px;
//           height: 36.4px;

//           flex-shrink: 0;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           background: #ffffff;

//           border-radius: 2.08px;

//           text-decoration: none;

//           transition:
//             background 0.2s ease,
//             transform 0.2s ease;
//         }

//         .resource-arrow span {
//           display: flex;
//           align-items: center;
//           justify-content: center;

//           color: #018837;

//           font-family: Arial, sans-serif;

//           font-size: 25px;
//           font-weight: 400;

//           line-height: 1;

//           transform: translateY(-1px);
//         }

//         .resource-arrow:hover {
//           background: #018837;
//           transform: translateX(3px);
//         }

//         .resource-arrow:hover span {
//           color: #ffffff;
//         }

//         /* =================================
//            ACADEMIC DATABASE
//         ================================= */

//         .database-grid {
//           width: 100%;
//           display: flex;
//         }

//         .resource-card-large {
//           width: 100%;
//           min-height: 100px;
//         }

//         /* =================================
//            ACADEMIC ACTIVITIES
//         ================================= */

//         .activities-grid {
//           width: 100%;

//           display: grid;

//           grid-template-columns:
//             minmax(0, 1fr)
//             minmax(0, 1fr);

//           column-gap: 30px;
//           row-gap: 30px;
//         }

//         .activities-column {
//           width: 100%;

//           display: flex;
//           flex-direction: column;

//           gap: 30px;
//         }

//         .activities-column .resource-card {
//           width: 100%;

//           height: 76.4px;
//           min-height: 76.4px;
//         }

//         .activities-column .resource-card p {
//           height: 30px;

//           display: flex;
//           align-items: center;
//         }

//         /* =================================
//            DESCRIPTION
//         ================================= */

//         .activities-description {
//           width: 100%;

//           margin: 0;
//           padding: 0;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           min-height: 60px;

//           font-family: "Inter", sans-serif;
//           font-style: normal;

//           font-weight: 400;

//           font-size: 18px;
//           line-height: 30px;

//           letter-spacing: 0.01em;

//           text-align: center;

//           color: #000000;
//         }

//         .activities-description strong {
//           font-weight: 700;
//         }

//         /* =================================
//            TABLET
//         ================================= */

//         @media (max-width: 1100px) {

//           .resource-section {
//             padding: 60px 40px;
//           }

//           .resource-container {
//             gap: 40px;
//           }

//           .resource-grid {
//             grid-template-columns: 1fr;
//           }

//           .activities-grid {
//             grid-template-columns: 1fr 1fr;
//           }

//         }

//         /* =================================
//            MOBILE
//         ================================= */

//         @media (max-width: 600px) {

//           .resource-section {
//             padding: 40px 20px;
//             min-height: auto;
//           }

//           .resource-container {
//             gap: 35px;
//           }

//           .resource-group {
//             gap: 20px;
//           }

//           .resource-heading {
//             height: auto;
//             padding: 0;
//           }

//           .resource-heading h2 {
//             font-size: 34px;
//             line-height: 42px;
//           }

//           .resource-card {
//             min-height: 90px;
//             padding: 15px;
//             gap: 15px;
//           }

//           .resource-card p {
//             font-size: 15px;
//             line-height: 24px;
//           }

//           .resource-arrow {
//             width: 32px;
//             height: 32px;
//           }

//           .resource-arrow span {
//             font-size: 21px;
//           }

//           .activities-grid {
//             grid-template-columns: 1fr;
//             gap: 15px;
//           }

//           .activities-column {
//             width: 100%;
//             gap: 15px;
//           }

//           .activities-column .resource-card {
//             width: 100%;
//             height: 65px;
//             min-height: 65px;
//           }

//           .activities-description {
//             font-size: 15px;
//             line-height: 24px;
//           }

//         }

//         /* =================================
//            SMALL MOBILE
//         ================================= */

//         @media (max-width: 400px) {

//           .resource-section {
//             padding: 30px 15px;
//           }

//           .resource-heading h2 {
//             font-size: 28px;
//             line-height: 36px;
//           }

//           .resource-card {
//             padding: 12px;
//           }

//           .resource-card p {
//             font-size: 14px;
//             line-height: 22px;
//           }

//         }

//       `}</style>
//     </section>
//   );
// };

// export default Resource;

// Dynamic Version
import React from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API;

async function getResourceData(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
}

/**
 * Converts:
 *
 * "Computer Access: Multiple modern computers..."
 *
 * into:
 *
 * {
 *   heading: "Computer Access",
 *   text: "Multiple modern computers..."
 * }
 *
 * If there is no ":" the complete title is treated as the heading.
 */
function parseTitle(title = "") {
  const separatorIndex = title.indexOf(":");

  if (separatorIndex === -1) {
    return {
      heading: title,
      text: "",
    };
  }

  return {
    heading: title.slice(0, separatorIndex).trim(),
    text: title.slice(separatorIndex + 1).trim(),
  };
}

function ArrowButton() {
  return (
    <a
      href="#"
      aria-label="Learn more"
      className="
        group
        flex
        h-9
        w-9
        shrink-0
        items-center
        justify-center
        rounded-[2px]
        bg-white
        no-underline
        transition-all
        duration-200
        hover:translate-x-1
        hover:bg-[#018837]
      "
    >
      <span
        className="
          text-[25px]
          font-normal
          leading-none
          text-[#018837]
          transition-colors
          duration-200
          group-hover:text-white
        "
      >
        →
      </span>
    </a>
  );
}

function ResourceCard({ heading, text, large = false, bold = false }) {
  return (
    <div
      className={`
        flex
        w-full
        flex-row
        items-center
        justify-between
        gap-4
        bg-[rgba(1,136,55,0.1)]
        p-4
        sm:gap-5
        sm:p-5
        ${large ? "min-h-[100px]" : "min-h-[90px] sm:min-h-[100px]"}
      `}
    >
      <p
        className={`
          m-0
          min-w-0
          flex-1
          font-['Inter',sans-serif]
          text-[15px]
          leading-6
          tracking-[0.01em]
          text-[#444444]
          sm:text-[18px]
          sm:leading-[30px]
          ${bold ? "font-bold" : "font-normal"}
        `}
      >
        {heading && (
          <strong className="font-bold">
            {heading}
            {text ? ": " : ""}
          </strong>
        )}

        {text && <span className="font-normal">{text}</span>}
      </p>

      <ArrowButton />
    </div>
  );
}

export default async function Resource() {
  const [facilities, databases, academicActivities] = await Promise.all([
    getResourceData("/api/facility/meu/facility"),
    getResourceData("/api/facility/meu/database"),
    getResourceData("/api/facility/meu/feature"),
  ]);

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-16 xl:px-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 sm:gap-12 lg:gap-[50px]">
        {/* =================================
            FACILITIES & RESOURCES
        ================================= */}
        <div className="flex w-full flex-col gap-5 sm:gap-6 lg:gap-[30px]">
          <div className="flex w-full items-center px-0 sm:px-2.5">
            <h2
              className="
                m-0
                font-['Bitter',serif]
                text-[30px]
                font-medium
                leading-9
                tracking-[0.01em]
                text-black
                sm:text-[36px]
                sm:leading-[44px]
                md:text-[42px]
                md:leading-[52px]
                lg:text-[50px]
                lg:leading-[60px]
              "
            >
              Facilities &amp; Resources
            </h2>
          </div>

          {facilities.length > 0 ? (
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-4
                sm:gap-5
                lg:grid-cols-2
                lg:gap-[30px]
              "
            >
              {facilities.map((item) => {
                const { heading, text } = parseTitle(item.title);

                return (
                  <ResourceCard key={item._id} heading={heading} text={text} />
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No facilities available.</p>
          )}
        </div>

        {/* =================================
            ACADEMIC DATABASES
        ================================= */}
        <div className="flex w-full flex-col gap-5 sm:gap-6 lg:gap-[30px]">
          <div className="flex w-full items-center px-0 sm:px-2.5">
            <h2
              className="
                m-0
                font-['Bitter',serif]
                text-[30px]
                font-medium
                leading-9
                tracking-[0.01em]
                text-black
                sm:text-[36px]
                sm:leading-[44px]
                md:text-[42px]
                md:leading-[52px]
                lg:text-[50px]
                lg:leading-[60px]
              "
            >
              Academic Databases
            </h2>
          </div>

          {databases.length > 0 ? (
            <div className="flex w-full flex-col gap-4 sm:gap-5 lg:gap-[30px]">
              {databases.map((item) => {
                const { heading, text } = parseTitle(item.title);

                return (
                  <ResourceCard
                    key={item._id}
                    heading={heading}
                    text={text}
                    large
                  />
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              No academic databases available.
            </p>
          )}
        </div>

        {/* =================================
            ACADEMIC ACTIVITIES
        ================================= */}
        <div className="flex w-full flex-col gap-5 sm:gap-6 lg:gap-[30px]">
          <div className="flex w-full items-center px-0 sm:px-2.5">
            <h2
              className="
                m-0
                font-['Bitter',serif]
                text-[30px]
                font-medium
                leading-9
                tracking-[0.01em]
                text-black
                sm:text-[36px]
                sm:leading-[44px]
                md:text-[42px]
                md:leading-[52px]
                lg:text-[50px]
                lg:leading-[60px]
              "
            >
              Academic Activities
            </h2>
          </div>

          {academicActivities.length > 0 ? (
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-4
                sm:gap-5
                md:grid-cols-2
                md:gap-[30px]
              "
            >
              {/* LEFT COLUMN */}
              <div className="flex w-full flex-col gap-4 sm:gap-5 lg:gap-[30px]">
                {academicActivities
                  .filter((_, index) => index % 2 === 0)
                  .map((item) => (
                    <ResourceCard key={item._id} heading={item.title} bold />
                  ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex w-full flex-col gap-4 sm:gap-5 lg:gap-[30px]">
                {academicActivities
                  .filter((_, index) => index % 2 !== 0)
                  .map((item) => (
                    <ResourceCard key={item._id} heading={item.title} bold />
                  ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              No academic activities available.
            </p>
          )}

          {/* DESCRIPTION */}
          <p
            className="
              m-0
              flex
              min-h-[60px]
              w-full
              items-center
              justify-center
              text-center
              font-['Inter',sans-serif]
              text-[15px]
              font-normal
              leading-6
              tracking-[0.01em]
              text-black
              sm:text-[16px]
              sm:leading-7
              lg:text-[18px]
              lg:leading-[30px]
            "
          >
            These activities are{" "}
            <strong className="font-bold">regularly organized</strong> under
            MEU, promoting{" "}
            <strong className="font-bold">
              interdisciplinary collaboration
            </strong>{" "}
            and{" "}
            <strong className="font-bold">
              continuous professional development
            </strong>{" "}
            among faculty and students.
          </p>
        </div>
      </div>
    </section>
  );
}
