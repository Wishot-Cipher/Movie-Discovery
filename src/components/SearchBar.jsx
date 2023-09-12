import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSearch prop here
    onSearch(query);
  };

  return (
    <form className="flex h-7 lg_pro:h-10" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleInputChange}
        className="px-3 py-0 lg_pro:py-1 bg-transparent border border-white rounded-md lg_pro:w-[50vw] w-[35vw] text-white outline-white"
      />
      <button
        type="submit"
        className="bg-[#690543] text-white px-2 rounded-r hover:bg-[#220918] border-[#155ec5] border-2"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
