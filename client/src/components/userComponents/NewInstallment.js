import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const NewInstallment = () => {
  const user = useSelector((state) => state.data.currentUser);
  const [currentUserLoanData, setcurrentUserLoanData] = useState([]);

  const [installment, setInstallment] = useState({});
  console.log(user);

  const [done, setDone] = useState(false);
  const [message, setMessage] = useState("");

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
  console.log(currentUserLoanData);

  const approvedLoans = currentUserLoanData.filter(
    (loan) => loan.approvedStatus === "Approved"
  );

  const pay = async (loanData) => {
    console.log(loanData);
    const obj = {
      customerId: loanData.customer.id,
      loanId: loanData.id,
      amountToBePaid: loanData.installmentAmount,
      amountLeft:
        (loanData.totalNumberOfInstallments -
          loanData.totalNumberOfInstallmentsDone) *
        loanData.installmentAmount,
      installmentDate: new Date(),
    };
    try {
      const res = await axios.put(
        "http://localhost:8080/loan/increament/" + obj.loanId
      );
      console.log(res);
      const response = await axios.post(
        "http://localhost:8080/installments/",
        obj
      );
      setInstallment(response.data);
      console.log(installment);

      // const res3=await axios.put()
    } catch (e) {
      console.log(e);
    }
    // alert(`${loanData.installmentAmount} : installment done`);

    setDone(true);
    setMessage(`Installment Done : ${loanData.installmentAmount}`);
  };
  return (
    <div>
      {done && (
        <div
          class="w-100 mx-auto alert alert-success alert-dismissible fade show d-flex justify-content-between"
          role="alert"
        >
          <div>
            <strong>{message}</strong>
          </div>
          <button
            type="button"
            className="close btn btn-secondary btn-sm"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              setDone(false);
            }}
          >
            Close
          </button>
        </div>
      )}

      <table className="table table-hover table-responsive">
        <thead className="table-dark">
          <tr>
            <th scope="col">LoanID</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Tenure</th>
            <th scope="col">Installment</th>
            <th scope="col">Status</th>
            <th scope="col">Pay Installment</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {approvedLoans &&
            approvedLoans.map((loanData, index) => (
              <tr key={index}>
                <th scope="row">{loanData.id}</th>
                <td>{loanData.loanType}</td>
                <td>{loanData.loanAmount}</td>
                <td>{loanData.tenure}</td>
                <td>{loanData.installmentAmount}</td>{" "}
                <td>
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
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-sm btn-secondary"
                    onClick={() => pay(loanData)}
                  >
                    Pay Your Installment
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
