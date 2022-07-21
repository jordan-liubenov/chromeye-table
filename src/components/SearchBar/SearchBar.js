import "../SearchBar/SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchDiv">
      <input
        type="text"
        placeholder="Search"
        value={props.searchValue}
        onChange={props.handleSearch}
      ></input>
    </div>
  );
};

export default SearchBar;
