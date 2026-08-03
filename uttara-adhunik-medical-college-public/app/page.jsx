"use client";

import React, { useState } from "react";
import {
  Search,
  Clock,
  ArrowRight,
  Star,

  // Facebook,
  // Youtube,
  // Linkedin,
  // Instagram,
  // X,
} from "lucide-react";

import Hero from "@/components/homepage/Hero";
import NoticeAndPublication from "@/components/homepage/NoticeAndPublication";
import AboutUAMC from "@/components/homepage/AboutUAMC";
import StatStrip from "@/components/homepage/StatStrip";
import FindDepartment from "@/components/homepage/FindDepartment";
import AdmissionCTA from "@/components/homepage/AdmissionCTA";
import OurFacilities from "@/components/homepage/OurFacilities";
import PrincipalMessage from "@/components/homepage/PrincipalMessage";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500;700&family=Inter:wght@400;500;600;700&display=swap');
  .font-display { font-family: 'Bitter', serif; }
  .font-body { font-family: 'Inter', sans-serif; }
`;

/* A neutral placeholder "photo" block — used everywhere a real photo
   would sit in the Figma file, so the layout stays accurate without
   pulling in copyrighted imagery. */
function PhotoPlaceholder({ label, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a3d1f] to-[#018837] ${className}`}
    >
      <span className="font-body text-[11px] uppercase tracking-widest text-white/60 text-center px-4">
        {label}
      </span>
    </div>
  );
}

// function Hero() {
//   const slides = ["01", "02", "03", "04", "05"];
//   return (
//     <section
//       id="home"
//       className="relative flex flex-col justify-end px-6 md:px-20 py-10 md:py-14 text-white"
//       style={{
//         backgroundImage:
//           "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(1,136,55,0.75) 100%)",
//       }}
//     >
//       <PhotoPlaceholder
//         label="Doctors in the hospital corridor"
//         className="absolute inset-0 -z-10"
//       />

//       {/* slide counter */}
//       <div className="mx-auto mb-10 flex items-center gap-8 font-display text-xs font-bold uppercase tracking-widest">
//         <span>Prev</span>
//         <div className="flex items-center gap-4">
//           {slides.map((s, i) => (
//             <span key={s} className="flex items-center gap-4">
//               <span
//                 className={i === slides.length - 1 ? "" : "opacity-70"}
//                 style={i === slides.length - 1 ? { color: YELLOW } : {}}
//               >
//                 {s}
//               </span>
//               {i < slides.length - 1 && (
//                 <span className="h-4 w-px bg-white/40" />
//               )}
//             </span>
//           ))}
//         </div>
//         <span>Next</span>
//       </div>

//       <div className="mx-auto flex w-full max-w-6xl flex-col md:flex-row items-end justify-between gap-10 rounded-sm bg-black/10 p-6 md:p-10 backdrop-blur-sm">
//         <div className="flex flex-col gap-6 max-w-xl">
//           <span className="inline-flex items-center gap-2 border-l-2 border-white pl-3 font-body text-sm">
//             Shaping the Future of Healthcare, One Student at a Time
//           </span>
//           <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
//             Excellence in Medical Education,{" "}
//             <span style={{ color: YELLOW }}>Innovation</span> in Healthcare
//           </h1>
//           <button
//             className="flex w-fit items-center gap-2 bg-white px-6 py-3 font-body text-sm font-medium"
//             style={{ color: GREEN }}
//           >
//             View Our Program
//             <ArrowRight className="h-4 w-4" strokeWidth={2} />
//           </button>
//         </div>

//         <div className="flex flex-col gap-4">
//           <h3
//             className="font-display text-2xl font-bold"
//             style={{ color: YELLOW }}
//           >
//             MBBS Degrees
//           </h3>
//           {["Bachelor of Medicine", "Bachelor of Surgery"].map((item) => (
//             <a
//               key={item}
//               href="#"
//               className="flex items-center justify-between gap-6 border-b border-white/40 pb-2 font-body text-sm"
//             >
//               {item}
//               <ArrowRight className="h-4 w-4" strokeWidth={2} />
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/*  3. Notice board + Publication (tabbed lists)                      */
/* ------------------------------------------------------------------ */
// const noticeSample = Array.from({ length: 6 }).map((_, i) => ({
//   day: "12",
//   month: "Mar 25",
//   time: "3.40 PM",
//   title:
//     '"BCPS e-Logbook: Modernizing the Monitoring of FCPS 1st Phase Training"',
// }));

// function TabbedList({ eyebrow, title, tabs, items }) {
//   const [active, setActive] = useState(0);
//   return (
//     <div className="flex w-full flex-col gap-6">
//       <div className="flex items-end justify-between px-2">
//         <h2
//           className="font-display text-3xl md:text-4xl font-bold"
//           style={{ color: GREEN }}
//         >
//           {title}
//         </h2>
//         <a
//           href="#"
//           className="flex items-center gap-1 font-body text-sm font-medium"
//           style={{ color: GREEN }}
//         >
//           View All <ArrowRight className="h-4 w-4 -rotate-45" strokeWidth={2} />
//         </a>
//       </div>

//       <div className="flex flex-col">
//         {/* tab bar */}
//         <div className="flex items-center gap-1 bg-[#E8E8F4] p-2">
//           {tabs.map((tab, i) => (
//             <button
//               key={tab}
//               onClick={() => setActive(i)}
//               className={`flex-1 py-4 font-display text-sm font-bold uppercase tracking-wide ${
//                 i === active ? "bg-white shadow-sm" : "text-black font-normal"
//               }`}
//               style={
//                 i === active
//                   ? { color: GREEN, borderBottom: `2px solid ${GREEN}` }
//                   : {}
//               }
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* list */}
//         <div className="flex max-h-[610px] flex-col gap-2.5 overflow-y-auto bg-white p-2.5">
//           {items.map((item, i) => (
//             <div key={i} className="flex items-center gap-4 bg-[#E8E8F4] p-5">
//               <div className="flex w-[90px] shrink-0 flex-col text-center">
//                 <div className="bg-[#E8E8F4] py-1.5 font-body text-2xl font-bold text-[#444444]">
//                   {item.day}
//                 </div>
//                 <div
//                   className="py-1.5 font-body text-base font-semibold text-white"
//                   style={{ backgroundColor: GREEN }}
//                 >
//                   {item.month}
//                 </div>
//               </div>
//               <div className="flex flex-1 flex-col gap-3">
//                 <p className="font-body text-base font-medium text-[#444444]">
//                   {item.title}
//                 </p>
//                 <span className="flex items-center gap-2 font-body text-sm font-semibold text-[#444444]">
//                   <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />
//                   {item.time}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function NoticeAndPublication() {
//   return (
//     <section className="flex flex-col lg:flex-row items-start justify-center gap-10 px-6 md:px-20 py-16">
//       <TabbedList
//         title="Notice Board"
//         tabs={["General Notice", "Admission Notice", "Reports", "Job Circular"]}
//         items={noticeSample}
//       />
//       <TabbedList
//         title="Publication"
//         tabs={["Journal", "Tenders"]}
//         items={noticeSample}
//       />
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/*  4. About UAMC                                                     */
/* ------------------------------------------------------------------ */
// function AboutUAMC() {
//   return (
//     <section className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 md:px-20 py-16 md:py-24">
//       <div className="relative w-full max-w-[500px] h-[420px] shrink-0">
//         <PhotoPlaceholder
//           label="Campus building"
//           className="absolute left-0 top-6 h-[90%] w-[52%]"
//         />
//         <PhotoPlaceholder
//           label="Lecture hall"
//           className="absolute right-0 top-0 h-[90%] w-[42%] shadow-lg"
//         />
//         <div
//           className="absolute left-[32%] top-[38%] flex h-32 w-32 items-center justify-center rounded-full text-white text-center font-display text-xs font-bold shadow-xl"
//           style={{ backgroundColor: GREEN }}
//         >
//           UAMC
//           <br />
//           Est. 2003
//         </div>
//       </div>

//       <div className="flex w-full max-w-xl flex-col gap-8">
//         <div className="flex flex-col gap-3">
//           <span
//             className="flex items-center gap-2 font-body text-lg font-medium"
//             style={{ color: GREEN }}
//           >
//             <span className="h-6 w-8" style={{ backgroundColor: GREEN }} />
//             knowledge meets innovation
//           </span>
//           <h2 className="font-display text-5xl font-light text-[#262626]">
//             About{" "}
//             <span className="font-bold" style={{ color: GREEN }}>
//               UAMC
//             </span>
//           </h2>
//         </div>

//         <p className="font-body text-lg leading-relaxed text-[#737477]">
//           <strong className="text-[#444444]">
//             Uttara Adhunik Medical College (UAMC) is a prestigious medical
//             institution located in Uttara Model Town, Dhaka, Bangladesh.
//             Established in 2003.
//           </strong>
//         </p>
//         <p className="font-body text-lg leading-relaxed text-[#737477]">
//           UAMC offers a Bachelor of Medicine and Bachelor of Surgery (MBBS)
//           program, designed to equip students with the knowledge, skills, and
//           hands-on clinical training needed to excel in the medical profession.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-5">
//           {[
//             { title: "College Mission", sub: "Statement" },
//             { title: "College Vision", sub: "Achievement" },
//           ].map((box) => (
//             <div
//               key={box.title}
//               className="flex flex-1 items-center gap-4 border border-dashed p-5"
//               style={{ borderColor: GREEN }}
//             >
//               <div
//                 className="h-10 w-10 shrink-0 rounded-full"
//                 style={{ backgroundColor: GREEN }}
//               />
//               <div>
//                 <p
//                   className="font-display text-lg font-medium"
//                   style={{ color: GREEN }}
//                 >
//                   {box.title}
//                 </p>
//                 <p
//                   className="font-display text-lg font-medium"
//                   style={{ color: GREEN }}
//                 >
//                   {box.sub}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           className="flex w-fit items-center gap-2 px-8 py-4 font-body font-medium text-white"
//           style={{ backgroundColor: GREEN }}
//         >
//           View Our Program <ArrowRight className="h-4 w-4" strokeWidth={2} />
//         </button>
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/*  5. Stat strip                                                     */
/* ------------------------------------------------------------------ */
// function StatStrip() {
//   const stats = [
//     { value: "90%", label: "Post-Graduation Success Rate" },
//     { value: "Top 10", label: "Colleges That Create Futures" },
//     { value: "No. 1", label: "In The Nation For Materials R&D" },
//   ];
//   return (
//     <section
//       className="flex items-center justify-center px-6 md:px-24 py-14"
//       style={{
//         backgroundImage:
//           "linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), linear-gradient(135deg, #0a3d1f, #018837)",
//       }}
//     >
//       <div
//         className="flex w-full max-w-5xl flex-col sm:flex-row items-center justify-center gap-10 sm:gap-0 p-10"
//         style={{
//           backgroundColor: "rgba(1,136,55,0.5)",
//           backdropFilter: "blur(5px)",
//         }}
//       >
//         {stats.map((s, i) => (
//           <div key={s.label} className="flex items-center gap-10">
//             <div className="flex flex-col items-center gap-3 text-center w-36">
//               <span className="font-display text-4xl text-white">
//                 {s.value}
//               </span>
//               <span
//                 className="font-display text-lg font-bold"
//                 style={{ color: YELLOW }}
//               >
//                 {s.label}
//               </span>
//             </div>
//             {i < stats.length - 1 && (
//               <span className="hidden sm:block h-24 w-px bg-white/40" />
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/*  6. Find Your Department                                           */
/* ------------------------------------------------------------------ */
// function FindDepartment() {
//   return (
//     <section className="flex flex-col lg:flex-row items-center gap-12 px-6 md:px-20 py-16 md:py-24 bg-gradient-to-b from-white to-[#f7f7f7]">
//       <div className="flex w-full max-w-2xl flex-col gap-8">
//         <div>
//           <h2
//             className="font-display text-4xl font-bold"
//             style={{ color: GREEN }}
//           >
//             Find Your Department
//           </h2>
//           <p className="mt-3 font-body text-sm leading-relaxed text-[#737477]">
//             Use the search bar below to explore our comprehensive MBBS program
//             and discover the perfect path to kickstart your medical career. Join
//             UAMC and embark on a journey of academic excellence, hands-on
//             clinical training, and cutting-edge medical research!
//           </p>
//         </div>

//         <div className="flex flex-col gap-3">
//           <div className="flex items-center gap-3 bg-[#E8E8F4] px-5 py-4">
//             <Search
//               className="h-5 w-5 shrink-0"
//               style={{ color: GREEN }}
//               strokeWidth={2}
//             />
//             <input
//               placeholder='Find your program like "Department of Physiology"'
//               className="w-full bg-transparent font-body text-sm text-[#9191A6] outline-none placeholder:text-[#9191A6]"
//             />
//           </div>
//           <p
//             className="font-body text-sm font-bold"
//             style={{ color: "rgba(1,136,55,0.7)" }}
//           >
//             Popular Search: Department of Microbiology &nbsp; Department of
//             Community Medicine &nbsp; Department of Pathology
//           </p>
//         </div>

//         <div
//           className="flex flex-col sm:flex-row items-center justify-between gap-5 p-5"
//           style={{
//             backgroundColor: "rgba(1,136,55,0.1)",
//             border: `1px dashed ${GREEN}`,
//           }}
//         >
//           <div className="flex items-center gap-4">
//             <PhotoPlaceholder
//               label="Microbiology"
//               className="h-20 w-28 shrink-0"
//             />
//             <div className="flex flex-col gap-2">
//               <span
//                 className="w-fit px-3 py-1 font-body text-xs font-semibold"
//                 style={{ backgroundColor: YELLOW }}
//               >
//                 Popular Program
//               </span>
//               <p
//                 className="font-body text-lg font-bold"
//                 style={{ color: GREEN }}
//               >
//                 Department of Microbiology
//               </p>
//             </div>
//           </div>
//           <div
//             className="flex h-14 w-14 items-center justify-center rounded-sm"
//             style={{ backgroundColor: GREEN }}
//           >
//             <ArrowRight
//               className="h-5 w-5"
//               style={{ color: YELLOW }}
//               strokeWidth={2}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="relative w-full max-w-xl h-[420px]">
//         <PhotoPlaceholder
//           label="Doctor consulting patient"
//           className="absolute left-0 top-0 h-3/5 w-1/2"
//         />
//         <PhotoPlaceholder
//           label="Nurse checking X-ray results"
//           className="absolute right-0 top-0 h-full w-[55%]"
//         />
//         <div
//           className="absolute left-0 bottom-0 flex items-center gap-4 p-6"
//           style={{
//             backgroundColor: "rgba(1,136,55,0.55)",
//             backdropFilter: "blur(5px)",
//           }}
//         >
//           <span className="font-display text-4xl font-bold text-white">
//             28+
//           </span>
//           <span className="font-body text-sm text-white max-w-[140px]">
//             Departments Available For Student
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/*  7. Admission CTA banner                                           */
/* ------------------------------------------------------------------ */
// function AdmissionCTA() {
//   return (
//     <section
//       className="flex justify-center px-6 md:px-20 py-14"
//       style={{
//         backgroundImage:
//           "linear-gradient(0deg, rgba(1,136,55,0.55), rgba(1,136,55,0.55)), linear-gradient(135deg,#062b16,#0a3d1f)",
//       }}
//     >
//       <div
//         className="flex w-full max-w-6xl flex-col items-center gap-8 py-12 px-6 text-center"
//         style={{
//           backgroundColor: "rgba(0,0,0,0.12)",
//           backdropFilter: "blur(10px)",
//         }}
//       >
//         <h2
//           className="font-display text-4xl md:text-6xl font-bold tracking-wide"
//           style={{ color: YELLOW }}
//         >
//           UAMC Admission
//         </h2>
//         <p className="max-w-4xl font-body text-white/90">
//           Uttara Adhunik Medical College (UAMC) was established in 2003 with a
//           vision to provide quality medical education and healthcare services.
//           Founded through the dedicated efforts of medical professionals and
//           social leaders, UAMC is committed to training future doctors while
//           ensuring affordable healthcare for the community.
//         </p>
//         <button
//           className="px-10 py-4 font-body font-medium text-white"
//           style={{ backgroundColor: GREEN }}
//         >
//           Learn More →
//         </button>
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/*  8. Facilities                                                     */
/* ------------------------------------------------------------------ */
// function OurFacilities() {
//   const items = [
//     "Hostel",
//     "Laboratory",
//     "Hospital Service",
//     "Cafeteria",
//     "Training",
//     "Medical Education Unit",
//     "Departments",
//     "Publications",
//     "Seminar",
//   ];
//   const [active, setActive] = useState(0);

