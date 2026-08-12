// "use client";

// import { useState } from "react";
// import {
//   MapPin,
//   Mail,
//   Phone,
//   Search,
//   Menu,
//   ChevronDown,
//   ArrowUpRight,
//   Check,
//   Quote,
//   Star,
//   Calendar,
// } from "lucide-react";

// /* ------------------------------------------------------------------ */
// /*  Shared content / constants                                        */
// /* ------------------------------------------------------------------ */

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// const TABS = [
//   "Overview",
//   "History of UAMC",
//   "Vision & Mission",
//   "Aim & Objective",
//   "Organizational Structure",
//   "Founder Member",
//   "EC Members",
//   "GB Members",
// ];

// const NAV_ITEMS = [
//   { label: "Home", hasChevron: false },
//   { label: "About UAMC", hasChevron: true },
//   { label: "Facilities", hasChevron: true },
//   { label: "Admission", hasChevron: true },
//   { label: "Notice & Media", hasChevron: false },
//   { label: "Career", hasChevron: false },
// ];

// const TESTIMONIALS = [
//   {
//     name: "Emma Elizabeth",
//     role: "Assistant Teacher",
//     avatar:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
//     text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
//   },
//   {
//     name: "Zent Ekizie",
//     role: "Assistant Teacher",
//     avatar:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
//     text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
//   },
//   {
//     name: "Samantha Willow",
//     role: "Teacher",
//     avatar:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
//     text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
//   },
// ];

// const RECENT_POSTS = [
//   {
//     date: "August 6, 2024",
//     title: "Those Inequalities Are Inequalities That",
//     image:
//       "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200&h=140&fit=crop",
//   },
//   {
//     date: "July 4, 2024",
//     title: "After Decades Of Improvement, Cardiovascular",
//     image:
//       "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?w=200&h=140&fit=crop",
//   },
// ];

// /* ------------------------------------------------------------------ */
// /*  TopBar                                                             */
// /* ------------------------------------------------------------------ */

// // function TopBar() {
// //   return (
// //     <div className="hidden md:flex items-center justify-between px-20 py-2.5 bg-[#FCFBFB] border-b border-dashed border-black/20 text-xs font-medium text-black/50">
// //       <div className="flex items-center gap-5">
// //         <div className="flex items-center gap-2">
// //           <MapPin size={14} strokeWidth={1.7} />
// //           <span>
// //             House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model
// //             Town
// //           </span>
// //         </div>
// //         <div className="flex items-center gap-2">
// //           <Mail size={14} strokeWidth={1.7} />
// //           <span>info@uamc.com</span>
// //         </div>
// //         <div className="flex items-center gap-2">
// //           <Phone size={14} strokeWidth={1.7} />
// //           <span>+880 1700-220000</span>
// //         </div>
// //       </div>
// //       <div className="flex items-center gap-3 text-[#444444] font-medium text-sm">
// //         <button className="hover:text-[#018837] transition-colors">
// //           Student Portal
// //         </button>
// //         <button className="hover:text-[#018837] transition-colors">
// //           Teachers Portal
// //         </button>
// //         <button className="hover:text-[#018837] transition-colors">
// //           Alumni
// //         </button>
// //         <span className="w-px h-4 bg-[#444444]" />
// //         <button className="hover:text-[#018837] transition-colors">
// //           Events
// //         </button>
// //         <span className="w-px h-4 bg-[#444444]" />
// //         <button className="hover:text-[#018837] transition-colors">
// //           Contact Us
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// /* ------------------------------------------------------------------ */
// /*  Header / Main nav                                                  */
// /* ------------------------------------------------------------------ */

// // function Header() {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <header className="bg-white">
// //       <TopBar />
// //       <div className="flex items-center justify-between px-6 md:px-20 py-3">
// //         <div className="flex items-center gap-2">
// //           <div
// //             className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
// //             style={{ background: GREEN }}
// //           >
// //             UA
// //           </div>
// //           <div className="leading-tight">
// //             <div
// //               className="font-bold text-[#000000]"
// //               style={{ fontFamily: "'Bitter', serif" }}
// //             >
// //               Uttara Adhunik
// //             </div>
// //             <div className="text-sm text-[#444444]">Medical College (UAMC)</div>
// //           </div>
// //         </div>

// //         <nav className="hidden lg:flex items-center gap-8 uppercase tracking-wide text-sm text-black">
// //           {NAV_ITEMS.map((item) => (
// //             <button
// //               key={item.label}
// //               className="flex items-center gap-1 hover:text-[#018837] transition-colors"
// //               style={{ fontFamily: "'Bitter', serif" }}
// //             >
// //               {item.label}
// //               {item.hasChevron && <ChevronDown size={16} strokeWidth={2} />}
// //             </button>
// //           ))}
// //         </nav>

// //         <div className="hidden lg:flex items-center gap-5">
// //           <Search size={20} strokeWidth={2} className="cursor-pointer" />
// //           <Menu size={20} strokeWidth={2} className="cursor-pointer" />
// //         </div>

// //         <button className="lg:hidden" onClick={() => setOpen(!open)}>
// //           <Menu size={26} />
// //         </button>
// //       </div>

// //       {open && (
// //         <div className="lg:hidden px-6 pb-4 flex flex-col gap-3 uppercase text-sm">
// //           {NAV_ITEMS.map((item) => (
// //             <button key={item.label} className="text-left">
// //               {item.label}
// //             </button>
// //           ))}
// //         </div>
// //       )}
// //     </header>
// //   );
// // }

// /* ------------------------------------------------------------------ */
// /*  Banner (hero with breadcrumb + seal)                               */
// /* ------------------------------------------------------------------ */

// function Banner() {
//   return (
//     <div
//       className="relative w-full bg-cover bg-center flex items-end px-6 md:px-20 py-16 md:py-20"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1600&h=500&fit=crop)",
//       }}
//     >
//       <div
//         className="w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-8 px-6 md:px-12 py-8 md:py-10 rounded"
//         style={{ background: "rgba(1, 136, 55, 0.3)" }}
//       >
//         <div>
//           <div className="flex items-center gap-2 text-sm md:text-base font-medium text-black mb-2">
//             <span>HOME</span>
//             <span>&gt;</span>
//             <span>ABOUT UAMC</span>
//             <span>&gt;&gt;</span>
//             <span className="font-semibold">OVERVIEW</span>
//           </div>
//           <h1
//             className="text-4xl md:text-6xl font-light text-[#262626]"
//             style={{ fontFamily: "'Bitter', serif" }}
//           >
//             About <span className="font-bold">UAMC</span>
//           </h1>
//         </div>

//         <div className="shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-full bg-white p-2 shadow-lg flex flex-col items-center justify-center text-center border-4 border-yellow-400">
//           <div
//             className="w-full h-full rounded-full flex flex-col items-center justify-center text-white text-[10px] md:text-xs font-semibold p-2"
//             style={{ background: GREEN }}
//           >
//             <span className="uppercase tracking-wider">Uttara Adhunik</span>
//             <span className="uppercase tracking-wider">Medical College</span>
//             <span
//               className="my-1 px-2 py-0.5 rounded text-black text-[9px] md:text-[10px] font-bold"
//               style={{ background: YELLOW }}
//             >
//               ESTD · 2007
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Tab navigation pills                                               */
// /* ------------------------------------------------------------------ */

// function TabNav() {
//   const [active, setActive] = useState("Overview");

//   return (
//     <div className="bg-[#FBFBFB] px-6 md:px-20 py-10">
//       <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
//         {TABS.map((tab) => {
//           const isActive = tab === active;
//           return (
//             <button
//               key={tab}
//               onClick={() => setActive(tab)}
//               className="px-6 py-3 rounded text-xs md:text-sm font-medium text-white transition-colors"
//               style={{
//                 background: isActive ? GREEN : "#737477",
//                 border: isActive ? `2px dashed ${GREEN}` : "none",
//               }}
//             >
//               {tab}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  About UAMC section                                                 */
// /* ------------------------------------------------------------------ */

// function InfoBox({ icon, title, subtitle }) {
//   return (
//     <div
//       className="flex items-center gap-4 px-5 py-5 flex-1"
//       style={{ border: `1px dashed ${GREEN}` }}
//     >
//       <div className="text-2xl">{icon}</div>
//       <div style={{ fontFamily: "'Bitter', serif" }}>
//         <div className="font-semibold" style={{ color: GREEN }}>
//           {title}
//         </div>
//         <div className="font-semibold" style={{ color: GREEN }}>
//           {subtitle}
//         </div>
//       </div>
//     </div>
//   );
// }

// function AboutSection() {
//   return (
//     <section className="bg-white px-6 md:px-20 py-16 md:py-24">
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
//         {/* image collage */}
//         <div className="relative w-full lg:w-1/2 flex gap-4 justify-center">
//           <img
//             src="https://images.unsplash.com/photo-1587351021355-a479a299d2f9?w=400&h=600&fit=crop"
//             alt="UAMC campus"
//             className="w-1/2 h-80 md:h-96 object-cover"
//           />
//           <img
//             src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=600&fit=crop"
//             alt="UAMC building"
//             className="w-1/2 h-80 md:h-96 object-cover mt-8"
//           />
//           <div
//             className="absolute -left-6 top-1/3 w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center text-white text-center p-3 shadow-xl"
//             style={{ background: GREEN }}
//           >
//             <span className="uppercase text-[9px] font-semibold tracking-wide">
//               Uttara Adhunik
//             </span>
//             <span className="uppercase text-[9px] font-semibold tracking-wide">
//               Medical College
//             </span>
//             <span
//               className="mt-1 px-2 py-0.5 rounded text-black text-[8px] font-bold"
//               style={{ background: YELLOW }}
//             >
//               ESTD · 2007
//             </span>
//           </div>
//         </div>

//         {/* text content */}
//         <div className="w-full lg:w-1/2">
//           <div
//             className="flex items-center gap-2 text-sm font-medium mb-2"
//             style={{ color: GREEN }}
//           >
//             <span>✦</span>
//             <span>knowledge meets innovation</span>
//           </div>
//           <h2
//             className="text-4xl md:text-5xl font-light text-[#262626] mb-6"
//             style={{ fontFamily: "'Bitter', serif" }}
//           >
//             About{" "}
//             <span className="font-bold" style={{ color: YELLOW }}>
//               UAMC
//             </span>
//           </h2>

//           <p className="text-[#737477] font-bold leading-relaxed mb-4">
//             Uttara Adhunik Medical College (UAMC) is a prestigious medical
//             institution located in Uttara Model Town, Dhaka, Bangladesh.
//             Established in 2003.
//           </p>
//           <p className="text-[#737477] leading-relaxed mb-8">
//             UAMC offers a Bachelor of Medicine and Bachelor of Surgery (MBBS)
//             program, designed to equip students with the knowledge, skills, and
//             hands-on clinical training needed to excel in the medical
//             profession.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 mb-8">
//             <InfoBox icon="🎓" title="College Mission" subtitle="Statement" />
//             <InfoBox icon="🏛️" title="College Vision" subtitle="Achievement" />
//           </div>

//           <button
//             className="inline-flex items-center gap-3 px-8 py-4 text-white font-medium"
//             style={{ background: GREEN }}
//           >
//             View Our Program <ArrowUpRight size={18} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Visiting At UAMC section                                           */
// /* ------------------------------------------------------------------ */

// function VisitingSection() {
//   return (
//     <section className="bg-[#F6F6F6] px-6 md:px-20 py-16 md:py-24">
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
//         <div className="w-full lg:w-1/2">
//           <h2
//             className="text-3xl md:text-4xl font-bold text-black mb-5"
//             style={{ fontFamily: "'Bitter', serif" }}
//           >
//             Visiting At UAMC
//           </h2>
//           <p className="text-[#525271] leading-relaxed mb-4">
//             Here you&apos;ll find all the information about the reasons why the
//             University of Luva is a unique institution. Get to know why over 200
//             thousand people a year visit us.
//           </p>
//           <p className="text-[#525271] leading-relaxed mb-8">
//             Welcome to Faral, where knowledge meets innovation and where every
//             student&apos;s journey to success begins.
//           </p>

