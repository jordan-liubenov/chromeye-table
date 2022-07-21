import RenderUsers from "../RenderUsers/RenderUsers";

//Initial user render (All users, non-filtered)

const RowElements = (props) => {
  let page = props.page;

  let pageSize = props.pagingSize;

  let users = props.users;

  let render;
  if (users.length > 0) {
    if (page == 1) {
      users = users.slice(0, pageSize);
    } else {
      users = users.slice(Number(props.index), Number(props.endIndex));
    }
    render = <RenderUsers userArr={users} />;
  }

  return <>{render}</>;
};

export default RowElements;
