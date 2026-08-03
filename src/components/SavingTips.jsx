const tips = [
  { text: "Mission: Save $21 per day for 95 days to meet goal.", bold: true },
  { text: "Cut unnecessary subscriptions, save more.", bold: false },
  { text: "Skip eating out twice a week.", bold: false },
  { text: "Automate savings from paycheck.", bold: false },
];

function SavingTips() {
  return (
  <div className="bg-white border border-[#E7EEE4] rounded-2xl p-2"> 
    <div className="bg-white rounded-2xl p-4 ">
      <p className="text-[13px] font-semibold text-black mb-2.5">Saving Tips</p>

      <ul className="flex flex-col gap-1.5">
        {tips.map((tip, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6B7271] mt-1.5 shrink-0"></span>
            <span
              className={`text-[10.5px] leading-tight ${
                tip.bold ? "text-black font-medium" : "text-[#7C8B80]"
              }`}
            >
              {tip.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>  
  );
}

export default SavingTips;