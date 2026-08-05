import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBarActions from "../components/TopBarActions";
import QuickActions from "../components/QuickActions";
import RecentTransfer from "../components/RecentTransfer";
import TransferForm from "../components/TransferForm";
import AccountsList from "../components/AccountsList";

function Transfer() {
  return (
    <div className="flex h-screen bg-[#EAF3E9] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-white rounded-tl-2xl rounded-bl-2xl overflow-y-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 shrink-0">
          <h1 className="text-lg font-semibold text-[#173B2A]">Transfer</h1>
          <TopBarActions userName="Andrew Forbist" />
        </div>

        {/* Main content — 2 columns */}
        <div className="px-5 pb-2 grid grid-cols-[240px_1fr] gap-3">
          {/* LEFT column: Search + Accounts list */}
          <div className="flex flex-col gap-2">
            <div className="shrink-0">
              <QuickActions />
            </div>
            <div>
              <AccountsList />
            </div>
          </div>

          {/* RIGHT column: Recent Transfer + Transfer Form */}
          <div className="flex flex-col gap-3 border border-[#E7EEE4] rounded-2xl">
            <RecentTransfer />
            <TransferForm />
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

export default Transfer;