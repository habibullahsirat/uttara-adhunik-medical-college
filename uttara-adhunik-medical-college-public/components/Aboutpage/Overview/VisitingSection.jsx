// // import { Phone, ArrowUpRight } from "lucide-react";
// // const GREEN = "#018837";
// // const YELLOW = "#FECD2F";

// // export default function VisitingSection() {
// //   return (
// //     <section className="bg-[#F6F6F6] px-6 md:px-20 py-16 md:py-24">
// //       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
// //         <div className="w-full lg:w-1/2">
// //           <h2
// //             className="text-3xl md:text-4xl font-bold text-black mb-5"
// //             style={{ fontFamily: "'Bitter', serif" }}
// //           >
// //             Visiting At UAMC
// //           </h2>

// //           <p className="text-[#525271] leading-relaxed mb-4">
// //             Here you'll find all the information about the reasons why the
// //             University of Luva is a unique institution. Get to know why over 200
// //             thousand people a year visit us.
// //           </p>

// //           <p className="text-[#525271] leading-relaxed mb-8">
// //             Welcome to Faral, where knowledge meets innovation and where every
// //             student's journey to success begins.
// //           </p>

// //           <div className="flex items-center gap-6 mb-8">
// //             <div
// //               className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
// //               style={{ background: GREEN }}
// //             >
// //               <Phone size={26} color="white" strokeWidth={1.8} />
// //             </div>

// //             <div>
// //               <div className="font-semibold text-lg" style={{ color: GREEN }}>
// //                 Call +32112345678
// //               </div>

// //               <div className="text-[#444444] text-sm">
// //                 For any kind of admission enquiry
// //               </div>
// //             </div>
// //           </div>

// //           <button
// //             className="inline-flex items-center gap-3 px-8 py-4 text-white font-medium"
// //             style={{ background: GREEN }}
// //           >
// //             View Our Program
// //             <ArrowUpRight size={18} />
// //           </button>
// //         </div>

// //         <div className="relative w-full lg:w-1/2 flex gap-4">
// //           <img
// //             src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=600&fit=crop"
// //             alt="Doctor with patient"
// //             className="w-1/2 h-72 md:h-96 object-cover"
// //           />

// //           <div className="w-1/2 flex flex-col gap-3">
// //             <img
// //               src="https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?w=400&h=350&fit=crop"
// //               alt="Nurse checking scan"
// //               className="w-full h-40 md:h-56 object-cover"
// //             />

// //             <div
// //               className="flex items-center gap-4 px-5 py-4"
// //               style={{
// //                 background: "rgba(1,136,55,0.5)",
// //                 backdropFilter: "blur(5px)",
// //               }}
// //             >
// //               <div className="text-3xl">🏥</div>

// //               <div>
// //                 <div
// //                   className="text-3xl font-bold text-white"
// //                   style={{ fontFamily: "'Bitter', serif" }}
// //                 >
// //                   28+
// //                 </div>

// //                 <div className="text-white text-xs">
// //                   Department Available For Student
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // Dynamic Version
// import Image from "next/image";
// import { ArrowUpRight, Phone } from "lucide-react";

// const GREEN = "#018837";

// async function getVisitData() {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_ADMIN_API}/api/site-setting`,
//     {
//       method: "GET",
//       cache: "no-store",
//     },
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch visiting section data");
//   }

//   const data = await response.json();

//   return data?.[0] ?? null;
// }

// export default async function VisitingSection() {
//   const visit = await getVisitData();

//   if (!visit) return null;

//   return (
//     <section className="w-full bg-[#F6F6F6] px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[12.5rem]">
//       <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-12 lg:flex-row lg:items-start lg:gap-16">
//         {/* Left Content */}
//         <div className="flex w-full max-w-[509px] flex-col gap-10 lg:gap-11">
//           {/* Heading + Description */}
//           <div className="flex flex-col gap-[18px]">
//             <h2
//               className="text-[28px] font-bold leading-[1.4] text-black sm:text-[30px] md:text-[32px]"
//               style={{ fontFamily: "'Bitter', serif" }}
//             >
//               {visit.title}
//             </h2>

//             <div className="flex flex-col gap-[15px]">
//               <p className="text-[15px] leading-[1.7] text-[#525271] sm:text-base">
//                 {visit.description}
//               </p>
//             </div>
//           </div>

