import React from "react";

const GREEN = "#018837";

const notices = [
  {
    no: "01",
    date: "April 9, 2025",
    title: "Necessary Documents for MBBS Admission (Session: 2024–2025)",
  },
  {
    no: "02",
    date: "April 5, 2025",
    title:
      "Admission Notice in MBBS Course (Session: 2024–2025) for Private Medical Colleges",
  },
  {
    no: "03",
    date: "Jan 25, 2025",
    title:
      "Necessary Documents for Admission in MBBS Course (Session: 2023–2024)",
  },
  {
    no: "04",
    date: "Feb 19, 2024",
    title: "Admission Notice in MBBS Course (Session: 2023–2024)",
  },
  {
    no: "05",
    date: "Feb 16, 2024",
    title: "Notice of MBBS Admission (Session: 2022–2023)",
  },
  {
    no: "06",
    date: "June 30, 2023",
    title:
      "Necessary Documents for Admission in MBBS Course (Session: 2023–2024)",
  },
  {
    no: "07",
    date: "June 25, 2023",
    title: "Govt. Circular for MBBS Admission 2023 in Private Medical Colleges",
  },
  {
    no: "08",
    date: "June 6, 2023",
    title: "Necessary Documents to Submit Application",
  },
  {
    no: "09",
    date: "June 5, 2021",
    title: "Admission Circular (Govt. Notice)",
  },
];

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

function ActionButton({ children, label }) {
  return (
    <button type="button" aria-label={label} className="notice-action-button">
      {children}
    </button>
  );
}

function NoticeRow({ no, date, title }) {
  return (
    <div className="notice-row">
      <div className="notice-number">{no}</div>

      <div className="notice-date">{date}</div>

      <div className="notice-separator" />

      <div className="notice-title">{title}</div>

      <div className="notice-separator" />

      <div className="notice-actions">
        <ActionButton label={`Download ${title}`}>
          <DownloadIcon />
        </ActionButton>

        <ActionButton label={`Share ${title}`}>
          <ShareIcon />
        </ActionButton>
      </div>
    </div>
  );
}

export default function NoticeSection() {
  return (
    <section className="notice-section">
      <div className="notice-container">
        {/* Header */}
        <header className="notice-header">
          <h2>Admission Papers &amp; Notices</h2>

          <p>MBBS Admission – Session 2024–2025</p>
        </header>

        {/* Green accent visible above the table */}
        {/* Green accent + heading above the table */}
        <div className="notice-accent-heading">
          <div className="notice-accent" />

          <h3>Recent Admission Notices &amp; Required Documents</h3>
        </div>

        {/* Table */}
        <div className="notice-table">
          <div className="notice-table-header">
            <div>No.</div>
            <div>Date</div>
            <div />
            <div>Title</div>
            <div />
            <div>Action</div>
          </div>

          {notices.map((notice) => (
            <NoticeRow key={notice.no} {...notice} />
          ))}
        </div>

        {/* Note */}
        <div className="notice-note">
          <p>
            <strong> Note:</strong> All applicants are advised to check the
            latest official notices on the Directorate General of Medical
            Education (DGME) website for up-to-date admission instructions and
            required documents.
          </p>
        </div>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .notice-section {
          width: 100%;
          min-height: 1258px;
          padding: 76px 77px 80px;
          background: #fff;
          font-family: "Inter", Arial, sans-serif;
        }

        .notice-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* =========================
           HEADER
        ========================= */

        .notice-header {
          width: 100%;
          text-align: center;
        }

        .notice-header h2 {
          margin: 0;
          font-family: "Bitter", Georgia, serif;
          font-size: 50px;
          line-height: 60px;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: #000;
        }

        .notice-header p {
          margin: 8px 0 0;
          font-family: "Inter", Arial, sans-serif;
          font-size: 15px;
          line-height: 22px;
          font-weight: 400;
          color: #000;
        }

        /* =========================
           GREEN ACCENT
        ========================= */

       .notice-accent-heading {
  width: 100%;
  height: 45px;
  margin-top: 66px;
  margin-bottom: 19px;

  display: flex;
  align-items: center;
}

.notice-accent {
  width: 4px;
  min-width: 4px;
  height: 45px;
  margin: 0 14px 0 0;
  background: ${GREEN};
}

.notice-accent-heading h3 {
  margin: 0;

  font-family: "Bitter", Georgia, serif;
  font-size: 40px;
  line-height: 45px;
  font-weight: 700;

  color: #444444;
}

        /* =========================
           TABLE
        ========================= */

        .notice-table {
          width: 100%;
          overflow: hidden;
          background: #fff;
          border-top: 1px solid rgba(68, 68, 68, 0.45);
        }

        .notice-table-header,
        .notice-row {
          width: 100%;
          display: grid;
          grid-template-columns:
            70px
            352px
            1px
            minmax(0, 1fr)
            1px
            352px;
          align-items: center;
          padding-left: 20px;
          padding-right: 20px;
        }

        /* =========================
           TABLE HEADER
        ========================= */

        .notice-table-header {
          height: 55px;
          background: rgba(20, 168, 0, 0.10);
          border-bottom: 1px solid rgba(68, 68, 68, 0.45);

          font-family: "Bitter", Georgia, serif;
          font-size: 15px;
          line-height: 18px;
          font-weight: 700;
          color: #444;
        }

        .notice-table-header > div:nth-child(4) {
          padding-left: 116px;
        }

        .notice-table-header > div:nth-child(6) {
          padding-left: 20px;
          text-align: right;
        }

        /* =========================
           ROW
        ========================= */

        .notice-row {
          min-height: 82px;
          padding-top: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(68, 68, 68, 0.12);
        }

        .notice-row:last-child {
          border-bottom: none;
        }

        .notice-number,
        .notice-date,
        .notice-title {
          font-family: "Inter", Arial, sans-serif;
          font-size: 15px;
          line-height: 17px;
          font-weight: 400;
          color: #444;
        }

        .notice-number {
          padding-left: 0;
        }

        .notice-date {
          padding-right: 20px;
        }

        .notice-title {
          padding-left: 116px;
          padding-right: 20px;
        }

        /* =========================
           SEPARATORS
        ========================= */

        .notice-separator {
          width: 1px;
          height: 17px;
          background: rgba(68, 68, 68, 0.5);
        }

        /* =========================
           ACTIONS
        ========================= */

        .notice-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px;
          padding-left: 20px;
        }

        .notice-action-button {
          width: 40px;
          height: 40px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: rgba(1, 136, 55, 0.10);

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;
          transition:
            background-color 0.2s ease,
            transform 0.2s ease;
        }

        .notice-action-button:hover {
          background: rgba(1, 136, 55, 0.18);
          transform: translateY(-1px);
        }

        .notice-action-button:active {
          transform: translateY(0);
        }

        /* =========================
           NOTE
        ========================= */

        .notice-note {
          width: 100%;
          margin-top: 28px;
          padding: 10px 20px;
          border-left: 4px solid ${GREEN};
        }

        .notice-note p {
  margin: 0;
  font-family: "Inter", Arial, sans-serif;
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  color: #444466; /* lighter black */
}

.notice-note strong {
  font-weight: 700;
  color: #000000; /* Note: stays bold black */
}

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1200px) {
          .notice-section {
            padding: 60px 40px 70px;
          }

          .notice-header h2 {
            font-size: 44px;
            line-height: 52px;
          }

          .notice-table-header,
          .notice-row {
            grid-template-columns:
              60px
              180px
              1px
              minmax(0, 1fr)
              1px
              120px;
          }

          .notice-table-header > div:nth-child(4),
          .notice-title {
            padding-left: 40px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 768px) {
          .notice-section {
            min-height: auto;
            padding: 45px 20px 60px;
          }

          .notice-header h2 {
            font-size: 32px;
            line-height: 40px;
          }

          .notice-header p {
            margin-top: 8px;
            font-size: 14px;
            line-height: 22px;
          }

          .notice-accent {
            margin-top: 45px;
            margin-bottom: 18px;
          }

          .notice-table {
            overflow-x: auto;
          }

          .notice-table-header,
          .notice-row {
            min-width: 760px;
            grid-template-columns:
              60px
              160px
              1px
              minmax(300px, 1fr)
              1px
              100px;
          }

          .notice-table-header > div:nth-child(4),
          .notice-title {
            padding-left: 20px;
          }

          .notice-row {
            min-height: 78px;
          }

          .notice-note p {
            font-size: 14px;
            line-height: 22px;
          }
        }
      `}</style>
    </section>
  );
}
