import Banner from "@/components/Aboutpage/Founder/Banner";
// import TabNav from "@/components/Aboutpage/Founder/TabNav";
import TabNav from "@/components/Aboutpage/shared/TabNav";
import FounderSection from "@/components/Aboutpage/Founder/FounderSection";
import Admission from "@/components/homepage/Admission";

export default function Founder() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />
      <FounderSection />

      <Admission />
    </div>
  );
}
