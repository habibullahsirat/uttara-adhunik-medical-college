import React from "react";

import Hero from "@/components/homepage/Hero";
import StatStrip from "@/components/homepage/StatStrip";
import AboutUAMC from "@/components/Aboutpage/Overview/AboutSection";
import NoticeAndPublication from "@/components/homepage/NoticeAndPublication";
import FindDepartment from "@/components/homepage/FindDepartment";
import Admission from "@/components/homepage/Admission";
import OurFacilities from "@/components/homepage/OurFacilities";
import PrincipalMessage from "@/components/homepage/PrincipalMessage";
import CampusLife from "@/components/homepage/CampusLife";
import AlumniEvents from "@/components/homepage/AlumniEvents";
import NewsSection from "@/components/homepage/NewsSection";
import Testimonials from "@/components/homepage/Testimonials";

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
