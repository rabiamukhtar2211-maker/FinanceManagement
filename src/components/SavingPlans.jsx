import HomeIcon from "../assets/home.png";
import VacationIcon from "../assets/vocation.png";
import EmergencyIcon from "../assets/emergency.png";

const plans = [
  { name: "Emergency Fund", saved: 5000, target: 10000, icon: EmergencyIcon },
  { name: "Vacation Fund", saved: 3000, target: 5000, icon: VacationIcon },
  { name: "Home Down Payment", saved: 7250, target: 20000, icon: HomeIcon },
];

function SavingPlans() {
  return (
    <div className="bg-white border border-[#E7EEE4] rounded-xl p-1.5 flex-1 min-h-0 overflow-hidden">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-bold text-[#173B2A]">Saving Plans</span>
        <button className="text-[9px] text-[#173B2A] font-medium">+ Add Plan</button>
      </div>

      <div className="mb-3">
        <p className="text-[9px] text-[#7C8B80]">Total Savings</p>
        <p className="text-lg font-bold text-[#1E4841]">${(84500).toLocaleString()}</p>
      </div>

      <div className="flex flex-col gap-2">
        {plans.map((plan) => {
          const percent = ((plan.saved / plan.target) * 100).toFixed(2).replace(/\.00$/, "");
          return (
            <div key={plan.name} className="border border-[#E7EEE4] rounded-xl p-1">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full  flex items-center justify-center">
                    <img src={plan.icon} alt={plan.name} className="h-4 w-4 object-contain" />
                  </div>
                  <span className="text-[10px] font-medium text-[#173B2A]">{plan.name}</span>
                </div>
                <span className="text-[9px] text-[#7C8B80]">⋮</span>
              </div>

              <div className="w-full h-1.5 bg-[#BBF49C] rounded-full overflow-hidden mb-1.5">
                <div
                  className="h-full bg-[#1E4841] rounded-full"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-[8px]">
                <span className="text-[#173B2A]">
                  ${plan.saved.toLocaleString()} <span className="text-[#7C8B80]">{percent}%</span>
                </span>
                <span className="text-[#7C8B80]">
                  Target: <span className="text-[#173B2A]">${plan.target.toLocaleString()}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SavingPlans;