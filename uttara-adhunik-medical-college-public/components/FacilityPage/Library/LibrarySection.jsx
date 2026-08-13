// import React from "react";

// const LibrarySection = () => {
//   return (
//     <section className="library-section">
//       {/* =========================
//           Opening Information
//       ========================= */}
//       <div className="library-opening">
//         {/* Opening Time */}
//         <div className="opening-item">
//           <span className="css-clock" aria-hidden="true">
//             <span className="clock-hand hour-hand" />
//             <span className="clock-hand minute-hand" />
//           </span>

//           <span>Open: 8:00 AM – 9:00 PM</span>
//         </div>

//         {/* Divider */}
//         <div className="opening-divider" />

//         {/* Working Days */}
//         <div className="opening-item">
//           <span className="css-calendar" aria-hidden="true">
//             <span className="calendar-top" />
//             <span className="calendar-line line-one" />
//             <span className="calendar-line line-two" />
//           </span>

//           <span>Days: All working days</span>
//         </div>
//       </div>

//       {/* =========================
//           Library Content
//       ========================= */}
//       <div className="library-content">
//         {/* =========================
//             Heading + Description
//         ========================= */}
//         <div className="library-intro">
//           {/* LEFT: Icon + Heading */}
//           <div className="library-title">
//             <img src="/fil.png" alt="Library" className="library-icon" />

//             <div className="library-heading">
//               <div className="heading-about">About the</div>
//               <div className="heading-library">Library</div>
//             </div>
//           </div>

//           {/* RIGHT: Description */}
//           <div className="library-description">
//             <span className="description-heading">
//               A Modern Hub for Academic Excellence
//             </span>{" "}
//             The College Library is a fully air-conditioned, modern facility
//             located on the 12th floor of the academic building, designed to
//             support students and faculty with rich academic resources and a
//             comfortable study environment.
//           </div>
//         </div>

//         {/* =========================
//             Library Image
//         ========================= */}
//         <div className="library-image-wrapper">
//           <img
//             src="/images/f187def8-5bd0-4b17-a1ac-a234d92577a9.jpg"
//             alt="College Library"
//             className="library-image"
//           />
//         </div>

//         {/* =========================
//             Statistics
//         ========================= */}
//         <div className="library-statistics">
//           {/* BOOKS */}
//           <div className="library-stat books-stat">
//             <div className="stat-number">3,371+</div>

//             <div className="stat-subtitle">latest editions</div>

//             <div className="stat-label">Books</div>
//           </div>

//           {/* Divider */}
//           <div className="stat-divider" />

//           {/* JOURNALS */}
//           <div className="library-stat journals-stat">
//             <div className="stat-number">1,187+</div>

//             <div className="stat-subtitle">367 foreign journals</div>

//             <div className="stat-label">Journals</div>
//           </div>
//         </div>

//         {/* =========================
//             Digital Catalog
//         ========================= */}
//         <div className="digital-catalog">
//           <p>
//             <strong>Digital Catalog:</strong>{" "}
//             <span>
//               All resources are indexed and catalogued in a computerized
//               database for easy access.
//             </span>
//           </p>
//         </div>
//       </div>

//       {/* =========================
//           Styles
//       ========================= */}
//       <style>{`
//         /* =========================
//            Main Section
//         ========================= */

//         .library-section {
//           display: flex;
//           flex-direction: column;
//           align-items: center;

//           width: 100%;
//           min-height: 1220px;

//           padding: 80px;
//           gap: 50px;

//           box-sizing: border-box;

//           background: #e6f4eb;
//         }

//         /* =========================
//            Opening Information
//         ========================= */

//         .library-opening {
//           display: flex;
//           flex-direction: row;
//           justify-content: center;
//           align-items: center;

//           width: 681px;
//           height: 50px;

//           padding: 10px 50px;
//           gap: 50px;

//           box-sizing: border-box;

//           background: rgba(1, 136, 55, 0.1);
//         }

//         .opening-item {
//           display: flex;
//           flex-direction: row;
//           align-items: center;

//           gap: 10px;

//           height: 30px;

//           font-family: "Inter", sans-serif;
//           font-style: normal;
//           font-weight: 700;

//           font-size: 18px;
//           line-height: 30px;

//           letter-spacing: 0.01em;

//           color: #000000;

//           white-space: nowrap;
//         }

//         /* =========================
//            CSS CLOCK ICON
//         ========================= */

//         .css-clock {
//           position: relative;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           width: 20px;
//           height: 20px;

//           flex-shrink: 0;

//           border: 2px solid #018837;
//           border-radius: 50%;

//           box-sizing: border-box;
//         }

//         .clock-hand {
//           position: absolute;

//           left: 50%;
//           top: 50%;

//           width: 1.5px;

//           background: #018837;

