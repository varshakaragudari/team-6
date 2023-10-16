import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const LoanInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loan, setLoan] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/loan/" + id);
        setLoan(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log(loan);
  return (
    <div>
      <div
        className="purple-div mx-auto w-50"
        // style={{ backgroundColor: "#3C1053" }}
      >
        <h3 className="white-text" style={{ font: "bold", color: "white" }}>
          Loan Details
        </h3>
      </div>

      <div className="container mt-5">
        <table className="table table-bordered custom-table">
          <thead className="thead-light">
            <tr>
              <th className="text-center">Loan Attributes</th>
              <th className="text-center">Loan Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="purple-text text-center">Loan ID</td>
              <td className="purpletext text-center">{loan?.id}</td>
            </tr>
            <tr>
              <td className="purple-text text-center">Loan Type</td>
              <td className="purpletext text-center">{loan?.loanType}</td>
            </tr>
            <tr>
              <td className="purple-text text-center">Rate of Interest</td>
              <td className="purpletext text-center">
                {loan?.rateOfInterest}%
              </td>
            </tr>
            <tr>
              <td className="purple-text text-center">Loan Date</td>
              <td className="purpletext text-center">{loan?.loanDate}</td>
            </tr>
            <tr>
              <td className="purple-text text-center">Age of User</td>
              <td className="purpletext text-center">{loan?.age}</td>
            </tr>
            <tr>
              <td className="purple-text text-center">Income</td>
              <td className="purpletext text-center">
                ₹ {loan?.income} / month
              </td>
            </tr>
            <tr>
              <td className="purple-text text-center">Loan Amount</td>
              <td className="purpletext text-center">₹{loan?.loanAmount}</td>
            </tr>
            <tr>
              <td className="purple-text text-center">Documents</td>
              <td className="purpletext text-center">
                <a href={loan?.docs}>{loan?.docs}</a>
              </td>
            </tr>
            <tr>
              <td className="purple-text text-center">Tenure</td>
              <td className="purpletext text-center">{loan?.tenure}</td>
            </tr>
            <tr>
              <td className="purple-text text-center">Reason for Loan</td>
              <td className="purpletext text-center">{loan?.reasonForLoan}</td>
            </tr>
            <tr>
              <td className="purple-text text-center">Installment Amount</td>
              <td className="purpletext text-center">
                ₹{loan?.installmentAmount}
              </td>
            </tr>
            <tr>
              <td className="purple-text text-center">Total Installments</td>
              <td className="purpletext text-center">
                {loan?.totalNumberOfInstallments}
              </td>
            </tr>
            <tr>
              <td className="purple-text text-center">Installments Made</td>
              <td className="purpletext text-center">
                {loan?.totalNumberOfInstallmentsDone}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
    </div>
  );
};

export default LoanInfo;
