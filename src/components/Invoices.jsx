import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Sidebar from "../components/Sidebar";
import TopBarAction from "../components/TopBarActions";
import Footer from "../components/Footer";

import TotalInvoiceIcon from "../assets/invoice.png";
import PaidIcon from "../assets/paid.png";
import UnpaidIcon from "../assets/unpaid.png";

import RentIcon from "../assets/HouseLine.png";
import GymIcon from "../assets/Gym.png";
import CableIcon from "../assets/Monitor.png";
import ElectricIcon from "../assets/Lightning.png";
import CreditCardIcon from "../assets/payment.png";
import CarIcon from "../assets/Car.png";
import OnlineLearningIcon from "../assets/yt.png";
import MobileIcon from "../assets/Mobile.png";
import SoftwareIcon from "../assets/transfer.png";
import HealthIcon from "../assets/FirstAid.png";
import TravelIcon from "../assets/Airplane.png";

import FilterIcon from "../assets/filter.png";

const SearchIcon = ({ className = "w-3 h-3", color = "#A3ABA6" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <line x1="15.5" y1="15.5" x2="21" y2="21" />
  </svg>
);

const PlusIcon = ({ className = "w-3 h-3", color = "#ffffff" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="4" x2="12" y2="20" />
    <line x1="4" y1="12" x2="20" y2="12" />
  </svg>
);

const MoreIcon = ({ className = "w-3.5 h-3.5", color = "#616D75" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="5" cy="12" r="1.3" fill={color} stroke="none" />
    <circle cx="12" cy="12" r="1.3" fill={color} stroke="none" />
    <circle cx="19" cy="12" r="1.3" fill={color} stroke="none" />
  </svg>
);

function Checkbox({ className = "" }) {
  return (
    <label className={`relative inline-flex items-center justify-center w-3 h-3 mr-2 shrink-0 ${className}`}>
      <input
        type="checkbox"
        className="peer appearance-none w-3 h-3 rounded-[4px] border checked:bg-[#1E4841] checked:border-[#1E4841] cursor-pointer transition-colors"
        style={{ borderColor: "#E4E2DD", backgroundColor: "#FAF6F5" }}
      />
      <svg
        className="pointer-events-none absolute w-2 h-2 opacity-0 peer-checked:opacity-100 text-white"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </label>
  );
}

const summaryCards = [
  { label: "Total Invoices", value: "$138,500", change: "+ 8.20 %", changeUp: true, sub: "vs last month $128,000", icon: TotalInvoiceIcon },
  { label: "Paid Invoices", value: "$97,400", change: "+ 2.94 %", changeUp: true, sub: "vs last month $94,800", icon: PaidIcon },
  { label: "Unpaid Invoices", value: "$41,100", change: "- 13.92 %", changeUp: false, sub: "vs last month $47,750", icon: UnpaidIcon },
];

const tabs = ["All", "Paid", "Unpaid", "Overdue"];

const invoices = [
  { name: "Monthly Rent Payment", id: "INV-28005-001", amount: "$1200", date: "October 01, 2028", time: "08:30 AM", status: "Pending", icon: RentIcon },
  { name: "Gym Membership Renewal", id: "INV-28005-002", amount: "$600", date: "October 03, 2028", time: "09:45 AM", status: "Overdue", icon: GymIcon },
  { name: "Cable and Internet Service", id: "INV-28005-003", amount: "$180", date: "October 10, 2028", time: "07:25 AM", status: "Paid", icon: CableIcon },
  { name: "Electric Bill", id: "INV-28005-004", amount: "$90", date: "October 15, 2028", time: "01:15 PM", status: "Pending", icon: ElectricIcon },
  { name: "Credit Card Bill", id: "INV-28005-005", amount: "$450", date: "October 20, 2028", time: "09:00 AM", status: "Paid", icon: CreditCardIcon },
  { name: "Car Insurance Premium", id: "INV-28005-006", amount: "$320", date: "October 25, 2028", time: "10:30 AM", status: "Unpaid", icon: CarIcon },
  { name: "Online Learning Subscription", id: "INV-28005-007", amount: "$300", date: "November 01, 2028", time: "12:10 PM", status: "Overdue", icon: OnlineLearningIcon },
  { name: "Mobile Phone Service", id: "INV-28005-008", amount: "$85", date: "November 05, 2028", time: "02:40 PM", status: "Unpaid", icon: MobileIcon },
  { name: "Annual Software Subscription", id: "INV-28005-009", amount: "$520", date: "November 11, 2028", time: "08:30 AM", status: "Paid", icon: SoftwareIcon },
  { name: "Health Insurance Premium", id: "INV-28005-010", amount: "$320", date: "November 15, 2028", time: "03:30 AM", status: "Unpaid", icon: HealthIcon },
  { name: "Holiday Travel Booking", id: "INV-28005-011", amount: "$2,500", date: "November 20, 2028", time: "05:20 PM", status: "Pending", icon: TravelIcon },
];

const statusStyles = {
  Pending: "bg-[#BBF49C] text-[#1E4841]",
  Paid: "bg-[#1E4841] text-white",
  Unpaid: "bg-[#BCBEBD] text-[#3B3F3E]",
  Overdue: "bg-[#FDCED1] text-[#C23B4B]",
};

function Invoices() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="flex h-screen bg-[#EAF3E9] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-white rounded-tl-2xl rounded-bl-2xl overflow-hidden">
        <div className="flex-1 min-h-0 overflow-y-auto px-6 py-3">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-[15px] font-semibold text-[#173B2A]">Invoices</h1>
            <TopBarAction userName="Andrew Forbist" />
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-3 gap-5 mb-2">
            {summaryCards.map((card) => (
              <div key={card.label} className="border border-[#ECEFEC] rounded-[14px] p-2 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#ECF4E9] flex items-center justify-center shrink-0">
                  <img src={card.icon} alt={card.label} className="w-5 h-5 object-contain" />
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#8A928D] text-left">{card.label}</span>
                    <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${card.changeUp ? "bg-[#BBF49C] text-[#1E4841]" : "bg-[#FDCED1] text-[#C23B4B]"}`}>
                      {card.change}
                    </span>
                  </div>
                  <div className="text-[15px] font-bold text-[#173B2A] mt-0.5 text-left">{card.value}</div>
                  <div className="text-[8.5px] text-[#A3ABA6] mt-0.5 text-left">{card.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Tabs + actions */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5  border border-[#ECEFEC] bg-[#ECF4E9] rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[10px] font-medium px-6 py-1.5 rounded-lg transition-colors ${activeTab === tab ? "bg-[#1E4841] text-white" : "text-[#8A928D] hover:bg-[#ECF4E9]"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-[#EFF0F0] rounded-full px-3 py-1.5">
                <input placeholder="Search invoice" className="bg-transparent text-[10px] outline-none w-24 placeholder:text-[#A3ABA6]" />
                <SearchIcon />
              </div>
              <button className="flex items-center gap-1 text-[10px] text-[#616D75] border border-[#ECEFEC] rounded-full px-3 py-1.5">
                <img src={FilterIcon} alt="Filter" className="w-3 h-3 object-contain" />
                Filter
              </button>
              <button className="flex items-center gap-1 text-[10px] font-medium text-white bg-[#1E4841] rounded-full px-3 py-1.5">
                <PlusIcon />
                Add Invoice
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="border border-[#ECEFEC] rounded-[14px] overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#ECF4E9]">
                  <th className="w-7 py-1 pl-3">
                    <Checkbox />
                  </th>
                  <th className="text-left text-[9px] font-semibold text-[#616D75] py-1.5">Invoice Name</th>
                  <th className="text-left text-[9px] font-semibold text-[#616D75] py-1.5">Invoice ID</th>
                  <th className="text-left text-[9px] font-semibold text-[#616D75] py-1.5">Total Amount</th>
                  <th className="text-left text-[9px] font-semibold text-[#616D75] py-1.5">Date & Time</th>
                  <th className="text-left text-[9px] font-semibold text-[#616D75] py-1.5">Status</th>
                  <th className="w-7 py-1"></th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv, i) => (
                  <tr
                    key={inv.id}
                    className={`bg-white ${i !== invoices.length - 1 ? "border-b border-[#F3F4F3]" : ""}`}
                  >
                    <td className="py-1 pl-3">
                      <Checkbox />
                    </td>
                    <td className="py-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#BBF49C] flex items-center justify-center shrink-0">
                          <img src={inv.icon} alt={inv.name} className="w-2.5 h-2.5 object-contain" />
                        </div>
                        <span className="text-[9px] font-medium text-[#173B2A]">{inv.name}</span>
                      </div>
                    </td>
                    <td className="text-[8.5px] text-[#616D75]">{inv.id}</td>
                    <td className="text-[8.5px] text-[#616D75]">{inv.amount}</td>
                    <td className="text-[8.5px] text-[#616D75]">{inv.date} — {inv.time}</td>
                    <td>
                      <span className={`text-[8px] font-medium px-2 py-0.5 rounded-full ${statusStyles[inv.status]}`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="pr-3">
                      <MoreIcon className="cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-3 py-2 mt-auto text-[10px] text-[#242E2C]">
            <span>Showing 12 out of 512</span>
            <div className="flex items-center gap-1">
              <button className="h-5 w-5 flex items-center justify-center rounded-md border border-[#E7EEE4]">
                <ChevronLeft size={11} />
              </button>
              <button className="h-5 w-5 flex items-center justify-center rounded-md bg-[#1E4841] text-white ">1</button>
              <button className="h-5 w-5 flex items-center justify-center rounded-md">2</button>
              <button className="h-5 w-5 flex items-center justify-center rounded-md">3</button>
              <span>...</span>
              <button className="h-5 w-5 flex items-center justify-center rounded-md">16</button>
              <button className="h-5 w-5 flex items-center justify-center rounded-md border border-[#E7EEE4]">
                <ChevronRight size={11} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer total={512} currentPage={1} totalPages={18} />
      </div>
    </div>
  );
}

export default Invoices;