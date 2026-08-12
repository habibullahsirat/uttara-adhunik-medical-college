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
const YELLOW = "#FFBF2F";

export default function PrincipalMessage() {
  return (
    <section
      className="
        flex
        w-full
        flex-col
        items-center
        gap-10
        px-6
        py-16

        md:px-20
        md:py-20
      "
      style={{ backgroundColor: "rgba(1,136,55,0.1)" }}
    >
      {/* =====================================================
          SECTION HEADING
      ====================================================== */}
      <div
        className="
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-[10px]
        "
      >
        {/* Eyebrow */}
        <div className="flex h-[45.67px] w-[321.17px] items-end">
          {/* Figma Frame 48 / Vector */}
          <div
            className="
              flex
              h-[45.03px]
              w-[32.5px]
              shrink-0
              items-center
            "
          >
            <img
              src="/knowledge.png"
              alt=""
              className="h-[23.36px] w-[32.5px] object-contain"
            />
          </div>

          {/* Figma Frame 49 */}
          <div
            className="
              flex
              h-[45.67px]
              w-[288.67px]
              items-center
              justify-center
              gap-[10.83px]
              px-[10.83px]
            "
          >
            <span
              className="
                font-body
                text-[19.5px]
                font-medium
                leading-[23px]
              "
              style={{ color: GREEN }}
            >
              knowledge meets innovation
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h2
          className="
            m-0
            w-full
            text-center
            font-display
            text-[42px]
            font-bold
            leading-[1.2]
            tracking-[0.03em]
            text-black

            md:text-[60px]
            md:leading-[72px]
          "
        >
          Message from the <span style={{ color: YELLOW }}>Principal</span>
        </h2>
      </div>

      {/* =====================================================
          MAIN CONTENT
          Figma: 1440 × 573
      ====================================================== */}
      <div
        className="
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-10

          lg:flex-row
          lg:items-center
          lg:gap-[50px]
        "
      >
        {/* ===================================================
            LEFT CONTENT
            Figma: 695px
        ==================================================== */}
        <div
          className="
            flex
            w-full
            max-w-[695px]
            flex-col
            gap-[28px]

            lg:h-[541px]
            lg:w-[695px]
            lg:max-w-none
            lg:shrink-0
          "
        >
          {/* Principal Information */}
          <div
            className="
              flex
              flex-col
              gap-[20px]
            "
          >
            {/* -----------------------------------------------
                SIGNATURE
            ------------------------------------------------ */}
            <div className="flex h-[141px] w-[186px] items-start">
              <img
                src="/sig.png"
                alt="Principal's signature"
                className="
                  block
                  h-[141px]
                  w-[186px]
                  object-contain
                  object-left
                "
              />
            </div>

            {/* -----------------------------------------------
                NAME + POSITION
            ------------------------------------------------ */}
            <div className="flex flex-col">
              <p
                className="
                  m-0
                  font-display
                  text-[24px]
                  font-bold
                  leading-[29px]
                  tracking-[0.03em]
                  text-black
                "
              >
                Honorable
              </p>

              <p
                className="
                  m-0
                  font-display
                  text-[28px]
                  font-bold
                  leading-[38px]
                  tracking-[0.03em]

                  md:text-[32px]
                "
                style={{ color: GREEN }}
              >
                Prof. Dr. Mohammad Mohibur Rahman
              </p>

              <p
                className="
                  m-0
                  font-display
                  text-[48px]
                  font-bold
                  leading-[120%]
                  tracking-[0.03em]
                  text-[#444444]

                  md:text-[70px]
                "
              >
                Principal{" "}
                <span
                  className="
                    align-middle
                    text-[28px]

                    md:text-[32px]
                  "
                >
                  (In Charge)
                </span>
              </p>
            </div>
          </div>

          {/* =================================================
              MESSAGE
          ================================================== */}
          <div
            className="
              flex
              flex-col
              gap-[20px]
            "
          >
            <h4
              className="
                m-0
                font-body
                text-[20px]
                font-bold
                leading-[24px]
                text-[#444444]
              "
            >
              Ensuring Quality Healthcare &amp; Medical Education
            </h4>

            <p
              className="
                m-0
                font-body
                text-[15px]
                font-normal
                leading-[18px]
                text-[#444444]
                lg:text-justify
              "
            >
              Bangladesh faces significant challenges in delivering healthcare
              nationwide. To support government efforts, Uttara Adhunik Medical
              College Hospital (UAMCH) has been providing comprehensive health
              services since 2003, evolving into a tertiary-level
              multidisciplinary hospital.
            </p>

            {/* Read More */}
            <button
              type="button"
              className="
                flex
                h-[55px]
                w-[230px]
                items-center
                justify-center
                gap-[10px]
                px-[30px]
                py-[15px]
                font-body
                text-[16px]
                font-medium
                leading-[25px]
                text-white
                transition-opacity
                hover:opacity-90
              "
              style={{ backgroundColor: GREEN }}
            >
              <span>Read More</span>

              <ArrowRight className="h-[25px] w-[14.02px]" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ===================================================
            PRINCIPAL IMAGE
            Figma: 695 × 573
        ==================================================== */}
        <div
          className="
            h-[420px]
            w-full
            max-w-[695px]
            overflow-hidden

            lg:h-[573px]
            lg:w-[695px]
            lg:max-w-none
            lg:shrink-0
          "
        >
          <img
            src="/principal.jpg"
            alt="Prof. Dr. Mohammad Mohibur Rahman"
            className="
              block
              h-full
              w-full
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}
