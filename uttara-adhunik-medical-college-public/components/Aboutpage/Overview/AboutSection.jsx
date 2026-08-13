// import { ArrowRight } from "lucide-react";

// export default function AboutSection() {
//   const aboutBoxes = [
//     {
//       title: "College Mission",
//       sub: "Statement",
//       icon: "/about3.png",
//     },
//     {
//       title: "College Vision",
//       sub: "Achievement",
//       icon: "/about4.png",
//     },
//   ];

//   const GREEN = "#018837";

//   return (
//     <section className="w-full bg-white my-[64px]">
//       {/* =====================================================
//           FIGMA FRAME
//           1440px × 617.56px
//       ====================================================== */}
//       <div
//         className="
//           mx-auto
//           flex
//           w-full
//           max-w-[1440px]
//           flex-col
//           items-center
//           gap-10
//           px-5
//           py-10

//           lg:h-[617.56px]
//           lg:flex-row
//           lg:items-center
//           lg:gap-[40px]
//           lg:px-0
//           lg:py-0
//         "
//       >
//         {/* =================================================
//             LEFT — IMAGE COMPOSITION
//             Figma: 700 × 617.56
//         ================================================== */}
//         <div
//           className="
//             relative
//             h-[520px]
//             w-full
//             shrink-0

//             lg:h-[617.56px]
//             lg:w-[700px]
//           "
//         >
//           {/* ---------------------------------------------
//               LEFT IMAGE
//               Figma:
//               width  = 360.21
//               height = 572.73
//               left   = 0
//               top    = 44.83
//           ---------------------------------------------- */}
//           <div
//             className="
//               absolute
//               left-0
//               top-[20px]
//               h-[480px]
//               w-[62%]
//               overflow-hidden

//               lg:top-[44.83px]
//               lg:h-[572.73px]
//               lg:w-[360.21px]
//             "
//           >
//             <img
//               src="/about1.jpg"
//               alt="Uttara Adhunik Medical College"
//               className="h-full w-full object-cover"
//             />
//           </div>

//           {/* ---------------------------------------------
//               RIGHT IMAGE
//               Figma:
//               width  = 302.57
//               height = 572.73
//               left   = 397.43
//               top    = 22.42
//           ---------------------------------------------- */}
//           <div
//             className="
//               absolute
//               right-0
//               top-0
//               h-[480px]
//               w-[52%]
//               overflow-hidden
//               shadow-[0_3.33px_3.33px_rgba(0,0,0,0.25)]

//               lg:left-[397.43px]
//               lg:right-auto
//               lg:top-[22.42px]
//               lg:h-[572.73px]
//               lg:w-[302.57px]
//             "
//           >
//             <img
//               src="/about2.jpg"
//               alt="Uttara Adhunik Medical College"
//               className="h-full w-full object-cover"
//             />
//           </div>

//           {/* ---------------------------------------------
//               LOGO

//               Figma:
//               300.17 × 300.17

//               Important:
//               logo must sit ABOVE both images.
//           ---------------------------------------------- */}
//           <div
//             className="
//               absolute
//               left-[10%]
//               top-[110px]
//               z-20
//               flex
//               h-[230px]
//               w-[230px]
//               items-center
//               justify-center
//               overflow-hidden
//               rounded-full
//               p-[3px]

//               lg:left-[32%]
//               lg:top-[158px]
//               lg:h-[300.17px]
//               lg:w-[300.17px]
//             "
//           >
//             <img
//               src="/logo2.png"
//               alt="UAMC Logo"
//               className="h-full w-full rounded-full object-cover"
//             />
//           </div>
//         </div>

//         {/* =================================================
//             RIGHT — ABOUT CONTENT
//             Figma: 700px
//         ================================================== */}
//         <div
//           className="
//             flex
//             w-full
//             flex-col
//             gap-8

//             lg:h-[617.56px]
//             lg:w-[700px]
//             lg:shrink-0
//             lg:gap-[38px]
//           "
//         >
//           {/* =================================================
//               FRAME 55
//           ================================================== */}
//           <div
//             className="
//               flex
//               flex-col
//               gap-[21.67px]

//               lg:w-[661.89px]
//             "
//           >
//             {/* =================================================
//                 FRAME 54
//             ================================================== */}
//             <div
//               className="
//                 flex
//                 flex-col
//                 gap-[4.33px]
//               "
//             >
//               {/* ---------------------------------------------
//                   EYEBROW
//               ---------------------------------------------- */}
//               <div className="flex h-[45.67px] w-fit items-end">
//                 {/* Icon */}
//                 <img
//                   src="/knowledge.png"
//                   alt=""
//                   className="h-[23.36px] w-[32.5px] shrink-0 object-contain"
//                 />

//                 {/* Text */}
//                 <span
//                   className="
//       flex
//       h-[45.67px]
//       items-center
//       justify-center
//       px-[10.83px]
//       font-body
//       text-[19.5px]
//       font-medium
//       leading-[23px]
//     "
//                   style={{ color: GREEN }}
//                 >
//                   knowledge meets innovation
//                 </span>
//               </div>

//               {/* ---------------------------------------------
//                   HEADING
//                   Figma: 65px / 62px
//               ---------------------------------------------- */}
//               <div className="flex h-[84.67px] items-center">
//                 <h2
//                   className="
//                     whitespace-nowrap
//                     font-display
//                     text-[52px]
//                     font-light
//                     leading-[62px]
//                     text-[#262626]

//                     lg:text-[65px]
//                   "
//                 >
//                   About{" "}
//                   <span className="font-bold" style={{ color: GREEN }}>
//                     UAMC
//                   </span>
//                 </h2>
//               </div>
//             </div>

//             {/* =================================================
//                 FRAME 52 — DESCRIPTION
//             ================================================== */}
//             <div
//               className="
//                 flex
//                 flex-col
//                 gap-[27.08px]

//                 lg:w-[661.89px]
//               "
//             >
//               {/* First paragraph */}
//               <p
//                 className="
//                   m-0
//                   w-full
//                   font-body
//                   text-[16px]
//                   font-bold
//                   leading-[31px]
//                   text-[#737477]

//                   lg:text-[17.33px]
//                 "
//               >
//                 Uttara Adhunik Medical College (UAMC) is a prestigious medical
//                 institution located in Uttara Model Town, Dhaka, Bangladesh.
//                 Established in 2003.
//               </p>

//               {/* Second paragraph */}
//               <p
//                 className="
//                   m-0
//                   w-full
//                   font-body
//                   text-[16px]
//                   font-normal
//                   leading-[31px]
//                   text-[#737477]

//                   lg:text-[17.33px]
//                 "
//               >
//                 UAMC offers a Bachelor of Medicine and Bachelor of Surgery
//                 (MBBS) program, designed to equip students with the knowledge,
//                 skills, and hands-on clinical training needed to excel in the
//                 medical profession.
//               </p>
//             </div>
//           </div>

//           {/* =================================================
//               FRAME 53
//               700 × 97.05
//           ================================================== */}
//           <div
//             className="
//               flex
//               w-full
//               flex-col
//               gap-5

//               sm:flex-row

//               lg:h-[97.05px]
//               lg:w-[700px]
//               lg:gap-[21.67px]
//             "
//           >
//             {aboutBoxes.map((box) => (
//               <div
//                 key={box.title}
//                 className="
//                   relative
//                   flex
//                   h-[97.05px]
//                   w-full
//                   shrink-0
//                   items-center
//                   border
//                   border-dashed

//                   lg:w-[339.17px]
//                 "
//                 style={{ borderColor: GREEN }}
//               >
//                 {/* Icon */}
//                 <div
//                   className="
//                     ml-[20px]
//                     flex
//                     h-[54.17px]
//                     w-[54.17px]
//                     shrink-0
//                     items-center
//                     justify-center

//                     lg:ml-[33.58px]
//                   "
//                 >
//                   <img
//                     src={box.icon}
//                     alt=""
//                     className="h-full w-full object-contain"
//                   />
//                 </div>

//                 {/* Text */}
//                 <div
//                   className="
//                     ml-[20px]
//                     flex
//                     flex-col

//                     lg:ml-[26px]
//                   "
//                 >
//                   <span
//                     className="
//                       font-display
//                       text-[18px]
//                       font-medium
//                       leading-[23px]
//                     "
//                     style={{ color: GREEN }}
//                   >
//                     {box.title}
//                   </span>

//                   <span
//                     className="
//                       font-display
//                       text-[18px]
//                       font-medium
//                       leading-[23px]
//                     "
//                     style={{ color: GREEN }}
//                   >
//                     {box.sub}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* =================================================
//               CTA
//           ================================================== */}
//           <button
//             type="button"
//             className="
//               flex
//               h-[60.5px]
//               w-fit
//               items-center
//               justify-center
//               gap-[10px]
//               px-[32.5px]
//               py-[16.25px]
//               font-body
//               text-[17.33px]
//               font-medium
//               leading-[27px]
//               text-white
//               transition-opacity
//               hover:opacity-90
//             "
//             style={{ backgroundColor: GREEN }}
//           >
//             <span>View Our Program</span>

//             <ArrowRight className="h-[27.08px] w-[15.19px]" strokeWidth={2} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// import { ArrowRight } from "lucide-react";

// export default function AboutSection() {
//   const aboutBoxes = [
//     {
//       title: "College Mission",
//       sub: "Statement",
//       icon: "/about3.png",
//     },
//     {
//       title: "College Vision",
//       sub: "Achievement",
//       icon: "/about4.png",
//     },
//   ];

//   const GREEN = "#018837";

//   return (
//     <section className="my-[64px] w-full bg-white">
//       {/* =====================================================
//           FIGMA FRAME
//           1440px × 617.56px
//       ====================================================== */}

//       <div
//         className="
//           mx-auto
//           flex
//           w-full
//           max-w-[1440px]
//           flex-col
//           items-center
//           gap-10
//           px-5
//           py-10

//           lg:h-[617.56px]
//           lg:flex-row
//           lg:items-center
//           lg:gap-[40px]
//           lg:px-0
//           lg:py-0
//         "
//       >
//         {/* =================================================
//             LEFT — IMAGE COMPOSITION
//             Figma: 700 × 617.56
//         ================================================== */}

//         <div
//           className="
//             relative
//             h-[520px]
//             w-full
//             shrink-0

//             lg:h-[617.56px]
//             lg:w-[700px]
//           "
//         >
//           {/* ---------------------------------------------
//               LEFT IMAGE
//               Figma:
//               width  = 360.21
//               height = 572.73
//               left   = 0
//               top    = 44.83
//           ---------------------------------------------- */}

//           <div
//             className="
//               absolute
//               left-0
//               top-[20px]
//               h-[480px]
//               w-[62%]
//               overflow-hidden

//               lg:top-[44.83px]
//               lg:h-[572.73px]
//               lg:w-[360.21px]
//             "
//           >
//             <img
//               src="/about1.jpg"
//               alt="Uttara Adhunik Medical College"
//               className="
//                 block
//                 h-full
//                 w-full
//                 object-cover
//                 object-center
//                 !transform-none
//               "
//             />
//           </div>

//           {/* ---------------------------------------------
//               RIGHT IMAGE
//               Figma:
//               width  = 302.57
//               height = 572.73
//               left   = 397.43
//               top    = 22.42
//           ---------------------------------------------- */}

//           <div
//             className="
//               absolute
//               right-0
//               top-0
//               h-[480px]
//               w-[52%]
//               overflow-hidden
//               shadow-[0_3.33px_3.33px_rgba(0,0,0,0.25)]

//               lg:left-[397.43px]
//               lg:right-auto
//               lg:top-[22.42px]
//               lg:h-[572.73px]
//               lg:w-[302.57px]
//             "
//           >
//             <img
//               src="/about2.jpg"
//               alt="Uttara Adhunik Medical College"
//               className="
//                 block
//                 h-full
//                 w-full
//                 object-cover
//                 object-center
//                 !transform-none
//               "
//             />
//           </div>

//           {/* ---------------------------------------------
//               LOGO

//               Figma:
//               300.17 × 300.17

//               Important:
//               logo must sit ABOVE both images.
//           ---------------------------------------------- */}

//           <div
//             className="
//               absolute
//               left-[10%]
//               top-[110px]
//               z-20
//               flex
//               h-[230px]
//               w-[230px]
//               items-center
//               justify-center
//               overflow-hidden
//               rounded-full
//               p-[3px]

//               lg:left-[32%]
//               lg:top-[158px]
//               lg:h-[300.17px]
//               lg:w-[300.17px]
//             "
//           >
//             <img
//               src="/logo2.png"
//               alt="UAMC Logo"
//               className="
//                 block
//                 h-full
//                 w-full
//                 rounded-full
//                 object-cover
//                 !transform-none
//               "
//             />
//           </div>
//         </div>

//         {/* =================================================
//             RIGHT — ABOUT CONTENT
//             Figma: 700px
//         ================================================== */}

//         <div
//           className="
//             flex
//             w-full
//             flex-col
//             gap-8

//             lg:h-[617.56px]
//             lg:w-[700px]
//             lg:shrink-0
//             lg:gap-[38px]
//           "
//         >
//           {/* =================================================
//               FRAME 55
//           ================================================= */}

//           <div
//             className="
//               flex
//               flex-col
//               gap-[21.67px]

//               lg:w-[661.89px]
//             "
//           >
//             {/* =================================================
//                 FRAME 54
//             ================================================= */}

//             <div
//               className="
//                 flex
//                 flex-col
//                 gap-[4.33px]
//               "
//             >
//               {/* ---------------------------------------------
//                   EYEBROW
//               ---------------------------------------------- */}

//               <div className="flex h-[45.67px] w-fit items-center">
//                 {/* Icon */}

//                 <div className="flex h-[45.67px] w-[32.5px] shrink-0 items-center justify-start">
//                   <img
//                     src="/knowledge.png"
//                     alt=""
//                     className="
//                       block
//                       h-[23.36px]
//                       w-[32.5px]
//                       object-contain
//                       object-left
//                       !transform-none
//                     "
//                   />
//                 </div>

//                 {/* Text */}

//                 <span
//                   className="
//                     flex
//                     h-[45.67px]
//                     items-center
//                     px-[10.83px]
//                     font-body
//                     text-[19.5px]
//                     font-medium
//                     leading-[23px]
//                   "
//                   style={{ color: GREEN }}
//                 >
//                   knowledge meets innovation
//                 </span>
//               </div>

//               {/* ---------------------------------------------
//                   HEADING
//                   Figma: 65px / 62px
//               ---------------------------------------------- */}

//               <div className="flex h-[84.67px] items-center">
//                 <h2
//                   className="
//                     whitespace-nowrap
//                     font-display
//                     text-[52px]
//                     font-light
//                     leading-[62px]
//                     text-[#262626]

//                     lg:text-[65px]
//                   "
//                 >
//                   About{" "}
//                   <span className="font-bold" style={{ color: GREEN }}>
//                     UAMC
//                   </span>
//                 </h2>
//               </div>
//             </div>

//             {/* =================================================
//                 FRAME 52 — DESCRIPTION
//             ================================================== */}

//             <div
//               className="
//                 flex
//                 flex-col
//                 gap-[27.08px]

//                 lg:w-[661.89px]
//               "
//             >
//               {/* First paragraph */}

//               <p
//                 className="
//                   m-0
//                   w-full
//                   font-body
//                   text-[16px]
//                   font-bold
//                   leading-[31px]
//                   text-[#737477]

//                   lg:text-[17.33px]
//                 "
//               >
//                 Uttara Adhunik Medical College (UAMC) is a prestigious medical
//                 institution located in Uttara Model Town, Dhaka, Bangladesh.
//                 Established in 2003.
//               </p>

//               {/* Second paragraph */}

//               <p
//                 className="
//                   m-0
//                   w-full
//                   font-body
//                   text-[16px]
//                   font-normal
//                   leading-[31px]
//                   text-[#737477]

//                   lg:text-[17.33px]
//                 "
//               >
//                 UAMC offers a Bachelor of Medicine and Bachelor of Surgery
//                 (MBBS) program, designed to equip students with the knowledge,
//                 skills, and hands-on clinical training needed to excel in the
//                 medical profession.
//               </p>
//             </div>
//           </div>

