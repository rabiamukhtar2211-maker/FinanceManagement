import { useState } from "react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from "recharts";

import AmazonLogo from "../assets/AmazonLogo.png";
import GoogleLogo from "../assets/GoogleLogo.png";
import XLogo from "../assets/XLogo.png";
import WindowsLogo from "../assets/WindowsLogo.png";
import AppleLogo from "../assets/AppleLogo.png";
import SpotifyLogo from "../assets/SpotifyLogo.png";

/* ---------- Data ---------- */

const portfolioData = [
  { month: "Jan", value: 8000 },
  { month: "Feb", value: 15000 },
  { month: "Mar", value: 15000 },
  { month: "Apr", value: 22000 },
  { month: "May", value: 22000 },
  { month: "Jun", value: 31675 },
  { month: "Jul", value: 28000 },
  { month: "Aug", value: 28000 },
  { month: "Sep", value: 34000 },
  { month: "Oct", value: 34000 },
];

const profitsData = [
  { year: "2021", stocks: 3500, bonds: 1200, realEstate: 800, mutual: 400, total: 5980.55 },
  { year: "2022", stocks: 3600, bonds: 1400, realEstate: 900, mutual: 500, total: 6108.50 },
  { year: "2023", stocks: 4200, bonds: 1600, realEstate: 1100, mutual: 600, total: 7432.15 },
  { year: "2024", stocks: 4400, bonds: 1700, realEstate: 1200, mutual: 550, total: 7680.22 },
  { year: "2025", stocks: 4500, bonds: 1900, realEstate: 1300, mutual: 700, total: 8924.09 },
  { year: "2026", stocks: 4800, bonds: 2000, realEstate: 1350, mutual: 750, total: 8930.16 },
  { year: "2027", stocks: 5300, bonds: 2300, realEstate: 1500, mutual: 900, total: 9740.80 },
];

const watchlist = [
  { symbol: "AMZN", name: "Amazon.com Inc.", price: "$3,204.50", change: "-6.63%", positive: false, icon: AmazonLogo },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: "$2,785.58", change: "+1.05%", positive: true, icon: GoogleLogo },
  { symbol: "TWTR", name: "Twitter Inc.", price: "$899.41", change: "+2.36%", positive: true, icon: XLogo },
  { symbol: "MSFT", name: "Microsoft Corp.", price: "$305.22", change: "+0.85%", positive: true, icon: WindowsLogo },
  { symbol: "AAPL", name: "Apple Inc.", price: "$146.30", change: "+1.29%", positive: true, icon: AppleLogo },
  { symbol: "SPOT", name: "Spotify Inc.", price: "$112.50", change: "-1.02%", positive: false, icon: SpotifyLogo },
];

const assetAllocation = [
  { label: "Stocks", percent: 55, amount: "$275,000", color: "#1E4841" },
  { label: "Bonds", percent: 20, amount: "$100,000", color: "#8FE85C" },
  { label: "Real Estate", percent: 15, amount: "$75,000", color: "#BBF49C" },
  { label: "Mutual Funds", percent: 10, amount: "$50,000", color: "#E4E6E4" },
];

const portfolio = [
  { symbol: "AAPL", name: "Apple Inc.", date: "2028-01-15", price: "$135.50", change: "+$10.00", positive: true, value: "$145.50", icon: AppleLogo },
  { symbol: "MSFT", name: "Microsoft Corp.", date: "2028-02-20", price: "$280.00", change: "+$25.22", positive: true, value: "$305.22", icon: WindowsLogo },
  { symbol: "AMZN", name: "Amazon.com Inc.", date: "2028-03-10", price: "$3,250.00", change: "-$45.50", positive: false, value: "$3,204.50", icon: AmazonLogo },
  { symbol: "TWTR", name: "Twitter Inc.", date: "2028-04-05", price: "$870.00", change: "+$29.41", positive: true, value: "$899.41", icon: XLogo },
  { symbol: "GOOGL", name: "Alphabet Inc.", date: "2028-05-08", price: "$2,700.00", change: "+$85.58", positive: true, value: "$2,785.58", icon: GoogleLogo },
  { symbol: "SPOT", name: "Spotify Inc.", date: "2028-05-15", price: "$110.80", change: "+$65.85", positive: true, value: "$176.65", icon: SpotifyLogo },
];

/* ---------- Tooltips ---------- */

function PortfolioTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E4841] rounded-lg px-3 py-2 shadow-lg">
        <p className="text-[9px] text-[#BBF49C] mb-0.5">June 2028</p>
        <p className="text-[12px] font-bold text-white">
          ${payload[0].value.toLocaleString()}.05
        </p>
      </div>
    );
  }
  return null;
}

function ProfitsTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg shadow-lg border border-[#E7EEE4] p-2">
        <p className="text-[9px] font-medium text-black">
          ${payload[0]?.payload?.total?.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
}

function InvestmentsPanel() {
  const [profitActiveIndex, setProfitActiveIndex] = useState(4);

  return (
    <div className="flex flex-col gap-3">
      {/* ============================================================
          DIV 1: Portfolio Value (top-left line/area chart)
      ============================================================ */}
      {/* DIV 2: Profits (top-right stacked bar chart) */}
      <div className="grid grid-cols-2 gap-3">
        {/* Portfolio Value */}
        <div className="bg-white border border-[#E7EEE4] rounded-2xl p-3 h-[260px] flex flex-col">
          <div className="flex items-center justify-between mb-1 shrink-0">
            <span className="text-[13px] font-semibold text-black">Portfolio Value</span>
            <select className="text-[10px] font-medium border border-[#E7EEE4] rounded-full px-2.5 py-1 text-[#1E4841]">
              <option>Last 10 Months</option>
            </select>
          </div>

          <div className="shrink-0 mb-2">
            <p className="text-[9px] text-[#7C8B80]">Total Value</p>
            <div className="flex items-center gap-2">
              <span className="text-[19px] font-bold text-black">$349,256.45</span>
              <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-[#BBF49C] text-[#1E4841]">
                ↗ 84%
              </span>
            </div>
            <p className="text-[8.5px] text-[#7C8B80] mt-0.5">
              +$19,698.06 from last 10 months
            </p>
          </div>

          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioData} margin={{ top: 10, right: 0, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E4841" stopOpacity={0.14} />
                    <stop offset="100%" stopColor="#1E4841" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#F0F4EF" />
                <XAxis dataKey="month" tick={{ fontSize: 9, fill: "#7C8B80" }} axisLine={false} tickLine={false} />
                <YAxis
                  tick={{ fontSize: 9, fill: "#7C8B80" }}
                  axisLine={false}
                  tickLine={false}
                  width={26}
                  tickFormatter={(v) => `${v / 1000}K`}
                />
                <Tooltip content={<PortfolioTooltip />} />
                <Area
                  type="stepAfter"
                  dataKey="value"
                  stroke="#1E4841"
                  strokeWidth={2}
                  fill="url(#portfolioGradient)"
                  dot={false}
                  activeDot={{ r: 4, fill: "#1E4841", stroke: "#fff", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Profits */}
        <div className="bg-white border border-[#E7EEE4] rounded-2xl p-3 h-[260px] flex flex-col">
          <div className="flex items-center justify-between mb-1 shrink-0">
            <span className="text-[13px] font-semibold text-black">Profits</span>
            <select className="text-[10px] font-medium border border-[#E7EEE4] rounded-full px-2.5 py-1 text-[#1E4841]">
              <option>Last 8 Years</option>
            </select>
          </div>

          <div className="flex items-center justify-between shrink-0 mb-1">
            <div>
              <p className="text-[9px] text-[#7C8B80]">Total Profits</p>
              <div className="flex items-center gap-2">
                <span className="text-[16px] font-bold text-black">$68,315.00</span>
                <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-[#BBF49C] text-[#1E4841]">
                  ↗ 178%
                </span>
              </div>
              <p className="text-[8px] text-[#7C8B80] mt-0.5">+$1,236.01 from last year</p>
            </div>

            <div className="flex flex-col gap-0.5 text-[8px] text-black">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-sm bg-[#1E4841]"></span>Stocks
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-sm bg-[#8FE85C]"></span>Bonds
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-sm bg-[#BBF49C]"></span>Real Estate
              </span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-sm bg-[#E4E6E4]"></span>Mutual Funds
              </span>
            </div>
          </div>

          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={profitsData}
                onMouseMove={(state) => {
                  if (state.isTooltipActive) setProfitActiveIndex(state.activeTooltipIndex);
                }}
              >
                <CartesianGrid vertical={false} stroke="#F0F4EF" />
                <XAxis dataKey="year" tick={{ fontSize: 8, fill: "#7C8B80" }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip content={<ProfitsTooltip />} cursor={false} />
                <Bar dataKey="stocks" stackId="p" radius={[0, 0, 0, 0]} barSize={20}>
                  {profitsData.map((entry, index) => (
                    <Cell key={`s-${index}`} fill={index === profitActiveIndex ? "#1E4841" : "#D9DCDA"} />
                  ))}
                </Bar>
                <Bar dataKey="bonds" stackId="p" barSize={20}>
                  {profitsData.map((entry, index) => (
                    <Cell key={`b-${index}`} fill={index === profitActiveIndex ? "#8FE85C" : "#E4E6E4"} />
                  ))}
                </Bar>
                <Bar dataKey="realEstate" stackId="p" barSize={20}>
                  {profitsData.map((entry, index) => (
                    <Cell key={`r-${index}`} fill={index === profitActiveIndex ? "#BBF49C" : "#EDEEEC"} />
                  ))}
                </Bar>
                <Bar dataKey="mutual" stackId="p" radius={[3, 3, 0, 0]} barSize={20}>
                  {profitsData.map((entry, index) => (
                    <Cell key={`m-${index}`} fill={index === profitActiveIndex ? "#E4E6E4" : "#F2F3F1"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* ============================================================
          DIV 3: Watchlist (bottom-left stock list)
          DIV 4: Assets (bottom-middle donut + allocation list)
          DIV 5: My Portfolio (bottom-right wide table)
      ============================================================ */}
      <div className="grid grid-cols-[0.9fr_0.9fr_1.6fr] gap-3">
        {/* Watchlist */}
        <div className="bg-white border border-[#E7EEE4] rounded-2xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[12px] font-semibold text-black">Watchlist</span>
            <button className="text-[9px] text-[#1E4841] font-medium">View All</button>
          </div>

          <div className="flex flex-col gap-2">
            {watchlist.map((item) => (
              <div key={item.symbol} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-7 w-7 rounded-full bg-[#ECF4E9] flex items-center justify-center shrink-0">
                    <img src={item.icon} alt={item.symbol} className="h-3.5 w-3.5 object-contain" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold text-black leading-tight">{item.symbol}</p>
                    <p className="text-[8px] text-[#7C8B80]">{item.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-medium text-black">{item.price}</p>
                  <span
                    className={`text-[8px] font-medium px-1.5 py-0.5 rounded-full inline-block mt-0.5 ${
                      item.positive ? "bg-[#BBF49C] text-[#1E4841]" : "bg-[#FDCED1] text-[#C23B4B]"
                    }`}
                  >
                    {item.positive ? "↗" : "↘"} {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assets */}
        <div className="bg-white border border-[#E7EEE4] rounded-2xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[12px] font-semibold text-black">Assets</span>
            <select className="text-[9px] font-medium border border-[#E7EEE4] rounded-full px-2 py-0.5 text-[#1E4841]">
              <option>Today</option>
            </select>
          </div>

          <div className="relative flex justify-center mb-2">
            <ResponsiveContainer width="100%" height={100}>
              <BarChart layout="vertical" data={[{ name: "gauge" }]} barSize={0}>
                {/* placeholder to keep container height consistent */}
              </BarChart>
            </ResponsiveContainer>
            {/* Simple donut using conic-gradient */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ top: 0 }}
            >
              <div
                className="h-[95px] w-[95px] rounded-full flex items-center justify-center"
                style={{
                  background: `conic-gradient(#1E4841 0% 55%, #8FE85C 55% 75%, #BBF49C 75% 90%, #E4E6E4 90% 100%)`,
                }}
              >
                <div className="h-[68px] w-[68px] rounded-full bg-white flex flex-col items-center justify-center">
                  <p className="text-[7px] text-[#7C8B80]">Total Assets</p>
                  <p className="text-[12px] font-bold text-black">$500,000</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[8px] text-[#7C8B80] text-center mb-2">+5% compared to last year</p>

          <div className="flex flex-col gap-1.5">
            {assetAllocation.map((a) => (
              <div key={a.label} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-sm shrink-0" style={{ backgroundColor: a.color }}></span>
                  <span className="text-[9px] text-black">{a.label}</span>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-medium text-black">{a.percent}%</p>
                  <p className="text-[7.5px] text-[#7C8B80]">{a.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Portfolio */}
        <div className="bg-white border border-[#E7EEE4] rounded-2xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[12px] font-semibold text-black">My Portfolio</span>
            <div className="flex items-center gap-1.5">
              <select className="text-[9px] font-medium border border-[#E7EEE4] rounded-full px-2 py-0.5 text-[#1E4841]">
                <option>This Month</option>
              </select>
              <span className="text-[10px] text-[#7C8B80]">☰</span>
            </div>
          </div>

          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="py-1 text-[8.5px] font-medium text-[#7C8B80]">Stock Symbol ⇅</th>
                <th className="py-1 text-[8.5px] font-medium text-[#7C8B80]">Invest Date ⇅</th>
                <th className="py-1 text-[8.5px] font-medium text-[#7C8B80]">Price ⇅</th>
                <th className="py-1 text-[8.5px] font-medium text-[#7C8B80]">Change ⇅</th>
                <th className="py-1 text-[8.5px] font-medium text-[#7C8B80]">Current Value ⇅</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((p, i) => (
                <tr key={p.symbol} className={i !== portfolio.length - 1 ? "border-b border-[#F0F4EF]" : ""}>
                  <td className="py-1.5">
                    <div className="flex items-center gap-1.5">
                      <span className="h-6 w-6 rounded-full bg-[#BBF49C] flex items-center justify-center shrink-0">
                        <img src={p.icon} alt={p.symbol} className="h-3 w-3 object-contain" />
                      </span>
                      <div>
                        <p className="text-[9px] font-semibold text-black leading-tight">{p.symbol}</p>
                        <p className="text-[7.5px] text-[#7C8B80]">{p.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="text-[8.5px] text-[#7C8B80]">{p.date}</td>
                  <td className="text-[8.5px] text-black">{p.price}</td>
                  <td
                    className="text-[8.5px] font-medium"
                    style={{ color: p.positive ? "#1E4841" : "#F73541" }}
                  >
                    {p.change}
                  </td>
                  <td className="text-[8.5px] font-medium text-black">{p.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InvestmentsPanel;