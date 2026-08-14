"use client";

import React, { useState } from "react";
import Hero from "@/components/NoticeAndMedia/Hero";
import News from "@/components/NoticeAndMedia/News";
import Notice from "@/components/NoticeAndMedia/Notice";
import Publication from "@/components/NoticeAndMedia/Publication";
import Alumni from "@/components/NoticeAndMedia/Alumni";
import Gallery from "@/components/NoticeAndMedia/Gallery";

/* ------------------------------------------------------------------ */
/* Top utility bar                                                     */
/* ------------------------------------------------------------------ */
// function TopBar() {
//   return (
//     <div className="w-full bg-[#FCFBFB] border-b border-dashed border-black/20 hidden md:block">
//       <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-2.5 text-[12px] font-medium text-black/50">
//         <div className="flex items-center gap-5">
//           <span className="flex items-center gap-2">
//             <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
//               <path d="M12 21s-7-6.1-7-11a7 7 0 1114 0c0 4.9-7 11-7 11z" />
//               <circle cx="12" cy="10" r="2.5" />
//             </svg>
//             House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model Town
//           </span>
//           <span className="flex items-center gap-2">
//             <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
//               <rect x="3" y="5" width="18" height="14" rx="2" />
//               <path d="M3 7l9 6 9-6" />
//             </svg>
//             info@uamc.com
//           </span>
//           <span className="flex items-center gap-2">
//             <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
//               <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2z" />
//             </svg>
//             +880 1700-220000
//           </span>
//         </div>
//         <div className="flex items-center gap-4">
//           <span>Student Portal</span>
//           <span>Teachers Portal</span>
//           <span>Alumni</span>
//           <span>Events</span>
//           <span>Contact Us</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ------------------------------------------------------------------ */
// /* Main navigation                                                     */
// /* ------------------------------------------------------------------ */
// function Navbar() {
//   const links = ["HOME", "ABOUT UAMC", "FACILITIES", "ADMISSION", "NOTICE & MEDIA", "CAREER"];
//   return (
//     <header className="w-full bg-white sticky top-0 z-30 shadow-sm">
//       <TopBar />
//       <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-4">
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 rounded-full bg-[#018837] text-white flex items-center justify-center font-bold text-lg shrink-0">
//             U
//           </div>
//           <span className="font-serif font-bold text-[19px] leading-tight text-black">
//             Uttara Adhunik
//             <br />
//             Medical College (UAMC)
//           </span>
//         </div>

//         <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase">
//           {links.map((l) => (
//             <span
//               key={l}
//               className={
//                 l === "NOTICE & MEDIA"
//                   ? "text-[#018837] border-b-2 border-[#018837] pb-4 -mb-4 cursor-pointer"
//                   : "text-black/80 hover:text-[#018837] cursor-pointer transition-colors"
//               }
//             >
//               {l}
//             </span>
//           ))}
//         </nav>

//         <div className="flex items-center gap-4 text-black/70">
//           <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <circle cx="11" cy="11" r="7" />
//             <path d="M21 21l-4.3-4.3" />
//           </svg>
//           <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path d="M4 6h16M4 12h10M4 18h16" />
//           </svg>
//         </div>
//       </div>
//     </header>
//   );
// }

/* ------------------------------------------------------------------ */
/* Hero / page banner                                                  */
/* ------------------------------------------------------------------ */
// function HeroBanner() {
//   return (
//     <section className="relative w-full bg-gradient-to-br from-[#DCEEE1] to-[#EAF5EC] overflow-hidden">
//       <div className="max-w-[1440px] mx-auto px-8 py-14 relative">
//         <div className="relative bg-[#018837]/10 backdrop-blur-sm px-10 py-10 flex items-end justify-between flex-wrap gap-6">
//           <div>
//             <p className="text-[16px] font-medium text-black flex items-center gap-1">
//               HOME <span className="text-black/50">›</span> Notice &amp; Media
//             </p>
//             <h1 className="font-serif font-light text-[44px] md:text-[64px] leading-none text-[#262626] mt-2">
//               Notice <span className="font-bold text-[#018837]">UAMC</span>
//             </h1>
//           </div>
//           <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#018837] text-white flex items-center justify-center font-bold text-2xl shrink-0">
//             UAMC
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/* News section                                                        */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Reusable tabbed list block (used for Notice Board & Publication)    */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Alumni event                                                        */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Event gallery                                                       */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */
// function FooterColumn({ title, items }) {
//   return (
//     <div className="flex flex-col gap-1">
//       <h5 className="text-white text-[18px] font-medium underline underline-offset-4 mb-3">
//         {title}
//       </h5>
//       {items.map((it) => (
//         <span
//           key={it}
//           className="text-[#737477] text-[15px] py-2 hover:text-white transition-colors cursor-pointer"
//         >
//           {it}
//         </span>
//       ))}
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <footer className="w-full bg-black text-white px-8 pt-12 pb-8">
//       <div className="max-w-[1290px] mx-auto">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#242424]">
//           <h3 className="text-[26px] font-normal">Subscribe To Newsletter</h3>
//           <form className="w-full md:w-auto flex">
//             <input
//               type="email"
//               placeholder="Enter Your mail"
//               className="bg-transparent border border-[#018837] px-5 py-4 text-[14px] text-white placeholder:text-white/70 outline-none w-full md:w-[280px]"
//             />
//             <button
//               type="submit"
//               className="bg-white text-[#110C2D] font-medium text-[14px] px-8 py-4 shrink-0 flex items-center gap-1"
//             >
//               Submit Button ↗
//             </button>
//           </form>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
//           <div className="flex flex-col gap-4">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-full bg-[#018837] flex items-center justify-center font-bold text-sm">
//                 U
//               </div>
//               <span className="font-serif font-bold text-[16px] leading-tight">
//                 Uttara Adhunik
//                 <br />
//                 Medical College (UAMC)
//               </span>
//             </div>
//             <p className="text-[#737477] text-[15px] leading-relaxed">
//               We are passionate education dedicated to providing high-quality
//               resources learners all backgrounds.
//             </p>
//             <span className="text-[#737477] text-[15px] flex items-center gap-2">
//               📞 +880 1700-220000
//             </span>
//           </div>

//           <FooterColumn
//             title="Our Campus"
//             items={[
//               "Academic",
//               "Athletics",
//               "Tuition Fee",
//               "Research",
//               "Academic Area",
//             ]}
//           />
//           <FooterColumn
//             title="Our Pages"
//             items={["About", "Facility", "Alumni", "Faculty Staff", "Event"]}
//           />

//           <div className="flex flex-col gap-5">
//             <h5 className="text-white text-[18px] font-medium underline underline-offset-4">
//               Recent Posts
//             </h5>
//             <div className="flex gap-3 items-center">
//               <div
//                 className="w-[64px] h-[64px] shrink-0"
//                 style={{
//                   background: "linear-gradient(135deg,#8FBF9F,#3F7B54)",
//                 }}
//               />
//               <div>
//                 <span className="text-[#737477] text-[13px] flex items-center gap-1">
//                   📅 August 6, 2024
//                 </span>
//                 <p className="text-white text-[14px]">
//                   Those Inequalities Are Inequalities That
//                 </p>
//               </div>
//             </div>
//             <div className="flex gap-3 items-center">
//               <div
//                 className="w-[64px] h-[64px] shrink-0"
//                 style={{
//                   background: "linear-gradient(135deg,#9AB8CF,#4C6E8C)",
//                 }}
//               />
//               <div>
//                 <span className="text-[#737477] text-[13px] flex items-center gap-1">
//                   📅 July 4, 2024
//                 </span>
//                 <p className="text-white text-[14px]">
//                   After Decades Of Improvement, Cardiovascular
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="pt-8 border-t border-[#242424] text-center text-[#737477] text-[14px]">
//           Copyright @ 2024. All Rights Reserved by{" "}
//           <span className="text-white">Uniplx</span>
//         </div>
//       </div>
//     </footer>
//   );
// }

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function News() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Navbar /> */}
      <Hero />
      <News />
      <Notice />
      <Publication />
      <Alumni />
      <Gallery />
      {/* <Footer /> */}
    </div>
  );
}
