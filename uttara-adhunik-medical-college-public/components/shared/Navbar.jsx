// "use client";

// import { useState } from "react";
// import Link from "next/link";

// import {
//   MapPin,
//   Mail,
//   Phone,
//   Search,
//   ChevronDown,
//   AlignJustify,
//   Menu,
//   X,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaYoutube,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// /* =========================================================
//    TOP HEADER
// ========================================================= */

// function TopHeader() {
//   return (
//     <div
//       className="w-full border-b border-dashed"
//       style={{
//         backgroundColor: "#FCFBFB",
//         borderColor: "rgba(0,0,0,0.2)",
//       }}
//     >
//       <div className="mx-auto flex min-h-[58px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-0">
//         {/* LEFT INFORMATION */}
//         <div className="flex items-center gap-5">
//           {/* Location */}
//           <div className="flex h-[30px] items-center gap-[10px]">
//             <MapPin
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model
//               Town
//             </span>
//           </div>

//           {/* Email */}
//           <div className="hidden items-center gap-[10px] md:flex">
//             <Mail
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               info@uamc.com
//             </span>
//           </div>

//           {/* Phone */}
//           <div className="hidden items-center gap-[10px] lg:flex">
//             <Phone
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               +880 1700-220000
//             </span>
//           </div>
//         </div>

//         {/* RIGHT PORTAL LINKS */}
//         <div className="hidden items-center gap-1 lg:flex">
//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444]"
//           >
//             Student Portal
//           </Link>

//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444]"
//           >
//             Faculty Portal
//           </Link>

//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444]"
//           >
//             Notice
//           </Link>

//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444]"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    MAIN NAVIGATION
// ========================================================= */

// function MainNav() {
//   const [open, setOpen] = useState(false);

//   const links = [
//     "Home",
//     "About UAMC",
//     "Facilities",
//     "Admission",
//     "Notice & Media",
//     "Career",
//   ];

//   return (
//     <div className="relative w-full bg-white">
//       <div className="mx-auto flex min-h-[106.23px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-0">
//         {/* =================================================
//             LEFT SIDE
//         ================================================= */}

//         <div className="flex items-center gap-[30px]">
//           {/* LOGO + COLLEGE NAME */}
//           <Link href="/" className="flex items-center gap-[8.28px]">
//             {/* Change /logo.png if your logo has another filename */}
//             <img
//               src="/logo.png"
//               alt="Uttara Adhunik Medical College"
//               className="h-[66.23px] w-[66.23px] shrink-0 object-contain"
//             />

//             <div className="font-display text-[20.6954px] font-bold leading-[25px] text-black">
//               <div>Uttara Adhunik</div>
//               <div>Medical College (UAMC)</div>
//             </div>
//           </Link>

//           {/* VERTICAL DIVIDER */}
//           <div className="hidden h-[20px] w-px bg-[#444444] lg:block" />

//           {/* =================================================
//               SOCIAL MEDIA
//           ================================================= */}

//           <div className="hidden items-center gap-[16.13px] lg:flex">
//             {/* Facebook */}
//             <a
//               href="https://www.facebook.com/profile.php?id=61560225192182"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaFacebookF className="h-[13px] w-[13px]" />
//             </a>

//             {/* YouTube */}
//             <a
//               href="https://www.youtube.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="YouTube"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaYoutube className="h-[13px] w-[13px]" />
//             </a>

//             {/* LinkedIn */}
//             <a
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaLinkedinIn className="h-[13px] w-[13px]" />
//             </a>

//             {/* Instagram */}
//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaInstagram className="h-[13px] w-[13px]" />
//             </a>
//           </div>
//         </div>

//         {/* =================================================
//             DESKTOP NAVIGATION
//         ================================================= */}

//         <nav className="hidden items-center lg:flex">
//           {links.map((label, i) => {
//             const hasDropdown = i > 0 && i < 4;

//             let href = "#";

//             if (label === "Home") {
//               href = "/";
//             }

//             if (label === "About UAMC") {
//               href = "/about/overview";
//             }

//             return (
//               <Link
//                 key={label}
//                 href={href}
//                 className={`flex h-[44px] items-center gap-[10px] px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] ${
//                   i === 0 ? "border-b" : ""
//                 }`}
//                 style={
//                   i === 0
//                     ? {
//                         color: GREEN,
//                         borderColor: GREEN,
//                       }
//                     : {
//                         color: "#000000",
//                       }
//                 }
//               >
//                 <span>{label}</span>

//                 {hasDropdown && (
//                   <ChevronDown className="h-6 w-6" strokeWidth={2} />
//                 )}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* =================================================
//             RIGHT ACTIONS
//         ================================================= */}

//         <div className="flex items-center gap-5">
//           {/* Search */}
//           <button
//             type="button"
//             aria-label="Search"
//             className="text-black transition-colors hover:text-[#018837]"
//           >
//             <Search className="h-6 w-6" strokeWidth={2} />
//           </button>

//           {/* Desktop menu/alignment icon */}
//           <button
//             type="button"
//             aria-label="Menu"
//             className="hidden text-black transition-colors hover:text-[#018837] lg:block"
//           >
//             <AlignJustify className="h-6 w-6" strokeWidth={2} />
//           </button>

//           {/* Mobile menu */}
//           <button
//             type="button"
//             aria-label="Toggle menu"
//             className="text-black lg:hidden"
//             onClick={() => setOpen((value) => !value)}
//           >
//             {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>
//       </div>

//       {/* =================================================
//           MOBILE NAVIGATION
//       ================================================= */}

//       {open && (
//         <div className="absolute left-0 right-0 top-full z-50 flex flex-col border-t border-black/10 bg-white px-6 py-4 shadow-lg lg:hidden">
//           {links.map((label) => {
//             let href = "#";

//             if (label === "Home") {
//               href = "/";
//             }

//             if (label === "About UAMC") {
//               href = "/about/overview";
//             }

//             return (
//               <Link
//                 key={label}
//                 href={href}
//                 onClick={() => setOpen(false)}
//                 className="border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] text-black"
//               >
//                 {label}
//               </Link>
//             );
//           })}

//           {/* Mobile social icons */}
//           <div className="mt-5 flex items-center gap-5">
//             <a
//               href="https://www.facebook.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaFacebookF className="h-4 w-4" />
//             </a>

//             <a
//               href="https://www.youtube.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="YouTube"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaYoutube className="h-4 w-4" />
//             </a>

//             <a
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaLinkedinIn className="h-4 w-4" />
//             </a>

