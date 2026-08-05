import { Copy } from "lucide-react";

function VoucherCodeCard({ code, description }) {
  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
  };

  return (
    <div className="rounded-xl border border-[#e0e5e1] bg-white p-2.5">
      <p className="mb-2 text-[10.5px] font-semibold text-[#13382c]">
        Voucher Code
      </p>

      <div className="rounded-md bg-[#edf5ea] px-2 py-2 text-[8px] font-medium text-[#20554d]">
        {code}
      </div>

      <p className="mt-2 truncate text-[7px] text-gray-500">
        {description}
      </p>

      <button
        type="button"
        onClick={copyCode}
        className="mt-2 flex h-6 w-full items-center justify-center gap-1 rounded-md bg-[#1e4841] text-[8px] text-white transition hover:bg-[#13382c]"
      >
        <Copy className="h-3 w-3" />
        Copy Code
      </button>
    </div>
  );
}

export default VoucherCodeCard;