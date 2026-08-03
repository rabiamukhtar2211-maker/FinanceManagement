import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBarActions from "../components/TopBarActions";
import { Download, Calendar, ChevronDown, ChevronLeft, ChevronRight, Search } from "lucide-react";

import transfer from "../assets/transfer.png";
import savingplans from "../assets/savingplans.png";
import monitor from "../assets/Monitor.png";
import forkKnife from "../assets/ForkKnife.png";
import firstAid from "../assets/FirstAid.png";
import home from "../assets/HouseLine.png";
import lightning from "../assets/Lightning.png";
import icons from "../assets/icons.png";

const transactions = [
  { name: "Bonus Payment", category: "Income", card: "Platinum Plus Visa", cardType: "visa", txnId: "456789005", date: "2024-09-25", time: "11:00 AM", amount: "+$300.00", positive: true, note: "Annual performance bonus", status: "Completed", icon: transfer },
  { name: "Stock Dividends", category: "Investments", card: "Freedom Unlimited Mastercard", cardType: "mc", txnId: "456789006", date: "2024-09-24", time: "09:30 AM", amount: "+$300.00", positive: true, note: "Quarterly stock dividend", status: "Completed", icon: savingplans },
  { name: "Comcast Bill Payment", category: "Utilities", card: "Platinum Plus Visa", cardType: "visa", txnId: "456789023", date: "2024-09-24", time: "10:30 AM", amount: "-$50.00", positive: false, note: "Monthly internet and TV bill", status: "Completed", icon: monitor },
  { name: "Freelance Project", category: "Income", card: "Platinum Plus Visa", cardType: "visa", txnId: "456789037", date: "2024-09-23", time: "01:00 PM", amount: "+$1,200.00", positive: true, note: "Payment for freelance design work", status: "Completed", icon: transfer },
  { name: "Amazon Purchase", category: "Food & Dining", card: "Freedom Unlimited Mastercard", cardType: "mc", txnId: "456789024", date: "2024-09-23", time: "04:45 PM", amount: "-$80.95", positive: false, note: "Purchased kitchen appliances", status: "Completed", icon: forkKnife },
  { name: "Gym Membership", category: "Healthcare", card: "Platinum Plus Visa", cardType: "visa", txnId: "567890323", date: "2024-09-22", time: "07:00 AM", amount: "-$45.00", positive: false, note: "Monthly gym fee for health", status: "Pending", icon: firstAid },
  { name: "Rental Income", category: "Real Estate", card: "Freedom Unlimited Mastercard", cardType: "mc", txnId: "456789038", date: "2024-09-22", time: "08:00 AM", amount: "+$2,500.00", positive: true, note: "Monthly rent from property", status: "Completed", icon: home },
  { name: "State Farm Insurance", category: "Investments", card: "Freedom Unlimited Mastercard", cardType: "mc", txnId: "456789026", date: "2024-09-21", time: "02:15 PM", amount: "-$325.00", positive: false, note: "Car insurance premium investment", status: "Completed", icon: savingplans },
  { name: "Verizon Bill", category: "Utilities", card: "Platinum Plus Visa", cardType: "visa", txnId: "456789027", date: "2024-09-20", time: "11:00 AM", amount: "-$60.00", positive: false, note: "Mobile phone bill", status: "Pending", icon: home },
  { name: "Electricity Bill", category: "Utilities", card: "Freedom Unlimited Mastercard", cardType: "mc", txnId: "456789028", date: "2024-09-19", time: "08:20 AM", amount: "-$70.00", positive: false, note: "Home electricity bill", status: "Completed", icon: lightning },
  { name: "Netflix Subscription", category: "Entertainment", card: "Platinum Plus Visa", cardType: "visa", txnId: "456789029", date: "2024-09-18", time: "06:45 PM", amount: "-$17.99", positive: false, note: "Monthly entertainment subscription", status: "Completed", icon: firstAid },
  { name: "Flight Booking", category: "Investments", card: "Elite Traveler Mastercard", cardType: "mc", txnId: "456789030", date: "2024-09-17", time: "09:30 AM", amount: "-$350.00", positive: false, note: "Business trip expense", status: "Pending", icon: savingplans },
];

const gridCols = "32px 1.6fr 1.6fr 1fr 1fr 0.9fr 1.4fr 0.9fr";

function StatusBadge({ status }) {
  const isCompleted = status === "Completed";
  return (
    <span
      className="text-[9px] font-medium px-1.5  pb-0.5 py-0.5  rounded-md w-fit"
      style={
        isCompleted
          ? { backgroundColor: "#1E4841", color: "#BBF49C" }
          : { backgroundColor: "#BBF49C", color: "#1E4841" }
      }
    >
      {status}
    </span>
  );
}