//           <div className="flex items-center gap-6 mb-8">
//             <div
//               className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
//               style={{ background: GREEN }}
//             >
//               <Phone size={26} color="white" strokeWidth={1.8} />
//             </div>
//             <div>
//               <div className="font-semibold text-lg" style={{ color: GREEN }}>
//                 Call +32112345678
//               </div>
//               <div className="text-[#444444] text-sm">
//                 For any kind of admission enquiry
//               </div>
//             </div>
//           </div>

//           <button
//             className="inline-flex items-center gap-3 px-8 py-4 text-white font-medium"
//             style={{ background: GREEN }}
//           >
//             View Our Program <ArrowUpRight size={18} />
//           </button>
//         </div>

//         <div className="relative w-full lg:w-1/2 flex gap-4">
//           <img
//             src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=600&fit=crop"
//             alt="Doctor with patient"
//             className="w-1/2 h-72 md:h-96 object-cover"
//           />
//           <div className="w-1/2 flex flex-col gap-3">
//             <img
//               src="https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?w=400&h=350&fit=crop"
//               alt="Nurse checking scan"
//               className="w-full h-40 md:h-56 object-cover"
//             />
//             <div
//               className="flex items-center gap-4 px-5 py-4"
//               style={{
//                 background: "rgba(1,136,55,0.5)",
//                 backdropFilter: "blur(5px)",
//               }}
//             >
//               <div className="text-3xl">🏥</div>
//               <div>
//                 <div
//                   className="text-3xl font-bold text-white"
//                   style={{ fontFamily: "'Bitter', serif" }}
//                 >
//                   28+
//                 </div>
//                 <div className="text-white text-xs">
//                   Department Available For Student
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Stats bar                                                          */
// /* ------------------------------------------------------------------ */

// function StatsBar() {
//   const stats = [
//     { value: "90%", label: "Post-Graduation Success Rate" },
//     { value: "Top 10", label: "Colleges That Create Futures" },
//     { value: "No. 1", label: "In The Nation For Materials R&D" },
//   ];

//   return (
//     <div
//       className="relative bg-cover bg-center px-6 md:px-20 py-12 flex justify-center"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1519494080410-f9aa8f52f4e5?w=1600&h=400&fit=crop)",
//       }}
//     >
//       <div
//         className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16 px-8 md:px-24 py-10"
//         style={{
//           background: "rgba(1,136,55,0.5)",
//           backdropFilter: "blur(5px)",
//         }}
//       >
//         {stats.map((s, i) => (
//           <div key={s.label} className="flex items-center gap-8 sm:gap-16">
//             <div className="flex flex-col items-center text-center gap-3 w-36">
//               <div
//                 className="text-4xl md:text-5xl font-normal text-white"
//                 style={{ fontFamily: "'Bitter', serif" }}
//               >
//                 {s.value}
//               </div>
//               <div
//                 className="font-bold text-sm"
//                 style={{ color: YELLOW, fontFamily: "'Bitter', serif" }}
//               >
//                 {s.label}
//               </div>
//             </div>
//             {i < stats.length - 1 && (
//               <span className="hidden sm:block w-px h-24 bg-white/50" />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Admission & Aid section                                            */
// /* ------------------------------------------------------------------ */

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

// function AdmissionAidSection() {
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
//             style={{ color: GREEN, fontFamily: "'Bitter', serif" }}
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

// /* ------------------------------------------------------------------ */
// /*  Sustainability section                                             */
// /* ------------------------------------------------------------------ */

// function SustainabilityItem({ text }) {
//   return (
//     <div className="flex items-start gap-4">
//       <div className="mt-1 shrink-0">
//         <Check size={18} style={{ color: YELLOW }} strokeWidth={3} />
//       </div>
//       <p className="text-[#444444] font-bold text-sm leading-relaxed">{text}</p>
//     </div>
//   );
// }

