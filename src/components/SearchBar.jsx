import SearchIcon from "../assets/search.png";

function SearchBar() {
  return (
    <div className="flex items-center justify-between gap-2 bg-[#EFF0F0] rounded-full px-2 py-1.5 w-72">
      <input
        type="text"
        placeholder="Search placeholder"
        className="bg-transparent outline-none text-[13px] text-[#7C8B80] placeholder:text-[#A3B0AA] w-full"
      />
      <img src={SearchIcon} alt="search" className="h-4 w-4 object-contain shrink-0" />
    </div>
  );
}

export default SearchBar;