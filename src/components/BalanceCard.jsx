import UnionIcon from "../assets/Union.png";
import SymbolIcon from "../assets/symbol.png";

function BalanceCard() {
  return (
    <div className="bg-[#1E4841] rounded-xl p-3 text-white flex flex-col justify-between h-[130px] mb-1 shrink-0">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <img src={SymbolIcon} alt="symbol" className="h-5 w-5 object-contain" />
        <img src={UnionIcon} alt="signal" className="h-3.5 w-3.5 object-contain" />
      </div>

      {/* Name */}
      <p className="text-[11px] font-semibold leading-tight">Andrew Forbist</p>

      {/* Balance + EXP/CVV row */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[8px] text-[#B6C9BE] leading-tight">Balance Amount</p>
          <p className="text-[13px] font-semibold leading-tight">$562,000</p>
        </div>

        <div className="flex items-end gap-2 text-[7px] text-[#B6C9BE]">
          <div>
            <p className="uppercase">EXP</p>
            <p className="text-white">11/29</p>
          </div>
          <div>
            <p className="uppercase">CVV</p>
            <p className="text-white">323</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;