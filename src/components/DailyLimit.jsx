function DailyLimit() {
  const spent = 2500;
  const limit = 20000;
  const percent = ((spent / limit) * 100).toFixed(1);

  return (
    <div className="bg-white border border-[#E7EEE4] rounded-xl p-2.5 shrink-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[9px] font-medium text-[#173B2A]">Daily Limit</span>
        <span className="text-[7px] text-[#7C8B80]">⋮</span>
      </div>

      <div className="flex items-center justify-between mb-1.5">
        <p className="text-[9px]">
          <span className="text-[#173B2A] font-semibold">
            ${spent.toLocaleString()}.00
          </span>
          <span className="text-[#7C8B80]"> spent of ${limit.toLocaleString()}.00</span>
        </p>
        <span className="text-[9px] text-[#173B2A] font-medium">{percent}%</span>
      </div>

      <div className="w-full h-1 bg-[#BBF49C] rounded-full overflow-hidden">
        <div className="h-full bg-[#1E4841] rounded-full" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

export default DailyLimit;