//           {/* Phone */}
//           <div className="flex items-center gap-5 sm:gap-[25px]">
//             <a
//               href={`tel:${visit.phone}`}
//               aria-label={`Call ${visit.phone}`}
//               className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full shadow-[0_4px_60px_rgba(252,100,65,0.15)] sm:h-[68px] sm:w-[68px]"
//               style={{ backgroundColor: GREEN }}
//             >
//               <Phone
//                 size={28}
//                 color="white"
//                 strokeWidth={2}
//                 aria-hidden="true"
//               />
//             </a>

//             <div className="flex min-w-0 flex-col gap-[7px] sm:gap-[11px]">
//               <div
//                 className="text-base font-semibold leading-7 sm:text-xl"
//                 style={{ color: GREEN, fontFamily: "'Work Sans', sans-serif" }}
//               >
//                 Call{" "}
//                 <a href={`tel:${visit.phone}`} className="hover:underline">
//                   {visit.phone}
//                 </a>
//               </div>

//               <p className="text-sm leading-[27px] text-[#444444] sm:text-base">
//                 {visit.phoneTitle}
//               </p>
//             </div>
//           </div>

//           {/* CTA */}
//           <a
//             href="/programs"
//             className="inline-flex w-fit items-center justify-center gap-2.5 bg-[#018837] px-7 py-3.5 text-sm font-medium leading-[25px] text-white transition-colors hover:bg-[#016f2d] sm:px-[30px] sm:py-[15px] sm:text-base"
//           >
//             <span>View Our Program</span>

//             <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
//           </a>
//         </div>

//         {/* Right Images */}
//         <div className="relative w-full max-w-[621px]">
//           <div className="flex gap-3 sm:gap-4">
//             {/* Left Image */}
//             <div className="relative w-[38%] overflow-hidden">
//               <Image
//                 src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=800&fit=crop"
//                 alt="Doctor with patient"
//                 width={252}
//                 height={456}
//                 className="h-[250px] w-full object-cover sm:h-[330px] lg:h-[456px]"
//                 priority
//               />
//             </div>

//             {/* Right Column */}
//             <div className="flex w-[62%] flex-col gap-3 sm:gap-4">
//               {/* Top Image */}
//               <div className="relative overflow-hidden">
//                 <Image
//                   src="https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?w=600&h=500&fit=crop"
//                   alt="Nurse checking medical scan"
//                   width={348}
//                   height={234}
//                   className="h-[160px] w-full object-cover sm:h-[210px] lg:h-[234px]"
//                 />
//               </div>

//               {/* Statistic Card */}
//               <div
//                 className="relative z-10 -mt-1 flex min-h-[105px] items-center gap-4 px-4 py-4 sm:min-h-[117px] sm:gap-[18px] sm:px-[30px] sm:py-[15px]"
//                 style={{
//                   backgroundColor: "rgba(1, 136, 55, 0.5)",
//                   backdropFilter: "blur(5px)",
//                   WebkitBackdropFilter: "blur(5px)",
//                 }}
//               >
//                 {/* Hospital Icon */}
//                 <div className="relative hidden h-[70px] w-[70px] shrink-0 sm:block sm:h-[86px] sm:w-[86px]">
//                   <Image
//                     src="/images/hospital-icon.png"
//                     alt=""
//                     fill
//                     className="object-contain"
//                   />
//                 </div>

//                 {/* Stat */}
//                 <div className="flex min-w-0 flex-col">
//                   <div
//                     className="text-[30px] font-bold leading-[43px] text-white sm:text-[36px]"
//                     style={{ fontFamily: "'Bitter', serif" }}
//                   >
//                     28+
//                   </div>

//                   <p className="max-w-[175px] text-xs leading-[18px] text-white sm:text-[14px]">
//                     Department Available For Student
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// version 2
import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";

const GREEN = "#018837";

async function getVisitData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_API}/api/about/overview/visit`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch visiting section data");
  }

  const data = await response.json();

  return data?.[0] ?? null;
}

async function getDepartmentData() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_API}/api/homepage/find-department-right`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch department section data");
  }

  const data = await response.json();

  return data?.[0] ?? null;
}

