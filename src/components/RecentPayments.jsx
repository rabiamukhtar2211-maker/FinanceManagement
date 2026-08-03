import Umbrella from "../assets/Umbrella.png";
import Monitor from "../assets/Monitor.png";
import GraduationCap from "../assets/GraduationCap.png";

const payments = [
  { name: "Geico Insurance", id: "0847548", amount: "$450", status: "Successful", icon: Umbrella },
  { name: "DISH Network", id: "8802034", amount: "$890", status: "Successful", icon: Monitor },
  { name: "Coursera", id: "2298095", amount: "$220", status: "Successful", icon: GraduationCap },
];

function RecentPayments() {
  return (
    <div className="bg-white border border-[#E7EEE4] rounded-2xl p-4 pb-5 shrink-0">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[18px] font-semibold text-[#173B2A]">Recent Payments</span>
        <button className="text-[13px] text-[#7C8B80]">Show More</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {payments.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-3 border border-[#E7EEE4] rounded-xl p-4"
          >
            <span className="h-9 w-9 rounded-full bg-[#BBF49C] shrink-0 flex items-center justify-center">
              <img src={p.icon} alt={p.name} className="h-4 w-4 object-contain" />
            </span>
            <div className="min-w-0">
              <p className="text-[14px] font-medium text-[#173B2A] leading-tight truncate">{p.name}</p>
              <p className="text-[11px] text-[#A3B0AA] truncate">{p.id}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[13px] font-semibold text-[#173B2A]">{p.amount}</span>
                <span className="text-[10px] text-[#3B9C4D]">{p.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentPayments;