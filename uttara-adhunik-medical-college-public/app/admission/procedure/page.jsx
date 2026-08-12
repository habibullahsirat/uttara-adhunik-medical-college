import Banner from "@/components/AdmissionPage/Procedure/Banner";
import TabNav from "@/components/AdmissionPage/Procedure/TabNav";
import ProcedureSection from "@/components/AdmissionPage/Procedure/ProcedureSection";
import Fees from "@/components/AdmissionPage/Procedure/Fees";

export default function Procedure() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />

      <ProcedureSection />
      <Fees />
    </div>
  );
}
