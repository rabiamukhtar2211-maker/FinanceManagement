import AirplaneIcon from "../assets/Airplane.png";

const members = ["Andrew Forbist", "Sarah Connors", "Mike Johnson"];

function VacationFundDetail() {
  return (
    <div className="bg-[#ECF4E9] rounded-2xl p-2 h-80 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="h-9 w-9 rounded-full bg-white flex items-center justify-center shrink-0">
          <img src={AirplaneIcon} alt="Vacation Fund" className="h-4.5 w-4.5 object-contain" />
        </span>
        <span className="text-[13px] font-semibold text-black">Vacation Fund</span>
      </div>

      {/* Amount */}
      <p className="text-[20px] font-bold text-[#1E4841] leading-tight mb-3">
        $3,000<span className="text-[13px] font-medium text-black">/$5,000</span>
      </p>

      {/* Progress bar — thinner */}
      <div className="w-45 h-9 bg-[#BBF49C] rounded-lg overflow-hidden  m-2">
        <div className="h-full bg-[#1E4841] rounded-lg" style={{ width: "60%" }}></div>
      </div>

      {/* Status row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] text-black">In Progress</span>
        <span className="text-[11px] font-bold text-[#1E4841]">60%</span>
      </div>

      {/* Divider — inset, not touching edges */}
      <div className="mx-1 border-t border-[#D6E4D0] mb-1"></div>

      {/* Member */}
      <p className="text-[10px] text-[#7C8B80] mb-1.5">Member</p>
      <div className="flex flex-col gap-1.5 mb-1">
        {members.map((m) => (
          <div key={m} className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#8FE85C] shrink-0"></span>
            <span className="text-[10px] text-black">{m}</span>
          </div>
        ))}
      </div>

      {/* Due Date + Remaining — label left, value right, stacked rows */}
      <div className="m-3 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-[9.5px] text-[#7C8B80]">Due Date</span>
          <span className="text-[10px] font-medium text-black">31 December, 2028</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[9.5px] text-[#7C8B80]">Remaining</span>
          <span className="text-[10px] font-medium text-black">95 days</span>
        </div>
      </div>
    </div>
  );
}

export default VacationFundDetail;