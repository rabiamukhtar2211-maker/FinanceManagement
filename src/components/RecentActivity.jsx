const today = [
  { name: "Jamie Smith", action: "updated account settings", time: "16:05" },
  { name: "Alex Johnson", action: "logged in", time: "13:05" },
  { name: "Morgan Lee", action: "added a new savings goal for vacation", time: "02:05" },
];

const yesterday = [
  { name: "Taylor Green", action: "reviewed recent transactions", time: "21:05" },
  { name: "Wilson Baptista", action: "transferred funds to emergency fund", time: "09:05" },
];

function RecentActivity() {
  return (
    <div className="bg-white border border-[#E7EEE4] rounded-2xl p-2 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10.5px] font-bold text-[#173B2A]">Recent Activity</span>
        <span className="text-[10px] text-[#7C8B80]">⋮</span>
      </div>

      {/* Today */}
      <p className="text-[9.5px] font-bold text-[#173B2A] mb-1.5">Today</p>
      <div className="flex flex-col">
        {today.map((item, i) => (
          <div key={i} className="flex items-start gap-1.5 relative">
            <div className="flex flex-col items-center self-stretch">
              <span className="h-3.5 w-3.5 rounded-full bg-[#BBF49C] shrink-0"></span>
              {i !== today.length - 1 && (
                <span className="w-[1.5px] flex-1 bg-[#D6DED2] mt-0.5"></span>
              )}
            </div>
            <div className="pb-2">
              <p className="text-[8.5px] leading-tight">
                <span className="font-semibold text-[#173B2A]">{item.name}</span>{" "}
                <span className="text-[#7C8B80]">{item.action}</span>
              </p>
              <p className="text-[7px] text-[#A3B0AA] mt-0.5">{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Yesterday */}
      <p className="text-[9.5px] font-bold text-[#173B2A] mb-1.5 mt-0.5">Yesterday</p>
      <div className="flex flex-col">
        {yesterday.map((item, i) => (
          <div key={i} className="flex items-start gap-1.5 relative">
            <div className="flex flex-col items-center self-stretch">
              <span className="h-3.5 w-3.5 rounded-full bg-[#BBF49C] shrink-0"></span>
              {i !== yesterday.length - 1 && (
                <span className="w-[1.5px] flex-1 bg-[#D6DED2] mt-0.5"></span>
              )}
            </div>
            <div className="pb-2">
              <p className="text-[8.5px] leading-tight">
                <span className="font-semibold text-[#173B2A]">{item.name}</span>{" "}
                <span className="text-[#7C8B80]">{item.action}</span>
              </p>
              <p className="text-[7px] text-[#A3B0AA] mt-0.5">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;