//   return (
//     <section className="flex flex-col gap-10 py-16">
//       <div className="flex flex-col items-center gap-2 bg-[#FAF6F6] py-10">
//         <span
//           className="flex items-center gap-2 font-body text-lg font-medium"
//           style={{ color: GREEN }}
//         >
//           <span className="h-6 w-8" style={{ backgroundColor: GREEN }} />{" "}
//           knowledge meets innovation
//         </span>
//         <h2 className="font-display text-4xl md:text-6xl font-bold text-black">
//           Our Facilities
//         </h2>
//       </div>

//       <div className="flex flex-col lg:flex-row justify-center gap-6 bg-[#FAF6F6] px-6 md:px-20 pb-16">
//         <div className="flex w-full max-w-xs flex-col gap-2">
//           {items.map((item, i) => (
//             <button
//               key={item}
//               onClick={() => setActive(i)}
//               className={`flex items-center justify-between px-5 py-4 font-display text-base font-bold ${
//                 i === active ? "text-white" : "bg-white text-black"
//               }`}
//               style={i === active ? { backgroundColor: GREEN } : {}}
//             >
//               {item}
//               <ArrowRight
//                 className="h-4 w-4"
//                 style={{ color: YELLOW }}
//                 strokeWidth={2}
//               />
//             </button>
//           ))}
//         </div>

//         <div className="flex w-full max-w-3xl flex-col md:flex-row items-center gap-8 bg-white p-6">
//           <PhotoPlaceholder
//             label="Hostel building"
//             className="h-[340px] w-full md:w-[45%] shrink-0"
//           />
//           <div className="flex flex-col gap-6">
//             <h3
//               className="font-display text-3xl font-bold"
//               style={{ color: GREEN }}
//             >
//               Hostel Facilities
//             </h3>
//             <div>
//               <p className="font-display text-lg font-medium text-[#4A4A4A]">
//                 Ladies hostel:
//               </p>
//               <p className="font-body text-lg text-[#4A4A4A]">
//                 Hostel accommodations for female students are available with
//                 limited number of seats.
//               </p>
//             </div>
//             <a
//               href="#"
//               className="w-fit border-b border-[#0094D3] font-body text-sm font-semibold text-[#0094D3]"
//             >
//               View Details →
//             </a>
//             <button
//               className="flex w-fit items-center gap-2 px-8 py-4 font-body font-medium text-white"
//               style={{ backgroundColor: GREEN }}
//             >
//               View Our Program{" "}
//               <ArrowRight className="h-4 w-4" strokeWidth={2} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/*  9. Principal message                                              */
/* ------------------------------------------------------------------ */
// function PrincipalMessage() {
//   return (
//     <section
//       className="flex flex-col items-center gap-10 px-6 md:px-20 py-16 md:py-24"
//       style={{ backgroundColor: "rgba(1,136,55,0.1)" }}
//     >
//       <span
//         className="flex items-center gap-2 font-body text-lg font-medium"
//         style={{ color: GREEN }}
//       >
//         <span className="h-6 w-8" style={{ backgroundColor: GREEN }} />{" "}
//         knowledge meets innovation
//       </span>
//       <h2 className="font-display text-4xl md:text-6xl font-bold text-center text-black">
//         Message from the <span style={{ color: YELLOW }}>Principal</span>
//       </h2>