//           {/* =================================================
//               FRAME 53
//               700 × 97.05
//           ================================================== */}

//           <div
//             className="
//               flex
//               w-full
//               flex-col
//               gap-5

//               sm:flex-row

//               lg:h-[97.05px]
//               lg:w-[700px]
//               lg:gap-[21.67px]
//             "
//           >
//             {aboutBoxes.map((box) => (
//               <div
//                 key={box.title}
//                 className="
//                   relative
//                   flex
//                   h-[97.05px]
//                   w-full
//                   shrink-0
//                   items-center
//                   border
//                   border-dashed

//                   lg:w-[339.17px]
//                 "
//                 style={{ borderColor: GREEN }}
//               >
//                 {/* Icon */}

//                 <div
//                   className="
//                     ml-[20px]
//                     flex
//                     h-[54.17px]
//                     w-[54.17px]
//                     shrink-0
//                     items-center
//                     justify-center

//                     lg:ml-[33.58px]
//                   "
//                 >
//                   <img
//                     src={box.icon}
//                     alt=""
//                     className="
//                       block
//                       h-full
//                       w-full
//                       object-contain
//                       !transform-none
//                     "
//                   />
//                 </div>

//                 {/* Text */}

//                 <div
//                   className="
//                     ml-[20px]
//                     flex
//                     flex-col

//                     lg:ml-[26px]
//                   "
//                 >
//                   <span
//                     className="
//                       font-display
//                       text-[18px]
//                       font-medium
//                       leading-[23px]
//                     "
//                     style={{ color: GREEN }}
//                   >
//                     {box.title}
//                   </span>

//                   <span
//                     className="
//                       font-display
//                       text-[18px]
//                       font-medium
//                       leading-[23px]
//                     "
//                     style={{ color: GREEN }}
//                   >
//                     {box.sub}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* =================================================
//               CTA
//           ================================================== */}

//           <button
//             type="button"
//             className="
//               flex
//               h-[60.5px]
//               w-fit
//               items-center
//               justify-center
//               gap-[10px]
//               px-[32.5px]
//               py-[16.25px]
//               font-body
//               text-[17.33px]
//               font-medium
//               leading-[27px]
//               text-white
//               transition-opacity
//               hover:opacity-90
//             "
//             style={{ backgroundColor: GREEN }}
//           >
//             <span>View Our Program</span>

//             <ArrowRight className="h-[27.08px] w-[15.19px]" strokeWidth={2} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { ArrowRight } from "lucide-react";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// export default function AboutSection() {
//   const aboutBoxes = [
//     {
//       title: "College Mission",
//       sub: "Statement",
//       icon: "/about3.png",
//       href: "/about/mission",
//     },
//     {
//       title: "College Vision",
//       sub: "Achievement",
//       icon: "/about4.png",
//       href: "/about/vision",
//     },
//   ];

//   return (
//     <section className="my-[64px] w-full bg-white">
//       <div
//         className="
//           mx-auto flex w-full max-w-[1440px]
//           flex-col items-center gap-10
//           px-5 py-10
//           lg:h-[617.56px]
//           lg:flex-row
//           lg:items-center
//           lg:gap-[40px]
//           lg:px-0
//           lg:py-0
//         "
//       >
//         {/* =================================================
//             LEFT IMAGE COMPOSITION
//         ================================================== */}

//         <div
//           className="
//             relative h-[520px] w-full shrink-0
//             lg:h-[617.56px] lg:w-[700px]
//           "
//         >
//           {/* LEFT IMAGE */}

//           <div
//             className="
//               absolute left-0 top-[20px]
//               h-[480px] w-[62%]
//               overflow-hidden
//               lg:top-[44.83px]
//               lg:h-[572.73px]
//               lg:w-[360.21px]
//             "
//           >
//             <img
//               src="/about1.jpg"
//               alt="Uttara Adhunik Medical College"
//               className="
//                 block h-full w-full
//                 object-cover object-center
//                 animate-about-zoom
//               "
//             />
//           </div>

//           {/* RIGHT IMAGE */}

//           <div
//             className="
//               absolute right-0 top-0
//               h-[480px] w-[52%]
//               overflow-hidden
//               shadow-[0_3.33px_3.33px_rgba(0,0,0,0.25)]
//               lg:left-[397.43px]
//               lg:right-auto
//               lg:top-[22.42px]
//               lg:h-[572.73px]
//               lg:w-[302.57px]
//             "
//           >
//             <img
//               src="/about2.jpg"
//               alt="Uttara Adhunik Medical College"
//               className="
//                 block h-full w-full
//                 object-cover object-center
//                 animate-about-zoom
//               "
//             />
//           </div>

//           {/* COLLEGE LOGO */}

//           <div
//             className="
//               absolute left-[10%] top-[110px] z-20
//               flex h-[230px] w-[230px]
//               items-center justify-center
//               overflow-hidden rounded-full
//               p-[3px]
//               lg:left-[32%]
//               lg:top-[158px]
//               lg:h-[300.17px]
//               lg:w-[300.17px]
//             "
//           >
//             <img
//               src="/logo2.png"
//               alt="UAMC Logo"
//               className="
//                 block h-full w-full
//                 rounded-full object-cover
//               "
//             />
//           </div>
//         </div>

//         {/* =================================================
//             RIGHT CONTENT
//         ================================================== */}

//         <div
//           className="
//             flex w-full flex-col gap-8
//             lg:h-[617.56px]
//             lg:w-[700px]
//             lg:shrink-0
//             lg:gap-[38px]
//           "
//         >
//           {/* HEADING + DESCRIPTION */}

//           <div
//             className="
//               flex flex-col gap-[21.67px]
//               lg:w-[661.89px]
//             "
//           >
//             {/* HEADING */}

//             <div className="flex flex-col gap-[4.33px]">
//               {/* KNOWLEDGE MEETS INNOVATION */}

//               <div className="flex h-[45.67px] w-fit items-center">
//                 <div className="flex h-[45.67px] w-[32.5px] shrink-0 items-center justify-start">
//                   <img
//                     src="/knowledge.png"
//                     alt=""
//                     className="
//                       block h-[23.36px] w-[32.5px]
//                       object-contain object-left
//                     "
//                   />
//                 </div>

//                 <span
//                   className="
//                     flex h-[45.67px]
//                     items-center
//                     px-[10.83px]
//                     font-body
//                     text-[19.5px]
//                     font-medium
//                     leading-[23px]
//                   "
//                   style={{ color: GREEN }}
//                 >
//                   knowledge meets innovation
//                 </span>
//               </div>

//               {/* MAIN HEADING */}

//               <div className="flex h-[84.67px] items-center">
//                 <h2
//                   className="
//                     whitespace-nowrap
//                     font-display
//                     text-[52px]
//                     font-light
//                     leading-[62px]
//                     text-[#262626]
//                     lg:text-[65px]
//                   "
//                 >
//                   About{" "}
//                   <span className="font-bold" style={{ color: GREEN }}>
//                     UAMC
//                   </span>
//                 </h2>
//               </div>
//             </div>

//             {/* DESCRIPTION */}

//             <div
//               className="
//                 flex flex-col gap-[27.08px]
//                 lg:w-[661.89px]
//               "
//             >
//               <p
//                 className="
//                   m-0 w-full
//                   font-body
//                   text-[16px]
//                   font-bold
//                   leading-[31px]
//                   text-[#737477]
//                   lg:text-[17.33px]
//                 "
//               >
//                 Uttara Adhunik Medical College (UAMC) is a prestigious medical
//                 institution located in Uttara Model Town, Dhaka, Bangladesh.
//                 Established in 2003.
//               </p>

//               <p
//                 className="
//                   m-0 w-full
//                   font-body
//                   text-[16px]
//                   font-normal
//                   leading-[31px]
//                   text-[#737477]
//                   lg:text-[17.33px]
//                 "
//               >
//                 UAMC offers a Bachelor of Medicine and Bachelor of Surgery
//                 (MBBS) program, designed to equip students with the knowledge,
//                 skills, and hands-on clinical training needed to excel in the
//                 medical profession.
//               </p>
//             </div>
//           </div>

