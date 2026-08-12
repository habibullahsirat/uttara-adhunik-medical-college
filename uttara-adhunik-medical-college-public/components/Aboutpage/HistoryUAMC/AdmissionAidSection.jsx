import { ArrowUpRight } from "lucide-react";
const GREEN = "#018837";
const YELLOW = "#FECD2F";

function AdmissionLink({ label }) {
  return (
    <div
      className="flex items-center justify-between px-4 py-4 bg-white"
      style={{ borderBottom: `1px solid ${YELLOW}` }}
    >
      <span className="font-medium" style={{ color: GREEN }}>
        {label}
      </span>

      <ArrowUpRight size={20} style={{ color: GREEN }} />
    </div>
  );
}

export default function AdmissionAidSection() {
  return (
    <section className="bg-white px-6 md:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3">
          <img
            src="https://images.unsplash.com/photo-1587351021355-a479a299d2f9?w=400&h=560&fit=crop"
            alt="Campus building"
            className="col-span-1 row-span-2 w-full h-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=270&fit=crop"
            alt="Campus front"
            className="w-full h-40 object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=270&fit=crop"
            alt="Campus playground"
            className="w-full h-40 object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2
            className="text-3xl md:text-4xl font-bold mb-5"
            style={{
              color: GREEN,
              fontFamily: "'Bitter', serif",
            }}
          >
            Admission & Aid
          </h2>

          <p className="text-[#525271] leading-relaxed mb-8">
            At <span className="font-semibold text-black">UAMC</span>, we
            prepare you to launch your career by providing a supportive,
            creative, and professional environment from which to learn practical
            skills.
          </p>

          <div className="flex flex-col">
            <AdmissionLink label="Process Overview" />
            <AdmissionLink label="Fees & Financial Information" />
            <AdmissionLink label="How To Apply" />
          </div>
        </div>
      </div>
    </section>
  );
}