//       <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-6xl">
//         <div className="flex flex-col gap-7 flex-1">
//           <div className="flex flex-col gap-1">
//             <p className="font-display text-2xl font-bold tracking-wide text-black">
//               Honorable
//             </p>
//             <p
//               className="font-display text-3xl font-bold tracking-wide"
//               style={{ color: GREEN }}
//             >
//               Prof. Dr. Mohammad Mohibur Rahman
//             </p>
//             <p className="font-display text-5xl font-bold tracking-wide text-[#444444]">
//               Principal{" "}
//               <span className="text-2xl align-middle">(In Charge)</span>
//             </p>
//           </div>

//           <div className="flex flex-col gap-5">
//             <h4 className="font-body text-xl font-bold text-[#444444]">
//               Ensuring Quality Healthcare &amp; Medical Education
//             </h4>
//             <p className="font-body text-sm text-justify text-[#444444]">
//               Bangladesh faces significant challenges in delivering healthcare
//               nationwide. To support government efforts, Uttara Adhunik Medical
//               College Hospital (UAMCH) has been providing comprehensive health
//               services since 2003, evolving into a tertiary-level
//               multidisciplinary hospital.
//             </p>
//             <button
//               className="flex w-fit items-center gap-2 px-8 py-4 font-body font-medium text-white"
//               style={{ backgroundColor: GREEN }}
//             >
//               Read More <ArrowRight className="h-4 w-4" strokeWidth={2} />
//             </button>
//           </div>
//         </div>

