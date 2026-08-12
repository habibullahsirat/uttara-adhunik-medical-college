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

// import { ArrowRight } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

export default function FindDepartment() {
  return (
    <section
      id="departments"
      className="
        flex
        w-full
        items-center
        px-6
        py-[70px]
        md:px-20
        md:py-[100px]
      "
      // style={{
      //   backgroundImage: `
      //     linear-gradient(
      //       180deg,
      //       #ffffff 0%,
      //       rgba(255, 255, 255, 0) 100%
      //     ),
      //     url("/statistic.jpg")
      //   `,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-12
          lg:flex-row
          lg:gap-[50px]
        "
      >
        {/* =========================================
            LEFT CONTENT
        ========================================== */}
        <div
          className="
            flex
            w-full
            max-w-[769px]
            flex-col
            justify-between
            gap-[43px]
            lg:min-h-[456.85px]
          "
        >
          {/* Heading + description */}
          <div className="flex w-full flex-col">
            {/* Heading */}
            <div className="flex h-[68px] items-center py-[10px]">
              <h2
                className="
                  font-display
                  text-[32px]
                  font-bold
                  leading-[48px]
                  md:text-[40px]
                "
                style={{ color: GREEN }}
              >
                Find Your Department
              </h2>
            </div>

            {/* Description */}
            <div className="flex min-h-[74px] items-center py-[10px]">
              <p
                className="
                  font-body
                  text-[14px]
                  font-normal
                  leading-[18px]
                  text-[#737477]
                  md:text-[15px]
                "
              >
                Use the search bar below to explore our comprehensive MBBS
                program and discover the perfect path to kickstart your medical
                career. Join UAMC and embark on a journey of academic
                excellence, hands-on clinical training, and cutting-edge medical
                research!
              </p>
            </div>
          </div>

          {/* Search + popular searches */}
          <div className="flex w-full flex-col gap-[10px]">
            {/* Search box */}
            <div
              className="
                flex
                h-[68px]
                w-full
                items-center
                gap-[10px]
                px-5
                py-[15px]
              "
              style={{ backgroundColor: "#E8E8F4" }}
            >
              <Search
                className="h-6 w-6 shrink-0"
                style={{ color: GREEN }}
                strokeWidth={2}
              />

              <div className="flex h-[38px] items-center px-[10px]">
                <input
                  type="text"
                  placeholder='Find your program like "Department of Physiology"'
                  className="
                    w-full
                    min-w-0
                    bg-transparent
                    font-body
                    text-[15px]
                    font-medium
                    leading-[18px]
                    text-[#9191A6]
                    outline-none
                    placeholder:text-[#9191A6]
                  "
                />
              </div>
            </div>

            {/* Popular search */}
            <div className="flex min-h-[38px] items-center py-[10px]">
              <p
                className="
                  font-body
                  text-[14px]
                  font-bold
                  leading-[18px]
                  md:text-[15px]
                "
                style={{ color: "rgba(1, 136, 55, 0.7)" }}
              >
                Popular Search: Department of Microbiology&nbsp;&nbsp;
                Department of Community Medicine&nbsp;&nbsp; Department of
                Pathology
              </p>
            </div>
          </div>

          {/* =========================================
              FEATURED DEPARTMENT
          ========================================== */}
          <div
            className="
              flex
              min-h-[120px]
              w-full
              items-center
              justify-between
              gap-5
              border
              border-dashed
              p-5
            "
            style={{
              backgroundColor: "rgba(1, 136, 55, 0.1)",
              borderColor: GREEN,
            }}
          >
            {/* Department information */}
            <div className="flex items-center gap-[10px]">
              {/* Image */}
              <div className="h-[80px] w-[116px] shrink-0 overflow-hidden">
                <img
                  src="/popular.jpg"
                  alt="Department of Microbiology"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex h-[75px] w-full max-w-[248px] flex-col gap-[10px]">
                {/* Badge */}
                <span
                  className="
                    flex
                    h-[23px]
                    w-fit
                    items-center
                    justify-center
                    px-[10px]
                    py-[5px]
                    font-body
                    text-[11px]
                    font-semibold
                    leading-[13px]
                    text-black
                  "
                  style={{ backgroundColor: YELLOW }}
                >
                  Popular Program
                </span>

                {/* Department name */}
                <div className="flex h-[42px] items-center py-[10px]">
                  <p
                    className="
                      font-body
                      text-[16px]
                      font-bold
                      leading-[22px]
                      md:text-[18px]
                    "
                    style={{ color: GREEN }}
                  >
                    Department of Microbiology
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow button */}
            <button
              type="button"
              aria-label="View Department of Microbiology"
              className="
                flex
                h-[80px]
                w-[57px]
                shrink-0
                items-center
                justify-center
                rounded-[2px]
              "
              style={{ backgroundColor: GREEN }}
            >
              <ArrowRight
                className="h-6 w-6"
                style={{ color: YELLOW }}
                strokeWidth={2}
              />
            </button>
          </div>
        </div>

        {/* =========================================
            RIGHT IMAGE COLLAGE
        ========================================== */}
        <div
          className="
            relative
            h-[400px]
            w-full
            max-w-[621px]
            lg:h-[456.85px]
          "
        >
          {/* Small image */}
          <div
            className="
              absolute
              left-0
              top-0
              h-[205px]
              w-[45%]
              overflow-hidden
              lg:h-[234.44px]
              lg:w-[252px]
            "
          >
            <img
              src="/find1.jpg"
              alt="Doctor consulting patient"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Large image */}
          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-[56%]
              overflow-hidden
              lg:h-[456.85px]
              lg:w-[348px]
            "
          >
            <img
              src="/find2.jpg"
              alt="Nurse checking X-ray results"
              className="h-full w-full object-cover"
            />
          </div>

          {/* =========================================
              28+ DEPARTMENT OVERLAY
          ========================================== */}
          <div
            className="
              absolute
              bottom-0
              left-0
              flex
              min-h-[100px]
              w-[85%]
              items-center
              gap-[18px]
              px-6
              py-4
              lg:h-[116.99px]
              lg:w-[337.69px]
              lg:px-[30px]
              lg:py-[15px]
            "
            style={{
              backgroundColor: "rgba(1, 136, 55, 0.5)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
            }}
          >
            {/* Round image */}
            <div className="h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full lg:h-[86.78px] lg:w-[86.78px]">
              <img
                src="/171328095_10677961.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* Number + label */}
            <div className="flex min-w-0 flex-col">
              <span
                className="
                  font-display
                  text-[32px]
                  font-bold
                  leading-[43px]
                  text-white
                  lg:text-[36.157px]
                "
              >
                28+
              </span>

              <span
                className="
                  font-body
                  text-[13px]
                  font-normal
                  leading-[18px]
                  text-white
                  lg:text-[14.4628px]
                "
              >
                Department Available For Student
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
