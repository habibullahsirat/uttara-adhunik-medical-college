import Banner from "@/components/Aboutpage/HistoryUAMC/Banner";
// import TabNav from "@/components/Aboutpage/HistoryUAMC/TabNav";
import TabNav from "@/components/Aboutpage/shared/TabNav";

import HistorySection from "@/components/Aboutpage/HistoryUAMC/HistorySection";
import StatStrip from "@/components/Aboutpage/HistoryUAMC/StatStrip";
import TimelineSection from "@/components/Aboutpage/HistoryUAMC/TimelineSection";
import AdmissionAidSection from "@/components/Aboutpage/HistoryUAMC/AdmissionAidSection";
import AdmissionCTA from "@/components/Aboutpage/HistoryUAMC/AdmissionCTA";

export default function HistoryUAMC() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />
      <HistorySection />

      <StatStrip />
      <TimelineSection />
      <AdmissionAidSection />

      <AdmissionCTA />
    </div>
  );
}
