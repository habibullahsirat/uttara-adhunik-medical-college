// "use client";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// export default function Banner() {
//   return (
//     <section
//       style={{
//         width: "100%",
//         height: "500px",

//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-end",
//         alignItems: "flex-start",

//         padding: "80px",
//         gap: "10px",

//         boxSizing: "border-box",

//         backgroundImage: `url("/bg.png")`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* =========================================
//           FRAME 1261155625
//           1440px × 327.29px
//       ========================================== */}
//       <div
//         style={{
//           width: "100%",
//           height: "327.29px",

//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "flex-end",

//           padding: "20px 50px",
//           gap: "20px",

//           boxSizing: "border-box",

//           background: "rgba(1, 136, 55, 0.3)",
//         }}
//       >
//         {/* =========================================
//             FRAME 1261155626
//             LEFT CONTENT
//         ========================================== */}
//         <div
//           style={{
//             flex: "1 1 0%",
//             width: "1090px",
//             height: "118.67px",

//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "flex-end",
//             alignItems: "flex-start",

//             padding: 0,
//             margin: "0 auto",

//             gap: "10px",

//             boxSizing: "border-box",
//           }}
//         >
//           {/* Breadcrumb */}
//           <div
//             style={{
//               width: "396px",
//               height: "24px",

//               display: "flex",
//               alignItems: "center",

//               padding: 0,
//               margin: 0,

//               fontFamily: "'Inter', sans-serif",
//               fontStyle: "normal",
//               fontWeight: 500,
//               fontSize: "20px",
//               lineHeight: "24px",

//               color: "#000000",
//               whiteSpace: "nowrap",
//             }}
//           >
//             <span>HOME</span>

//             <span style={{ margin: "0 6px" }}>&gt;</span>

//             <span>ABOUT UAMC</span>

//             <span style={{ margin: "0 6px" }}>&gt;&gt;</span>

//             <span style={{ color: GREEN }}>Overview</span>
//           </div>

//           {/* =========================================
//               FRAME 51
//           ========================================== */}
//           <div
//             style={{
//               width: "1090px",
//               height: "84.67px",

//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",

//               padding: "10.8332px 0",
//               gap: "10.83px",

//               boxSizing: "border-box",
//             }}
//           >
//             {/* Heading 2 → Facilities UAMC */}
//             <h1
//               style={{
//                 width: "564px",
//                 height: "63px",

//                 display: "flex",
//                 alignItems: "center",

//                 padding: 0,
//                 margin: 0,

//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 300,
//                 fontSize: "70px",
//                 lineHeight: "62px",

//                 color: "#262626",

//                 whiteSpace: "nowrap",
//               }}
//             >
//               ABOUT{" "}
//               <span
//                 style={{
//                   marginLeft: "10px",
//                   fontWeight: 700,
//                   color: GREEN,
//                 }}
//               >
//                 UAMC
//               </span>
//             </h1>
//           </div>
//         </div>

//         {/* =========================================
//             RIGHT LOGO
//             250px × 287.29px
//         ========================================== */}
//         <div
//           style={{
//             width: "250px",
//             height: "287.29px",

//             display: "flex",
//             alignItems: "flex-end",
//             justifyContent: "center",

//             padding: 0,
//             margin: "0 auto",

//             flexShrink: 0,
//           }}
//         >
//           <img
//             src="/logo2.png"
//             alt="Uttara Adhunik Medical College"
//             style={{
//               width: "250px",
//               height: "287.29px",

//               display: "block",

//               objectFit: "contain",
//               objectPosition: "center bottom",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// dynamic version
// import Image from "next/image";

// const GREEN = "#018837";

// const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/about/overview/hero`;

// async function getHero() {
//   try {
//     const response = await fetch(API_URL, {
//       // Change to { cache: "no-store" } if this needs to update immediately
//       next: {
//         revalidate: 60,
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to fetch hero: ${response.status}`);
//     }

//     const data = await response.json();

//     return data?.[0] ?? null;
//   } catch (error) {
//     console.error("Hero API error:", error);
//     return null;
//   }
// }

// export default async function Banner() {
//   const hero = await getHero();

//   const title = hero?.title || "About UAMC";
//   const image = hero?.image || "/logo2.png";

//   return (
//     <section className="relative flex min-h-[500px] w-full flex-col justify-end overflow-hidden bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16 lg:px-16 lg:py-20 xl:px-20">
//       {/* Green overlay/content panel */}
//       <div className="flex w-full min-h-[260px] flex-col justify-end gap-6 bg-[rgba(1,136,55,0.3)] px-5 py-6 sm:min-h-[280px] sm:px-8 sm:py-8 md:min-h-[300px] md:px-10 md:py-10 lg:min-h-[327px] lg:px-[50px] lg:py-5">
//         <div className="mx-auto flex w-full max-w-[1090px] flex-1 flex-col justify-end gap-3 lg:mr-0 lg:max-w-[1090px]">
//           {/* Breadcrumb */}
//           <div className="flex flex-wrap items-center gap-x-2 text-sm font-medium leading-6 text-black sm:text-base md:text-lg lg:text-xl">
//             <span>HOME</span>
//             <span>&gt;</span>
//             <span>ABOUT UAMC</span>
//             <span>&gt;&gt;</span>
//             <span className="text-[#018837]">Overview</span>
//           </div>

//           {/* Title */}
//           <div className="flex min-h-[70px] w-full items-center">
//             <h1 className="m-0 font-['Bitter'] text-4xl font-light leading-none text-[#262626] sm:text-5xl md:text-6xl lg:text-[70px] lg:leading-[62px]">
//               {title}
//             </h1>
//           </div>
//         </div>

//         {/* Dynamic API image */}
//         <div className="relative mx-auto hidden h-[220px] w-[190px] shrink-0 sm:block md:h-[250px] md:w-[215px] lg:h-[287px] lg:w-[250px]">
//           <Image
//             src={image}
//             alt={title}
//             fill
//             priority
//             sizes="(max-width: 768px) 215px, 250px"
//             className="object-contain object-center"
//           />
//         </div>
//       </div>

//       {/* Mobile image */}
//       <div className="absolute bottom-5 right-4 h-[150px] w-[130px] sm:hidden">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           priority
//           sizes="130px"
//           className="object-contain object-bottom"
//         />
//       </div>
//     </section>
//   );
// }

// Dynamic Version 2
// import Image from "next/image";

// const GREEN = "#018837";

// async function getHeroData() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_ADMIN_API}/api/about/overview/hero`,
//     { cache: "no-store" },
//   );
//   if (!res.ok) return null;
//   const data = await res.json();
//   return data?.[0] || null;
// }

// async function getSiteSetting() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_ADMIN_API}/api/site-setting`,
//     { cache: "no-store" },
//   );
//   if (!res.ok) return null;
//   const data = await res.json();
//   return data?.[0] || null;
// }

// export default async function Banner() {
//   const [hero, siteSetting] = await Promise.all([
//     getHeroData(),
//     getSiteSetting(),
//   ]);

//   const titleWords = hero?.title?.trim().split(" ") || ["About", "UAMC"];
//   const firstWord = titleWords[0];
//   const restWords = titleWords.slice(1).join(" ");

//   return (
//     <section className="relative isolate w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] flex flex-col justify-end items-start p-6 sm:p-10 md:p-16 lg:p-20 box-border overflow-hidden">
//       {/* <section className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] flex flex-col justify-end items-start p-6 sm:p-10 md:p-16 lg:p-20 box-border overflow-hidden"> */}
//       {/* Background image from API */}
//       {hero?.image && (
//         <Image
//           src={hero.image}
//           alt={hero.title || "Banner background"}
//           fill
//           priority
//           className="object-cover object-center -z-10"
//           sizes="100vw"
//         />
//       )}

//       {/* Frame 1261155625 */}
//       <div className="relative w-full min-h-[220px] md:h-[327.29px] flex flex-col md:flex-row justify-between items-start md:items-end p-4 sm:p-6 md:px-12 md:py-5 gap-4 md:gap-5 box-border bg-[rgba(1,136,55,0.3)]">
//         {/* Left content */}
//         <div className="flex-1 w-full md:max-w-[1090px] flex flex-col justify-end items-start gap-2.5 mx-auto">
//           {/* Breadcrumb */}
//           <div className="flex items-center flex-wrap font-['Inter',sans-serif] font-medium text-sm sm:text-base md:text-xl leading-6 text-black">
//             <span>HOME</span>
//             <span className="mx-1.5">&gt;</span>
//             <span>ABOUT UAMC</span>
//             <span className="mx-1.5">&gt;&gt;</span>
//             <span style={{ color: GREEN }}>Overview</span>
//           </div>

//           {/* Heading */}
//           <div className="flex flex-row items-center py-2.5 gap-2.5">
//             <h1 className="flex items-center font-['Bitter',serif] font-light text-3xl sm:text-5xl md:text-6xl lg:text-[70px] leading-tight lg:leading-[62px] text-[#262626] whitespace-nowrap">
//               {firstWord?.toUpperCase()}{" "}
//               <span className="ml-2 font-bold" style={{ color: GREEN }}>
//                 {restWords?.toUpperCase()}
//               </span>
//             </h1>
//           </div>
//         </div>

//         {/* Right Logo — from site-setting image only */}
//         {siteSetting?.image && (
//           <div className="relative w-[150px] h-[172px] sm:w-[200px] sm:h-[230px] md:w-[250px] md:h-[287.29px] shrink-0 mx-auto md:mx-0">
//             <Image
//               src={siteSetting.image}
//               alt={siteSetting?.site_name || "Logo"}
//               fill
//               className="object-contain object-bottom"
//               sizes="(max-width: 768px) 150px, 250px"
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// Dynamic Version 2
import Image from "next/image";
import BannerBreadcrumb from "@/components/BannerBreadcrumb";

const GREEN = "#018837";

