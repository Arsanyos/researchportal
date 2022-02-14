import React from "react";
//react-icons
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ onChange, placeholder }) => {
  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        onChange={onChange}
        placeholder={placeholder}
      />
      <span className="submit-search">
        <FaSearch />
      </span>
    </div>
  );
};
export default SearchBar;