//           transform-origin: bottom center;

//           border-radius: 2px;
//         }

//         .hour-hand {
//           height: 5px;

//           transform: translate(-50%, -100%) rotate(0deg);
//         }

//         .minute-hand {
//           height: 7px;

//           transform: translate(-50%, -100%) rotate(45deg);
//         }

//         /* =========================
//            CSS CALENDAR ICON
//         ========================= */

//         .css-calendar {
//           position: relative;

//           display: block;

//           width: 20px;
//           height: 18px;

//           flex-shrink: 0;

//           border: 2px solid #018837;
//           border-radius: 2px;

//           box-sizing: border-box;
//         }

//         .calendar-top {
//           position: absolute;

//           left: 0;
//           top: 4px;

//           width: 100%;
//           height: 2px;

//           background: #018837;
//         }

//         .calendar-line {
//           position: absolute;

//           width: 3px;
//           height: 3px;

//           background: #018837;

//           border-radius: 50%;
//         }

//         .line-one {
//           left: 4px;
//           top: 9px;
//         }

//         .line-two {
//           left: 10px;
//           top: 9px;
//         }

//         /* =========================
//            Opening Divider
//         ========================= */

//         .opening-divider {
//           width: 1px;
//           height: 19px;

//           background: #000000;

//           flex-shrink: 0;
//         }

//         /* =========================
//            Content
//         ========================= */

//         .library-content {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;

//           width: 100%;
//           max-width: 1440px;

//           gap: 50px;
//         }

//         /* =========================
//            Intro
//         ========================= */

//         .library-intro {
//           display: flex;
//           flex-direction: row;
//           justify-content: space-between;
//           align-items: flex-start;

//           width: 100%;

//           gap: 100px;
//         }

//         /* =========================
//            Library Title
//         ========================= */

//         .library-title {
//           display: flex;
//           flex-direction: row;
//           align-items: center;

//           gap: 20px;

//           width: 382px;
//           min-width: 382px;

//           height: 120px;
//         }

//         /* =========================
//            Library Icon
//         ========================= */

//         .library-icon {
//           display: block;

//           width: 120px;
//           height: 120px;

//           flex-shrink: 0;

//           object-fit: contain;
//         }

//         /* =========================
//            HTML Heading
//         ========================= */

//         .library-heading {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;

//           width: 242px;
//           height: 120px;

//           font-family: "Bitter", serif;

//           font-style: normal;
//           font-weight: 700;

//           font-size: 50px;
//           line-height: 60px;

//           letter-spacing: 0.01em;
//         }

//         .heading-about {
//           color: #000000;

//           white-space: nowrap;
//         }

//         .heading-library {
//           color: #018837;

//           white-space: nowrap;
//         }

//         /* =========================
//            Description
//         ========================= */

//         .library-description {
//           display: block;

//           width: 683px;
//           min-height: 141px;

//           padding: 10px;

//           box-sizing: border-box;

//           font-family: "Inter", sans-serif;

//           font-style: normal;
//           font-weight: 400;

//           font-size: 20px;
//           line-height: 30px;

//           letter-spacing: 0.01em;

//           text-align: justify;

//           color: #444444;
//         }

//         .description-heading {
//           font-weight: 700;
//         }

//         /* =========================
//            Image
//         ========================= */

//         .library-image-wrapper {
//           width: 100%;

//           padding: 10px;

//           box-sizing: border-box;
//         }

//         .library-image {
//           display: block;

//           width: 100%;
//           height: 532px;

//           object-fit: cover;

//           border-radius: 0;
//         }

//         /* =========================
//            Statistics
//         ========================= */

//         .library-statistics {
//           display: flex;
//           flex-direction: row;

//           justify-content: center;
//           align-items: center;

//           width: 100%;

//           gap: 40px;

//           min-height: 105px;
//         }

//         .library-stat {
//           display: flex;
//           flex-direction: column;

//           align-items: center;

//           height: 105px;

//           padding: 0;

//           text-align: center;
//         }

//         .books-stat {
//           width: 142px;
//         }

//         .journals-stat {
//           width: 178px;
//         }

//         /* =========================
//            Main Number
//         ========================= */

//         .stat-number {
//           display: flex;

//           align-items: center;
//           justify-content: center;

//           width: 100%;
//           height: 54px;

//           font-family: "Bitter", serif;

//           font-style: normal;
//           font-weight: 700;

//           font-size: 45px;
//           line-height: 54px;

//           letter-spacing: 0.01em;

//           color: #018837;

//           text-align: center;
//         }

//         /* =========================
//            Subtitle
//         ========================= */

//         .stat-subtitle {
//           display: flex;

//           align-items: center;
//           justify-content: center;

//           width: 100%;
//           height: 29px;

//           font-family: "Inter", sans-serif;

