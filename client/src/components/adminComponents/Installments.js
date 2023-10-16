import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Installments = () => {
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/installments")
      .then((res) => {
        setInstallments(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <table className="table table-hover table-responsive">
        <thead className="table-dark">
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">LoanID</th>
            <th scope="col">CustomerID</th>
            <th scope="col">Amount Paid</th>
            <th scope="col">Amount Left</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {installments.map((i, id) => {
            return (
              <tr>
                <th scope="row">{id + 1}</th>
                <td>{i.loanId}</td>
                <td>{i.customerId}</td>
                <td>{i.amountToBePaid}</td>
                <td>{i.amountLeft}</td>
                <td>{i.installmentDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