function Checkbox() {
  return (
    <span
      className="h-4 w-4 rounded-[4px] border inline-flex shrink-0"
      style={{ backgroundColor: "#FAF6F5", borderColor: "#E4E2DD" }}
    >
      <input type="checkbox" className="opacity-0 h-full w-full cursor-pointer" />
    </span>
  );
}

function Transactions() {
  return (
    <div className="flex h-screen bg-[#EAF3E9] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-white rounded-tl-2xl rounded-bl-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-2 shrink-0">
          <h1 className="text-base font-semibold text-[#173B2A]">Transactions</h1>
          <TopBarActions userName="Andrew Forbist" />
        </div>

        {/* Bordered box: filters + table + pagination */}
        <div
          className="flex-1 min-h-0 mx-5 mb-2 overflow-hidden rounded-xl border flex flex-col  pt-3"
          style={{ borderColor: "#E4E2DD" }}
        >
          {/* Filters row */}
          <div className="flex items-center justify-between px-3 pb-2 shrink-0">
            <div className="flex items-center gap-1.5 flex-1">
              <div
                className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 flex-1 max-w-[220px]"
                style={{ backgroundColor: "#EFF0F0" }}
              >
                <Search size={11} className="text-[#A3B0AA]" />
                <input
                  type="text"
                  placeholder="Search transaction"
                  className="text-[10px] outline-none w-full bg-transparent placeholder:text-[#A3B0AA]"
                />
              </div>
              <button className="flex items-center gap-1 border border-[#E7EEE4] rounded-lg px-2 py-1.5 text-[10px] text-[#7C8B80]">
                All Category <ChevronDown size={11} />
              </button>
              <button className="flex items-center gap-1 border border-[#E7EEE4] rounded-lg px-2 py-1.5 text-[10px] text-[#7C8B80]">
                All Account <ChevronDown size={11} />
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <button className="flex items-center gap-1 border border-[#E7EEE4] rounded-lg px-2 py-1.5 text-[10px] text-[#7C8B80]">
                <Calendar size={11} /> 1-30 September 2024
              </button>
              <button className="flex items-center gap-1 bg-[#173B2A] text-white rounded-lg px-2 py-1.5 text-[10px]">
                <Download size={11} /> Download
              </button>
            </div>
          </div>

          {/* Header row */}
          <div className="shrink-0">
            <div
              className="grid items-center px-3 py-2 text-[9px] text-[#A3B0AA]"
              style={{ gridTemplateColumns: gridCols }}
            >
              <Checkbox />
              <span className="font-medium">Transaction Name</span>
              <span className="font-medium">Account</span>
              <span className="font-medium">Transaction ID</span>
              <span className="font-medium">Date & Time</span>
              <span className="font-medium">Amount</span>
              <span className="font-medium">Note</span>
              <span className="font-medium">Status</span>
            </div>
            <div className="mx-3 border-b" style={{ borderColor: "#E4E2DD" }}></div>
          </div>

          {/* Rows */}
          <div className="shrink-0">
            {transactions.map((t, i) => (
              <div key={t.txnId}>
                <div
                  className="grid items-center px-3 py-1.5 text-[10px]"
                  style={{ gridTemplateColumns: gridCols }}
                >
                  <Checkbox />
                  <div className="flex items-center gap-2 pr-2">
                    <span className="h-6 w-6 rounded-full bg-[#8FE85C] flex items-center justify-center shrink-0">
                      <img src={t.icon} alt={t.name} className="h-3 w-3 object-contain" />
                    </span>
                    <div>
                      <p className="font-medium text-[#173B2A] leading-tight">{t.name}</p>
                      <p className="text-[8px] text-[#A3B0AA]">{t.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#173B2A] pr-2">
                    {t.cardType === "visa" ? (
                      <span className="text-[8px] px-1 py-0.5 border rounded" style={{ borderColor: "#E4E2DD" }}>
                        VISA
                      </span>
                    ) : (
                      <span className="h-4 w-5 rounded flex items-center justify-center border shrink-0" style={{ borderColor: "#E4E2DD" }}>
                        <img src={icons} alt="" className="h-3 w-3 object-contain" />
                      </span>
                    )}
                    <span className="truncate">{t.card}</span>
                  </div>
                  <span className="text-[#7C8B80] pr-2">{t.txnId}</span>
                  <span className="text-[#7C8B80] pr-2 leading-tight">
                    {t.date} <br /> {t.time}
                  </span>
                  <span className="font-medium pr-2" style={{ color: t.positive ? "#1E4841" : "#F73541" }}>
                    {t.amount}
                  </span>
                  <span className="text-[#7C8B80] pr-2 truncate">{t.note}</span>
                  <StatusBadge status={t.status} />
                </div>
                {i !== transactions.length - 1 && (
                  <div className="mx-3 border-b" style={{ borderColor: "#F2F1EC" }}></div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-3 py-2  mt-auto text-[10px] text-[#7C8B80]">
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

        <Footer />
      </div>
    </div>
  );
}

export default Transactions;