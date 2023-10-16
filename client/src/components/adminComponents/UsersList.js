import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9090/customers")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <div className="mx-20 flex gap-5 my-24"></div>
      <table className="table table-hover table-responsive">
        <thead className="table-dark">
          <tr>
            <th scope="col">CustomerID</th>
            <th scope="col">Name</th>
            <th scope="col">Account No.</th>
            <th scope="col">IFSC</th>
            <th scope="col">Phone No.</th>
            <th scope="col">More Info</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {users.map((user, id) => {
            return (
              <tr>
                <th scope="row">{user.userName}</th>
                <td>{user.customerName}</td>
                <td>{user.accountNumber}</td>
                <td>{user.ifsc}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  <Link to={`${user.id}`}>
                    <button className="btn btn-sm btn-secondary">
                      More Info
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
