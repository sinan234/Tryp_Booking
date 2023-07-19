import React from "react";
import { FaSearch, FaCalendar, FaFilter } from "react-icons/fa";

const SearchFilterComponent = ({
  searchTerm,
  handleSearch,
  selectedFilter,
  handleFilterChange,
}) => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search"
        className="w-48 h-8 bg-white px-4 ml-24 border-gray-800 rounded-full text-[#011425] "
        value={searchTerm}
        onChange={handleSearch}
      />
      <FaSearch className="absolute text-green-400 lg:ml-64 mt-2" />
      <div className="flex relative ml-4">
        <FaCalendar className="absolute text-green-400 lg:ml-4 mt-2" />
        <input
          type="text"
          value="01-07-2020-02-07-2020"
          className="w-64 h-8 text-sm bg-white px-11 border-gray-800 rounded-full text-[#011425]  "
        />
      </div>
      <div className="relative ml-4">
        <FaFilter className="absolute text-green-400 lg:ml-4 mt-2" />
        <select
          className="w-72 h-8 bg-white px-10 border-gray-800 rounded-full text-[#011425]"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Option 1">Confirmed Bookings</option>
          <option value="Option 2">Waiting Bookings</option>
          <option value="Option 3">Failed Bookings</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilterComponent;
