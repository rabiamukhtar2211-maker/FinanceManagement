import { ArrowDownUp, Search, SlidersHorizontal } from "lucide-react";
import sort from '../assets/CaretDown.png';
import sl from '../assets/dots.png';
import fil from '../assets/filter.png';
function PromoFilters({ query, setQuery }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="relative w-full sm:w-[190px]">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search promo"
          className="h-8 w-full rounded-full bg-[#eff2ef] px-3 pr-8 text-[9px] text-[#13382c] outline-none placeholder:text-gray-400"
        />

        <Search className="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#20554d]" />
      </div>

      <button
        type="button"
        className="flex h-8 items-center gap-1 rounded-md border border-[#e0e5e1] bg-white px-2.5 text-[9px] text-[#20554d] transition hover:bg-[#edf5ea]"
      >
        <img src={sl} alt="sort" className="h-3 w-3" />
        Filter
      </button>

      <button
        type="button"
        className="flex h-8 items-center gap-1 rounded-md border border-[#e0e5e1] bg-white px-2.5 text-[9px] text-[#20554d] transition hover:bg-[#edf5ea]"
      >
        <img src={fil} alt="sort" className="h-3 w-3" />
        Sort By
      </button>
    </div>
  );
}

export default PromoFilters;