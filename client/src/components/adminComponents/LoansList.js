import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const LoansList = () => {
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

  return (
    <div>
      <table className="table table-hover table-responsive">
        <thead className="table-dark">
          <tr>
            <th scope="col">LoanID</th>
            <th scope="col">UserID</th>
            <th scope="col">Customer</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Interest</th>
            <th scope="col">Installment</th>
            <th scope="col">Status</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {loans.map((loan, id) => {
            return (
              <tr class="align-middle">
                <th scope="row">{loan.id}</th>
                <td>{loan.customer.id}</td>
                <td>{loan.customer.customerName}</td>
                <td>{loan.loanType}</td>
                <td>{loan.loanAmount}</td>
                <td>{loan.rateOfInterest}</td>
                {/* <td>{loan.tenure}</td> */}
                <td>{loan.installmentAmount}</td>

                <td>
                  <Link to={`${loan.id}`}>
                    <button
                      type="button"
                      class="btn btn-sm"
                      style={{
                        color: `${
                          loan.approvedStatus === "Approved"
                            ? "#28A745"
                            : loan.approvedStatus === "Rejected"
                            ? "#CA2535"
                            : "#FFC107"
                        }`,
                        fontWeight: 700,
                      }}
                    >
                      {loan.approvedStatus}
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`${loan.id}`}>
                    <button type="button" class="btn btn-sm btn-secondary">
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
