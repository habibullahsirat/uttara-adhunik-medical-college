import Banner from "@/components/FacilityPage/Cafeteria/Banner";
import TabNav from "@/components/FacilityPage/shared/TabNav";
import CafeteriaSection from "@/components/FacilityPage/Cafeteria/CafeteriaSection";
import Service from "@/components/FacilityPage/Cafeteria/Service";
export default function Cafeteria() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />

      <CafeteriaSection />
      <Service />
    </div>
  );
}