//           font-style: normal;
//           font-weight: 400;

//           font-size: 14px;
//           line-height: 18px;

//           letter-spacing: 0.01em;

//           color: #444444;

//           text-align: center;

//           white-space: nowrap;
//         }

//         /* =========================
//            Bold Label
//         ========================= */

//         .stat-label {
//           display: flex;

//           align-items: center;
//           justify-content: center;

//           width: 100%;
//           height: 22px;

//           font-family: "Inter", sans-serif;

//           font-style: normal;
//           font-weight: 700;

//           font-size: 18px;
//           line-height: 22px;

//           letter-spacing: 0.01em;

//           color: #000000;

//           text-align: center;
//         }

//         /* =========================
//            Statistics Divider
//         ========================= */

//         .stat-divider {
//           width: 1px;
//           height: 62px;

//           flex-shrink: 0;

//           background: #000000;
//         }

//         /* =========================
//            Digital Catalog
//         ========================= */

//         .digital-catalog {
//           width: 100%;

//           min-height: 42px;

//           padding: 10px;

//           box-sizing: border-box;

//           font-family: "Inter", sans-serif;

//           font-size: 18px;
//           line-height: 30px;

//           letter-spacing: 0.01em;

//           color: #000000;

//           text-align: center;
//         }

//         .digital-catalog p {
//           width: 100%;

//           margin: 0;

//           font-weight: 400;
//         }

//         .digital-catalog strong {
//           font-weight: 700;
//         }

//         .digital-catalog span {
//           font-weight: 400;
//         }

//         /* =========================
//            Tablet
//         ========================= */

//         @media (max-width: 1100px) {
//           .library-section {
//             padding: 60px 40px;
//           }

//           .library-intro {
//             gap: 40px;
//           }

//           .library-title {
//             min-width: 330px;
//           }

//           .library-description {
//             width: auto;
//             flex: 1;
//           }
//         }

//         /* =========================
//            Mobile
//         ========================= */

//         @media (max-width: 700px) {
//           .library-section {
//             min-height: auto;

//             padding: 40px 20px;

//             gap: 35px;
//           }

//           .library-opening {
//             width: 100%;
//             height: auto;

//             flex-direction: column;

//             padding: 15px;

//             gap: 10px;
//           }

//           .opening-item {
//             font-size: 15px;
//             line-height: 24px;
//           }

//           .opening-divider {
//             width: 80%;
//             height: 1px;
//           }

//           .library-content {
//             gap: 30px;
//           }

//           .library-intro {
//             flex-direction: column;

//             gap: 25px;
//           }

//           .library-title {
//             width: 100%;
//             min-width: 0;

//             height: auto;

//             justify-content: center;
//           }

//           .library-icon {
//             width: 80px;
//             height: 80px;
//           }

//           .library-heading {
//             width: auto;

//             height: 80px;

//             font-size: 40px;
//             line-height: 44px;
//           }

//           .library-description {
//             width: 100%;

//             min-height: auto;

//             padding: 0;

//             font-size: 16px;
//             line-height: 26px;

//             text-align: left;
//           }

//           .library-image-wrapper {
//             padding: 0;
//           }

//           .library-image {
//             width: 100%;

//             height: 300px;
//           }

//           .library-statistics {
//             gap: 20px;
//           }

//           .stat-number {
//             font-size: 32px;
//             line-height: 40px;
//           }

//           .stat-subtitle {
//             font-size: 12px;
//           }

//           .stat-label {
//             font-size: 15px;
//           }

//           .stat-divider {
//             height: 50px;
//           }

//           .digital-catalog {
//             padding: 0;

//             font-size: 15px;
//             line-height: 24px;
//           }
//         }

//         /* =========================
//            Small Mobile
//         ========================= */

//         @media (max-width: 450px) {
//           .library-section {
//             padding: 30px 15px;
//           }

//           .library-title {
//             gap: 10px;
//           }

//           .library-icon {
//             width: 60px;
//             height: 60px;
//           }

//           .library-heading {
//             height: 60px;

//             font-size: 32px;
//             line-height: 36px;
//           }

//           .library-image {
//             height: 220px;
//           }

//           .library-statistics {
//             gap: 12px;
//           }

//           .library-stat {
//             width: auto;

//             flex: 1;
//           }

//           .stat-number {
//             font-size: 25px;
//             line-height: 32px;
//           }

//           .stat-subtitle {
//             font-size: 10px;
//           }

//           .stat-label {
//             font-size: 14px;
//           }

//           .digital-catalog {
//             font-size: 14px;
//             line-height: 22px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default LibrarySection;

// import React from "react";

// const LibrarySection = () => {
//   return (
//     <section className="library-section">
//       {/* =========================
//           Opening Information
//       ========================= */}
//       <div className="library-opening">
//         {/* Opening Time */}
//         <div className="opening-item">
//           <span className="css-clock" aria-hidden="true">
//             <span className="clock-hand hour-hand" />
//             <span className="clock-hand minute-hand" />
//           </span>

//           <span>
//             <strong>Open:</strong>{" "}
//             <span className="opening-normal">8:00 AM – 9:00 PM</span>
//           </span>
//         </div>

//         {/* Divider */}
//         <div className="opening-divider" />

//         {/* Working Days */}
//         <div className="opening-item">
//           <span className="css-calendar" aria-hidden="true">
//             <span className="calendar-top" />
//             <span className="calendar-line line-one" />
//             <span className="calendar-line line-two" />
//           </span>

//           <span>
//             <strong>Days:</strong>{" "}
//             <span className="opening-normal">All working days</span>
//           </span>
//         </div>
//       </div>

//       {/* =========================
//           Library Content
//       ========================= */}
//       <div className="library-content">
//         {/* =========================
//             Heading + Description
//         ========================= */}
//         <div className="library-intro">
//           {/* LEFT: Icon + Heading */}
//           <div className="library-title">
//             <img src="/fil.png" alt="Library" className="library-icon" />

//             <div className="library-heading">
//               <div className="heading-about">About the</div>
//               <div className="heading-library">Library</div>
//             </div>
//           </div>

//           {/* RIGHT: Description */}
//           <div className="library-description">
//             <strong>A Modern Hub for Academic Excellence</strong>

//             <span>
//               The College Library is a fully air-conditioned, modern facility
//               located on the 12th floor of the academic building, designed to
//               support students and faculty with rich academic resources and a
//               comfortable study environment.
//             </span>
//           </div>
//         </div>

//         {/* =========================
//             Library Image
//         ========================= */}
//         <div className="library-image-wrapper">
//           <img
//             src="/images/f187def8-5bd0-4b17-a1ac-a234d92577a9.jpg"
//             alt="College Library"
//             className="library-image"
//           />
//         </div>

//         {/* =========================
//             Statistics
//         ========================= */}
//         <div className="library-statistics">
//           {/* BOOKS */}
//           <div className="library-stat books-stat">
//             <div className="stat-number">3,371+</div>

//             <div className="stat-subtitle">latest editions</div>

//             <div className="stat-label">Books</div>
//           </div>

//           {/* Divider */}
//           <div className="stat-divider" />

//           {/* JOURNALS */}
//           <div className="library-stat journals-stat">
//             <div className="stat-number">1,187+</div>

//             <div className="stat-subtitle">367 foreign journals</div>

//             <div className="stat-label">Journals</div>
//           </div>
//         </div>

//         {/* =========================
//             Digital Catalog
//         ========================= */}
//         <div className="digital-catalog">
//           <p>
//             <strong>Digital Catalog:</strong>{" "}
//             <span>
//               All resources are indexed and catalogued in a computerized
//               database for easy access.
//             </span>
//           </p>
//         </div>
//       </div>

//       {/* =========================
//           Styles
//       ========================= */}
//       <style>{`
//         /* =========================
//            Main Section
//         ========================= */

//         .library-section {
//           display: flex;
//           flex-direction: column;
//           align-items: center;

//           width: 100%;
//           min-height: 1220px;

//           padding: 80px;
//           gap: 50px;

//           box-sizing: border-box;

//           background: #e6f4eb;
//         }

//         /* =========================
//            Opening Information
//         ========================= */

//         .library-opening {
//           display: flex;
//           flex-direction: row;
//           justify-content: center;
//           align-items: center;

//           width: 681px;
//           height: 50px;

//           padding: 10px 50px;
//           gap: 50px;

//           box-sizing: border-box;

//           background: rgba(1, 136, 55, 0.1);
//         }

//         .opening-item {
//           display: flex;
//           flex-direction: row;
//           align-items: center;

//           gap: 10px;

//           height: 30px;

//           font-family: "Inter", sans-serif;
//           font-style: normal;

//           font-size: 18px;
//           line-height: 30px;

//           letter-spacing: 0.01em;

//           color: #000000;

//           white-space: nowrap;
//         }

//         .opening-item strong {
//           font-weight: 700;
//         }

//         .opening-normal {
//           font-weight: 400;
//         }

//         /* =========================
//            CSS CLOCK ICON
//         ========================= */

//         .css-clock {
//           position: relative;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           width: 20px;
//           height: 20px;

//           flex-shrink: 0;

//           border: 2px solid #018837;
//           border-radius: 50%;

//           box-sizing: border-box;
//         }

//         .clock-hand {
//           position: absolute;

//           left: 50%;
//           top: 50%;

//           width: 1.5px;

//           background: #018837;

//           transform-origin: bottom center;

//           border-radius: 2px;
//         }

