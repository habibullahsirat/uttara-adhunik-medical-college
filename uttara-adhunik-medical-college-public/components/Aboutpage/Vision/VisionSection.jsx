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

export default function VisionSection() {
  return (
    <section className="w-full bg-[#E6F3EB]">
      {/* Main Vision Section */}
      <div
        className="
          w-full
          max-w-[1600px]
          mx-auto
          px-[80px]
          py-[100px]
          flex
          flex-col
          items-start
          gap-[30px]
        "
      >
        {/* Heading + Description */}
        <div
          className="
            w-full
            max-w-[1440px]
            min-h-[180px]
            mx-auto
            px-[50px]
            py-[30px]
            flex
            flex-row
            items-center
            gap-[300px]
          "
        >
          {/* Title */}
          <h2
            className="
              w-[222px]
              min-w-[222px]
              h-[120px]
              flex
              items-center
              text-black
              font-bold
              text-[50px]
              leading-[60px]
              tracking-[0.01em]
            "
            style={{
              fontFamily: "Bitter, serif",
            }}
          >
            Vision of UAMC
          </h2>

          {/* Description */}
          <div
            className="
              flex-1
              max-w-[818px]
              min-h-[86px]
              flex
              flex-col
              items-start
            "
          >
            <div
              className="
                w-full
                min-h-[86px]
                px-0
                py-[10px]
                flex
                items-center
                justify-center
              "
            >
              <p
                className="
                  w-full
                  text-[#444444]
                  font-normal
                  text-[18px]
                  leading-[22px]
                  text-justify
                "
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                To be a leading center of excellence in medical education,
                healthcare, and research, producing skilled, compassionate, and
                ethical medical professionals who contribute to national and
                global healthcare advancements.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="
            w-full
            max-w-[1440px]
            h-[423px]
            mx-auto
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/unnamed.jpg')",
          }}
        />
      </div>
    </section>
  );
}
