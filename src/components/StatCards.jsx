import TotalIcon from "../assets/total.png";
import SavingIcon from "../assets/saving.png";

const stats = [
  { label: "Total Income", value: "$78,000", change: "+178%", positive: true, icon: TotalIcon },
  { label: "Total Expense", value: "$43,000", change: "-178%", positive: false, icon: TotalIcon },
  { label: "Total Savings", value: "$56,000", change: "+124%", positive: true, icon: SavingIcon },
];

function StatCards() {
  return (
    <div className="grid grid-cols-3 gap-3 h-full">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white border border-[#E7EEE4] rounded-xl p-1.5 flex flex-col"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="h-5 w-5 rounded-full flex items-center justify-center">
              <img src={stat.icon} alt={stat.label} className="h-8 w-8  object-contain" />
            </div>
            <span className="text-[10px] text-[#7C8B80]">⋮</span>
          </div>

          <span
            className={`text-[10px] font-medium w-fit px-2 py-0.5 rounded-full mb-2 flex items-center gap-0.5 ${
              stat.positive ? "bg-[#EAF9E4] text-[#3B9C4D]" : "bg-[#FDECEC] text-[#E0554F]"
            }`}
          >
            {stat.positive ? "↗" : "↘"} {stat.change}
          </span>

          <p className="text-lg font-semibold text-[#173B2A] leading-tight">{stat.value}</p>
          <p className="text-[10px] text-[#7C8B80] leading-tight">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default StatCards;