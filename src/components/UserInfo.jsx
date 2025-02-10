import React from 'react'

function UserInfo() {
    const username = JSON.parse(localStorage.getItem("username"));
    const id = JSON.parse(localStorage.getItem("id"));
    const role = JSON.parse(localStorage.getItem("roles"));

  return (
    <div>
      <div className="presentpage__rigth-block">
              <ul class="nav flex-column">
                <span className="very-small">Пользователь:</span>
                <span className="very-small">Username:{username}</span>
                <span className="very-small">ID:{id}</span>
                <span className="very-small">Статус: {role}</span>
              </ul>
            </div>
    </div>
  )
}

export default UserInfo
