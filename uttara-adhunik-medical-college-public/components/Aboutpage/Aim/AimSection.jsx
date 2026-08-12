"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Search,
  ChevronDown,
  AlignJustify,
  Clock,
  ArrowRight,
  Star,
  Menu,
  // Facebook,
  // Youtube,
  // Linkedin,
  // Instagram,
  X,
} from "lucide-react";
const GREEN = "#018837";
const YELLOW = "#FECD2F";

const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500;700&family=Inter:wght@400;500;600;700&display=swap');
  .font-display { font-family: 'Bitter', serif; }
  .font-body { font-family: 'Inter', sans-serif; }
`;

const objectives = [
  {
    title: "Academic Excellence",
    text: "Deliver a comprehensive MBBS curriculum aligned with Bangladesh Medical & Dental Council (BMDC) and Dhaka University (DU) guidelines. Equip students with a deep understanding of medical sciences, human anatomy, disease mechanisms, and healthcare practices.",
  },
  {
    title: "Clinical & Professional Skills Development",
    text: "Train students in patient history-taking, clinical examinations, and emergency management. Ensure proficiency in diagnostic procedures, laboratory investigations, and therapeutic decision-making. Promote effective communication skills for patient care and interprofessional collaboration.",
  },
  {
    title: "Ethical & Holistic Medical Practice",
    text: "Instill a strong sense of medical ethics, integrity, and responsibility towards patient welfare. Encourage a humanitarian approach in medical practice by blending scientific knowledge with empathy.",
  },
  {
    title: "Research & Continuous Learning",
    text: "Foster critical thinking, research skills, and evidence-based medical practice. Cultivate a lifelong learning mindset to adapt to evolving medical advancements and healthcare needs.",
  },
  {
    title: "Community Health & Global Standards",
    text: "Enhance healthcare accessibility by training graduates to serve diverse populations, particularly in underserved regions. Align education and healthcare practices with international standards to prepare graduates for global medical opportunities.",
  },
];

export default function Aim() {
  return (
    <section className="w-full bg-[#E6F3EB]">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-10 md:px-10 lg:px-20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[30px]">
          {/* AIM HEADER */}
          <div className="flex w-full flex-col items-start gap-8 py-[30px] lg:flex-row lg:items-start lg:gap-[200px]">
            {/* Aim title */}
            <div className="flex w-full items-center lg:w-[374px]">
              <div className="flex items-end gap-[10px]">
                <h2 className="font-['Bitter'] text-[40px] font-bold leading-[60px] tracking-[0.01em] text-black md:text-[50px]">
                  Aim
                </h2>

                <div className="mb-[8px] h-[2px] w-[120px] bg-black md:w-[200px]" />
              </div>
            </div>

            {/* Description */}
            <div className="flex w-full items-center lg:w-[866px]">
              <p className="w-full text-justify font-['Inter'] text-[16px] font-bold leading-[22px] text-[#444444] md:text-[18px]">
                Uttara Adhunik Medical College (UAMC) is committed to producing
                competent, compassionate, and dedicated healthcare professionals
                equipped with the knowledge and skills to serve the community,
                particularly in rural areas. The institution strives to provide
                a solid foundation for future training, service, and research at
                both national and international levels while fostering
                continuous professional development.
              </p>
            </div>
          </div>

          {/* IMAGE + OBJECTIVE */}
          <div className="relative w-full">
            <div className="relative h-[300px] w-full overflow-hidden md:h-[468px] lg:w-[1048px]">
              <img
                src="/images/team-young-specialist-doctors-standing-corridor-hospital.jpg"
                alt="Medical professionals standing in a hospital corridor"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Yellow Objective box */}
            <div className="relative mt-[-30px] flex min-h-[150px] w-full items-center bg-[#FECD2F] px-6 py-5 md:mt-[-170px] md:ml-auto md:w-[678px] md:min-h-[170px] md:px-[50px]">
              <div className="flex items-center">
                <div className="flex items-end gap-[10px]">
                  <h2 className="font-['Bitter'] text-[55px] font-bold leading-[70px] tracking-[0.01em] text-black md:text-[80px] md:leading-[96px]">
                    Objective
                  </h2>

                  <div className="mb-[10px] hidden h-[2px] w-[200px] bg-black md:block" />
                </div>
              </div>
            </div>
          </div>

          {/* OBJECTIVES GRID */}
          <div className="w-full bg-[rgba(1,136,55,0.1)] px-5 py-[30px] md:px-10 lg:px-5">
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 gap-[10px] lg:grid-cols-3">
              {objectives.slice(0, 3).map((item) => (
                <ObjectiveCard
                  key={item.title}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>

            {/* Second row - 2 cards */}
            <div className="mt-[10px] grid grid-cols-1 gap-[10px] lg:grid-cols-2">
              {objectives.slice(3).map((item) => (
                <ObjectiveCard
                  key={item.title}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          </div>

          {/* BOTTOM STATEMENT */}
          <div className="flex w-full items-center justify-center px-5 py-5 md:px-[80px]">
            <p className="w-full text-center font-['Inter'] text-[17px] font-normal leading-[24px] text-[#444444] md:text-[20px]">
              With a structured five-year MBBS program followed by a one-year
              internship, UAMC ensures that graduates are well-prepared to
              contribute meaningfully to the medical field and society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------
   OBJECTIVE CARD
------------------------------------------------- */

function ObjectiveCard({ title, text }) {
  return (
    <div className="flex min-h-[277px] flex-col items-start p-[10px]">
      {/* Card heading */}
      <div className="flex w-full flex-col items-start gap-[10px]">
        <h3 className="font-['Bitter'] text-[20px] font-bold leading-[24px] text-[#018837]">
          {title}
        </h3>

        <div className="h-[1px] w-[70%] bg-[#444444]" />
      </div>

      {/* Card description */}
      <div className="flex w-full flex-1 items-center justify-center p-[10px]">
        <p className="w-full text-justify font-['Inter'] text-[16px] font-normal leading-[22px] text-[#444444] md:text-[18px]">
          {text}
        </p>
      </div>
    </div>
  );
}
