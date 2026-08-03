import { useState } from "react";
import MonitorIcon from "../assets/monitor.png";
import FirstAidIcon from "../assets/FirstAid.png";
import CardIcon from "../assets/icon.png";

function PaymentForm() {
  return (
    <div className="flex flex-col gap-1 border border-[#E7EEE4] rounded-2xl p-0.5">
    
    <div className="bg-white rounded-b-2xl p-3 flex-1">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[11px] font-semibold text-[#173B2A]">Make a Payment</span>
        <span className="text-[10px] text-[#7C8B80]">⋯</span>
      </div>

      <div className="bg-[#ECF4E9] rounded-lg p-2.5">
        {/* Payment Account */}
        <p className="text-[8.5px] font-medium text-[#173B2A] mb-1">Payment Account</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex bg-white border border-[#E7EEE4] rounded-lg h-[46px] overflow-hidden">
            <img
              src={CardIcon}
              alt="card icon"
              className="h-full w-7 object-cover rounded-tr-lg shrink-0 mt-2"
            />
            <div className="flex flex-col justify-center px-2">
              <p className="text-[6.5px] text-[#7C8B80] mb-0.5">Freedom Unlimited Mastercard</p>
              <p className="text-[11px] font-bold text-[#173B2A] leading-tight">$539,000</p>
              <p className="text-[5.5px] text-[#A3B0AA] mt-0.5">5582 5574 8376 5487</p>
            </div>
          </div>

          {/* Visa */}
          <div className="flex bg-white border border-[#E7EEE4] rounded-lg h-[46px] overflow-hidden">
            <div className="h-full w-7 bg-[#EAF0FA] flex items-center justify-center shrink-0 mt-2 rounded-tr-lg">
              <span className="text-[6.5px] font-bold italic text-[#1E4841]">VISA</span>
            </div>
            <div className="flex flex-col justify-center px-2">
              <p className="text-[6.5px] text-[#7C8B80] mb-0.5">Platinum Plus Visa</p>
              <p className="text-[11px] font-bold text-[#173B2A] leading-tight">$415,000</p>
              <p className="text-[5.5px] text-[#A3B0AA] mt-0.5">4532 8723 0045 9967</p>
            </div>
          </div>
        </div>

        {/* Service Provider */}
        <p className="text-[8.5px] font-medium text-[#173B2A] mb-1">Service Provider</p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="w-full bg-white rounded-lg px-2 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-5 w-5 rounded-full bg-[#BBF49C] flex items-center justify-center shrink-0">
                <img src={MonitorIcon} alt="category" className="h-2.5 w-2.5 object-contain" />
              </span>
              <span className="text-[8px] text-[#173B2A]">Internet & Cable TV</span>
            </div>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#7C8B80" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="w-full bg-white rounded-lg px-2 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="h-5 w-5 rounded-full bg-[#E5E6E6] flex items-center justify-center shrink-0">
                <img src={MonitorIcon} alt="provider" className="h-2.5 w-2.5 object-contain" />
              </span>
              <span className="text-[8px] text-[#173B2A]">Comcast Xfinity</span>
            </div>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#7C8B80" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Virtual Account */}
        <p className="text-[8.5px] font-medium text-[#173B2A] mb-1">Virtual Account</p>
        <input
          type="text"
          defaultValue="9876543210"
          className="w-full bg-white rounded-lg px-2 py-1.5 text-[8px] text-[#173B2A] outline-none mb-4"
        />

        {/* Amount */}
        <p className="text-[8.5px] font-medium text-[#173B2A] mb-1">Amount</p>
        <input
          type="text"
          defaultValue="$150.00"
          className="w-full bg-white rounded-lg px-2 py-1.5 text-[8px] text-[#173B2A] outline-none mb-4"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button className="text-[8px] font-medium text-[#7C8B80] px-3 py-1.5">Cancel</button>
          <button className="bg-[#1E4841] text-white text-[8px] font-medium rounded-lg px-4 py-1.5">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PaymentForm;