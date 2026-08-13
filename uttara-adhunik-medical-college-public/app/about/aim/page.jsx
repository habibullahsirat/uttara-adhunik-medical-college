import Banner from "@/components/Aboutpage/Aim/Banner";
// import TabNav from "@/components/Aboutpage/Aim/TabNav";
import TabNav from "@/components/Aboutpage/shared/TabNav";
import AimSection from "@/components/Aboutpage/Aim/AimSection";
import Admission from "@/components/homepage/Admission";

export default function Aim() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />
      <AimSection />

      <Admission />
    </div>
  );
}
