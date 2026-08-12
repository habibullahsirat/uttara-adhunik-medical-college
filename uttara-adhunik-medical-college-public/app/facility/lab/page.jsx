import Banner from "@/components/FacilityPage/Labratory/Banner";
// import TabNav from "@/components/FacilityPage/Labratory/TabNav";
import TabNav from "@/components/FacilityPage/shared/TabNav";
import LabratoryServices from "@/components/FacilityPage/Labratory/LabratoryServices";
import Service from "@/components/FacilityPage/Labratory/Service";

export default function Labratory() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />

      <LabratoryServices />
      <Service />
    </div>
  );
}