//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaInstagram className="h-4 w-4" />
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* =========================================================
//    NAVBAR
// ========================================================= */

// export default function Navbar() {
//   return (
//     <header className="w-full">
//       <TopHeader />
//       <MainNav />
//     </header>
//   );
// }

// "use client";

// import { useState } from "react";
// import Link from "next/link";

// import {
//   MapPin,
//   Mail,
//   Phone,
//   Search,
//   ChevronDown,
//   AlignJustify,
//   Menu,
//   X,
//   ArrowRight,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaYoutube,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// /* =========================================================
//    DROPDOWN DATA
// ========================================================= */

// const dropdownMenus = {
//   "About UAMC": [
//     {
//       label: "Overview",
//       href: "/about/overview",
//     },
//     {
//       label: "History of UAMC",
//       href: "/about/historyofuamc",
//     },
//     {
//       label: "Vision & Mission",
//       href: "/about/vision",
//     },
//     {
//       label: "Aim & Objective",
//       href: "/about/aim",
//     },
//     {
//       label: "Organizational Structure",
//       href: "/about/structure",
//     },
//     {
//       label: "Founder Members",
//       href: "/about/founder",
//     },
//     {
//       label: "EC Members",
//       href: "/about/ec",
//     },
//     {
//       label: "GB Members",
//       href: "/about/gb",
//     },
//   ],

//   Facilities: [
//     {
//       label: "Hospital Service",
//       href: "/facility/hospitalservice",
//     },
//     {
//       label: "Departments",
//       href: "/facility/department",
//     },
//     {
//       label: "Library",
//       href: "/facility/libraryuamc",
//     },
//     {
//       label: "Medical Education Unit",
//       href: "/facility/medical",
//     },
//     {
//       label: "Training",
//       href: "/facility/training",
//     },
//     {
//       label: "Publications",
//       href: "/facility/publication",
//     },
//     {
//       label: "Seminar",
//       href: "/facility/seminar",
//     },
//     {
//       label: "Hostel",
//       href: "/facility/hostel",
//     },
//     {
//       label: "Laboratory",
//       href: "/facility/lab",
//     },
//     {
//       label: "Cafeteria",
//       href: "/facility/cafeteria",
//     },
//   ],

//   Admission: [
//     {
//       label: "Admission Procedure & Fees",
//       href: "/admission/procedure",
//     },
//     {
//       label: "Admission Papers",
//       href: "/admission/paper",
//     },
//     {
//       label: "Application Form",
//       href: "/admission/applicationform",
//     },
//     {
//       label: "Admission Results",
//       href: "/admission/result",
//     },
//     {
//       label: "Online Registration",
//       href: "/admission/registration",
//     },
//   ],
// };

// /* =========================================================
//    TOP HEADER
// ========================================================= */

// function TopHeader() {
//   return (
//     <div
//       className="w-full border-b border-dashed"
//       style={{
//         backgroundColor: "#FCFBFB",
//         borderColor: "rgba(0,0,0,0.2)",
//       }}
//     >
//       <div className="mx-auto flex min-h-[42px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-10 xl:px-[60px]">
//         {/* LEFT INFORMATION */}
//         <div className="flex items-center gap-5">
//           {/* Location */}
//           <div className="flex items-center gap-[10px]">
//             <MapPin
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model
//               Town
//             </span>
//           </div>

//           {/* Email */}
//           <div className="hidden items-center gap-[10px] md:flex">
//             <Mail
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               info@uamc.com
//             </span>
//           </div>

//           {/* Phone */}
//           <div className="hidden items-center gap-[10px] lg:flex">
//             <Phone
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               +880 1700-220000
//             </span>
//           </div>
//         </div>

//         {/* RIGHT PORTAL LINKS */}
//         <div className="hidden items-center gap-1 lg:flex">
//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
//           >
//             Student Portal
//           </Link>

//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
//           >
//             Faculty Portal
//           </Link>

//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
//           >
//             Notice
//           </Link>

//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    DESKTOP DROPDOWN
// ========================================================= */

// function DesktopDropdown({ label, items, isOpen, onToggle }) {
//   return (
//     <div className="relative">
//       {/* Dropdown Trigger */}
//       <button
//         type="button"
//         onClick={onToggle}
//         aria-expanded={isOpen}
//         className="flex h-[44px] items-center gap-[7px] px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] text-black transition-colors hover:text-[#018837]"
//       >
//         <span>{label}</span>

//         <ChevronDown
//           className={`h-[20px] w-[20px] transition-transform duration-200 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//           strokeWidth={2}
//         />
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div
//           className={`absolute top-[calc(100%+8px)] z-[100] overflow-hidden border border-[#FECD2F] bg-[#4D4D4D]/90 shadow-[0_8px_25px_rgba(0,0,0,0.18)] ${
//             label === "About UAMC"
//               ? "left-0 w-[320px]"
//               : label === "Facilities"
//                 ? "left-1/2 w-[320px] -translate-x-1/2"
//                 : "right-0 w-[345px]"
//           }`}
//         >
//           {items.map((item, index) => (
//             <Link
//               key={item.label}
//               href={item.href}
//               className={`group flex min-h-[52px] items-center justify-between gap-4 px-4 py-3 text-white transition-colors hover:bg-[#3F3F3F] ${
//                 index !== items.length - 1 ? "border-b border-[#FECD2F]" : ""
//               }`}
//               onClick={onToggle}
//             >
//               <span className="font-body text-[15px] font-medium leading-[20px]">
//                 {item.label}
//               </span>

//               <ArrowRight
//                 className="h-[21px] w-[21px] shrink-0 transition-transform duration-200 group-hover:translate-x-1"
//                 strokeWidth={2}
//               />
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// /* =========================================================
//    MAIN NAVIGATION
// ========================================================= */

// function MainNav() {
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(null);

//   const simpleLinks = [
//     {
//       label: "Home",
//       href: "/",
//     },
//     {
//       label: "Notice & Media",
//       href: "/notice-media",
//     },
//     {
//       label: "Career",
//       href: "/career",
//     },
//   ];

//   const toggleDropdown = (label) => {
//     setOpenDropdown((current) => (current === label ? null : label));
//   };

//   const toggleMobileDropdown = (label) => {
//     setMobileDropdown((current) => (current === label ? null : label));
//   };

//   return (
//     <div className="relative w-full border-b border-black/10 bg-white">
//       <div className="mx-auto flex min-h-[88px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-10 xl:px-[60px]">
//         {/* =================================================
//             LEFT SIDE
//         ================================================= */}