//         <PhotoPlaceholder
//           label="Portrait of the Principal"
//           className="w-full lg:w-[45%] h-[420px] shrink-0"
//         />
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/*  10. Campus life                                                   */
/* ------------------------------------------------------------------ */
function CampusLife() {
  const items = ["Student Life", "Arts & Culture", "Recreation & Wellness"];
  return (
    <section
      className="flex flex-col items-center gap-16 px-6 md:px-20 py-20"
      style={{ backgroundColor: GREEN }}
    >
      <div className="flex flex-col items-center gap-4 text-center max-w-xl">
        <p className="font-body text-white/90">
          Building a vibrant community of creative and accomplished people from
          around the world
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-white text-right w-full">
          Campus Life
        </h2>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-3 gap-9">
        {items.map((item) => (
          <div key={item} className="flex flex-col gap-8">
            <PhotoPlaceholder label={item} className="h-[300px] w-full" />
            <a
              href="#"
              className="flex items-center gap-3 font-display text-xl text-white"
            >
              {item} ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  11. Alumni events                                                 */
/* ------------------------------------------------------------------ */
function AlumniEvents() {
  const events = [
    {
      num: "01",
      title: "Bridging Cultures: Global Perspectives in Medicine",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
    {
      num: "02",
      title: "Literary Voices: Celebrating Diverse Narratives",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
    {
      num: "03",
      title: "Cultural Exchange: Building Global Connections",
      date: "August 20, 2024",
      time: "4:27 am",
      place: "Yarra Park, UK",
    },
  ];
  return (
    <section
      className="flex flex-col items-center gap-12 px-6 md:px-20 py-20"
      style={{ backgroundColor: "#E6F3EB" }}
    >
      <div className="flex w-full max-w-6xl items-center justify-between">
        <h2
          className="font-display text-3xl md:text-5xl font-bold"
          style={{ color: GREEN }}
        >
          Alumni Event
        </h2>
        <a
          href="#"
          className="flex items-center gap-1 font-body text-sm font-medium"
          style={{ color: GREEN }}
        >
          View All <ArrowRight className="h-4 w-4 -rotate-45" strokeWidth={2} />
        </a>
      </div>

      <div className="flex w-full max-w-6xl flex-col lg:flex-row items-stretch gap-10">
        <div className="flex flex-1 flex-col gap-1">
          {events.map((e) => (
            <div
              key={e.num}
              className="flex items-center gap-8 bg-[#F6F6F6] px-6 py-6"
            >
              <span className="font-display text-6xl font-light border border-[#018837]/60 px-3 py-1 text-black">
                {e.num}
              </span>
              <div className="flex flex-col gap-2">
                <p className="font-body text-lg" style={{ color: GREEN }}>
                  {e.title}
                </p>
                <div className="flex items-center gap-5 font-body text-sm text-[#444444]">
                  <span>{e.date}</span>
                  <span>{e.time}</span>
                  <span>{e.place}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <PhotoPlaceholder
          label="Alumni gathered on campus lawn"
          className="w-full lg:w-[45%] min-h-[300px]"
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  12. News                                                           */
/* ------------------------------------------------------------------ */
function NewsSection() {
  const posts = [
    {
      tag: "Education",
      date: "August 6, 2024",
      title: "10 Effective Study Tips for College Success",
    },
    {
      tag: "University",
      date: "July 4, 2024",
      title: "After Decades Of Improvement, Cardiovascular Care Advances",
    },
  ];
  return (
    <section className="flex flex-col gap-12 px-6 md:px-20 py-20 bg-white">
      <div>
        <h2
          className="font-display text-3xl md:text-5xl font-bold"
          style={{ color: GREEN }}
        >
          Read Our Latest News
        </h2>
        <p className="mt-2 font-body text-[#444444]">
          You'll find something to spark your curiosity and enhance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((p) => (
          <div
            key={p.title}
            className="flex flex-col sm:flex-row items-center gap-6 border border-dashed p-5"
            style={{ borderColor: GREEN }}
          >
            <PhotoPlaceholder
              label={p.title}
              className="h-[220px] w-full sm:w-[240px] shrink-0"
            />
            <div className="flex flex-col gap-4">
              <span
                className="w-fit px-3 py-1 font-body text-xs"
                style={{ backgroundColor: YELLOW }}
              >
                {p.tag}
              </span>
              <p className="font-body text-lg text-[#110C2D]">{p.title}</p>
              <div className="flex items-center gap-3 font-body text-sm text-[#737477]">
                <span>{p.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  13. Testimonials                                                  */
/* ------------------------------------------------------------------ */
function Testimonials() {
  const reviews = [
    { name: "Emma Elizabeth", role: "Assistant Teacher" },
    { name: "Zent Ekizie", role: "Assistant Teacher" },
    { name: "Samantha Willow", role: "Teacher" },
  ];
  return (
    <section className="flex flex-col items-center gap-12 px-6 md:px-20 py-20 bg-[#F6F6F6]">
      <div className="flex flex-col items-center gap-2 text-center">
        <h2
          className="font-display text-4xl md:text-5xl font-bold"
          style={{ color: GREEN }}
        >
          My Students Feedback
        </h2>
        <p className="font-body text-[#737477]">
          You'll find something to spark your curiosity and enhance
        </p>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-3 gap-px bg-black/5">
        {reviews.map((r) => (
          <div key={r.name} className="flex flex-col gap-6 bg-white p-8">
            <div className="flex gap-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-current"
                  style={{ color: YELLOW }}
                />
              ))}
            </div>
            <p className="font-body text-[#444444] leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="h-12 w-12 rounded-full"
                  style={{ backgroundColor: GREEN }}
                />
                <div>
                  <p
                    className="font-display text-base font-bold"
                    style={{ color: GREEN }}
                  >
                    {r.name}
                  </p>
                  <p className="font-body text-sm text-[#444444]">{r.role}</p>
                </div>
              </div>
              <span className="font-display text-3xl" style={{ color: GREEN }}>
                ”
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  14. Footer                                                        */
/* ------------------------------------------------------------------ */
function Footer() {
  const campusLinks = [
    "Our Campus",
    "Careers",
    "News",
    "Support",
    "Accessible mode",
  ];
  const pageLinks = ["Home", "About", "Facilities", "Admission", "Contact"];
  const posts = [
    { title: "Those inequalities that Matter", date: "August 6, 2024" },
    {
      title: "After Decades Of Improvement, Cardiovascular",
      date: "July 4, 2024",
    },
  ];

  return (
    <footer className="flex flex-col items-center bg-black px-6 md:px-20 pt-14 pb-8 text-white">
      <div className="flex w-full max-w-6xl flex-col md:flex-row items-center justify-between gap-8 border-b border-[#242424] pb-14">
        <h3 className="font-body text-2xl">Subscribe To Newsletter</h3>
        <div className="flex w-full max-w-md items-stretch">
          <input
            placeholder="Enter Your mail"
            className="flex-1 border px-5 py-4 font-body text-sm bg-transparent outline-none placeholder:text-white/70"
            style={{ borderColor: GREEN }}
          />
          <button className="px-8 py-4 font-body text-sm font-medium bg-white text-[#110C2D]">
            Submit Button →
          </button>
        </div>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-4 gap-10 py-14">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full text-white font-display font-bold"
              style={{ backgroundColor: GREEN }}
            >
              U
            </div>
            <span className="font-display text-lg font-bold">
              Uttara Adhunik Medical College
            </span>
          </div>
          <p className="font-body text-[#737477]">
            We are passionate education dedicated to providing high-quality
            resources for learners of all backgrounds.
          </p>
          {/* <div className="flex items-center gap-4">
            {[Facebook, Youtube, Linkedin, Instagram].map((Icon, i) => (
              <Icon
                key={i}
                className="h-4 w-4 text-[#737477]"
                strokeWidth={1.8}
              />
            ))}
          </div> */}
        </div>

        <div>
          <h4 className="mb-4 font-body text-lg font-medium underline underline-offset-4">
            Our Campus
          </h4>
          <ul className="flex flex-col gap-2 font-body text-[#737477]">
            {campusLinks.map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-body text-lg font-medium underline underline-offset-4">
            Our Pages
          </h4>
          <ul className="flex flex-col gap-2 font-body text-[#737477]">
            {pageLinks.map((l) => (
              <li key={l}>
                <a href="#">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-body text-lg font-medium underline underline-offset-4">
            Recent Posts
          </h4>
          <div className="flex flex-col gap-4">
            {posts.map((p) => (
              <div key={p.title} className="flex items-center gap-3">
                <PhotoPlaceholder label="" className="h-14 w-20 shrink-0" />
                <div>
                  <p className="font-body text-xs text-[#737477]">{p.date}</p>
                  <p className="font-body text-sm">{p.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-6xl flex-col sm:flex-row items-center justify-between gap-2 border-t border-[#242424] pt-6 font-body text-sm text-[#737477]">
        <span>
          Copyright @ 2024. All Rights Reserved by{" "}
          <span className="text-white">Umaio</span>
        </span>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function LandingPage() {
  return (
    <div className="font-body text-black">
      <style>{fontImport}</style>
      {/* <Navbar /> */}
      <Hero />
      <NoticeAndPublication />
      <AboutUAMC />
      <StatStrip />
      <FindDepartment />
      <AdmissionCTA />
      <OurFacilities />
      <PrincipalMessage />
      <CampusLife />
      <AlumniEvents />
      <NewsSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
