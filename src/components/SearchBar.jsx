import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="relative flex h-7 lg_pro:h-10" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleInputChange}
        className="px-3 py-4 lg_pro:py-1 bg-transparent border border-white rounded-md lg_pro:w-[50vw] w-[65vw] text-white outline-white"
      />
      <FaSearch className="absolute right-3 top-2 lg_pro:top-3 text-white cursor-pointer" onClick={handleSubmit} />
    </form>
  );
};

export default SearchBar;
