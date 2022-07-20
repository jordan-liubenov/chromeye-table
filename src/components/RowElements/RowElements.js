import { useEffect } from "react";


const RowElements = (props) => {
  //props.users - array of objects
  return (
    <>
      {props.users.map((user) => (
        <tr key={user.id}>
          <td>
            <img
              width={32}
              height={32}
              src={`http://apis.chromeye.com:9191` + user.avatar.url}
            ></img>
          </td>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.company.name}</td>
          <td>{user.company.department}</td>
          <td>{user.company.startDate}</td>
        </tr>
      ))}
    </>
  );
};

export default RowElements;
