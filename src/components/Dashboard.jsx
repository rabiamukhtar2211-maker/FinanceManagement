import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBarActions from "../components/TopBarActions";
import SearchBar from "../components/SearchBar";
import BalanceCard from "../components/BalanceCard";
import QuickActions from "../components/QuickActions";
import DailyLimit from "../components/DailyLimit";
import SavingPlans from "../components/SavingPlans";
import StatCards from "../components/StatCards";
import CashflowChart from "../components/CashflowChart";
import RecentTransactions from "../components/RecentTransactions";
import StatisticDonut from "../components/StatisticDonut";
import RecentActivity from "../components/RecentActivity";

function Dashboard() {
  return (
    <div className="flex h-screen bg-[#EAF3E9] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-white rounded-tl-2xl rounded-bl-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-2 shrink-0">
          <h1 className="text-lg font-semibold text-[#173B2A]">Dashboard</h1>
          <div className="flex items-center gap-3">
            <SearchBar />
            <TopBarActions userName="Andrew Forbist" />
          </div>
        </div>

        {/* Main content — 3 columns */}
        <div className="flex-1 min-h-0 px-5 pb-2 grid grid-cols-[0.8fr_1.8fr_1fr] gap-3">
          {/* LEFT column: Balance card, Quick Actions, Daily Limit, Saving Plans */}
          <div className="flex flex-col gap-2 min-h-0 overflow-hidden">
            <BalanceCard />
            <QuickActions />
            <DailyLimit />
            <div className="flex-1 min-h-0">
              <SavingPlans />
            </div>
          </div>

          {/* MIDDLE column: Stat Cards, Cashflow, Recent Transactions */}
          <div className="flex flex-col gap-3 min-h-0">
            <div className="h-[90px] shrink-0">
              <StatCards />
            </div>

            <div className="h-[220px] shrink-0 mt-3">
              <CashflowChart />
            </div>

            <div className="flex-1 ">
              <RecentTransactions />
            </div>
          </div>

          {/* RIGHT column: Statistic, Recent Activity */}
          <div>
            <div className="shrink-0">
              <StatisticDonut />
            </div>
            <div className="flex-1 min-h-0">
              <RecentActivity />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-0.5 shrink-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;