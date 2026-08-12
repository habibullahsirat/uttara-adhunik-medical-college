import Banner from "@/components/Aboutpage/GB/Banner";
// import TabNav from "@/components/Aboutpage/GB/TabNav";
import TabNav from "@/components/Aboutpage/shared/TabNav";
import GBSection from "@/components/Aboutpage/GB/GBSection";
import Admission from "@/components/Aboutpage/Aim/Admission";

export default function GB() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />
      <GBSection />

      <Admission />
    </div>
  );
}
