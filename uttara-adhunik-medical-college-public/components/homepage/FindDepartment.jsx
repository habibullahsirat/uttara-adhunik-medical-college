import { ArrowRight, Search } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

function PhotoPlaceholder({ label, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a3d1f] to-[#018837] ${className}`}
    >
      <span className="font-body text-[11px] uppercase tracking-widest text-white/60 text-center px-4">
        {label}
      </span>
    </div>
  );
}

export default function FindDepartment() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 px-6 md:px-20 py-16 md:py-24 bg-gradient-to-b from-white to-[#f7f7f7]">
      <div className="flex w-full max-w-2xl flex-col gap-8">
        <div>
          <h2
            className="font-display text-4xl font-bold"
            style={{ color: GREEN }}
          >
            Find Your Department
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-[#737477]">
            Use the search bar below to explore our comprehensive MBBS program
            and discover the perfect path to kickstart your medical career. Join
            UAMC and embark on a journey of academic excellence, hands-on
            clinical training, and cutting-edge medical research!
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 bg-[#E8E8F4] px-5 py-4">
            <Search
              className="h-5 w-5 shrink-0"
              style={{ color: GREEN }}
              strokeWidth={2}
            />
            <input
              placeholder='Find your program like "Department of Physiology"'
              className="w-full bg-transparent font-body text-sm text-[#9191A6] outline-none placeholder:text-[#9191A6]"
            />
          </div>
          <p
            className="font-body text-sm font-bold"
            style={{ color: "rgba(1,136,55,0.7)" }}
          >
            Popular Search: Department of Microbiology &nbsp; Department of
            Community Medicine &nbsp; Department of Pathology
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-5 p-5"
          style={{
            backgroundColor: "rgba(1,136,55,0.1)",
            border: `1px dashed ${GREEN}`,
          }}
        >
          <div className="flex items-center gap-4">
            <PhotoPlaceholder
              label="Microbiology"
              className="h-20 w-28 shrink-0"
            />
            <div className="flex flex-col gap-2">
              <span
                className="w-fit px-3 py-1 font-body text-xs font-semibold"
                style={{ backgroundColor: YELLOW }}
              >
                Popular Program
              </span>
              <p
                className="font-body text-lg font-bold"
                style={{ color: GREEN }}
              >
                Department of Microbiology
              </p>
            </div>
          </div>
          <div
            className="flex h-14 w-14 items-center justify-center rounded-sm"
            style={{ backgroundColor: GREEN }}
          >
            <ArrowRight
              className="h-5 w-5"
              style={{ color: YELLOW }}
              strokeWidth={2}
            />
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-xl h-[420px]">
        <PhotoPlaceholder
          label="Doctor consulting patient"
          className="absolute left-0 top-0 h-3/5 w-1/2"
        />
        <PhotoPlaceholder
          label="Nurse checking X-ray results"
          className="absolute right-0 top-0 h-full w-[55%]"
        />
        <div
          className="absolute left-0 bottom-0 flex items-center gap-4 p-6"
          style={{
            backgroundColor: "rgba(1,136,55,0.55)",
            backdropFilter: "blur(5px)",
          }}
        >
          <span className="font-display text-4xl font-bold text-white">
            28+
          </span>
          <span className="font-body text-sm text-white max-w-[140px]">
            Departments Available For Student
          </span>
        </div>
      </div>
    </section>
  );
}
