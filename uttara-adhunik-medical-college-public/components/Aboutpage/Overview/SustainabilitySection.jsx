// "use client";

// import { Check } from "lucide-react";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// function SustainabilityItem({ text }) {
//   return (
//     <div className="flex w-full items-start gap-[16.28px]">
//       {/* Check */}
//       <div className="flex h-[19.53px] w-[19.53px] shrink-0 items-center justify-center">
//         <Check size={19.53} strokeWidth={2.5} style={{ color: YELLOW }} />
//       </div>

//       {/* Text */}
//       <div className="flex min-w-0 flex-1 items-center pr-[100px]">
//         <p className="m-0 font-body text-[15px] font-bold leading-[18px] text-[#444444]">
//           {text}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function SustainabilitySection() {
//   return (
//     <section
//       className="
//         w-full
//         overflow-hidden
//         bg-white
//         px-5
//         py-[70px]
//         md:px-10
//         lg:py-[100px]
//         lg:pl-[80px]
//         lg:pr-0
//       "
//     >
//       <div
//         className="
//           mx-auto
//           flex
//           w-full
//           max-w-[1520px]
//           flex-col
//           items-center
//           gap-12
//           lg:h-[450px]
//           lg:flex-row
//           lg:justify-between
//           lg:gap-[88.08px]
//         "
//       >
//         {/* =========================================
//             LEFT CONTENT
//         ========================================== */}
//         <div
//           className="
//             flex
//             w-full
//             flex-col
//             justify-center
//             lg:h-[450px]
//             lg:w-[764px]
//             lg:shrink-0
//           "
//         >
//           {/* Heading + Description */}
//           <div
//             className="
//               flex
//               w-full
//               flex-col
//               items-start
//               gap-[15px]
//               py-5
//               lg:h-[161px]
//               lg:w-[764px]
//             "
//           >
//             <h2
//               className="
//                 m-0
//                 flex
//                 items-center
//                 font-display
//                 text-[32px]
//                 font-bold
//                 leading-[36px]
//                 tracking-[1.04px]
//                 md:text-[40px]
//               "
//               style={{ color: GREEN }}
//             >
//               Sustainability at UAMC
//             </h2>

//             <div
//               className="
//                 flex
//                 w-full
//                 items-center
//                 py-[8.14px]
//                 lg:h-[83.28px]
//               "
//             >
//               <p
//                 className="
//                   m-0
//                   max-w-[662px]
//                   font-body
//                   text-[16px]
//                   font-normal
//                   leading-[22px]
//                   text-[#525271]
//                   lg:text-[18px]
//                 "
//               >
//                 Uttara Adhunik Medical College (UAMC) is committed to
//                 sustainability by integrating innovative solutions in healthcare
//                 and education while minimizing its environmental impact.
//               </p>
//             </div>
//           </div>

//           {/* =========================================
//               SUSTAINABILITY ITEMS
//           ========================================== */}
//           <div
//             className="
//               mt-[16.28px]
//               flex
//               w-full
//               flex-col
//               gap-[21.97px]
//               lg:w-[764px]
//             "
//           >
//             <SustainabilityItem text="Eco-Friendly Campus – UAMC integrates energy-efficient infrastructure and waste management to promote a greener learning environment." />

//             <SustainabilityItem text="Sustainable Healthcare Practices – The institution adopts responsible resource management to reduce environmental impact in medical education and patient care." />

//             <SustainabilityItem text="Innovation & Collaboration – UAMC explores partnerships and modern solutions to enhance long-term sustainability in healthcare and education." />
//           </div>
//         </div>

//         {/* =========================================
//             RIGHT IMAGE COMPOSITION
//         ========================================== */}
//         <div
//           className="
//             relative
//             h-[380px]
//             w-full
//             shrink-0
//             md:h-[430px]
//             lg:h-[449.98px]
//             lg:w-[756px]
//           "
//         >
//           {/* Blue Background */}
//           <div
//             className="
//               absolute
//               right-0
//               top-[60.98px]
//               h-[334.48px]
//               w-[49.74%]
//             "
//             style={{ backgroundColor: "#B7D8EF" }}
//           />

//           {/* Image 1 */}
//           <div
//             className="
//               absolute
//               left-0
//               top-[48.69px]
//               h-[352.61px]
//               w-[250.65px]
//               overflow-hidden
//             "
//           >
//             <img
//               src="/sustainability1.jpg"
//               alt="UAMC students"
//               className="
//                 block
//                 h-full
//                 w-full
//                 object-cover
//               "
//             />
//           </div>

