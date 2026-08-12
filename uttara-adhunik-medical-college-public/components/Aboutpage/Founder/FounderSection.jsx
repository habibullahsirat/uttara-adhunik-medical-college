"use client";

const founders = [
  {
    image: "/images/founders/da7f5211-0e4e-4f2d-91a3-7e5a2a0b60d5.jpg",
    name: "Late Prof. Mohammad Yousuf Ali",
    role: "Ex-Chairman, EC, BMSRI",
  },
  {
    image: "/images/founders/ada81bfa-33a0-4f6f-a845-1542292180f7.jpg",
    name: "Late Prof. Mohammad Yousuf Ali",
    role: "Ex-Chairman, EC, BMSRI",
  },
  {
    image: "/images/founders/a1615b80-ca47-4f17-b18b-df42c7e6d5bc.jpg",
    name: "Late Prof. Mohammad Yousuf Ali",
    role: "Ex-Chairman, EC, BMSRI",
  },
  {
    image: "/images/founders/c10c87b1-ab5c-4b17-a85f-d8cff3520597.jpg",
    name: "Late Prof. Mohammad Yousuf Ali",
    role: "Ex-Chairman, EC, BMSRI",
  },
  {
    image: "/images/founders/6d30f73a-ba89-4659-b5b0-7bd6ea02a773.jpg",
    name: "Late Prof. Mohammad Yousuf Ali",
    role: "Ex-Chairman, EC, BMSRI",
  },
  {
    image: "/images/founders/0e4dd8ea-430d-411a-a29b-d40d416e589d.jpg",
    name: "Late Prof. Mohammad Yousuf Ali",
    role: "Ex-Chairman, EC, BMSRI",
  },
  {
    image: "/images/founders/f119d5ae-6fa1-4b11-9ce9-bb48bc3b5fc7.jpg",
    name: "Late Prof. Mohammad Yousuf Ali",
    role: "Ex-Chairman, EC, BMSRI",
  },
  {
    image: "/images/founders/6395916c-61d2-4554-b9e8-009373917d21.jpg",
    name: "Late Prof. Mohammad Yousuf Ali",
    role: "Ex-Chairman, EC, BMSRI",
  },
  {
    image: "/images/founders/b00faa2b-df2e-42a6-95de-aa0e07378fbf.jpg",
    name: "Late Prof. Mohammad Yousuf Ali",
    role: "Ex-Chairman, EC, BMSRI",
  },
];

const description =
  "Late Prof. Mohammad Yousuf Ali was a visionary leader and the Ex-Chairman of the Executive Committee, BMSRI, whose dedication laid the foundation for quality medical education in Bangladesh. His relentless efforts in establishing Bangladesh Medical College and UAMC have transformed the landscape of private medical education. His legacy continues to inspire future generations of healthcare professionals.";

function FounderCard({ founder }) {
  return (
    <div className="w-full lg:w-[447px] min-h-[632px] bg-[#CFE8D9] p-[20px] flex flex-col gap-[10px]">
      {/* Image */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={founder.image}
          alt={founder.name}
          className="w-full h-full object-cover"
        />

        {/* Optional overlay */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#FECD2F] to-[#018837]" />

        {/* Description overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="font-['Inter'] text-[14px] leading-[20px] text-white text-justify">
            {description}
          </p>
        </div>
      </div>

      {/* Founder information */}
      <div className="w-full flex flex-col">
        <div className="flex items-center min-h-[50px] px-[10px]">
          <h3 className="font-['Bitter'] font-bold text-[25px] leading-[30px] text-black">
            {founder.name}
          </h3>
        </div>

        <div className="flex items-center px-[10px] py-[5px] min-h-[32px]">
          <p className="font-['Inter'] font-medium text-[18px] leading-[22px] text-[#018837]">
            {founder.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FounderSection() {
  return (
    <section className="w-full bg-white py-[50px] lg:pb-[100px]">
      {/* Section heading */}
      <div className="w-full px-[20px] lg:px-[80px] mb-[50px]">
        <h2 className="font-['Bitter'] font-medium text-[38px] sm:text-[45px] lg:text-[50px] leading-[60px] text-black">
          Founder Members
        </h2>
      </div>

      {/* Founder cards */}
      <div className="w-full px-[20px] lg:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] lg:gap-[50px] justify-items-center">
          {founders.map((founder, index) => (
            <FounderCard key={index} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
}
