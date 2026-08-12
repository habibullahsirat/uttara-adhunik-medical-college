import Banner from "@/components/FacilityPage/Hostel/Banner";
// import TabNav from "@/components/FacilityPage/Hostel/TabNav";
import TabNav from "@/components/FacilityPage/shared/TabNav";
import HostelSection from "@/components/FacilityPage/Hostel/HostelSection";
import Service from "@/components/FacilityPage/Hostel/Service";
export default function Hostel() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />

      <HostelSection />
      <Service />
    </div>
  );
}
