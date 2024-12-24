import React from "react";

function DataApi({ item }) {
  return (
    <div>
      <tr className="nav-item">
        <td>{item._id}</td>
        <td>{item.username}</td>
      </tr>
    </div>
  );
}

export default DataApi;
