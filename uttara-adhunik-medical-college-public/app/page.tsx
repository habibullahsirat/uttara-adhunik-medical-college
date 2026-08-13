import React from "react";

import Hero from "@/components/Homepage/Hero";
import StatStrip from "@/components/Homepage/StatStrip";
// import About from "@/components/Homepage/About";
import AboutUAMC from "@/components/Aboutpage/Overview/AboutSection";
import NoticeAndPublication from "@/components/Homepage/NoticeAndPublication";
import FindDepartment from "@/components/Homepage/FindDepartment";
import Admission from "@/components/Homepage/Admission";
import OurFacilities from "@/components/Homepage/OurFacilities";
import PrincipalMessage from "@/components/Homepage/PrincipalMessage";
import CampusLife from "@/components/Homepage/CampusLife";
import AlumniEvents from "@/components/Homepage/AlumniEvents";
import NewsSection from "@/components/Homepage/NewsSection";
import Testimonials from "@/components/Homepage/Testimonials";

const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;500;700&family=Inter:wght@400;500;600;700&display=swap');
  .font-display { font-family: 'Bitter', serif; }
  .font-body { font-family: 'Inter', sans-serif; }
`;

export default function LandingPage() {
  return (
    <div className="font-body text-black">
      <style>{fontImport}</style>
      <Hero />
      <NoticeAndPublication />
      {/* <About /> */}
      <AboutUAMC />
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
