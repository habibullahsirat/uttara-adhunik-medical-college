import { Phone, ArrowUpRight } from "lucide-react";
const GREEN = "#018837";
const YELLOW = "#FECD2F";

export default function VisitingSection() {
  return (
    <section className="bg-[#F6F6F6] px-6 md:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <h2
            className="text-3xl md:text-4xl font-bold text-black mb-5"
            style={{ fontFamily: "'Bitter', serif" }}
          >
            Visiting At UAMC
          </h2>

          <p className="text-[#525271] leading-relaxed mb-4">
            Here you'll find all the information about the reasons why the
            University of Luva is a unique institution. Get to know why over 200
            thousand people a year visit us.
          </p>

          <p className="text-[#525271] leading-relaxed mb-8">
            Welcome to Faral, where knowledge meets innovation and where every
            student's journey to success begins.
          </p>

          <div className="flex items-center gap-6 mb-8">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
              style={{ background: GREEN }}
            >
              <Phone size={26} color="white" strokeWidth={1.8} />
            </div>

            <div>
              <div className="font-semibold text-lg" style={{ color: GREEN }}>
                Call +32112345678
              </div>

              <div className="text-[#444444] text-sm">
                For any kind of admission enquiry
              </div>
            </div>
          </div>

          <button
            className="inline-flex items-center gap-3 px-8 py-4 text-white font-medium"
            style={{ background: GREEN }}
          >
            View Our Program
            <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="relative w-full lg:w-1/2 flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=600&fit=crop"
            alt="Doctor with patient"
            className="w-1/2 h-72 md:h-96 object-cover"
          />

          <div className="w-1/2 flex flex-col gap-3">
            <img
              src="https://images.unsplash.com/photo-1666887360742-974c8fce8e6b?w=400&h=350&fit=crop"
              alt="Nurse checking scan"
              className="w-full h-40 md:h-56 object-cover"
            />

            <div
              className="flex items-center gap-4 px-5 py-4"
              style={{
                background: "rgba(1,136,55,0.5)",
                backdropFilter: "blur(5px)",
              }}
            >
              <div className="text-3xl">🏥</div>

              <div>
                <div
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "'Bitter', serif" }}
                >
                  28+
                </div>

                <div className="text-white text-xs">
                  Department Available For Student
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
