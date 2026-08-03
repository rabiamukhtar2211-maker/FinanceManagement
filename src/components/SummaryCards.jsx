import InvoiceIcon from "../assets/invoice.png";

const summaryCards = [
  { label: "Total Savings", value: "$47,600", change: "+ 4.20 %", changeUp: true },
  { label: "Total Target", value: "$83,000", change: "+ 2.40 %", changeUp: true },
  { label: "Total Plans", value: "27", change: "+ 8.20 %", changeUp: true },
];

function SummaryCards() {
  return (
    <div className="grid grid-cols-3 gap-6  ">
      {summaryCards.map((card) => (
        <div
          key={card.label}
          className="bg-[#ECF4E9] rounded-xl p-2 flex items-center justify-between"
        >
          <div>
            <p className="text-[10px] text-[#3B3F3E] mb-1">{card.label}</p>
            <div className="flex items-center gap-2">
              <span className="text-[18px] font-bold text-[#1E4841] leading-none">
                {card.value}
              </span>
              <span
                className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                  card.changeUp
                    ? "bg-[#BBF49C] text-[#1E4841]"
                    : "bg-[#FDCED1] text-[#C23B4B]"
                }`}
              >
                {card.change}
              </span>
            </div>
          </div>

          <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center shrink-0">
            <img src={InvoiceIcon} alt={card.label} className="h-5 w-5 object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;