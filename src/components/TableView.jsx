import React from "react";


function TableView({ users }) {
  return (
          <tr>
            <td>{users.id}</td>
            <td>{users.username}</td>
            <td>{users.password}</td>
            <td>{users.email}</td>
            <td>{users.link}</td>
          </tr>
  );
}

export default TableView;
