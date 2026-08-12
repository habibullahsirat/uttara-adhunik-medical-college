import Banner from "@/components/Aboutpage/Structure/Banner";
// import TabNav from "@/components/Aboutpage/Structure/TabNav";
import TabNav from "@/components/Aboutpage/shared/TabNav";
import Admission from "@/components/Aboutpage/Structure/Admission";

export default function Structure() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />

      <Admission />
    </div>
  );
}
