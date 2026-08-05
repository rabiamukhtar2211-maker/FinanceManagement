import { useState } from "react";
import PromoFilters from "./PromoFilters";
import PromoCard from "./PromoCard";
import { promos } from "./PromoData";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBarActions from "../components/TopBarActions";

function PromosPage() {
  const [query, setQuery] = useState("");

  const filteredPromos = promos.filter((promo) =>
    promo.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-[#EAF3E9] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-white rounded-tl-2xl rounded-bl-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-2 shrink-0">
          <h1 className="text-lg font-semibold text-[#173B2A]">Promos</h1>
          <div className="flex items-center gap-3">
            <TopBarActions userName="Andrew Forbist" />
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 min-h-0 overflow-y-auto px-5 pb-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <PromoFilters query={query} setQuery={setQuery} />

            <button
              type="button"
              className="h-8 rounded-md bg-[#1e4841] px-3 text-[9px] font-medium text-white transition hover:bg-[#13382c]"
            >
              Add Promo
            </button>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPromos.map((promo) => (
              <PromoCard key={promo.id} promo={promo} />
            ))}
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

export default PromosPage;