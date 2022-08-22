import React, { useState } from "react";
import API from "../API";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const hendleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));
  return (
    <>
      <span
        className={"badge bg-" + (users.length > 0 ? "primary" : "dangers")}
      >
        Готові відриватися з тобою
      </span>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Ім'я</th>
            <th scope="col">Характер</th>
            <th scope="col">Професія</th>
            <th scope="col">Зустрічі</th>
            <th scope="col">Оцінка</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((item) => (
                  <span className={"badge m-1 bg-" + item.color} key={item._id}>
                    {item.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}</td>
              <td>
                <button className={"btn btn-danger"} onClick={()=>hendleDelete(user._id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
