import { useState } from "react";
import CardIcon from "../assets/icon.png";


function TransferForm() {
  const [activeTab, setActiveTab] = useState("local");

  return (
    <div className="flex flex-col gap-3 min-h-0  border border-[#E7EEE4] rounded-2xl p-2 m-2 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10.5px] font-semibold text-[#173B2A]">Transfer Form</span>
        <span className="text-[9.5px] text-[#7C8B80]">⋯</span>
      </div>

      {/* Green wrapper box */}
      <div className="bg-[#ECF4E9] rounded-xl p-2.5">
        {/* Tabs */}
        <div className="flex gap-1.5 mb-2.5">
          <button
            onClick={() => setActiveTab("local")}
            className={`flex-1 text-center text-[8.5px] font-medium py-1.5 rounded-lg transition-colors ${
              activeTab === "local" ? "bg-[#1E4841] text-white" : "bg-white text-[#7C8B80]"
            }`}
          >
            Local
          </button>
          <button
            onClick={() => setActiveTab("international")}
            className={`flex-1 text-center text-[8.5px] font-medium py-1.5 rounded-lg transition-colors ${
              activeTab === "international" ? "bg-[#1E4841] text-white" : "bg-white text-[#7C8B80]"
            }`}
          >
            International
          </button>
        </div>

        {/* Payment Account */}
        <div className="flex flex-col gap-3 min-h-0  border border-[#E7EEE4] rounded-2xl  "></div>
        <p className="text-[8.5px] font-medium text-[#173B2A] mb-1.5">Payment Account</p>
        <div className="bg-white border border-[#E7EEE4] rounded-xl p-2 shrink-0">
          <div className="grid grid-cols-2 gap-2">
            {/* Mastercard */}
            <div className="flex bg-[#ECF4E9] border border-[#E7EEE4] rounded-lg h-[48px] overflow-hidden">
              <img
                src={CardIcon}
                alt="card icon"
                className="h-full w-8 object-cover rounded-r-lg shrink-0 mt-2"
              />
              <div className="flex flex-col justify-center px-1.5">
                <p className="text-[6.5px] text-[#7C8B80] mb-0.5">Elite Traveler Mastercard</p>
                <p className="text-[11px] font-bold text-[#173B2A] leading-tight">$643,000</p>
                <p className="text-[6px] text-[#A3B0AA] mt-0.5">5589 9955 7766 3321</p>
              </div>
            </div>

            {/* Visa */}
            <div className="flex bg-white border border-[#E7EEE4] rounded-lg h-[48px] overflow-hidden">
              <div className="h-full w-8 bg-[#EAF0FA] flex items-center justify-center shrink-0 rounded-r-lg mt-2">
                <span className="text-[7.5px] font-bold italic text-[#1A1F71]">VISA</span>
              </div>
              <div className="flex flex-col justify-center px-1.5">
                <p className="text-[6.5px] text-[#7C8B80] mb-0.5">Platinum Plus Visa</p>
                <p className="text-[11px] font-bold text-[#173B2A] leading-tight">$415,000</p>
                <p className="text-[6px] text-[#A3B0AA] mt-0.5">4532 8723 0045 9967</p>
              </div>
            </div>
          </div>
        </div>

        {/* Select Recipient */}
        <p className="text-[8.5px] font-medium text-[#173B2A] mb-1 mt-2.5">Select Recipient</p>
        <div className="w-full bg-white rounded-lg px-2 py-1.5 flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] font-bold italic text-[#1A1F71]  border border-[#E7EEE4]">VISA</span>
            <span className="text-[8.5px] text-[#173B2A]">Jade Brown - 120987654325</span>
          </div>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="#7C8B80" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Amount + Method */}
        <div className="grid grid-cols-[1fr_3fr] gap-2 mb-2.5">
          <div>
            <p className="text-[8.5px] font-medium text-[#173B2A] mb-1">Amount</p>
            <input
              type="text"
              defaultValue="$250.00"
              className="w-full bg-white rounded-lg px-2 py-1.5 text-[8.5px] text-[#173B2A] outline-none"
            />
          </div>
          <div>
            <p className="text-[8.5px] font-medium text-[#173B2A] mb-1">Transfer Method</p>
            <select className="w-full bg-white rounded-lg px-2 py-1.5 text-[8.5px] text-[#173B2A] outline-none">
              <option>Instant Transfer</option>
            </select>
          </div>
        </div>

        {/* Note */}
        <p className="text-[8.5px] font-medium text-[#173B2A] mb-1">Note</p>
        <input
          type="text"
          defaultValue="Payment for shared vacation expenses"
          className="w-full bg-white rounded-lg px-2 py-1.5 text-[8.5px] text-[#173B2A] outline-none mb-2.5"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-1.5">
          <button className="text-[8.5px] font-medium text-[#7C8B80] px-2.5 py-1.5">Cancel</button>
          <button className="bg-[#1E4841] text-white text-[8.5px] font-medium rounded-lg px-3.5 py-1.5">
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransferForm;