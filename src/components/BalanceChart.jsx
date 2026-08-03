import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { useState } from "react";

const data = [
  { month: "Jan", value: 1800 },
  { month: "Feb", value: 3200 },
  { month: "Mar", value: 2600 },
  { month: "Apr", value: 1900 },
  { month: "May", value: 2400 },
  { month: "Jun", value: 3875 },
  { month: "Jul", value: 3000 },
  { month: "Aug", value: 2800 },
  { month: "Sep", value: 3400 },
  { month: "Oct", value: 4100 },
  { month: "Nov", value: 3600 },
  { month: "Dec", value: 4600 },
];

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
     
      <div className="bg-[#1E4841] rounded-lg px-3 py-2 shadow-lg ">
        <p className="text-[9px] text-[#BBF49C] mb-0.5">June 2026</p>
        <p className="text-[12px] font-bold text-white">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
}

function BalanceChart() {
  return (
    <div className="bg-white rounded-2xl p-4 flex-1 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 shrink-0">
        <span className="text-[13px] font-semibold text-black">Balance</span>
        <select className="text-[10px] font-medium border border-[#E7EEE4] rounded-full px-3 py-1 text-[#1E4841]">
          <option>This Year</option>
        </select>
      </div>

      {/* Chart */}
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E4841" stopOpacity={0.16} />
                <stop offset="100%" stopColor="#1E4841" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#F0F4EF" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 9, fill: "#7C8B80" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 9, fill: "#7C8B80" }}
              axisLine={false}
              tickLine={false}
              width={26}
              tickFormatter={(v) => `${v / 1000}K`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#1E4841"
              strokeWidth={2}
              fill="url(#balanceGradient)"
              dot={false}
              activeDot={{ r: 4, fill: "#1E4841", stroke: "#fff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BalanceChart;