//           {/* =================================================
//               MISSION + VISION BUTTONS
//           ================================================== */}

//           <div
//             className="
//               flex w-full flex-col gap-5
//               sm:flex-row
//               lg:h-[97.05px]
//               lg:w-[700px]
//               lg:gap-[21.67px]
//             "
//           >
//             {aboutBoxes.map((box) => (
//               <a
//                 key={box.title}
//                 href={box.href}
//                 className="
//                   group relative flex h-[97.05px]
//                   w-full shrink-0 items-center
//                   overflow-hidden
//                   border border-dashed
//                   bg-white
//                   transition-all duration-300
//                   lg:w-[339.17px]
//                 "
//                 style={{ borderColor: GREEN }}
//               >
//                 {/* YELLOW HOVER BACKGROUND */}

//                 <span
//                   className="
//                     absolute inset-0 z-0
//                     origin-left scale-x-0
//                     transition-transform duration-300
//                     ease-out
//                     group-hover:scale-x-100
//                   "
//                   style={{ backgroundColor: YELLOW }}
//                 />

//                 {/* ICON */}

//                 <div
//                   className="
//                     relative z-10
//                     ml-[20px]
//                     flex h-[54.17px] w-[54.17px]
//                     shrink-0 items-center justify-center
//                     lg:ml-[33.58px]
//                   "
//                 >
//                   <img
//                     src={box.icon}
//                     alt=""
//                     className="
//                       block h-full w-full
//                       object-contain
//                       transition-transform duration-300
//                       group-hover:scale-105
//                     "
//                   />
//                 </div>

//                 {/* TEXT */}

//                 <div
//                   className="
//                     relative z-10
//                     ml-[20px] flex flex-col
//                     lg:ml-[26px]
//                   "
//                 >
//                   <span
//                     className="
//                       font-display
//                       text-[18px]
//                       font-medium
//                       leading-[23px]
//                       transition-colors duration-300
//                       group-hover:text-black
//                     "
//                     style={{ color: GREEN }}
//                   >
//                     {box.title}
//                   </span>

//                   <span
//                     className="
//                       font-display
//                       text-[18px]
//                       font-medium
//                       leading-[23px]
//                       transition-colors duration-300
//                       group-hover:text-black
//                     "
//                     style={{ color: GREEN }}
//                   >
//                     {box.sub}
//                   </span>
//                 </div>
//               </a>
//             ))}
//           </div>

//           {/* VIEW OUR PROGRAM */}

//           <a
//             href="/programs"
//             className="
//               flex h-[60.5px] w-fit
//               items-center justify-center
//               gap-[10px]
//               px-[32.5px] py-[16.25px]
//               font-body
//               text-[17.33px]
//               font-medium
//               leading-[27px]
//               text-white
//               transition-opacity duration-300
//               hover:opacity-90
//             "
//             style={{ backgroundColor: GREEN }}
//           >
//             <span>View Our Program</span>

//             <ArrowRight className="h-[27.08px] w-[15.19px]" strokeWidth={2} />
//           </a>
//         </div>
//       </div>

//       {/* =====================================================
//           ANIMATION
//       ====================================================== */}

//       <style jsx global>{`
//         @keyframes aboutZoom {
//           0% {
//             transform: scale(1);
//           }

//           50% {
//             transform: scale(1.08);
//           }

//           100% {
//             transform: scale(1);
//           }
//         }

//         .animate-about-zoom {
//           animation: aboutZoom 8s ease-in-out infinite;
//           transform-origin: center center;
//           will-change: transform;
//         }
//       `}</style>
//     </section>
//   );
// }

// New version Nisht
// "use client";

// import { ArrowRight } from "lucide-react";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// export default function AboutSection() {
//   const aboutBoxes = [
//     {
//       title: "College Mission",
//       sub: "Statement",
//       icon: "/about3.png",
//       href: "/about/mission",
//     },
//     {
//       title: "College Vision",
//       sub: "Achievement",
//       icon: "/about4.png",
//       href: "/about/vision",
//     },
//   ];

//   return (
//     <section className="w-full">
//       {/* =================================================
//           LEFT IMAGE COMPOSITION
//       ================================================== */}

//       <div className="relative flex w-full flex-col gap-8 lg:flex-row lg:gap-[60px]">
//         <div
//           className="
//             relative h-[520px] w-full shrink-0
//             lg:h-[617.56px] lg:w-[700px]
//           "
//         >
//           {/* LEFT IMAGE */}

//           <div
//             className="
//               absolute left-0 top-[20px]
//               h-[480px] w-[62%]
//               overflow-hidden
//               lg:top-[44.83px]
//               lg:h-[572.73px]
//               lg:w-[360.21px]
//             "
//           >
//             <img
//               src="/about1.jpg"
//               alt="Uttara Adhunik Medical College"
//               className="
//                 block h-full w-full
//                 object-cover object-center
//                 animate-about-zoom
//               "
//             />
//           </div>

//           {/* RIGHT IMAGE */}

//           <div
//             className="
//               absolute right-0 top-0
//               h-[480px] w-[52%]
//               overflow-hidden
//               shadow-[0_3.33px_3.33px_rgba(0,0,0,0.25)]
//               lg:left-[397.43px]
//               lg:right-auto
//               lg:top-[22.42px]
//               lg:h-[572.73px]
//               lg:w-[302.57px]
//             "
//           >
//             <img
//               src="/about2.jpg"
//               alt="Uttara Adhunik Medical College"
//               className="
//                 block h-full w-full
//                 object-cover object-center
//                 animate-about-zoom
//               "
//             />
//           </div>

//           {/* COLLEGE LOGO */}

//           <div
//             className="
//               absolute left-[10%] top-[110px] z-20
//               flex h-[230px] w-[230px]
//               items-center justify-center
//               overflow-hidden rounded-full
//               p-[3px]
//               lg:left-[32%]
//               lg:top-[158px]
//               lg:h-[300.17px]
//               lg:w-[300.17px]
//             "
//           >
//             <img
//               src="/logo2.png"
//               alt="UAMC Logo"
//               className="
//                 block h-full w-full
//                 rounded-full object-cover
//               "
//             />
//           </div>
//         </div>

//         {/* =================================================
//             RIGHT CONTENT
//         ================================================== */}

//         <div
//           className="
//             flex w-full flex-col gap-8
//             lg:h-[617.56px]
//             lg:w-[700px]
//             lg:shrink-0
//             lg:gap-[38px]
//           "
//         >
//           {/* HEADING + DESCRIPTION */}

//           <div
//             className="
//               flex flex-col gap-[21.67px]
//               lg:w-[661.89px]
//             "
//           >
//             {/* HEADING */}

//             <div className="flex flex-col gap-[4.33px]">
//               {/* KNOWLEDGE MEETS INNOVATION */}

//               <div className="flex h-[45.67px] w-fit items-center">
//                 <div className="flex h-[45.67px] w-[32.5px] shrink-0 items-center justify-start">
//                   <img
//                     src="/knowledge.png"
//                     alt=""
//                     className="
//                       block h-[23.36px] w-[32.5px]
//                       object-contain object-left
//                     "
//                   />
//                 </div>

//                 <span
//                   className="
//                     flex h-[45.67px]
//                     items-center
//                     px-[10.83px]
//                     font-body
//                     text-[19.5px]
//                     font-medium
//                     leading-[23px]
//                   "
//                   style={{ color: GREEN }}
//                 >
//                   knowledge meets innovation
//                 </span>
//               </div>

//               {/* MAIN HEADING */}

//               <div className="flex h-[84.67px] items-center">
//                 <h2
//                   className="
//                     whitespace-nowrap
//                     font-display
//                     text-[52px]
//                     font-light
//                     leading-[62px]
//                     text-[#262626]
//                     lg:text-[65px]
//                   "
//                 >
//                   About{" "}
//                   <span className="font-bold" style={{ color: GREEN }}>
//                     UAMC
//                   </span>
//                 </h2>
//               </div>
//             </div>

//             {/* DESCRIPTION */}

