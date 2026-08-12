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

export default function OurFacilities() {
  const items = [
    "Hostel",
    "Laboratory",
    "Hospital Service",
    "Cafeteria",
    "Training",
    "Medical Education Unit",
    "Departments",
    "Publications",
    "Seminar",
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white">
      {/* =====================================================
          SECTION HEADER
      ====================================================== */}
      <div className="flex w-full flex-col items-center gap-[10px] px-5 py-10 md:px-10 lg:py-[50px]">
        {/* Eyebrow */}
        <div className="flex h-[45.67px] w-fit items-end">
          {/* Knowledge Icon */}
          <div className="flex h-[45.03px] w-[32.5px] shrink-0 items-center">
            <img
              src="/knowledge.png"
              alt=""
              className="h-[23.36px] w-[32.5px] object-contain"
            />
          </div>

          {/* Knowledge Text */}
          <span
            className="flex h-[45.67px] items-center justify-center px-[10.83px] font-body text-[19.5px] font-medium leading-[23px]"
            style={{ color: GREEN }}
          >
            knowledge meets innovation
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-center text-[42px] font-bold leading-[1.2] tracking-[0.03em] text-black md:text-[60px] md:leading-[72px]">
          Our Facilities
        </h2>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="flex w-full justify-center bg-[#FAF6F6] px-5 pb-20 pt-10 md:px-10 lg:px-20">
        <div className="flex w-full max-w-[1432px] flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-0">
          {/* =================================================
              LEFT — FACILITIES MENU
          ================================================== */}
          <div className="flex w-full max-w-[600px] flex-col gap-5 lg:mr-[-70px] lg:shrink-0">
            {items.map((item, i) => (
              <button
                key={item}
                type="button"
                onClick={() => setActive(i)}
                className="flex h-[65px] w-full items-center justify-between rounded-[5px] bg-white p-[10px] transition-all"
                style={{
                  color: i === active ? GREEN : "#000000",
                  boxShadow:
                    i === active ? "0 0 0 1px rgba(1,136,55,0.05)" : "none",
                }}
              >
                {/* Facility Name */}
                <span
                  className="flex items-center px-[10px] font-display text-[18.7px] font-bold leading-[22px]"
                  style={{
                    color: i === active ? GREEN : "#000000",
                  }}
                >
                  {item}
                </span>

                {/* Arrow Box */}
                <span
                  className="flex h-[36.4px] w-[36.4px] shrink-0 items-center justify-center rounded-[2px]"
                  style={{
                    backgroundColor:
                      i === active
                        ? "rgba(1,136,55,0.5)"
                        : "rgba(1,136,55,0.1)",
                  }}
                >
                  <ArrowRight
                    className="h-[25px] w-[25px]"
                    style={{ color: YELLOW }}
                    strokeWidth={2}
                  />
                </span>
              </button>
            ))}
          </div>

          {/* =================================================
              RIGHT — FACILITY CARD
          ================================================== */}
          <div className="flex w-full max-w-[832px] flex-col overflow-hidden bg-white lg:ml-0 lg:h-[741px] lg:flex-row">
            {/* Facility Image */}
            <div className="relative h-[400px] w-full shrink-0 overflow-hidden lg:h-full lg:w-[404px]">
              <img
                src="/hostel.jpg"
                alt="UAMC Hostel building"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Facility Details */}
            <div className="flex w-full flex-col justify-center px-6 py-12 lg:h-full lg:w-[418px] lg:px-[10px]">
              <div className="flex flex-col gap-[38px] px-2 lg:px-[7.7px]">
                {/* Title */}
                <h3
                  className="font-display text-[32px] font-bold leading-[46px] lg:text-[38.4px]"
                  style={{ color: GREEN }}
                >
                  Hostel Facilities
                </h3>

                {/* Description */}
                <div className="flex flex-col gap-[8px]">
                  <p className="font-display text-[19px] font-medium leading-[23px] text-[#4A4A4A]">
                    Ladies hostel:
                  </p>

                  <p className="font-body text-[19px] font-normal leading-[23px] text-[#4A4A4A]">
                    Hostel accommodations for female students are available with
                    limited number of seats.
                  </p>
                </div>

                {/* View Details */}
                <a
                  href="#"
                  className="flex w-fit items-center gap-5 border-b border-[#0094D3] pb-[2px] font-body text-[11px] font-semibold leading-[13px] text-[#0094D3]"
                >
                  <span>View Details</span>

                  <ArrowRight className="h-[11px] w-[11px]" strokeWidth={1.5} />
                </a>
              </div>

              {/* View Program Button */}
              <button
                type="button"
                className="mt-[50px] flex h-[55px] w-[230px] items-center justify-center gap-2 px-[30px] font-body text-[16px] font-medium leading-[25px] text-white"
                style={{ backgroundColor: GREEN }}
              >
                <span>View Our Program</span>

                <ArrowRight className="h-[14px] w-[14px]" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
