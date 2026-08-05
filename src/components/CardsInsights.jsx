import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";

import TopUpIcon from "../assets/topup.png";
import TransferIcon from "../assets/transfer.png";
import PaymentIcon from "../assets/payment.png";
import MonitorIcon from "../assets/Monitor.png";
import ForkKnifeIcon from "../assets/ForkKnife.png";
import FirstAidIcon from "../assets/FirstAid.png";
import GymIcon from "../assets/Gym.png";
import LightningIcon from "../assets/Lightning.png";

const actions = [
  { label: "Top Up", icon: TopUpIcon },
  { label: "Transfer", icon: TransferIcon },
  { label: "Payment", icon: PaymentIcon },
];

const chartData = [
  { month: "Mar", income: 3200, expense: -1800 },
  { month: "Apr", income: 4400, expense: -2400 },
  { month: "May", income: 8000, expense: -6000 },
  { month: "Jun", income: 3600, expense: -2000 },
  { month: "Jul", income: 3800, expense: -2200 },
  { month: "Aug", income: 4000, expense: -1900 },
];

const transactions = [
  { name: "Book Royalties", category: "Income", id: "456789039", date: "2028-09-25", time: "11:00 AM", amount: "+$400.00", positive: true, note: "Royalties from published book", status: "Completed", icon: TransferIcon },
  { name: "Comcast Bill Payment", category: "Utilities", id: "456789023", date: "2028-09-24", time: "10:30 AM", amount: "-$50.00", positive: false, note: "Monthly internet and TV bill", status: "Completed", icon: MonitorIcon },
  { name: "Consulting Fee", category: "Services", id: "456789040", date: "2028-09-24", time: "02:00 PM", amount: "+$1,500.00", positive: true, note: "Payment for consulting services", status: "Completed", icon: ForkKnifeIcon },
  { name: "Amazon Purchase", category: "Food & Dining", id: "456789024", date: "2028-09-23", time: "04:45 PM", amount: "-$80.95", positive: false, note: "Purchased kitchen appliances", status: "Completed", icon: FirstAidIcon },
  { name: "Gym Membership", category: "Healthcare", id: "456789025", date: "2028-09-22", time: "07:00 AM", amount: "-$45.00", positive: false, note: "Monthly gym fee for health", status: "Completed", icon: GymIcon },
  { name: "Electricity Bill", category: "Utilities", id: "456789028", date: "2028-09-19", time: "08:20 AM", amount: "-$70.00", positive: false, note: "Home electricity bill", status: "Pending", icon: LightningIcon },
];

const statusStyles = {
  Completed: "bg-[#1E4841] text-white",
  Pending: "bg-[#BBF49C] text-[#1E4841]",
};

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const d = payload[0].payload;
    return (
      <div className="bg-white rounded-lg shadow-lg border border-[#E7EEE4] p-2.5 min-w-[110px]">
        <p className="text-[9px] font-medium text-[#173B2A] mb-1.5">May 2026</p>
        <div className="flex items-center justify-between text-[8px] mb-0.5">
          <span className="flex items-center gap-1 text-[#7C8B80]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8FE85C]"></span>Income
          </span>
          <span className="font-semibold text-black">${Math.abs(d.income).toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between text-[8px]">
          <span className="flex items-center gap-1 text-[#7C8B80]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E4841]"></span>Expense
          </span>
          <span className="font-semibold text-black">${Math.abs(d.expense).toLocaleString()}</span>
        </div>
      </div>
    );
  }
  return null;
}

function CardsInsights() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    
    <div className="h-full flex flex-col gap-2 overflow-hidden">
      {/* Top row: left column (actions + card detail + limits) + right (cashflow chart) */}
      <div className="grid grid-cols-[1fr_1.6fr] gap-2 shrink-0">
        {/* LEFT column */}
        <div className="flex flex-col gap-2">
          {/* Quick actions */}
           <div className="bg-white border border-[#E7EEE4] rounded-2xl  pt-3 p-2">
         <div className="bg-[#ECF4E9] border border-[#E7EEE4] rounded-2xl p-2 flex justify-between">
  {actions.map((a, i) => (
    <div key={a.label} className="flex items-center flex-1">
      <button className="flex flex-col items-center gap-1.5 flex-1">
        <span className="h-9 w-9 rounded-full flex items-center justify-center">
          <img src={a.icon} alt={a.label} className="h-6 w-6 object-contain" />
        </span>
        <span className="text-[9px] text-black">{a.label}</span>
      </button>
      {i !== actions.length - 1 && (
        <span className="w-px h-8 bg-white shrink-0"></span>
      )}
    </div>
  ))}
</div>

          {/* Card detail box */}
         
            <p className="text-[9px] text-black m-1 ">Card Number</p>
            <p className="text-[12px] font-semibold text-black mb-2">5582 5574 8376 5487</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] text-black mb-0.5">Expiry Date</p>
                <p className="text-[10px] text-black">05/25</p>
              </div>
              <div>
                <p className="text-[8px] text-black mb-0.5">CVC</p>
                <p className="text-[10px] text-black">411</p>
              </div>
              <div>
                <p className="text-[8px] text-black mb-0.5">Status</p>
                <span className="text-[9px] font-medium bg-[#1E4841] text-[#BBF49C] px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Spending Limits */}
         <div className="bg-white border border-[#E7EEE4] rounded-2xl p-2">
  <div className="flex items-center justify-between mb-2">
    <span className="text-[11px] font-semibold text-black">Spending Limits</span>
    <span className="text-[10px] text-[#7C8B80]">⋮</span>
  </div>
  <div className="w-full h-4 flex gap-1 mb-1.5">
    <div className="h-full bg-[#1E4841] rounded-sm" style={{ width: "45%" }}></div>
    <div className="h-full bg-[#BBF49C] rounded-sm" style={{ width: "55%" }}></div>
  </div>
  <div className="flex items-center justify-between">
    <span className="text-[9px] text-black">$4,500.00 spent of $10,000.00</span>
    <span className="text-[9px] font-medium text-black  px-1.5 py-0.5 rounded-full">
      45%
    </span>
  </div>