//           {/* Image 2 */}
//           <div
//             className="
//               absolute
//               right-[75.67px]
//               top-0
//               h-[352.61px]
//               w-[250.65px]
//               overflow-hidden
//             "
//           >
//             <img
//               src="/sustainability2.jpg"
//               alt="UAMC campus"
//               className="
//                 block
//                 h-full
//                 w-full
//                 object-cover
//               "
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// version 2
import Image from "next/image";
import { Check } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/about/overview/sustainability`;

function SustainabilityItem({ text }) {
  if (!text) return null;

  return (
    <div className="flex w-full items-start gap-[16.28px]">
      <div className="flex h-[19.53px] w-[19.53px] shrink-0 items-center justify-center">
        <Check size={19.53} strokeWidth={2.5} style={{ color: YELLOW }} />
      </div>

      <div className="min-w-0 flex-1 pr-0 lg:pr-[100px]">
        <p className="m-0 font-body text-[15px] font-bold leading-[18px] text-[#444444]">
          {text}
        </p>
      </div>
    </div>
  );
}

async function getSustainabilityData() {
  try {
    const response = await fetch(API_URL, {
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch sustainability data: ${response.status}`,
      );
    }

    const data = await response.json();

    return Array.isArray(data) ? data[0] : data;
  } catch (error) {
    console.error("Sustainability API error:", error);
    return null;
  }
}

export default async function SustainabilitySection() {
  const data = await getSustainabilityData();

  if (!data) {
    return null;
  }

  const features = [data.feature1, data.feature2, data.feature3].filter(
    Boolean,
  );

  return (
    <section className="w-full overflow-hidden bg-white py-[60px] sm:py-[70px] lg:py-[100px] lg:pl-[80px] lg:pr-0">
      <div className="mx-auto flex w-full max-w-[1520px] flex-col items-center gap-12 lg:h-[450px] lg:flex-row lg:justify-between lg:gap-[88.08px]">
        {/* LEFT CONTENT */}
        <div className="flex w-full flex-col justify-center px-5 sm:px-8 md:px-10 lg:h-[450px] lg:w-[764px] lg:shrink-0 lg:px-0">
          {/* Heading + Description */}
          <div className="flex w-full flex-col items-start gap-[15px] py-5 lg:h-[161px] lg:w-[764px]">
            <h2
              className="m-0 font-display text-[30px] font-bold leading-[36px] tracking-[1.04px] sm:text-[34px] md:text-[40px]"
              style={{ color: GREEN }}
            >
              {data.title}
            </h2>

            <div className="flex w-full items-center py-[8.14px] lg:h-[83.28px]">
              <p className="m-0 max-w-[662px] font-body text-[16px] font-normal leading-[22px] text-[#525271] sm:text-[17px] lg:text-[18px]">
                {data.description}
              </p>
            </div>
          </div>

          {/* FEATURES */}
          <div className="mt-[16.28px] flex w-full flex-col gap-[21.97px] lg:w-[764px]">
            {features.map((feature, index) => (
              <SustainabilityItem key={`${feature}-${index}`} text={feature} />
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE COMPOSITION */}
        <div className="relative h-[400px] w-full max-w-[756px] shrink-0 sm:h-[430px] lg:h-[449.98px] lg:w-[756px]">
          {/* Blue Background */}
          <div
            className="absolute right-0 top-[60.98px] h-[334.48px] w-[49.74%]"
            style={{ backgroundColor: "#B7D8EF" }}
          />

          {/* Image 1 */}
          {data.image1 && (
            <div className="absolute left-[5%] top-[48.69px] h-[300px] w-[210px] overflow-hidden sm:left-[3%] sm:h-[352.61px] sm:w-[250.65px] lg:left-0">
              <Image
                src={data.image1}
                alt={`${data.title || "Sustainability"} - UAMC`}
                fill
                sizes="
                  (max-width: 640px) 210px,
                  (max-width: 1024px) 250px,
                  251px
                "
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Image 2 */}
          {data.image2 && (
            <div className="absolute right-[5%] top-0 h-[300px] w-[210px] overflow-hidden sm:right-[3%] sm:h-[352.61px] sm:w-[250.65px] lg:right-[75.67px]">
              <Image
                src={data.image2}
                alt={`${data.title || "Sustainability"} - UAMC campus`}
                fill
                sizes="
                  (max-width: 640px) 210px,
                  (max-width: 1024px) 250px,
                  251px
                "
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