//         <div className="flex items-center gap-[30px]">
//           {/* LOGO + COLLEGE NAME */}
//           <Link
//             href="/"
//             className="flex shrink-0 items-center gap-[8.28px]"
//             onClick={() => setOpenDropdown(null)}
//           >
//             <img
//               src="/logo.png"
//               alt="Uttara Adhunik Medical College"
//               className="h-[66.23px] w-[66.23px] shrink-0 object-contain"
//             />

//             <div className="font-display text-[20.6954px] font-bold leading-[25px] text-black">
//               <div>Uttara Adhunik</div>
//               <div>Medical College (UAMC)</div>
//             </div>
//           </Link>

//           {/* VERTICAL DIVIDER */}
//           <div className="hidden h-[20px] w-px bg-[#444444] lg:block" />

//           {/* SOCIAL MEDIA */}
//           <div className="hidden items-center gap-[16.13px] lg:flex">
//             <a
//               href="https://www.facebook.com/profile.php?id=61560225192182"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaFacebookF className="h-[13px] w-[13px]" />
//             </a>

//             <a
//               href="https://www.youtube.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="YouTube"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaYoutube className="h-[13px] w-[13px]" />
//             </a>

//             <a
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaLinkedinIn className="h-[13px] w-[13px]" />
//             </a>

//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaInstagram className="h-[13px] w-[13px]" />
//             </a>
//           </div>
//         </div>

//         {/* =================================================
//             DESKTOP NAVIGATION
//         ================================================= */}

//         <nav className="hidden items-center lg:flex">
//           {/* HOME */}
//           <Link
//             href="/"
//             onClick={() => setOpenDropdown(null)}
//             className="flex h-[44px] items-center border-b px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em]"
//             style={{
//               color: GREEN,
//               borderColor: GREEN,
//             }}
//           >
//             Home
//           </Link>

//           {/* ABOUT DROPDOWN */}
//           <DesktopDropdown
//             label="About UAMC"
//             items={dropdownMenus["About UAMC"]}
//             isOpen={openDropdown === "About UAMC"}
//             onToggle={() => toggleDropdown("About UAMC")}
//           />

//           {/* FACILITIES DROPDOWN */}
//           <DesktopDropdown
//             label="Facilities"
//             items={dropdownMenus.Facilities}
//             isOpen={openDropdown === "Facilities"}
//             onToggle={() => toggleDropdown("Facilities")}
//           />

//           {/* ADMISSION DROPDOWN */}
//           <DesktopDropdown
//             label="Admission"
//             items={dropdownMenus.Admission}
//             isOpen={openDropdown === "Admission"}
//             onToggle={() => toggleDropdown("Admission")}
//           />

//           {/* NOTICE & MEDIA */}
//           <Link
//             href="/notice-media"
//             onClick={() => setOpenDropdown(null)}
//             className="flex h-[44px] items-center px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] text-black transition-colors hover:text-[#018837]"
//           >
//             Notice & Media
//           </Link>

//           {/* CAREER */}
//           <Link
//             href="/career"
//             onClick={() => setOpenDropdown(null)}
//             className="flex h-[44px] items-center px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] text-black transition-colors hover:text-[#018837]"
//           >
//             Career
//           </Link>
//         </nav>

//         {/* =================================================
//             RIGHT ACTIONS
//         ================================================= */}

//         <div className="flex items-center gap-5">
//           {/* Search */}
//           <button
//             type="button"
//             aria-label="Search"
//             className="text-black transition-colors hover:text-[#018837]"
//           >
//             <Search className="h-6 w-6" strokeWidth={2} />
//           </button>

//           {/* Desktop menu/alignment icon */}
//           <button
//             type="button"
//             aria-label="Menu"
//             className="hidden text-black transition-colors hover:text-[#018837] lg:block"
//           >
//             <AlignJustify className="h-6 w-6" strokeWidth={2} />
//           </button>

//           {/* Mobile menu */}
//           <button
//             type="button"
//             aria-label="Toggle menu"
//             className="text-black lg:hidden"
//             onClick={() => {
//               setMobileOpen((value) => !value);
//               setMobileDropdown(null);
//             }}
//           >
//             {mobileOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* =================================================
//           MOBILE NAVIGATION
//       ================================================= */}

//       {mobileOpen && (
//         <div className="absolute left-0 right-0 top-full z-[200] border-t border-black/10 bg-white px-6 py-4 shadow-lg lg:hidden">
//           {/* HOME */}
//           <Link
//             href="/"
//             onClick={() => setMobileOpen(false)}
//             className="flex border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] text-black"
//           >
//             Home
//           </Link>

//           {/* MOBILE DROPDOWNS */}
//           {Object.entries(dropdownMenus).map(([label, items]) => {
//             const isOpen = mobileDropdown === label;

//             return (
//               <div key={label} className="border-b border-black/10">
//                 {/* Trigger */}
//                 <button
//                   type="button"
//                   onClick={() => toggleMobileDropdown(label)}
//                   className="flex w-full items-center justify-between py-3 font-display text-sm uppercase tracking-[0.02em] text-black"
//                 >
//                   <span>{label}</span>

//                   <ChevronDown
//                     className={`h-5 w-5 transition-transform duration-200 ${
//                       isOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* Items */}
//                 {isOpen && (
//                   <div className="mb-3 overflow-hidden border border-[#FECD2F] bg-[#4D4D4D]/80">
//                     {items.map((item, index) => (
//                       <Link
//                         key={item.label}
//                         href={item.href}
//                         onClick={() => {
//                           setMobileOpen(false);
//                           setMobileDropdown(null);
//                         }}
//                         className={`flex items-center justify-between px-4 py-3 text-white ${
//                           index !== items.length - 1
//                             ? "border-b border-[#FECD2F]"
//                             : ""
//                         }`}
//                       >
//                         <span className="font-body text-[14px]">
//                           {item.label}
//                         </span>

//                         <ArrowRight className="h-4 w-4" />
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             );
//           })}

//           {/* NOTICE & MEDIA */}
//           <Link
//             href="/notice-media"
//             onClick={() => setMobileOpen(false)}
//             className="flex border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] text-black"
//           >
//             Notice & Media
//           </Link>

//           {/* CAREER */}
//           <Link
//             href="/career"
//             onClick={() => setMobileOpen(false)}
//             className="flex border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] text-black"
//           >
//             Career
//           </Link>

//           {/* MOBILE SOCIAL ICONS */}
//           <div className="mt-5 flex items-center gap-5">
//             <a
//               href="https://www.facebook.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaFacebookF className="h-4 w-4" />
//             </a>