//         .hour-hand {
//           height: 5px;

//           transform: translate(-50%, -100%) rotate(0deg);
//         }

//         .minute-hand {
//           height: 7px;

//           transform: translate(-50%, -100%) rotate(45deg);
//         }

//         /* =========================
//            CSS CALENDAR ICON
//         ========================= */

//         .css-calendar {
//           position: relative;

//           display: block;

//           width: 20px;
//           height: 18px;

//           flex-shrink: 0;

//           border: 2px solid #018837;
//           border-radius: 2px;

//           box-sizing: border-box;
//         }

//         .calendar-top {
//           position: absolute;

//           left: 0;
//           top: 4px;

//           width: 100%;
//           height: 2px;

//           background: #018837;
//         }

//         .calendar-line {
//           position: absolute;

//           width: 3px;
//           height: 3px;

//           background: #018837;

//           border-radius: 50%;
//         }

//         .line-one {
//           left: 4px;
//           top: 9px;
//         }

//         .line-two {
//           left: 10px;
//           top: 9px;
//         }

//         /* =========================
//            Opening Divider
//         ========================= */

//         .opening-divider {
//           width: 1px;
//           height: 19px;

//           background: #000000;

//           flex-shrink: 0;
//         }

//         /* =========================
//            Content
//         ========================= */

//         .library-content {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;

//           width: 100%;
//           max-width: 1440px;

//           gap: 50px;
//         }

//         /* =========================
//            Intro
//         ========================= */

//         .library-intro {
//           display: flex;
//           flex-direction: row;
//           justify-content: space-between;
//           align-items: flex-start;

//           width: 100%;

//           gap: 100px;
//         }

//         /* =========================
//            Library Title
//         ========================= */

//         .library-title {
//           display: flex;
//           flex-direction: row;
//           align-items: center;

//           gap: 20px;

//           width: 382px;
//           min-width: 382px;

//           height: 120px;
//         }

//         /* =========================
//            Library Icon
//         ========================= */

//         .library-icon {
//           display: block;

//           width: 120px;
//           height: 120px;

//           flex-shrink: 0;

//           object-fit: contain;
//         }

//         /* =========================
//            HTML Heading
//         ========================= */

//         .library-heading {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;

//           width: 242px;
//           height: 120px;

//           font-family: "Bitter", serif;

//           font-style: normal;
//           font-weight: 700;

//           font-size: 50px;
//           line-height: 60px;

//           letter-spacing: 0.01em;
//         }

//         .heading-about {
//           color: #000000;

//           white-space: nowrap;
//         }

//         .heading-library {
//           color: #018837;

//           white-space: nowrap;
//         }

//         /* =========================
//            Description
//         ========================= */

//         .library-description {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           justify-content: center;

//           width: 683px;
//           min-height: 141px;

//           padding: 10px;

//           box-sizing: border-box;

//           font-family: "Inter", sans-serif;

//           font-style: normal;

//           font-size: 20px;
//           line-height: 30px;

//           letter-spacing: 0.01em;

//           text-align: justify;

//           color: #444444;
//         }

//         .library-description strong {
//           display: block;

//           width: 100%;

//           font-weight: 700;
//         }

//         .library-description span {
//           display: block;

//           width: 100%;

//           font-weight: 400;
//         }

//         /* =========================
//            Image
//         ========================= */

//         .library-image-wrapper {
//           width: 100%;

//           padding: 10px;

//           box-sizing: border-box;
//         }

//         .library-image {
//           display: block;

//           width: 100%;
//           height: 532px;

//           object-fit: cover;

//           border-radius: 0;
//         }

//         /* =========================
//            Statistics
//         ========================= */

//         .library-statistics {
//           display: flex;
//           flex-direction: row;
//           justify-content: center;
//           align-items: center;

//           width: 100%;

//           gap: 40px;

//           min-height: 105px;
//         }

//         .library-stat {
//           display: flex;
//           flex-direction: column;
//           align-items: center;

//           height: 105px;

//           padding: 0;

//           text-align: center;
//         }

//         .books-stat {
//           width: 142px;
//         }

//         .journals-stat {
//           width: 178px;
//         }

//         /* =========================
//            Main Number
//         ========================= */

//         .stat-number {
//           display: flex;
//           align-items: center;
//           justify-content: center;

//           width: 100%;
//           height: 54px;

//           font-family: "Bitter", serif;

//           font-style: normal;
//           font-weight: 700;

//           font-size: 45px;
//           line-height: 54px;

//           letter-spacing: 0.01em;

//           color: #018837;

//           text-align: center;
//         }

//         /* =========================
//            Subtitle
//         ========================= */

//         .stat-subtitle {
//           display: flex;
//           align-items: center;
//           justify-content: center;

//           width: 100%;
//           height: 29px;

//           font-family: "Inter", sans-serif;