export default async function VisitingSection() {
  const [visit, department] = await Promise.all([
    getVisitData(),
    getDepartmentData(),
  ]);

  if (!visit) {
    return null;
  }

  // Example:
  // "28+ Department Available For Student"
  // becomes:
  // number = "28+"
  // label = "Department Available For Student"

  const departmentTitle =
    department?.title || "28+ Department Available For Student";

  const titleParts = departmentTitle.trim().split(" ");

  const departmentNumber = titleParts.shift() || "28+";
  const departmentLabel =
    titleParts.join(" ") || "Department Available For Student";

  return (
    <section className="w-full bg-[#F6F6F6] px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[12.5rem]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col justify-between gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* LEFT CONTENT */}
        <div className="flex w-full max-w-[509px] flex-col gap-10 lg:gap-11">
          {/* Title + Description */}
          <div className="flex flex-col gap-[18px]">
            <h2
              className="text-[28px] font-bold leading-[1.4] text-black sm:text-[30px] md:text-[32px]"
              style={{ fontFamily: "'Bitter', serif" }}
            >
              {visit.title}
            </h2>

            <div className="flex flex-col gap-[15px]">
              <p className="text-[15px] leading-[1.7] text-[#525271] sm:text-base">
                {visit.description}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-5 sm:gap-[25px]">
            <a
              href={`tel:${visit.phone}`}
              aria-label={`Call ${visit.phone}`}
              className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full shadow-[0_4px_60px_rgba(252,100,65,0.15)] transition-transform hover:scale-105 sm:h-[68px] sm:w-[68px]"
              style={{ backgroundColor: GREEN }}
            >
              <Phone
                size={28}
                color="white"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>

            <div className="flex min-w-0 flex-col gap-[7px] sm:gap-[11px]">
              <div
                className="text-base font-semibold leading-7 sm:text-xl"
                style={{
                  color: GREEN,
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Call{" "}
                <a href={`tel:${visit.phone}`} className="hover:underline">
                  {visit.phone}
                </a>
              </div>

              <p className="text-sm leading-[27px] text-[#444444] sm:text-base">
                {visit.phoneTitle}
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="/programs"
            className="inline-flex w-fit items-center justify-center gap-2.5 bg-[#018837] px-7 py-3.5 text-sm font-medium leading-[25px] text-white transition-colors hover:bg-[#016f2d] sm:px-[30px] sm:py-[15px] sm:text-base"
          >
            <span>View Our Program</span>
            <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            relative
            h-[400px]
            w-full
            shrink-0
            sm:h-[450px]
            lg:h-[456.85px]
            lg:max-w-[621px]
            lg:flex-1
          "
        >
          {/* Small Image */}
          <div
            className="
              absolute
              left-0
              top-0
              h-[58%]
              w-[45%]
              overflow-hidden
              sm:w-[43%]
              lg:h-[234.44px]
              lg:w-[252px]
            "
          >
            <Image
              src={department?.image1 || "/placeholder.jpg"}
              alt="Medical department"
              fill
              sizes="
                (max-width: 640px) 45vw,
                (max-width: 1024px) 43vw,
                252px
              "
              className="object-cover"
              priority
            />
          </div>

          {/* Large Image */}
          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-[56%]
              overflow-hidden
              sm:w-[55%]
              lg:h-[456.85px]
              lg:w-[348px]
            "
          >
            <Image
              src={department?.image2 || "/placeholder.jpg"}
              alt="Medical professionals"
              fill
              sizes="
                (max-width: 640px) 56vw,
                (max-width: 1024px) 55vw,
                348px
              "
              className="object-cover"
              priority
            />
          </div>

          {/* DEPARTMENT COUNT OVERLAY */}
          <div
            className="
              absolute
              bottom-0
              left-0
              flex
              min-h-[105px]
              w-[86%]
              items-center
              gap-3
              px-4
              py-3
              sm:w-[65%]
              sm:gap-4
              sm:px-5
              lg:h-[116.99px]
              lg:w-[337.69px]
              lg:gap-[18px]
              lg:px-[30px]
              lg:py-[15px]
            "
            style={{
              backgroundColor: "rgba(1, 136, 55, 0.5)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
            }}
          >
            {/* Round Image */}
            <div
              className="
                relative
                h-[60px]
                w-[60px]
                shrink-0
                overflow-hidden
                rounded-full
                sm:h-[70px]
                sm:w-[70px]
                lg:h-[86.78px]
                lg:w-[86.78px]
              "
            >
              <Image
                src="/grad-cap.png"
                alt="Graduation cap"
                fill
                sizes="87px"
                className="object-cover"
              />
            </div>

            {/* Count + Label */}
            <div className="flex min-w-0 flex-col">
              <span
                className="
                  font-display
                  text-[28px]
                  font-bold
                  leading-[36px]
                  text-white
                  sm:text-[32px]
                  sm:leading-[40px]
                  lg:text-[36.157px]
                  lg:leading-[43px]
                "
              >
                {departmentNumber}
              </span>

              <span
                className="
                  font-body
                  text-[12px]
                  font-normal
                  leading-[17px]
                  text-white
                  sm:text-[13px]
                  lg:text-[14.4628px]
                  lg:leading-[18px]
                "
              >
                {departmentLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
