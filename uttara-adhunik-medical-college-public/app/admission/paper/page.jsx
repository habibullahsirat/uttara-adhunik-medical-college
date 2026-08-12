import Banner from "@/components/AdmissionPage/Paper/Banner";
import TabNav from "@/components/AdmissionPage/Paper/TabNav";
import NoticeSection from "@/components/AdmissionPage/Paper/NoticeSection";

export default function Paper() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />

      <NoticeSection />
    </div>
  );
}