//             <a
//               href="https://www.youtube.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="YouTube"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaYoutube className="h-4 w-4" />
//             </a>

//             <a
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaLinkedinIn className="h-4 w-4" />
//             </a>

//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaInstagram className="h-4 w-4" />
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* =========================================================
//    NAVBAR
// ========================================================= */

// export default function Navbar() {
//   return (
//     <header className="relative z-[100] w-full">
//       <TopHeader />
//       <MainNav />
//     </header>
//   );
// }

// Sirat edited
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   MapPin,
//   Mail,
//   Phone,
//   Search,
//   ChevronDown,
//   AlignJustify,
//   Menu,
//   X,
//   ArrowRight,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaYoutube,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// /* =========================================================
//    DROPDOWN DATA
// ========================================================= */

// const dropdownMenus = {
//   "About UAMC": [
//     {
//       label: "Overview",
//       href: "/about/overview",
//     },
//     {
//       label: "History of UAMC",
//       href: "/about/historyofuamc",
//     },
//     {
//       label: "Vision & Mission",
//       href: "/about/vision",
//     },
//     {
//       label: "Aim & Objective",
//       href: "/about/aim",
//     },
//     {
//       label: "Organizational Structure",
//       href: "/about/structure",
//     },
//     {
//       label: "Founder Members",
//       href: "/about/founder",
//     },
//     {
//       label: "EC Members",
//       href: "/about/ec",
//     },
//     {
//       label: "GB Members",
//       href: "/about/gb",
//     },
//   ],

//   Facilities: [
//     {
//       label: "Hospital Service",
//       href: "/facility/hospitalservice",
//     },
//     {
//       label: "Departments",
//       href: "/facility/department",
//     },
//     {
//       label: "Library",
//       href: "/facility/libraryuamc",
//     },
//     {
//       label: "Medical Education Unit",
//       href: "/facility/medical",
//     },
//     {
//       label: "Training",
//       href: "/facility/training",
//     },
//     {
//       label: "Publications",
//       href: "/facility/publication",
//     },
//     {
//       label: "Seminar",
//       href: "/facility/seminar",
//     },
//     {
//       label: "Hostel",
//       href: "/facility/hostel",
//     },
//     {
//       label: "Laboratory",
//       href: "/facility/lab",
//     },
//     {
//       label: "Cafeteria",
//       href: "/facility/cafeteria",
//     },
//   ],

//   Admission: [
//     {
//       label: "Admission Procedure & Fees",
//       href: "/admission/procedure",
//     },
//     {
//       label: "Admission Papers",
//       href: "/admission/paper",
//     },
//     {
//       label: "Application Form",
//       href: "/admission/applicationform",
//     },
//     {
//       label: "Admission Results",
//       href: "/admission/result",
//     },
//     {
//       label: "Online Registration",
//       href: "/admission/registration",
//     },
//   ],
// };

// /* =========================================================
//    TOP HEADER
// ========================================================= */

// function TopHeader() {
//   return (
//     <div
//       className="w-full border-b border-dashed"
//       style={{
//         backgroundColor: "#FCFBFB",
//         borderColor: "rgba(0,0,0,0.2)",
//       }}
//     >
//       <div className="mx-auto flex min-h-[42px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-10 xl:px-[60px]">
//         {/* LEFT INFORMATION */}
//         <div className="flex items-center gap-5">
//           {/* Location */}
//           <div className="flex items-center gap-[10px]">
//             <MapPin
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model
//               Town
//             </span>
//           </div>

//           {/* Email */}
//           <div className="hidden items-center gap-[10px] md:flex">
//             <Mail
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               info@uamc.com
//             </span>
//           </div>

//           {/* Phone */}
//           <div className="hidden items-center gap-[10px] lg:flex">
//             <Phone
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               +880 1700-220000
//             </span>
//           </div>
//         </div>

//         {/* RIGHT PORTAL LINKS */}
//         <div className="hidden items-center gap-1 lg:flex">
//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
//           >
//             Student Portal
//           </Link>

//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
//           >
//             Faculty Portal
//           </Link>

//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
//           >
//             Notice
//           </Link>

//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    DESKTOP DROPDOWN
// ========================================================= */

// function DesktopDropdown({ label, items, isOpen, isActive, onToggle }) {
//   return (
//     <div className="relative">
//       {/* Dropdown Trigger */}
//       <button
//         type="button"
//         onClick={onToggle}
//         aria-expanded={isOpen}
//         className={`relative flex h-[44px] items-center gap-[7px] px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] transition-colors ${
//           isActive ? "text-[#018837]" : "text-black hover:text-[#018837]"
//         }`}
//       >
//         <span>{label}</span>

//         <ChevronDown
//           className={`h-[20px] w-[20px] transition-transform duration-200 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//           strokeWidth={2}
//         />

//         {/* ACTIVE GREEN UNDERLINE */}
//         <span
//           className={`absolute bottom-0 left-[10px] right-[10px] h-[2px] bg-[#018837] transition-all duration-200 ${
//             isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
//           }`}
//         />
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div
//           className={`absolute top-[calc(100%+8px)] z-[100] overflow-hidden border border-[#FECD2F] bg-[#4D4D4D]/90 shadow-[0_8px_25px_rgba(0,0,0,0.18)] ${
//             label === "About UAMC"
//               ? "left-0 w-[320px]"
//               : label === "Facilities"
//                 ? "left-1/2 w-[320px] -translate-x-1/2"
//                 : "right-0 w-[345px]"
//           }`}
//         >
//           {items.map((item, index) => (
//             <Link
//               key={item.label}
//               href={item.href}
//               className={`group flex min-h-[52px] items-center justify-between gap-4 px-4 py-3 text-white transition-colors hover:bg-[#3F3F3F] ${
//                 index !== items.length - 1 ? "border-b border-[#FECD2F]" : ""
//               }`}
//               onClick={onToggle}
//             >
//               <span className="font-body text-[15px] font-medium leading-[20px]">
//                 {item.label}
//               </span>

//               <ArrowRight
//                 className="h-[21px] w-[21px] shrink-0 transition-transform duration-200 group-hover:translate-x-1"
//                 strokeWidth={2}
//               />
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// /* =========================================================
//    MAIN NAVIGATION
// ========================================================= */

// function MainNav() {
//   const pathname = usePathname();

//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileDropdown, setMobileDropdown] = useState(null);

//   const simpleLinks = [
//     {
//       label: "Home",
//       href: "/",
//     },
//     {
//       label: "Notice & Media",
//       href: "/notice-media",
//     },
//     {
//       label: "Career",
//       href: "/career",
//     },
//   ];

//   /* =========================================================
//      ACTIVE ROUTE HELPERS
//   ========================================================= */

//   const isExactPath = (href) => {
//     return pathname === href;
//   };

//   const isSectionActive = (items) => {
//     return items.some((item) => pathname === item.href);
//   };

//   const isHomeActive = pathname === "/";

//   const isNoticeMediaActive =
//     pathname === "/notice-media" || pathname.startsWith("/notice-media/");

//   const isCareerActive =
//     pathname === "/career" || pathname.startsWith("/career/");

//   const isAboutActive = isSectionActive(dropdownMenus["About UAMC"]);

//   const isFacilitiesActive = isSectionActive(dropdownMenus.Facilities);

//   const isAdmissionActive = isSectionActive(dropdownMenus.Admission);

//   const toggleDropdown = (label) => {
//     setOpenDropdown((current) => (current === label ? null : label));
//   };

//   const toggleMobileDropdown = (label) => {
//     setMobileDropdown((current) => (current === label ? null : label));
//   };

//   return (
//     <div className="relative w-full border-b border-black/10 bg-white">
//       <div className="mx-auto flex min-h-[88px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-10 xl:px-[60px]">
//         {/* =================================================
//             LEFT SIDE
//         ================================================= */}

//         <div className="flex items-center gap-[30px]">
//           {/* LOGO + COLLEGE NAME */}
//           <Link
//             href="/"
//             className="flex shrink-0 items-center gap-[8.28px]"
//             onClick={() => {
//               setOpenDropdown(null);
//               setMobileOpen(false);
//             }}
//           >
//             <img
//               src="/logo.png"
//               alt="Uttara Adhunik Medical College"
//               className="h-[66.23px] w-[66.23px] shrink-0 object-contain"
//             />

//             <div className="font-display text-[20.6954px] font-bold leading-[25px] text-black">
//               <div>Uttara Adhunik</div>
//               <div>Medical College (UAMC)</div>
//             </div>
//           </Link>

//           {/* VERTICAL DIVIDER */}
//           <div className="hidden h-[20px] w-px bg-[#444444] lg:block" />

//           {/* SOCIAL MEDIA */}
//           <div className="hidden items-center gap-[16.13px] lg:flex">
//             <a
//               href="https://www.facebook.com/profile.php?id=61560225192182"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaFacebookF className="h-[13px] w-[13px]" />
//             </a>

//             <a
//               href="https://www.youtube.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="YouTube"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaYoutube className="h-[13px] w-[13px]" />
//             </a>

//             <a
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaLinkedinIn className="h-[13px] w-[13px]" />
//             </a>

//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="text-black transition-colors duration-200 hover:text-[#018837]"
//             >
//               <FaInstagram className="h-[13px] w-[13px]" />
//             </a>
//           </div>
//         </div>

//         {/* =================================================
//             DESKTOP NAVIGATION
//         ================================================= */}

//         <nav className="hidden items-center lg:flex">
//           {/* HOME */}
//           <Link
//             href="/"
//             onClick={() => setOpenDropdown(null)}
//             className={`relative flex h-[44px] items-center px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] transition-colors ${
//               isHomeActive
//                 ? "text-[#018837]"
//                 : "text-black hover:text-[#018837]"
//             }`}
//           >
//             Home
//             {/* ACTIVE GREEN UNDERLINE */}
//             <span
//               className={`absolute bottom-0 left-[10px] right-[10px] h-[2px] bg-[#018837] transition-all duration-200 ${
//                 isHomeActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
//               }`}
//             />
//           </Link>

//           {/* ABOUT DROPDOWN */}
//           <DesktopDropdown
//             label="About UAMC"
//             items={dropdownMenus["About UAMC"]}
//             isOpen={openDropdown === "About UAMC"}
//             isActive={isAboutActive}
//             onToggle={() => toggleDropdown("About UAMC")}
//           />

//           {/* FACILITIES DROPDOWN */}
//           <DesktopDropdown
//             label="Facilities"
//             items={dropdownMenus.Facilities}
//             isOpen={openDropdown === "Facilities"}
//             isActive={isFacilitiesActive}
//             onToggle={() => toggleDropdown("Facilities")}
//           />

//           {/* ADMISSION DROPDOWN */}
//           <DesktopDropdown
//             label="Admission"
//             items={dropdownMenus.Admission}
//             isOpen={openDropdown === "Admission"}
//             isActive={isAdmissionActive}
//             onToggle={() => toggleDropdown("Admission")}
//           />

//           {/* NOTICE & MEDIA */}
//           <Link
//             href="/notice-media"
//             onClick={() => setOpenDropdown(null)}
//             className={`relative flex h-[44px] items-center px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] transition-colors ${
//               isNoticeMediaActive
//                 ? "text-[#018837]"
//                 : "text-black hover:text-[#018837]"
//             }`}
//           >
//             Notice & Media
//             {/* ACTIVE GREEN UNDERLINE */}
//             <span
//               className={`absolute bottom-0 left-[10px] right-[10px] h-[2px] bg-[#018837] transition-all duration-200 ${
//                 isNoticeMediaActive
//                   ? "scale-x-100 opacity-100"
//                   : "scale-x-0 opacity-0"
//               }`}
//             />
//           </Link>

//           {/* CAREER */}
//           <Link
//             href="/career"
//             onClick={() => setOpenDropdown(null)}
//             className={`relative flex h-[44px] items-center px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] transition-colors ${
//               isCareerActive
//                 ? "text-[#018837]"
//                 : "text-black hover:text-[#018837]"
//             }`}
//           >
//             Career
//             {/* ACTIVE GREEN UNDERLINE */}
//             <span
//               className={`absolute bottom-0 left-[10px] right-[10px] h-[2px] bg-[#018837] transition-all duration-200 ${
//                 isCareerActive
//                   ? "scale-x-100 opacity-100"
//                   : "scale-x-0 opacity-0"
//               }`}
//             />
//           </Link>
//         </nav>

//         {/* =================================================
//             RIGHT ACTIONS
//         ================================================= */}

//         <div className="flex items-center gap-5">
//           {/* Search */}
//           <button
//             type="button"
//             aria-label="Search"
//             className="text-black transition-colors hover:text-[#018837]"
//           >
//             <Search className="h-6 w-6" strokeWidth={2} />
//           </button>

//           {/* Desktop menu/alignment icon */}
//           <button
//             type="button"
//             aria-label="Menu"
//             className="hidden text-black transition-colors hover:text-[#018837] lg:block"
//           >
//             <AlignJustify className="h-6 w-6" strokeWidth={2} />
//           </button>

//           {/* Mobile menu */}
//           <button
//             type="button"
//             aria-label="Toggle menu"
//             className="text-black lg:hidden"
//             onClick={() => {
//               setMobileOpen((value) => !value);
//               setMobileDropdown(null);
//             }}
//           >
//             {mobileOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* =================================================
//           MOBILE NAVIGATION
//       ================================================= */}

//       {mobileOpen && (
//         <div className="absolute left-0 right-0 top-full z-[200] border-t border-black/10 bg-white px-6 py-4 shadow-lg lg:hidden">
//           {/* HOME */}
//           <Link
//             href="/"
//             onClick={() => setMobileOpen(false)}
//             className={`flex border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] ${
//               isHomeActive ? "text-[#018837]" : "text-black"
//             }`}
//           >
//             Home
//           </Link>

//           {/* MOBILE DROPDOWNS */}
//           {Object.entries(dropdownMenus).map(([label, items]) => {
//             const isOpen = mobileDropdown === label;

//             const isActive =
//               label === "About UAMC"
//                 ? isAboutActive
//                 : label === "Facilities"
//                   ? isFacilitiesActive
//                   : isAdmissionActive;

//             return (
//               <div key={label} className="border-b border-black/10">
//                 {/* Trigger */}
//                 <button
//                   type="button"
//                   onClick={() => toggleMobileDropdown(label)}
//                   className={`flex w-full items-center justify-between py-3 font-display text-sm uppercase tracking-[0.02em] ${
//                     isActive ? "text-[#018837]" : "text-black"
//                   }`}
//                 >
//                   <span>{label}</span>

//                   <ChevronDown
//                     className={`h-5 w-5 transition-transform duration-200 ${
//                       isOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {/* Items */}
//                 {isOpen && (
//                   <div className="mb-3 overflow-hidden border border-[#FECD2F] bg-[#4D4D4D]/80">
//                     {items.map((item, index) => {
//                       const itemIsActive = pathname === item.href;

//                       return (
//                         <Link
//                           key={item.label}
//                           href={item.href}
//                           onClick={() => {
//                             setMobileOpen(false);
//                             setMobileDropdown(null);
//                           }}
//                           className={`flex items-center justify-between px-4 py-3 transition-colors ${
//                             itemIsActive
//                               ? "bg-[#3F3F3F] text-[#FECD2F]"
//                               : "text-white"
//                           } ${
//                             index !== items.length - 1
//                               ? "border-b border-[#FECD2F]"
//                               : ""
//                           }`}
//                         >
//                           <span className="font-body text-[14px]">
//                             {item.label}
//                           </span>

//                           <ArrowRight className="h-4 w-4" strokeWidth={2} />
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             );
//           })}

//           {/* NOTICE & MEDIA */}
//           <Link
//             href="/notice-media"
//             onClick={() => setMobileOpen(false)}
//             className={`flex border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] ${
//               isNoticeMediaActive ? "text-[#018837]" : "text-black"
//             }`}
//           >
//             Notice & Media
//           </Link>

//           {/* CAREER */}
//           <Link
//             href="/career"
//             onClick={() => setMobileOpen(false)}
//             className={`flex border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] ${
//               isCareerActive ? "text-[#018837]" : "text-black"
//             }`}
//           >
//             Career
//           </Link>

//           {/* MOBILE SOCIAL ICONS */}
//           <div className="mt-5 flex items-center gap-5">
//             <a
//               href="https://www.facebook.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaFacebookF className="h-4 w-4" />
//             </a>

//             <a
//               href="https://www.youtube.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="YouTube"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaYoutube className="h-4 w-4" />
//             </a>

//             <a
//               href="https://www.linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaLinkedinIn className="h-4 w-4" />
//             </a>

//             <a
//               href="https://www.instagram.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="text-black hover:text-[#018837]"
//             >
//               <FaInstagram className="h-4 w-4" />
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// /* =========================================================
//    NAVBAR
// ========================================================= */

// export default function Navbar() {
//   return (
//     <header className="relative z-[100] w-full">
//       <TopHeader />
//       <MainNav />
//     </header>
//   );
// }

// Version 2
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  MapPin,
  Mail,
  Phone,
  Search,
  ChevronDown,
  AlignJustify,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

/* =========================================================
   DROPDOWN DATA
========================================================= */

const dropdownMenus = {
  "About UAMC": [
    {
      label: "Overview",
      href: "/about/overview",
    },
    {
      label: "History of UAMC",
      href: "/about/historyofuamc",
    },
    {
      label: "Vision & Mission",
      href: "/about/vision",
    },
    {
      label: "Aim & Objective",
      href: "/about/aim",
    },
    {
      label: "Organizational Structure",
      href: "/about/structure",
    },
    {
      label: "Founder Members",
      href: "/about/founder",
    },
    {
      label: "EC Members",
      href: "/about/ec",
    },
    {
      label: "GB Members",
      href: "/about/gb",
    },
  ],

  Facilities: [
    {
      label: "Hospital Service",
      href: "/facility/hospitalservice",
    },
    {
      label: "Departments",
      href: "/facility/department",
    },
    {
      label: "Library",
      href: "/facility/libraryuamc",
    },
    {
      label: "Medical Education Unit",
      href: "/facility/medical",
    },
    {
      label: "Training",
      href: "/facility/training",
    },
    {
      label: "Publications",
      href: "/facility/publication",
    },
    {
      label: "Seminar",
      href: "/facility/seminar",
    },
    {
      label: "Hostel",
      href: "/facility/hostel",
    },
    {
      label: "Laboratory",
      href: "/facility/lab",
    },
    {
      label: "Cafeteria",
      href: "/facility/cafeteria",
    },
  ],

  Admission: [
    {
      label: "Admission Procedure & Fees",
      href: "/admission/procedure",
    },
    {
      label: "Admission Papers",
      href: "/admission/paper",
    },
    {
      label: "Application Form",
      href: "/admission/applicationform",
    },
    {
      label: "Admission Results",
      href: "/admission/result",
    },
    {
      label: "Online Registration",
      href: "/admission/registration",
    },
  ],

  Career: [
    {
      label: "CAREER",
      href: "/contact",
    },
  ],
};

/* =========================================================
   TOP HEADER
========================================================= */

function TopHeader() {
  return (
    <div
      className="w-full border-b border-dashed"
      style={{
        backgroundColor: "#FCFBFB",
        borderColor: "rgba(0,0,0,0.2)",
      }}
    >
      <div className="mx-auto flex min-h-[42px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-10 xl:px-[60px]">
        {/* LEFT INFORMATION */}
        <div className="flex items-center gap-5">
          {/* Location */}
          <div className="flex items-center gap-[10px]">
            <MapPin
              className="h-5 w-5 shrink-0"
              strokeWidth={1.67}
              style={{ color: "rgba(0,0,0,0.5)" }}
            />

            <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
              House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model
              Town
            </span>
          </div>

          {/* Email */}
          <div className="hidden items-center gap-[10px] md:flex">
            <Mail
              className="h-5 w-5 shrink-0"
              strokeWidth={1.67}
              style={{ color: "rgba(0,0,0,0.5)" }}
            />

            <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
              info@uamc.com
            </span>
          </div>

          {/* Phone */}
          <div className="hidden items-center gap-[10px] lg:flex">
            <Phone
              className="h-5 w-5 shrink-0"
              strokeWidth={1.67}
              style={{ color: "rgba(0,0,0,0.5)" }}
            />

            <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
              +880 1700-220000
            </span>
          </div>
        </div>

        {/* RIGHT PORTAL LINKS */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="#"
            className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
          >
            Student Portal
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
          >
            Faculty Portal
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
          >
            Notice
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   DESKTOP DROPDOWN
========================================================= */

function DesktopDropdown({ label, items, isOpen, isActive, onToggle }) {
  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`relative flex h-[44px] items-center gap-[7px] px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] transition-colors ${
          isActive ? "text-[#018837]" : "text-black hover:text-[#018837]"
        }`}
      >
        <span>{label}</span>

        <ChevronDown
          className={`h-[20px] w-[20px] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          strokeWidth={2}
        />

        {/* ACTIVE GREEN UNDERLINE */}
        <span
          className={`absolute bottom-0 left-[10px] right-[10px] h-[2px] bg-[#018837] transition-all duration-200 ${
            isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute top-[calc(100%+8px)] z-[300] overflow-hidden border border-[#FECD2F] bg-[#4D4D4D]/90 shadow-[0_8px_25px_rgba(0,0,0,0.18)] ${
            label === "About UAMC"
              ? "left-0 w-[320px]"
              : label === "Facilities"
                ? "left-1/2 w-[320px] -translate-x-1/2"
                : "right-0 w-[345px]"
          }`}
        >
          {items.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`group flex min-h-[52px] items-center justify-between gap-4 px-4 py-3 text-white transition-colors hover:bg-[#3F3F3F] ${
                index !== items.length - 1 ? "border-b border-[#FECD2F]" : ""
              }`}
              onClick={onToggle}
            >
              <span className="font-body text-[15px] font-medium leading-[20px]">
                {item.label}
              </span>

              <ArrowRight
                className="h-[21px] w-[21px] shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   MAIN NAVIGATION
========================================================= */

function MainNav() {
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  /* =========================================================
     ACTIVE ROUTE HELPERS
  ========================================================= */

  const isSectionActive = (items) => {
    return items.some((item) => pathname === item.href);
  };

  const isHomeActive = pathname === "/";

  const isNoticeMediaActive =
    pathname === "/notice-media" || pathname.startsWith("/notice-media/");

  const isCareerActive =
    pathname === "/career" || pathname.startsWith("/career/");

  const isAboutActive = isSectionActive(dropdownMenus["About UAMC"]);

  const isFacilitiesActive = isSectionActive(dropdownMenus.Facilities);

  const isAdmissionActive = isSectionActive(dropdownMenus.Admission);

  /* =========================================================
     DESKTOP DROPDOWN
  ========================================================= */

  const toggleDropdown = (label) => {
    setOpenDropdown((current) => (current === label ? null : label));
  };

  /* =========================================================
     UNIVERSAL MENU
  ========================================================= */

  const toggleMenu = () => {
    setMobileOpen((current) => !current);

    // Close desktop dropdown when universal menu opens
    setOpenDropdown(null);

    // Reset mobile dropdown
    setMobileDropdown(null);
  };

  const closeMenu = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (label) => {
    setMobileDropdown((current) => (current === label ? null : label));
  };

  return (
    <div className="relative w-full border-b border-black/10 bg-white">
      <div className="mx-auto flex min-h-[88px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-10 xl:px-[60px]">
        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="flex items-center gap-[30px]">
          {/* LOGO + COLLEGE NAME */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-[8.28px]"
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="Uttara Adhunik Medical College"
              className="h-[66.23px] w-[66.23px] shrink-0 object-contain"
            />

            <div className="font-display text-[20.6954px] font-bold leading-[25px] text-black">
              <div>Uttara Adhunik</div>
              <div>Medical College (UAMC)</div>
            </div>
          </Link>

          {/* VERTICAL DIVIDER */}
          <div className="hidden h-[20px] w-px bg-[#444444] lg:block" />

          {/* SOCIAL MEDIA */}
          <div className="hidden items-center gap-[16.13px] lg:flex">
            <a
              href="https://www.facebook.com/profile.php?id=61560225192182"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-black transition-colors duration-200 hover:text-[#018837]"
            >
              <FaFacebookF className="h-[13px] w-[13px]" />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-black transition-colors duration-200 hover:text-[#018837]"
            >
              <FaYoutube className="h-[13px] w-[13px]" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-black transition-colors duration-200 hover:text-[#018837]"
            >
              <FaLinkedinIn className="h-[13px] w-[13px]" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-black transition-colors duration-200 hover:text-[#018837]"
            >
              <FaInstagram className="h-[13px] w-[13px]" />
            </a>
          </div>
        </div>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="hidden items-center lg:flex">
          {/* HOME */}
          <Link
            href="/"
            onClick={() => setOpenDropdown(null)}
            className={`relative flex h-[44px] items-center px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] transition-colors ${
              isHomeActive
                ? "text-[#018837]"
                : "text-black hover:text-[#018837]"
            }`}
          >
            Home
            <span
              className={`absolute bottom-0 left-[10px] right-[10px] h-[2px] bg-[#018837] transition-all duration-200 ${
                isHomeActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            />
          </Link>

          {/* ABOUT */}
          <DesktopDropdown
            label="About UAMC"
            items={dropdownMenus["About UAMC"]}
            isOpen={openDropdown === "About UAMC"}
            isActive={isAboutActive}
            onToggle={() => toggleDropdown("About UAMC")}
          />

          {/* FACILITIES */}
          <DesktopDropdown
            label="Facilities"
            items={dropdownMenus.Facilities}
            isOpen={openDropdown === "Facilities"}
            isActive={isFacilitiesActive}
            onToggle={() => toggleDropdown("Facilities")}
          />

          {/* ADMISSION */}
          <DesktopDropdown
            label="Admission"
            items={dropdownMenus.Admission}
            isOpen={openDropdown === "Admission"}
            isActive={isAdmissionActive}
            onToggle={() => toggleDropdown("Admission")}
          />

          {/* NOTICE & MEDIA */}
          <Link
            href="/notice-media"
            onClick={() => setOpenDropdown(null)}
            className={`relative flex h-[44px] items-center px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] transition-colors ${
              isNoticeMediaActive
                ? "text-[#018837]"
                : "text-black hover:text-[#018837]"
            }`}
          >
            Notice & Media
            <span
              className={`absolute bottom-0 left-[10px] right-[10px] h-[2px] bg-[#018837] transition-all duration-200 ${
                isNoticeMediaActive
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
              }`}
            />
          </Link>

          {/* CAREER */}
          <Link
            href="/career"
            onClick={() => setOpenDropdown(null)}
            className={`relative flex h-[44px] items-center px-[10px] font-display text-[15px] font-normal uppercase tracking-[0.02em] transition-colors ${
              isCareerActive
                ? "text-[#018837]"
                : "text-black hover:text-[#018837]"
            }`}
          >
            Career
            <span
              className={`absolute bottom-0 left-[10px] right-[10px] h-[2px] bg-[#018837] transition-all duration-200 ${
                isCareerActive
                  ? "scale-x-100 opacity-100"
                  : "scale-x-0 opacity-0"
              }`}
            />
          </Link>
        </nav>

        {/* =================================================
            RIGHT ACTIONS
        ================================================= */}

        <div className="flex items-center gap-5">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="text-black transition-colors hover:text-[#018837]"
          >
            <Search className="h-6 w-6" strokeWidth={2} />
          </button>

          {/* =================================================
              UNIVERSAL MENU BUTTON
              Works on desktop, tablet and mobile
          ================================================= */}

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={toggleMenu}
            className="text-black transition-colors hover:text-[#018837]"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" strokeWidth={2} />
            ) : (
              <>
                {/* Desktop */}
                <AlignJustify
                  className="hidden h-6 w-6 lg:block"
                  strokeWidth={2}
                />

                {/* Tablet + Mobile */}
                <Menu className="block h-6 w-6 lg:hidden" strokeWidth={2} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* =========================================================
          UNIVERSAL EXPANDED MENU
          
          IMPORTANT:
          Removed "lg:hidden" so this works on ALL devices.
      ========================================================= */}

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full z-[200] border-t border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
          <div className="mx-auto max-h-[calc(100vh-88px)] w-full max-w-[1440px] overflow-y-auto px-5 py-4 lg:px-10 xl:px-[60px]">
            {/* HOME */}
            <Link
              href="/"
              onClick={closeMenu}
              className={`flex border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] ${
                isHomeActive ? "text-[#018837]" : "text-black"
              }`}
            >
              Home
            </Link>

            {/* DROPDOWNS */}
            {Object.entries(dropdownMenus).map(([label, items]) => {
              const isOpen = mobileDropdown === label;

              const isActive =
                label === "About UAMC"
                  ? isAboutActive
                  : label === "Facilities"
                    ? isFacilitiesActive
                    : isAdmissionActive;

              return (
                <div key={label} className="border-b border-black/10">
                  {/* Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(label)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center justify-between py-3 font-display text-sm uppercase tracking-[0.02em] ${
                      isActive ? "text-[#018837]" : "text-black"
                    }`}
                  >
                    <span>{label}</span>

                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Items */}
                  {isOpen && (
                    <div className="mb-3 overflow-hidden border border-[#FECD2F] bg-[#4D4D4D]/90">
                      {items.map((item, index) => {
                        const itemIsActive = pathname === item.href;

                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={closeMenu}
                            className={`flex items-center justify-between px-4 py-3 transition-colors ${
                              itemIsActive
                                ? "bg-[#3F3F3F] text-[#FECD2F]"
                                : "text-white hover:bg-[#3F3F3F]"
                            } ${
                              index !== items.length - 1
                                ? "border-b border-[#FECD2F]"
                                : ""
                            }`}
                          >
                            <span className="font-body text-[14px]">
                              {item.label}
                            </span>

                            <ArrowRight className="h-4 w-4" strokeWidth={2} />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* NOTICE & MEDIA */}
            <Link
              href="/notice-media"
              onClick={closeMenu}
              className={`flex border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] ${
                isNoticeMediaActive ? "text-[#018837]" : "text-black"
              }`}
            >
              Notice & Media
            </Link>

            {/* CAREER */}
            <Link
              href="/career"
              onClick={closeMenu}
              className={`flex border-b border-black/10 py-3 font-display text-sm uppercase tracking-[0.02em] ${
                isCareerActive ? "text-[#018837]" : "text-black"
              }`}
            >
              Career
            </Link>

            {/* PORTAL LINKS */}
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="#"
                onClick={closeMenu}
                className="rounded-[5px] border border-black/10 px-4 py-3 font-body text-sm text-[#444] transition-colors hover:border-[#018837] hover:text-[#018837]"
              >
                Student Portal
              </Link>

              <Link
                href="#"
                onClick={closeMenu}
                className="rounded-[5px] border border-black/10 px-4 py-3 font-body text-sm text-[#444] transition-colors hover:border-[#018837] hover:text-[#018837]"
              >
                Faculty Portal
              </Link>

              <Link
                href="#"
                onClick={closeMenu}
                className="rounded-[5px] border border-black/10 px-4 py-3 font-body text-sm text-[#444] transition-colors hover:border-[#018837] hover:text-[#018837]"
              >
                Notice
              </Link>

              <Link
                href="#"
                onClick={closeMenu}
                className="rounded-[5px] border border-black/10 px-4 py-3 font-body text-sm text-[#444] transition-colors hover:border-[#018837] hover:text-[#018837]"
              >
                Contact
              </Link>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-5 flex items-center gap-5 pb-2">
              <a
                href="https://www.facebook.com/profile.php?id=61560225192182"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-black transition-colors hover:text-[#018837]"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-black transition-colors hover:text-[#018837]"
              >
                <FaYoutube className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-black transition-colors hover:text-[#018837]"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-black transition-colors hover:text-[#018837]"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  return (
    <header className="relative z-[100] w-full">
      <TopHeader />
      <MainNav />
    </header>
  );
}
