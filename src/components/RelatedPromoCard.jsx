import { useNavigate } from "react-router-dom";

function RelatedPromoCard({ promo }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(`/promos/${promo.id}`)}
      className="w-full text-left"
    >
      <div className="h-[92px] rounded-lg bg-[#e5e6e6]" />

      <p className="mt-1 text-[8.5px] text-gray-400">
        {promo.category || "Promotion"}
      </p>

      <p className="truncate text-[9px] font-medium text-[#13382c]">
        {promo.title}
      </p>
    </button>
  );
}

export default RelatedPromoCard;