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
  {
    title: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
  },

  {
    title: "Payments",
    icon: PaymentIcon,
    children: [
      {
        title: "Transfer",
        path: "/payments/transfer",
      },
      {
        title: "Payment",
        path: "/payments/payment",
      },
    ],
  },

  {
    title: "Transactions",
    icon: TransactionIcon,
    path: "/transactions",
  },

  {
    title: "Invoices",
    icon: InvoiceIcon,
    path: "/invoices",
  },

  {
    title: "Cards",
    icon: CardsIcon,
    path: "/cards",
  },

  {
    title: "Saving Plans",
    icon: SavingPlansIcon,
    path: "/saving-plans",
  },

  {
    title: "Investments",
    icon: InvestmentsIcon,
    path: "/investments",
  },

  {
    title: "Inbox",
    icon: InboxIcon,
    path: "/inbox",
  },

  {
    title: "Promos",
    icon: PromosIcon,
    path: "/promos",
  },

  {
    title: "Insights",
    icon: InsightsIcon,
    path: "/insights",
  },
];

function Sidebar() {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState("Payments");
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          MOBILE TOP BAR
      ===================================================== */}
      <div
        className="
          lg:hidden
          fixed
          top-0
          left-0
          right-0
          h-14
          bg-[#ECF4E9]
          flex
          items-center
          justify-between
          px-4
          z-[60]
          border-b
          border-[#DDE8DA]
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Coinest}
            alt="Coinest Logo"
            className="w-7 h-5 object-contain"
          />

          <h1 className="text-[12px] font-bold tracking-wide text-[#173B2A]">
            COINEST
          </h1>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            w-9
            h-9
            rounded-lg
            flex
            items-center
            justify-center
            hover:bg-white
            active:scale-95
            transition
          "
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#173B2A"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <>
                <path
                  d="M6 6l12 12"
                  strokeLinecap="round"
                />
                <path
                  d="M18 6L6 18"
                  strokeLinecap="round"
                />
              </>
            ) : (
              <>
                <path
                  d="M4 6h16"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12h16"
                  strokeLinecap="round"
                />
                <path
                  d="M4 18h16"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}
      {mobileOpen && (
        <div
          className="
            lg:hidden
            fixed
            inset-0
            bg-black/30
            backdrop-blur-[1px]
            z-[45]
          "
          onClick={closeMobileMenu}
        />
      )}

      {/* =====================================================
          SIDEBAR
      ===================================================== */}
      <aside
        className={`
          fixed
          lg:static
          top-0
          left-0
          z-[50]

          h-screen

          bg-[#ECF4E9]

          flex
          flex-col

          overflow-hidden

          transition-transform
          duration-300
          ease-in-out

          /* MOBILE */
          w-[230px]
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}

          /* TABLET */
          md:w-[230px]

          /* DESKTOP */
          lg:w-[138px]
          lg:translate-x-0

          pt-14
          lg:pt-0
        `}
      >
        {/* =====================================================
            DESKTOP LOGO
        ===================================================== */}
        <div
          className="
            hidden
            lg:block
            px-2
            pt-2
            flex-shrink-0
          "
        >
          <div className="flex items-center gap-2">
            <img
              src={Coinest}
              alt="Coinest Logo"
              className="w-6 h-4 object-contain"
            />

            <h1 className="text-[11px] font-bold tracking-wide text-[#173B2A]">
              COINEST
            </h1>
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET LOGO
        ===================================================== */}
        <div
          className="
            lg:hidden
            px-5
            pt-4
            pb-3
            flex-shrink-0
          "
        >
          <div className="flex items-center gap-2">
            <img
              src={Coinest}
              alt="Coinest Logo"
              className="w-8 h-5 object-contain"
            />

            <h1 className="text-sm font-bold tracking-wide text-[#173B2A]">
              COINEST
            </h1>
          </div>
        </div>

        {/* =====================================================
            MENU
        ===================================================== */}
        <div
          className="
            flex-1
            min-h-0

            mt-2
            px-2

            overflow-y-auto
            overflow-x-hidden

            scrollbar-thin
            scrollbar-thumb-[#C8D8C3]
            scrollbar-track-transparent
          "
        >
          {menuItems.map((item) => {
            {/* =================================================
                MENU WITH CHILDREN
            ================================================= */}
            if (item.children) {
              const isOpen = openMenu === item.title;

              const childActive = item.children.some((child) =>
                isActive(child.path)
              );

              return (
                <div key={item.title}>
                  {/* Parent */}
                  <div
                    onClick={() =>
                      setOpenMenu(isOpen ? "" : item.title)
                    }
                    className={`
                      flex
                      items-center

                      h-[38px]
                      lg:h-[27px]

                      px-3
                      lg:px-2

                      rounded-[8px]

                      mb-1

                      cursor-pointer

                      transition-all
                      duration-200

                      ${
                        childActive
                          ? "bg-[#BBF49C]"
                          : "hover:bg-white"
                      }
                    `}
                  >
                    {/* Icon */}
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="
                        w-4
                        h-4
                        lg:w-3
                        lg:h-3
                        object-contain
                        flex-shrink-0
                      "
                    />

                    {/* Text */}
                    <span
                      className={`
                        ml-3
                        lg:ml-2.5

                        text-[12px]
                        lg:text-[9.5px]

                        font-medium

                        truncate

                        ${
                          childActive
                            ? "text-[#173B2A]"
                            : "text-[#616D75]"
                        }
                      `}
                    >
                      {item.title}
                    </span>

                    {/* Arrow */}
                    <svg
                      className={`
                        ml-auto
                        w-3
                        h-3
                        transition-transform
                        flex-shrink-0
                        ${isOpen ? "rotate-180" : ""}
                      `}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="#616D75"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Children */}
                  {isOpen && (
                    <div
                      className="
                        ml-4
                        lg:ml-[13px]

                        pl-3
                        lg:pl-2.5

                        border-l
                        border-[#D6DED2]

                        mb-1
                      "
                    >
                      {item.children.map((child) => {
                        const active = isActive(child.path);

                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={closeMobileMenu}
                          >
                            <div
                              className={`
                                relative

                                flex
                                items-center

                                h-[34px]
                                lg:h-[24px]

                                px-2

                                rounded-[6px]

                                mb-1

                                cursor-pointer

                                transition-all
                                duration-200

                                ${
                                  active
                                    ? "bg-[#DFF6D4] lg:bg-transparent"
                                    : "hover:bg-white"
                                }
                              `}
                            >
                              {/* Active Line */}
                              {active && (
                                <span
                                  className="
                                    absolute
                                    -left-[13px]
                                    lg:-left-[10.5px]

                                    top-0
                                    bottom-0

                                    w-[2px]

                                    bg-[#1E4841]

                                    rounded-full
                                  "
                                />
                              )}

                              <span
                                className={`
                                  text-[11px]
                                  lg:text-[9px]

                                  truncate

                                  ${
                                    active
                                      ? "text-[#1E4841] font-semibold"
                                      : "text-[#616D75] font-medium"
                                  }
                                `}
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

            {/* =================================================
                NORMAL MENU ITEM
            ================================================= */}
            const active = isActive(item.path);

            return (
              <Link
                key={item.title}
                to={item.path}
                onClick={closeMobileMenu}
              >
                <div
                  className={`
                    flex
                    items-center

                    h-[38px]
                    lg:h-[27px]

                    px-3
                    lg:px-2

                    rounded-[8px]

                    mb-1

                    cursor-pointer

                    transition-all
                    duration-200

                    ${
                      active
                        ? "bg-[#BBF49C]"
                        : "hover:bg-white"
                    }
                  `}
                >
                  {/* Icon */}
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="
                      w-4
                      h-4
                      lg:w-3
                      lg:h-3
                      object-contain
                      flex-shrink-0
                    "
                  />

                  {/* Text */}
                  <span
                    className={`
                      ml-3
                      lg:ml-2.5

                      text-[12px]
                      lg:text-[9.5px]

                      font-medium

                      truncate

                      ${
                        active
                          ? "text-[#173B2A]"
                          : "text-[#616D75]"
                      }
                    `}
                  >
                    {item.title}
                  </span>

                  {/* Inbox Badge */}
                  {item.title === "Inbox" && (
                    <img
                      src={Badge}
                      alt="Badge"
                      className="
                        ml-auto

                        w-4
                        h-4
                        lg:w-3.5
                        lg:h-3.5

                        object-contain
                        flex-shrink-0
                      "
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {/* =====================================================
            PRO CARD
        ===================================================== */}
        <div
          className="
            flex-shrink-0

            px-3
            lg:px-2

            pt-3
            pb-3

            mt-2
          "
        >
          <img
            src={Pro}
            alt="Pro"
            className="
              w-full
              object-contain
            "
          />
        </div>
      </aside>

      {/* =====================================================
          MOBILE TOP SPACE
      ===================================================== */}
      <div className="lg:hidden h-14" />
    </>
  );
}

export default Sidebar;