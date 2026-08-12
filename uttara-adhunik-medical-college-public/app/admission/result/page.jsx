import Banner from "@/components/AdmissionPage/AdmissionResult/Banner";
import TabNav from "@/components/AdmissionPage/AdmissionResult/TabNav";
import Result from "@/components/AdmissionPage/AdmissionResult/Result";

export default function AdmissionResult() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />

      <Result />
    </div>
  );
}
