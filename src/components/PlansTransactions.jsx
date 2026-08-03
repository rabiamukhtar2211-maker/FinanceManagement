import TransferIcon from "../assets/transfer.png";

const transactions = [
  { type: "Income", name: "Andrew Forbist", date: "2028-09-01", time: "09:00 AM", amount: "+$500", positive: true, note: "Monthly contribution to fund" },
  { type: "Income", name: "Sarah Connors", date: "2028-09-01", time: "10:15 AM", amount: "+$500", positive: true, note: "Monthly contribution to fund" },
  { type: "Income", name: "Mike Johnson", date: "2028-09-01", time: "11:30 AM", amount: "+$500", positive: true, note: "Monthly contribution to fund" },
  { type: "Withdraw", name: "Andrew Forbist", date: "2028-07-15", time: "02:00 PM", amount: "-$200", positive: false, note: "Used for urgent travel booking" },
];

function PlansTransactions() {
  return (
    <div className="bg-white border border-[#E7EEE4] rounded-2xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[14px] font-bold text-black">Transactions</span>
        <select className="text-[10px] font-medium border border-[#E7EEE4] rounded-full px-3 py-1.5 text-[#1E4841]">
          <option>This Month</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-left border-separate border-spacing-0">
        <thead>
          <tr className="bg-[#ECF4E9]">
            <th className="py-2 px-3 text-[10px] font-medium text-[#7C8B80] rounded-l-lg">
              Transaction Type ⇅
            </th>
            <th className="py-2 px-3 text-[10px] font-medium text-[#7C8B80]">
              Date & Time ⇅
            </th>
            <th className="py-2 px-3 text-[10px] font-medium text-[#7C8B80]">
              Amount ⇅
            </th>
            <th className="py-2 px-3 text-[10px] font-medium text-[#7C8B80] rounded-r-lg">
              Brief Note ⇅
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, i) => (
            <tr key={i} className={i !== transactions.length - 1 ? "border-b border-[#F0F4EF]" : ""}>
              <td className="py-3 px-3">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-[#8FE85C] flex items-center justify-center shrink-0">
                    <img src={TransferIcon} alt={tx.type} className="h-3 w-3 object-contain" />
                  </span>
                  <span className="text-[11px] text-black">
                    <span className="font-semibold">{tx.type}</span> - {tx.name}
                  </span>
                </div>
              </td>
              <td className="py-3 px-3 text-[11px] text-[#7C8B80]">
                {tx.date} - {tx.time}
              </td>
              <td
                className="py-3 px-3 text-[11px] font-medium"
                style={{ color: tx.positive ? "#173B2A" : "#F73541" }}
              >
                {tx.amount}
              </td>
              <td className="py-3 px-3 text-[11px] text-[#7C8B80]">{tx.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlansTransactions;