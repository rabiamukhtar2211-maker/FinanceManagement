import DotsIcon from "../assets/dots.png";

const accounts = [
  { name: "Abe Reeves", id: "120987654322" },
  { name: "Audrey Murphy", id: "120987654328" },
  { name: "Bob Johnson", id: "120987654324" },
  { name: "Cho Wan Kim", id: "120987654327" },
  { name: "Cynthia Watson", id: "120987654323" },
  { name: "Edna Connors", id: "120987654321" },
  { name: "Jade Brown", id: "120987654325" },
  { name: "Miles Sanders", id: "120987654326" },
];

function AccountsList() {
  return (
    <div className="bg-white rounded-2xl p-2.5 h-full flex flex-col overflow-hidden">
      {/* Search */}
      <div className="flex items-center justify-between gap-1.5 mb-2.5 shrink-0">
        <div className="flex items-center gap-1.5 bg-[#ECF4E9] rounded-full px-3 py-2 flex-1">
          <input
            type="text"
            placeholder="Search account"
            className="bg-transparent outline-none text-[9px] text-[#7C8B80] placeholder:text-[#A3B0AA] w-full"
          />
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#7C8B80" strokeWidth="2" />
            <path d="M21 21l-4-4" stroke="#7C8B80" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <button className="h-7.5 w-7.5 rounded-full bg-[#ECF4E9] flex items-center justify-center shrink-0">
          <img src={DotsIcon} alt="filter" className="h-4 w-4 object-contain" />
        </button>
      </div>

      {/* List — fills all space between search and Add button */}
      <div
        className="flex-1 min-h-0 overflow-y-auto flex flex-col gap-1 pr-1.5"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#B8C4BC transparent" }}
      >
        {accounts.map((acc) => (
          <div
            key={acc.id}
            className="flex items-center gap-2.5 p-2.5 border border-[#E7EEE4] rounded-lg hover:bg-[#F5F9F4] cursor-pointer transition-colors shrink-0 over-flow-hidden"
          >
            <span className="h-6 w-6 rounded-full bg-[#BBF49C] shrink-0"></span>
            <div>
              <p className="text-[9px] font-medium text-[#173B2A] leading-tight">{acc.name}</p>
              <p className="text-[7px] text-[#A3B0AA]">{acc.id}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Recipient */}
      <button className="mt-2 bg-[#1E4841] text-white text-[10px] font-medium rounded-lg py-2 shrink-0">
        + Add New Recipient
      </button>
    </div>
  );
}

export default AccountsList;