import DotsIcon from "../assets/dots.png";

const transactions = [
  { name: "Electricity Bill", category: "Payments", date: "2028-03-01", time: "04:28:48", amount: "$295.81", note: "Payment for monthly electricity bill", status: "Failed" },
  { name: "Weekly Groceries", category: "Shopping", date: "2028-03-04", time: "04:28:48", amount: "$204.07", note: "Groceries shopping at local supermarket", status: "Completed" },
  { name: "Movie Night", category: "Entertainment", date: "2028-02-27", time: "04:28:48", amount: "$97.84", note: "Tickets for movies and snacks", status: "Pending" },
  { name: "Medical Check-up", category: "Healthcare", date: "2028-02-07", time: "04:28:48", amount: "$323.33", note: "Routine health check-up and medications", status: "Pending" },
  { name: "Dinner at Italian Restaurant", category: "Dining Out", date: "2028-02-11", time: "04:28:48", amount: "$226.25", note: "Dining out with family at a local Italian restaurant", status: "Pending" },
];

const statusStyles = {
  Failed: "border border-[#E0554F] text-[#E0554F]",
  Completed: "border border-[#173B2A] text-[#173B2A]",
  Pending: "border border-[#E0A800] text-[#E0A800]",
};

function RecentTransactions() {
  return (
    <div className="bg-white border border-[#E7EEE4] rounded-2xl p-3.5 pb-0 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-1 shrink-0">
        <span className="text-[9.5px] font-bold text-[#173B2A]">Recent Transactions</span>
        <div className="flex items-center gap-1.5">
          <select className="text-[7.5px] font-medium border border-[#E7EEE4] rounded-lg px-1.5 py-0.5 text-[#1E4841]">
            <option>This Month</option>
          </select>
          <button className="h-5.5 w-5.5 rounded-lg border border-[#E7EEE4] flex items-center justify-center">
            <img src={DotsIcon} alt="filter" className="h-2.5 w-2.5 object-contain" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-y-auto">
        <table className="w-full text-left border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#ECF4E9]">
              <th className="py-0.5 px-1.5 text-[7.5px] font-medium text-[#173B2A]">
                Transaction Name ⇅
              </th>
              <th className="py-0.5 px-1 text-[7.5px] font-medium text-[#173B2A]">
                Date & Time ⇅
              </th>
              <th className="py-0.5 px-1 text-[7.5px] font-medium text-[#173B2A]">
                Amount ⇅
              </th>
              <th className="py-0.5 px-1 text-[7.5px] font-medium text-[#173B2A]">
                Note ⇅
              </th>
              <th className="py-0.5 px-1 text-[7.5px] font-medium text-[#173B2A]">
                Status ⇅
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, i) => (
              <tr key={i} className="text-[8.5px]">
                <td className="py-1 px-1.5 border-b border-[#F0F4EF]">
                  <p className="text-[#173B2A] font-semibold leading-tight">{tx.name}</p>
                  <p className="text-[#A3B0AA] text-[6.5px]">{tx.category}</p>
                </td>
                <td className="py-1 px-1 border-b border-[#F0F4EF] text-[#7C8B80]">
                  <p>{tx.date}</p>
                  <p className="text-[6.5px] text-[#A3B0AA]">{tx.time}</p>
                </td>
                <td className="py-1 px-1 border-b border-[#F0F4EF] text-[#173B2A] font-semibold">
                  {tx.amount}
                </td>
                <td className="py-1 px-1 border-b border-[#F0F4EF] text-[#7C8B80] max-w-[150px] truncate">
                  {tx.note}
                </td>
                <td className="py-1 px-1 border-b border-[#F0F4EF]">
                  <span className={`text-[6.5px] font-medium px-2 py-0.5 rounded-full ${statusStyles[tx.status]}`}>
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentTransactions;