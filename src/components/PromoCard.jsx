import { useNavigate } from "react-router-dom";

function PromoCard({ promo }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/promos/${promo.id}`)}
      className="cursor-pointer overflow-hidden rounded-xl border border-[#e0e5e1] bg-[#fbfcfb] p-1.5 transition duration-300 hover:shadow-md"
    >
      <div className="h-[78px] rounded-lg bg-[#e5e6e6] sm:h-[138px]" />

      <div className="px-1 pb-1 pt-2">
        <h2 className="truncate text-[10px] font-semibold text-[#13382c] sm:text-[11px]">
          {promo.title}
        </h2>

        <p className="mt-1.5 min-h-[30px] text-[8px] leading-3 text-gray-500">
          {promo.description}
        </p>

        <p className="mt-2 truncate text-[7px] text-gray-500">
          {promo.label}{" "}
          <span className="font-medium text-[#13382c]">{promo.date}</span>
        </p>
      </div>
    </article>
  );
}

export default PromoCard;