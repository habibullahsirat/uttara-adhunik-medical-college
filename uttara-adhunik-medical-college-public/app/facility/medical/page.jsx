import Banner from "@/components/FacilityPage/Medical/Banner";
import TabNav from "@/components/FacilityPage/Medical/TabNav";
import Education from "@/components/FacilityPage/Medical/Education";
import Resource from "@/components/FacilityPage/Medical/Resource";

export default function Medical() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />

      <Education />
      <Resource />
    </div>
  );
}
