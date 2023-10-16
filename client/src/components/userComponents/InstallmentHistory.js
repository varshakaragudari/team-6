import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const InstallmentHistory = () => {
  const [currentUserInstallmentData, setcurrentUserInstallmentData] = useState(
    []
  );
  const [currentUserLoanData, setcurrentUserLoanData] = useState([]);

  const dispatch = useDispatch();
  let user = useSelector((state) => state.data.currentUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(user);

        // Fetch installment data
        const installmentResponse = await axios.get(
          `http://localhost:8080/installments/byCustomerId/${user.id}`
        );
        setcurrentUserInstallmentData(installmentResponse.data);
        console.log(currentUserInstallmentData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(currentUserInstallmentData);

  return (
    <div>
      <table className="table table-hover table-responsive">
        <thead className="table-dark">
          <tr>
            <th scope="col">LoanId</th>
            <th scope="col">Installment</th>
            <th scope="col">Amount Left</th>
            <th scope="col">Installment Date</th>
          </tr>
        </thead>
        <tbody>
          {currentUserInstallmentData &&
            currentUserInstallmentData.map((installmentData, index) => (
              <tr key={index}>
                <th scope="row">{installmentData.loanId}</th>
                <td>{installmentData.amountToBePaid}</td>
                <td>{installmentData.amountLeft}</td>
                <td>{installmentData.installmentDate}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
