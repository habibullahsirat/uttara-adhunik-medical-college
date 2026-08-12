import Banner from "@/components/FacilityPage/Training/Banner";
// import TabNav from "@/components/FacilityPage/Training/TabNav";
import TabNav from "@/components/FacilityPage/shared/TabNav";
import TrainingSection from "@/components/FacilityPage/Training/TrainingSection";
import Academic from "@/components/FacilityPage/Training/Academic";

export default function Training() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />

      <TrainingSection />
      <Academic />
    </div>
  );
}
