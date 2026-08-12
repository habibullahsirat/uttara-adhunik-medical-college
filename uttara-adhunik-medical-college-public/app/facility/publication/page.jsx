import Banner from "@/components/FacilityPage/Publication/Banner";
// import TabNav from "@/components/FacilityPage/Publication/TabNav";
import TabNav from "@/components/FacilityPage/shared/TabNav";
import PublicationSection from "@/components/FacilityPage/Publication/PublicationSection";

export default function Publication() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />

      <PublicationSection />
    </div>
  );
}
