import { useState } from "react";
import "../SearchBar/SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchDiv">
      <input
        type="text"
        placeholder="Search by First or Last name"
        value={props.searchValue}
        onChange={props.handleSearch}
      ></input>
    </div>
  );
};

export default SearchBar;
