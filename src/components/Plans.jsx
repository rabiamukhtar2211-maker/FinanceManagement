import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBarActions from "../components/TopBarActions";
import SummaryCards from "../components/SummaryCards";
import SavingPlansList from "../components/SavingPlansList";
import VacationFundDetail from "../components/VacationFundDetail";
import SavingTips from "../components/SavingTips";
import BalanceChart from "../components/BalanceChart";
import PlansTransactions from "../components/PlansTransactions";

function Plans() {
  return (
    <div className="flex h-screen bg-[#EAF3E9] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-white rounded-tl-2xl rounded-bl-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 shrink-0">
          <h1 className="text-lg font-semibold text-[#173B2A]">Saving Plans</h1>
          <TopBarActions userName="Andrew Forbist" />
        </div>

        {/* Main content — fixed, no scroll */}
        <div className="flex-1 min-h-0 px-5 pb-2 flex flex-col gap-3">
          {/* Summary cards row */}
          <div className="shrink-0">
            <SummaryCards />
          </div>

          {/* Body — left list + right bordered box */}
          <div className="flex-1 min-h-0 grid grid-cols-[1fr_2fr] gap-3">
            {/* LEFT column: Saving Plans list — full height */}
            <div className="min-h-0">
              <SavingPlansList />
            </div>

            {/* RIGHT: one bordered box containing Vacation+Tips+Balance on top, Transactions below */}
            <div className="min-h-0 border border-[#E7EEE4] rounded-2xl p-3 flex flex-col gap-3 overflow-hidden">
              <div className="grid grid-cols-3 gap-3 shrink-0">
                <VacationFundDetail />
                <SavingTips />
                <BalanceChart />
              </div>

              <div className="flex-1 min-h-0 overflow-y-auto">
                <PlansTransactions />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-2 shrink-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Plans;