// function SustainabilitySection() {
//   return (
//     <section className="bg-white px-6 md:px-20 py-16 md:py-24">
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
//         <div className="w-full lg:w-1/2">
//           <h2
//             className="text-3xl md:text-4xl font-bold mb-5"
//             style={{ color: GREEN, fontFamily: "'Bitter', serif" }}
//           >
//             Sustainability at UAMC
//           </h2>
//           <p className="text-[#525271] leading-relaxed mb-8">
//             Uttara Adhunik Medical College (UAMC) is committed to sustainability
//             by integrating innovative solutions in healthcare and education
//             while minimizing its environmental impact.
//           </p>

//           <div className="flex flex-col gap-6">
//             <SustainabilityItem text="Eco-Friendly Campus – UAMC integrates energy-efficient infrastructure and waste management to promote a greener learning environment." />
//             <SustainabilityItem text="Sustainable Healthcare Practices – The institution adopts responsible resource management to reduce environmental impact in medical education and patient care." />
//             <SustainabilityItem text="Innovation & Collaboration – UAMC explores partnerships and modern solutions to enhance long-term sustainability in healthcare and education." />
//           </div>
//         </div>

//         <div className="relative w-full lg:w-1/2 h-80 md:h-96">
//           <div
//             className="absolute right-0 top-8 w-1/2 h-4/5"
//             style={{ background: "#B7D8EF" }}
//           />
//           <img
//             src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=420&fit=crop"
//             alt="Student"
//             className="absolute left-0 top-16 w-1/3 h-3/4 object-cover shadow-lg"
//           />
//           <img
//             src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=420&fit=crop"
//             alt="Campus walkway"
//             className="absolute right-4 top-0 w-1/3 h-3/4 object-cover shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Principal message section                                          */
// /* ------------------------------------------------------------------ */

// function PrincipalMessage() {
//   return (
//     <section
//       className="px-6 md:px-20 py-16 md:py-24"
//       style={{ background: "rgba(1,136,55,0.1)" }}
//     >
//       <div className="max-w-6xl mx-auto">
//         <div
//           className="flex items-center justify-center gap-2 text-sm font-medium mb-3"
//           style={{ color: GREEN }}
//         >
//           <span>✦</span>
//           <span>knowledge meets innovation</span>
//         </div>
//         <h2
//           className="text-3xl md:text-5xl font-bold text-center mb-14"
//           style={{ fontFamily: "'Bitter', serif" }}
//         >
//           Message from the <span style={{ color: YELLOW }}>Principal</span>
//         </h2>

//         <div className="flex flex-col lg:flex-row items-center gap-10">
//           <div className="w-full lg:w-1/2">
//             <div
//               className="text-3xl mb-2"
//               style={{ fontFamily: "cursive", color: "#222" }}
//             >
//               Signature
//             </div>
//             <div
//               className="font-bold text-xl mb-1"
//               style={{ fontFamily: "'Bitter', serif" }}
//             >
//               Honorable
//             </div>
//             <div
//               className="font-bold text-2xl md:text-3xl mb-2"
//               style={{ color: GREEN, fontFamily: "'Bitter', serif" }}
//             >
//               Prof. Dr. Mohammad Mohibur Rahman
//             </div>
//             <div
//               className="font-bold text-4xl md:text-5xl mb-1 text-[#444444]"
//               style={{ fontFamily: "'Bitter', serif" }}
//             >
//               Principal{" "}
//               <span className="text-2xl md:text-3xl align-middle">
//                 (In Charge)
//               </span>
//             </div>
//             <div className="font-bold text-lg text-[#444444] mb-4">
//               Ensuring Quality Healthcare &amp; Medical Education
//             </div>
//             <p className="text-sm text-[#444444] leading-relaxed mb-6 text-justify">
//               Bangladesh faces significant challenges in delivering healthcare
//               nationwide. To support government efforts, Uttara Adhunik Medical
//               College Hospital (UAMCH) has been providing comprehensive health
//               services since 2003, evolving into a tertiary-level
//               multidisciplinary hospital.
//             </p>
//             <button
//               className="inline-flex items-center gap-3 px-8 py-4 text-white font-medium"
//               style={{ background: GREEN }}
//             >
//               Read More <ArrowUpRight size={18} />
//             </button>
//           </div>

//           <div className="w-full lg:w-1/2">
//             <img
//               src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=700&h=580&fit=crop"
//               alt="Principal"
//               className="w-full h-96 md:h-[440px] object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Admission CTA banner                                               */
// /* ------------------------------------------------------------------ */

// function AdmissionCTA() {
//   return (
//     <section
//       className="px-6 md:px-20 py-16 bg-cover bg-center flex justify-center"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(1,136,55,0.4), rgba(1,136,55,0.4)), url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=500&fit=crop)",
//       }}
//     >
//       <div
//         className="w-full max-w-6xl flex flex-col items-center gap-8 py-14 px-6 md:px-20"
//         style={{ background: "rgba(0,0,0,0.1)", backdropFilter: "blur(10px)" }}
//       >
//         <h2
//           className="text-4xl md:text-6xl font-bold text-center tracking-wide"
//           style={{ color: YELLOW, fontFamily: "'Bitter', serif" }}
//         >
//           UAMC Admission
//         </h2>
//         <p className="text-white text-center max-w-3xl leading-relaxed">
//           Uttara Adhunik Medical College (UAMC) was established in 2003 with a
//           vision to provide quality medical education and healthcare services.
//           Founded through the dedicated efforts of medical professionals and
//           social leaders, UAMC is committed to training future doctors while
//           ensuring affordable healthcare for the community.
//         </p>
//         <button
//           className="inline-flex items-center gap-3 px-8 py-4 text-white font-medium"
//           style={{ background: GREEN }}
//         >
//           Learn More <ArrowUpRight size={18} />
//         </button>
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Testimonials                                                       */
// /* ------------------------------------------------------------------ */

// function TestimonialCard({ testimonial }) {
//   return (
//     <div className="bg-white p-8 flex flex-col gap-6 relative">
//       <div className="flex gap-1">
//         {Array.from({ length: 4 }).map((_, i) => (
//           <Star key={i} size={14} fill={YELLOW} color={YELLOW} />
//         ))}
//       </div>
//       <p className="text-[#444444] leading-relaxed">{testimonial.text}</p>
//       <div className="flex items-center gap-3">
//         <img
//           src={testimonial.avatar}
//           alt={testimonial.name}
//           className="w-12 h-12 rounded-full object-cover"
//         />
//         <div>
//           <div
//             className="font-bold"
//             style={{ color: GREEN, fontFamily: "'Bitter', serif" }}
//           >
//             {testimonial.name}
//           </div>
//           <div className="text-[#444444] text-sm">{testimonial.role}</div>
//         </div>
//       </div>
//       <Quote
//         className="absolute top-8 right-8 opacity-20"
//         size={40}
//         color={GREEN}
//       />
//     </div>
//   );
// }

// function TestimonialsSection() {
//   return (
//     <section className="bg-[#F6F6F6] px-6 md:px-20 py-16 md:py-24">
//       <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 mb-12">
//         <h2
//           className="text-3xl md:text-5xl font-bold text-center"
//           style={{ color: GREEN, fontFamily: "'Bitter', serif" }}
//         >
//           My Students Feedback
//         </h2>
//         <p className="text-[#737477] text-center">
//           You&apos;ll find something to spark your curiosity and enhance
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
//         {TESTIMONIALS.map((t) => (
//           <TestimonialCard key={t.name} testimonial={t} />
//         ))}
//       </div>

//       <div className="flex justify-center gap-2 mt-10">
//         <span className="w-2 h-2 rounded-full" style={{ background: YELLOW }} />
//         <span className="w-2 h-2 rounded-full bg-[#444444]/20" />
//       </div>
//     </section>
//   );
// }

// /* ------------------------------------------------------------------ */
// /*  Footer                                                             */
// /* ------------------------------------------------------------------ */

// function FooterLinkList({ title, links }) {
//   return (
//     <div>
//       <div className="text-white font-medium text-lg underline mb-6">
//         {title}
//       </div>
//       <ul className="flex flex-col gap-3">
//         {links.map((l) => (
//           <li key={l}>
//             <button className="text-[#737477] hover:text-white transition-colors text-sm">
//               {l}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <footer className="bg-black px-6 md:px-20 pt-16 pb-6">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-[#242424]">
//         <div className="text-white text-2xl font-light">
//           Subscribe To Newsletter
//         </div>
//         <div className="flex w-full md:w-auto">
//           <input
//             type="email"
//             placeholder="Enter Your mail"
//             className="bg-transparent border py-4 px-5 text-white text-sm flex-1 md:w-72 focus:outline-none"
//             style={{ borderColor: GREEN }}
//           />
//           <button className="bg-white text-[#110C2D] font-medium px-8 py-4 text-sm flex items-center gap-2 shrink-0">
//             Submit Button <ArrowUpRight size={16} />
//           </button>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
//         <div>
//           <div className="flex items-center gap-2 mb-5">
//             <div
//               className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0"
//               style={{ background: GREEN }}
//             >
//               UA
//             </div>
//             <div className="text-white font-bold leading-tight">
//               Uttara Adhunik
//               <div className="text-xs font-normal text-[#737477]">
//                 Medical College (UAMC)
//               </div>
//             </div>
//           </div>
//           <p className="text-[#737477] text-sm leading-relaxed mb-4">
//             We are passionate education dedicated to providing high-quality
//             resources learners all backgrounds.
//           </p>
//           <div className="flex items-center gap-2 text-[#737477] text-sm mb-2">
//             <MapPin size={14} /> Park, Melbourne, Australia
//           </div>
//           <div className="flex items-center gap-2 text-[#737477] text-sm">
//             <Phone size={14} /> 485-826-710
//           </div>
//         </div>

//         <FooterLinkList
//           title="Our Campus"
//           links={[
//             "Academics",
//             "Athletics",
//             "Campus life",
//             "Research",
//             "Academic Area",
//           ]}
//         />
//         <FooterLinkList
//           title="Our Pages"
//           links={["About", "Tuition Fee", "Faculty Staff", "Event"]}
//         />

//         <div>
//           <div className="text-white font-medium text-lg underline mb-6">
//             Recent Posts
//           </div>
//           <div className="flex flex-col gap-5">
//             {RECENT_POSTS.map((post) => (
//               <div key={post.title} className="flex items-center gap-3">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-16 h-14 object-cover shrink-0"
//                 />
//                 <div>
//                   <div className="flex items-center gap-2 text-[#737477] text-xs mb-1">
//                     <Calendar size={12} /> {post.date}
//                   </div>
//                   <div className="text-white text-sm leading-snug">
//                     {post.title}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[#242424] text-sm text-[#737477]">
//         <div>Copyright @ 2024. All Rights Reserved by Univpix</div>
//         {/* <div className="flex items-center gap-4">
//           <Facebook
//             size={16}
//             className="text-[#737477] hover:text-white cursor-pointer"
//           />
//           <Youtube
//             size={16}
//             className="text-[#737477] hover:text-white cursor-pointer"
//           />
//           <Linkedin
//             size={16}
//             className="text-[#737477] hover:text-white cursor-pointer"
//           />
//           <Instagram
//             size={16}
//             className="text-[#737477] hover:text-white cursor-pointer"
//           />
//         </div> */}
//       </div>
//     </footer>
//   );
// }

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
import Banner from "@/components/Aboutpage/Overview/Banner";
import TabNav from "@/components/Aboutpage/shared/TabNav";
import AboutSection from "@/components/Aboutpage/Overview/AboutSection";
import StatsBar from "@/components/Aboutpage/Overview/StatsBar";
import AdmissionAidSection from "@/components/Aboutpage/Overview/AdmissionAidSection";
import SustainabilitySection from "@/components/Aboutpage/Overview/SustainabilitySection";
import PrincipalMessage from "@/components/Aboutpage/Overview/PrincipalMessage";
import AdmissionCTA from "@/components/Aboutpage/Overview/AdmissionCTA";
import VisitingSection from "@/components/Aboutpage/Overview/VisitingSection";
import Testimonials from "@/components/Aboutpage/Overview/Testimonials";

export default function Overview() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />
      <AboutSection />
      <VisitingSection />
      <StatsBar />
      <AdmissionAidSection />
      <SustainabilitySection />
      <PrincipalMessage />
      <AdmissionCTA />
      <Testimonials />
    </div>
  );
}
