import Banner from "@/components/FacilityPage/HospitalService/Banner";
import TabNav from "@/components/FacilityPage/HospitalService/TabNav";
import About from "@/components/FacilityPage/HospitalService/About";
import FacilitySection from "@/components/FacilityPage/HospitalService/FacilitySection";
import Service from "@/components/FacilityPage/HospitalService/Service";
import Emergency from "@/components/FacilityPage/HospitalService/Emergency";
import Diagnostic from "@/components/FacilityPage/HospitalService/Diagnostic";
import Additional from "@/components/FacilityPage/HospitalService/Additional";

export default function HospitalService() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />
      <About />
      <FacilitySection />
      <Service />
      <Emergency />
      <Diagnostic />

      <Additional />
    </div>
  );
}
