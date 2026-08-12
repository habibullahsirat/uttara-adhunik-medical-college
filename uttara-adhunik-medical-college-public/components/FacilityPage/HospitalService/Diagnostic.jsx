"use client";

const GREEN = "#018837";

const LEFT_SERVICES = [
  "Modern Diagnostic Facilities",
  "CT Scan",
  "Ultrasound",
  "Digital X-Ray",
];

const RIGHT_SERVICES = [
  "Reference Pathology & Laboratory",
  "Cardiac Non-Invasive Lab",
  "Gastroenterology: Video Endoscopy & Colonoscopy",
];

export default function Diagnostic() {
  const ServiceItem = ({ title }) => {
    return (
      <div
        className="flex min-h-[76px] w-full items-center justify-between gap-4 px-5 py-5"
        style={{
          background: "rgba(1, 136, 55, 0.1)",
        }}
      >
        <span
          className="text-[16px] font-bold leading-[30px] tracking-[0.01em] text-[#444444] md:text-[18px]"
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {title}
        </span>

        {/* Arrow Button */}
        <button
          type="button"
          aria-label={`View ${title}`}
          className="group flex h-[36.4px] w-[36.4px] shrink-0 items-center justify-center rounded-[2px] bg-white transition-all duration-200 hover:bg-[#018837]"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.2 12.48H19.76"
              stroke={GREEN}
              strokeWidth="2.08"
              strokeLinecap="round"
              className="group-hover:stroke-white"
            />

            <path
              d="M12.48 5.2L19.76 12.48L12.48 19.76"
              stroke={GREEN}
              strokeWidth="2.08"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <>
      {/* =========================================
          DIAGNOSTIC & IMAGING SERVICES
      ========================================== */}

      <section className="w-full bg-white px-6 py-16 md:px-20 md:py-20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-[30px]">
          {/* =========================
              Section Heading
          ========================== */}

          <div className="flex min-h-[80px] w-full items-center px-[10px]">
            <h2
              className="text-[36px] font-medium leading-[45px] tracking-[0.01em] text-black md:text-[50px] md:leading-[60px]"
              style={{
                fontFamily: "'Bitter', serif",
              }}
            >
              Diagnostic &amp; Imaging Services
            </h2>
          </div>

          {/* =========================
              Services
          ========================== */}

          <div className="flex w-full flex-col items-start gap-[30px] lg:flex-row">
            {/* Left Column */}

            <div className="flex w-full flex-col gap-[10px] lg:w-1/2">
              {LEFT_SERVICES.map((service) => (
                <ServiceItem key={service} title={service} />
              ))}
            </div>

            {/* Right Column */}

            <div className="flex w-full flex-col gap-[10px] lg:w-1/2">
              {RIGHT_SERVICES.map((service) => (
                <ServiceItem key={service} title={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FULL-WIDTH HORIZONTAL DIVIDER
      ========================================== */}

      <div
        className="w-full"
        style={{
          height: "1px",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
        }}
      />
    </>
  );
}
