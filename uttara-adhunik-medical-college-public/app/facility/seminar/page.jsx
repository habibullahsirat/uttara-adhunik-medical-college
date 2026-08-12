import Banner from "@/components/FacilityPage/Seminar/Banner";
// import TabNav from "@/components/FacilityPage/Seminar/TabNav";
import TabNav from "@/components/FacilityPage/shared/TabNav";
import SeminarSection from "@/components/FacilityPage/Seminar/SeminarSection";
import Feature from "@/components/FacilityPage/Seminar/Feature";

export default function Seminar() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />

      <SeminarSection />
      <Feature />
    </div>
  );
}
