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

export default function Testimonials() {
  const reviews = [
    {
      name: "Emma Elizabeth",
      role: "Assistant Teacher",
      image: "/student1.png",
    },
    {
      name: "Zent Ekizie",
      role: "Assistant Teacher",
      image: "/student2.png",
    },
    {
      name: "Samantha Willow",
      role: "Teacher",
      image: "/student3.png",
    },
  ];

  return (
    <section className="w-full bg-[#F8F8F8] px-6 py-16 md:px-20 md:py-20">
      {/* =========================================
          HEADING
      ========================================== */}
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          {/* Green decorative mark */}
          <span
            className="mr-3 block h-[23px] w-[32.5px]"
            style={{ backgroundColor: GREEN }}
          />

          <span
            className="font-body text-[19.5px] font-medium leading-[23px]"
            style={{ color: GREEN }}
          >
            knowledge meets innovation
          </span>
        </div>

        <h2
          className="
            mt-4
            text-center
            font-display
            text-[42px]
            font-bold
            leading-[48px]
            md:text-[50px]
          "
          style={{ color: GREEN }}
        >
          My Students Feedback
        </h2>

        <p className="mt-3 w-full text-center font-body text-base leading-[29px] text-[#737477]">
          You'll find something to spark your curiosity and enhance
        </p>
      </div>

      {/* =========================================
          TESTIMONIALS
      ========================================== */}
      <div className="mx-auto mt-[50px] w-full max-w-[1290px] overflow-hidden">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-0">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="
                relative
                flex
                h-[317px]
                flex-col
                bg-white
                px-10
                pt-12
              "
            >
              {/* =================================
                  STARS
              ================================== */}
              <div className="flex gap-[5px]">
                {Array.from({
                  length: index === 1 ? 5 : 4,
                }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-[16px] w-[16px] fill-current"
                    style={{ color: YELLOW }}
                  />
                ))}
              </div>

              {/* =================================
                  REVIEW
              ================================== */}
              <p className="mt-[21px] max-w-[340px] font-body text-[18px] leading-[28px] text-[#444444]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>

              {/* =================================
                  AUTHOR
              ================================== */}
              <div className="absolute bottom-[39px] left-10 flex items-center">
                {/* Student Image */}
                <div className="h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Name + Role */}
                <div className="ml-[10px]">
                  <p
                    className="font-display text-[17.8px] font-bold leading-5"
                    style={{ color: GREEN }}
                  >
                    {review.name}
                  </p>

                  <p className="mt-[6px] font-body text-[15px] leading-[27px] text-[#444444]">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* =================================
                  QUOTE
              ================================== */}
              <div
                className="
                  absolute
                  bottom-[38px]
                  right-[40px]
                  font-display
                  text-[70px]
                  leading-none
                "
                style={{ color: GREEN }}
              >
                ”
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            SLIDER DOTS
        ========================================== */}
        <div className="mt-[48px] flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#FECD2F]" />
          <span className="h-2 w-2 rounded-full bg-[#444444]/20" />
        </div>
      </div>
    </section>
  );
}
