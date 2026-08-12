const GREEN = "#018837";

const leftServices = [
  "Hematology",
  "Clinical Chemistry",
  "Urinalysis",
  "Therapeutic Drug Monitoring",
  "Bacteriology",
];

const rightServices = [
  "Mycology",
  "Parasitology",
  "Diagnostic Serology",
  "Surgical Pathology",
  "Cytopathology",
];

function ServiceItem({ name }) {
  return (
    <div
      className="
        w-full
        h-[76.4px]
        flex
        flex-row
        justify-between
        items-center
        px-[20px]
        py-[20px]
        gap-[10px]
      "
      style={{
        background: "rgba(1, 136, 55, 0.1)",
      }}
    >
      {/* Service name */}
      <p
        className="
          m-0
          flex-1
          h-[30px]
          flex
          items-center
          text-[18px]
          leading-[30px]
          font-bold
          tracking-[0.01em]
          text-[#444444]
        "
        style={{
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {name}
      </p>

      {/* Arrow button */}
      <div
        className="
          shrink-0
          w-[36.4px]
          h-[36.4px]
          bg-white
          rounded-[2.07972px]
          flex
          items-center
          justify-center
        "
      >
        <svg
          width="24.96"
          height="24.96"
          viewBox="0 0 24.96 24.96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal line */}
          <path
            d="M5.2 12.48H19.76"
            stroke={GREEN}
            strokeWidth="2.07972"
            strokeLinecap="round"
          />

          {/* Arrow */}
          <path
            d="M12.48 5.2L19.76 12.48L12.48 19.76"
            stroke={GREEN}
            strokeWidth="2.07972"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function LaboratoryServices() {
  return (
    <section
      className="
        w-full
        bg-white
        flex
        flex-col
        items-start
        px-[80px]
        py-[80px]
        gap-[30px]
      "
    >
      {/* 1440px content container */}
      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto
          flex
          flex-col
          items-start
          gap-[30px]
        "
      >
        {/* Heading */}
        <div
          className="
            w-full
            h-[80px]
            flex
            items-center
            px-[10px]
            gap-[10px]
          "
        >
          <h2
            className="
              m-0
              h-[60px]
              flex
              items-center
              text-[50px]
              leading-[60px]
              font-medium
              tracking-[0.01em]
              text-black
            "
            style={{
              fontFamily: "'Bitter', serif",
            }}
          >
            Laboratory Services
          </h2>
        </div>

        {/* Two-column service area */}
        <div
          className="
            w-full
            flex
            flex-row
            items-start
            gap-[30px]
          "
        >
          {/* Left column */}
          <div
            className="
              w-1/2
              max-w-[705px]
              flex
              flex-col
              items-start
              gap-[30px]
            "
          >
            {leftServices.map((service) => (
              <ServiceItem key={service} name={service} />
            ))}
          </div>

          {/* Right column */}
          <div
            className="
              w-1/2
              max-w-[705px]
              flex
              flex-col
              items-start
              gap-[30px]
            "
          >
            {rightServices.map((service) => (
              <ServiceItem key={service} name={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
