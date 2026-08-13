// import { ArrowUpRight } from "lucide-react";
// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// function AdmissionLink({ label }) {
//   return (
//     <div
//       className="flex items-center justify-between px-4 py-4 bg-white"
//       style={{ borderBottom: `1px solid ${YELLOW}` }}
//     >
//       <span className="font-medium" style={{ color: GREEN }}>
//         {label}
//       </span>

//       <ArrowUpRight size={20} style={{ color: GREEN }} />
//     </div>
//   );
// }

// export default function AdmissionAidSection() {
//   return (
//     <section className="bg-white px-6 md:px-20 py-16 md:py-24">
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
//         <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3">
//           <img
//             src="https://images.unsplash.com/photo-1587351021355-a479a299d2f9?w=400&h=560&fit=crop"
//             alt="Campus building"
//             className="col-span-1 row-span-2 w-full h-full object-cover"
//           />

//           <img
//             src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=270&fit=crop"
//             alt="Campus front"
//             className="w-full h-40 object-cover"
//           />

//           <img
//             src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=270&fit=crop"
//             alt="Campus playground"
//             className="w-full h-40 object-cover"
//           />
//         </div>

//         <div className="w-full lg:w-1/2">
//           <h2
//             className="text-3xl md:text-4xl font-bold mb-5"
//             style={{
//               color: GREEN,
//               fontFamily: "'Bitter', serif",
//             }}
//           >
//             Admission & Aid
//           </h2>

//           <p className="text-[#525271] leading-relaxed mb-8">
//             At <span className="font-semibold text-black">UAMC</span>, we
//             prepare you to launch your career by providing a supportive,
//             creative, and professional environment from which to learn practical
//             skills.
//           </p>

//           <div className="flex flex-col">
//             <AdmissionLink label="Process Overview" />
//             <AdmissionLink label="Fees & Financial Information" />
//             <AdmissionLink label="How To Apply" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

//Dynamic Version
"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/about/overview/admission-aid`;

function AdmissionLink({ label }) {
  if (!label) return null;

  return (
    <div
      className="
        flex min-h-[62px] w-full items-center justify-between
        gap-4 bg-white px-3 py-[17px]
        backdrop-blur-[29px]
      "
      style={{
        borderBottom: `1px solid ${YELLOW}`,
      }}
    >
      <span
        className="
          text-base font-medium leading-6
          sm:text-lg
          md:text-[20px] md:leading-[25px]
        "
        style={{ color: GREEN }}
      >
        {label}
      </span>

      <ArrowUpRight
        size={27}
        strokeWidth={2}
        className="shrink-0"
        style={{ color: GREEN }}
      />
    </div>
  );
}

export default function AdmissionAidSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAdmissionAid = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL, {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch Admission & Aid data (${response.status})`,
          );
        }

        const result = await response.json();

        if (!Array.isArray(result) || result.length === 0) {
          throw new Error("Admission & Aid data not found.");
        }

        setData(result[0]);
      } catch (err) {
        console.error("Admission & Aid API error:", err);
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong while loading the section.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAdmissionAid();
  }, []);

  if (loading) {
    return (
      <section className="bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-[12.5%]">
        <div className="mx-auto flex w-full max-w-[1160px] animate-pulse flex-col gap-10 lg:flex-row lg:items-center lg:gap-[30px]">
          {/* Image skeleton */}
          <div className="w-full lg:w-[55%]">
            <div className="grid grid-cols-2 gap-2.5">
              <div className="h-[420px] rounded-sm bg-gray-200 sm:h-[500px] lg:h-[424px]" />

              <div className="flex flex-col gap-2.5">
                <div className="h-[205px] rounded-sm bg-gray-200" />
                <div className="h-[205px] rounded-sm bg-gray-200" />
              </div>
            </div>
          </div>

          {/* Content skeleton */}
          <div className="w-full lg:w-[45%]">
            <div className="mb-5 h-12 w-64 rounded bg-gray-200" />
            <div className="mb-8 space-y-3">
              <div className="h-5 w-full rounded bg-gray-200" />
              <div className="h-5 w-[90%] rounded bg-gray-200" />
              <div className="h-5 w-[75%] rounded bg-gray-200" />
            </div>

            <div className="space-y-2">
              <div className="h-16 rounded bg-gray-200" />
              <div className="h-16 rounded bg-gray-200" />
              <div className="h-16 rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white px-5 py-16 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-lg border border-red-200 bg-red-50 p-6 text-center text-red-600">
          {error}
        </div>
      </section>
    );
  }

  if (!data) {
    return null;
  }

  const steps = [data.step1, data.step2, data.step3].filter(Boolean);

  return (
    <section
      className="
        bg-white
        px-5 py-16
        sm:px-8 sm:py-20
        md:px-12 md:py-24
        lg:px-20 lg:py-[100px]
        xl:px-[12.5%]
      "
    >
      <div
        className="
          mx-auto flex w-full max-w-[1160px]
          flex-col items-center
          gap-10
          lg:flex-row lg:justify-center lg:gap-[30px]
        "
      >
        {/* =========================
            IMAGE COLLAGE
        ========================== */}
        <div
          className="
            w-full
            lg:w-[55%]
            lg:max-w-[634px]
            lg:flex-none
          "
        >
          <div
            className="
              grid grid-cols-2
              gap-2.5
              lg:h-[424px]
            "
          >
            {/* Main image */}
            <div className="relative min-h-[400px] overflow-hidden sm:min-h-[500px] lg:h-[424px]">
              {data.image1 && (
                <Image
                  src={data.image1}
                  alt={`${data.title || "Admission & Aid"} image 1`}
                  fill
                  priority
                  className="object-cover"
                  sizes="
                    (max-width: 639px) 50vw,
                    (max-width: 1023px) 45vw,
                    312px
                  "
                />
              )}
            </div>

            {/* Right-side images */}
            <div className="flex flex-col gap-2.5">
              <div className="relative min-h-[195px] flex-1 overflow-hidden sm:min-h-[245px] lg:h-[207px] lg:min-h-0 lg:flex-none">
                {data.image2 && (
                  <Image
                    src={data.image2}
                    alt={`${data.title || "Admission & Aid"} image 2`}
                    fill
                    className="object-cover"
                    sizes="
                      (max-width: 639px) 50vw,
                      (max-width: 1023px) 45vw,
                      312px
                    "
                  />
                )}
              </div>

              <div className="relative min-h-[195px] flex-1 overflow-hidden sm:min-h-[245px] lg:h-[207px] lg:min-h-0 lg:flex-none">
                {data.image3 && (
                  <Image
                    src={data.image3}
                    alt={`${data.title || "Admission & Aid"} image 3`}
                    fill
                    className="object-cover"
                    sizes="
                      (max-width: 639px) 50vw,
                      (max-width: 1023px) 45vw,
                      312px
                    "
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            CONTENT
        ========================== */}
        <div
          className="
            flex w-full flex-col
            lg:w-[45%]
            lg:max-w-[541px]
            lg:flex-none
          "
        >
          {/* Heading + description */}
          <div className="mb-8 flex flex-col gap-[15px] lg:mb-[30px]">
            <h2
              className="
                text-3xl font-bold leading-tight
                tracking-[1px]
                sm:text-4xl
                md:text-[40px] md:leading-[52px]
              "
              style={{
                color: GREEN,
                fontFamily: "'Bitter', serif",
              }}
            >
              {data.title}
            </h2>

            <p
              className="
                max-w-[525px]
                text-base font-normal leading-7
                sm:text-[17px]
                md:text-[18px] md:leading-8
              "
              style={{ color: "#525271" }}
            >
              {data.description}
            </p>
          </div>

          {/* Admission links */}
          {steps.length > 0 && (
            <div
              className="
                flex w-full flex-col
                gap-[6px]
                rounded-sm
                p-2.5
                sm:p-4
                md:p-5
              "
            >
              {steps.map((step, index) => (
                <AdmissionLink key={`${step}-${index}`} label={step} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
