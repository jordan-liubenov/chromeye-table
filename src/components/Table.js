import { useEffect, useState } from "react";
import { fetchUsers } from "../service/users";

import "../components/Table.css";

import { handleSearch } from "./utils/searchUtil";

//child component imports
import TableHeaders from "./TableHeaders/TableHeaders";
import RowElements from "./RowElements/RowElements";
import FilteredUsers from "./FilteredUsers/FilteredUsers";
import SearchBar from "./SearchBar/SearchBar";
import PageSizeButton from "./PageSizeButton/PageSizeButton";
import PageButton from "./PageButton/PageButton";

const Table = () => {
  const [users, setUsers] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [pagingSize, setPagingSize] = useState(Number(3));

  let [page, setPage] = useState(Number(1));

  let [previousPage, setPrevPage] = useState(Number(1));

  let [index, setIndex] = useState(Number(0));
  let [previousIndex, setPrevIndex] = useState(Number(0));

  let [endIndex, setEndIndex] = useState(Number(pagingSize));
  let [previousEndIndex, setPrevEndIndex] = useState(Number(0));

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  useEffect(() => {
    console.log(`previous page ${previousPage}`);
    if (page == 1) {
      setIndex(0);
      setEndIndex(pagingSize);
    } else {
      setPrevPage(page);
      if (endIndex <= 7) {
        setPrevIndex(index);
        setPrevEndIndex(endIndex);

        setIndex(Number(index) + Number(pagingSize));
        setEndIndex(Number(endIndex) + Number(pagingSize));
      } else {
        setIndex(Number(index) - Number(pagingSize));
        setEndIndex(Number(endIndex) - Number(pagingSize));
      }
    }
  }, [page]);

  useEffect(() => {
    //---On page size change:

    //go to page 1 on change-page-size
    setPage(1);

    //go back to default indexes
    setIndex(0);
    setEndIndex(pagingSize);
  }, [pagingSize]);

  return (
    <div>
      <div>
        <PageSizeButton setPagingSize={setPagingSize} />
        <SearchBar
          searchValue={searchValue}
          handleSearch={(e) => handleSearch(e, setSearchValue)}
        />
        <PageButton
          pagingSize={pagingSize}
          users={users}
          page={page}
          setPage={setPage}
        />
      </div>
      <table className="table">
        <tbody>
          <tr>
            <TableHeaders />
          </tr>
          {searchValue ? (
            <FilteredUsers searchValue={searchValue} users={users} />
          ) : (
            <RowElements
              index={index}
              endIndex={endIndex}
              users={users}
              pagingSize={pagingSize}
              page={page}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