async function getHeroData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_API}/api/about/overview/hero`,
    { cache: "no-store" },
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data?.[0] || null;
}

async function getSiteSetting() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_API}/api/site-setting`,
    { cache: "no-store" },
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data?.[0] || null;
}

export default async function Banner() {
  const [hero, siteSetting] = await Promise.all([
    getHeroData(),
    getSiteSetting(),
  ]);

  const titleWords = hero?.title?.trim().split(/\s+/) || ["About", "UAMC"];

  const firstWord = titleWords[0];
  const restWords = titleWords.slice(1).join(" ");

  return (
    <section
      className="
        relative
        isolate
        w-full

        min-h-[400px]

        flex
        flex-col
        justify-end

        box-border
        overflow-hidden

        px-3
        py-4

        sm:min-h-[420px]
        sm:px-4
        sm:py-5

        md:min-h-[450px]
        md:px-6
        md:py-7

        lg:h-[500px]
        lg:min-h-0
        lg:px-[60px]
        lg:py-[60px]

        xl:px-20
        xl:py-20
      "
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}
      {hero?.image && (
        <Image
          src={hero.image}
          alt={hero.title || "Banner background"}
          fill
          priority
          sizes="100vw"
          className="
            -z-10
            object-cover
            object-center
          "
        />
      )}

      {/* =========================================
          GREEN CONTENT FRAME
      ========================================== */}
      <div
        className="
          relative
          w-full
          box-border

          flex
          flex-col
          justify-end

          min-h-[290px]

          px-4
          py-5

          sm:min-h-[300px]
          sm:px-5
          sm:py-5

          md:min-h-[315px]
          md:px-7
          md:py-6

          lg:h-[327.29px]
          lg:min-h-0
          lg:px-10
          lg:py-5

          xl:px-[50px]
          xl:py-5
        "
        style={{
          backgroundColor: "rgba(1, 136, 55, 0.3)",
        }}
      >
        {/* =========================================
            MAIN CONTENT
        ========================================== */}
        <div
          className="
            w-full
            min-w-0

            flex
            flex-col

            gap-6

            sm:gap-7

            md:gap-8

            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-6
          "
        >
          {/* =========================================
              LEFT CONTENT
          ========================================== */}
          <div
            className="
              w-full
              min-w-0
              flex-1

              flex
              flex-col
              justify-end
              items-start

              gap-2

              sm:gap-3

              lg:gap-[10px]
            "
          >
            {/* =========================================
                BREADCRUMB
            ========================================== */}
            {/* <div
              className="
                w-full
                min-w-0

                flex
                flex-wrap
                items-center

                gap-x-1
                gap-y-1

                font-['Inter',sans-serif]
                font-medium

                text-[10px]
                leading-4

                sm:text-xs
                sm:leading-5

                md:text-sm
                md:leading-5

                lg:text-lg
                lg:leading-6

                xl:text-xl

                text-black
              "
            >
              <span>HOME</span>

              <span>&gt;</span>

              <span>ABOUT UAMC</span>

              <span>&gt;&gt;</span>

              <span className="text-[#018837]" style={{ color: GREEN }}>
                Overview
              </span>
            </div> */}
            <BannerBreadcrumb />

            {/* =========================================
                HEADING
            ========================================== */}
            <div
              className="
                w-full
                min-w-0

                flex
                items-center

                py-1

                sm:py-2
              "
            >
              <h1
                className="
                  m-0
                  p-0

                  flex
                  flex-wrap
                  items-center

                  font-['Bitter',serif]
                  font-light

                  text-[34px]
                  leading-[38px]

                  sm:text-[42px]
                  sm:leading-[44px]

                  md:text-[52px]
                  md:leading-[52px]

                  lg:text-[62px]
                  lg:leading-[60px]

                  xl:text-[70px]
                  xl:leading-[62px]

                  text-[#262626]
                "
              >
                <span>{firstWord?.toUpperCase()}</span>

                {restWords && (
                  <span
                    className="
                      ml-2

                      sm:ml-2.5

                      font-bold
                      text-[#018837]
                    "
                    style={{ color: GREEN }}
                  >
                    {restWords.toUpperCase()}
                  </span>
                )}
              </h1>
            </div>
          </div>

          {/* =========================================
              RIGHT LOGO
          ========================================== */}
          {siteSetting?.image && (
            <div
              className="
                relative

                flex
                items-end
                justify-center

                flex-shrink-0

                self-center
                mx-auto

                w-[75px]
                h-[86px]

                sm:w-[95px]
                sm:h-[109px]

                md:w-[120px]
                md:h-[138px]

                lg:w-[190px]
                lg:h-[219px]

                xl:w-[250px]
                xl:h-[287.29px]

                lg:self-auto
                lg:mx-0
              "
            >
              <Image
                src={siteSetting.image}
                alt={siteSetting?.site_name || "Logo"}
                fill
                sizes="
                  (max-width: 639px) 75px,
                  (max-width: 767px) 95px,
                  (max-width: 1023px) 120px,
                  (max-width: 1279px) 190px,
                  250px
                "
                className="
                  object-contain
                  object-bottom
                "
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
