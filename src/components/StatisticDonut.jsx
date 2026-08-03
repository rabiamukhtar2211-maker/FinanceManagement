import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState } from "react";

const data = [
  { name: "Rent & Living", value: 2100, percent: 60, color: "#1E4841", badgeText: "#ECF4E9" },
  { name: "Investment", value: 525, percent: 15, color: "#BBF49C", badgeText: "#242E2C" },
  { name: "Education", value: 420, percent: 12, color: "#ECF4E9", badgeText: "#242E2C" },
  { name: "Food & Drink", value: 280, percent: 8, color: "#E5E6E6", badgeText: "#242E2C" },
  { name: "Entertainment", value: 175, percent: 5, color: "#BCBEBD", badgeText: "#242E2C" },
];

function StatisticDonut() {
  const [activeTab, setActiveTab] = useState("expense");

  return (
   <div className="bg-white border border-[#E7EEE4] rounded-2xl p-2 pb-2.5 mb-3 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12.5px] font-semibold text-[#173B2A]">Statistic</span>
        <select className="text-[9px] font-medium border border-[#E7EEE4] rounded-full px-2 py-0.5 text-[#1E4841]">
          <option>This Month</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="flex items-center border-b border-[#E7EEE4] mb-1.5">
        <button
          onClick={() => setActiveTab("income")}
          className={`flex-1 text-center pb-1.5 text-[10px] font-medium transition-colors ${
            activeTab === "income"
              ? "text-[#173B2A] border-b-2 border-[#8FE85C]"
              : "text-[#A3B0AA]"
          }`}
        >
          Income <span className="text-[#A3B0AA] font-normal">($4,800)</span>
        </button>
        <button
          onClick={() => setActiveTab("expense")}
          className={`flex-1 text-center pb-1.5 text-[10px] font-medium transition-colors ${
            activeTab === "expense"
              ? "text-[#173B2A] border-b-2 border-[#8FE85C]"
              : "text-[#A3B0AA]"
          }`}
        >
          Expense <span className="text-[#A3B0AA] font-normal">($3,500)</span>
        </button>
      </div>

      {/* Donut Chart */}
      <div className="relative flex justify-center mb-1.5">
        <ResponsiveContainer width="100%" height={105}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={33}
              outerRadius={48}
              paddingAngle={3}
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} stroke="none" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-[7px] text-[#7C8B80]">Total Expense</p>
          <p className="text-[13px] font-bold text-[#1E4841]">$3,500</p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-1.5">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span
                className="text-[8px] font-semibold px-1.5 py-1 rounded-md min-w-[28px] text-center"
                style={{ backgroundColor: item.color, color: item.badgeText }}
              >
                {item.percent}%
              </span>
              <span className="text-[10px] text-[#173B2A]">{item.name}</span>
            </div>
            <span className="text-[10px] font-medium text-[#173B2A]">
              ${item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatisticDonut;