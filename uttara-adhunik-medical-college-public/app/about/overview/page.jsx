import Banner from "@/components/Aboutpage/Overview/Banner";
import TabNav from "@/components/Aboutpage/shared/TabNav";
import AboutSection from "@/components/Aboutpage/Overview/AboutSection"; // Main Component it is used somewhere
import StatStrip from "@/components/homepage/StatStrip";
import AdmissionAidSection from "@/components/Aboutpage/Overview/AdmissionAidSection";
import SustainabilitySection from "@/components/Aboutpage/Overview/SustainabilitySection";
import PrincipalMessage from "@/components/homepage/PrincipalMessage";
import Admission from "@/components/homepage/Admission";
import VisitingSection from "@/components/Aboutpage/Overview/VisitingSection";
import Testimonials from "@/components/homepage/Testimonials";

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
      <Admission />
      <Testimonials />
    </div>
  );
}
