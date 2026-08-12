import Banner from "@/components/AdmissionPage/ApplicationForm/Banner";
import TabNav from "@/components/AdmissionPage/ApplicationForm/TabNav";
import Form from "@/components/AdmissionPage/ApplicationForm/Form";

export default function ApplicationForm() {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* <Header /> */}
      <Banner />
      <TabNav />

      <Form />
    </div>
  );
}