//           font-style: normal;
//           font-weight: 400;

//           font-size: 14px;
//           line-height: 18px;

//           letter-spacing: 0.01em;

//           color: #444444;

//           text-align: center;

//           white-space: nowrap;
//         }

//         /* =========================
//            Bold Label
//         ========================= */

//         .stat-label {
//           display: flex;
//           align-items: center;
//           justify-content: center;

//           width: 100%;
//           height: 22px;

//           font-family: "Inter", sans-serif;

//           font-style: normal;
//           font-weight: 700;

//           font-size: 18px;
//           line-height: 22px;

//           letter-spacing: 0.01em;

//           color: #000000;

//           text-align: center;
//         }

//         /* =========================
//            Statistics Divider
//         ========================= */

//         .stat-divider {
//           width: 1px;
//           height: 62px;

//           flex-shrink: 0;

//           background: #000000;
//         }

//         /* =========================
//            Digital Catalog
//         ========================= */

//         .digital-catalog {
//           display: flex;
//           align-items: center;
//           justify-content: center;

//           width: 100%;

//           min-height: 42px;

//           padding: 10px;

//           box-sizing: border-box;

//           font-family: "Inter", sans-serif;

//           font-size: 18px;
//           line-height: 30px;

//           letter-spacing: 0.01em;

//           color: #000000;

//           text-align: center;
//         }

//         .digital-catalog p {
//           width: 100%;

//           margin: 0;
//         }

//         .digital-catalog strong {
//           font-weight: 700;
//         }

//         .digital-catalog span {
//           font-weight: 400;
//         }

//         /* =========================
//            Tablet
//         ========================= */

//         @media (max-width: 1100px) {
//           .library-section {
//             padding: 60px 40px;
//           }

//           .library-intro {
//             gap: 40px;
//           }

//           .library-title {
//             min-width: 330px;
//           }

//           .library-description {
//             width: auto;
//             flex: 1;
//           }
//         }

//         /* =========================
//            Mobile
//         ========================= */

//         @media (max-width: 700px) {
//           .library-section {
//             min-height: auto;

//             padding: 40px 20px;

//             gap: 35px;
//           }

//           .library-opening {
//             width: 100%;
//             height: auto;

//             flex-direction: column;

//             padding: 15px;

//             gap: 10px;
//           }

//           .opening-item {
//             font-size: 15px;
//             line-height: 24px;
//           }

//           .opening-divider {
//             width: 80%;
//             height: 1px;
//           }

//           .library-content {
//             gap: 30px;
//           }

//           .library-intro {
//             flex-direction: column;

//             gap: 25px;
//           }

//           .library-title {
//             width: 100%;
//             min-width: 0;

//             height: auto;

//             justify-content: center;
//           }

//           .library-icon {
//             width: 80px;
//             height: 80px;
//           }

//           .library-heading {
//             width: auto;
//             height: 80px;

//             font-size: 40px;
//             line-height: 44px;
//           }

//           .library-description {
//             width: 100%;
//             min-height: auto;

//             padding: 0;

//             font-size: 16px;
//             line-height: 26px;

//             text-align: left;
//           }

//           .library-description strong,
//           .library-description span {
//             width: 100%;
//           }

//           .library-image-wrapper {
//             padding: 0;
//           }

//           .library-image {
//             width: 100%;
//             height: 300px;
//           }

//           .library-statistics {
//             gap: 20px;
//           }

//           .stat-number {
//             font-size: 32px;
//             line-height: 40px;
//           }

//           .stat-subtitle {
//             font-size: 12px;
//           }

//           .stat-label {
//             font-size: 15px;
//           }

//           .stat-divider {
//             height: 50px;
//           }

//           .digital-catalog {
//             padding: 0;

//             font-size: 15px;
//             line-height: 24px;

//             text-align: center;
//           }
//         }

//         /* =========================
//            Small Mobile
//         ========================= */

//         @media (max-width: 450px) {
//           .library-section {
//             padding: 30px 15px;
//           }

//           .library-title {
//             gap: 10px;
//           }

//           .library-icon {
//             width: 60px;
//             height: 60px;
//           }

//           .library-heading {
//             height: 60px;

//             font-size: 32px;
//             line-height: 36px;
//           }

//           .library-image {
//             height: 220px;
//           }

//           .library-statistics {
//             gap: 12px;
//           }

//           .library-stat {
//             width: auto;
//             flex: 1;
//           }

//           .stat-number {
//             font-size: 25px;
//             line-height: 32px;
//           }

//           .stat-subtitle {
//             font-size: 10px;
//           }

//           .stat-label {
//             font-size: 14px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default LibrarySection;

