function TabbedList({ heading, tabs, rowsPerTab, maxHeight = "820px" }) {
  const [active, setActive] = useState(0);
  const rows = rowsPerTab[active] || [];

  return (
    <section className="w-full bg-white py-20 px-8">
      <div className="max-w-[1450px] mx-auto flex flex-col items-center gap-12">
        <h2 className="font-serif font-bold text-[40px] text-[#018837]">
          {heading}
        </h2>

        <div className="w-full">
          {/* Tabs */}
          <div className="flex bg-[#E8E8F4] p-2 gap-2 flex-wrap">
            {tabs.map((t, i) => (
              <button
                key={t}
                onClick={() => setActive(i)}
                className={
                  "flex-1 min-w-[150px] text-center py-4 font-serif text-[15px] tracking-wide uppercase transition-colors " +
                  (i === active
                    ? "bg-white text-[#018837] border-b-2 border-[#018837] shadow"
                    : "text-black hover:text-[#018837]")
                }
              >
                {t}
              </button>
            ))}
          </div>

          {/* Rows */}
          <div className="bg-white p-3 overflow-y-auto" style={{ maxHeight }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#E8E8F4] p-5"
                >
                  <div className="flex flex-col shrink-0 w-[90px] text-center">
                    <div className="bg-[#E8E8F4] text-[#444444] font-bold text-[22px] py-2">
                      {row.day}
                    </div>
                    <div className="bg-[#018837] text-white font-semibold text-[15px] py-2">
                      {row.month}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-3 min-w-0">
                    <p className="text-[16px] text-[#444444] leading-snug">
                      {row.title}
                    </p>
                    <span className="flex items-center gap-2 text-[13px] text-[#444444] font-semibold">
                      🕒 {row.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Publication() {
  const journal = Array.from({ length: 7 }, noticeRow);
  const tenders = Array.from({ length: 4 }, noticeRow);
  return (
    <TabbedList
      heading="Publication"
      tabs={["Journal", "Tenders"]}
      rowsPerTab={[journal, tenders]}
      maxHeight="960px"
    />
  );
}
