import IconsIcon from "../assets/icons.png";

const cards = [
  {
    name: "Platinum Plus Visa",
    balance: "$415,000",
    type: "Debit",
    cardType: "visa",
    number: "•••• •••• •••• 9967",
    exp: "12/29",
    cvv: "313",
    dark: false,
  },
  {
    name: "Freedom Unlimited Mastercard",
    balance: "$532,000",
    type: "Credit",
    cardType: "mc",
    number: "•••• •••• •••• 5487",
    exp: "05/25",
    cvv: "411",
    dark: true,
  },
  {
    name: "Elite Traveler Mastercard",
    balance: "$430,000",
    type: "Credit",
    cardType: "mc",
    number: "•••• •••• •••• 3321",
    exp: "08/29",
    cvv: "672",
    dark: false,
  },
];

function MyCardsPanel() {
  return (
    <div className="bg-[#ECF4E9] rounded-2xl p-6 h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 shrink-0">
        <span className="text-[16px] font-semibold text-black">My Cards</span>
        <button className="text-[13px] font-medium text-[#1E4841]">+ Add</button>
      </div>

      {/* Cards list */}
      <div className="flex-1 min-h-0 flex flex-col gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-6 ${
              card.dark ? "bg-[#1E4841] text-white" : "bg-white text-black"
            }`}
          >
            {/* Top-right icon on all Mastercard cards */}
            {card.cardType === "mc" && (
              <img
                src={IconsIcon}
                alt="icon"
                className="absolute top-5 right-5 h-9 w-9 object-contain"
              />
            )}

            <div className="flex items-center justify-between mb-5 pr-9">
              <p className={`text-[12px] ${card.dark ? "text-[#B6C9BE]" : "text-[#7C8B80]"}`}>
                {card.name}
              </p>
              {card.cardType === "visa" && (
                <span className="absolute top-5 right-5 text-[14px] font-bold italic tracking-wide">
                  VISA
                </span>
              )}
            </div>

            <div className="flex items-center justify-between mb-5">
              <p className="text-[24px] font-bold leading-none">{card.balance}</p>
              <p className={`text-[13px] ${card.dark ? "text-[#B6C9BE]" : "text-[#7C8B80]"}`}>
                {card.type}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className={`text-[9px] uppercase ${card.dark ? "text-[#B6C9BE]" : "text-[#A3B0AA]"}`}>
                  Card Number
                </p>
                <p className="text-[12px]">{card.number}</p>
              </div>
              <div className="text-right">
                <p className={`text-[9px] uppercase ${card.dark ? "text-[#B6C9BE]" : "text-[#A3B0AA]"}`}>
                  EXP
                </p>
                <p className="text-[12px]">{card.exp}</p>
              </div>
              <div className="text-right">
                <p className={`text-[9px] uppercase ${card.dark ? "text-[#B6C9BE]" : "text-[#A3B0AA]"}`}>
                  CVV
                </p>
                <p className="text-[12px]">{card.cvv}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCardsPanel;