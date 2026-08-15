// Version 2
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

async function getSiteLogo() {
  const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API;

  const res = await fetch(`${baseUrl}/api/site-setting`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return "/logo2.png";
  }

  const data = await res.json();

  return data?.[0]?.image || "/logo2.png";
}

async function getAboutData() {
  const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API;

  const res = await fetch(`${baseUrl}/api/homepage/about`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch about data");
  }

  const data = await res.json();

  return data?.[0] ?? null;
}

export default async function AboutSection() {
  const about = await getAboutData();

  if (!about) return null;

  const description = about.description || "";
  const logo = await getSiteLogo();

  const establishedText = "Established in 2003.";

  let firstParagraph = description;
  let secondParagraph = "";

  const establishedIndex = description.indexOf(establishedText);

  if (establishedIndex !== -1) {
    const firstEnd = establishedIndex + establishedText.length;

    firstParagraph = description.slice(0, firstEnd).trim();
    secondParagraph = description.slice(firstEnd).trim();
  }

  const aboutBoxes = [
    {
      title: "College Mission",
      sub: "Statement",
      icon: "/about3.png",
      href: "/about/aim",
    },
    {
      title: "College Vision",
      sub: "Achievement",
      icon: "/about4.png",
      href: "/about/vision",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          gap-12
          px-4
          sm:px-6
          md:px-8
          lg:flex-row
          lg:items-center
          lg:gap-10
          xl:px-10
          2xl:px-0
        "
      >
        {/* =====================================================
            LEFT — IMAGE COMPOSITION
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            h-[420px]
            w-full
            max-w-[520px]

            sm:h-[500px]
            md:h-[560px]
            md:max-w-[620px]

            lg:mx-0
            lg:h-[580px]
            lg:w-1/2
            lg:max-w-[700px]

            xl:h-[617px]
          "
        >
          {/* LEFT IMAGE */}

          <div
            className="
              absolute
              left-0
              top-[8%]
              h-[82%]
              w-[58%]
              overflow-hidden

              sm:top-[7%]
              sm:h-[84%]
              sm:w-[57%]

              md:w-[58%]

              lg:top-[7.25%]
              lg:h-[92.75%]
              lg:w-[51.46%]
            "
          >
            <Image
              src={about.image1}
              alt="Uttara Adhunik Medical College"
              fill
              priority
              sizes="
                (max-width: 640px) 55vw,
                (max-width: 1024px) 45vw,
                360px
              "
              className="
                block
                object-cover
                object-center
                animate-about-zoom
              "
            />
          </div>

          {/* RIGHT IMAGE */}

          <div
            className="
              absolute
              right-0
              top-0
              h-[82%]
              w-[48%]
              overflow-hidden
              shadow-[0_3.33px_3.33px_rgba(0,0,0,0.25)]

              sm:h-[84%]
              sm:w-[47%]

              md:w-[46%]

              lg:left-[56.78%]
              lg:right-auto
              lg:top-[3.63%]
              lg:h-[92.75%]
              lg:w-[43.22%]
            "
          >
            <Image
              src={about.image2}
              alt="Uttara Adhunik Medical College"
              fill
              sizes="
                (max-width: 640px) 45vw,
                (max-width: 1024px) 40vw,
                303px
              "
              className="
                block
                object-cover
                object-center
                animate-about-zoom
              "
            />
          </div>

          {/* COLLEGE LOGO */}

          <div
            className="
              absolute
              left-[28%]
              top-[25%]
              z-20
              flex
              h-[170px]
              w-[170px]
              items-center
              justify-center
              overflow-hidden
              rounded-full
              bg-white
              p-[3px]
              shadow-md

              xs:h-[190px]
              xs:w-[190px]

              sm:left-[27%]
              sm:top-[27%]
              sm:h-[220px]
              sm:w-[220px]

              md:left-[28%]
              md:h-[250px]
              md:w-[250px]

              lg:left-[31.5%]
              lg:top-[25.5%]
              lg:h-[300px]
              lg:w-[300px]
            "
          >
            <Image
              src={logo}
              alt="UAMC Logo"
              width={300}
              height={300}
              className="
                block
                h-full
                w-full
                rounded-full
                object-cover
              "
            />
          </div>
        </div>

        {/* =====================================================
            RIGHT — ABOUT CONTENT
        ====================================================== */}

        <div
          className="
            flex
            w-full
            flex-col
            gap-8

            lg:w-1/2
            lg:max-w-[700px]
            lg:gap-9
          "
        >
          {/* =================================================
              HEADING + DESCRIPTION
          ================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-6

              lg:max-w-[662px]
            "
          >
            {/* EYEBROW + HEADING */}

            <div className="flex flex-col gap-2">
              {/* KNOWLEDGE MEETS INNOVATION */}

              <div
                className="
                  flex
                  min-h-[40px]
                  w-fit
                  max-w-full
                  items-center
                "
              >
                <div
                  className="
                    flex
                    h-[40px]
                    w-[30px]
                    shrink-0
                    items-center
                    justify-start
                  "
                >
                  <Image
                    src="/knowledge.png"
                    alt=""
                    width={33}
                    height={24}
                    className="
                      block
                      h-auto
                      max-h-[24px]
                      w-[30px]
                      object-contain
                      object-left
                    "
                  />
                </div>

                <span
                  className="
                    flex
                    min-h-[40px]
                    items-center
                    px-2.5
                    font-body
                    text-sm
                    font-medium
                    leading-6

                    sm:text-base
                    md:text-[17px]
                    lg:text-[19.5px]
                  "
                  style={{ color: GREEN }}
                >
                  {about.subtitle}
                </span>
              </div>

              {/* MAIN HEADING */}

              <div className="w-full">
                <h2
                  className="
                    m-0
                    font-display
                    text-[38px]
                    font-light
                    leading-[1.15]
                    text-[#262626]

                    sm:text-[46px]
                    md:text-[54px]
                    lg:text-[60px]
                    xl:text-[65px]
                  "
                >
                  About{" "}
                  <span className="font-bold" style={{ color: GREEN }}>
                    UAMC
                  </span>
                </h2>
              </div>
            </div>

            {/* DESCRIPTION */}

            <div
              className="
                flex
                w-full
                flex-col
                gap-5

                sm:gap-6
                lg:gap-[27px]
              "
            >
              {/* FIRST PARAGRAPH */}

              <p
                className="
                  m-0
                  w-full
                  font-body
                  text-[15px]
                  font-bold
                  leading-7
                  text-[#737477]

                  sm:text-[16px]
                  sm:leading-[30px]

                  lg:text-[17.33px]
                  lg:leading-[31px]
                "
              >
                {firstParagraph}
              </p>

              {/* SECOND PARAGRAPH */}

              {secondParagraph && (
                <p
                  className="
                    m-0
                    w-full
                    font-body
                    text-[15px]
                    font-normal
                    leading-7
                    text-[#737477]

                    sm:text-[16px]
                    sm:leading-[30px]

                    lg:text-[17.33px]
                    lg:leading-[31px]
                  "
                >
                  {secondParagraph}
                </p>
              )}
            </div>
          </div>

          {/* =================================================
              MISSION + VISION
          ================================================== */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-4

              sm:grid-cols-2
              sm:gap-5

              lg:gap-[21.67px]
            "
          >
            {aboutBoxes.map((box) => (
              <a
                key={box.title}
                href={box.href}
                className="
                  group
                  relative
                  flex
                  min-h-[90px]
                  w-full
                  items-center
                  overflow-hidden
                  border
                  border-dashed
                  bg-white
                  transition-all
                  duration-300

                  sm:min-h-[95px]
                  lg:h-[97px]
                "
                style={{ borderColor: GREEN }}
              >
                {/* YELLOW HOVER BACKGROUND */}

                <span
                  className="
                    absolute
                    inset-0
                    z-0
                    origin-left
                    scale-x-0
                    transition-transform
                    duration-300
                    ease-out
                    group-hover:scale-x-100
                  "
                  style={{ backgroundColor: YELLOW }}
                />

                {/* ICON */}

                <div
                  className="
                    relative
                    z-10
                    ml-4
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center

                    sm:ml-5
                    sm:h-[52px]
                    sm:w-[52px]

                    lg:ml-[33px]
                    lg:h-[54px]
                    lg:w-[54px]
                  "
                >
                  <Image
                    src={box.icon}
                    alt=""
                    width={55}
                    height={55}
                    className="
                      block
                      h-full
                      w-full
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* TEXT */}

                <div
                  className="
                    relative
                    z-10
                    ml-4
                    flex
                    min-w-0
                    flex-col

                    sm:ml-5

                    lg:ml-[26px]
                  "
                >
                  <span
                    className="
                      font-display
                      text-[16px]
                      font-medium
                      leading-6
                      transition-colors
                      duration-300
                      group-hover:text-black

                      sm:text-[17px]
                      lg:text-[18px]
                    "
                    style={{ color: GREEN }}
                  >
                    {box.title}
                  </span>

                  <span
                    className="
                      font-display
                      text-[16px]
                      font-medium
                      leading-6
                      transition-colors
                      duration-300
                      group-hover:text-black

                      sm:text-[17px]
                      lg:text-[18px]
                    "
                    style={{ color: GREEN }}
                  >
                    {box.sub}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* =================================================
              VIEW OUR PROGRAM
          ================================================== */}

          <a
            href={about.cta?.href || "/facility/department"}
            className="
              flex
              min-h-[56px]
              w-fit
              max-w-full
              items-center
              justify-center
              gap-2.5
              px-6
              py-3.5
              font-body
              text-[15px]
              font-medium
              leading-6
              text-white
              transition-all
              duration-300
              hover:opacity-90

              sm:px-7
              sm:text-base

              lg:min-h-[60px]
              lg:px-[32px]
              lg:py-4
              lg:text-[17.33px]
            "
            style={{ backgroundColor: GREEN }}
          >
            <span>{about.cta?.text || "View Our Program"}</span>

            <ArrowRight
              className="
                h-5
                w-4

                sm:h-6
                sm:w-[15px]
              "
              strokeWidth={2}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
