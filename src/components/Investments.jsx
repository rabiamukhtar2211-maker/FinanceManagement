import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBarActions from "../components/TopBarActions";
import SearchBar from "../components/SearchBar";
import InvestmentsPanel from "../components/InvestmentsPanel";

function Investments() {
  return (
    <div className="flex h-screen bg-[#EAF3E9] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-white rounded-tl-2xl rounded-bl-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 shrink-0">
          <h1 className="text-lg font-semibold text-[#1E4841]">Investments</h1>
          <div className="flex items-center gap-3">
            <SearchBar />
            <TopBarActions userName="Andrew Forbist" />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 min-h-0 px-5 pb-2 overflow-y-auto">
          <InvestmentsPanel />
        </div>

        {/* Footer */}
        <div className="px-5 py-2 shrink-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Investments;