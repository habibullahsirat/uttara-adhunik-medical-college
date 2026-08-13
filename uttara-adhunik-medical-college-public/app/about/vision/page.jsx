import Banner from "@/components/Aboutpage/Vision/Banner";
// import TabNav from "@/components/Aboutpage/Vision/TabNav";
import TabNav from "@/components/Aboutpage/shared/TabNav";
import VisionSection from "@/components/Aboutpage/Vision/VisionSection";
import Admission from "@/components/homepage/Admission";

export default function Vision() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />
      <VisionSection />
      <Admission />
    </div>
  );
}
