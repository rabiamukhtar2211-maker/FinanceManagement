import { useState } from "react";
import FirstAidIcon from "../assets/FirstAid.png";
import ShoppingCartIcon from "../assets/ShoppingCart.png";
import MonitorIcon from "../assets/Monitor.png";
import UmbrellaIcon from "../assets/Umbrella.png";
import GraduationCapIcon from "../assets/GraduationCap.png";
import DotsIcon from "../assets/dots.png";

const categories = [
  {
    name: "Healthcare",
    icon: FirstAidIcon,
    children: ["Blue Cross Blue Shield", "UnitedHealthcare", "Cigna", "Aetna"],
  },
  {
    name: "E-commerce",
    icon: ShoppingCartIcon,
    children: ["Amazon", "eBay", "Shopify Store", "Etsy"],
  },
  {
    name: "Internet & Cable TV",
    icon: MonitorIcon,
    children: [
      "Comcast Xfinity",
      "AT&T Internet and Cable",
      "Spectrum Cable Services",
      "Verizon Fios",
      "Cox Communications",
      "DirecTV",
      "DISH Network",
      "Frontier Communications",
    ],
  },
  {
    name: "Insurance",
    icon: UmbrellaIcon,
    children: ["Geico Insurance", "State Farm", "Progressive", "Allstate"],
  },
];

function ServiceCategories() {
  const [openCategory, setOpenCategory] = useState("Internet & Cable TV");
  const [activeChild, setActiveChild] = useState("Comcast Xfinity");

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Search */}
      <div className="flex items-center gap-2 mb-3 shrink-0">
        <div className="flex items-center justify-between gap-10 bg-[#ECF4E9] rounded-full px-2.5 py-2.5 w-[85%]">
          <input
            type="text"
            placeholder="Search providers"
            className="bg-transparent outline-none text-[9px] text-[#7C8B80] placeholder:text-[#A3B0AA] w-full"
          />
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <circle cx="11" cy="11" r="7" stroke="#7C8B80" strokeWidth="2" />
            <path d="M21 21l-4-4" stroke="#7C8B80" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <button className="h-7.5 w-7.5 rounded-full bg-[#ECF4E9] flex items-center justify-center shrink-0">
          <img src={DotsIcon} alt="filter" className="h-3 w-3 object-contain" />
        </button>
      </div>

      {/* Categories */}
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-1.5">
        {categories.map((cat) => {
          const isOpen = openCategory === cat.name;
          return (
            <div
              key={cat.name}
              className="bg-white border border-[#E7EEE4] rounded-xl overflow-hidden"
            >
              <div
                onClick={() => setOpenCategory(isOpen ? "" : cat.name)}
                className="flex items-center gap-1.5 p-2 cursor-pointer hover:bg-[#F5F9F4] transition-colors"
              >
                <span className="h-5.5 w-5.5 rounded-full bg-[#BBF49C] flex items-center justify-center shrink-0">
                  <img src={cat.icon} alt={cat.name} className="h-2.5 w-2.5 object-contain" />
                </span>
                <span className="text-[9.5px] font-medium text-[#173B2A] flex-1">{cat.name}</span>
                {cat.children && (
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" stroke="#7C8B80" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </div>

              {cat.children && isOpen && (
                <div className="pb-2 pl-2 pr-2">
                  <div className="flex flex-col gap-1">
                    {cat.children.map((child) => {
                      const active = activeChild === child;
                      return (
                        <div key={child} className="relative pl-3 ml-2">
                          <span
                            className={`absolute left-0 top-0 bottom-0 w-[1.5px] ${
                              active ? "bg-[#8FE85C]" : "bg-[#D6DED2]"
                            }`}
                          ></span>
                          <div
                            onClick={() => setActiveChild(child)}
                            className={`flex items-center gap-2 px-2.5 py-2 rounded-lg cursor-pointer transition-colors ${
                              active ? "bg-[#BBF49C]" : "hover:bg-[#F5F9F4]"
                            }`}
                          >
                            <img src={MonitorIcon} alt={child} className="h-3 w-3 object-contain" />
                            <span
                              className={`text-[9px] ${
                                active ? "text-[#173B2A] font-medium" : "text-[#7C8B80]"
                              }`}
                            >
                              {child}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceCategories;