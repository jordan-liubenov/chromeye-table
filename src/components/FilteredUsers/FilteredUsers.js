import RenderUsers from "../RenderUsers/RenderUsers";
import { filterUser } from "../utils/searchUtil";

//will be rendered when a value is typed in the search bar
const FilteredUsers = (props) => {
  const userArr = filterUser(props.searchValue, props.users);

  let render;
  if (userArr.length == 0) {
    render = (
      <>
        <tr>
          <td>No such user found!</td>
        </tr>
      </>
    );
  } else {
    render = <RenderUsers userArr={userArr} />;
  }

  return render;
};

export default FilteredUsers;
