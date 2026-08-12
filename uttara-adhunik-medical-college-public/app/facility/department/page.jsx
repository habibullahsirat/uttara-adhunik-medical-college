import Banner from "@/components/FacilityPage/Department/Banner";
// import TabNav from "@/components/FacilityPage/Department/TabNav";
import TabNav from "@/components/FacilityPage/shared/TabNav";
import DepartmentSection from "@/components/FacilityPage/Department/DepartmentSection";

export default function Department() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />

      <DepartmentSection />
    </div>
  );
}