// Dynamic Version:
import Image from "next/image";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/facility/library/about`;

async function getLibraryData() {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch library data: ${response.status}`);
    }

    const data = await response.json();

    return Array.isArray(data) ? data[0] : data;
  } catch (error) {
    console.error("Library API error:", error);
    return null;
  }
}

const LibrarySection = async () => {
  const library = await getLibraryData();

  if (!library) {
    return (
      <section className="flex min-h-[300px] w-full items-center justify-center bg-[#e6f4eb] px-5 py-16">
        <p className="font-sans text-lg text-[#444]">
          Unable to load library information.
        </p>
      </section>
    );
  }

  const description =
    library.description ||
    "The College Library is a fully air-conditioned, modern facility located on the 12th floor of the academic building, designed to support students and faculty with rich academic resources and a comfortable study environment.";

  /*
   * Current API data2:
   * "1,187 + 367 Foreign journals Journals"
   */

  const data2 = library.data2 || "";

  const journalsNumber =
    data2.match(/[\d,]+\s*\+/)?.[0]?.replace(/\s+/g, "") || "1,187+";

  const foreignJournalsMatch = data2.match(/(\d[\d,]*)\s+Foreign journals/i);

  const foreignJournals = foreignJournalsMatch
    ? `${foreignJournalsMatch[1]} foreign journals`
    : "367 foreign journals";

  /*
   * The current API doesn't contain a books count,
   * so this remains the existing value.
   */
  const booksNumber = "3,371+";

  const digitalCatalog =
    library.data3 ||
    "Digital Catalog: All resources are indexed and catalogued in a computerized database for easy access.";

  const [catalogTitle, catalogDescription] = digitalCatalog.includes(":")
    ? digitalCatalog.split(/:(.*)/s).filter(Boolean)
    : ["Digital Catalog", digitalCatalog];

  return (
    <section className="flex min-h-screen w-full flex-col items-center overflow-hidden bg-[#e6f4eb] px-[15px] py-10 sm:px-5 md:gap-[40px] md:px-10 md:py-[60px] lg:gap-[50px] lg:px-20 lg:py-20">
      {/* =========================================
          Opening Information
      ========================================= */}

      <div className="flex min-h-[50px] w-full max-w-[681px] flex-col items-center justify-center gap-2.5 bg-[rgba(1,136,55,0.1)] px-[15px] py-[15px] sm:px-6 md:flex-row md:gap-10 md:px-10 lg:gap-[50px] lg:px-[50px]">
        {/* Opening Time */}

        <div className="flex min-h-[30px] w-full items-center justify-center gap-2.5 whitespace-normal font-sans text-[15px] leading-6 tracking-[0.01em] text-black sm:text-base md:w-auto md:justify-start md:whitespace-nowrap lg:text-lg lg:leading-[30px]">
          <span
            className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#018837]"
            aria-hidden="true"
          >
            <span className="absolute left-1/2 top-1/2 h-[5px] w-[1.5px] origin-bottom -translate-x-1/2 -translate-y-full rounded-[2px] bg-[#018837]" />

            <span className="absolute left-1/2 top-1/2 h-[7px] w-[1.5px] origin-bottom -translate-x-1/2 -translate-y-full rotate-45 rounded-[2px] bg-[#018837]" />
          </span>

          <span>
            <strong className="font-bold">Open:</strong>{" "}
            <span className="font-normal">8:00 AM – 9:00 PM</span>
          </span>
        </div>

        {/* Divider */}

        <div className="h-px w-4/5 shrink-0 bg-black md:h-[19px] md:w-px" />

        {/* Working Days */}

        <div className="flex min-h-[30px] w-full items-center justify-center gap-2.5 whitespace-normal font-sans text-[15px] leading-6 tracking-[0.01em] text-black sm:text-base md:w-auto md:justify-start md:whitespace-nowrap lg:text-lg lg:leading-[30px]">
          <span
            className="relative block h-[18px] w-5 shrink-0 rounded-[2px] border-2 border-[#018837]"
            aria-hidden="true"
          >
            <span className="absolute left-0 top-1 h-0.5 w-full bg-[#018837]" />

            <span className="absolute left-1 top-[9px] h-[3px] w-[3px] rounded-full bg-[#018837]" />

            <span className="absolute left-2.5 top-[9px] h-[3px] w-[3px] rounded-full bg-[#018837]" />
          </span>

          <span>
            <strong className="font-bold">Days:</strong>{" "}
            <span className="font-normal">All working days</span>
          </span>
        </div>
      </div>

      {/* =========================================
          Library Content
      ========================================= */}

      <div className="flex w-full max-w-[1440px] flex-col gap-[30px] md:gap-10 lg:gap-[50px]">
        {/* =========================================
            Intro
        ========================================= */}

        <div className="flex w-full flex-col gap-6 md:gap-8 lg:grid lg:grid-cols-[minmax(300px,382px)_minmax(0,683px)] lg:items-start lg:justify-between lg:gap-[clamp(30px,7vw,100px)]">
          {/* Library Title */}

          <div className="flex min-h-0 w-full items-center justify-center gap-2.5 sm:gap-5 lg:min-h-[120px] lg:justify-start">
            <div className="h-[52px] w-[52px] shrink-0 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-[120px] lg:w-[120px]">
              <Image
                src="/fil.png"
                alt="Library"
                width={120}
                height={120}
                className="block h-full w-full object-contain"
              />
            </div>

            <div className="flex min-w-0 flex-col justify-center font-serif text-[26px] font-bold leading-tight tracking-[0.01em] sm:text-[30px] md:text-[40px] lg:text-[clamp(36px,3.5vw,50px)]">
              <div className="whitespace-nowrap text-black">About the</div>

              <div className="whitespace-nowrap text-[#018837]">Library</div>
            </div>
          </div>

          {/* Description */}

          <div className="flex min-h-0 w-full flex-col justify-center px-0 font-sans text-base leading-[26px] tracking-[0.01em] text-[#444] sm:text-[17px] md:min-h-[141px] md:px-2.5 md:text-lg md:leading-7 lg:text-[20px] lg:leading-[30px] lg:text-justify">
            <strong className="mb-1 block w-full font-bold">
              A Modern Hub for Academic Excellence
            </strong>

            <span className="block w-full font-normal">{description}</span>
          </div>
        </div>

        {/* =========================================
            Library Image
        ========================================= */}

        <div className="w-full p-0 md:p-2.5">
          <Image
            src={library.image}
            alt="College Library"
            width={1440}
            height={532}
            priority
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 90vw,
              (max-width: 1440px) 95vw,
              1440px
            "
            className="block h-auto aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:aspect-[1440/532]"
          />
        </div>

        {/* =========================================
            Statistics
        ========================================= */}

        <div className="flex min-h-[105px] w-full items-center justify-center gap-3 sm:gap-5 md:gap-8 lg:gap-10">
          {/* Books */}

          <div className="flex min-h-[105px] min-w-0 flex-1 flex-col items-center justify-center text-center sm:flex-none sm:w-[142px]">
            <div className="flex h-[40px] w-full items-center justify-center font-serif text-[22px] font-bold leading-8 tracking-[0.01em] text-[#018837] sm:text-[28px] md:h-[48px] md:text-[36px] lg:h-[54px] lg:text-[45px] lg:leading-[54px]">
              {booksNumber}
            </div>

            <div className="flex min-h-[25px] w-full items-center justify-center text-center font-sans text-[9px] leading-4 tracking-[0.01em] text-[#444] sm:text-[11px] md:text-xs lg:min-h-[29px] lg:text-sm lg:leading-[18px]">
              latest editions
            </div>

            <div className="flex min-h-[22px] w-full items-center justify-center text-center font-sans text-xs font-bold leading-5 tracking-[0.01em] text-black sm:text-sm md:text-base lg:text-lg lg:leading-[22px]">
              Books
            </div>
          </div>

          {/* Divider */}

          <div className="h-[45px] w-px shrink-0 bg-black sm:h-[50px] lg:h-[62px]" />

          {/* Journals */}

          <div className="flex min-h-[105px] min-w-0 flex-1 flex-col items-center justify-center text-center sm:flex-none sm:w-[178px]">
            <div className="flex h-[40px] w-full items-center justify-center font-serif text-[22px] font-bold leading-8 tracking-[0.01em] text-[#018837] sm:text-[28px] md:h-[48px] md:text-[36px] lg:h-[54px] lg:text-[45px] lg:leading-[54px]">
              {journalsNumber}
            </div>

            <div className="flex min-h-[25px] w-full items-center justify-center px-1 text-center font-sans text-[9px] leading-4 tracking-[0.01em] text-[#444] sm:text-[11px] md:text-xs lg:min-h-[29px] lg:text-sm lg:leading-[18px]">
              {foreignJournals}
            </div>

            <div className="flex min-h-[22px] w-full items-center justify-center text-center font-sans text-xs font-bold leading-5 tracking-[0.01em] text-black sm:text-sm md:text-base lg:text-lg lg:leading-[22px]">
              Journals
            </div>
          </div>
        </div>

        {/* =========================================
            Digital Catalog
        ========================================= */}

        <div className="flex min-h-[42px] w-full items-center justify-center px-0 text-center font-sans text-[14px] leading-6 tracking-[0.01em] text-black sm:text-[15px] md:px-2.5 md:text-base lg:text-lg lg:leading-[30px]">
          <p className="m-0 w-full">
            <strong className="font-bold">{catalogTitle.trim()}:</strong>{" "}
            <span className="font-normal">{catalogDescription.trim()}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LibrarySection;
