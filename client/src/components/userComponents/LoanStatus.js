import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getLoanDataByCustomerId } from "../../ReduxThunk/Action";
import { Link } from "react-router-dom";

export const LoanStatus = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.data.currentUser);
  const [currentUserLoanData, setcurrentUserLoanData] = useState([]);
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/loan/byCustomerId/${user.id}`
        );
        setcurrentUserLoanData(response.data);
        console.log("Response from API:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <table className="table table-hover table-responsive">
        <thead className="table-dark">
          <tr>
            <th scope="col">LoanID</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Tenure</th>
            <th scope="col">Installment</th>
            <th scope="col">Status</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {currentUserLoanData &&
            currentUserLoanData.map((loanData, index) => (
              <tr key={index}>
                <th scope="row">{loanData.id}</th>
                <td>{loanData.loanType}</td>
                <td>{loanData.loanAmount}</td>
                <td>{loanData.tenure}</td>
                <td>{loanData.installmentAmount}</td>                <td>
                  <Link to={`${loanData.id}`}>
                    <button
                      type="button"
                      class="btn btn-sm"
                      style={{
                        color: `${
                          loanData.approvedStatus === "Approved"
                            ? "#28A745"
                            : loanData.approvedStatus === "Rejected"
                            ? "#CA2535"
                            : "#FFC107"
                        }`,
                        fontWeight: 700,
                      }}
                    >
                      {loanData.approvedStatus}
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`${loanData.id}`}>
                    <button type="button" class="btn btn-sm btn-secondary">
                      More Info
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
