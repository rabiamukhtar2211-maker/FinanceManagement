const transfers = [
  { name: "Bob Johnson", id: "120987654324", amount: "$560", status: "Successful", positive: true },
  { name: "Abe Reeves", id: "120987654323", amount: "$1,000", status: "Pending", positive: false },
  { name: "Miles Sanders", id: "120987654326", amount: "$300", status: "Successful", positive: true },
];

function RecentTransfer() {
  return (
    <div className="bg-white border border-[#E7EEE4] rounded-2xl p-2  ml-2 mr-2 mt-2 shrink-0">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[13px] font-semibold text-[#173B2A]">Recent Transfer</span>
        <button className="text-[10px] text-[#7C8B80]">Show More</button>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {transfers.map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-2 border border-[#E7EEE4] rounded-xl p-2.5"
          >
            <span className="h-8 w-8 rounded-full bg-[#BBF49C] shrink-0"></span>
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-[#173B2A] leading-tight truncate">{t.name}</p>
              <p className="text-[9px] text-[#A3B0AA] truncate">{t.id}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[10px] font-semibold text-[#173B2A]">{t.amount}</span>
                <span className={`text-[8px] ${t.positive ? "text-[#3B9C4D]" : "text-[#E0A800]"}`}>
                  {t.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTransfer;