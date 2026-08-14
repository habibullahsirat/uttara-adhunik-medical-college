import Banner from "@/components/AdmissionPage/Registration/Banner";
// import TabNav from "@/components/AdmissionPage/Registration/TabNav";
import TabNav from "@/components/AdmissionPage/shared/TabNav";

export default function Registration() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />
    </div>
  );
}
