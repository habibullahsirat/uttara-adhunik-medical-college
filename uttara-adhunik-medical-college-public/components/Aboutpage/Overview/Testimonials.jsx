"use client";

import { Star } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

export default function Testimonials() {
  const reviews = [
    {
      name: "Emma Elizabeth",
      role: "Assistant Teacher",
      image: "/student1.png",
      rating: 4,
    },
    {
      name: "Zent Ekizie",
      role: "Assistant Teacher",
      image: "/student2.png",
      rating: 5,
    },
    {
      name: "Samantha Willow",
      role: "Teacher",
      image: "/student3.png",
      rating: 4,
    },
  ];

  return (
    <section
      className="
        flex
        w-full
        flex-col
        items-center
        bg-[#F6F6F6]
        px-5
        py-[70px]
        md:px-10
        lg:px-20
        lg:py-[100px]
      "
    >
      {/* =========================================
          HEADING
      ========================================== */}
      <div
        className="
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-5
        "
      >
        <h2
          className="
            m-0
            flex
            h-[48px]
            items-center
            justify-center
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

        <p
          className="
            m-0
            w-full
            text-center
            font-body
            text-[16px]
            font-normal
            leading-[29px]
            text-[#737477]
          "
        >
          You'll find something to spark your curiosity and enhance
        </p>
      </div>

      {/* =========================================
          TESTIMONIALS
      ========================================== */}
      <div
        className="
          mx-auto
          mt-[50px]
          w-full
          max-w-[1290px]
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-5
            md:grid-cols-3
            md:gap-0
          "
        >
          {reviews.map((review) => (
            <div
              key={review.name}
              className="
                relative
                flex
                h-[316.8px]
                flex-col
                bg-white
                px-10
                pt-12
              "
            >
              {/* =================================
                  STARS
              ================================== */}
              <div className="flex gap-[4.6px]">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-[16.13px] w-[16.13px]"
                    fill={YELLOW}
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* =================================
                  REVIEW
              ================================== */}
              <p
                className="
                  m-0
                  mt-[21.29px]
                  max-w-[339.42px]
                  font-body
                  text-[18px]
                  font-normal
                  leading-[28px]
                  text-[#444444]
                "
              >
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>

              {/* =================================
                  AUTHOR
              ================================== */}
              <div
                className="
                  absolute
                  bottom-[39px]
                  left-10
                  flex
                  items-center
                "
              >
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
                    className="
                      m-0
                      font-display
                      text-[17.8125px]
                      font-bold
                      leading-[20px]
                    "
                    style={{ color: GREEN }}
                  >
                    {review.name}
                  </p>

                  <p
                    className="
                      m-0
                      mt-[6px]
                      font-body
                      text-[15px]
                      font-normal
                      leading-[27px]
                      text-[#444444]
                    "
                  >
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
                  font-bold
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
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: YELLOW }}
          />

          <span className="h-2 w-2 rounded-full bg-[#444444] opacity-20" />
        </div>
      </div>
    </section>
  );
}
