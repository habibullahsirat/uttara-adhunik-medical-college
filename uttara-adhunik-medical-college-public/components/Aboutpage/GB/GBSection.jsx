"use client";

const members = [
  {
    image: "/images/gb-member-1.jpg",
    name: "Late Prof. Mohammad Yousuf Ali",
    designation: "Ex-Chairman, EC, BMSRI",
  },
];

export default function GBSection() {
  return (
    <section className="w-full flex flex-col items-start pt-[50px] pb-[100px] gap-[50px]">
      {/* Heading */}
      <div className="w-full h-[80px] flex flex-row items-center px-[80px] py-[10px]">
        <h2 className="font-['Bitter'] font-medium text-[50px] leading-[60px] text-black">
          GB Members
        </h2>
      </div>

      {/* Members */}
      <div className="w-full flex flex-row items-center px-[80px] gap-[50px]">
        {members.map((member, index) => (
          <div
            key={index}
            className="w-[447px] h-[632px] bg-[#CFE8D9] p-[20px] flex flex-col items-start gap-[10px]"
          >
            {/* Image */}
            <div className="w-[407px] h-[500px] overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Member information */}
            <div className="w-[373px] h-[82px] flex flex-col items-start">
              {/* Name */}
              <div className="w-full h-[50px] flex flex-row items-center px-[10px]">
                <h3 className="font-['Bitter'] font-bold text-[25px] leading-[30px] text-black whitespace-nowrap">
                  {member.name}
                </h3>
              </div>

              {/* Designation */}
              <div className="h-[32px] flex flex-row justify-center items-center px-[10px] py-[5px]">
                <p className="font-['Inter'] font-medium text-[18px] leading-[22px] text-[#018837] whitespace-nowrap">
                  {member.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}