//             <div
//               className="
//                 flex flex-col gap-[27.08px]
//                 lg:w-[661.89px]
//               "
//             >
//               <p
//                 className="
//                   m-0 w-full
//                   font-body
//                   text-[16px]
//                   font-bold
//                   leading-[31px]
//                   text-[#737477]
//                   lg:text-[17.33px]
//                 "
//               >
//                 Uttara Adhunik Medical College (UAMC) is a prestigious medical
//                 institution located in Uttara Model Town, Dhaka, Bangladesh.
//                 Established in 2003.
//               </p>

//               <p
//                 className="
//                   m-0 w-full
//                   font-body
//                   text-[16px]
//                   font-normal
//                   leading-[31px]
//                   text-[#737477]
//                   lg:text-[17.33px]
//                 "
//               >
//                 UAMC offers a Bachelor of Medicine and Bachelor of Surgery
//                 (MBBS) program, designed to equip students with the knowledge,
//                 skills, and hands-on clinical training needed to excel in the
//                 medical profession.
//               </p>
//             </div>
//           </div>

//           {/* =================================================
//               MISSION + VISION BUTTONS
//           ================================================== */}

//           <div
//             className="
//               flex w-full flex-col gap-5
//               sm:flex-row
//               lg:h-[97.05px]
//               lg:w-[700px]
//               lg:gap-[21.67px]
//             "
//           >
//             {aboutBoxes.map((box) => (
//               <a
//                 key={box.title}
//                 href={box.href}
//                 className="
//                   group relative flex h-[97.05px]
//                   w-full shrink-0 items-center
//                   overflow-hidden
//                   border border-dashed
//                   bg-white
//                   transition-all duration-300
//                   lg:w-[339.17px]
//                 "
//                 style={{ borderColor: GREEN }}
//               >
//                 {/* YELLOW HOVER BACKGROUND */}

//                 <span
//                   className="
//                     absolute inset-0 z-0
//                     origin-left scale-x-0
//                     transition-transform duration-300
//                     ease-out
//                     group-hover:scale-x-100
//                   "
//                   style={{ backgroundColor: YELLOW }}
//                 />

//                 {/* ICON */}

//                 <div
//                   className="
//                     relative z-10
//                     ml-[20px]
//                     flex h-[54.17px] w-[54.17px]
//                     shrink-0 items-center justify-center
//                     lg:ml-[33.58px]
//                   "
//                 >
//                   <img
//                     src={box.icon}
//                     alt=""
//                     className="
//                       block h-full w-full
//                       object-contain
//                       transition-transform duration-300
//                       group-hover:scale-105
//                     "
//                   />
//                 </div>

//                 {/* TEXT */}

//                 <div
//                   className="
//                     relative z-10
//                     ml-[20px] flex flex-col
//                     lg:ml-[26px]
//                   "
//                 >
//                   <span
//                     className="
//                       font-display
//                       text-[18px]
//                       font-medium
//                       leading-[23px]
//                       transition-colors duration-300
//                       group-hover:text-black
//                     "
//                     style={{ color: GREEN }}
//                   >
//                     {box.title}
//                   </span>

//                   <span
//                     className="
//                       font-display
//                       text-[18px]
//                       font-medium
//                       leading-[23px]
//                       transition-colors duration-300
//                       group-hover:text-black
//                     "
//                     style={{ color: GREEN }}
//                   >
//                     {box.sub}
//                   </span>
//                 </div>
//               </a>
//             ))}
//           </div>

//           {/* VIEW OUR PROGRAM */}

//           <a
//             href="/programs"
//             className="
//               flex h-[60.5px] w-fit
//               items-center justify-center
//               gap-[10px]
//               px-[32.5px] py-[16.25px]
//               font-body
//               text-[17.33px]
//               font-medium
//               leading-[27px]
//               text-white
//               transition-opacity duration-300
//               hover:opacity-90
//             "
//             style={{ backgroundColor: GREEN }}
//           >
//             <span>View Our Program</span>

//             <ArrowRight className="h-[27.08px] w-[15.19px]" strokeWidth={2} />
//           </a>
//         </div>
//       </div>

//       {/* =====================================================
//           ANIMATION
//       ====================================================== */}
//     </section>
//   );
// }

// Version 2 Sirat edit
// "use client";

// import { ArrowRight } from "lucide-react";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// export default function AboutSection() {
//   const aboutBoxes = [
//     {
//       title: "College Mission",
//       sub: "Statement",
//       icon: "/about3.png",
//       href: "/about/mission",
//     },
//     {
//       title: "College Vision",
//       sub: "Achievement",
//       icon: "/about4.png",
//       href: "/about/vision",
//     },
//   ];

//   return (
//     <section className="my-[64px] w-full bg-white">
//       {/* =====================================================
//           FIGMA FRAME
//           1440px × 617.56px
//       ====================================================== */}

//       <div
//         className="
//           mx-auto
//           flex
//           w-full
//           max-w-[1440px]
//           flex-col
//           items-center
//           gap-10
//           px-5
//           py-10

//           lg:h-[617.56px]
//           lg:flex-row
//           lg:items-center
//           lg:gap-[40px]
//           lg:px-0
//           lg:py-0
//         "
//       >
//         {/* =================================================
//             LEFT — IMAGE COMPOSITION
//             Figma: 700 × 617.56
//         ================================================== */}

//         <div
//           className="
//             relative
//             h-[520px]
//             w-full
//             shrink-0

//             lg:h-[617.56px]
//             lg:w-[700px]
//           "
//         >
//           {/* =================================================
//               LEFT IMAGE
//           ================================================== */}

//           <div
//             className="
//               absolute
//               left-0
//               top-[20px]
//               h-[480px]
//               w-[62%]
//               overflow-hidden

//               lg:top-[44.83px]
//               lg:h-[572.73px]
//               lg:w-[360.21px]
//             "
//           >
//             <img
//               src="/about1.jpg"
//               alt="Uttara Adhunik Medical College"
//               className="
//                 block
//                 h-full
//                 w-full
//                 object-cover
//                 object-center
//                 animate-about-zoom
//               "
//             />
//           </div>

//           {/* =================================================
//               RIGHT IMAGE
//           ================================================== */}

//           <div
//             className="
//               absolute
//               right-0
//               top-0
//               h-[480px]
//               w-[52%]
//               overflow-hidden
//               shadow-[0_3.33px_3.33px_rgba(0,0,0,0.25)]

//               lg:left-[397.43px]
//               lg:right-auto
//               lg:top-[22.42px]
//               lg:h-[572.73px]
//               lg:w-[302.57px]
//             "
//           >
//             <img
//               src="/about2.jpg"
//               alt="Uttara Adhunik Medical College"
//               className="
//                 block
//                 h-full
//                 w-full
//                 object-cover
//                 object-center
//                 animate-about-zoom
//               "
//             />
//           </div>

//           {/* =================================================
//               COLLEGE LOGO
//               Must remain above both images
//           ================================================== */}

//           <div
//             className="
//               absolute
//               left-[10%]
//               top-[110px]
//               z-20
//               flex
//               h-[230px]
//               w-[230px]
//               items-center
//               justify-center
//               overflow-hidden
//               rounded-full
//               p-[3px]

//               lg:left-[32%]
//               lg:top-[158px]
//               lg:h-[300.17px]
//               lg:w-[300.17px]
//             "
//           >
//             <img
//               src="/logo2.png"
//               alt="UAMC Logo"
//               className="
//                 block
//                 h-full
//                 w-full
//                 rounded-full
//                 object-cover
//               "
//             />
//           </div>
//         </div>

//         {/* =================================================
//             RIGHT — ABOUT CONTENT
//             Figma: 700px
//         ================================================== */}

//         <div
//           className="
//             flex
//             w-full
//             flex-col
//             gap-8

//             lg:h-[617.56px]
//             lg:w-[700px]
//             lg:shrink-0
//             lg:gap-[38px]
//           "
//         >
//           {/* =================================================
//               FRAME 55 — HEADING + DESCRIPTION
//           ================================================== */}

//           <div
//             className="
//               flex
//               flex-col
//               gap-[21.67px]

