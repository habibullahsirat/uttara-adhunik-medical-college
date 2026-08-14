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
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_ADMIN_API;

export default function Banner() {
  const [siteSetting, setSiteSetting] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSiteSetting = async () => {
      try {
        setLoading(true);

        const response = await fetch(`${API_URL}/api/site-setting`, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch site settings");
        }

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setSiteSetting(data[0]);
        }
      } catch (error) {
        console.error("Failed to fetch site settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSiteSetting();
  }, []);

  const logo = siteSetting?.image;

  return (
    <section className="relative w-full overflow-hidden">
      {/* --------------------------------
          Banner Background
      --------------------------------- */}

      <div className="absolute inset-0">
        <Image
          src="/bg.png"
          alt="Contact UAMC"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Optional dark/green overlay for better readability */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* --------------------------------
          Banner Content
      --------------------------------- */}

      <div className="relative flex min-h-[320px] w-full items-end px-4 py-6 sm:min-h-[370px] sm:px-6 sm:py-8 md:min-h-[420px] md:px-8 md:py-10 lg:min-h-[500px] lg:px-12 lg:py-16 xl:px-20 xl:py-20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start justify-end gap-7 bg-[rgba(1,136,55,0.3)] px-5 py-6 shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[1px] sm:gap-8 sm:px-7 sm:py-8 md:px-9 md:py-9 lg:min-h-[300px] lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-6 xl:min-h-[327px] xl:px-[50px] xl:py-5">
          {/* --------------------------------
              Left Content
          --------------------------------- */}

          <div className="flex min-w-0 flex-1 flex-col justify-end">
            {/* Breadcrumb */}
            <div className="mb-3 flex flex-wrap items-center gap-x-1 text-xs font-medium text-black sm:text-sm md:text-base lg:text-xl">
              <span>HOME</span>

              <span aria-hidden="true">&gt;</span>

              <span className="text-[#018837]">Contact Us</span>
            </div>

            {/* Title */}
            <h1 className="max-w-full font-serif text-[34px] font-light leading-[1.05] text-[#262626] sm:text-[42px] md:text-[52px] lg:text-[62px] lg:leading-[0.95] xl:text-[70px] xl:leading-[62px]">
              Contact with{" "}
              <span className="font-bold text-[#018837]">UAMC</span>
            </h1>
          </div>

          {/* --------------------------------
              Logo
          --------------------------------- */}

          <div
            className={`relative flex shrink-0 items-center justify-center self-center lg:self-end ${
              loading ? "opacity-0" : "opacity-100"
            }`}
          >
            {logo && (
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-[160px] lg:w-[160px] xl:h-[180px] xl:w-[180px]">
                <Image
                  src={logo}
                  alt={siteSetting?.site_name || "UAMC"}
                  fill
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, 180px"
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
