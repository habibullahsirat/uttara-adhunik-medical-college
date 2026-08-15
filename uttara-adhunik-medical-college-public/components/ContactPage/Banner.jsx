// import React from "react";

// export default function Banner() {
//   return (
//     <section
//       className="relative flex min-h-[350px] items-end bg-cover bg-center px-5 py-10 lg:min-h-[500px] lg:px-20 lg:py-20"
//       style={{
//         backgroundImage: "url('/assets/contact-banner.png')",
//       }}
//     >
//       <div className="mx-auto flex w-full max-w-[1440px] items-end justify-between gap-8 bg-[rgba(1,136,55,0.3)] px-6 py-8 shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[1px] lg:min-h-[327px] lg:px-[50px] lg:py-5">
//         <div className="flex flex-col justify-end">
//           {/* Breadcrumb */}
//           <div className="mb-3 text-sm font-medium text-black lg:text-xl">
//             <span>HOME</span>
//             <span className="mx-1">&gt;</span>
//             <span className="text-[#018837]">Contact Us</span>
//           </div>

//           {/* Title */}
//           <h1 className="font-serif text-4xl font-light leading-none text-[#262626] sm:text-5xl lg:text-[70px] lg:leading-[62px]">
//             Contact with <span className="font-bold text-[#018837]">UAMC</span>
//           </h1>
//         </div>

//         {/* Logo */}
//         <img
//           src="/assets/uamc-logo.png"
//           alt="UAMC"
//           className="hidden h-[180px] w-[180px] object-contain lg:block"
//         />
//       </div>
//     </section>
//   );
// }

// Dynamic Version
// "use client";

// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// const API_URL = process.env.NEXT_PUBLIC_ADMIN_API;

// export default function Banner() {
//   const [siteSetting, setSiteSetting] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchSiteSetting = async () => {
//       try {
//         setLoading(true);

//         const response = await fetch(`${API_URL}/api/site-setting`, {
//           cache: "no-store",
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch site settings");
//         }

//         const data = await response.json();

//         if (Array.isArray(data) && data.length > 0) {
//           setSiteSetting(data[0]);
//         }
//       } catch (error) {
//         console.error("Failed to fetch site settings:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSiteSetting();
//   }, []);

//   const logo = siteSetting?.image;

//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* --------------------------------
//           Banner Background
//       --------------------------------- */}

//       <div className="absolute inset-0">
//         <Image
//           src="/bg.png"
//           alt="Contact UAMC"
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover object-center"
//         />

//         {/* Optional dark/green overlay for better readability */}
//         <div className="absolute inset-0 bg-black/5" />
//       </div>

//       {/* --------------------------------
//           Banner Content
//       --------------------------------- */}

//       <div className="relative flex min-h-[320px] w-full items-end px-4 py-6 sm:min-h-[370px] sm:px-6 sm:py-8 md:min-h-[420px] md:px-8 md:py-10 lg:min-h-[500px] lg:px-12 lg:py-16 xl:px-20 xl:py-20">
//         <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-end gap-7 bg-[rgba(1,136,55,0.3)] px-5 py-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[1px] sm:gap-8 sm:px-7 sm:py-8 md:px-9 md:py-9 lg:min-h-[300px] lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-6 xl:min-h-[327px] xl:px-[50px] xl:py-5">
//           {/* --------------------------------
//               Left Content
//           --------------------------------- */}

//           <div className="flex min-w-0 flex-1 flex-col justify-end">
//             {/* Breadcrumb */}
//             <div className="mb-3 flex flex-wrap items-center gap-x-1 text-xs font-medium text-black sm:text-sm md:text-base lg:text-xl">
//               <span>HOME</span>

//               <span aria-hidden="true">&gt;</span>

//               <span className="text-[#018837]">Contact Us</span>
//             </div>

//             {/* Title */}
//             <h1 className="max-w-full font-serif text-[34px] font-light leading-[1.05] text-[#262626] sm:text-[42px] md:text-[52px] lg:text-[62px] lg:leading-[0.95] xl:text-[70px] xl:leading-[62px]">
//               Contact with{" "}
//               <span className="font-bold text-[#018837]">UAMC</span>
//             </h1>
//           </div>

//           {/* --------------------------------
//               Logo
//           --------------------------------- */}

//           <div
//             className={`relative flex shrink-0 items-center justify-center self-center lg:self-end ${
//               loading ? "opacity-0" : "opacity-100"
//             }`}
//           >
//             {logo && (
//               <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-[160px] lg:w-[160px] xl:h-[180px] xl:w-[180px]">
//                 <Image
//                   src={logo}
//                   alt={siteSetting?.site_name || "UAMC"}
//                   fill
//                   sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, 180px"
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Version 2
"use client";

const GREEN = "#018837";

export default function Banner() {
  return (
    <section
      className="
        relative isolate
        w-full
        min-h-[360px]

        flex flex-col justify-end

        overflow-hidden
        box-border

        px-3 py-4

        sm:min-h-[400px]
        sm:px-4 sm:py-5

        md:min-h-[440px]
        md:px-6 md:py-7

        lg:h-[500px]
        lg:min-h-0
        lg:px-[60px] lg:py-[60px]

        xl:px-20 xl:py-20
      "
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}
      <img
        src="/bg.png"
        alt="Online Registration UAMC banner"
        className="
          absolute
          inset-0
          -z-10

          w-full
          h-full

          object-cover
          object-center
        "
      />

      {/* =========================================
          GREEN CONTENT FRAME
      ========================================== */}
      <div
        className="
          relative
          w-full
          min-w-0
          max-w-[1440px]
          mx-auto

          box-border

          flex
          flex-col
          justify-end

          min-h-[270px]

          px-4
          py-5

          sm:min-h-[285px]
          sm:px-5
          sm:py-5

          md:min-h-[305px]
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

            justify-end

            gap-5

            sm:gap-6

            md:gap-7

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
            <div
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

                text-[9px]
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

              <span>ADMISSION UAMC</span>

              <span>&gt;&gt;</span>

              <span className="text-[#018837]" style={{ color: GREEN }}>
                Online Registration
              </span>
            </div>

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

                  max-w-full

                  font-['Bitter',serif]
                  font-light

                  text-[30px]
                  leading-[34px]

                  sm:text-[38px]
                  sm:leading-[42px]

                  md:text-[50px]
                  md:leading-[52px]

                  lg:text-[62px]
                  lg:leading-[60px]

                  xl:text-[70px]
                  xl:leading-[62px]

                  text-[#262626]
                "
              >
                <span>ADMISSION</span>

                <span
                  className="
                    ml-1.5

                    sm:ml-2
                    md:ml-2.5

                    font-bold
                    text-[#018837]
                  "
                  style={{ color: GREEN }}
                >
                  UAMC
                </span>
              </h1>
            </div>
          </div>

          {/* =========================================
              RIGHT LOGO
          ========================================== */}
          <div
            className="
              relative

              flex
              items-end
              justify-center

              flex-shrink-0

              self-center
              mx-auto

              w-[60px]
              h-[69px]

              sm:w-[80px]
              sm:h-[92px]

              md:w-[105px]
              md:h-[121px]

              lg:w-[190px]
              lg:h-[219px]

              xl:w-[250px]
              xl:h-[287.29px]

              lg:self-auto
              lg:mx-0
            "
          >
            <img
              src="/logo2.png"
              alt="Uttara Adhunik Medical College"
              className="
                block

                w-full
                h-full

                object-contain
                object-bottom
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
