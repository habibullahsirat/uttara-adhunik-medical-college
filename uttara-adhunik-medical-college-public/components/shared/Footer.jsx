"use client";

import { ArrowRight } from "lucide-react";

export default function Footer() {
  const campusLinks = [
    "Our Campus",
    "Careers",
    "News",
    "Support",
    "Accessible mode",
  ];

  const pageLinks = ["Home", "About", "Facilities", "Admission", "Contact"];

  const posts = [
    {
      title: "Those inequalities that Matter",
      date: "August 6, 2024",
      image: "/post1.png",
    },
    {
      title: "After Decades Of Improvement, Cardiovascular",
      date: "July 4, 2024",
      image: "/post2.png",
    },
  ];

  return (
    <footer className="w-full bg-black text-white">
      {/* ================= NEWSLETTER ================= */}
      <div className="border-b border-[#242424]">
        <div
          className="
            mx-auto flex w-full max-w-[1130px]
            flex-col gap-8
            px-5 py-[50px]
            md:flex-row md:items-center md:justify-between
            md:gap-10
          "
        >
          <h4
            className="
              font-body text-[30.94px]
              font-normal leading-[36px]
              text-white
            "
          >
            Subscribe To Newsletter
          </h4>

          <form
            className="
              flex w-full max-w-[494px]
              flex-col gap-[10px]
              sm:flex-row
            "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter Your mail"
              className="
                box-border h-[53px] w-full
                border border-[#018837]
                bg-transparent
                px-[21px] py-[18px]
                font-body text-[14px]
                leading-[17px]
                text-white
                outline-none
                placeholder:text-white
              "
            />

            <button
              type="submit"
              className="
                flex h-[53px]
                w-full shrink-0
                items-center justify-center
                gap-[3px]
                bg-white
                px-[38px]
                text-[16px]
                font-medium
                leading-[18px]
                text-[#110C2D]
                transition-colors
                hover:bg-[#FECD2F]
                sm:w-[208px]
              "
            >
              <span>Submit Button</span>

              <span className="text-[18px] leading-none">→</span>
            </button>
          </form>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto w-full max-w-[1290px] px-5">
        <div
          className="
            grid
            grid-cols-1
            gap-12
            py-[65px]
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-0
          "
        >
          {/* ================= BRAND ================= */}
          <div className="pr-8">
            <div className="mb-[25px] flex items-center gap-[8px]">
              {/* Replace this with your actual logo */}
              <div
                className="
                  flex h-[66px] w-[66px]
                  shrink-0 items-center justify-center
                  overflow-hidden rounded-full
                "
              >
                <img
                  src="/logo2.png"
                  alt="Uttara Adhunik Medical College"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3
                className="
                  max-w-[175px]
                  font-display
                  text-[20.7px]
                  font-bold
                  leading-[25px]
                  text-white
                "
              >
                Uttara Adhunik Medical College
              </h3>
            </div>

            <p
              className="
                max-w-[333px]
                font-body
                text-[16px]
                font-normal
                leading-[29px]
                text-[#737477]
              "
            >
              We are passionate education dedicated to providing high-quality
              resources for learners of all backgrounds.
            </p>
          </div>

          {/* ================= OUR CAMPUS ================= */}
          <div>
            <h4
              className="
                mb-[46px]
                inline-block
                font-body
                text-[20px]
                font-medium
                leading-[26px]
                text-white
                underline
                underline-offset-4
              "
            >
              Our Campus
            </h4>

            <ul className="flex flex-col">
              {campusLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="
                      block
                      py-[8px]
                      font-body
                      text-[16px]
                      font-normal
                      leading-[25px]
                      text-[#737477]
                      transition-colors
                      hover:text-white
                    "
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= OUR PAGES ================= */}
          <div>
            <h4
              className="
                mb-[46px]
                inline-block
                font-body
                text-[20px]
                font-medium
                leading-[26px]
                text-white
                underline
                underline-offset-4
              "
            >
              Our Pages
            </h4>

            <ul className="flex flex-col">
              {pageLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="
                      block
                      py-[8px]
                      font-body
                      text-[16px]
                      font-normal
                      leading-[25px]
                      text-[#737477]
                      transition-colors
                      hover:text-white
                    "
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= RECENT POSTS ================= */}
          <div>
            <h4
              className="
                mb-[46px]
                inline-block
                font-body
                text-[20px]
                font-medium
                leading-[26px]
                text-white
                underline
                underline-offset-4
              "
            >
              Recent Posts
            </h4>

            <div className="flex flex-col gap-[28px]">
              {posts.map((post) => (
                <a
                  href="#"
                  key={post.title}
                  className="
                    group
                    flex
                    items-start
                    gap-[20px]
                  "
                >
                  {/* Figma uses 190x80 post images */}
                  <div
                    className="
                      h-[80px]
                      w-[80px]
                      shrink-0
                      overflow-hidden
                      bg-[#242424]
                    "
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="pt-[1px]">
                    <div className="mb-[10px] flex items-center gap-[8px]">
                      <span className="text-[#737477]">›</span>

                      <p
                        className="
                          font-body
                          text-[14px]
                          font-normal
                          leading-[25px]
                          text-[#737477]
                        "
                      >
                        {post.date}
                      </p>
                    </div>

                    <p
                      className="
                        max-w-[236px]
                        font-body
                        text-[15.75px]
                        font-normal
                        leading-[18px]
                        capitalize
                        text-white
                      "
                    >
                      {post.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="border-t border-[#242424]">
        <div
          className="
            mx-auto
            flex
            min-h-[64px]
            w-full
            max-w-[1290px]
            items-center
            px-5
          "
        >
          <p
            className="
              font-body
              text-[16px]
              font-normal
              leading-[29px]
              text-[#737477]
            "
          >
            Copyright @ 2024. All Rights Reserved by{" "}
            <span className="text-white">Umaio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