//               lg:w-[661.89px]
//             "
//           >
//             {/* =================================================
//                 FRAME 54 — EYEBROW + HEADING
//             ================================================== */}

//             <div
//               className="
//                 flex
//                 flex-col
//                 gap-[4.33px]
//               "
//             >
//               {/* =================================================
//                   KNOWLEDGE MEETS INNOVATION
//               ================================================== */}

//               <div className="flex h-[45.67px] w-fit items-center">
//                 <div
//                   className="
//                     flex
//                     h-[45.67px]
//                     w-[32.5px]
//                     shrink-0
//                     items-center
//                     justify-start
//                   "
//                 >
//                   <img
//                     src="/knowledge.png"
//                     alt=""
//                     className="
//                       block
//                       h-[23.36px]
//                       w-[32.5px]
//                       object-contain
//                       object-left
//                     "
//                   />
//                 </div>

//                 <span
//                   className="
//                     flex
//                     h-[45.67px]
//                     items-center
//                     px-[10.83px]
//                     font-body
//                     text-[19.5px]
//                     font-medium
//                     leading-[23px]
//                   "
//                   style={{ color: GREEN }}
//                 >
//                   knowledge meets innovation
//                 </span>
//               </div>

//               {/* =================================================
//                   MAIN HEADING
//               ================================================== */}

//               <div className="flex h-[84.67px] items-center">
//                 <h2
//                   className="
//                     whitespace-nowrap
//                     font-display
//                     text-[52px]
//                     font-light
//                     leading-[62px]
//                     text-[#262626]

//                     lg:text-[65px]
//                   "
//                 >
//                   About{" "}
//                   <span className="font-bold" style={{ color: GREEN }}>
//                     UAMC
//                   </span>
//                 </h2>
//               </div>
//             </div>

//             {/* =================================================
//                 DESCRIPTION
//             ================================================== */}

//             <div
//               className="
//                 flex
//                 flex-col
//                 gap-[27.08px]

//                 lg:w-[661.89px]
//               "
//             >
//               {/* First paragraph */}

//               <p
//                 className="
//                   m-0
//                   w-full
//                   font-body
//                   text-[16px]
//                   font-bold
//                   leading-[31px]
//                   text-[#737477]

//                   lg:text-[17.33px]
//                 "
//               >
//                 Uttara Adhunik Medical College (UAMC) is a prestigious medical
//                 institution located in Uttara Model Town, Dhaka, Bangladesh.
//                 Established in 2003.
//               </p>

//               {/* Second paragraph */}

//               <p
//                 className="
//                   m-0
//                   w-full
//                   font-body
//                   text-[16px]
//                   font-normal
//                   leading-[31px]
//                   text-[#737477]

//                   lg:text-[17.33px]
//                 "
//               >
//                 UAMC offers a Bachelor of Medicine and Bachelor of Surgery
//                 (MBBS) program, designed to equip students with the knowledge,
//                 skills, and hands-on clinical training needed to excel in the
//                 medical profession.
//               </p>
//             </div>
//           </div>

//           {/* =================================================
//               FRAME 53 — MISSION + VISION
//               700 × 97.05
//           ================================================== */}

//           <div
//             className="
//               flex
//               w-full
//               flex-col
//               gap-5

//               sm:flex-row

//               lg:h-[97.05px]
//               lg:w-[700px]
//               lg:gap-[21.67px]
//             "
//           >
//             {aboutBoxes.map((box) => (
//               <a
//                 key={box.title}
//                 href={box.href}
//                 className="
//                   group
//                   relative
//                   flex
//                   h-[97.05px]
//                   w-full
//                   shrink-0
//                   items-center
//                   overflow-hidden
//                   border
//                   border-dashed
//                   bg-white
//                   transition-all
//                   duration-300

//                   lg:w-[339.17px]
//                 "
//                 style={{ borderColor: GREEN }}
//               >
//                 {/* =================================================
//                     YELLOW HOVER BACKGROUND
//                 ================================================== */}

//                 <span
//                   className="
//                     absolute
//                     inset-0
//                     z-0
//                     origin-left
//                     scale-x-0
//                     transition-transform
//                     duration-300
//                     ease-out
//                     group-hover:scale-x-100
//                   "
//                   style={{ backgroundColor: YELLOW }}
//                 />

//                 {/* =================================================
//                     ICON
//                 ================================================== */}

//                 <div
//                   className="
//                     relative
//                     z-10
//                     ml-[20px]
//                     flex
//                     h-[54.17px]
//                     w-[54.17px]
//                     shrink-0
//                     items-center
//                     justify-center

//                     lg:ml-[33.58px]
//                   "
//                 >
//                   <img
//                     src={box.icon}
//                     alt=""
//                     className="
//                       block
//                       h-full
//                       w-full
//                       object-contain
//                       transition-transform
//                       duration-300
//                       group-hover:scale-105
//                     "
//                   />
//                 </div>

//                 {/* =================================================
//                     TEXT
//                 ================================================== */}

//                 <div
//                   className="
//                     relative
//                     z-10
//                     ml-[20px]
//                     flex
//                     flex-col

//                     lg:ml-[26px]
//                   "
//                 >
//                   <span
//                     className="
//                       font-display
//                       text-[18px]
//                       font-medium
//                       leading-[23px]
//                       transition-colors
//                       duration-300
//                       group-hover:text-black
//                     "
//                     style={{ color: GREEN }}
//                   >
//                     {box.title}
//                   </span>

//                   <span
//                     className="
//                       font-display
//                       text-[18px]
//                       font-medium
//                       leading-[23px]
//                       transition-colors
//                       duration-300
//                       group-hover:text-black
//                     "
//                     style={{ color: GREEN }}
//                   >
//                     {box.sub}
//                   </span>
//                 </div>
//               </a>
//             ))}
//           </div>

//           {/* =================================================
//               VIEW OUR PROGRAM
//           ================================================== */}

//           <a
//             href="/programs"
//             className="
//               flex
//               h-[60.5px]
//               w-fit
//               items-center
//               justify-center
//               gap-[10px]
//               px-[32.5px]
//               py-[16.25px]
//               font-body
//               text-[17.33px]
//               font-medium
//               leading-[27px]
//               text-white
//               transition-opacity
//               duration-300
//               hover:opacity-90
//             "
//             style={{ backgroundColor: GREEN }}
//           >
//             <span>View Our Program</span>

//             <ArrowRight className="h-[27.08px] w-[15.19px]" strokeWidth={2} />
//           </a>
//         </div>
//       </div>

//       {/* =====================================================
//           IMAGE ZOOM ANIMATION
//       ====================================================== */}

//       {/* <style jsx global>{`
//         @keyframes aboutZoom {
//           0% {
//             transform: scale(1);
//           }

//           50% {
//             transform: scale(1.08);
//           }

//           100% {
//             transform: scale(1);
//           }
//         }

//         .animate-about-zoom {
//           animation: aboutZoom 8s ease-in-out infinite;
//           transform-origin: center center;
//           will-change: transform;
//         }
//       `}</style> */}
//     </section>
//   );
// }

// Dynamic Version
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// async function getAboutData() {
//   const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API || "http://localhost:3000";

//   const res = await fetch(`${baseUrl}/api/homepage/about`, {
//     // Change/remove this depending on how frequently you want
//     // the homepage content to update.
//     next: {
//       revalidate: 60,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch about data");
//   }

//   const data = await res.json();

//   return data?.[0] || null;
// }

// export default async function AboutSection() {
//   const about = await getAboutData();

//   if (!about) {
//     return null;
//   }

//   /*
//    * The API currently returns one description string:
//    *
//    * "Uttara ... Established in 2003.UAMC offers ..."
//    *
//    * We split it so the existing two-paragraph design remains unchanged.
//    */
//   const description = about.description || "";

//   const establishedText = "Established in 2003.";

//   let firstParagraph = description;
//   let secondParagraph = "";

//   const establishedIndex = description.indexOf(establishedText);

//   if (establishedIndex !== -1) {
//     const firstEnd = establishedIndex + establishedText.length;

//     firstParagraph = description.slice(0, firstEnd).trim();
//     secondParagraph = description.slice(firstEnd).trim();
//   }

//   const aboutBoxes = [
//     {
//       title: "College Mission",
//       sub: "Statement",
//       icon: "/about3.png",
//       href: "/about/mission",
//     },
//     {
//       title: "College Vision",
//       sub: "Achievement",
//       icon: "/about4.png",
//       href: "/about/vision",
//     },
//   ];

//   return (
//     <section className="my-[64px] w-full bg-white">
//       <div
//         className="
//           mx-auto
//           flex
//           w-full
//           max-w-[1440px]
//           flex-col
//           items-center
//           gap-10
//           px-5
//           py-10

//           lg:h-[617.56px]
//           lg:flex-row
//           lg:items-center
//           lg:gap-[40px]
//           lg:px-0
//           lg:py-0
//         "
//       >
//         {/* =================================================
//             LEFT — IMAGE COMPOSITION
//         ================================================== */}

//         <div
//           className="
//             relative
//             h-[520px]
//             w-full
//             shrink-0

//             lg:h-[617.56px]
//             lg:w-[700px]
//           "
//         >
//           {/* LEFT IMAGE */}

//           <div
//             className="
//               absolute
//               left-0
//               top-[20px]
//               h-[480px]
//               w-[62%]
//               overflow-hidden

//               lg:top-[44.83px]
//               lg:h-[572.73px]
//               lg:w-[360.21px]
//             "
//           >
//             <Image
//               src={about.image1}
//               alt="Uttara Adhunik Medical College"
//               fill
//               priority
//               sizes="(max-width: 1024px) 62vw, 360px"
//               className="
//                 object-cover
//                 object-center
//               "
//             />
//           </div>

//           {/* RIGHT IMAGE */}

//           <div
//             className="
//               absolute
//               right-0
//               top-0
//               h-[480px]
//               w-[52%]
//               overflow-hidden
//               shadow-[0_3.33px_3.33px_rgba(0,0,0,0.25)]

//               lg:left-[397.43px]
//               lg:right-auto
//               lg:top-[22.42px]
//               lg:h-[572.73px]
//               lg:w-[302.57px]
//             "
//           >
//             <Image
//               src={about.image2}
//               alt="Uttara Adhunik Medical College"
//               fill
//               sizes="(max-width: 1024px) 52vw, 303px"
//               className="
//                 object-cover
//                 object-center
//               "
//             />
//           </div>

//           {/* COLLEGE LOGO */}

//           <div
//             className="
//               absolute
//               left-[10%]
//               top-[110px]
//               z-20
//               flex
//               h-[230px]
//               w-[230px]
//               items-center
//               justify-center
//               overflow-hidden
//               rounded-full
//               p-[3px]

//               lg:left-[32%]
//               lg:top-[158px]
//               lg:h-[300.17px]
//               lg:w-[300.17px]
//             "
//           >
//             <Image
//               src="/logo2.png"
//               alt="UAMC Logo"
//               width={301}
//               height={301}
//               className="
//                 block
//                 h-full
//                 w-full
//                 rounded-full
//                 object-cover
//               "
//             />
//           </div>
//         </div>

//         {/* =================================================
//             RIGHT — ABOUT CONTENT
//         ================================================== */}

//         <div
//           className="
//             flex
//             w-full
//             flex-col
//             gap-8

//             lg:h-[617.56px]
//             lg:w-[700px]
//             lg:shrink-0
//             lg:gap-[38px]
//           "
//         >
//           {/* HEADING + DESCRIPTION */}

//           <div
//             className="
//               flex
//               flex-col
//               gap-[21.67px]

//               lg:w-[661.89px]
//             "
//           >
//             {/* EYEBROW + HEADING */}

//             <div
//               className="
//                 flex
//                 flex-col
//                 gap-[4.33px]
//               "
//             >
//               {/* KNOWLEDGE MEETS INNOVATION */}

//               <div className="flex h-[45.67px] w-fit items-center">
//                 <div
//                   className="
//                     flex
//                     h-[45.67px]
//                     w-[32.5px]
//                     shrink-0
//                     items-center
//                     justify-start
//                   "
//                 >
//                   <Image
//                     src="/knowledge.png"
//                     alt=""
//                     width={33}
//                     height={24}
//                     className="
//                       block
//                       h-[23.36px]
//                       w-[32.5px]
//                       object-contain
//                       object-left
//                     "
//                   />
//                 </div>

//                 <span
//                   className="
//                     flex
//                     h-[45.67px]
//                     items-center
//                     px-[10.83px]
//                     font-body
//                     text-[19.5px]
//                     font-medium
//                     leading-[23px]
//                   "
//                   style={{ color: GREEN }}
//                 >
//                   {about.subtitle}
//                 </span>
//               </div>

//               {/* MAIN HEADING */}

//               <div className="flex h-[84.67px] items-center">
//                 <h2
//                   className="
//                     whitespace-nowrap
//                     font-display
//                     text-[52px]
//                     font-light
//                     leading-[62px]
//                     text-[#262626]

//                     lg:text-[65px]
//                   "
//                 >
//                   {about.title?.replace("UAMC", "").trim()}{" "}
//                   <span className="font-bold" style={{ color: GREEN }}>
//                     UAMC
//                   </span>
//                 </h2>
//               </div>
//             </div>

//             {/* DESCRIPTION */}

//             <div
//               className="
//                 flex
//                 flex-col
//                 gap-[27.08px]

//                 lg:w-[661.89px]
//               "
//             >
//               {/* First paragraph */}

//               <p
//                 className="
//                   m-0
//                   w-full
//                   font-body
//                   text-[16px]
//                   font-bold
//                   leading-[31px]
//                   text-[#737477]

//                   lg:text-[17.33px]
//                 "
//               >
//                 {firstParagraph}
//               </p>

//               {/* Second paragraph */}

//               {secondParagraph && (
//                 <p
//                   className="
//                     m-0
//                     w-full
//                     font-body
//                     text-[16px]
//                     font-normal
//                     leading-[31px]
//                     text-[#737477]

//                     lg:text-[17.33px]
//                   "
//                 >
//                   {secondParagraph}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* =================================================
//               MISSION + VISION
//           ================================================== */}

//           <div
//             className="
//               flex
//               w-full
//               flex-col
//               gap-5

//               sm:flex-row

//               lg:h-[97.05px]
//               lg:w-[700px]
//               lg:gap-[21.67px]
//             "
//           >
//             {aboutBoxes.map((box) => (
//               <a
//                 key={box.title}
//                 href={box.href}
//                 className="
//                   group
//                   relative
//                   flex
//                   h-[97.05px]
//                   w-full
//                   shrink-0
//                   items-center
//                   overflow-hidden
//                   border
//                   border-dashed
//                   bg-white
//                   transition-all
//                   duration-300

//                   lg:w-[339.17px]
//                 "
//                 style={{ borderColor: GREEN }}
//               >
//                 {/* YELLOW HOVER BACKGROUND */}

//                 <span
//                   className="
//                     absolute
//                     inset-0
//                     z-0
//                     origin-left
//                     scale-x-0
//                     transition-transform
//                     duration-300
//                     ease-out
//                     group-hover:scale-x-100
//                   "
//                   style={{ backgroundColor: YELLOW }}
//                 />

//                 {/* ICON */}

//                 <div
//                   className="
//                     relative
//                     z-10
//                     ml-[20px]
//                     flex
//                     h-[54.17px]
//                     w-[54.17px]
//                     shrink-0
//                     items-center
//                     justify-center

//                     lg:ml-[33.58px]
//                   "
//                 >
//                   <Image
//                     src={box.icon}
//                     alt=""
//                     width={55}
//                     height={55}
//                     className="
//                       block
//                       h-full
//                       w-full
//                       object-contain
//                       transition-transform
//                       duration-300
//                       group-hover:scale-105
//                     "
//                   />
//                 </div>

//                 {/* TEXT */}

//                 <div
//                   className="
//                     relative
//                     z-10
//                     ml-[20px]
//                     flex
//                     flex-col

//                     lg:ml-[26px]
//                   "
//                 >
//                   <span
//                     className="
//                       font-display
//                       text-[18px]
//                       font-medium
//                       leading-[23px]
//                       transition-colors
//                       duration-300
//                       group-hover:text-black
//                     "
//                     style={{ color: GREEN }}
//                   >
//                     {box.title}
//                   </span>

