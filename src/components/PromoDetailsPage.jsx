import { useState } from "react";
import {
  ArrowLeft,
  MoreHorizontal,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import TopBarActions from "../components/TopBarActions";

import FacebookLogo from "../assets/FacebookLogo.png";
import InstagramLogo from "../assets/InstagramLogo.png";
import TwitterLogo from "../assets/TwitterLogo.png";
import Link from "../assets/Link.png";

import { promos } from "./PromoData";
import VoucherCodeCard from "./VoucherCodeCard";
import RelatedPromoCard from "./RelatedPromoCard";

function PromoDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const promo =
    promos.find((item) => String(item.id) === String(id)) || promos[5];

  const relatedPromos = promos
    .filter((item) => item.id !== promo.id)
    .slice(0, 3);

  return (
    <div className="flex h-screen bg-[#EAF3E9] overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col bg-white rounded-tl-2xl rounded-bl-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-2 shrink-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4 text-[#173B2A]" />
            </button>
            <h1 className="text-lg font-semibold text-[#173B2A]">
              Promo Details
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <TopBarActions userName="Andrew Forbist" />
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 min-h-0 overflow-y-auto px-3 pb-6 sm:px-6">
          <div className="mx-auto w-full max-w-[1120px]">
            <div className="h-[155px] w-full rounded-xl bg-[#e5e6e6] sm:h-[225px]" />

            <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_145px]">
              <section className="min-w-0 px-1 sm:px-10">
                <h2 className="text-base font-bold text-[#13382c] sm:text-lg">
                  {promo.title}
                </h2>

                <div className="mt-7 grid max-w-[700px] grid-cols-[120px_minmax(0,1fr)] gap-x-4 gap-y-2 border-b border-gray-200 pb-3 text-[8px] text-gray-500 sm:text-[10.5px]">
                  <p>Promo Period</p>
                  <p className="text-[#13382c]">Nov 1 - Nov 30, 2028</p>

                  <p>Usage Period</p>
                  <p className="text-[#13382c]">
                    During the promo period and completed by March 31, 2029.
                  </p>

                  <p>Minimum Transaction</p>
                  <p className="text-[#13382c]">$300</p>
                </div>

                <div className="mt-4 space-y-4 max-w-[730px] text-[8px] leading-4 text-gray-500 sm:text-[12px]">
                  <section>
                    <h3 className="mb-1 font-bold text-[#13382c]">About</h3>
                    <p>
                      Earn triple points on all travel-related purchases when
                      booking through our exclusive partner portals. Perfect
                      for frequent travelers looking to maximize rewards on
                      their trips. Enjoy the freedom to explore new
                      destinations while accumulating rewards faster,
                      ensuring your travel budget works harder for you.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-bold text-[#13382c]">How To</h3>
                    <p>
                      Log into your Coinest account, navigate to the Rewards
                      section, and use the links provided to book your
                      travel.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-1 font-bold text-[#13382c]">
                      Terms & Conditions
                    </h3>
                    <ul className="list-disc space-y-0.5 pl-4">
                      <li>Must book through designated Coinest partner portals.</li>
                      <li>Triple points apply only to the first $5,000 of travel expenses.</li>
                      <li>Points are awarded after travel is completed.</li>
                      <li>Cancellation may result in forfeiture of bonus points.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="mb-1 font-bold text-[#13382c]">Partners</h3>
                    <ul className="list-disc space-y-0.5 pl-4">
                      <li>Expedia</li>
                      <li>Booking.com</li>
                      <li>Airbnb</li>
                    </ul>
                  </section>
                </div>

                <div className="mt-5 grid max-w-[540px] grid-cols-1 gap-3 sm:grid-cols-2">
                  <VoucherCodeCard
                    code="TRAVELX"
                    description="Valid for Hotels, Flights, and Experiences"
                  />
                  <VoucherCodeCard
                    code="GETTRVL"
                    description="Valid for Airport Transfers and Car Rental"
                  />
                </div>
              </section>

              <aside className="min-w-0 lg:-ml-4 xl:-ml-6">
                <div className="mb-5">
                  <p className="mb-2 text-[11px] font-semibold text-[#13382c]">
                    Share
                  </p>

                  <div className="flex gap-1 border-b border-gray-200 pb-5">
                    <button
                      type="button"
                      className="flex h-7 w-7 items-center justify-center rounded-md bg-[#ecf4e9] transition hover:bg-[#dce9dc]"
                    >
                      <img src={Link} alt="Link" className="h-4 w-4 object-contain" />
                    </button>

                    <button
                      type="button"
                      className="flex h-7 w-7 items-center justify-center rounded-md bg-[#edf5ea] transition hover:bg-[#dce9dc]"
                    >
                      <img src={FacebookLogo} alt="Facebook" className="h-4 w-4 object-contain" />
                    </button>

                    <button
                      type="button"
                      className="flex h-7 w-7 items-center justify-center rounded-md bg-[#edf5ea] transition hover:bg-[#dce9dc]"
                    >
                      <img src={InstagramLogo} alt="Instagram" className="h-4 w-4 object-contain" />
                    </button>

                    <button
                      type="button"
                      className="flex h-7 w-7 items-center justify-center rounded-md bg-[#edf5ea] transition hover:bg-[#dce9dc]"
                    >
                      <img src={TwitterLogo} alt="Twitter" className="h-4 w-4 object-contain" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-bold text-[#13382c]">
                    Related Promos
                  </h3>
                  <MoreHorizontal className="h-3 w-3 text-gray-500" />
                </div>

                <div className="mt-2 space-y-4">
                  {relatedPromos.map((item) => (
                    <RelatedPromoCard key={item.id} promo={item} />
                  ))}
                </div>
              </aside>
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

export default PromoDetailsPage;