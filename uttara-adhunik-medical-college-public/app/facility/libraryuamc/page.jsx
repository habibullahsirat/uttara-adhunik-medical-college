import Banner from "@/components/FacilityPage/Library/Banner";
import TabNav from "@/components/FacilityPage/Library/TabNav";

import LibrarySection from "@/components/FacilityPage/Library/LibrarySection";
import LibraryFacility from "@/components/FacilityPage/Library/LibraryFacility";

export default function Library() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />
      <LibrarySection />
      <LibraryFacility />
    </div>
  );
}
