import React from "react";

const facilities = [
  {
    heading: "Reading Space:",
    text: "Accommodation for 105 students and teachers at a time in a quiet, focused environment.",
  },
  {
    heading: "Book Lending:",
    text: "Textbooks can be borrowed for on-campus or at-home use.",
  },
  {
    heading: "Internet Access:",
    text: "High-speed internet is available for research and study.",
  },
  {
    heading: "Photocopying:",
    text: "A photocopy machine is available for quick access to academic materials.",
  },
];

const LibraryFacility = () => {
  return (
    <section className="library-facility">
      {/* =========================
          Heading
      ========================= */}
      <div className="facility-heading">
        <h2>Facilities &amp; Services</h2>
      </div>

      {/* =========================
          Facilities Grid
      ========================= */}
      <div className="facility-grid">
        {/* Left Column */}
        <div className="facility-column">
          {facilities.slice(0, 2).map((facility, index) => (
            <div className="facility-card" key={index}>
              <p>
                <strong>{facility.heading}</strong> <span>{facility.text}</span>
              </p>

              <a href="#" className="facility-arrow" aria-label="Learn more">
                <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="facility-column">
          {facilities.slice(2, 4).map((facility, index) => (
            <div className="facility-card" key={index + 2}>
              <p>
                <strong>{facility.heading}</strong> <span>{facility.text}</span>
              </p>

              <a href="#" className="facility-arrow" aria-label="Learn more">
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* =========================
          Styles
      ========================= */}
      <style>{`
        /* =========================
           Main Section
        ========================= */

        .library-facility {
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 100%;
          min-height: 500px;

          padding: 80px;

          gap: 30px;

          box-sizing: border-box;

          background: #ffffff;
        }

        /* =========================
           Center Heading
        ========================= */

        .facility-heading {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          max-width: 1440px;

          height: 80px;

          padding: 10px;

          box-sizing: border-box;
        }

        .facility-heading h2 {
          display: flex;
          align-items: center;
          justify-content: center;

          margin: 0;

          width: 100%;

          font-family: "Bitter", serif;
          font-style: normal;
          font-weight: 500;

          font-size: 50px;
          line-height: 60px;

          letter-spacing: 0.01em;

          text-align: center;

          color: #000000;
        }

        /* =========================
           Facilities Grid
        ========================= */

        .facility-grid {
          display: flex;
          flex-direction: row;
          align-items: flex-start;

          width: 100%;
          max-width: 1440px;

          gap: 30px;
        }

        /* =========================
           Columns
        ========================= */

        .facility-column {
          display: flex;
          flex-direction: column;

          width: calc(50% - 15px);

          gap: 30px;
        }

        /* =========================
           Facility Card
        ========================= */

        .facility-card {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          width: 100%;
          height: 100px;

          padding: 20px;

          gap: 10px;

          box-sizing: border-box;

          background: rgba(1, 136, 55, 0.1);
        }

        .facility-card p {
          margin: 0;

          flex: 1;

          font-family: "Inter", sans-serif;
          font-style: normal;

          font-size: 18px;
          line-height: 30px;

          letter-spacing: 0.01em;

          color: #444444;
        }

        /* Card Heading - Bold */
        .facility-card p strong {
          font-weight: 700;
          color: #444444;
        }

        /* Card Description - Normal */
        .facility-card p span {
          font-weight: 400;
        }

        /* =========================
           Arrow Button
        ========================= */

        .facility-arrow {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 36.4px;
          height: 36.4px;

          flex-shrink: 0;

          background: #ffffff;

          border-radius: 2.08px;

          text-decoration: none;

          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .facility-arrow span {
          display: flex;
          align-items: center;
          justify-content: center;

          color: #018837;

          font-family: Arial, sans-serif;

          font-size: 25px;
          font-weight: 400;

          line-height: 1;

          transform: translateY(-1px);
        }

        .facility-arrow:hover {
          background: #018837;

          transform: translateX(3px);
        }

        .facility-arrow:hover span {
          color: #ffffff;
        }

        /* =========================
           Tablet
        ========================= */

        @media (max-width: 1000px) {
          .library-facility {
            padding: 60px 40px;
          }

          .facility-grid {
            flex-direction: column;
          }

          .facility-column {
            width: 100%;
          }
        }

        /* =========================
           Mobile
        ========================= */

        @media (max-width: 600px) {
          .library-facility {
            padding: 40px 20px;

            gap: 25px;
          }

          .facility-heading {
            height: auto;

            padding: 0;
          }

          .facility-heading h2 {
            font-size: 36px;
            line-height: 44px;
          }

          .facility-grid {
            gap: 15px;
          }

          .facility-column {
            gap: 15px;
          }

          .facility-card {
            height: auto;
            min-height: 100px;

            padding: 15px;
          }

          .facility-card p {
            font-size: 15px;
            line-height: 24px;
          }

          .facility-card p strong {
            font-weight: 700;
          }

          .facility-card p span {
            font-weight: 400;
          }

          .facility-arrow {
            width: 32px;
            height: 32px;
          }

          .facility-arrow span {
            font-size: 21px;
          }
        }

        /* =========================
           Small Mobile
        ========================= */

        @media (max-width: 400px) {
          .library-facility {
            padding: 30px 15px;
          }

          .facility-heading h2 {
            font-size: 30px;
            line-height: 38px;
          }

          .facility-card {
            padding: 12px;
          }

          .facility-card p {
            font-size: 14px;
            line-height: 22px;
          }
        }
      `}</style>
    </section>
  );
};

export default LibraryFacility;
