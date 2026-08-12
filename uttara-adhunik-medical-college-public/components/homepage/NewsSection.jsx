"use client";
const GREEN = "#018837";
const YELLOW = "#FECD2F";
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

export default function NewsSection() {
  const posts = [
    {
      tag: "Education",
      date: "August 6, 2024",
      title: "10 Effective Study Tips for College Success",
      image: "/news1.png",
    },
    {
      tag: "University",
      date: "July 4, 2024",
      title: "After Decades Of Improvement, Cardiovascular Care Advances",
      image: "/news2.png",
    },
  ];

  return (
    <section className="w-full px-6 py-16 md:px-20 md:py-20">
      {/* ================================
          SECTION HEADING
      ================================= */}
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="mb-4 flex items-center">
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
          className="font-display text-3xl font-bold md:text-5xl"
          style={{ color: GREEN }}
        >
          Read Our Latest News
        </h2>

        <p className="mt-4 max-w-[700px] font-body text-[16px] leading-[28px] text-[#737477]">
          You'll find something to spark your curiosity and enhance your
          knowledge.
        </p>
      </div>

      {/* ================================
          NEWS CARDS
      ================================= */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.title}
            className="
              flex
              flex-col
              overflow-hidden
              border
              border-dashed
              bg-white
              sm:flex-row
            "
            style={{ borderColor: GREEN }}
          >
            {/* ==========================
                NEWS IMAGE
            =========================== */}
            <div className="h-[240px] w-full shrink-0 overflow-hidden sm:h-[220px] sm:w-[240px]">
              <img
                src={post.image}
                alt={post.title}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* ==========================
                NEWS CONTENT
            =========================== */}
            <div
              className="
                flex
                flex-1
                flex-col
                justify-center
                gap-4
                p-6
              "
            >
              {/* Tag */}
              <span
                className="
                  w-fit
                  px-3
                  py-1
                  font-body
                  text-xs
                  font-medium
                  text-[#110C2D]
                "
                style={{ backgroundColor: YELLOW }}
              >
                {post.tag}
              </span>

              {/* Title */}
              <h3
                className="
                  m-0
                  font-display
                  text-[20px]
                  font-semibold
                  leading-[28px]
                  text-[#110C2D]
                "
              >
                {post.title}
              </h3>

              {/* Date */}
              <div className="flex items-center gap-3">
                <span className="font-body text-sm text-[#737477]">
                  {post.date}
                </span>
              </div>

              {/* Read More */}
              <button
                type="button"
                className="
                  flex
                  w-fit
                  items-center
                  gap-2
                  font-body
                  text-[15px]
                  font-medium
                  transition-opacity
                  hover:opacity-75
                "
                style={{ color: GREEN }}
              >
                Read More
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
