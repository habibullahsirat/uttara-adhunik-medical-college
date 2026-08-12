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

import { ArrowUpRight } from "lucide-react";

export default function CampusLife() {
  const GREEN = "#018837";

  const campusItems = [
    {
      title: "Student Life",
      image: "/popular.jpg",
    },
    {
      title: "Arts & Culture",
      image: "/art.png",
    },
    {
      title: "Recreation & Wellness",
      image: "/recreation.png",
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: GREEN }}
    >
      {/* Main container */}
      <div className="relative mx-auto flex min-h-[777px] w-full max-w-[1440px] flex-col px-6 py-16 md:px-10 lg:px-0">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="relative mx-auto flex w-full max-w-[645px] flex-col items-center">
          {/* Description + Campus Life heading */}
          <div className="flex w-full flex-col items-center">
            {/* Description */}
            <p className="absolute left-0 top-[120px] w-[304px] font-body text-[16px] font-normal leading-[29px] text-white">
              Building a vibrant community of creative and accomplished people
              from around the world
            </p>

            {/* Campus Life Image */}
            <div className="relative z-10 ml-auto mr-[155px] h-[192px] w-[273px] overflow-hidden">
              <img
                src="/campus.png"
                alt="Campus Life"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Yellow decorative mark */}
            <div className="absolute right-[116px] top-[-20px] z-20 h-[50px] w-[50px]">
              <img
                src="/yellow.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            CAMPUS LIFE CARDS
        ====================================================== */}
        <div className="mx-auto mt-[90px] flex w-full max-w-[1285px] flex-col gap-10 md:flex-row md:justify-center md:gap-[36px]">
          {campusItems.map((item) => (
            <div
              key={item.title}
              className="flex w-full flex-col gap-[34px] md:w-[397px]"
            >
              {/* Image */}
              <div className="h-[305px] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Title + Arrow */}
              <div className="flex items-center gap-[22.93px]">
                <span className="font-display text-[22.85px] font-normal leading-[34px] text-white">
                  {item.title}
                </span>

                <ArrowRight
                  className="h-[26px] w-[26px] rotate-[-30deg] text-white"
                  strokeWidth={1.8}
                />
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            RIGHT SIDE DECORATIVE ICON
            ONLY decorative icon remaining
        ====================================================== */}
        <div className="absolute right-[60px] top-[175px] hidden h-[60px] w-[60px] lg:block">
          <img
            src="/degree.png"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