//                   <span
//                     className="
//                       font-display
//                       text-[18px]
//                       font-medium
//                       leading-[23px]
//                       transition-colors
//                       duration-300
//                       group-hover:text-black
//                     "
//                     style={{ color: GREEN }}
//                   >
//                     {box.sub}
//                   </span>
//                 </div>
//               </a>
//             ))}
//           </div>

//           {/* =================================================
//               CTA
//           ================================================== */}

//           <a
//             href={about.cta?.href || "/programs"}
//             className="
//               flex
//               h-[60.5px]
//               w-fit
//               items-center
//               justify-center
//               gap-[10px]
//               px-[32.5px]
//               py-[16.25px]
//               font-body
//               text-[17.33px]
//               font-medium
//               leading-[27px]
//               text-white
//               transition-opacity
//               duration-300
//               hover:opacity-90
//             "
//             style={{ backgroundColor: GREEN }}
//           >
//             <span>{about.cta?.text || "View Our Program"}</span>

//             <ArrowRight className="h-[27.08px] w-[15.19px]" strokeWidth={2} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version 2
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

async function getSiteLogo() {
  const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API || "http://localhost:3000";
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
  const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API || "http://localhost:3000";

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

  /*
   * Keep the original two-paragraph design.
   * The API currently returns both paragraphs as one string.
   */
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
      href: "/about/mission",
    },
    {
      title: "College Vision",
      sub: "Achievement",
      icon: "/about4.png",
      href: "/about/vision",
    },
  ];

  return (
    <section className="my-[64px] w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          gap-10
          px-5
          py-10

          lg:h-[617.56px]
          lg:flex-row
          lg:items-center
          lg:gap-[40px]
          lg:px-0
          lg:py-0
        "
      >
        {/* =================================================
            LEFT — IMAGE COMPOSITION
        ================================================== */}

        <div
          className="
            relative
            h-[520px]
            w-full
            shrink-0

            lg:h-[617.56px]
            lg:w-[700px]
          "
        >
          {/* =================================================
              LEFT IMAGE
          ================================================== */}

          <div
            className="
              absolute
              left-0
              top-[20px]
              h-[480px]
              w-[62%]
              overflow-hidden

              lg:top-[44.83px]
              lg:h-[572.73px]
              lg:w-[360.21px]
            "
          >
            <Image
              src={about.image1}
              alt="Uttara Adhunik Medical College"
              fill
              priority
              sizes="(max-width: 1024px) 62vw, 360px"
              className="
                block
                h-full
                w-full
                object-cover
                object-center
                animate-about-zoom
              "
            />
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <div
            className="
              absolute
              right-0
              top-0
              h-[480px]
              w-[52%]
              overflow-hidden
              shadow-[0_3.33px_3.33px_rgba(0,0,0,0.25)]

              lg:left-[397.43px]
              lg:right-auto
              lg:top-[22.42px]
              lg:h-[572.73px]
              lg:w-[302.57px]
            "
          >
            <Image
              src={about.image2}
              alt="Uttara Adhunik Medical College"
              fill
              sizes="(max-width: 1024px) 52vw, 303px"
              className="
                block
                h-full
                w-full
                object-cover
                object-center
                animate-about-zoom
              "
            />
          </div>

          {/* =================================================
              COLLEGE LOGO
          ================================================== */}

          <div
            className="
              absolute
              left-[10%]
              top-[110px]
              z-20
              flex
              h-[230px]
              w-[230px]
              items-center
              justify-center
              overflow-hidden
              rounded-full
              p-[3px]

              lg:left-[32%]
              lg:top-[158px]
              lg:h-[300.17px]
              lg:w-[300.17px]
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

        {/* =================================================
            RIGHT — ABOUT CONTENT
        ================================================== */}

        <div
          className="
            flex
            w-full
            flex-col
            gap-8

            lg:h-[617.56px]
            lg:w-[700px]
            lg:shrink-0
            lg:gap-[38px]
          "
        >
          {/* =================================================
              FRAME 55 — HEADING + DESCRIPTION
          ================================================== */}

          <div
            className="
              flex
              flex-col
              gap-[21.67px]

              lg:w-[661.89px]
            "
          >
            {/* =================================================
                FRAME 54 — EYEBROW + HEADING
            ================================================== */}

            <div
              className="
                flex
                flex-col
                gap-[4.33px]
              "
            >
              {/* =================================================
                  KNOWLEDGE MEETS INNOVATION
              ================================================== */}

              <div className="flex h-[45.67px] w-fit items-center">
                <div
                  className="
                    flex
                    h-[45.67px]
                    w-[32.5px]
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
                      h-[23.36px]
                      w-[32.5px]
                      object-contain
                      object-left
                    "
                  />
                </div>

                <span
                  className="
                    flex
                    h-[45.67px]
                    items-center
                    px-[10.83px]
                    font-body
                    text-[19.5px]
                    font-medium
                    leading-[23px]
                  "
                  style={{ color: GREEN }}
                >
                  {about.subtitle}
                </span>
              </div>

              {/* =================================================
                  MAIN HEADING
              ================================================== */}

              <div className="flex h-[84.67px] items-center">
                <h2
                  className="
                    whitespace-nowrap
                    font-display
                    text-[52px]
                    font-light
                    leading-[62px]
                    text-[#262626]

                    lg:text-[65px]
                  "
                >
                  About{" "}
                  <span className="font-bold" style={{ color: GREEN }}>
                    UAMC
                  </span>
                </h2>
              </div>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <div
              className="
                flex
                flex-col
                gap-[27.08px]

                lg:w-[661.89px]
              "
            >
              {/* First paragraph */}

              <p
                className="
                  m-0
                  w-full
                  font-body
                  text-[16px]
                  font-bold
                  leading-[31px]
                  text-[#737477]

                  lg:text-[17.33px]
                "
              >
                {firstParagraph}
              </p>

              {/* Second paragraph */}

              {secondParagraph && (
                <p
                  className="
                    m-0
                    w-full
                    font-body
                    text-[16px]
                    font-normal
                    leading-[31px]
                    text-[#737477]

                    lg:text-[17.33px]
                  "
                >
                  {secondParagraph}
                </p>
              )}
            </div>
          </div>

          {/* =================================================
              FRAME 53 — MISSION + VISION
          ================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-5

              sm:flex-row

              lg:h-[97.05px]
              lg:w-[700px]
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
                  h-[97.05px]
                  w-full
                  shrink-0
                  items-center
                  overflow-hidden
                  border
                  border-dashed
                  bg-white
                  transition-all
                  duration-300

                  lg:w-[339.17px]
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
                    ml-[20px]
                    flex
                    h-[54.17px]
                    w-[54.17px]
                    shrink-0
                    items-center
                    justify-center

                    lg:ml-[33.58px]
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
                    ml-[20px]
                    flex
                    flex-col

                    lg:ml-[26px]
                  "
                >
                  <span
                    className="
                      font-display
                      text-[18px]
                      font-medium
                      leading-[23px]
                      transition-colors
                      duration-300
                      group-hover:text-black
                    "
                    style={{ color: GREEN }}
                  >
                    {box.title}
                  </span>

                  <span
                    className="
                      font-display
                      text-[18px]
                      font-medium
                      leading-[23px]
                      transition-colors
                      duration-300
                      group-hover:text-black
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
            href={about.cta?.href || "/programs"}
            className="
              flex
              h-[60.5px]
              w-fit
              items-center
              justify-center
              gap-[10px]
              px-[32.5px]
              py-[16.25px]
              font-body
              text-[17.33px]
              font-medium
              leading-[27px]
              text-white
              transition-opacity
              duration-300
              hover:opacity-90
            "
            style={{ backgroundColor: GREEN }}
          >
            <span>{about.cta?.text || "View Our Program"}</span>

            <ArrowRight className="h-[27.08px] w-[15.19px]" strokeWidth={2} />
          </a>
        </div>
      </div>

      {/* =====================================================
          IMAGE ZOOM ANIMATION
      ====================================================== */}
    </section>
  );
}
