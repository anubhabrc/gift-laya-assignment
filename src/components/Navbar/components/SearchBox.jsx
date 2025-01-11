import React from "react";
import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="relative flex items-center w-full">
      <div className="absolute left-3">
        <Search size={20} />
      </div>
      <input
        type="text"
        placeholder="Search for..."
        className="placeholder:text-gray-400 placeholder:font-medium md:placeholder:font-normal w-full py-2 pl-10 pr-4 text-base text-gray-700  rounded-xl border border-gray-200 focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;
