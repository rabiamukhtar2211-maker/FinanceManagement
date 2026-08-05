import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Coinest from "../assets/Coinest.png";
import DashboardIcon from "../assets/dashboard.png";
import PaymentIcon from "../assets/payment.png";
import TransactionIcon from "../assets/transaction.png";
import InvoiceIcon from "../assets/invoice.png";
import CardsIcon from "../assets/Cards.png";
import SavingPlansIcon from "../assets/savingplans.png";
import InvestmentsIcon from "../assets/investments.png";
import InboxIcon from "../assets/inbox.png";
import PromosIcon from "../assets/promos.png";
import InsightsIcon from "../assets/insights.png";
import Badge from "../assets/Badge.png";
import Pro from "../assets/pro.png";

const menuItems = [
  { title: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
  {
    title: "Payments",
    icon: PaymentIcon,
    children: [
      { title: "Transfer", path: "/payments/transfer" },
      { title: "Payment", path: "/payments/payment" },
    ],
  },
  { title: "Transactions", icon: TransactionIcon, path: "/transactions" },
  { title: "Invoices", icon: InvoiceIcon, path: "/invoices" },
  { title: "Cards", icon: CardsIcon, path: "/cards" },
  { title: "Saving Plans", icon: SavingPlansIcon, path: "/saving-plans" },
  { title: "Investments", icon: InvestmentsIcon, path: "/investments" },
  { title: "Inbox", icon: InboxIcon, path: "/inbox" },
  { title: "Promos", icon: PromosIcon, path: "/promos" },
  { title: "Insights", icon: InsightsIcon, path: "/insights" },
];

function Sidebar() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState("Payments");

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-[160px] h-screen bg-[#ECF4E9] flex flex-col">
      <div className="px-2 pt-2">
        <div className="flex items-center gap-2">
          <img src={Coinest} alt="Coinest Logo" className="w-6 h-4 object-contain" />
          <h1 className="text-[11px] font-bold tracking-wide text-[#173B2A]">COINEST</h1>
        </div>
      </div>

      <div className="mt-2 px-1.5">
        {menuItems.map((item) => {
          if (item.children) {
            const isOpen = openMenu === item.title;
            const childActive = item.children.some((c) => isActive(c.path));

            return (
              <div key={item.title}>
                <div
                  onClick={() => setOpenMenu(isOpen ? "" : item.title)}
                  className={`
                    flex items-center h-[27px] px-2 rounded-[8px] mb-[1px]
                    cursor-pointer transition-all duration-300
                    ${childActive ? "bg-[#BBF49C]" : "hover:bg-white"}
                  `}
                >
                  <img src={item.icon} alt={item.title} className="w-3 h-3" />
                  <span
                    className={`ml-2.5 text-[9.5px] font-medium ${
                      childActive ? "text-[#173B2A]" : "text-[#616D75]"
                    }`}
                  >
                    {item.title}
                  </span>
                  <svg
                    className={`ml-auto w-2.5 h-2.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M6 9l6 6 6-6" stroke="#616D75" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                {isOpen && (
                  <div className="ml-[13px] pl-2.5 border-l border-[#D6DED2] mb-[1px]">
                    {item.children.map((child) => {
                      const active = isActive(child.path);
                      return (
                        <Link key={child.path} to={child.path}>
                          <div
                            className={`
                              relative flex items-center h-[24px] px-2 rounded-[6px] mb-[1px]
                              cursor-pointer transition-all duration-300
                              ${active ? "" : "hover:bg-white"}
                            `}
                          >
                            {active && (
                              <span className="absolute -left-[10.5px] top-0 bottom-0 w-[2px] bg-[#1E4841]"></span>
                            )}
                            <span
                              className={`text-[9px] font-medium ${
                                active ? "text-[#1E4841] font-semibold" : "text-[#616D75]"
                              }`}
                            >
                              {child.title}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          const active = isActive(item.path);
          return (
            <Link key={item.title} to={item.path}>
              <div
                className={`
                  flex items-center h-[27px] px-2 rounded-[8px] mb-[1px]
                  cursor-pointer transition-all duration-300
                  ${active ? "bg-[#BBF49C]" : "hover:bg-white"}
                `}
              >
                <img src={item.icon} alt={item.title} className="w-3 h-3" />
                <span
                  className={`ml-2.5 text-[9.5px] font-medium ${
                    active ? "text-[#173B2A]" : "text-[#616D75]"
                  }`}
                >
                  {item.title}
                </span>
                {item.title === "Inbox" && (
                  <img src={Badge} alt="Badge" className="ml-auto w-3.5 h-3.5 object-contain" />
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="px-2 mt-14 mb-1">
        <img src={Pro} alt="Pro" className="w-full object-contain" />
      </div>
    </aside>
  );
}

export default Sidebar;