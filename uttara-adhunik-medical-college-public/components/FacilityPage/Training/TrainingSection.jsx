export default function TrainingSection() {
  return (
    <section className="w-full bg-[#E6F4EB]">
      <div
        className="
          w-full
          max-w-[1600px]
          mx-auto
          min-h-[805px]
          flex
          flex-col
          items-center
          gap-[50px]
          px-[80px]
          py-[80px]
          box-border
        "
      >
        {/* ================= TOP CONTENT ================= */}
        <div
          className="
            w-full
            max-w-[1440px]
            h-[140px]
            flex
            flex-row
            justify-center
            items-start
            gap-[50px]
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
              w-[707px]
              h-[120px]
              flex
              flex-row
              items-center
              flex-1
            "
          >
            {/* Icon + Text */}
            <div
              className="
                w-[438px]
                h-[120px]
                flex
                flex-row
                items-center
                gap-[20px]
              "
            >
              {/* Laboratory / Training Icon */}
              <img
                src="/fil.png"
                alt=""
                className="
                  w-[120px]
                  h-[120px]
                  object-contain
                  shrink-0
                "
              />

              {/* Training Facilities Text */}
              <div
                className="
                  w-[298px]
                  h-[120px]
                  flex
                  flex-col
                  justify-center
                  items-start
                "
              >
                <h2
                  className="
                    m-0
                    p-0
                    text-[#018837]
                    font-bold
                    text-[50px]
                    leading-[60px]
                    tracking-[0.01em]
                  "
                  style={{
                    fontFamily: "'Bitter', serif",
                  }}
                >
                  Training
                </h2>

                <h2
                  className="
                    m-0
                    p-0
                    text-[#444444]
                    font-bold
                    text-[50px]
                    leading-[60px]
                    tracking-[0.01em]
                  "
                  style={{
                    fontFamily: "'Bitter', serif",
                  }}
                >
                  Services
                </h2>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}

          <div
            className="flex w-full flex-1"
            style={{
              width: "683px",
              height: "140px",
              padding: "10px",
              justifyContent: "center",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                width: "663px",
                height: "120px",
                margin: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                fontFamily: "'Bitter', serif",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "30px",
                letterSpacing: "0.01em",
                textAlign: "justify",
                color: "#444444",
              }}
            >
              <span style={{ display: "block", whiteSpace: "nowrap" }}>
                <strong>Building Future Healthcare Professionals</strong>
              </span>

              <span style={{ display: "block" }}>
                <strong style={{ fontWeight: 700 }}>
                  Uttara Adhunik Medical College & Hospital(UAMCH),
                </strong>{" "}
                is a proud institution under Bangladesh Medical Studies and
                Research Institute (BMSRI), offering high-standard training and
                learning opportunities for both undergraduate and postgraduate
                medical students.
              </span>
            </p>
          </div>
        </div>

        {/* ================= LARGE IMAGE ================= */}
        <div
          className="
            w-full
            max-w-[1440px]
            h-[455px]
            flex
            flex-col
            justify-center
            items-start
            gap-[10px]
          "
        >
          <div
            className="
              w-full
              h-[457.35px]
              flex
              flex-row
              items-start
              gap-[10px]
            "
          >
            <img
              src="/assets/eb3eef03-816e-45c5-8b6f-695bc5f3b6eb.jpg"
              alt="Training Services"
              className="
                w-full
                h-[457.35px]
                object-cover
                flex-1
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
