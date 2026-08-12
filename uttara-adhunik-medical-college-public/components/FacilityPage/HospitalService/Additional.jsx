"use client";

const GREEN = "#018837";

const LEFT_SERVICES = [
  "Blood Bank",
  "Oral Rehydration Therapy",
  "Vaccination Services for Children",
];

const RIGHT_SERVICES = ["Outpatient Department (OPD)", "Laparoscopic Surgery"];

function ServiceItem({ children }) {
  return (
    <div
      className="w-full h-[76.4px] flex flex-row items-center justify-between px-5 py-5 gap-[10px]"
      style={{
        background: "rgba(1, 136, 55, 0.1)",
      }}
    >
      <span
        className="text-[#444444] text-[18px] leading-[30px] font-bold tracking-[0.01em]"
        style={{
          fontFamily: "Inter, sans-serif",
        }}
      >
        {children}
      </span>

      <div className="shrink-0 w-[36.4px] h-[36.4px] bg-white rounded-[2.08px] flex items-center justify-center">
        <svg
          width="24.96"
          height="24.96"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5.2 12.5H19.8"
            stroke={GREEN}
            strokeWidth="2.08"
            strokeLinecap="round"
          />
          <path
            d="M12.5 5.2L19.8 12.5L12.5 19.8"
            stroke={GREEN}
            strokeWidth="2.08"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function Additional() {
  return (
    <section className="w-full bg-white px-6 md:px-20 py-20">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start gap-[30px]">
        {/* Heading */}
        <div className="w-full h-[80px] flex items-center px-[10px]">
          <h2
            className="text-black text-[38px] md:text-[50px] leading-[60px] font-medium tracking-[0.01em]"
            style={{
              fontFamily: "'Bitter', serif",
            }}
          >
            Additional Services
          </h2>
        </div>

        {/* Services */}
        <div className="w-full flex flex-col lg:flex-row items-start gap-[30px]">
          {/* Left column */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-[10px]">
            {LEFT_SERVICES.map((service) => (
              <ServiceItem key={service}>{service}</ServiceItem>
            ))}
          </div>

          {/* Right column */}
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-[10px]">
            {RIGHT_SERVICES.map((service) => (
              <ServiceItem key={service}>{service}</ServiceItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
