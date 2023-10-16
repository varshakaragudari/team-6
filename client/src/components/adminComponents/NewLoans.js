import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const NewLoans = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/loan")
      .then((res) => {
        setLoans(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const pendingLoans = loans.filter(
    (loan) => loan.approvedStatus === "Pending"
  );

  console.log(pendingLoans);

  return (
    <div>
      <table className="table table-hover table-responsive">
        <thead className="table-dark">
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">CustomerID</th>
            <th scope="col">Customer</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Tenure</th>
            <th scope="col">LoanID</th>
            <th scope="col">Status</th>
            <th scope="col">Approve/Reject</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {pendingLoans.map((loan, id) => {
            return (
              <tr>
                <th scope="row">{id + 1}</th>
                <td>{loan.customer.id}</td>
                <td>{loan.customer.customerName}</td>
                <td>{loan.loanType}</td>
                <td>{loan.loanAmount}</td>
                <td>{loan.tenure}</td>
                <td>{loan.id}</td>

                <td>
                  <button
                    type="button"
                    class="btn btn-sm"
                    style={{
                      color: "#FFC107",
                      borderColor: "#FFC107",
                      fontWeight: 700,
                    }}
                  >
                    {loan.approvedStatus}
                  </button>
                </td>
                <td>
                  <Link to={`../loans/${loan.id}`}>
                    <button type="button" class="btn btn-sm btn-secondary">
                      Approve/Reject
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
