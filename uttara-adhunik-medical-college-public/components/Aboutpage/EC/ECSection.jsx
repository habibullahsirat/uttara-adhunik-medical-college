"use client";

import React from "react";

const members = [
  {
    image: "/images/1168b98e-1460-45bc-867b-47bab20dc363.jpg",
    name: "Late Prof. Mohammad Yousuf Ali",
    role: "Ex-Chairman, EC, BMSRI",
  },
  {
    image: "/images/b8af5a03-d623-4e42-bb1d-8846aa628952.jpg",
    name: "Late Prof. Mohammad Yousuf Ali",
    role: "Ex-Chairman, EC, BMSRI",
  },
  {
    image: "/images/a3097940-6216-4256-ab70-df93bc1d700c.jpg",
    name: "Late Prof. Mohammad Yousuf Ali",
    role: "Ex-Chairman, EC, BMSRI",
  },
];

const MemberCard = ({ image, name, role }) => {
  return (
    <div className="flex h-[632px] w-[447px] flex-col items-start gap-[10px] bg-[#CFE8D9] p-[20px]">
      {/* Member Image */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>

      {/* Member Information */}
      <div className="flex h-[82px] w-full flex-col items-start">
        {/* Name */}
        <div className="flex h-[50px] w-full items-center gap-[10px] px-[10px] py-[10px]">
          <h3 className="font-[Bitter] text-[25px] font-bold leading-[30px] text-black">
            {name}
          </h3>
        </div>

        {/* Role */}
        <div className="flex h-[32px] items-center justify-center gap-[10px] px-[10px] py-[5px]">
          <p className="font-[Inter] text-[18px] font-medium leading-[22px] text-[#018837]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function ECSection() {
  return (
    <section className="flex w-full flex-col items-start gap-[50px] bg-white pb-[100px] pt-[50px]">
      {/* Heading */}
      <div className="flex h-[80px] w-full items-center gap-[10px] px-[80px] py-[10px]">
        <h2 className="font-[Bitter] text-[50px] font-medium leading-[60px] text-black">
          EC Members
        </h2>
      </div>

      {/* Members */}
      <div className="flex w-full flex-row items-start gap-[50px] px-[80px]">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </section>
  );
}
