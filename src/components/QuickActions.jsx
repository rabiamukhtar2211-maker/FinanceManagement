import TopUpIcon from "../assets/topup.png";
import TransferIcon from "../assets/transfer.png";
import HistoryIcon from "../assets/history.png";

const actions = [
  { label: "Top Up", icon: TopUpIcon },
  { label: "Transfer", icon: TransferIcon },
  { label: "Request", icon: TransferIcon },
  { label: "History", icon: HistoryIcon },
];

function QuickActions() {
  return (
    <div className="bg-[#ECF4E9] rounded-xl p-2 flex justify-between shrink-0">
      {actions.map((action, index) => (
        <button key={index} className="flex flex-col items-center gap-1.5">
          <img src={action.icon} alt={action.label} className="h-4 w-4 object-contain" />
          <span className="text-[9px] text-[#1E4841]">{action.label}</span>
        </button>
      ))}
    </div>
  );
}

export default QuickActions;