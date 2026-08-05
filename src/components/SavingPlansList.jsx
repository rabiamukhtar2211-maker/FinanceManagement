import WarningIcon from "../assets/Warning.png";
import AirplaneIcon from "../assets/Airplane.png";
import ArmchairIcon from "../assets/Armchair.png";
import HouseLineIcon from "../assets/HouseLine.png";
import GraduationCapIcon from "../assets/GraduationCap.png";
import CarIcon from "../assets/Car.png";

const plans = [
  {
    name: "Emergency Fund",
    saved: 6000,
    target: 10000,
    percent: 60,
    status: "In Progress",
    icon: WarningIcon,
    active: false,
  },
  {
    name: "Vacation Fund",
    saved: 3000,
    target: 5000,
    percent: 60,
    status: "In Progress",
    icon: AirplaneIcon,
    active: true,
  },
  {
    name: "Retirement Fund",
    saved: 5600,
    target: 20000,
    percent: 28,
    status: "In Progress",
    icon: ArmchairIcon,
    active: false,
  },
  {
    name: "Home Down Payment",
    saved: 25000,
    target: 25000,
    percent: 100,
    status: "Completed",
    icon: HouseLineIcon,
    active: false,
  },
  {
    name: "Education Fund (for children)",
    saved: 6000,
    target: 15000,
    percent: 40,
    status: "In Progress",
    icon: GraduationCapIcon,
    active: false,
  },
  {
    name: "Car Replacement Fund",
    saved: 2000,
    target: 8000,
    percent: 25,
    status: "Behind Schedule",
    icon: CarIcon,
    active: false,
  },
];

function SavingPlansList() {
  return (
    <div className="bg-white rounded-2xl border border-[#E5E6E6] p-4 h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-1.5 shrink-0">
        <span className="text-[11px] font-semibold text-black">Saving Plans</span>
        <span className="text-[10px] text-[#7C8B80]">⋯</span>
      </div>

      {/* Plans list */}
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg p-2.5 ${
              plan.active ? "bg-[#ECF4E9]" : "bg-white border border-[#E5E6E6]"
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <span
                className={`h-5.5 w-5.5 rounded-full flex items-center justify-center shrink-0 ${
                  plan.active ? "bg-white" : "bg-[#ECF4E9]"
                }`}
              >
                <img src={plan.icon} alt={plan.name} className="h-2.5 w-2.5 object-contain" />
              </span>

              <div className="flex-1 flex items-center justify-between">
                <span className="text-[8.5px] font-medium text-black leading-tight">
                  {plan.name}
                </span>
                <span className="text-[8.5px] font-semibold text-black">{plan.percent}%</span>
              </div>
            </div>

            <div className="w-full h-2 bg-[#BBF49C] rounded-full overflow-hidden mb-1">
              <div
                className="h-full bg-[#1E4841] rounded-full"
                style={{ width: `${plan.percent}%` }}
              ></div>
            </div>

            <div className="flex items-center justify-between text-[7.5px]">
              <span className="text-black">
                ${plan.saved.toLocaleString()} / ${plan.target.toLocaleString()}
              </span>
              <span className="text-black">{plan.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Plan button */}
      <button className="mt-1.5 bg-[#1E4841] text-white text-[9.5px] font-medium rounded-lg py-3.5 shrink-0">
        + Add Plan
      </button>
    </div>
  );
}

export default SavingPlansList;