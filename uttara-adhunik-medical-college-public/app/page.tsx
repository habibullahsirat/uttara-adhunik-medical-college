"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Search,
  ChevronDown,
  AlignJustify,
  Clock,
  ArrowRight,
  Star,
  Menu,
  // Facebook,
  // Youtube,
  // Linkedin,
  // Instagram,
  X,
} from "lucide-react";
import Hero from "@/components/Homepage/Hero";
import StatStrip from "@/components/Homepage/StatStrip";
import About from "@/components/Homepage/About";
import NoticeAndPublication from "@/components/Homepage/NoticeAndPublication";
import FindDepartment from "@/components/Homepage/FindDepartment";
import Admission from "@/components/Homepage/Admission";
import OurFacilities from "@/components/Homepage/OurFacilities";
import PrincipalMessage from "@/components/Homepage/PrincipalMessage";
import CampusLife from "@/components/Homepage/CampusLife";
import AlumniEvents from "@/components/Homepage/AlumniEvents";
import NewsSection from "@/components/Homepage/NewsSection";
import Testimonials from "@/components/Homepage/Testimonials";

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

/* ------------------------------------------------------------------ */
/*  1. Top utility bar + main nav                                     */
/* ------------------------------------------------------------------ */
// function TopBar() {
//   return (
//     <div className="hidden md:flex items-center justify-center gap-14 border-b border-dashed border-black/20 bg-[#FCFBFB] px-20 py-2.5 font-body text-xs font-medium text-black/50">
//       <span className="flex items-center gap-1.5">
//         <MapPin className="h-3.5 w-3.5" strokeWidth={1.7} />
//         House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model Town
//       </span>
//       <span className="flex items-center gap-1.5">
//         <Mail className="h-3.5 w-3.5" strokeWidth={1.7} />
//         info@uamc.com
//       </span>
//       <span className="flex items-center gap-1.5">
//         <Phone className="h-3.5 w-3.5" strokeWidth={1.7} />
//         +880 1700-220000
//       </span>
//       <span className="ml-auto ..." />
//       <nav className="ml-auto flex items-center gap-0 text-[#444444]">
//         {["Student Portal", "Teachers Portal", "Alumni", "Events"].map(
//           (label, i) => (
//             <span key={label} className="flex items-center">
//               <a href="#" className="px-4 py-1 hover:text-[#018837]">
//                 {label}
//               </a>
//               {i < 3 && <span className="h-4 w-px bg-[#444444]" />}
//             </span>
//           ),
//         )}
//       </nav>
//     </div>
//   );
// }

export default function LandingPage() {
  return (
    <div className="font-body text-black">
      <style>{fontImport}</style>
      {/* <Navbar /> */}
      <Hero />
      <NoticeAndPublication />
      <About />
      <StatStrip />
      <FindDepartment />
      <Admission />
      <OurFacilities />
      <PrincipalMessage />
      <CampusLife />
      <AlumniEvents />
      <NewsSection />
      <Testimonials />
    </div>
  );
}
