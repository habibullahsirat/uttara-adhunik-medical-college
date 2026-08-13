import Banner from "@/components/Aboutpage/Overview/Banner";
import TabNav from "@/components/Aboutpage/shared/TabNav";
import AboutSection from "@/components/Aboutpage/Overview/AboutSection";
import StatStrip from "@/components/homepage/StatStrip";
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
      <StatStrip />
      <AdmissionAidSection />
      <SustainabilitySection />
      <PrincipalMessage />
      <AdmissionCTA />
      <Testimonials />
    </div>
  );
}
