"use client";

import React, { useState } from "react";
import { CalendarDays, Clock3 } from "lucide-react";
import {
  MapPin,
  Mail,
  Phone,
  Search,
  ChevronDown,
  AlignJustify,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Star,
  Menu,
  // Facebook,
  // Youtube,
  // Linkedin,
  // Instagram,
  X,
} from "lucide-react";

export default function AlumniEvents() {
  const events = [
    {
      num: "01",
      title: "Bridging Cultures: Global Perspectives in Medicine",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
    {
      num: "02",
      title: "Literary Voices: Celebrating Diverse Narratives",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
    {
      num: "03",
      title: "Cultural Exchange: Building Global Connections",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
  ];

  return (
    <section className="w-full bg-[#E6F3EB] px-6 py-20 md:px-20 md:py-[100px]">
      {/* Header */}
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <h2 className="font-display text-[43px] font-bold leading-[48px] text-[#018837]">
          Alumni Event
        </h2>

        <a
          href="#"
          className="flex items-center gap-1 font-body text-base font-medium text-[#018837]"
        >
          View All
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </a>
      </div>

      {/* Content */}
      <div className="mx-auto mt-[50px] flex w-full max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-[90px]">
        {/* Events */}
        <div className="flex w-full flex-col gap-0 lg:w-[722px]">
          {events.map((event) => (
            <div
              key={event.num}
              className="flex min-h-[190px] w-full items-center bg-[#F6F6F6] px-[18px]"
            >
              {/* Number */}
              <div
                className="
                  flex h-[108px] w-[108px]
                  shrink-0 items-center justify-center
                  border border-[#018837]
                  font-display text-[90px]
                  font-normal leading-[108px]
                  text-black
                "
              >
                {event.num}
              </div>

              {/* Event information */}
              <div className="ml-[30px] flex min-w-0 flex-1 flex-col justify-center gap-[9px]">
                <p className="font-body text-[19px] font-normal leading-[31px] text-[#018837]">
                  {event.title}
                </p>

                <div className="flex flex-wrap items-center gap-[18px] font-body text-[14px] leading-[26px] text-[#444444]">
                  <span className="flex items-center gap-[9px]">
                    <CalendarDays className="h-[15px] w-[15px]" />
                    {event.date}
                  </span>

                  <span className="flex items-center gap-[9px]">
                    <Clock3 className="h-[17px] w-[17px]" />
                    {event.time}
                  </span>

                  <span className="flex items-center gap-[9px]">
                    <MapPin className="h-[15px] w-[15px]" />
                    {event.place}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="w-full lg:w-[627px] lg:shrink-0">
          <img
            src="/alumni.png"
            alt="Alumni gathered on campus lawn"
            className="h-[607px] w-full"
          />
        </div>
      </div>
    </section>
  );
}