</div>
        </div>

        {/* RIGHT: Cashflow chart */}
        <div className="bg-white border border-[#E7EEE4] rounded-2xl p-3 flex flex-col">
          <div className="flex items-center justify-between mb-2 shrink-0">
            <span className="text-[13px] font-semibold text-black">Cashflow</span>
            <select className="text-[10px] font-medium border border-[#E7EEE4] rounded-full px-2.5 py-1 text-[#1E4841]">
              <option>Last 6 Months</option>
            </select>
          </div>

          <div className="flex items-center gap-3 mb-2 shrink-0">
            <span className="flex items-center gap-1 text-[9px] text-black">
              <span className="h-2 w-2 rounded-full bg-[#8FE85C]"></span>Income
            </span>
            <span className="flex items-center gap-1 text-[9px] text-black">
              <span className="h-2 w-2 rounded-full bg-[#1E4841]"></span>Expense
            </span>
          </div>

          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                onMouseMove={(state) => {
                  if (state.isTooltipActive) setActiveIndex(state.activeTooltipIndex);
                }}
              >
                <CartesianGrid vertical={false} stroke="#F0F4EF" />
                <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#7C8B80" }} axisLine={false} tickLine={false} />
                <YAxis
                  tick={{ fontSize: 9, fill: "#7C8B80" }}
                  axisLine={false}
                  tickLine={false}
                  width={24}
                  domain={[-8000, 8000]}
                  ticks={[-8000, -4000, 0, 4000, 8000]}
                  tickFormatter={(v) => (v === 0 ? "0" : `${v / 1000}K`)}
                />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Bar dataKey="income" stackId="cf" radius={[3, 3, 0, 0]} barSize={30}>
                  {chartData.map((entry, index) => (
                    <Cell key={`inc-${index}`} fill={index === activeIndex ? "#8FE85C" : "#D9EFCB"} />
                  ))}
                </Bar>
                <Bar dataKey="expense" stackId="cf" radius={[0, 0, 3, 3]} barSize={30}>
                  {chartData.map((entry, index) => (
                    <Cell key={`exp-${index}`} fill={index === activeIndex ? "#1E4841" : "#E4E6E4"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Transactions — full width below */}
      <div className="flex-1 min-h-0 bg-white border border-[#E7EEE4] rounded-2xl p-3 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between mb-2 shrink-0">
          <span className="text-[13px] font-semibold text-black">Transactions</span>
          <select className="text-[10px] font-medium border border-[#E7EEE4] rounded-full px-2.5 py-1 text-[#1E4841]">
            <option>This Month</option>
          </select>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr class="bg-[#ECF4E9]">
                <th className="w-6 py-1"></th>
                <th className="py-1 text-[9px] font-medium text-[#7C8B80]">Transaction Name ⇅</th>
                <th className="py-1 text-[9px] font-medium text-[#7C8B80]">Transaction ID ⇅</th>
                <th className="py-1 text-[9px] font-medium text-[#7C8B80]">Date & Time ⇅</th>
                <th className="py-1 text-[9px] font-medium text-[#7C8B80]">Amount ⇅</th>
                <th className="py-1 text-[9px] font-medium text-[#7C8B80]">Note ⇅</th>
                <th className="py-1 text-[9px] font-medium text-[#7C8B80]">Status ⇅</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={tx.id} className={i !== transactions.length - 1 ? "border-b border-[#F0F4EF]" : ""}>
                  <td className="py-2">
                    <span className="h-3 w-3 rounded border border-[#E4E2DD] inline-block"></span>
                  </td>
                  <td className="py-2">
                    <div className="flex items-center gap-2">
                      <span className="h-6 w-6 rounded-full bg-[#BBF49C] flex items-center justify-center shrink-0">
                        <img src={tx.icon} alt={tx.name} className="h-3 w-3 object-contain" />
                      </span>
                      <div>
                        <p className="text-[10px] font-medium text-black leading-tight">{tx.name}</p>
                        <p className="text-[8px] text-[#A3B0AA]">{tx.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 text-[9px] text-[#7C8B80]">{tx.id}</td>
                  <td className="py-2 text-[9px] text-[#7C8B80]">
                    {tx.date} <br /> {tx.time}
                  </td>
                  <td
                    className="py-2 text-[9px] font-medium"
                    style={{ color: tx.positive ? "#1E4841" : "#F73541" }}
                  >
                    {tx.amount}
                  </td>
                  <td className="py-2 text-[9px] text-[#7C8B80]">{tx.note}</td>
                  <td className="py-2">
                    <span className={`text-[8px] font-medium px-2 py-0.5 rounded-full ${statusStyles[tx.status]}`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CardsInsights;