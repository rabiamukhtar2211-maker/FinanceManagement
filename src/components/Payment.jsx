import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBarActions from "../components/TopBarActions";
import QuickActions from "../components/QuickActions";
import RecentPayments from "../components/RecentPayments";
import PaymentForm from "../components/PaymentForm";
import ServiceCategories from "../components/ServiceCategories";

function Payment() {
  return (
    <div className="flex h-screen bg-[#EAF3E9] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-white rounded-tl-2xl rounded-bl-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 shrink-0">
          <h1 className="text-lg font-semibold text-[#173B2A]">Payment</h1>
          <TopBarActions userName="Andrew Forbist" />
        </div>

        {/* Main content — 2 columns */}
        <div className="flex-1 min-h-0 px-5 pb-2 grid grid-cols-[303px_1fr] gap-3">
          {/* LEFT column: Quick Actions + Search + Categories */}
          <div className="flex flex-col gap-3 min-h-0 overflow-hidden">
            <div className="shrink-0">
              <QuickActions />
            </div>
            <div className="flex-1 ">
              <ServiceCategories />
            </div>
          </div>

          {/* RIGHT column: Recent Payments + Payment Form */}
          <div className="flex flex-col gap-1 border border-[#E7EEE4] rounded-2xl p-3">
  <RecentPayments />
  <PaymentForm />
</div>
        </div>

        {/* Footer */}
        <div className="px-5 py-[-1] shrink-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Payment;