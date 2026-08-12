import React from "react";

const departments = [
  {
    title: "College and Hospital Administration",
    established: "February 19, 2025",
    image:
      "/images/background-focus-nurse-wearing-protective-mask-gloves-checking-clinical-x-ray-ct-scan-results-doctor-patient-social-distancing-medical-check-up-sanitary-sterile-clinic.jpg",
  },
  {
    title: "Department of Physiology",
    established: "February 19, 2025",
    image: "/images/department-2.jpg",
  },
  {
    title: "Department of Microbiology",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Dept. of Community Medicine",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Pathology",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Dermatology",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Otolaryngology (ENT-Head & Neck)",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Orthopedics",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Urology",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Neurosurgery",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Gynaecology & Obstetrics",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Anatomy",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Respiratory Medicine",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Gastroenterology",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Nephrology",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Medicine",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Ophthalmology",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Biochemistry",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Anesthesiology",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Forensic Medicine",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Neuro Medicine",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Cardiology",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Pharmacology",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Paediatrics",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Surgery",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Radiology & Imaging",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Psychiatry",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
  {
    title: "Department of Transfusion Medicine",
    established: "February 19, 2025",
    image: "/images/department-3.jpg",
  },
];

const Department = () => {
  return (
    <section className="department-section">
      {/* =========================
          Heading
      ========================= */}

      <div className="department-heading">
        <h1>Departments</h1>

        <p>
          List of academic and clinical departments with their establishment
          dates.
        </p>
      </div>

      {/* =========================
          Department Cards
      ========================= */}

      <div className="department-grid">
        {departments.map((department, index) => (
          <div className="department-card" key={index}>
            {/* Image */}
            <div
              className="department-image"
              style={{
                backgroundImage: `url("${department.image}")`,
              }}
            />

            {/* Content */}
            <div className="department-content">
              <div className="department-info">
                <h3>{department.title}</h3>

                <p>Established: {department.established}</p>
              </div>

              <a href="#" className="learn-more-btn">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* =========================
          Styles
      ========================= */}

      <style>{`
        /* ========================================
           Department Section
        ======================================== */

        // .department-section {
        //   width: 100%;
        //   padding: 50px 80px;
        //   box-sizing: border-box;
        //   background: #fbfbfb;
        // }
      

.department-section {
  width: 100%;
  padding: 50px 80px 120px;
  box-sizing: border-box;
  background: #e6f4eb;
}




        /* ========================================
           Heading
        ======================================== */

        .department-heading {
          display: flex;
          flex-direction: column;
          align-items: center;

          width: 100%;
          max-width: 549px;

          margin: 0 auto 50px;
          padding: 0;
        }

        .department-heading h1 {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 331px;
          height: 60px;

          margin: 0;

          font-family: "Bitter", serif;
          font-style: normal;
          font-weight: 700;
          font-size: 50px;
          line-height: 60px;
          letter-spacing: 0.01em;
          text-align: center;

          color: #000000;
        }

        .department-heading p {
          width: 100%;
          max-width: 529px;

          margin: 10px 0 0;
          padding: 0;

          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 30px;
          letter-spacing: 0.01em;
          text-align: center;

          color: #000000;
        }

        /* ========================================
           Department Grid
           
           Figma:
           Screen:    1601px
           Padding:     80px
           Container: 1441px
           Gap:         30px
        ======================================== */

        .department-grid {
          display: grid;

          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 30px;

          width: 100%;
          max-width: 1441px;

          margin: 0 auto;
        }

        /* ========================================
           Department Card
        ======================================== */

        .department-card {
          display: flex;
          flex-direction: column;
          align-items: stretch;

          width: 100%;
          min-width: 0;
          min-height: 400px;

          padding: 10px;

          box-sizing: border-box;

          background: #ffffff;

          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);

          border-radius: 10px;

          overflow: hidden;
        }

        /* ========================================
           Card Image
        ======================================== */

        .department-image {
          width: 100%;
          height: 220px;

          flex-shrink: 0;

          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;

          border-radius: 10px;
        }

        /* ========================================
           Card Content
        ======================================== */

        .department-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          width: 100%;
          flex: 1;

          padding: 10px;

          gap: 15px;

          box-sizing: border-box;
        }

        .department-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          width: 100%;
        }

        .department-info h3 {
          width: 100%;

          margin: 0;
          padding: 10px 0;

          font-family: "Bitter", serif;
          font-style: normal;
          font-weight: 600;

          font-size: 15px;
          line-height: 18px;

          letter-spacing: 0.01em;

          color: #444444;
        }

        .department-info p {
          width: 100%;

          margin: 0;

          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 400;

          font-size: 15px;
          line-height: 18px;

          letter-spacing: 0.01em;

          color: #444444;
        }

        /* ========================================
           Learn More Button
        ======================================== */

        .learn-more-btn {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 142px;
          height: 38px;

          padding: 10px 30px;

          box-sizing: border-box;

          border-radius: 5px;

          background: #018837;
          color: #ffffff;

          font-family: "Bitter", serif;
          font-style: normal;
          font-weight: 600;

          font-size: 15px;
          line-height: 18px;

          letter-spacing: 0.01em;

          text-decoration: none;

          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .learn-more-btn:hover {
          background: #016f2d;
          transform: translateY(-1px);
        }

        /* ========================================
           Large Desktop
        ======================================== */

        @media (max-width: 1500px) {
          .department-section {
            padding-left: 50px;
            padding-right: 50px;
          }

          .department-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr));
          }
        }

        /* ========================================
           Desktop / Laptop
        ======================================== */

        @media (max-width: 1200px) {
          .department-section {
            padding-left: 30px;
            padding-right: 30px;
          }

          .department-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        /* ========================================
           Tablet
        ======================================== */

        @media (max-width: 900px) {
          .department-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 30px;
          }
        }

        /* ========================================
           Small Tablet
        ======================================== */

        @media (max-width: 700px) {
          .department-section {
            padding: 40px 20px;
          }

          .department-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }

          .department-image {
            height: 220px;
          }
        }

        /* ========================================
           Mobile
        ======================================== */

        @media (max-width: 500px) {
          .department-section {
            padding: 30px 15px;
          }

          .department-heading {
            margin-bottom: 30px;
          }

          .department-heading h1 {
            width: 100%;
            height: auto;

            font-size: 40px;
            line-height: 48px;
          }

          .department-heading p {
            width: 100%;
            padding: 0 5px;

            font-size: 14px;
            line-height: 24px;

            text-align: center;
          }

          .department-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .department-card {
            min-height: 400px;
          }

          .department-image {
            height: 251px;
          }
        }
      `}</style>
    </section>
  );
};

export default Department;
