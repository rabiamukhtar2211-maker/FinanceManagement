const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const chartData = [
  { inc: 65, exp: 45 },
  { inc: 50, exp: 38 },
  { inc: 70, exp: 50 },
  { inc: 80, exp: 40 },
  { inc: 60, exp: 45 },
  { inc: 75, exp: 48 },
  { inc: 40, exp: 52 },
  { inc: 58, exp: 38 },
  { inc: 80, exp: 52 },
  { inc: 70, exp: 45 },
  { inc: 45, exp: 58 },
  { inc: 62, exp: 35 },
];

function CashflowChart() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-1 shadow-sm">
      {/* Row 1: Title + Dropdown */}
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] font-bold text-[#263c38]">Cashflow</h3>
        <select className="rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-[9px] font-medium text-[#263c38] outline-none">
          <option>This Year</option>
          <option>Last Year</option>
        </select>
      </div>

      {/* Row 2: Balance + Legend */}
      <div className="mt-2 flex items-start justify-between">
        <div>
          <p className="text-[9px] text-black">Total Balance</p>
          <h2 className="mt-0.5 text-[16px] font-bold leading-none text-[#20554d]">
            $562,000
          </h2>
        </div>

        <div className="flex items-center gap-2.5 text-[9px] font-semibold text-[#263c38] mt-1">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-xs bg-[#20554d]" />
            Income
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-xs bg-[#b9f49b]" />
            Expense
          </span>
        </div>
      </div>

      <div className="relative mt-4 h-[135px]">
        <div className="absolute bottom-3 left-6 right-0 top-0">
          {[0, 1, 2, 3, 4].map((line) => (
            <div
              key={line}
              className="absolute left-0 right-0 border-t border-gray-200"
              style={{ top: `${line * 25}%` }}
            />
          ))}

          <div className="absolute inset-0 grid grid-cols-12 gap-0.5 sm:gap-1">
            {chartData.map((item, index) => (
              <div
                key={index}
                className="relative flex h-full items-center justify-center"
              >
                <div
                  className="absolute bottom-1/2 w-2.5 rounded-t-sm bg-[#20554d] sm:w-3.5"
                  style={{
                    height: `${item.inc / 2.2}%`,
                  }}
                />

                <div
                  className="absolute top-1/2 w-2.5 rounded-b-sm bg-[#b9f49b] sm:w-3.5"
                  style={{
                    height: `${item.exp / 1.7}%`,
                  }}
                />

                {index === 5 && (
                  <div className="absolute -top-14 left-1/2 z-20 w-[105px] -translate-x-1/2 rounded-lg border border-gray-200 bg-white p-1.5 shadow-lg">
                    <p className="mb-1 ml-1 text-[9px] font-medium text-gray-600">
                      June 2029
                    </p>

                    <div className="mb-0.5 ml-1 flex justify-between text-[8px]">
                      <span className="flex items-center gap-1 text-gray-500">
                        Income
                      </span>
                      <span className="font-medium mr-1 text-[9px] text-gray-900">
                        $6,000
                      </span>
                    </div>

                    <div className="mb-0.5 ml-1 flex justify-between text-[8px]">
                      <span className="flex items-center gap-1 text-gray-500">
                        Expense
                      </span>
                      <span className="font-medium mr-1 text-[9px] text-gray-900">
                        $4,000
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="absolute -left-6 top-0 flex h-full flex-col justify-between text-[8px] text-black">
            <span>8K</span>
            <span>4K</span>
            <span>0</span>
            <span>-4K</span>
            <span>-8K</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-6 right-0 grid grid-cols-12 gap-0.5 text-center sm:gap-1">
          {months.map((month) => (
            <span key={month} className="text-[8px] text-black">
              {month}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CashflowChart;