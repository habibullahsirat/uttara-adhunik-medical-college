import Banner from "@/components/Aboutpage/EC/Banner";
// import TabNav from "@/components/Aboutpage/EC/TabNav";
import TabNav from "@/components/Aboutpage/shared/TabNav";
import ECSection from "@/components/Aboutpage/EC/ECSection";
import Admission from "@/components/homepage/Admission";

export default function EC() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />
      <ECSection />
      <Admission />
    </div>
  );
}
