import { useEffect, useState } from "react";
import { fetchUsers } from "../service/users";

import "../components/Table.css";

//child component imports
import TableHeaders from "./TableHeaders/TableHeaders";
import RowElement from "./RowElements/RowElements";
import SearchBar from "./SearchBar/SearchBar";
import { handleSearch } from "./utils/searchUtil";

const Table = () => {
  const [users, setUsers] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const [pagingSize, setPaging] = useState(3);

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);
  
  return (
    <div>
      <SearchBar
        searchValue={searchValue}
        handleSearch={(e) => handleSearch(e, setSearchValue)}
      />
      <table className="table">
        <tbody>
          <tr>
            <TableHeaders />
          </tr>
          <RowElement users={users} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
